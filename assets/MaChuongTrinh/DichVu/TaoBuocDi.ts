import { instantiate, Node, Prefab } from "cc";
import { NuocDi, Phe, QuanCo, ViTri } from "../MoHinh/MoHinhQuanCo";
import { HamChung } from "../Chung/HamChung";
export class TaoBuocDi{

    static doLechY: number = 16;
    static soHangTong: number = 9;
    static soCotTong: number = 8;

    static ChonQuanCo(dsQuanCo: QuanCo[], onSelect: (quanCo: QuanCo) => void) { dsQuanCo.forEach(ds => this.SuKienChonQuan(ds, onSelect)) }
    static SuKienChonQuan(quanCo: QuanCo, onSelect: (quanCo: QuanCo) => void) { quanCo.node.on(Node.EventType.TOUCH_START, () => { onSelect(quanCo) })}

    static ChonNuocDi(danhSachNuocDi: NuocDi[], onSelect: (nuocDi: NuocDi) => void) { danhSachNuocDi.forEach(ds => this.SuKienChonNuocDi(ds, onSelect)) }
    static SuKienChonNuocDi(nuocDi: NuocDi, onSelect: (nuocDi: NuocDi) => void) { nuocDi.node.on(Node.EventType.TOUCH_START, () => { onSelect(nuocDi) }) }

    static TaoNuocDiCuaXe(quanCo: QuanCo, dsQuanCo: QuanCo[], diChuyenMau: Prefab): NuocDi[] {
        let dsNuocDi : NuocDi[] = [];
        for(let i = quanCo.hang + 1; i <= this.soHangTong; i++){
            let kiemTraBenTren = this.KiemTraOHienTai(i, quanCo.cot, quanCo.phe, dsQuanCo);
            if( kiemTraBenTren == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(i, quanCo.cot, diChuyenMau));
            // else if(kiemTraBenTren == ViTri.PheDich){
            //     dsNuocDi.push(this.TaoBuocDi(i, quanCo.cot, diChuyenMau));
            //     break;
            // }
            else break;
        }
        for(let i = quanCo.cot + 1; i <= this.soCotTong; i++){
            let kiemTraBenPhai = this.KiemTraOHienTai(quanCo.hang, i, quanCo.phe, dsQuanCo);
            if(kiemTraBenPhai == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang, i, diChuyenMau));
            // else if(kiemTraBenPhai == ViTri.PheDich){
            //     dsNuocDi.push(this.TaoBuocDi(quanCo.hang, i, diChuyenMau));
            //     break;
            // }
            else break;
        }
        for(let i = quanCo.hang - 1; i >= 0; i--){
            let kiemTraBenDuoi = this.KiemTraOHienTai(i, quanCo.cot, quanCo.phe, dsQuanCo);
            if(kiemTraBenDuoi == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(i, quanCo.cot, diChuyenMau));
            // else if(kiemTraBenDuoi == ViTri.PheDich){
            //     dsNuocDi.push(this.TaoBuocDi(i, quanCo.cot, diChuyenMau));
            //     break;
            // }
            else break;
        }
        for(let i = quanCo.cot - 1; i >= 0; i--){
            let kiemTraBenTrai = this.KiemTraOHienTai(quanCo.hang, i, quanCo.phe, dsQuanCo);
            if(kiemTraBenTrai == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang, i, diChuyenMau));
            // else if(kiemTraBenTrai == ViTri.PheDich){
            //     dsNuocDi.push(this.TaoBuocDi(quanCo.hang, i, diChuyenMau));
            //     break;
            // }
            else break;
        }
        return dsNuocDi;
    }
    
    static TaoNuocDiCuaNgua(quanCo: QuanCo, dsQuanCo: QuanCo[], diChuyenMau: Prefab): NuocDi[]{
        let dsNuocDi : NuocDi[] = [];
        let kiemTraBenTren = this.KiemTraOHienTai(quanCo.hang + 1, quanCo.cot, quanCo.phe, dsQuanCo);
        if(kiemTraBenTren == ViTri.Trong){
            let kiemTraTrenPhai = this.KiemTraOHienTai(quanCo.hang + 2, quanCo.cot + 1, quanCo.phe, dsQuanCo);
            if(kiemTraTrenPhai == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang + 2, quanCo.cot + 1, diChuyenMau));
            let kiemTraTrenTrai = this.KiemTraOHienTai(quanCo.hang + 2, quanCo.cot - 1, quanCo.phe, dsQuanCo);
            if(kiemTraTrenTrai == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang + 2, quanCo.cot - 1, diChuyenMau));
        }
        let kiemTraBenPhai = this.KiemTraOHienTai(quanCo.hang, quanCo.cot + 1, quanCo.phe, dsQuanCo);
        if(kiemTraBenPhai == ViTri.Trong){
            let kiemTraPhaiTren = this.KiemTraOHienTai(quanCo.hang + 1, quanCo.cot + 2, quanCo.phe, dsQuanCo);
            if(kiemTraPhaiTren == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang + 1, quanCo.cot + 2, diChuyenMau));
            let kiemTraPhaiDuoi = this.KiemTraOHienTai(quanCo.hang - 1, quanCo.cot + 2, quanCo.phe, dsQuanCo);
            if(kiemTraPhaiDuoi == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang - 1, quanCo.cot + 2, diChuyenMau));
        }
        let kiemTraBenDuoi = this.KiemTraOHienTai(quanCo.hang - 1, quanCo.cot, quanCo.phe, dsQuanCo);
        if(kiemTraBenDuoi == ViTri.Trong){
            let kiemTraDuoiPhai = this.KiemTraOHienTai(quanCo.hang - 2, quanCo.cot + 1, quanCo.phe, dsQuanCo);
            if(kiemTraDuoiPhai == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang - 2, quanCo.cot + 1, diChuyenMau));
            let kiemTraDuoiTrai = this.KiemTraOHienTai(quanCo.hang - 2, quanCo.cot - 1, quanCo.phe, dsQuanCo);
            if(kiemTraDuoiTrai == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang - 2, quanCo.cot - 1, diChuyenMau));
        }
        let kiemTraBenTrai = this.KiemTraOHienTai(quanCo.hang, quanCo.cot - 1, quanCo.phe, dsQuanCo);
        if(kiemTraBenTrai == ViTri.Trong){
            let kiemTraTraiDuoi = this.KiemTraOHienTai(quanCo.hang - 1, quanCo.cot - 2, quanCo.phe, dsQuanCo);
            if(kiemTraTraiDuoi == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang - 1, quanCo.cot - 2, diChuyenMau));
            let kiemTraTraiTren = this.KiemTraOHienTai(quanCo.hang + 1, quanCo.cot - 2, quanCo.phe, dsQuanCo);
            if(kiemTraTraiTren == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang + 1, quanCo.cot - 2, diChuyenMau));
        }
        return dsNuocDi;
    }

    static TaoNuocDiCuaBo(quanCo: QuanCo, dsQuanCo: QuanCo[], diChuyenMau: Prefab): NuocDi[]{
        let dsNuocDi : NuocDi[] = [];
        let kiemTraPhaiTren = this.KiemTraOTrungHienTai(quanCo.vitri, quanCo.hang + 1, quanCo.cot + 1, quanCo.phe, dsQuanCo);
        if(kiemTraPhaiTren == ViTri.Trong){
            kiemTraPhaiTren = this.KiemTraOTrungHienTai(quanCo.vitri, quanCo.hang + 2, quanCo.cot + 2, quanCo.phe, dsQuanCo);
            if(kiemTraPhaiTren == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang + 2, quanCo.cot + 2, diChuyenMau));
        }
        let kiemTraPhaiDuoi = this.KiemTraOTrungHienTai(quanCo.vitri, quanCo.hang - 1, quanCo.cot + 1, quanCo.phe, dsQuanCo);
        if(kiemTraPhaiDuoi == ViTri.Trong){
            kiemTraPhaiDuoi = this.KiemTraOTrungHienTai(quanCo.vitri, quanCo.hang - 2, quanCo.cot + 2, quanCo.phe, dsQuanCo);
            if(kiemTraPhaiDuoi == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang - 2, quanCo.cot + 2, diChuyenMau));
        }
        let kiemTraTraiDuoi = this.KiemTraOTrungHienTai(quanCo.vitri, quanCo.hang - 1, quanCo.cot - 1, quanCo.phe, dsQuanCo);
        if(kiemTraTraiDuoi == ViTri.Trong){
            kiemTraTraiDuoi = this.KiemTraOTrungHienTai(quanCo.vitri, quanCo.hang - 2, quanCo.cot - 2, quanCo.phe, dsQuanCo);
            if(kiemTraTraiDuoi == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang - 2, quanCo.cot - 2, diChuyenMau));
        }
        let kiemTraTraiTren = this.KiemTraOTrungHienTai(quanCo.vitri, quanCo.hang + 1, quanCo.cot - 1, quanCo.phe, dsQuanCo);
        if(kiemTraTraiTren == ViTri.Trong){
            let kiemTraTraiTren = this.KiemTraOTrungHienTai(quanCo.vitri, quanCo.hang + 2, quanCo.cot - 2, quanCo.phe, dsQuanCo);
            if(kiemTraTraiTren == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang + 2, quanCo.cot - 2, diChuyenMau));
        }
        return dsNuocDi;
    }
    static TaoNuocDiCuaSi(quanCo: QuanCo, dsQuanCo: QuanCo[], diChuyenMau: Prefab): NuocDi[]{
        let dsNuocDi : NuocDi[] = [];
        let kiemTraPhaiTren = this.KiemTraONhoHienTai(quanCo.vitri, quanCo.hang + 1, quanCo.cot + 1, quanCo.phe, dsQuanCo);
        if(kiemTraPhaiTren == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang + 1, quanCo.cot + 1, diChuyenMau));
        let kiemTraPhaiDuoi = this.KiemTraONhoHienTai(quanCo.vitri, quanCo.hang - 1, quanCo.cot + 1, quanCo.phe, dsQuanCo);
        if(kiemTraPhaiDuoi == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang - 1, quanCo.cot + 1, diChuyenMau));
        let kiemTraTraiDuoi = this.KiemTraONhoHienTai(quanCo.vitri, quanCo.hang - 1, quanCo.cot - 1, quanCo.phe, dsQuanCo);
        if(kiemTraTraiDuoi == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang - 1, quanCo.cot - 1, diChuyenMau));
        let kiemTraTraiTren = this.KiemTraONhoHienTai(quanCo.vitri, quanCo.hang + 1, quanCo.cot - 1, quanCo.phe, dsQuanCo);
        if(kiemTraTraiTren == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang + 1, quanCo.cot - 1, diChuyenMau));
        return dsNuocDi;
    }
    static TaoNuocDiCuaTuong(quanCo: QuanCo, dsQuanCo: QuanCo[], diChuyenMau: Prefab): NuocDi[]{
        let dsNuocDi : NuocDi[] = [];
        let kiemTraBenTren = this.KiemTraONhoHienTai(quanCo.vitri, quanCo.hang + 1, quanCo.cot, quanCo.phe, dsQuanCo);
        if(kiemTraBenTren == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang + 1, quanCo.cot, diChuyenMau));
        let kiemTraBenPhai = this.KiemTraONhoHienTai(quanCo.vitri, quanCo.hang, quanCo.cot + 1, quanCo.phe, dsQuanCo);
        if(kiemTraBenPhai == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang, quanCo.cot + 1, diChuyenMau));
        let kiemTraBenDuoi = this.KiemTraONhoHienTai(quanCo.vitri, quanCo.hang - 1, quanCo.cot, quanCo.phe, dsQuanCo);
        if(kiemTraBenDuoi == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang - 1, quanCo.cot, diChuyenMau));
        let kiemTraBenTrai = this.KiemTraONhoHienTai(quanCo.vitri, quanCo.hang, quanCo.cot - 1, quanCo.phe, dsQuanCo);
        if(kiemTraBenTrai == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang, quanCo.cot -1, diChuyenMau));
        return dsNuocDi;
    }

    static TaoBuocDi(hang: number, cot: number, diChuyenMau: Prefab): NuocDi{
        let vitri = HamChung.LayViTri(hang, cot);
        let nuocDi: NuocDi = {hang: hang, cot: cot, node: instantiate(diChuyenMau)};
        nuocDi.node.setPosition(vitri.x, vitri.y - this.doLechY);
        return nuocDi;
    }

    static KiemTraOHienTai(hang: number, cot: number, phe: Phe, dsQuanCo: QuanCo[]): number {
        if(this.GioiHanBanCo(hang, cot)) return ViTri.GioiHanBien;
        if(dsQuanCo.some(q => q.cot == cot && q.hang == hang && q.phe == phe)) return ViTri.PheTa;
        if(dsQuanCo.some(q => q.cot == cot && q.hang == hang && q.phe != phe)) return ViTri.PheDich;
        return ViTri.Trong;
    }

    static GioiHanBanCo(hang: number, cot: number): boolean{
        let hangMin: number = 0;
        let cotMin: number = 0;
        if(hang < hangMin || hang > this.soHangTong || cot < cotMin || cot > this.soCotTong) return true;
        else return false;
    }

    static KiemTraOTrungHienTai(vitri: ViTri, hang: number, cot: number, phe: Phe, dsQuanCo: QuanCo[]): number {
        if(this.GioiHanBanCoTrung(hang, cot, vitri)) return ViTri.GioiHanBien;
        if(dsQuanCo.some(q => q.cot == cot && q.hang == hang && q.phe == phe)) return ViTri.PheTa;
        if(dsQuanCo.some(q => q.cot == cot && q.hang == hang && q.phe != phe)) return ViTri.PheDich;
        return ViTri.Trong;
    }
  
    static GioiHanBanCoTrung(hang: number, cot: number, viTri: ViTri): boolean{
        let hangMin : number = 0;
        let hangMax: number = 4;
        let cotMin: number = 0;
        let cotMax: number = 8;
        if(viTri == ViTri.Tren){
            hangMin = 5;
            hangMax = 9;
        }
        if(hang < hangMin || hang > hangMax || cot < cotMin || cot > cotMax) return true;
        return false;
    }

    static KiemTraONhoHienTai(vitri: ViTri, hang: number, cot: number, phe: Phe, dsQuanCo: QuanCo[]): number {
        if(this.GioiHanBanCoNho(hang, cot, vitri)) return ViTri.GioiHanBien;
        if(dsQuanCo.some(q => q.cot == cot && q.hang == hang && q.phe == phe)) return ViTri.PheTa;
        if(dsQuanCo.some(q => q.cot == cot && q.hang == hang && q.phe != phe)) return ViTri.PheDich;
        return ViTri.Trong;
    }
  
    static GioiHanBanCoNho(hang: number, cot: number, viTri: ViTri): boolean{
        let hangMin : number = 0;
        let hangMax: number = 2;
        let cotMin: number = 3;
        let cotMax: number = 5;
        if(viTri == ViTri.Tren){
            hangMin = 7;
            hangMax = 9;
        }
        if(hang < hangMin || hang > hangMax || cot < cotMin || cot > cotMax) return true;
        return false;
    }

}