import { _decorator, Component, instantiate, Node, Prefab, Vec2 } from 'cc';
import { Phe, LoaiQuan, QuanCo, NuocDi } from './QuanCoModel';
import { TaoQuanCo, } from '../DichVu/TaoQuanCo';
import { DiChuyenQuanCo, } from '../DichVu/DiChuyenQuanCo';
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
    nuocDi: { hang: number, cot: number }[] = [];
    tatCaQuanCo: QuanCo[] = [];
    isChonQuan : boolean = false;
    dsNuocDi: any[] = [];
    start() {
        this.TaoTatCaQuanCo();
        this.ChonQuanCo();
        
    }

    TaoTatCaQuanCo(){
        this.tatCaQuanCo = TaoQuanCo.TaoToanQuanCo(this.tuongXanhMau, this.siXanhMau, this.boXanhMau, this.nguaXanhMau, this.xeXanhMau, this.phaoXanhMau,
            this.chotXanhMau, this.tuongDoMau, this.siDoMau, this.boDoMau, this.nguaDoMau, this.xeDoMau, this.phaoDoMau, this.chotDoMau);
        this.tatCaQuanCo.forEach((x: any) => x.node.setParent(this.quanCo));
    }

    ChonQuanCo(){ DiChuyenQuanCo.ChonNhieuQuanCo(this.tatCaQuanCo, (quanCo) => this.ChonQuan(quanCo)); }

    //ChonNuocCo(){ DiChuyenQuanCo.ChonNhieuNuocDi(this.dsNuocDi, (nuocDi) => this.ChonNuocDi(nuocDi)); }

    ChonQuan(quanCo: QuanCo) {
        this.isChonQuan = !this.isChonQuan;
        if(!this.isChonQuan){ this.diChuyen.destroyAllChildren(); return; }
        switch(quanCo.loai){
            case LoaiQuan.Tuong:
                this.HienThiNuocDi(this.dsNuocDi = this.KiemTraBuocDiCuaTuong(quanCo));
                break;
            default:
                break;
        }
    }

    HienThiNuocDi(dsNuocDi: {hang: number, cot: number}[]) {
        for (const nuocdi of dsNuocDi) {
            const vitri = this.LayViTri(nuocdi.hang, nuocdi.cot);
            const oDiChuyen = instantiate(this.diChuyenMau);
            oDiChuyen.setPosition(vitri.x, vitri.y - 16);
            oDiChuyen.setParent(this.diChuyen);
        }
    }

    KiemTraBuocDiCuaTuong(quanCo: QuanCo): {hang: number, cot: number}[] {
        const nuocDiHopLe= [];
        if(this.kiemTraQuanCoBenTren(quanCo)) nuocDiHopLe.push({hang: quanCo.hang + 1, cot: quanCo.cot });
        if(this.kiemTraQuanCoBenDuoi(quanCo)) nuocDiHopLe.push({hang: quanCo.hang - 1, cot: quanCo.cot });
        if(this.kiemTraQuanCoBenTrai(quanCo)) nuocDiHopLe.push({hang: quanCo.hang, cot: quanCo.cot - 1 });
        if(this.kiemTraQuanCoBenPhai(quanCo)) nuocDiHopLe.push({hang: quanCo.hang, cot: quanCo.cot + 1 });
        return nuocDiHopLe;
    }

    // ChonNuocDi(nuocDi: NuocDi){
    //     if(this.dsNuocDi.length > 0)
    // }

    

    LayViTri(hang: number, cot: number): Vec2 {
        let x = (cot - 4) * this.daiRongO;
        let y = (hang - 4) * this.daiRongO;
        return new Vec2(x, y);
    }

    GoiHanBanCo(hang: number, cot: number): boolean{
        let hangMin: number = 0;
        let cotMin: number = 0;
        let hangMax: number = 9;
        let cotMax: number = 10;
        if(hang < hangMin || hang > hangMax || cot < cotMin || cot > cotMax) return true;
        else return false;
    }

    kiemTraQuanCoBenTrai(quanCo: QuanCo): boolean {
        if(this.GoiHanBanCo(quanCo.hang, quanCo.cot - 1)) return false;
        return !this.tatCaQuanCo.some(q => q.cot == quanCo.cot - 1 && q.hang === quanCo.hang && q.phe == quanCo.phe);
    }

    kiemTraQuanCoBenPhai(quanCo: QuanCo): boolean {
        if(this.GoiHanBanCo(quanCo.hang, quanCo.cot + 1)) return false;
        return !this.tatCaQuanCo.some(q => q.cot == quanCo.cot + 1 && q.hang === quanCo.hang && q.phe == quanCo.phe);
    }

    kiemTraQuanCoBenTren(quanCo: QuanCo): boolean {
        if(this.GoiHanBanCo(quanCo.hang + 1, quanCo.cot)) return false;
        return !this.tatCaQuanCo.some(q => q.cot == quanCo.cot && q.hang === quanCo.hang + 1 && q.phe == quanCo.phe);
    }

    kiemTraQuanCoBenDuoi(quanCo: QuanCo): boolean {
        if(this.GoiHanBanCo(quanCo.hang - 1, quanCo.cot)) return false;
        return !this.tatCaQuanCo.some(q => q.cot == quanCo.cot && q.hang === quanCo.hang - 1 && q.phe == quanCo.phe);
    }
}