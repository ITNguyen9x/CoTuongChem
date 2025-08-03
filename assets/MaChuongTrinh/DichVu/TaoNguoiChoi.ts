import { resources, Node, ImageAsset, Texture2D, SpriteFrame, Sprite } from "cc";
import { HamChung } from "../Chung/HamChung";
import { NguoiChoi } from "../MoHinh/MoHinhQuanCo";

export class TaoNguoiChoi{

    static TaoDanhSachNguoiChoi(avatarNguoiChoi01: SpriteFrame, avatarNguoiChoi02: SpriteFrame){
        return [
            this.TaoNguoiChoi({nguoichoi_ten: "NguoiChoi01", nguoichoi_hang: 13, nguoichoi_cot: 0, nguoichoi_node: new Node()}, avatarNguoiChoi01),
            this.TaoNguoiChoi({nguoichoi_ten: "NguoiChoi02", nguoichoi_hang: -4, nguoichoi_cot: 0, nguoichoi_node: new Node()}, avatarNguoiChoi02)
        ]
    }

    static TaoNguoiChoi(nguoiChoi: NguoiChoi, nguoichoi_avatar: SpriteFrame): NguoiChoi{
        let vitri = HamChung.LayViTri(nguoiChoi.nguoichoi_hang, nguoiChoi.nguoichoi_cot);
        nguoiChoi.nguoichoi_node.name = nguoiChoi.nguoichoi_ten;
        nguoiChoi.nguoichoi_node.setPosition(vitri.x, vitri.y);
        nguoiChoi.nguoichoi_node.addComponent(Sprite).spriteFrame = nguoichoi_avatar
        return nguoiChoi;
    }

}