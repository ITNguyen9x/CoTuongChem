import { HamChung } from "../Chung/HamChung";
import { NuocDi, QuanCo } from "../MoHinh/MoHinhQuanCo";
export class KiemTraChieuTuong{

    NuocDiChieuTuong(quanTuong: QuanCo, dsNuocDi: NuocDi[]): boolean{
        return dsNuocDi.some((nuocdi: NuocDi) => nuocdi.nuocdi_hang == quanTuong.quanco_hang && nuocdi.nuocdi_cot == quanTuong.quanco_cot);
    }
}