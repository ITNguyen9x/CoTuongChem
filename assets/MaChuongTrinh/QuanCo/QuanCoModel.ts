import { Node } from 'cc';

export enum Phe{
    Xanh = 1,
    Do = 2
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

export interface QuanCo {
  phe: Phe;
  node: Node;
  ten: string;
  loai: LoaiQuan;
  hang: number;
  cot: number;
}

export interface NuocDi {
  node: Node;
  hang: number;
  cot: number;
}