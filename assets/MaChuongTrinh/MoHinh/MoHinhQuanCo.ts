import { Node } from 'cc';

export interface QuanCo {
  quanco_trangthai: boolean;
  quanco_mau: QuanCo_Mau;
  quanco_node: Node;
  quanco_ten: string;
  quanco_loai: QuanCo_Loai;
  quanco_hang: number;
  quanco_cot: number;
  nguoichoi_vitri: NguoiChoi_ViTri;
}

export enum QuanCo_Mau{
    Xanh = 0,
    Do = 1
}

export enum QuanCo_Loai{
    Tuong = 0,
    Si = 1,
    Bo = 2,
    Ngua = 3,
    Xe = 4,
    Phao = 5,
    Chot = 6
}

export enum NguoiChoi_ViTri{
    Tren = 0,
    Duoi = 1
}

export interface NuocDi {
  nuocdi_node: Node;
  nuocdi_hang: number;
  nuocdi_cot: number;
  nuocdi_loai: NuocDi_Loai;
  nguoichoi_vitri: NguoiChoi_ViTri
}

export enum NuocDi_Loai{
    Trong = 0,
    GioiHanBien = 1,
    PheTa = 2,
    PheDich = 3
}

export interface NguoiChoi {
  nguoichoi_ten: string;
  nguoichoi_hang: number;
  nguoichoi_cot: number;
  nguoichoi_node: Node;
}