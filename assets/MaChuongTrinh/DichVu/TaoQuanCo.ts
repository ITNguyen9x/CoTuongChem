import { instantiate, Prefab, Vec2 } from "cc";
import { LoaiQuan, Phe, QuanCo, ViTri } from "../MoHinh/MoHinhQuanCo";
import { TENQUANCO } from "../Chung/TextChung";
import { HamChung } from "../Chung/HamChung";

export class TaoQuanCo{

    static TaoDanhSachQuanCo(tuongXanhMau: Prefab, siXanhMau: Prefab, boXanhMau: Prefab, nguaXanhMau: Prefab, xeXanhMau: Prefab, phaoXanhMau: Prefab, chotXanhMau: Prefab,
        tuongDoMau: Prefab, siDoMau: Prefab, boDoMau: Prefab, nguaDoMau: Prefab, xeDoMau: Prefab, phaoDoMau: Prefab, chotDoMau: Prefab
    ){
        return [
            this.TaoMotQuanCo({vitri: ViTri.Duoi, phe: Phe.Xanh, node:instantiate(tuongXanhMau),  ten: TENQUANCO.TUONG, loai: LoaiQuan.Tuong, hang: 0, cot: 4 }),
            this.TaoMotQuanCo({vitri: ViTri.Duoi, phe: Phe.Xanh, node:instantiate(siXanhMau),  ten: TENQUANCO.SI_TRAI, loai: LoaiQuan.Si, hang: 0, cot: 3 }),
            this.TaoMotQuanCo({vitri: ViTri.Duoi, phe: Phe.Xanh, node:instantiate(siXanhMau),  ten: TENQUANCO.SI_PHAI, loai: LoaiQuan.Si, hang: 0, cot: 5 }),
            this.TaoMotQuanCo({vitri: ViTri.Duoi, phe: Phe.Xanh, node:instantiate(boXanhMau),  ten: TENQUANCO.BO_TRAI, loai: LoaiQuan.Bo, hang: 0, cot: 2 }),
            this.TaoMotQuanCo({vitri: ViTri.Duoi, phe: Phe.Xanh, node:instantiate(boXanhMau),  ten: TENQUANCO.BO_PHAI, loai: LoaiQuan.Bo, hang: 0, cot: 6 }),
            this.TaoMotQuanCo({vitri: ViTri.Duoi, phe: Phe.Xanh, node:instantiate(nguaXanhMau),  ten: TENQUANCO.NGUA_TRAI, loai: LoaiQuan.Ngua, hang: 0, cot: 1 }),
            this.TaoMotQuanCo({vitri: ViTri.Duoi, phe: Phe.Xanh, node:instantiate(nguaXanhMau),  ten: TENQUANCO.NGUA_PHAI, loai: LoaiQuan.Ngua, hang: 0, cot: 7 }),
            this.TaoMotQuanCo({vitri: ViTri.Duoi, phe: Phe.Xanh, node:instantiate(xeXanhMau),  ten: TENQUANCO.XE_TRAI, loai: LoaiQuan.Xe, hang: 0, cot: 0 }),
            this.TaoMotQuanCo({vitri: ViTri.Duoi, phe: Phe.Xanh, node:instantiate(xeXanhMau),  ten: TENQUANCO.XE_PHAI, loai: LoaiQuan.Xe, hang: 0, cot: 8 }),
            this.TaoMotQuanCo({vitri: ViTri.Duoi, phe: Phe.Xanh, node:instantiate(phaoXanhMau),  ten: TENQUANCO.PHAO_TRAI, loai: LoaiQuan.Phao, hang: 2, cot: 1 }),
            this.TaoMotQuanCo({vitri: ViTri.Duoi, phe: Phe.Xanh, node:instantiate(phaoXanhMau),  ten: TENQUANCO.PHAO_PHAI, loai: LoaiQuan.Phao, hang: 2, cot: 7 }),
            // this.TaoMotQuanCo({vitri: ViTri.Duoi, phe: Phe.Xanh, node:instantiate(chotXanhMau),  ten: TENQUANCO.CHOT_MOT, loai: LoaiQuan.Chot, hang: 3, cot: 0 }),
            // this.TaoMotQuanCo({vitri: ViTri.Duoi, phe: Phe.Xanh, node:instantiate(chotXanhMau),  ten: TENQUANCO.CHOT_HAI, loai: LoaiQuan.Chot, hang: 3, cot: 2 }),
            // this.TaoMotQuanCo({vitri: ViTri.Duoi, phe: Phe.Xanh, node:instantiate(chotXanhMau),  ten: TENQUANCO.CHOT_BA, loai: LoaiQuan.Chot, hang: 3, cot: 4 }),
            // this.TaoMotQuanCo({vitri: ViTri.Duoi, phe: Phe.Xanh, node:instantiate(chotXanhMau),  ten: TENQUANCO.CHOT_BON, loai: LoaiQuan.Chot, hang: 3, cot: 6 }),
            // this.TaoMotQuanCo({vitri: ViTri.Duoi, phe: Phe.Xanh, node:instantiate(chotXanhMau),  ten: TENQUANCO.CHOT_NAM, loai: LoaiQuan.Chot, hang: 3, cot: 8 }),

            this.TaoMotQuanCo({vitri: ViTri.Tren, phe: Phe.Do, node:instantiate(tuongDoMau),  ten: TENQUANCO.TUONG, loai: LoaiQuan.Tuong, hang: 9, cot: 4 }),
            this.TaoMotQuanCo({vitri: ViTri.Tren, phe: Phe.Do, node:instantiate(siDoMau),  ten: TENQUANCO.SI_TRAI, loai: LoaiQuan.Si, hang: 9, cot: 3 }),
            this.TaoMotQuanCo({vitri: ViTri.Tren, phe: Phe.Do, node:instantiate(siDoMau),  ten: TENQUANCO.SI_PHAI, loai: LoaiQuan.Si, hang: 9, cot: 5 }),
            this.TaoMotQuanCo({vitri: ViTri.Tren, phe: Phe.Do, node:instantiate(boDoMau),  ten: TENQUANCO.BO_TRAI, loai: LoaiQuan.Bo, hang: 9, cot: 2 }),
            this.TaoMotQuanCo({vitri: ViTri.Tren, phe: Phe.Do, node:instantiate(boDoMau),  ten: TENQUANCO.BO_PHAI, loai: LoaiQuan.Bo, hang: 9, cot: 6 }),
            this.TaoMotQuanCo({vitri: ViTri.Tren, phe: Phe.Do, node:instantiate(nguaDoMau),  ten: TENQUANCO.NGUA_TRAI, loai: LoaiQuan.Ngua, hang: 9, cot: 1 }),
            this.TaoMotQuanCo({vitri: ViTri.Tren, phe: Phe.Do, node:instantiate(nguaDoMau),  ten: TENQUANCO.NGUA_PHAI, loai: LoaiQuan.Ngua, hang: 9, cot: 7 }),
            this.TaoMotQuanCo({vitri: ViTri.Tren, phe: Phe.Do, node:instantiate(xeDoMau),  ten: TENQUANCO.XE_TRAI, loai: LoaiQuan.Xe, hang: 9, cot: 0 }),
            this.TaoMotQuanCo({vitri: ViTri.Tren, phe: Phe.Do, node:instantiate(xeDoMau),  ten: TENQUANCO.XE_PHAI, loai: LoaiQuan.Xe, hang: 9, cot: 8 }),
            this.TaoMotQuanCo({vitri: ViTri.Tren, phe: Phe.Do, node:instantiate(phaoDoMau),  ten: TENQUANCO.PHAO_TRAI, loai: LoaiQuan.Phao, hang: 7, cot: 1 }),
            this.TaoMotQuanCo({vitri: ViTri.Tren, phe: Phe.Do, node:instantiate(phaoDoMau),  ten: TENQUANCO.PHAO_PHAI, loai: LoaiQuan.Phao, hang: 7, cot: 7 }),
            // this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(chotDoMau),  ten: TENQUANCO.CHOT_MOT, loai: LoaiQuan.Chot, hang: 6, cot: 0 }),
            // this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(chotDoMau),  ten: TENQUANCO.CHOT_HAI, loai: LoaiQuan.Chot, hang: 6, cot: 2 }),
            // this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(chotDoMau),  ten: TENQUANCO.CHOT_BA, loai: LoaiQuan.Chot, hang: 6, cot: 4 }),
            // this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(chotDoMau),  ten: TENQUANCO.CHOT_BON, loai: LoaiQuan.Chot, hang: 6, cot: 6 }),
            // this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(chotDoMau),  ten: TENQUANCO.CHOT_NAM, loai: LoaiQuan.Chot, hang: 6, cot: 8 }),
        ]
    }

    static TaoMotQuanCo(quanCo: QuanCo){
        let vitri = HamChung.LayViTri(quanCo.hang, quanCo.cot);
        quanCo.node.setPosition(vitri.x, vitri.y);
        return quanCo;
    }

}