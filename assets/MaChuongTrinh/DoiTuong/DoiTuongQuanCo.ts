import { _decorator, Component, Node, Prefab, Vec2, Animation, tween, Vec3 } from 'cc';
import { LoaiQuan, QuanCo } from '../MoHinh/MoHinhQuanCo';
import { TaoQuanCo, } from '../DichVu/TaoQuanCo';
import { TaoBuocDi, } from '../DichVu/TaoBuocDi';
const { ccclass, property } = _decorator;

@ccclass('DoiTuongQuanCo')
export class DoiTuongQuanCo extends Component {
    @property({type: Node})
    QuanCo: Node = null!;

    @property({type: Prefab})
    tuongXanhMau: Prefab = null!;
    @property({type: Prefab})
    siXanhMau: Prefab = null!;
    @property({type: Prefab})
    boXanhMau: Prefab = null!;
    @property({type: Prefab})
    nguaXanhMau: Prefab = null!;
    @property({type: Prefab})
    xeXanhMau: Prefab = null!;
    @property({type: Prefab})
    phaoXanhMau: Prefab = null!;
    @property({type: Prefab})
    chotXanhMau: Prefab = null!;
    @property({type: Prefab})
    tuongDoMau: Prefab = null!;
    @property({type: Prefab})
    siDoMau: Prefab = null!;
    @property({type: Prefab})
    boDoMau: Prefab = null!;
    @property({type: Prefab})
    nguaDoMau: Prefab = null!;
    @property({type: Prefab})
    xeDoMau: Prefab = null!;
    @property({type: Prefab})
    phaoDoMau: Prefab = null!;
    @property({type: Prefab})
    chotDoMau: Prefab = null!;

    @property({type: Node})
    NuocDi: Node = null!;

    @property({type: Prefab})
    diChuyenMau: Prefab = null!;

    hang: number = 10;
    cot: number = 9;
    
    
    dsQuanCo: QuanCo[] = [];
    isChonQuan : boolean = false;
    dsNuocDi: Node[] = [];
    quanCoChon: QuanCo;
    start() {
        this.TaoTatCaQuanCo();
        this.ChonQuanCo();
        this.ChonNuocCo();
    }

    TaoTatCaQuanCo(){
        this.dsQuanCo = TaoQuanCo.TaoToanQuanCo(this.tuongXanhMau, this.siXanhMau, this.boXanhMau, this.nguaXanhMau, this.xeXanhMau, this.phaoXanhMau,
            this.chotXanhMau, this.tuongDoMau, this.siDoMau, this.boDoMau, this.nguaDoMau, this.xeDoMau, this.phaoDoMau, this.chotDoMau);
        this.dsQuanCo.forEach((quanCo: any) => quanCo.node.setParent(this.QuanCo));
    }

    ChonQuanCo(){ TaoBuocDi.ChonQuanCo(this.dsQuanCo, (quanCo) => this.ChonQuan(quanCo)) }

    ChonNuocCo(){ TaoBuocDi.ChonNuocDi(this.dsNuocDi, (nuocDi) => this.ChonNuocDi(nuocDi)) }

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
                this.dsNuocDi = TaoBuocDi.TaoBuocDiCuaTuong(quanCo, this.dsQuanCo, this.diChuyenMau, this.NuocDi);
                for(const x of this.dsNuocDi){
                    console.log("x: ", x.x, "-", x.y)
                }
                this.dsNuocDi.forEach((nuocDi: Node) =>{ nuocDi.setParent(this.NuocDi)});
                this.ChonNuocCo();
                break;
            default:
                break;
        }
    }

    ChonNuocDi(nuocDi: Node){
        // console.log("nuocDi: ", nuocDi.x, "-", nuocDi.y);
        // console.log("quanCoChon", this.quanCoChon)
        this.DiChuyenTheoAnim(nuocDi, this.quanCoChon);
    }
    DiChuyenTheoAnim(nuocDi: Node, quanCoChon : QuanCo) {
        //from: Vec2, to: Vec2
        // 1. Tính hướng di chuyển
        let dx = nuocDi.x - quanCoChon.node.x;
        let dy = nuocDi.y - quanCoChon.node.y;

        let huong: string;
        if (Math.abs(dx) > Math.abs(dy)) {
            huong = dx > 0 ? 'TuongXanh_Phai' : 'TuongXanh_Trai';
        } else {
            huong = dy > 0 ? 'TuongXanh_Len' : 'TuongXanh_Xuong';
        }

        // 2. Play animation tương ứng
        const anim = quanCoChon.node.getComponent(Animation);
        anim?.play(huong); // Ví dụ: "DiTrai", "DiPhai"

        // 3. Set vị trí bắt đầu
        //quanCoChon.node.setPosition(quanCoChon.node.x, quanCoChon.node.y);
        

        // 4. Tween di chuyển đến đích
        tween(quanCoChon.node).to(0.4, { position: new Vec3(nuocDi.x, nuocDi.y, 0) }).call(() => { anim?.play("TuongXanh_Doi") }).start();
        this.dsNuocDi = [];
        this.NuocDi.destroyAllChildren();
        
    }
    daiRongO: number = 64;
    LayViTri(hang: number, cot: number): Vec2 { return new Vec2((cot - 4) * this.daiRongO, (hang - 4) * this.daiRongO); }
}