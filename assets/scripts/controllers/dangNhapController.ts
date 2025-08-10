import { _decorator, Component, director, Node, EditBox, Label } from 'cc';
import { dangNhap } from '../../scripts/apis/apiXacThuc';
import { isPhoneNumber, isPasswordStrong } from '../../scripts/utils/validation';
import { ProgressBarController } from './ProgressBarController'
const { ccclass, property } = _decorator;

@ccclass('dangNhapController')
export class dangNhapController extends Component {

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
    @property(Node)
    progressBarNode: Node = null!;

    start() {
        this.lblDangKy.on(Node.EventType.TOUCH_END, this.ChuyenTrangDangKy, this);
        this.lblQuenMatKhau.on(Node.EventType.TOUCH_END, this.ChuyenTrangQuenMatKhau, this);
    }

    async DangNhap(){
        if (!isPhoneNumber(this.editSoDienThoai.string.trim()) || !isPasswordStrong(this.editMatKhau.string.trim())) 
            this.lblThongBao.string = "số điện thoại/mật khẩu không đúng định dạng"
        else{
            const progressBarController = this.progressBarNode.getComponent(ProgressBarController);
            const ketQua = await dangNhap(Number(this.editSoDienThoai.string.trim()), this.editMatKhau.string.trim());
            this.lblThongBao.string = ketQua.message;
            if(ketQua.status == 1) await progressBarController.loadSceneWithProgress('Sanh');
        }
    }

    ChuyenTrangDangKy() { director.loadScene("DangKy") }
    ChuyenTrangQuenMatKhau() { director.loadScene("QuenMatKhau") }
}