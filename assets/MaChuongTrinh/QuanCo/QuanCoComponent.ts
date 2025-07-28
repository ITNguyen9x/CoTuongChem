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
        this.tatCaQuanCo.forEach((quanCo: any) => quanCo.node.setParent(this.quanCo));
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
                TaoBuocDi.TaoBuocDiCuaTuong(quanCo, this.tatCaQuanCo, this.diChuyenMau, this.diChuyen).forEach((nuocDi: Node) =>{ nuocDi.setParent(this.diChuyen)});
                this.ChonNuocCo();
                break;
            default:
                break;
        }
    }

    ChonNuocDi(nuocDi: Node){
        console.log("nuocDi", nuocDi)

    }

    

    
    

    

    
}