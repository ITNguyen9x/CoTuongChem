import { _decorator, Component, director, Node, EditBox } from 'cc';
import { APIClient } from '../../APIs/APIClient';
const { ccclass, property } = _decorator;

@ccclass('DangNhap')
export class DangNhap extends Component {

    @property(Node)
    lblDangKy: Node = null;
    @property(Node)
    lblQuenMatKhau: Node = null;
    @property(EditBox)
    editSoDienThoai: EditBox = null;
    @property(EditBox)
    editMatKhau: EditBox = null;

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

    async DangNhap(){
        let ketQua = await APIClient.DangNhap(Number(this.editSoDienThoai.string.trim()), this.editMatKhau.string);
        console.log("ketQua", ketQua)
        if(ketQua.length > 0) this.ChuyenTrangChoiGame();
    }

    ChuyenTrangChoiGame() {
        director.loadScene("ChoiGame");
    }

}