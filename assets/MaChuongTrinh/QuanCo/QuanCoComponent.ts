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

    dong:number = 10;
    cot:number = 9;
    daiRongO: number = 64;
    nuocDi: {dong: number, cot: number}[] = [];
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
    TuongDiChuyen(quanCo: QuanCo): {dong: number, cot: number}[] {
        this.lick = !this.lick;
        const huongDi = [
            { dong: 1, cot: 0 },  // Đi lên
            { dong: -1, cot: 0 }, // Đi xuống
            { dong: 0, cot: 1 },  // Đi phải
            { dong: 0, cot: -1 }, // Đi trái
        ];

        const nuocDiHopLe = [];

        for (const huong of huongDi) {
            const cotMoi = quanCo.cot/64 + huong.cot;
            const dongMoi = quanCo.dong/64 + huong.dong;
            nuocDiHopLe.push({dong: dongMoi, cot: cotMoi });
            // Kiểm tra có nằm trong Cung không
            if (cotMoi >= 3 && cotMoi <= 5) {
                if (quanCo.phe == Phe.Xanh && dongMoi >= 0 && dongMoi <= 2) {
                    nuocDiHopLe.push({dong: dongMoi, cot: cotMoi });
                } else if (quanCo.phe == Phe.Do && dongMoi >= 7 && dongMoi <= 9) {
                    nuocDiHopLe.push({dong: dongMoi, cot: cotMoi });
                }
            }
        }

        return nuocDiHopLe;
    }

    hienThiNuocDi(dsNuoc: {dong: number, cot: number}[]) {
        if(!this.lick){
            this.diChuyen.destroyAllChildren();
            return;
        }
        for (const o of dsNuoc) {
            const pos = this.layViTri(o.dong, o.cot);
            const node = instantiate(this.diChuyenMau); // 1 prefab hình vòng tròn đánh dấu
            node.setPosition(pos.x, pos.y);
            node.setParent(this.diChuyen);
        }
    }

    layViTri(dong: number, cot: number): Vec2 {
        let x = (dong - 4) * this.daiRongO;
        let y = (cot - 4) * this.daiRongO;
        return new Vec2(x, y);
    }

}