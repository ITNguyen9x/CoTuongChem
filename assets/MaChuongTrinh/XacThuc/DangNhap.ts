import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DangNhap')
export class DangNhap extends Component {

    @property(Node)
    lblDangKy: Node = null;
    @property(Node)
    lblQuenMatKhau: Node = null;

    start() {
        this.lblDangKy.on(Node.EventType.TOUCH_END, this.ChuyenTrangDangKy, this);
        this.lblQuenMatKhau.on(Node.EventType.TOUCH_END, this.ChuyenTrangQuenMatKhau, this);
    }

    ChuyenTrangDangKy() {
        director.loadScene("DangKy");
    }
    ChuyenTrangQuenMatKhau() {
        director.loadScene("QuenMatKhau");
    }
}