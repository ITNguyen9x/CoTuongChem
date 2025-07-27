import { instantiate, Prefab, Vec2 } from "cc";
import { LoaiQuan, Phe, QuanCo } from "../QuanCo/QuanCoModel";
import { LOAIQUANCO } from "../Chung/TextChung";

export class TaoQuanCo{

    static daiRongO: number = 64;
    
    static TaoToanQuanCo(tuongXanhMau: Prefab, siXanhMau: Prefab, boXanhMau: Prefab, nguaXanhMau: Prefab, xeXanhMau: Prefab, phaoXanhMau: Prefab, chotXanhMau: Prefab,
        tuongDoMau: Prefab, siDoMau: Prefab, boDoMau: Prefab, nguaDoMau: Prefab, xeDoMau: Prefab, phaoDoMau: Prefab, chotDoMau: Prefab
    ){
        return [
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(tuongXanhMau),  ten: LOAIQUANCO.TUONG_XANH, loai: LoaiQuan.Tuong, dong: 4, cot: 0 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(siXanhMau),  ten: LOAIQUANCO.SI_XANH, loai: LoaiQuan.Si, dong: 3, cot: 0 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(siXanhMau),  ten: LOAIQUANCO.SI_XANH, loai: LoaiQuan.Si, dong: 5, cot: 0 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(boXanhMau),  ten: LOAIQUANCO.BO_XANH, loai: LoaiQuan.Bo, dong: 2, cot: 0 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(boXanhMau),  ten: LOAIQUANCO.BO_XANH, loai: LoaiQuan.Bo, dong: 6, cot: 0 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(nguaXanhMau),  ten: LOAIQUANCO.NGUA_XANH, loai: LoaiQuan.Ngua, dong: 1, cot: 0 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(nguaXanhMau),  ten: LOAIQUANCO.NGUA_XANH, loai: LoaiQuan.Ngua, dong: 7, cot: 0 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(xeXanhMau),  ten: LOAIQUANCO.XE_XANH, loai: LoaiQuan.Xe, dong: 0, cot: 0 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(xeXanhMau),  ten: LOAIQUANCO.XE_XANH, loai: LoaiQuan.Xe, dong: 8, cot: 0 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(phaoXanhMau),  ten: LOAIQUANCO.PHAO_XANH, loai: LoaiQuan.Phao, dong: 1, cot: 2 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(phaoXanhMau),  ten: LOAIQUANCO.PHAO_XANH, loai: LoaiQuan.Phao, dong: 7, cot: 2 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(chotXanhMau),  ten: LOAIQUANCO.CHOT_XANH, loai: LoaiQuan.Chot, dong: 0, cot: 3 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(chotXanhMau),  ten: LOAIQUANCO.CHOT_XANH, loai: LoaiQuan.Chot, dong: 2, cot: 3 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(chotXanhMau),  ten: LOAIQUANCO.CHOT_XANH, loai: LoaiQuan.Chot, dong: 4, cot: 3 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(chotXanhMau),  ten: LOAIQUANCO.CHOT_XANH, loai: LoaiQuan.Chot, dong:6, cot: 3 }),
            this.TaoMotQuanCo({ phe: Phe.Xanh, node:instantiate(chotXanhMau),  ten: LOAIQUANCO.CHOT_XANH, loai: LoaiQuan.Chot, dong: 8, cot: 3 }),

            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(tuongDoMau),  ten: LOAIQUANCO.TUONG_DO, loai: LoaiQuan.Tuong, dong: 4, cot: 9 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(siDoMau),  ten: LOAIQUANCO.SI_DO, loai: LoaiQuan.Si, dong: 3, cot: 9 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(siDoMau),  ten: LOAIQUANCO.SI_DO, loai: LoaiQuan.Si, dong: 5, cot: 9 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(boDoMau),  ten: LOAIQUANCO.BO_DO, loai: LoaiQuan.Bo, dong: 2, cot: 9 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(boDoMau),  ten: LOAIQUANCO.BO_DO, loai: LoaiQuan.Bo, dong: 6, cot: 9 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(nguaDoMau),  ten: LOAIQUANCO.NGUA_DO, loai: LoaiQuan.Ngua, dong: 1, cot: 9 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(nguaDoMau),  ten: LOAIQUANCO.NGUA_DO, loai: LoaiQuan.Ngua, dong: 7, cot: 9 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(xeDoMau),  ten: LOAIQUANCO.XE_DO, loai: LoaiQuan.Xe, dong: 0, cot: 9 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(xeDoMau),  ten: LOAIQUANCO.XE_DO, loai: LoaiQuan.Xe, dong: 8, cot: 9 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(phaoDoMau),  ten: LOAIQUANCO.PHAO_DO, loai: LoaiQuan.Phao, dong: 1, cot: 7 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(phaoDoMau),  ten: LOAIQUANCO.PHAO_DO, loai: LoaiQuan.Phao, dong: 7, cot: 7 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(chotDoMau),  ten: LOAIQUANCO.CHOT_DO, loai: LoaiQuan.Chot, dong: 0, cot: 6 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(chotDoMau),  ten: LOAIQUANCO.CHOT_DO, loai: LoaiQuan.Chot, dong: 2, cot: 6 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(chotDoMau),  ten: LOAIQUANCO.CHOT_DO, loai: LoaiQuan.Chot, dong: 4, cot: 6 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(chotDoMau),  ten: LOAIQUANCO.CHOT_DO, loai: LoaiQuan.Chot, dong: 6, cot: 6 }),
            this.TaoMotQuanCo({ phe: Phe.Do, node:instantiate(chotDoMau),  ten: LOAIQUANCO.CHOT_DO, loai: LoaiQuan.Chot, dong: 8, cot: 6 }),
        ]
    }

    static TaoMotQuanCo(quanCo: QuanCo){
        let pos = this.LayViTri(quanCo.dong, quanCo.cot);
        quanCo.node.setPosition(pos.x, pos.y);
        return {
            phe: quanCo.phe,
            node: quanCo.node,
            ten: quanCo.ten,
            loai: quanCo.loai,
            dong: pos.x,
            cot: pos.y,
        }
    }

    static LayViTri(dong: number, cot: number): Vec2 {
        let x = (dong - 4) * this.daiRongO;
        let y = (cot - 4) * this.daiRongO;
        return new Vec2(x, y);
    }
}