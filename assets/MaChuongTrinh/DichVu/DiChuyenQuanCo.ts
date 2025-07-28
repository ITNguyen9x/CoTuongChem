import { EventTouch, Node } from "cc";
import { NuocDi, QuanCo } from "../QuanCo/QuanCoModel";

export class DiChuyenQuanCo{

    static ChonNhieuQuanCo(danhSachQuanCo: QuanCo[], onSelect: (quanCo: QuanCo) => void) {
        danhSachQuanCo.forEach(ds => this.ChonQuanCo(ds, onSelect));
    }
    
    static ChonQuanCo(quanCo: QuanCo, onSelect: (quanCo: QuanCo) => void) {
        quanCo.node.on(Node.EventType.TOUCH_START, (event: EventTouch) => {
            onSelect(quanCo);
        });
    }

    static ChonNhieuNuocDi(danhSachNuocDi: NuocDi[], onSelect: (nuocDi: NuocDi) => void) {
        danhSachNuocDi.forEach(ds => this.ChonNuocDi(ds, onSelect));
    }
    
    static ChonNuocDi(nuocDi: NuocDi, onSelect: (nuocDi: NuocDi) => void) {
        nuocDi.node.on(Node.EventType.TOUCH_START, (event: EventTouch) => {
            onSelect(nuocDi);
        });
    }
    
}