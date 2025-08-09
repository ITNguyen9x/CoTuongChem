import { httpPost } from './httpClient';

export async function dangNhap(sdt: number, matKhau: string) {
  return httpPost('/xacthuc/dangnhap', { TaiKhoan_SoDienThoai: sdt, TaiKhoan_MatKhau: matKhau });
}

export async function dangKy(sdt: number, email: string, matKhau: string) {
  return httpPost('/xacthuc/dangky', { TaiKhoan_SoDienThoai: sdt, TaiKhoan_Email: email, TaiKhoan_MatKhau: matKhau });
}