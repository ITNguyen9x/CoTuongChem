import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('QuenMatKhau')
export class QuenMatKhau extends Component {

    @property(Node)
    lblDangNhap: Node = null;
    @property(Node)
    lblDangKy: Node = null;

    start() {
        this.lblDangNhap.on(Node.EventType.TOUCH_END, this.ChuyenTrangDangNhap, this);
        this.lblDangKy.on(Node.EventType.TOUCH_END, this.ChuyenTrangDangKy, this);
    }

    ChuyenTrangDangNhap() {
        director.loadScene("DangNhap");
    }
    ChuyenTrangDangKy() {
        director.loadScene("DangKy");
    }
}