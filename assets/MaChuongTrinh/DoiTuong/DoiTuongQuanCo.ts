import { _decorator, Component, Node, Prefab, Vec2, Animation, tween, Vec3 } from 'cc';
import { LoaiQuan, QuanCo } from '../MoHinh/MoHinhQuanCo';
import { TaoQuanCo, } from '../DichVu/TaoQuanCo';
import { TaoBuocDi, } from '../DichVu/TaoBuocDi';
const { ccclass, property } = _decorator;

@ccclass('DoiTuongQuanCo')
export class DoiTuongQuanCo extends Component {
    @property({type: Node})
    QuanCo: Node = null!;

    @property({type: Prefab}) tuongXanhMau: Prefab = null!;
    @property({type: Prefab}) siXanhMau: Prefab = null!;
    @property({type: Prefab}) boXanhMau: Prefab = null!;
    @property({type: Prefab}) nguaXanhMau: Prefab = null!;
    @property({type: Prefab}) xeXanhMau: Prefab = null!;
    @property({type: Prefab}) phaoXanhMau: Prefab = null!;
    @property({type: Prefab}) chotXanhMau: Prefab = null!;
    @property({type: Prefab}) tuongDoMau: Prefab = null!;
    @property({type: Prefab}) siDoMau: Prefab = null!;
    @property({type: Prefab}) boDoMau: Prefab = null!;
    @property({type: Prefab}) nguaDoMau: Prefab = null!;
    @property({type: Prefab}) xeDoMau: Prefab = null!;
    @property({type: Prefab}) phaoDoMau: Prefab = null!;
    @property({type: Prefab}) chotDoMau: Prefab = null!;

    @property({type: Node}) NuocDi: Node = null!;

    @property({type: Prefab}) diChuyenMau: Prefab = null!;
    
    dsQuanCo: QuanCo[] = [];
    isChonQuan : boolean = false;
    dsNuocDi: Node[] = [];
    quanCoChon: QuanCo;

    start() {  this.TaoTatCaQuanCo(); }

    TaoTatCaQuanCo(){
        this.dsQuanCo = TaoQuanCo.TaoToanQuanCo(this.tuongXanhMau, this.siXanhMau, this.boXanhMau, this.nguaXanhMau, this.xeXanhMau, this.phaoXanhMau,
            this.chotXanhMau, this.tuongDoMau, this.siDoMau, this.boDoMau, this.nguaDoMau, this.xeDoMau, this.phaoDoMau, this.chotDoMau);
        this.dsQuanCo.forEach((quanCo: any) => quanCo.node.setParent(this.QuanCo));
        this.ChonQuanCo();
    }

    ChonQuanCo(){ TaoBuocDi.ChonQuanCo(this.dsQuanCo, (quanCo) => this.ChonQuan(quanCo)) }

    ChonQuan(quanCo: QuanCo) {
        this.isChonQuan = !this.isChonQuan;
        if(!this.isChonQuan){
            this.NuocDi.destroyAllChildren();
            this.dsNuocDi = [];
            return;
        }
        switch(quanCo.loai){
            case LoaiQuan.Tuong:
                this.quanCoChon = quanCo;
                this.dsNuocDi = TaoBuocDi.TaoBuocDiCuaTuong(quanCo, this.dsQuanCo, this.diChuyenMau);
                this.dsNuocDi.forEach((nuocDi: Node) =>{ nuocDi.setParent(this.NuocDi)});
                this.ChonNuocCo();
                quanCo = this.quanCoChon;
                break;
            default:
                break;
        }
    }

    ChonNuocCo(){ TaoBuocDi.ChonNuocDi(this.dsNuocDi, (nuocDi) => this.ChonNuocDi(nuocDi)) }

    ChonNuocDi(nuocDi: Node, ){
        this.DiChuyenTheoAnim(nuocDi);
        this.isChonQuan = !this.isChonQuan;
    }

    DiChuyenTheoAnim(nuocDi: Node) {
        let dx = nuocDi.x - this.quanCoChon.node.x;
        let dy = nuocDi.y - this.quanCoChon.node.y;

        let huong: string;
        if (Math.abs(dx) > Math.abs(dy)) {
            huong = dx > 0 ? 'TuongXanh_Phai' : 'TuongXanh_Trai';
            if(dx > 0) this.quanCoChon.cot += 1;
            else this.quanCoChon.cot-=1;
        } else {
            huong = dy > 0 ? 'TuongXanh_Len' : 'TuongXanh_Xuong';
            if(dy > 0) this.quanCoChon.hang +=1;
            else this.quanCoChon.hang -= 1;
        }
        const anim = this.quanCoChon.node.getComponent(Animation);
        anim?.play(huong);
        tween(this.quanCoChon.node).to(0.4, { position: new Vec3(nuocDi.x, nuocDi.y + 16, 0) }).call(() => { anim?.play("TuongXanh_Doi") }).start();
        this.NuocDi.destroyAllChildren();
        
    }
    
    daiRongO: number = 64;
    LayViTri(hang: number, cot: number): Vec2 { return new Vec2((cot - 4) * this.daiRongO, (hang - 4) * this.daiRongO); }
}