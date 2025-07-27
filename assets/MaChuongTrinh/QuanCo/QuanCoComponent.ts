import { _decorator, Component, instantiate, Node, Prefab, Vec2 } from 'cc';
import { Phe, LoaiQuan, QuanCo } from './QuanCoModel';
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

    start() {
        this.TaoTatCaQuanCo();
        this.ChonQuanCo();
        
    }

    TaoTatCaQuanCo(){
        this.tatCaQuanCo = TaoQuanCo.TaoToanQuanCo(this.tuongXanhMau, this.siXanhMau, this.boXanhMau, this.nguaXanhMau, this.xeXanhMau, this.phaoXanhMau,
            this.chotXanhMau, this.tuongDoMau, this.siDoMau, this.boDoMau, this.nguaDoMau, this.xeDoMau, this.phaoDoMau, this.chotDoMau);
        this.tatCaQuanCo.forEach((x: any) => x.node.setParent(this.quanCo));
    }

    ChonQuanCo(){
       DiChuyenQuanCo.ChonNhieuQuanCo(this.tatCaQuanCo, (quanCo) => {
            this.ChonQuan(quanCo);
       });
    }

    ChonQuan(quanCo: QuanCo) {
        switch(quanCo.loai){
            case LoaiQuan.Tuong:
                this.hienThiNuocDi(this.TuongDiChuyen(quanCo));
                break;
            default:
                break;
        }
    }

    lick : boolean = false;
    TuongDiChuyen(quanCo: QuanCo): {hang: number, cot: number}[] {
        this.lick = !this.lick;
        const huongDi = [
            { hang: 1, cot: 0 },  // Đi lên
            { hang: -1, cot: 0 }, // Đi xuống
            { hang: 0, cot: 1 },  // Đi phải
            { hang: 0, cot: -1 }, // Đi trái
        ];
        const nuocDiHopLe = [];
        for (const huong of huongDi) {
            const hangMoi = quanCo.hang + huong.hang;
            const cotMoi = quanCo.cot + huong.cot;
            if(this.GoiHanBanCo(hangMoi, cotMoi)) nuocDiHopLe.push({hang: hangMoi, cot: cotMoi });
            if(this.kiemTraCoQuanBenTrai(quanCo)) console.log("có")
        }
        return nuocDiHopLe;
    }

    hienThiNuocDi(dsNuoc: {hang: number, cot: number}[]) {
        if(!this.lick){
            this.diChuyen.destroyAllChildren();
            return;
        }
        for (const o of dsNuoc) {
            const pos = this.layViTri(o.hang, o.cot);
            const node = instantiate(this.diChuyenMau);
            node.setPosition(pos.x, pos.y - 16);
            node.setParent(this.diChuyen);
        }
    }

    layViTri(hang: number, cot: number): Vec2 {
        let x = (cot - 4) * this.daiRongO;
        let y = (hang - 4) * this.daiRongO;
        return new Vec2(x, y);
    }

    GoiHanBanCo(hang: number, cot: number){
        let hangMin: number = 0;
        let cotMin: number = 0;
        let hangMax: number = 9;
        let cotMax: number = 10;
        if(hang < hangMin || hang > hangMax || cot < cotMin || cot > cotMax) return false;
        else return true;
    }

    kiemTraCoQuanBenTrai(quan: QuanCo): boolean {
        const cotTrai = quan.cot - 1;
        const hang = quan.hang;
        return this.tatCaQuanCo.some(q => q.cot === cotTrai && q.hang === hang);
    }
}