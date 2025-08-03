import { _decorator, Component, Node,SpriteFrame } from "cc";
import { NguoiChoi } from "../MoHinh/MoHinhQuanCo";
import { TaoNguoiChoi } from "../DichVu/TaoNguoiChoi";
const { ccclass, property } = _decorator;

@ccclass('DoiTuongNguoiChoi')
export class DoiTuongNguoiChoi extends Component{

    @property({type: Node}) NguoiChoi: Node = null!;

    @property({ type: SpriteFrame })
    avatarNguoiChoi01: SpriteFrame = null!;
    @property({ type: SpriteFrame })
    avatarNguoiChoi02: SpriteFrame = null!;

    dsNguoiChoi: NguoiChoi[] = [];

    start() { 
       this.dsNguoiChoi = TaoNguoiChoi.TaoDanhSachNguoiChoi(this.avatarNguoiChoi01, this.avatarNguoiChoi02);
       this.dsNguoiChoi.forEach((nguoiChoi: NguoiChoi) => nguoiChoi.nguoichoi_node.setParent(this.NguoiChoi));
    }


}