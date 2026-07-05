import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Thiệp Cưới · Minh & Anh — 20.12.2026',
  description:
    'Thiệp cưới online của Minh & Anh — 6 mẫu thiệp tương tác: Phong bì cổ điển, Story truyền thống, Cuộn dài tối giản, Editorial, Love Story và Boarding Pass.',
}

export const viewport: Viewport = {
  themeColor: '#171012',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
