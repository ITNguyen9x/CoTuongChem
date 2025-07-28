import { EventTouch, instantiate, Node, Prefab, Vec2 } from "cc";
import { QuanCo } from "../MoHinh/MoHinhQuanCo";

export class TaoBuocDi{

    static daiRongO: number = 64;
    static soGiaY: number = 16;

    static ChonQuanCo(danhSachQuanCo: QuanCo[], onSelect: (quanCo: QuanCo) => void) { danhSachQuanCo.forEach(ds => this.SuKienChonQuan(ds, onSelect)) }
    static SuKienChonQuan(quanCo: QuanCo, onSelect: (quanCo: QuanCo) => void) {
        quanCo.node.on(Node.EventType.TOUCH_START, (event: EventTouch) => { onSelect(quanCo) });
    }

    static ChonNuocDi(danhSachNuocDi: Node[], onSelect: (nuocDi: Node) => void) { danhSachNuocDi.forEach(ds => this.SuKienChonNuocDi(ds, onSelect)) }
    static SuKienChonNuocDi(nuocDi: Node, onSelect: (nuocDi: Node) => void) {
        nuocDi.on(Node.EventType.TOUCH_START, (event: EventTouch) => { onSelect(nuocDi) });
    }


    static TaoBuocDiCuaTuong(quanCo: QuanCo, dsQuanCo: QuanCo[], diChuyenMau: Prefab, diChuyen: Node): Node[] {
        console.log("quanco", quanCo.node.x, "-", quanCo.node.y)
        let dsNuocDi : Node[] = [];
        if(this.KiemTraBuocDiBenTren(quanCo, dsQuanCo)){
            quanCo.hang++;
            dsNuocDi.push(this.TaoBuocDi(quanCo, diChuyenMau, diChuyen));
            quanCo.hang--;
        }
        if(this.KiemTraBuocDiBenDuoi(quanCo, dsQuanCo)){
            quanCo.hang--;
            dsNuocDi.push(this.TaoBuocDi(quanCo, diChuyenMau, diChuyen));
            quanCo.hang++;
        }
        if(this.KiemTraBuocDiBenPhai(quanCo, dsQuanCo)){
            quanCo.cot++;
            dsNuocDi.push(this.TaoBuocDi(quanCo, diChuyenMau, diChuyen));
            quanCo.cot--;
        }
        if(this.KiemTraBuocDiBenTrai(quanCo, dsQuanCo)){
            quanCo.cot--;
            dsNuocDi.push(this.TaoBuocDi(quanCo, diChuyenMau, diChuyen));
            quanCo.cot++;
        }
        return dsNuocDi;
    }

    static TaoBuocDi(quanCo: QuanCo, diChuyenMau: Prefab, diChuyen: Node): Node{
        let vitri = this.LayViTri(quanCo.hang, quanCo.cot);
        let node: Node = instantiate(diChuyenMau);
        node.setPosition(vitri.x, vitri.y - this.soGiaY);
        return node;
    }

    static KiemTraBuocDiBenTren(quanCo: QuanCo, dsQuanCo: QuanCo[]): boolean {
        if(this.GoiHanBanCo(quanCo.hang + 1, quanCo.cot)) return false;
        return !dsQuanCo.some(q => q.cot == quanCo.cot && q.hang === quanCo.hang + 1 && q.phe == quanCo.phe);
    }
    static KiemTraBuocDiBenDuoi(quanCo: QuanCo, dsQuanCo: QuanCo[]): boolean {
        if(this.GoiHanBanCo(quanCo.hang - 1, quanCo.cot)) return false;
        return !dsQuanCo.some(q => q.cot == quanCo.cot && q.hang === quanCo.hang - 1 && q.phe == quanCo.phe);
    }
    static KiemTraBuocDiBenPhai(quanCo: QuanCo, dsQuanCo: QuanCo[]): boolean {
        if(this.GoiHanBanCo(quanCo.hang, quanCo.cot + 1)) return false;
        return !dsQuanCo.some(q => q.cot == quanCo.cot + 1 && q.hang === quanCo.hang && q.phe == quanCo.phe);
    }
    static KiemTraBuocDiBenTrai(quanCo: QuanCo, dsQuanCo: QuanCo[]): boolean {
        if(this.GoiHanBanCo(quanCo.hang, quanCo.cot - 1)) return false;
        return !dsQuanCo.some(q => q.cot == quanCo.cot - 1 && q.hang === quanCo.hang && q.phe == quanCo.phe);
    }
    static GoiHanBanCo(hang: number, cot: number): boolean{
        let hangMin: number = 0;
        let cotMin: number = 0;
        let hangMax: number = 9;
        let cotMax: number = 10;
        if(hang < hangMin || hang > hangMax || cot < cotMin || cot > cotMax) return true;
        else return false;
    }
    static LayViTri(hang: number, cot: number): Vec2 { return new Vec2((cot - 4) * this.daiRongO, (hang - 4) * this.daiRongO); }

}