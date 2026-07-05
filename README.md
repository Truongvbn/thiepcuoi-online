# Thiệp Cưới Online — Minh & Anh

Next.js 15 project chứa **6 mẫu thiệp cưới tương tác**. Mỗi mẫu là một file HTML tự chứa trong `public/`, được map sang URL sạch bằng Next.js rewrites.

## Các mẫu thiệp

| Route | Mẫu | Mô tả |
|-------|-----|-------|
| `/` | Gallery | Trang chọn mẫu thiệp |
| `/v1` | Phong Bì Cổ Điển | Phong bì mở ra, gập sách 4 trang |
| `/v2` | Story Truyền Thống | Thiệp story 7 màn, tự động chuyển |
| `/v3` | Cuộn Dài Tối Giản | Trang dài cuộn mượt, parallax |
| `/v4` | Editorial | Bố cục tạp chí, chữ Bodoni |
| `/v5` | Love Story | Dòng thời gian tình yêu cuộn ngang |
| `/v6` | Boarding Pass | Vé máy bay M&A Airways, hiệu ứng 3D |

## Chạy local

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy lên Vercel

1. Vào [vercel.com/new](https://vercel.com/new)
2. Import repo này
3. Framework tự nhận **Next.js** → bấm **Deploy**

Không cần biến môi trường. Ảnh dùng Unsplash, mã QR dùng api.qrserver.com, animation dùng GSAP (CDN) — tất cả là external, chạy ngay trên Vercel.
