import { instantiate, Prefab, Vec2 } from "cc";
import { QuanCo_Loai, QuanCo_Mau, QuanCo, NguoiChoi_ViTri } from "../MoHinh/MoHinhQuanCo";
import { TENQUANCO } from "../Chung/TextChung";
import { HamChung } from "../Chung/HamChung";

export class TaoQuanCo{

    static TaoDanhSachQuanCo(tuongXanhMau: Prefab, siXanhMau: Prefab, boXanhMau: Prefab, nguaXanhMau: Prefab, xeXanhMau: Prefab, phaoXanhMau: Prefab, chotXanhMau: Prefab,
        tuongDoMau: Prefab, siDoMau: Prefab, boDoMau: Prefab, nguaDoMau: Prefab, xeDoMau: Prefab, phaoDoMau: Prefab, chotDoMau: Prefab
    ){
        return [
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Duoi, quanco_mau: QuanCo_Mau.Xanh, quanco_node:instantiate(tuongXanhMau),
                quanco_ten: TENQUANCO.TUONG, quanco_loai: QuanCo_Loai.Tuong, quanco_hang: 0, quanco_cot: 4 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Duoi, quanco_mau: QuanCo_Mau.Xanh, quanco_node:instantiate(siXanhMau),
                quanco_ten: TENQUANCO.SI_TRAI, quanco_loai: QuanCo_Loai.Si, quanco_hang: 0, quanco_cot: 3 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Duoi, quanco_mau: QuanCo_Mau.Xanh, quanco_node:instantiate(siXanhMau),
                quanco_ten: TENQUANCO.SI_PHAI, quanco_loai: QuanCo_Loai.Si, quanco_hang: 0, quanco_cot: 5 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Duoi, quanco_mau: QuanCo_Mau.Xanh, quanco_node:instantiate(boXanhMau),
                quanco_ten: TENQUANCO.BO_TRAI, quanco_loai: QuanCo_Loai.Bo, quanco_hang: 0, quanco_cot: 2 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Duoi, quanco_mau: QuanCo_Mau.Xanh, quanco_node:instantiate(boXanhMau),
                quanco_ten: TENQUANCO.BO_PHAI, quanco_loai: QuanCo_Loai.Bo, quanco_hang: 0, quanco_cot: 6 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Duoi, quanco_mau: QuanCo_Mau.Xanh, quanco_node:instantiate(nguaXanhMau),
                quanco_ten: TENQUANCO.NGUA_TRAI, quanco_loai: QuanCo_Loai.Ngua, quanco_hang: 0, quanco_cot: 1 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Duoi, quanco_mau: QuanCo_Mau.Xanh, quanco_node:instantiate(nguaXanhMau),
                quanco_ten: TENQUANCO.NGUA_PHAI, quanco_loai: QuanCo_Loai.Ngua, quanco_hang: 0, quanco_cot: 7 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Duoi, quanco_mau: QuanCo_Mau.Xanh, quanco_node:instantiate(xeXanhMau),
                quanco_ten: TENQUANCO.XE_TRAI, quanco_loai: QuanCo_Loai.Xe, quanco_hang: 0, quanco_cot: 0 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Duoi, quanco_mau: QuanCo_Mau.Xanh, quanco_node:instantiate(xeXanhMau),
                quanco_ten: TENQUANCO.XE_PHAI, quanco_loai: QuanCo_Loai.Xe, quanco_hang: 0, quanco_cot: 8 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Duoi, quanco_mau: QuanCo_Mau.Xanh, quanco_node:instantiate(phaoXanhMau),
                quanco_ten: TENQUANCO.PHAO_TRAI, quanco_loai: QuanCo_Loai.Phao, quanco_hang: 2, quanco_cot: 1 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Duoi, quanco_mau: QuanCo_Mau.Xanh, quanco_node:instantiate(phaoXanhMau),
                quanco_ten: TENQUANCO.PHAO_PHAI, quanco_loai: QuanCo_Loai.Phao, quanco_hang: 2, quanco_cot: 7 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Duoi, quanco_mau: QuanCo_Mau.Xanh, quanco_node:instantiate(chotXanhMau),
                quanco_ten: TENQUANCO.CHOT_MOT, quanco_loai: QuanCo_Loai.Chot, quanco_hang: 3, quanco_cot: 0 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Duoi, quanco_mau: QuanCo_Mau.Xanh, quanco_node:instantiate(chotXanhMau),
                quanco_ten: TENQUANCO.CHOT_HAI, quanco_loai: QuanCo_Loai.Chot, quanco_hang: 3, quanco_cot: 2 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Duoi, quanco_mau: QuanCo_Mau.Xanh, quanco_node:instantiate(chotXanhMau),
                quanco_ten: TENQUANCO.CHOT_BA, quanco_loai: QuanCo_Loai.Chot, quanco_hang: 3, quanco_cot: 4 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Duoi, quanco_mau: QuanCo_Mau.Xanh, quanco_node:instantiate(chotXanhMau),
                quanco_ten: TENQUANCO.CHOT_BON, quanco_loai: QuanCo_Loai.Chot, quanco_hang: 3, quanco_cot: 6 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Duoi, quanco_mau: QuanCo_Mau.Xanh, quanco_node:instantiate(chotXanhMau),
                quanco_ten: TENQUANCO.CHOT_NAM, quanco_loai: QuanCo_Loai.Chot, quanco_hang: 3, quanco_cot: 8 }),

            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Tren, quanco_mau: QuanCo_Mau.Do, quanco_node:instantiate(tuongDoMau),
                quanco_ten: TENQUANCO.TUONG, quanco_loai: QuanCo_Loai.Tuong, quanco_hang: 9, quanco_cot: 4 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Tren, quanco_mau: QuanCo_Mau.Do, quanco_node:instantiate(siDoMau),
                quanco_ten: TENQUANCO.SI_TRAI, quanco_loai: QuanCo_Loai.Si, quanco_hang: 9, quanco_cot: 3 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Tren, quanco_mau: QuanCo_Mau.Do, quanco_node:instantiate(siDoMau),
                quanco_ten: TENQUANCO.SI_PHAI, quanco_loai: QuanCo_Loai.Si, quanco_hang: 9, quanco_cot: 5 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Tren, quanco_mau: QuanCo_Mau.Do, quanco_node:instantiate(boDoMau),
                quanco_ten: TENQUANCO.BO_TRAI, quanco_loai: QuanCo_Loai.Bo, quanco_hang: 9, quanco_cot: 2 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Tren, quanco_mau: QuanCo_Mau.Do, quanco_node:instantiate(boDoMau),
                quanco_ten: TENQUANCO.BO_PHAI, quanco_loai: QuanCo_Loai.Bo, quanco_hang: 9, quanco_cot: 6 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Tren, quanco_mau: QuanCo_Mau.Do, quanco_node:instantiate(nguaDoMau),
                quanco_ten: TENQUANCO.NGUA_TRAI, quanco_loai: QuanCo_Loai.Ngua, quanco_hang: 9, quanco_cot: 1 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Tren, quanco_mau: QuanCo_Mau.Do, quanco_node:instantiate(nguaDoMau),
                quanco_ten: TENQUANCO.NGUA_PHAI, quanco_loai: QuanCo_Loai.Ngua, quanco_hang: 9, quanco_cot: 7 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Tren, quanco_mau: QuanCo_Mau.Do, quanco_node:instantiate(xeDoMau),
                quanco_ten: TENQUANCO.XE_TRAI, quanco_loai: QuanCo_Loai.Xe, quanco_hang: 9, quanco_cot: 0 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Tren, quanco_mau: QuanCo_Mau.Do, quanco_node:instantiate(xeDoMau),
                quanco_ten: TENQUANCO.XE_PHAI, quanco_loai: QuanCo_Loai.Xe, quanco_hang: 9, quanco_cot: 8 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Tren, quanco_mau: QuanCo_Mau.Do, quanco_node:instantiate(phaoDoMau),
                quanco_ten: TENQUANCO.PHAO_TRAI, quanco_loai: QuanCo_Loai.Phao, quanco_hang: 7, quanco_cot: 1 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Tren, quanco_mau: QuanCo_Mau.Do, quanco_node:instantiate(phaoDoMau),
                quanco_ten: TENQUANCO.PHAO_PHAI, quanco_loai: QuanCo_Loai.Phao, quanco_hang: 7, quanco_cot: 7 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Tren, quanco_mau: QuanCo_Mau.Do, quanco_node:instantiate(chotDoMau),
                quanco_ten: TENQUANCO.CHOT_MOT, quanco_loai: QuanCo_Loai.Chot, quanco_hang: 6, quanco_cot: 0 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Tren, quanco_mau: QuanCo_Mau.Do, quanco_node:instantiate(chotDoMau),
                quanco_ten: TENQUANCO.CHOT_HAI, quanco_loai: QuanCo_Loai.Chot, quanco_hang: 6, quanco_cot: 2 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Tren, quanco_mau: QuanCo_Mau.Do, quanco_node:instantiate(chotDoMau),
                quanco_ten: TENQUANCO.CHOT_BA, quanco_loai: QuanCo_Loai.Chot, quanco_hang: 6, quanco_cot: 4 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Tren, quanco_mau: QuanCo_Mau.Do, quanco_node:instantiate(chotDoMau),
                quanco_ten: TENQUANCO.CHOT_BON, quanco_loai: QuanCo_Loai.Chot, quanco_hang: 6, quanco_cot: 6 }),
            this.TaoMotQuanCo({quanco_trangthai: true, nguoichoi_vitri: NguoiChoi_ViTri.Tren, quanco_mau: QuanCo_Mau.Do, quanco_node:instantiate(chotDoMau),
                quanco_ten: TENQUANCO.CHOT_NAM, quanco_loai: QuanCo_Loai.Chot, quanco_hang: 6, quanco_cot: 8 })
        ]
    }
    

    static TaoMotQuanCo(quanCo: QuanCo){
        let viTriQuanCo = HamChung.LayViTri(quanCo.quanco_hang, quanCo.quanco_cot);
        quanCo.quanco_node.setPosition(viTriQuanCo.x, viTriQuanCo.y);
        return quanCo;
    }

}