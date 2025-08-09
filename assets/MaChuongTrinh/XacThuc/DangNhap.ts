import { _decorator, Component, director, Node, EditBox, Label } from 'cc';
import { dangNhap } from '../../scripts/apis/apiXacThuc';
import { isPhoneNumber, isPasswordStrong } from '../../scripts/utils/validation';
const { ccclass, property } = _decorator;

@ccclass('DangNhap')
export class DangNhap extends Component {

    @property(Node)
    lblDangKy: Node = null;
    @property(Node)
    lblQuenMatKhau: Node = null;
    @property(Label)
    lblThongBao: Label = null;
    @property(EditBox)
    editSoDienThoai: EditBox = null;
    @property(EditBox)
    editMatKhau: EditBox = null;

    start() {
        this.lblDangKy.on(Node.EventType.TOUCH_END, this.ChuyenTrangDangKy, this);
        this.lblQuenMatKhau.on(Node.EventType.TOUCH_END, this.ChuyenTrangQuenMatKhau, this);
    }

    async DangNhap(){
        if (!isPhoneNumber(this.editSoDienThoai.string.trim()) || !isPasswordStrong(this.editMatKhau.string.trim())) 
            this.lblThongBao.string = "số điện thoại/mật khẩu không đúng định dạng"
        else{
            const ketQua = await dangNhap(Number(this.editSoDienThoai.string.trim()), this.editMatKhau.string.trim());
            this.lblThongBao.string = ketQua.message;
            if(ketQua.status == 1) this.ChuyenTrangChoiGame();
        }
    }

    ChuyenTrangDangKy() { director.loadScene("DangKy") }
    ChuyenTrangQuenMatKhau() { director.loadScene("QuenMatKhau") }
    ChuyenTrangChoiGame() { director.loadScene("ChoiGame") }
}