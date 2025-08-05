import { _decorator, Component, director, Node } from 'cc';
import { APIClient } from '../../APIs/APIClient';
const { ccclass, property } = _decorator;

@ccclass('DangKy')
export class DangKy extends Component {

    @property(Node)
    lblDangNhap: Node = null;
    @property(Node)
    lblQuenMatKhau: Node = null;

    start() {
        this.lblDangNhap.on(Node.EventType.TOUCH_END, this.ChuyenTrangDangNhap, this);
        this.lblQuenMatKhau.on(Node.EventType.TOUCH_END, this.ChuyenTrangQuenMatKhau, this);
    }

    ChuyenTrangDangNhap() {
        director.loadScene("DangNhap");
    }
    ChuyenTrangQuenMatKhau() {
        director.loadScene("QuenMatKhau");
    }
    async DangkyTaiKhoan(){
        await APIClient.ThemTaiKhoan();
    }
}