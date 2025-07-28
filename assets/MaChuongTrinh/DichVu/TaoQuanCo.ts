import { instantiate, Prefab, Vec2 } from "cc";
import { LoaiQuan, Phe, QuanCo } from "../QuanCo/QuanCoModel";
import { LOAIQUANCO } from "../Chung/TextChung";

export class TaoQuanCo{

    static daiRongO: number = 64;
    
    static TaoToanQuanCo(tuongXanhMau: Prefab, siXanhMau: Prefab, boXanhMau: Prefab, nguaXanhMau: Prefab, xeXanhMau: Prefab, phaoXanhMau: Prefab, chotXanhMau: Prefab,
        tuongDoMau: Prefab, siDoMau: Prefab, boDoMau: Prefab, nguaDoMau: Prefab, xeDoMau: Prefab, phaoDoMau: Prefab, chotDoMau: Prefab
    ){
        return [
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(tuongXanhMau),  ten: LOAIQUANCO.TUONG_XANH, loai: LoaiQuan.Tuong, hang: 0, cot: 4 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(siXanhMau),  ten: LOAIQUANCO.SI_XANH, loai: LoaiQuan.Si, hang: 0, cot: 3 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(siXanhMau),  ten: LOAIQUANCO.SI_XANH, loai: LoaiQuan.Si, hang: 0, cot: 5 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(boXanhMau),  ten: LOAIQUANCO.BO_XANH, loai: LoaiQuan.Bo, hang: 0, cot: 2 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(boXanhMau),  ten: LOAIQUANCO.BO_XANH, loai: LoaiQuan.Bo, hang: 0, cot: 6 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(nguaXanhMau),  ten: LOAIQUANCO.NGUA_XANH, loai: LoaiQuan.Ngua, hang: 0, cot: 1 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(nguaXanhMau),  ten: LOAIQUANCO.NGUA_XANH, loai: LoaiQuan.Ngua, hang: 0, cot: 7 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(xeXanhMau),  ten: LOAIQUANCO.XE_XANH, loai: LoaiQuan.Xe, hang: 0, cot: 0 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(xeXanhMau),  ten: LOAIQUANCO.XE_XANH, loai: LoaiQuan.Xe, hang: 0, cot: 8 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(phaoXanhMau),  ten: LOAIQUANCO.PHAO_XANH, loai: LoaiQuan.Phao, hang: 2, cot: 1 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(phaoXanhMau),  ten: LOAIQUANCO.PHAO_XANH, loai: LoaiQuan.Phao, hang: 2, cot: 7 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(chotXanhMau),  ten: LOAIQUANCO.CHOT_XANH, loai: LoaiQuan.Chot, hang: 3, cot: 0 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(chotXanhMau),  ten: LOAIQUANCO.CHOT_XANH, loai: LoaiQuan.Chot, hang: 3, cot: 2 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(chotXanhMau),  ten: LOAIQUANCO.CHOT_XANH, loai: LoaiQuan.Chot, hang: 3, cot: 4 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(chotXanhMau),  ten: LOAIQUANCO.CHOT_XANH, loai: LoaiQuan.Chot, hang: 3, cot: 6 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(chotXanhMau),  ten: LOAIQUANCO.CHOT_XANH, loai: LoaiQuan.Chot, hang: 3, cot: 8 }),

            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(tuongDoMau),  ten: LOAIQUANCO.TUONG_DO, loai: LoaiQuan.Tuong, hang: 9, cot: 4 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(siDoMau),  ten: LOAIQUANCO.SI_DO, loai: LoaiQuan.Si, hang: 9, cot: 3 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(siDoMau),  ten: LOAIQUANCO.SI_DO, loai: LoaiQuan.Si, hang: 9, cot: 5 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(boDoMau),  ten: LOAIQUANCO.BO_DO, loai: LoaiQuan.Bo, hang: 9, cot: 2 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(boDoMau),  ten: LOAIQUANCO.BO_DO, loai: LoaiQuan.Bo, hang: 9, cot: 6 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(nguaDoMau),  ten: LOAIQUANCO.NGUA_DO, loai: LoaiQuan.Ngua, hang: 9, cot: 1 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(nguaDoMau),  ten: LOAIQUANCO.NGUA_DO, loai: LoaiQuan.Ngua, hang: 9, cot: 7 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(xeDoMau),  ten: LOAIQUANCO.XE_DO, loai: LoaiQuan.Xe, hang: 9, cot: 0 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(xeDoMau),  ten: LOAIQUANCO.XE_DO, loai: LoaiQuan.Xe, hang: 9, cot: 8 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(phaoDoMau),  ten: LOAIQUANCO.PHAO_DO, loai: LoaiQuan.Phao, hang: 7, cot: 1 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(phaoDoMau),  ten: LOAIQUANCO.PHAO_DO, loai: LoaiQuan.Phao, hang: 7, cot: 7 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(chotDoMau),  ten: LOAIQUANCO.CHOT_DO, loai: LoaiQuan.Chot, hang: 6, cot: 0 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(chotDoMau),  ten: LOAIQUANCO.CHOT_DO, loai: LoaiQuan.Chot, hang: 6, cot: 2 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(chotDoMau),  ten: LOAIQUANCO.CHOT_DO, loai: LoaiQuan.Chot, hang: 6, cot: 4 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(chotDoMau),  ten: LOAIQUANCO.CHOT_DO, loai: LoaiQuan.Chot, hang: 6, cot: 6 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(chotDoMau),  ten: LOAIQUANCO.CHOT_DO, loai: LoaiQuan.Chot, hang: 6, cot: 8 }),
        ]
    }

    static TaoMotQuanCo(quanCo: QuanCo){
        let vitri = this.LayViTri(quanCo.hang, quanCo.cot);
        quanCo.node.setPosition(vitri.x, vitri.y);
        return quanCo;
    }

    static LayViTri(hang: number, cot: number): Vec2 { return new Vec2((cot - 4) * this.daiRongO, (hang - 4) * this.daiRongO); }
}