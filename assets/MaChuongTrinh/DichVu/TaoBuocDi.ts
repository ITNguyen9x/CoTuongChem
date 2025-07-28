import { EventTouch, Node } from "cc";
import { NuocDi, QuanCo } from "../QuanCo/QuanCoModel";

export class TaoBuocDi{

    static ChonQuanCo(danhSachQuanCo: QuanCo[], onSelect: (quanCo: QuanCo) => void) { danhSachQuanCo.forEach(ds => this.SuKienChonQuan(ds, onSelect)) }
    static SuKienChonQuan(quanCo: QuanCo, onSelect: (quanCo: QuanCo) => void) {
        quanCo.node.on(Node.EventType.TOUCH_START, (event: EventTouch) => { onSelect(quanCo) });
    }













    static ChonNuocDi(danhSachNuocDi: Node[], onSelect: (nuocDi: Node) => void) { danhSachNuocDi.forEach(ds => this.SuKienChonNuocDi(ds, onSelect)) }
    static SuKienChonNuocDi(nuocDi: Node, onSelect: (nuocDi: Node) => void) {
        nuocDi.on(Node.EventType.TOUCH_START, (event: EventTouch) => { onSelect(nuocDi) });
    }

}