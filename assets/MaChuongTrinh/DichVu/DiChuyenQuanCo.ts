import { EventTouch, Node } from "cc";
import { QuanCo } from "../QuanCo/QuanCoModel";

export class DiChuyenQuanCo{

    static ChonNhieuQuanCo(danhSachQuanCo: QuanCo[], onSelect: (quanCo: QuanCo) => void) {
        danhSachQuanCo.forEach(ds => this.ChonQuanCo(ds, onSelect));
    }
    
    static ChonQuanCo(quanCo: QuanCo, onSelect: (quanCo: QuanCo) => void) {
        quanCo.node.on(Node.EventType.TOUCH_START, (event: EventTouch) => {
            onSelect(quanCo);
        });
    }
    
}