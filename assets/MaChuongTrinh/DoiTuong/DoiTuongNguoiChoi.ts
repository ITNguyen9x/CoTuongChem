import { _decorator, Component, Node,SpriteFrame, Label } from "cc";
import { NguoiChoi } from "../MoHinh/MoHinhQuanCo";
import { TaoNguoiChoi } from "../DichVu/TaoNguoiChoi";
const { ccclass, property } = _decorator;

@ccclass('DoiTuongNguoiChoi')
export class DoiTuongNguoiChoi extends Component{

    @property({type: Node}) NguoiChoi: Node = null!;

    @property({ type: SpriteFrame })
    nguoiChoiTren_Avatar: SpriteFrame = null!;
    @property({ type: Label })
    nguoiChoiTren_ThoiGian: Label = null!;
    
    @property({ type: SpriteFrame })
    nguoiChoiDuoi_Avatar: SpriteFrame = null!;
    @property({ type: Label })
    nguoiChoiDuoi_ThoiGian: Label = null!;

    private thoiGianConLai: number = 15 * 60;
    private intervalId: number = -1;

    dsNguoiChoi: NguoiChoi[] = [];

    start() { 
       this.dsNguoiChoi = TaoNguoiChoi.TaoDanhSachNguoiChoi(this.nguoiChoiTren_Avatar, this.nguoiChoiDuoi_Avatar);
       this.dsNguoiChoi.forEach((nguoiChoi: NguoiChoi) => nguoiChoi.nguoichoi_node.setParent(this.NguoiChoi));


       this.capNhatLabel();

        // Cập nhật mỗi giây
        this.intervalId = setInterval(() => {
            this.thoiGianConLai--;
            if (this.thoiGianConLai <= 0) {
                this.thoiGianConLai = 0;
                clearInterval(this.intervalId);
            }

            this.capNhatLabel();
        }, 1000);

    }

    capNhatLabel() {
        const phut = Math.floor(this.thoiGianConLai / 60);
        const giay = this.thoiGianConLai % 60;
        const text = `${this.dinhDangSo(phut)}:${this.dinhDangSo(giay)}`;
        this.nguoiChoiTren_ThoiGian.string = text;
    }

    dinhDangSo(num: number): string {
        return num < 10 ? '0' + num : num.toString();
    }

    onDestroy() {
        if (this.intervalId !== -1) {
            clearInterval(this.intervalId);
        }
    }


}