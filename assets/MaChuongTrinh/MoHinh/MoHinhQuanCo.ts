import { Node } from 'cc';

export enum Phe{
    Xanh = 0,
    Do = 1
}
export enum ViTri{
    Tren = 0,
    Duoi = 1
}
export enum LoaiQuan{
    Trong = 0,
    Tuong = 1,
    Si = 2,
    Bo = 3,
    Ngua = 4,
    Xe = 5,
    Phao = 6,
    Chot = 7
}

export enum ViTri{
    Trong = 0,
    GioiHanBien = 1,
    PheTa = 2,
    PheDich = 3
}

export interface QuanCo {
  hoatdong: boolean;
  vitri: ViTri;
  phe: Phe;
  node: Node;
  ten: string;
  loai: LoaiQuan;
  hang: number;
  cot: number;
}

export interface NuocDi {
  phe: Phe;
  node: Node;
  hang: number;
  cot: number;
}