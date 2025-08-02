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

    static TaoNuocDiCuaTuong(quanCo: QuanCo, dsQuanCo: QuanCo[], diChuyenMau: Prefab): NuocDi[] {
        let dsNuocDi : NuocDi[] = [];
        if(quanCo.hang < 2 && this.KiemTraBuocDiBenTren(quanCo.hang, quanCo.cot, quanCo.phe, dsQuanCo)){
            quanCo.hang++;
            dsNuocDi.push(this.TaoBuocDi(quanCo.hang, quanCo.cot, diChuyenMau));
            quanCo.hang--;
        }
        if(quanCo.hang > 0 && this.KiemTraBuocDiBenDuoi(quanCo.hang, quanCo.cot, quanCo.phe, dsQuanCo)){
            quanCo.hang--;
            dsNuocDi.push(this.TaoBuocDi(quanCo.hang, quanCo.cot, diChuyenMau));
            quanCo.hang++;
        }
        if(quanCo.cot < 5 && this.KiemTraBuocDiBenPhai(quanCo.hang, quanCo.cot, quanCo.phe, dsQuanCo)){
            quanCo.cot++;
            dsNuocDi.push(this.TaoBuocDi(quanCo.hang, quanCo.cot, diChuyenMau));
            quanCo.cot--;
        }
        if(quanCo.cot > 3 && this.KiemTraBuocDiBenTrai(quanCo.hang, quanCo.cot, quanCo.phe, dsQuanCo)){
            quanCo.cot--;
            dsNuocDi.push(this.TaoBuocDi(quanCo.hang, quanCo.cot, diChuyenMau));
            quanCo.cot++;
        }
        return dsNuocDi;
    }

    static TaoNuocDiCuaXe(quanCo: QuanCo, dsQuanCo: QuanCo[], diChuyenMau: Prefab): NuocDi[] {
        let dsNuocDi : NuocDi[] = [];
        for(let i = quanCo.hang + 1; i <= this.soHangTong; i++){
            let kiemTraBenTren = this.KiemTraOHienTai(i, quanCo.cot, quanCo.phe, dsQuanCo);
            if( kiemTraBenTren == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(i, quanCo.cot, diChuyenMau));
            else if(kiemTraBenTren == ViTri.PheDich){
                dsNuocDi.push(this.TaoBuocDi(i, quanCo.cot, diChuyenMau));
                break;
            }
            else break;
        }
        for(let i = quanCo.hang - 1; i >= 0; i--){
            let kiemTraBenDuoi = this.KiemTraOHienTai(i, quanCo.cot, quanCo.phe, dsQuanCo);
            if(kiemTraBenDuoi == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(i, quanCo.cot, diChuyenMau));
            else if(kiemTraBenDuoi == ViTri.PheDich){
                dsNuocDi.push(this.TaoBuocDi(i, quanCo.cot, diChuyenMau));
                break;
            }
            else break;
        }
        for(let i = quanCo.cot - 1; i >= 0; i--){
            let kiemTraBenTrai = this.KiemTraOHienTai(quanCo.hang, i, quanCo.phe, dsQuanCo);
            if(kiemTraBenTrai == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang, i, diChuyenMau));
            else if(kiemTraBenTrai == ViTri.PheDich){
                dsNuocDi.push(this.TaoBuocDi(quanCo.hang, i, diChuyenMau));
                break;
            }
            else break;
        }
        for(let i = quanCo.cot + 1; i <= this.soCotTong; i++){
            let kiemTraBenPhai = this.KiemTraOHienTai(quanCo.hang, i, quanCo.phe, dsQuanCo);
            if(kiemTraBenPhai == ViTri.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.hang, i, diChuyenMau));
            else if(kiemTraBenPhai == ViTri.PheDich){
                dsNuocDi.push(this.TaoBuocDi(quanCo.hang, i, diChuyenMau));
                break;
            }
            else break;
        }
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

    static KiemTraBuocDiBenTren(hang: number, cot: number, phe: Phe, dsQuanCo: QuanCo[]): boolean {
        if(this.GioiHanBanCo(hang + 1, cot)) return false;
        return !dsQuanCo.some(q => q.cot == cot && q.hang == hang + 1 && q.phe == phe);
    }
    static KiemTraBuocDiBenDuoi(hang: number, cot: number, phe: Phe, dsQuanCo: QuanCo[]): boolean {
        if(this.GioiHanBanCo(hang - 1, cot)) return false;
        return !dsQuanCo.some(q => q.cot == cot && q.hang == hang - 1 && q.phe == phe);
    }
    static KiemTraBuocDiBenPhai(hang: number, cot: number, phe: Phe, dsQuanCo: QuanCo[]): boolean {
        if(this.GioiHanBanCo(hang, cot + 1)) return false;
        return !dsQuanCo.some(q => q.cot == cot + 1 && q.hang == hang && q.phe == phe);
    }
    static KiemTraBuocDiBenTrai(hang: number, cot: number, phe: Phe, dsQuanCo: QuanCo[]): boolean {
        if(this.GioiHanBanCo(hang, cot - 1)) return false;
        return !dsQuanCo.some(q => q.cot == cot - 1 && q.hang ==hang && q.phe == phe);
    }
    static GioiHanBanCo(hang: number, cot: number): boolean{
        let hangMin: number = 0;
        let cotMin: number = 0;
        if(hang < hangMin || hang > this.soHangTong || cot < cotMin || cot > this.soCotTong) return true;
        else return false;
    }

}