const DESIGNS = [
  {
    href: '/v1',
    no: '01',
    name: 'Phong Bì Cổ Điển',
    en: 'Classic Envelope',
    desc: 'Phong bì thư mở ra, gập sách 4 trang',
    bg: '#142a21',
    accent: '#c8a24a',
    text: '#f2ead6',
  },
  {
    href: '/v2',
    no: '02',
    name: 'Story Truyền Thống',
    en: 'Story Card',
    desc: 'Thiệp dạng story 7 màn, tự động chuyển',
    bg: '#30070c',
    accent: '#d9b26a',
    text: '#f5e7d0',
  },
  {
    href: '/v3',
    no: '03',
    name: 'Cuộn Dài Tối Giản',
    en: 'Minimal Scroll',
    desc: 'Trang dài cuộn mượt, hiệu ứng parallax',
    bg: '#faf8f3',
    accent: '#b08d57',
    text: '#2a2622',
  },
  {
    href: '/v4',
    no: '04',
    name: 'Editorial',
    en: 'Magazine',
    desc: 'Bố cục tạp chí, chữ Bodoni sang trọng',
    bg: '#e7e1d6',
    accent: '#b8402f',
    text: '#16130f',
  },
  {
    href: '/v5',
    no: '05',
    name: 'Love Story',
    en: 'Timeline',
    desc: 'Dòng thời gian tình yêu cuộn ngang',
    bg: '#f3ede4',
    accent: '#a67c68',
    text: '#3a3129',
  },
  {
    href: '/v6',
    no: '06',
    name: 'Boarding Pass',
    en: 'Aviation',
    desc: 'Vé máy bay M&A Airways, hiệu ứng 3D',
    bg: '#0c1b2a',
    accent: '#f2a65a',
    text: '#f4f1ea',
  },
]

const CSS = `
  * { box-sizing: border-box; }
  .wrap {
    min-height: 100vh;
    background:
      radial-gradient(1200px 600px at 50% -10%, #2a1418 0%, transparent 60%),
      linear-gradient(180deg, #171012 0%, #120c0e 100%);
    color: #f4ece3;
    font-family: 'Manrope', system-ui, -apple-system, 'Segoe UI', sans-serif;
    padding: 72px 24px 96px;
  }
  .head { text-align: center; max-width: 760px; margin: 0 auto 56px; }
  .kicker {
    font-size: 12px; letter-spacing: .42em; text-transform: uppercase;
    color: #c8a24a; margin: 0 0 18px;
  }
  .names {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 500; font-size: clamp(48px, 9vw, 92px); line-height: 1;
    margin: 0 0 16px; color: #f7efe4;
  }
  .amp { color: #c8a24a; font-style: italic; }
  .date { font-size: 15px; letter-spacing: .3em; color: #b9a99a; margin: 0 0 10px; }
  .sub { font-size: 14px; color: #8f8073; margin: 0; }
  .grid {
    display: grid; gap: 22px; max-width: 1080px; margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) { .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } .wrap { padding: 48px 18px 72px; } }
  .card {
    display: block; text-decoration: none; border-radius: 16px; overflow: hidden;
    border: 1px solid rgba(255,255,255,.09); background: #1c1416;
    transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
  }
  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 22px 50px rgba(0,0,0,.45);
    border-color: rgba(200,162,74,.5);
  }
  .preview {
    height: 178px; position: relative; display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }
  .previewName {
    font-family: 'Cormorant Garamond', Georgia, serif; font-size: 30px; letter-spacing: .02em;
  }
  .previewAmp { font-style: italic; }
  .no {
    position: absolute; top: 12px; left: 14px; font-size: 12px; letter-spacing: .2em;
    font-weight: 600; opacity: .8;
  }
  .rule { position: absolute; bottom: 26px; width: 44px; height: 1px; }
  .meta { padding: 18px 20px 20px; }
  .name { font-size: 16px; font-weight: 600; color: #f4ece3; margin: 0 0 4px; }
  .en { font-size: 11px; letter-spacing: .22em; text-transform: uppercase; color: #9a8b7d; margin: 0 0 10px; }
  .desc { font-size: 13px; line-height: 1.5; color: #b6a99c; margin: 0 0 16px; }
  .cta { font-size: 13px; font-weight: 600; color: #c8a24a; display: inline-flex; align-items: center; gap: 6px; }
  .card:hover .cta { gap: 10px; }
  .foot { text-align: center; margin: 64px auto 0; font-size: 13px; color: #7c6f63; }
  .foot span { color: #c8a24a; }
`

export default function Page() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&family=Manrope:wght@300;400;500;600&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <main className="wrap">
        <header className="head">
          <p className="kicker">Save the date · Thiệp cưới</p>
          <h1 className="names">
            Minh <span className="amp">&amp;</span> Anh
          </h1>
          <p className="date">20 · 12 · 2026</p>
          <p className="sub">Chọn mẫu thiệp bạn yêu thích để xem</p>
        </header>

        <section className="grid">
          {DESIGNS.map((d) => (
            <a key={d.href} className="card" href={d.href}>
              <div className="preview" style={{ background: d.bg, color: d.text }}>
                <span className="no" style={{ color: d.accent }}>
                  {d.no}
                </span>
                <span className="previewName">
                  Minh <span className="previewAmp" style={{ color: d.accent }}>
                    &amp;
                  </span>{' '}
                  Anh
                </span>
                <span className="rule" style={{ background: d.accent }} />
              </div>
              <div className="meta">
                <p className="name">{d.name}</p>
                <p className="en">{d.en}</p>
                <p className="desc">{d.desc}</p>
                <span className="cta">Xem thiệp →</span>
              </div>
            </a>
          ))}
        </section>

        <footer className="foot">
          Minh <span>&amp;</span> Anh — 20.12.2026 · White Palace
        </footer>
      </main>
    </>
  )
}
