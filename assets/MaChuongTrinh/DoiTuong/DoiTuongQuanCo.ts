import { _decorator, Component, Node, Prefab, Vec2, Animation, tween, Vec3, instantiate } from 'cc';
import { LoaiQuan, NuocDi, Phe, QuanCo, ViTri } from '../MoHinh/MoHinhQuanCo';
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
        this.dsQuanCo.forEach((quanCo: any) => quanCo.node.setParent(this.QuanCo));
        TaoBuocDi.ChonQuanCo(this.dsQuanCo, (quanCo) => this.ChonQuan(quanCo)) 
    }


    ChonQuan(quanCo: QuanCo) {
        if(!quanCo.hoatdong) return;
        this.isChonQuan = !this.isChonQuan;
        if(!this.isChonQuan){
            this.NuocDi.destroyAllChildren();
            this.dsNuocDi = [];
            return;
        }
        switch(quanCo.loai){
            case LoaiQuan.Tuong:
                this.quanCoChon = quanCo;
                this.dsNuocDi = TaoBuocDi.TaoNuocDiCuaTuong(quanCo, this.dsQuanCo, this.diChuyenMau);
                this.dsNuocDi.forEach((nuocDi: NuocDi) =>{ nuocDi.node.setParent(this.NuocDi)});
                this.ChonNuocCo();
                quanCo = this.quanCoChon;
                break;
            case LoaiQuan.Xe:
                this.quanCoChon = quanCo;
                this.dsNuocDi = TaoBuocDi.TaoNuocDiCuaXe(quanCo, this.dsQuanCo, this.diChuyenMau);
                this.dsNuocDi.forEach((nuocDi: NuocDi) =>{ nuocDi.node.setParent(this.NuocDi)});
                this.ChonNuocCo();
                quanCo = this.quanCoChon;
                break;
            case LoaiQuan.Ngua:
                this.quanCoChon = quanCo;
                this.dsNuocDi = TaoBuocDi.TaoNuocDiCuaNgua(quanCo, this.dsQuanCo, this.diChuyenMau);
                this.dsNuocDi.forEach((nuocDi: NuocDi) =>{ nuocDi.node.setParent(this.NuocDi)});
                this.ChonNuocCo();
                quanCo = this.quanCoChon;
                break;
            case LoaiQuan.Bo:
                this.quanCoChon = quanCo;
                this.dsNuocDi = TaoBuocDi.TaoNuocDiCuaBo(quanCo, this.dsQuanCo, this.diChuyenMau);
                this.dsNuocDi.forEach((nuocDi: NuocDi) =>{ nuocDi.node.setParent(this.NuocDi)});
                this.ChonNuocCo();
                quanCo = this.quanCoChon;
                break;
            case LoaiQuan.Si:
                this.quanCoChon = quanCo;
                this.dsNuocDi = TaoBuocDi.TaoNuocDiCuaSi(quanCo, this.dsQuanCo, this.diChuyenMau);
                this.dsNuocDi.forEach((nuocDi: NuocDi) =>{ nuocDi.node.setParent(this.NuocDi)});
                this.ChonNuocCo();
                quanCo = this.quanCoChon;
                break;
            case LoaiQuan.Phao:
                this.quanCoChon = quanCo;
                this.dsNuocDi = TaoBuocDi.TaoNuocDiCuaPhao(quanCo, this.dsQuanCo, this.diChuyenMau);
                this.dsNuocDi.forEach((nuocDi: NuocDi) =>{ nuocDi.node.setParent(this.NuocDi)});
                this.ChonNuocCo();
                quanCo = this.quanCoChon;
                break;
            case LoaiQuan.Chot:
                this.quanCoChon = quanCo;
                this.dsNuocDi = TaoBuocDi.TaoNuocDiCuaChot(quanCo, this.dsQuanCo, this.diChuyenMau);
                this.dsNuocDi.forEach((nuocDi: NuocDi) =>{ nuocDi.node.setParent(this.NuocDi)});
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
        this.quanCoChon.hang  = nuocDi.hang;
        this.quanCoChon.cot = nuocDi.cot;
        if(nuocDi.cot> this.quanCoChon.cot) huongDi = 'TuongXanh_Phai'
        else if(nuocDi.cot < this.quanCoChon.cot) huongDi = 'TuongXanh_Trai';
        else if(nuocDi.hang > this.quanCoChon.hang) huongDi = 'TuongXanh_Len';
        else if(nuocDi.hang < this.quanCoChon.hang) huongDi = 'TuongXanh_Xuong';
        const anim = this.quanCoChon.node.getComponent(Animation);
        anim?.play(huongDi);
        tween(this.quanCoChon.node).to(0.4, { position: new Vec3(nuocDi.node.x, nuocDi.node.y + 16, 0) }).call(() => { anim?.play("TuongXanh_Doi") }).start();
        this.NuocDi.destroyAllChildren();
        
        this.dsQuanCo.map((quanCo: QuanCo) => {
            if(quanCo.hang == nuocDi.hang && quanCo.cot == nuocDi.cot && quanCo.phe != nuocDi.phe){
                quanCo.hoatdong = false;
                let soChenhLechX = 32;
                if(quanCo.vitri == ViTri.Duoi){
                    this.soCoDuoiBiAn += 1;
                    if(this.soCoDuoiBiAn < 10){
                        quanCo.hang = -1;
                        quanCo.cot = this.soCoDuoiBiAn - 1;
                    }else{
                        quanCo.hang = -2;
                        quanCo.cot = this.soCoDuoiBiAn - 9;
                    }  
                }else if(quanCo.vitri == ViTri.Tren){
                    this.soCoTrenBiAn += 1;
                    if(this.soCoTrenBiAn < 10){
                        quanCo.hang = 10;
                        quanCo.cot = this.soCoTrenBiAn - 1;
                    }else{
                        quanCo.hang = 11;
                        quanCo.cot = this.soCoTrenBiAn - 9;
                    }
                    soChenhLechX = -32;
                }
                let vitri = HamChung.LayViTri(quanCo.hang, quanCo.cot);
                quanCo.node.setPosition(vitri.x, vitri.y - soChenhLechX);
            }
        });
    }
    
    daiRongO: number = 64;
}