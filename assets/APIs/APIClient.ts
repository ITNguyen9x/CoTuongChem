import { TaiKhoanDangNhap } from "../MaChuongTrinh/MoHinh/XacThuc";

export class APIClient {
    //Đăng Nhập
    static async DangNhap(sdt: number, matkhau: string) {
        const url = 'http://34.30.71.9:1000/api/taikhoan/dangnhap';

        const body = {
            TaiKhoan_SoDienThoai: sdt,
            TaiKhoan_MatKhau: matkhau
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            if (!response.ok) {
                const text = await response.text();
                console.error('API trả về lỗi:', text);
                throw new Error('Lỗi gọi API: ' + text);
            }
            const data : [] = await response.json();
            return data;
        } catch (error) {
            console.error("Lỗi gọi API:", error);
            return [];
        }
    }
    //Đăng Ký
    static async ThemTaiKhoan() {
        const url = 'http://34.30.71.9:1000/api/taikhoan/them';

        const body = {
            TaiKhoan_SoDienThoai: 355653410,
            TaiKhoan_Email: "NguyenVy2@gmail.com",
            TaiKhoan_MatKhau: "1111112"
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            if (!response.ok) {
                const text = await response.text(); // Đọc plain text (trong trường hợp không phải JSON)
                console.error('API trả về lỗi:', text);
                throw new Error('Lỗi gọi API: ' + text);
            }

            const data = await response.json();
            console.log("Kết quả:", data);
        } catch (error) {
            console.error("Lỗi gọi API:", error);
        }
    }
}


