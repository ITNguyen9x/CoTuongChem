import { _decorator, Component, Node, Prefab, Vec2, Animation, tween, Vec3, instantiate } from 'cc';
import { QuanCo_Loai, NuocDi, QuanCo, NguoiChoi_ViTri } from '../MoHinh/MoHinhQuanCo';
import { TaoQuanCo, } from '../DichVu/TaoQuanCo';
import { TaoBuocDi, } from '../DichVu/TaoBuocDi';
import { HamChung } from '../Chung/HamChung';
const { ccclass, property } = _decorator;

@ccclass('DoiTuongQuanCo')
export class DoiTuongQuanCo extends Component {
    @property({type: Node}) QuanCo: Node = null!;

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
    dsNuocDi: NuocDi[] = [];
    quanCoChon: QuanCo;
    soCoDuoiBiAn: number = 0;
    soCoTrenBiAn: number = 0;

    start() { 
        this.TaoDanhSachQuanCo();
    }

    TaoDanhSachQuanCo(){
        this.dsQuanCo = TaoQuanCo.TaoDanhSachQuanCo(this.tuongXanhMau, this.siXanhMau, this.boXanhMau, this.nguaXanhMau, this.xeXanhMau, this.phaoXanhMau,
            this.chotXanhMau, this.tuongDoMau, this.siDoMau, this.boDoMau, this.nguaDoMau, this.xeDoMau, this.phaoDoMau, this.chotDoMau);
        this.dsQuanCo.forEach((quanCo: QuanCo) => quanCo.quanco_node.setParent(this.QuanCo));
        TaoBuocDi.ChonQuanCo(this.dsQuanCo, (quanCo) => this.ChonQuan(quanCo));
    }


    ChonQuan(quanCo: QuanCo) {
        if(!quanCo.quanco_trangthai) return;
        this.isChonQuan = !this.isChonQuan;
        if(!this.isChonQuan){
            this.NuocDi.destroyAllChildren();
            this.dsNuocDi = [];
            return;
        }
        switch(quanCo.quanco_loai){
            case QuanCo_Loai.Tuong:
                this.quanCoChon = quanCo;
                this.dsNuocDi = TaoBuocDi.TaoNuocDiCuaTuong(quanCo, this.dsQuanCo, this.diChuyenMau);
                this.dsNuocDi.forEach((nuocDi: NuocDi) =>{ nuocDi.nuocdi_node.setParent(this.NuocDi)});
                this.ChonNuocCo();
                quanCo = this.quanCoChon;
                break;
            case QuanCo_Loai.Xe:
                this.quanCoChon = quanCo;
                this.dsNuocDi = TaoBuocDi.TaoNuocDiCuaXe(quanCo, this.dsQuanCo, this.diChuyenMau);
                this.dsNuocDi.forEach((nuocDi: NuocDi) =>{ nuocDi.nuocdi_node.setParent(this.NuocDi)});
                this.ChonNuocCo();
                quanCo = this.quanCoChon;
                break;
            case QuanCo_Loai.Ngua:
                this.quanCoChon = quanCo;
                this.dsNuocDi = TaoBuocDi.TaoNuocDiCuaNgua(quanCo, this.dsQuanCo, this.diChuyenMau);
                this.dsNuocDi.forEach((nuocDi: NuocDi) =>{ nuocDi.nuocdi_node.setParent(this.NuocDi)});
                this.ChonNuocCo();
                quanCo = this.quanCoChon;
                break;
            case QuanCo_Loai.Bo:
                this.quanCoChon = quanCo;
                this.dsNuocDi = TaoBuocDi.TaoNuocDiCuaBo(quanCo, this.dsQuanCo, this.diChuyenMau);
                this.dsNuocDi.forEach((nuocDi: NuocDi) =>{ nuocDi.nuocdi_node.setParent(this.NuocDi)});
                this.ChonNuocCo();
                quanCo = this.quanCoChon;
                break;
            case QuanCo_Loai.Si:
                this.quanCoChon = quanCo;
                this.dsNuocDi = TaoBuocDi.TaoNuocDiCuaSi(quanCo, this.dsQuanCo, this.diChuyenMau);
                this.dsNuocDi.forEach((nuocDi: NuocDi) =>{ nuocDi.nuocdi_node.setParent(this.NuocDi)});
                this.ChonNuocCo();
                quanCo = this.quanCoChon;
                break;
            case QuanCo_Loai.Phao:
                this.quanCoChon = quanCo;
                this.dsNuocDi = TaoBuocDi.TaoNuocDiCuaPhao(quanCo, this.dsQuanCo, this.diChuyenMau);
                this.dsNuocDi.forEach((nuocDi: NuocDi) =>{ nuocDi.nuocdi_node.setParent(this.NuocDi)});
                this.ChonNuocCo();
                quanCo = this.quanCoChon;
                break;
            case QuanCo_Loai.Chot:
                this.quanCoChon = quanCo;
                this.dsNuocDi = TaoBuocDi.TaoNuocDiCuaChot(quanCo, this.dsQuanCo, this.diChuyenMau);
                this.dsNuocDi.forEach((nuocDi: NuocDi) =>{ nuocDi.nuocdi_node.setParent(this.NuocDi)});
                this.ChonNuocCo();
                quanCo = this.quanCoChon;
                break;
            default:
                break;
        }
    }

    ChonNuocCo(){ TaoBuocDi.ChonNuocDi(this.dsNuocDi, (nuocDi) => this.ChonNuocDi(nuocDi)) }

    ChonNuocDi(nuocDi: NuocDi, ){
        this.DiChuyenTheoAnim(nuocDi);
        this.isChonQuan = !this.isChonQuan;
    }

    DiChuyenTheoAnim(nuocDi: NuocDi) {
        let huongDi: string = 'TuongXanh_Xuong';
        this.quanCoChon.quanco_hang  = nuocDi.nuocdi_hang;
        this.quanCoChon.quanco_cot = nuocDi.nuocdi_cot;
        if(nuocDi.nuocdi_cot> this.quanCoChon.quanco_cot) huongDi = 'TuongXanh_Phai'
        else if(nuocDi.nuocdi_cot < this.quanCoChon.quanco_cot) huongDi = 'TuongXanh_Trai';
        else if(nuocDi.nuocdi_hang > this.quanCoChon.quanco_hang) huongDi = 'TuongXanh_Len';
        else if(nuocDi.nuocdi_hang < this.quanCoChon.quanco_hang) huongDi = 'TuongXanh_Xuong';
        const anim = this.quanCoChon.quanco_node.getComponent(Animation);
        anim?.play(huongDi);
        tween(this.quanCoChon.quanco_node).to(0.4, { position: new Vec3(nuocDi.nuocdi_node.x, nuocDi.nuocdi_node.y + 16, 0) }).call(() => { anim?.play("TuongXanh_Doi") }).start();
        this.NuocDi.destroyAllChildren();
        
        this.dsQuanCo.map((quanCo: QuanCo) => {
            if(quanCo.quanco_hang == nuocDi.nuocdi_hang && quanCo.quanco_cot == nuocDi.nuocdi_cot && quanCo.nguoichoi_vitri != nuocDi.nguoichoi_vitri){
                quanCo.quanco_trangthai = false;
                let soChenhLechX = 32;
                if(quanCo.nguoichoi_vitri == NguoiChoi_ViTri.Duoi){
                    this.soCoDuoiBiAn += 1;
                    if(this.soCoDuoiBiAn < 10){
                        quanCo.quanco_hang = -1;
                        quanCo.quanco_cot = this.soCoDuoiBiAn - 1;
                    }else{
                        quanCo.quanco_hang = -2;
                        quanCo.quanco_cot = this.soCoDuoiBiAn - 9;
                    }  
                }else if(quanCo.nguoichoi_vitri == NguoiChoi_ViTri.Tren){
                    this.soCoTrenBiAn += 1;
                    if(this.soCoTrenBiAn < 10){
                        quanCo.quanco_hang = 10;
                        quanCo.quanco_cot = this.soCoTrenBiAn - 1;
                    }else{
                        quanCo.quanco_hang = 11;
                        quanCo.quanco_cot = this.soCoTrenBiAn - 9;
                    }
                    soChenhLechX = -32;
                }
                let vitri = HamChung.LayViTri(quanCo.quanco_hang, quanCo.quanco_cot);
                quanCo.quanco_node.setPosition(vitri.x, vitri.y - soChenhLechX);
            }
        });
    }
    
    daiRongO: number = 64;
}