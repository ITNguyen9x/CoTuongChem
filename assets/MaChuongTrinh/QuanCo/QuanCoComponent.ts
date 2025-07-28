import { _decorator, Component, instantiate, Node, Prefab, Vec2 } from 'cc';
import { Phe, LoaiQuan, QuanCo, NuocDi } from './QuanCoModel';
import { TaoQuanCo, } from '../DichVu/TaoQuanCo';
import { TaoBuocDi, } from '../DichVu/TaoBuocDi';
const { ccclass, property } = _decorator;

@ccclass('QuanCoComponent')
export class QuanCoComponent extends Component {
    @property({type: Node})
    quanCo: Node = null!;

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
    diChuyen: Node = null!;

    @property({type: Prefab})
    diChuyenMau: Prefab = null!;

    hang: number = 10;
    cot: number = 9;
    daiRongO: number = 64;
    soGiaY: number = 16;
    nuocDi: { hang: number, cot: number }[] = [];
    tatCaQuanCo: QuanCo[] = [];
    isChonQuan : boolean = false;
    dsNuocDi: Node[] = [];
    start() {
        this.TaoTatCaQuanCo();
        this.ChonQuanCo();
        this.ChonNuocCo();
    }

    TaoTatCaQuanCo(){
        this.tatCaQuanCo = TaoQuanCo.TaoToanQuanCo(this.tuongXanhMau, this.siXanhMau, this.boXanhMau, this.nguaXanhMau, this.xeXanhMau, this.phaoXanhMau,
            this.chotXanhMau, this.tuongDoMau, this.siDoMau, this.boDoMau, this.nguaDoMau, this.xeDoMau, this.phaoDoMau, this.chotDoMau);
        this.tatCaQuanCo.forEach((x: any) => x.node.setParent(this.quanCo));
    }

    ChonQuanCo(){ TaoBuocDi.ChonQuanCo(this.tatCaQuanCo, (quanCo) => this.ChonQuan(quanCo)) }

    ChonNuocCo(){ TaoBuocDi.ChonNuocDi(this.dsNuocDi, (nuocDi) => this.ChonNuocDi(nuocDi)) }

    ChonQuan(quanCo: QuanCo) {
        this.isChonQuan = !this.isChonQuan;
        if(!this.isChonQuan){
            this.diChuyen.destroyAllChildren();
            this.dsNuocDi = [];
            return;
        }
        switch(quanCo.loai){
            case LoaiQuan.Tuong:
                this.KiemTraBuocDiCuaTuong(quanCo);
                this.ChonNuocCo();
                break;
            default:
                break;
        }
    }

    ChonNuocDi(nuocDi: Node){
        console.log("nuocDi", nuocDi)

    }

    KiemTraBuocDiCuaTuong(quanCo: QuanCo) {
        if(this.kiemTraQuanCoBenTren(quanCo)){
            //let bentren: QuanCo = quanCo;
            quanCo.hang++;
            this.TaoBuocDi(quanCo);
            quanCo.hang--;
        }
        if(this.kiemTraQuanCoBenDuoi(quanCo)){
            //let benduoi: QuanCo = quanCo;
            quanCo.hang--;
            this.TaoBuocDi(quanCo);
            quanCo.hang++;
        }
        if(this.kiemTraQuanCoBenPhai(quanCo)){
            //let benphai: QuanCo = quanCo;
            quanCo.cot++;
            this.TaoBuocDi(quanCo);
            quanCo.cot--;
        }
        if(this.kiemTraQuanCoBenTrai(quanCo)){
            //let bentrai: QuanCo = quanCo;
            quanCo.cot--;
            this.TaoBuocDi(quanCo);
            quanCo.cot++;
        }
    }

    TaoBuocDi(quanCo: QuanCo){
        let vitri = this.LayViTri(quanCo.hang, quanCo.cot);
        let node: Node = instantiate(this.diChuyenMau);
        node.setPosition(vitri.x, vitri.y - this.soGiaY);
        node.setParent(this.diChuyen);
        this.dsNuocDi.push(node);
    }

    LayViTri(hang: number, cot: number): Vec2 { return new Vec2((cot - 4) * this.daiRongO, (hang - 4) * this.daiRongO); }

    GoiHanBanCo(hang: number, cot: number): boolean{
        let hangMin: number = 0;
        let cotMin: number = 0;
        let hangMax: number = 9;
        let cotMax: number = 10;
        if(hang < hangMin || hang > hangMax || cot < cotMin || cot > cotMax) return true;
        else return false;
    }

    kiemTraQuanCoBenTren(quanCo: QuanCo): boolean {
        if(this.GoiHanBanCo(quanCo.hang + 1, quanCo.cot)) return false;
        return !this.tatCaQuanCo.some(q => q.cot == quanCo.cot && q.hang === quanCo.hang + 1 && q.phe == quanCo.phe);
    }
    kiemTraQuanCoBenDuoi(quanCo: QuanCo): boolean {
        if(this.GoiHanBanCo(quanCo.hang - 1, quanCo.cot)) return false;
        return !this.tatCaQuanCo.some(q => q.cot == quanCo.cot && q.hang === quanCo.hang - 1 && q.phe == quanCo.phe);
    }
    kiemTraQuanCoBenPhai(quanCo: QuanCo): boolean {
        if(this.GoiHanBanCo(quanCo.hang, quanCo.cot + 1)) return false;
        return !this.tatCaQuanCo.some(q => q.cot == quanCo.cot + 1 && q.hang === quanCo.hang && q.phe == quanCo.phe);
    }
    kiemTraQuanCoBenTrai(quanCo: QuanCo): boolean {
        if(this.GoiHanBanCo(quanCo.hang, quanCo.cot - 1)) return false;
        return !this.tatCaQuanCo.some(q => q.cot == quanCo.cot - 1 && q.hang === quanCo.hang && q.phe == quanCo.phe);
    }
}