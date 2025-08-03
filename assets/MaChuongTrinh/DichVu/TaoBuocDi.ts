import { instantiate, Node, Prefab } from "cc";
import { NguoiChoi_ViTri, NuocDi, QuanCo, NuocDi_Loai } from "../MoHinh/MoHinhQuanCo";
import { HamChung } from "../Chung/HamChung";
export class TaoBuocDi{

    static doLechY: number = 16;
    static soHangTong: number = 9;
    static soCotTong: number = 8;

    static ChonQuanCo(dsQuanCo: QuanCo[], onSelect: (quanCo: QuanCo) => void) { dsQuanCo.forEach(ds => this.SuKienChonQuan(ds, onSelect)) }
    static SuKienChonQuan(quanCo: QuanCo, onSelect: (quanCo: QuanCo) => void) { quanCo.quanco_node.on(Node.EventType.TOUCH_START, () => { onSelect(quanCo) })}

    static ChonNuocDi(danhSachNuocDi: NuocDi[], onSelect: (nuocDi: NuocDi) => void) { danhSachNuocDi.forEach(ds => this.SuKienChonNuocDi(ds, onSelect)) }
    static SuKienChonNuocDi(nuocDi: NuocDi, onSelect: (nuocDi: NuocDi) => void) { nuocDi.nuocdi_node.on(Node.EventType.TOUCH_START, () => { onSelect(nuocDi) }) }

    static TaoNuocDiCuaXe(quanCo: QuanCo, dsQuanCo: QuanCo[], diChuyenMau: Prefab): NuocDi[] {
        let dsNuocDi : NuocDi[] = [];
        for(let i = quanCo.quanco_hang + 1; i <= this.soHangTong; i++){
            let kiemTraBenTren = this.KiemTraOHienTai(i, quanCo.quanco_cot, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraBenTren == NuocDi_Loai.Trong) dsNuocDi.push(this.TaoBuocDi(i, quanCo.quanco_cot, quanCo.nguoichoi_vitri, kiemTraBenTren, diChuyenMau));
            else if(kiemTraBenTren == NuocDi_Loai.PheDich){
                dsNuocDi.push(this.TaoBuocDi(i, quanCo.quanco_cot, quanCo.nguoichoi_vitri, kiemTraBenTren, diChuyenMau));
                break;
            }
            else break;
        }
        for(let i = quanCo.quanco_cot + 1; i <= this.soCotTong; i++){
            let kiemTraBenPhai = this.KiemTraOHienTai(quanCo.quanco_hang, i, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraBenPhai == NuocDi_Loai.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang, i, quanCo.nguoichoi_vitri, kiemTraBenPhai, diChuyenMau));
            else if(kiemTraBenPhai == NuocDi_Loai.PheDich){
                dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang, i, quanCo.nguoichoi_vitri, kiemTraBenPhai, diChuyenMau));
                break;
            }
            else break;
        }
        for(let i = quanCo.quanco_hang - 1; i >= 0; i--){
            let kiemTraBenDuoi = this.KiemTraOHienTai(i, quanCo.quanco_cot, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraBenDuoi == NuocDi_Loai.Trong) dsNuocDi.push(this.TaoBuocDi(i, quanCo.quanco_cot, quanCo.nguoichoi_vitri, kiemTraBenDuoi, diChuyenMau));
            else if(kiemTraBenDuoi == NuocDi_Loai.PheDich){
                dsNuocDi.push(this.TaoBuocDi(i, quanCo.quanco_cot, quanCo.nguoichoi_vitri, kiemTraBenDuoi, diChuyenMau));
                break;
            }
            else break;
        }
        for(let i = quanCo.quanco_cot - 1; i >= 0; i--){
            let kiemTraBenTrai = this.KiemTraOHienTai(quanCo.quanco_hang, i, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraBenTrai == NuocDi_Loai.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang, i, quanCo.nguoichoi_vitri, kiemTraBenTrai, diChuyenMau));
            else if(kiemTraBenTrai == NuocDi_Loai.PheDich){
                dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang, i, quanCo.nguoichoi_vitri, kiemTraBenTrai, diChuyenMau));
                break;
            }
            else break;
        }
        return dsNuocDi;
    }
    
    static TaoNuocDiCuaNgua(quanCo: QuanCo, dsQuanCo: QuanCo[], diChuyenMau: Prefab): NuocDi[]{
        let dsNuocDi : NuocDi[] = [];
        let kiemTraBenTren = this.KiemTraOHienTai(quanCo.quanco_hang + 1, quanCo.quanco_cot, quanCo.nguoichoi_vitri, dsQuanCo);
        if(kiemTraBenTren == NuocDi_Loai.Trong){
            let kiemTraTrenPhai = this.KiemTraOHienTai(quanCo.quanco_hang + 2, quanCo.quanco_cot + 1, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraTrenPhai == NuocDi_Loai.Trong || kiemTraTrenPhai == NuocDi_Loai.PheDich)
                dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang + 2, quanCo.quanco_cot + 1, quanCo.nguoichoi_vitri, kiemTraTrenPhai, diChuyenMau));
            let kiemTraTrenTrai = this.KiemTraOHienTai(quanCo.quanco_hang + 2, quanCo.quanco_cot - 1, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraTrenTrai == NuocDi_Loai.Trong || kiemTraTrenTrai == NuocDi_Loai.PheDich)
                dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang + 2, quanCo.quanco_cot - 1, quanCo.nguoichoi_vitri, kiemTraTrenTrai, diChuyenMau));
        }
        let kiemTraBenPhai = this.KiemTraOHienTai(quanCo.quanco_hang, quanCo.quanco_cot + 1, quanCo.nguoichoi_vitri, dsQuanCo);
        if(kiemTraBenPhai == NuocDi_Loai.Trong){
            let kiemTraPhaiTren = this.KiemTraOHienTai(quanCo.quanco_hang + 1, quanCo.quanco_cot + 2, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraPhaiTren == NuocDi_Loai.Trong || kiemTraPhaiTren == NuocDi_Loai.PheDich)
                dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang + 1, quanCo.quanco_cot + 2, quanCo.nguoichoi_vitri, kiemTraPhaiTren, diChuyenMau));
            let kiemTraPhaiDuoi = this.KiemTraOHienTai(quanCo.quanco_hang - 1, quanCo.quanco_cot + 2, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraPhaiDuoi == NuocDi_Loai.Trong || kiemTraPhaiDuoi == NuocDi_Loai.PheDich)
                dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang - 1, quanCo.quanco_cot + 2, quanCo.nguoichoi_vitri, kiemTraPhaiDuoi, diChuyenMau));
        }
        let kiemTraBenDuoi = this.KiemTraOHienTai(quanCo.quanco_hang - 1, quanCo.quanco_cot, quanCo.nguoichoi_vitri, dsQuanCo);
        if(kiemTraBenDuoi == NuocDi_Loai.Trong){
            let kiemTraDuoiPhai = this.KiemTraOHienTai(quanCo.quanco_hang - 2, quanCo.quanco_cot + 1, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraDuoiPhai == NuocDi_Loai.Trong || kiemTraDuoiPhai == NuocDi_Loai.PheDich)
                dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang - 2, quanCo.quanco_cot + 1, quanCo.nguoichoi_vitri, kiemTraDuoiPhai, diChuyenMau));
            let kiemTraDuoiTrai = this.KiemTraOHienTai(quanCo.quanco_hang - 2, quanCo.quanco_cot - 1, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraDuoiTrai == NuocDi_Loai.Trong || kiemTraDuoiTrai == NuocDi_Loai.PheDich)
                dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang - 2, quanCo.quanco_cot - 1, quanCo.nguoichoi_vitri, kiemTraDuoiTrai, diChuyenMau));
        }
        let kiemTraBenTrai = this.KiemTraOHienTai(quanCo.quanco_hang, quanCo.quanco_cot - 1, quanCo.nguoichoi_vitri, dsQuanCo);
        if(kiemTraBenTrai == NuocDi_Loai.Trong){
            let kiemTraTraiDuoi = this.KiemTraOHienTai(quanCo.quanco_hang - 1, quanCo.quanco_cot - 2, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraTraiDuoi == NuocDi_Loai.Trong || kiemTraTraiDuoi == NuocDi_Loai.PheDich)
                dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang - 1, quanCo.quanco_cot - 2, quanCo.nguoichoi_vitri, kiemTraTraiDuoi, diChuyenMau));
            let kiemTraTraiTren = this.KiemTraOHienTai(quanCo.quanco_hang + 1, quanCo.quanco_cot - 2, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraTraiTren == NuocDi_Loai.Trong || kiemTraTraiTren == NuocDi_Loai.PheDich)
                dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang + 1, quanCo.quanco_cot - 2, quanCo.nguoichoi_vitri, kiemTraTraiTren, diChuyenMau));
        }
        return dsNuocDi;
    }

    static TaoNuocDiCuaBo(quanCo: QuanCo, dsQuanCo: QuanCo[], diChuyenMau: Prefab): NuocDi[]{
        let dsNuocDi : NuocDi[] = [];
        let kiemTraPhaiTren = this.KiemTraOTrungHienTai(quanCo.quanco_hang + 1, quanCo.quanco_cot + 1, quanCo.nguoichoi_vitri, dsQuanCo);
        if(kiemTraPhaiTren == NuocDi_Loai.Trong){
            kiemTraPhaiTren = this.KiemTraOTrungHienTai(quanCo.quanco_hang + 2, quanCo.quanco_cot + 2, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraPhaiTren == NuocDi_Loai.Trong || kiemTraPhaiTren == NuocDi_Loai.PheDich)
                dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang + 2, quanCo.quanco_cot + 2, quanCo.nguoichoi_vitri, kiemTraPhaiTren, diChuyenMau));
        }
        let kiemTraPhaiDuoi = this.KiemTraOTrungHienTai(quanCo.quanco_hang - 1, quanCo.quanco_cot + 1, quanCo.nguoichoi_vitri, dsQuanCo);
        if(kiemTraPhaiDuoi == NuocDi_Loai.Trong){
            kiemTraPhaiDuoi = this.KiemTraOTrungHienTai(quanCo.quanco_hang - 2, quanCo.quanco_cot + 2, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraPhaiDuoi == NuocDi_Loai.Trong || kiemTraPhaiDuoi == NuocDi_Loai.PheDich) 
                dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang - 2, quanCo.quanco_cot + 2, quanCo.nguoichoi_vitri, kiemTraPhaiDuoi, diChuyenMau));
        }
        let kiemTraTraiDuoi = this.KiemTraOTrungHienTai(quanCo.quanco_hang - 1, quanCo.quanco_cot - 1, quanCo.nguoichoi_vitri, dsQuanCo);
        if(kiemTraTraiDuoi == NuocDi_Loai.Trong){
            kiemTraTraiDuoi = this.KiemTraOTrungHienTai(quanCo.quanco_hang - 2, quanCo.quanco_cot - 2, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraTraiDuoi == NuocDi_Loai.Trong || kiemTraTraiDuoi == NuocDi_Loai.PheDich)
                dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang - 2, quanCo.quanco_cot - 2, quanCo.nguoichoi_vitri, kiemTraTraiDuoi, diChuyenMau));
        }
        let kiemTraTraiTren = this.KiemTraOTrungHienTai(quanCo.quanco_hang + 1, quanCo.quanco_cot - 1, quanCo.nguoichoi_vitri, dsQuanCo);
        if(kiemTraTraiTren == NuocDi_Loai.Trong){
            let kiemTraTraiTren = this.KiemTraOTrungHienTai(quanCo.quanco_hang + 2, quanCo.quanco_cot - 2, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraTraiTren == NuocDi_Loai.Trong || kiemTraTraiTren == NuocDi_Loai.PheDich)
                dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang + 2, quanCo.quanco_cot - 2, quanCo.nguoichoi_vitri, kiemTraTraiTren, diChuyenMau));
        }
        return dsNuocDi;
    }
    static TaoNuocDiCuaSi(quanCo: QuanCo, dsQuanCo: QuanCo[], diChuyenMau: Prefab): NuocDi[]{
        let dsNuocDi : NuocDi[] = [];
        let kiemTraPhaiTren = this.KiemTraONhoHienTai(quanCo.quanco_hang + 1, quanCo.quanco_cot + 1, quanCo.nguoichoi_vitri, dsQuanCo);
        if(kiemTraPhaiTren == NuocDi_Loai.Trong || kiemTraPhaiTren == NuocDi_Loai.PheDich)
            dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang + 1, quanCo.quanco_cot + 1, quanCo.nguoichoi_vitri, kiemTraPhaiTren, diChuyenMau));
        let kiemTraPhaiDuoi = this.KiemTraONhoHienTai(quanCo.quanco_hang - 1, quanCo.quanco_cot + 1, quanCo.nguoichoi_vitri, dsQuanCo);
        if(kiemTraPhaiDuoi == NuocDi_Loai.Trong || kiemTraPhaiDuoi == NuocDi_Loai.PheDich)
            dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang - 1, quanCo.quanco_cot + 1, quanCo.nguoichoi_vitri, kiemTraPhaiDuoi, diChuyenMau));
        let kiemTraTraiDuoi = this.KiemTraONhoHienTai(quanCo.quanco_hang - 1, quanCo.quanco_cot - 1, quanCo.nguoichoi_vitri, dsQuanCo);
        if(kiemTraTraiDuoi == NuocDi_Loai.Trong || kiemTraTraiDuoi == NuocDi_Loai.PheDich)
            dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang - 1, quanCo.quanco_cot - 1, quanCo.nguoichoi_vitri, kiemTraTraiDuoi, diChuyenMau));
        let kiemTraTraiTren = this.KiemTraONhoHienTai(quanCo.quanco_hang + 1, quanCo.quanco_cot - 1, quanCo.nguoichoi_vitri, dsQuanCo);
        if(kiemTraTraiTren == NuocDi_Loai.Trong || kiemTraTraiTren == NuocDi_Loai.PheDich)
            dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang + 1, quanCo.quanco_cot - 1, quanCo.nguoichoi_vitri, kiemTraTraiTren, diChuyenMau));
        return dsNuocDi;
    }
    static TaoNuocDiCuaTuong(quanCo: QuanCo, dsQuanCo: QuanCo[], diChuyenMau: Prefab): NuocDi[]{
        let dsNuocDi : NuocDi[] = [];
        let kiemTraBenTren = this.KiemTraONhoHienTai(quanCo.quanco_hang + 1, quanCo.quanco_cot, quanCo.nguoichoi_vitri, dsQuanCo);
        if(kiemTraBenTren == NuocDi_Loai.Trong || kiemTraBenTren == NuocDi_Loai.PheDich)
            dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang + 1, quanCo.quanco_cot, quanCo.nguoichoi_vitri, kiemTraBenTren, diChuyenMau));
        let kiemTraBenPhai = this.KiemTraONhoHienTai(quanCo.quanco_hang, quanCo.quanco_cot + 1, quanCo.nguoichoi_vitri, dsQuanCo);
        if(kiemTraBenPhai == NuocDi_Loai.Trong || kiemTraBenPhai == NuocDi_Loai.PheDich)
            dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang, quanCo.quanco_cot + 1, quanCo.nguoichoi_vitri, kiemTraBenPhai, diChuyenMau));
        let kiemTraBenDuoi = this.KiemTraONhoHienTai(quanCo.quanco_hang - 1, quanCo.quanco_cot, quanCo.nguoichoi_vitri, dsQuanCo);
        if(kiemTraBenDuoi == NuocDi_Loai.Trong || kiemTraBenDuoi == NuocDi_Loai.PheDich)
            dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang - 1, quanCo.quanco_cot, quanCo.nguoichoi_vitri, kiemTraBenDuoi, diChuyenMau));
        let kiemTraBenTrai = this.KiemTraONhoHienTai( quanCo.quanco_hang, quanCo.quanco_cot - 1, quanCo.nguoichoi_vitri, dsQuanCo);
        if(kiemTraBenTrai == NuocDi_Loai.Trong || kiemTraBenTrai == NuocDi_Loai.PheDich)
            dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang, quanCo.quanco_cot -1, quanCo.nguoichoi_vitri, kiemTraBenTrai, diChuyenMau));
        return dsNuocDi;
    }

    static TaoNuocDiCuaPhao(quanCo: QuanCo, dsQuanCo: QuanCo[], diChuyenMau: Prefab): NuocDi[] {
        let dsNuocDi : NuocDi[] = [];
        for(let i = quanCo.quanco_hang + 1; i <= this.soHangTong; i++){
            let kiemTraBenTren = this.KiemTraOHienTai(i, quanCo.quanco_cot, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraBenTren == NuocDi_Loai.Trong) dsNuocDi.push(this.TaoBuocDi(i, quanCo.quanco_cot, quanCo.nguoichoi_vitri, kiemTraBenTren, diChuyenMau));
            else if(kiemTraBenTren == NuocDi_Loai.PheDich || kiemTraBenTren == NuocDi_Loai.PheTa){
                for(let y = i + 1; y <= this.soHangTong; y++){
                    kiemTraBenTren = this.KiemTraOHienTai(y, quanCo.quanco_cot, quanCo.nguoichoi_vitri, dsQuanCo);
                    if(kiemTraBenTren == NuocDi_Loai.PheDich){
                        dsNuocDi.push(this.TaoBuocDi(y, quanCo.quanco_cot, quanCo.nguoichoi_vitri, kiemTraBenTren, diChuyenMau));
                        break;
                    } else if(kiemTraBenTren == NuocDi_Loai.PheTa) break;
                } break;
            } else break;   
        }
        for(let i = quanCo.quanco_cot + 1; i <= this.soCotTong; i++){
            let kiemTraBenPhai = this.KiemTraOHienTai(quanCo.quanco_hang, i, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraBenPhai == NuocDi_Loai.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang, i, quanCo.nguoichoi_vitri, kiemTraBenPhai, diChuyenMau));
            else if(kiemTraBenPhai == NuocDi_Loai.PheDich || kiemTraBenPhai == NuocDi_Loai.PheTa){
                for(let y = i + 1; y <= this.soCotTong; y++){
                    kiemTraBenPhai = this.KiemTraOHienTai(quanCo.quanco_hang, y, quanCo.nguoichoi_vitri, dsQuanCo);
                    if(kiemTraBenPhai == NuocDi_Loai.PheDich){
                        dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang, y, quanCo.nguoichoi_vitri, kiemTraBenPhai, diChuyenMau));
                        break;
                    } else if(kiemTraBenPhai == NuocDi_Loai.PheTa) break;
                } break;
            } else break;
        }
        for(let i = quanCo.quanco_hang - 1; i >= 0; i--){
            let kiemTraBenDuoi = this.KiemTraOHienTai(i, quanCo.quanco_cot, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraBenDuoi == NuocDi_Loai.Trong) dsNuocDi.push(this.TaoBuocDi(i, quanCo.quanco_cot, quanCo.nguoichoi_vitri, kiemTraBenDuoi, diChuyenMau));
            else if(kiemTraBenDuoi == NuocDi_Loai.PheDich || kiemTraBenDuoi == NuocDi_Loai.PheTa){
                for(let y = i - 1; y >= 0; y--){
                    kiemTraBenDuoi = this.KiemTraOHienTai(y, quanCo.quanco_cot, quanCo.nguoichoi_vitri, dsQuanCo);
                    if(kiemTraBenDuoi == NuocDi_Loai.PheDich){
                        dsNuocDi.push(this.TaoBuocDi(y, quanCo.quanco_cot, quanCo.nguoichoi_vitri, kiemTraBenDuoi, diChuyenMau));
                        break;
                    } else if(kiemTraBenDuoi == NuocDi_Loai.PheTa) break;
                } break;
            } else break;
        }
        for(let i = quanCo.quanco_cot - 1; i >= 0; i--){
            let kiemTraBenTrai = this.KiemTraOHienTai(quanCo.quanco_hang, i, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraBenTrai == NuocDi_Loai.Trong) dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang, i, quanCo.nguoichoi_vitri, kiemTraBenTrai, diChuyenMau));
            else if(kiemTraBenTrai == NuocDi_Loai.PheDich || kiemTraBenTrai == NuocDi_Loai.PheTa){
                for(let y = i - 1; y >= 0; y--){
                    kiemTraBenTrai = this.KiemTraOHienTai(quanCo.quanco_hang, y, quanCo.nguoichoi_vitri, dsQuanCo);
                    if(kiemTraBenTrai == NuocDi_Loai.PheDich){
                        dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang, y, quanCo.nguoichoi_vitri, kiemTraBenTrai, diChuyenMau));
                        break;
                    } else if(kiemTraBenTrai == NuocDi_Loai.PheTa) break;
                } break;
            } else break;
        }
        return dsNuocDi;
    }

    static TaoNuocDiCuaChot(quanCo: QuanCo, dsQuanCo: QuanCo[], diChuyenMau: Prefab): NuocDi[]{
        let dsNuocDi: NuocDi[] = [];
        if(quanCo.nguoichoi_vitri == NguoiChoi_ViTri.Duoi){
            let kiemTraBenTren = this.KiemTraOHienTai(quanCo.quanco_hang + 1, quanCo.quanco_cot, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraBenTren == NuocDi_Loai.Trong || kiemTraBenTren == NuocDi_Loai.PheDich)
                dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang + 1, quanCo.quanco_cot, quanCo.nguoichoi_vitri, kiemTraBenTren, diChuyenMau));
            if(quanCo.quanco_hang > 4){
                let kiemTraBenPhai = this.KiemTraOHienTai(quanCo.quanco_hang, quanCo.quanco_cot + 1, quanCo.nguoichoi_vitri, dsQuanCo);
                if(kiemTraBenPhai == NuocDi_Loai.Trong || kiemTraBenPhai == NuocDi_Loai.PheDich)
                    dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang, quanCo.quanco_cot + 1, quanCo.nguoichoi_vitri, kiemTraBenPhai, diChuyenMau));
                let kiemTraBenTrai = this.KiemTraOHienTai(quanCo.quanco_hang, quanCo.quanco_cot - 1, quanCo.nguoichoi_vitri, dsQuanCo);
                if(kiemTraBenTrai == NuocDi_Loai.Trong || kiemTraBenTrai == NuocDi_Loai.PheDich)
                    dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang, quanCo.quanco_cot - 1, quanCo.nguoichoi_vitri, kiemTraBenTrai, diChuyenMau));
            }
        }else{
            let kiemTraBenDuoi = this.KiemTraOHienTai(quanCo.quanco_hang - 1, quanCo.quanco_cot, quanCo.nguoichoi_vitri, dsQuanCo);
            if(kiemTraBenDuoi == NuocDi_Loai.Trong || kiemTraBenDuoi == NuocDi_Loai.PheDich)
                dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang - 1, quanCo.quanco_cot, quanCo.nguoichoi_vitri, kiemTraBenDuoi, diChuyenMau));
            if(quanCo.quanco_hang < 5){
                let kiemTraBenPhai = this.KiemTraOHienTai(quanCo.quanco_hang, quanCo.quanco_cot + 1, quanCo.nguoichoi_vitri, dsQuanCo);
                if(kiemTraBenPhai == NuocDi_Loai.Trong || kiemTraBenPhai == NuocDi_Loai.PheDich)
                    dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang, quanCo.quanco_cot + 1, quanCo.nguoichoi_vitri, kiemTraBenPhai, diChuyenMau));
                let kiemTraBenTrai = this.KiemTraOHienTai(quanCo.quanco_hang, quanCo.quanco_cot - 1, quanCo.nguoichoi_vitri, dsQuanCo);
                if(kiemTraBenTrai == NuocDi_Loai.Trong || kiemTraBenTrai == NuocDi_Loai.PheDich)
                    dsNuocDi.push(this.TaoBuocDi(quanCo.quanco_hang, quanCo.quanco_cot -1, quanCo.nguoichoi_vitri, kiemTraBenTrai, diChuyenMau));
            }
        }
        return dsNuocDi;
    }

    static TaoBuocDi(nuocdi_hang: number, nuocdi_cot: number, nguoichoi_vitri: NguoiChoi_ViTri, nuocdi_loai: NuocDi_Loai, diChuyenMau: Prefab): NuocDi{
        let viTriNuocDi = HamChung.LayViTri(nuocdi_hang, nuocdi_cot);
        let nuocDi: NuocDi = {nuocdi_hang: nuocdi_hang, nuocdi_cot: nuocdi_cot, nuocdi_loai: nuocdi_loai, nguoichoi_vitri: nguoichoi_vitri, nuocdi_node: instantiate(diChuyenMau)};
        nuocDi.nuocdi_node.setPosition(viTriNuocDi.x, viTriNuocDi.y - this.doLechY);
        return nuocDi;
    }

    static KiemTraOHienTai(o_hang: number, o_cot: number, nguoichoi_vitri: NguoiChoi_ViTri, dsQuanCo: QuanCo[]): number {
        if(this.GioiHanBanCo(o_hang, o_cot)) return NuocDi_Loai.GioiHanBien;
        if(dsQuanCo.some((quanCo: QuanCo) => quanCo.quanco_cot == o_cot && quanCo.quanco_hang == o_hang && quanCo.nguoichoi_vitri == nguoichoi_vitri))
            return NuocDi_Loai.PheTa;
        if(dsQuanCo.some((quanCo: QuanCo) => quanCo.quanco_cot == o_cot && quanCo.quanco_hang == o_hang && quanCo.nguoichoi_vitri != nguoichoi_vitri))
            return NuocDi_Loai.PheDich;
        return NuocDi_Loai.Trong;
    }

    static GioiHanBanCo(hang: number, cot: number): boolean{
        let hangMin: number = 0;
        let cotMin: number = 0;
        if(hang < hangMin || hang > this.soHangTong || cot < cotMin || cot > this.soCotTong) return true;
        else return false;
    }

    static KiemTraOTrungHienTai(o_hang: number, o_cot: number, nguoichoi_vitri: NguoiChoi_ViTri, dsQuanCo: QuanCo[]): number {
        if(this.GioiHanBanCoTrung(o_hang, o_cot, nguoichoi_vitri)) return NuocDi_Loai.GioiHanBien;
        if(dsQuanCo.some((quanCo: QuanCo) => quanCo.quanco_cot == o_cot && quanCo.quanco_hang == o_hang && quanCo.nguoichoi_vitri == nguoichoi_vitri))
            return NuocDi_Loai.PheTa;
        if(dsQuanCo.some((quanCo: QuanCo) => quanCo.quanco_cot == o_cot && quanCo.quanco_hang == o_hang && quanCo.nguoichoi_vitri != nguoichoi_vitri))
            return NuocDi_Loai.PheDich;
        return NuocDi_Loai.Trong;
    }
  
    static GioiHanBanCoTrung(o_hang: number, o_cot: number, nguoichoi_vitri: NguoiChoi_ViTri): boolean{
        let hangMin : number = 0;
        let hangMax: number = 4;
        let cotMin: number = 0;
        let cotMax: number = 8;
        if(nguoichoi_vitri == NguoiChoi_ViTri.Tren){
            hangMin = 5;
            hangMax = 9;
        }
        if(o_hang < hangMin || o_hang > hangMax || o_cot < cotMin || o_cot > cotMax) return true;
        return false;
    }

    static KiemTraONhoHienTai(o_hang: number, o_cot: number, nguoichoi_vitri: NguoiChoi_ViTri, dsQuanCo: QuanCo[]): number {
        if(this.GioiHanBanCoNho(o_hang, o_cot, nguoichoi_vitri)) return NuocDi_Loai.GioiHanBien;
        if(dsQuanCo.some((quanCo: QuanCo) => quanCo.quanco_cot == o_cot && quanCo.quanco_hang == o_hang && quanCo.nguoichoi_vitri == nguoichoi_vitri))
            return NuocDi_Loai.PheTa;
        if(dsQuanCo.some((quanCo: QuanCo) => quanCo.quanco_cot == o_cot && quanCo.quanco_hang == o_hang && quanCo.nguoichoi_vitri != nguoichoi_vitri))
            return NuocDi_Loai.PheDich;
        return NuocDi_Loai.Trong;
    }
  
    static GioiHanBanCoNho(hang: number, cot: number, nguoichoi_vitri: NguoiChoi_ViTri): boolean{
        let hangMin : number = 0;
        let hangMax: number = 2;
        let cotMin: number = 3;
        let cotMax: number = 5;
        if(nguoichoi_vitri == NguoiChoi_ViTri.Tren){
            hangMin = 7;
            hangMax = 9;
        }
        if(hang < hangMin || hang > hangMax || cot < cotMin || cot > cotMax) return true;
        return false;
    }

}