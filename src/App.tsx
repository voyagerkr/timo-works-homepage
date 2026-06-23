import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

type Lang = 'ko' | 'en' | 'ja' | 'zh'
type Triple = [string, string, string]
type Pair = [string, string]

type SiteCopy = {
  nav: string[]
  heroKicker: string
  heroA: string
  heroB: string
  heroC: string
  heroText: string
  primary: string
  secondary: string
  marquee: string[]
  productsTitle: string
  productsBody: string
  timoTitle: string
  timoSub: string
  timoBody: string
  tempoTitle: string
  tempoSub: string
  tempoBody: string
  learn: string
  openTempo: string
  missionTitle: string
  missionBody: string
  values: Triple[]
  stats: Pair[]
  careersTitle: string
  careersBody: string
  roles: string[]
  newsTitle: string
  news: Pair[]
  ctaTitle: string
  ctaBody: string
  footer: string
}

const labels: Record<Lang, string> = {
  ko: 'KR',
  en: 'EN',
  ja: 'JP',
  zh: 'CN',
}

const order: Lang[] = ['ko', 'en', 'ja', 'zh']

const copy: Record<Lang, SiteCopy> = {
  ko: {
    nav: ['제품', '미션', '채용', '뉴스', '문의'],
    heroKicker: 'TIMO WORKS / LABOR OS FOR ASIA',
    heroA: 'WORK',
    heroB: 'WITHOUT',
    heroC: 'FRICTION',
    heroText:
      'TIMO WORKS는 긱워크 매칭과 근태 운영을 하나의 노동 인프라로 연결합니다. 빠른 채용, 정확한 체크인, 투명한 정산, 다국어 컴플라이언스를 제품으로 만듭니다.',
    primary: '제품 보기',
    secondary: '문의하기',
    marquee: ['REAL-TIME MATCHING', 'ATTENDANCE OPS', 'VISA-AWARE', 'MULTILINGUAL', 'ZERO-MARGIN SAAS'],
    productsTitle: '노동의 앞단과 뒷단을 함께 설계합니다',
    productsBody:
      '워커가 일을 발견하는 순간부터 회사가 근태와 비용을 증빙하는 순간까지, 현장 운영의 빈틈을 줄이는 두 제품을 만듭니다.',
    timoTitle: 'TIMO',
    timoSub: '단기 근로 매칭 iPhone 앱',
    timoBody:
      '위치 기반 공고 탐색, 비자 필터, 전자 근로계약, QR/NFC/GPS 체크인, 세금 원천징수와 지갑 정산까지 한 흐름으로 연결합니다.',
    tempoTitle: 'TEMPO',
    tempoSub: '근태관리 SaaS',
    tempoBody:
      '조직 가입, 출퇴근, 교대, 휴가, 승인, 리포트, 서버비 기반 투명 과금과 고객 데이터 반환 증빙까지 운영자가 매일 보는 화면으로 정리합니다.',
    learn: '알아보기',
    openTempo: 'TEMPO 열기',
    missionTitle: '미션은 더 단순합니다. 일하는 사람이 덜 헤매게 만드는 것.',
    missionBody:
      '노동 플랫폼은 빠른 매칭만으로 끝나지 않습니다. 자격, 계약, 시간, 비용, 정산, 증빙이 같은 화면 안에서 이어져야 현장은 편해집니다.',
    values: [
      ['01', '현장 우선', '일을 찾는 사람과 운영자가 실제로 눌러야 하는 버튼부터 설계합니다.'],
      ['02', '규칙을 제품으로', '비자, 근로시간, 정산, 감사 증빙을 나중의 문서가 아니라 기본 동작으로 넣습니다.'],
      ['03', '아시아 확장성', '한국어, 영어, 일본어, 중국어를 기준 언어로 두고 지역별 노동 규칙을 흡수합니다.'],
    ],
    stats: [
      ['37', 'TIMO API endpoints'],
      ['4', 'Product languages'],
      ['14', 'Job categories'],
      ['200+', 'Data assets per domain'],
    ],
    careersTitle: '함께 만들 사람을 찾습니다',
    careersBody: '초기 팀은 제품, 운영, 컴플라이언스가 한 테이블에서 움직입니다.',
    roles: ['Product Engineer', 'Operations Lead', 'Labor Compliance Advisor'],
    newsTitle: '최근 소식',
    news: [
      ['TIMO worker journey completed', '워커 앱 주요 플로우와 백엔드 MVP가 launch-candidate 상태에 도달했습니다.'],
      ['TEMPO production path opened', 'tempo.timo.work 운영 배포와 실사용자 준비 체크가 진행 중입니다.'],
      ['Multilingual labor stack', 'ko/en/ja/zh 기준으로 제품 카피와 핵심 데이터 구조를 맞추고 있습니다.'],
    ],
    ctaTitle: '현장 운영을 더 빠르고 덜 불안하게.',
    ctaBody: '파트너십, 채용, 제품 도입 문의를 기다립니다.',
    footer: 'TIMO WORKS builds labor infrastructure for teams and workers across Asia.',
  },
  en: {
    nav: ['Products', 'Mission', 'Careers', 'News', 'Contact'],
    heroKicker: 'TIMO WORKS / LABOR OS FOR ASIA',
    heroA: 'WORK',
    heroB: 'WITHOUT',
    heroC: 'FRICTION',
    heroText:
      'TIMO WORKS connects gig-work matching and attendance operations into one labor infrastructure layer: hiring, check-ins, settlement, and multilingual compliance.',
    primary: 'Explore products',
    secondary: 'Contact us',
    marquee: ['REAL-TIME MATCHING', 'ATTENDANCE OPS', 'VISA-AWARE', 'MULTILINGUAL', 'ZERO-MARGIN SAAS'],
    productsTitle: 'We design both sides of work operations',
    productsBody:
      'From the moment a worker finds a shift to the moment a company proves time and cost, our products remove operational gaps.',
    timoTitle: 'TIMO',
    timoSub: 'Gig-work matching iPhone app',
    timoBody:
      'Location-based jobs, visa filters, electronic contracts, QR/NFC/GPS check-ins, tax withholding, and wallet settlement in one flow.',
    tempoTitle: 'TEMPO',
    tempoSub: 'Attendance-management SaaS',
    tempoBody:
      'Organization signup, clock-in, shifts, leave, approvals, reports, transparent server-cost billing, and customer data return evidence.',
    learn: 'Learn more',
    openTempo: 'Open TEMPO',
    missionTitle: 'The mission is simple: make work less confusing.',
    missionBody:
      'Labor platforms cannot stop at fast matching. Eligibility, contracts, time, cost, settlement, and proof must move in the same product surface.',
    values: [
      ['01', 'Field first', 'We design from the buttons workers and operators actually need to press.'],
      ['02', 'Rules as product', 'Visa, work-hour, settlement, and audit requirements become default behavior.'],
      ['03', 'Asia-ready', 'Korean, English, Japanese, and Chinese are first-class language surfaces.'],
    ],
    stats: [
      ['37', 'TIMO API endpoints'],
      ['4', 'Product languages'],
      ['14', 'Job categories'],
      ['200+', 'Data assets per domain'],
    ],
    careersTitle: 'We are building the founding team',
    careersBody: 'Product, operations, and compliance sit at the same table.',
    roles: ['Product Engineer', 'Operations Lead', 'Labor Compliance Advisor'],
    newsTitle: 'Latest',
    news: [
      ['TIMO worker journey completed', 'The worker app and backend MVP reached launch-candidate coverage.'],
      ['TEMPO production path opened', 'The tempo.timo.work deployment and production-readiness checks are underway.'],
      ['Multilingual labor stack', 'Core copy and data structures are aligned across ko/en/ja/zh.'],
    ],
    ctaTitle: 'Make field operations faster and calmer.',
    ctaBody: 'Talk to us about partnerships, hiring, or adopting the products.',
    footer: 'TIMO WORKS builds labor infrastructure for teams and workers across Asia.',
  },
  ja: {
    nav: ['製品', 'ミッション', '採用', 'ニュース', '問い合わせ'],
    heroKicker: 'TIMO WORKS / LABOR OS FOR ASIA',
    heroA: 'WORK',
    heroB: 'WITHOUT',
    heroC: 'FRICTION',
    heroText:
      'TIMO WORKSはギグワークのマッチングと勤怠運用を一つの労働インフラにつなげます。採用、チェックイン、精算、多言語コンプライアンスまで扱います。',
    primary: '製品を見る',
    secondary: '問い合わせ',
    marquee: ['REAL-TIME MATCHING', 'ATTENDANCE OPS', 'VISA-AWARE', 'MULTILINGUAL', 'ZERO-MARGIN SAAS'],
    productsTitle: '働く前後の運用を一緒に設計します',
    productsBody:
      'ワーカーが仕事を見つける瞬間から、企業が勤怠と費用を証明する瞬間まで、現場運用の隙間を減らします。',
    timoTitle: 'TIMO',
    timoSub: '短期ワークマッチングiPhoneアプリ',
    timoBody:
      '位置情報求人、在留資格フィルター、電子契約、QR/NFC/GPSチェックイン、源泉徴収、ウォレット精算を一つの流れにします。',
    tempoTitle: 'TEMPO',
    tempoSub: '勤怠管理SaaS',
    tempoBody:
      '組織登録、出退勤、シフト、休暇、承認、レポート、透明なサーバー費用請求、データ返却証跡まで整理します。',
    learn: '詳しく見る',
    openTempo: 'TEMPOを開く',
    missionTitle: 'ミッションは単純です。働く人が迷わないこと。',
    missionBody:
      '労働プラットフォームは速いマッチングだけでは足りません。資格、契約、時間、費用、精算、証跡が同じ画面でつながる必要があります。',
    values: [
      ['01', '現場優先', 'ワーカーと運用者が実際に押すボタンから設計します。'],
      ['02', 'ルールを製品に', '在留資格、労働時間、精算、監査証跡を基本動作にします。'],
      ['03', 'アジア展開', '韓国語、英語、日本語、中国語を基準言語として設計します。'],
    ],
    stats: [
      ['37', 'TIMO API endpoints'],
      ['4', 'Product languages'],
      ['14', 'Job categories'],
      ['200+', 'Data assets per domain'],
    ],
    careersTitle: '一緒に作る仲間を探しています',
    careersBody: '初期チームでは製品、運用、コンプライアンスが同じテーブルで動きます。',
    roles: ['Product Engineer', 'Operations Lead', 'Labor Compliance Advisor'],
    newsTitle: 'ニュース',
    news: [
      ['TIMO worker journey completed', 'ワーカーアプリとバックエンドMVPがlaunch-candidate状態に到達しました。'],
      ['TEMPO production path opened', 'tempo.timo.workの運用展開と準備確認が進行中です。'],
      ['Multilingual labor stack', 'ko/en/ja/zhでコピーとデータ構造を揃えています。'],
    ],
    ctaTitle: '現場運用をもっと速く、落ち着いたものに。',
    ctaBody: '提携、採用、製品導入についてご相談ください。',
    footer: 'TIMO WORKS builds labor infrastructure for teams and workers across Asia.',
  },
  zh: {
    nav: ['产品', '使命', '招聘', '新闻', '联系'],
    heroKicker: 'TIMO WORKS / LABOR OS FOR ASIA',
    heroA: 'WORK',
    heroB: 'WITHOUT',
    heroC: 'FRICTION',
    heroText:
      'TIMO WORKS 将零工匹配与考勤运营连接成一层劳动基础设施，覆盖招聘、签到、结算与多语言合规。',
    primary: '查看产品',
    secondary: '联系我们',
    marquee: ['REAL-TIME MATCHING', 'ATTENDANCE OPS', 'VISA-AWARE', 'MULTILINGUAL', 'ZERO-MARGIN SAAS'],
    productsTitle: '我们同时设计工作的前端与后端',
    productsBody:
      '从劳动者发现班次，到企业证明工时与成本，我们用产品减少现场运营中的缝隙。',
    timoTitle: 'TIMO',
    timoSub: '短期工作匹配 iPhone 应用',
    timoBody:
      '位置工作、签证筛选、电子合同、QR/NFC/GPS 签到、代扣税与钱包结算，整合为一个流程。',
    tempoTitle: 'TEMPO',
    tempoSub: '考勤管理 SaaS',
    tempoBody:
      '组织注册、上下班、排班、休假、审批、报表、透明服务器成本计费与客户数据返还证据。',
    learn: '了解更多',
    openTempo: '打开 TEMPO',
    missionTitle: '使命很简单：让工作少一点混乱。',
    missionBody:
      '劳动平台不能只停留在快速匹配。资格、合同、时间、成本、结算与证明需要在同一个产品表面流动。',
    values: [
      ['01', '现场优先', '从劳动者和运营者真正需要点击的按钮开始设计。'],
      ['02', '规则产品化', '签证、工时、结算与审计要求成为默认行为。'],
      ['03', '面向亚洲', '韩语、英语、日语、中文作为一等语言表面。'],
    ],
    stats: [
      ['37', 'TIMO API endpoints'],
      ['4', 'Product languages'],
      ['14', 'Job categories'],
      ['200+', 'Data assets per domain'],
    ],
    careersTitle: '寻找一起建设的伙伴',
    careersBody: '早期团队让产品、运营与合规坐在同一张桌子上。',
    roles: ['Product Engineer', 'Operations Lead', 'Labor Compliance Advisor'],
    newsTitle: '最新动态',
    news: [
      ['TIMO worker journey completed', '劳动者应用与后端 MVP 已达到 launch-candidate 覆盖。'],
      ['TEMPO production path opened', 'tempo.timo.work 部署与生产准备检查正在推进。'],
      ['Multilingual labor stack', '核心文案和数据结构正在 ko/en/ja/zh 间对齐。'],
    ],
    ctaTitle: '让现场运营更快、更安心。',
    ctaBody: '欢迎咨询合作、招聘或产品导入。',
    footer: 'TIMO WORKS builds labor infrastructure for teams and workers across Asia.',
  },
}

function App() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('twLang')
    return order.includes(saved as Lang) ? (saved as Lang) : 'ko'
  })
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const t = copy[lang]

  useEffect(() => {
    localStorage.setItem('twLang', lang)
    document.documentElement.lang = lang
  }, [lang])

  useCanvasFx(canvasRef)
  usePageFx()

  const marquee = useMemo(() => [...t.marquee, ...t.marquee], [t.marquee])

  return (
    <main>
      <div id="twspot" aria-hidden="true" />
      <nav className="nav" aria-label="Primary">
        <a className="brand" href="#top" aria-label="TIMO WORKS home">
          <span className="brand-mark">TW</span>
          <span>TIMO WORKS</span>
        </a>
        <div className="nav-links">
          {['products', 'mission', 'careers', 'news', 'contact'].map((id, idx) => (
            <a href={`#${id}`} key={id}>
              {t.nav[idx]}
            </a>
          ))}
        </div>
        <div className="langs" aria-label="Language">
          {order.map((item) => (
            <button className={item === lang ? 'active' : ''} key={item} onClick={() => setLang(item)} type="button">
              {labels[item]}
            </button>
          ))}
        </div>
      </nav>

      <section className="hero-section" id="top">
        <canvas ref={canvasRef} className="twfx" aria-hidden="true" />
        <div className="scan" aria-hidden="true" />
        <div className="hero-copy reveal">
          <p className="kicker">{t.heroKicker}</p>
          <h1>
            <span className="shimmer">{t.heroA}</span>
            <span>{t.heroB}</span>
            <span className="stroke">{t.heroC}</span>
          </h1>
          <p className="hero-text">{t.heroText}</p>
          <div className="actions">
            <a className="btn primary magnetic sweep" href="#products">
              {t.primary}
            </a>
            <a className="btn ghost magnetic" href="mailto:hello@timo.work">
              {t.secondary}
            </a>
          </div>
        </div>
        <div className="hero-orbit" data-par="0.18" aria-hidden="true">
          <div className="orbit-ring" />
          <div className="orbit-core">T</div>
          <div className="orbit-node n1">VISA</div>
          <div className="orbit-node n2">SHIFT</div>
          <div className="orbit-node n3">PAY</div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div>
          {marquee.map((item, idx) => (
            <span key={`${item}-${idx}`}>{item}</span>
          ))}
        </div>
      </div>

      <section className="section intro" id="products">
        <p className="section-label">PRODUCTS</p>
        <h2>{t.productsTitle}</h2>
        <p>{t.productsBody}</p>
      </section>

      <section className="product product-timo">
        <div className="product-copy reveal">
          <p className="section-label cyan">{t.timoTitle}</p>
          <h2>{t.timoSub}</h2>
          <p>{t.timoBody}</p>
          <a className="btn ghost magnetic" href="https://github.com/voyagerkr/timo" target="_blank" rel="noreferrer">
            {t.learn}
          </a>
        </div>
        <div className="phone-mock reveal" data-tilt>
          <div className="phone-top" />
          <div className="job-card hot">
            <span>Premium</span>
            <strong>Kitchen shift · 18:00</strong>
            <small>Visa OK · 2.1km · instant contract</small>
          </div>
          <div className="job-card">
            <span>Matched</span>
            <strong>QR check-in ready</strong>
            <small>Estimated wallet +84,200 KRW</small>
          </div>
          <div className="phone-tabs">
            <b />
            <b />
            <b />
            <b />
          </div>
        </div>
      </section>

      <section className="product product-tempo">
        <div className="dashboard-mock reveal" data-tilt>
          <div className="dash-top">
            <span />
            <span />
            <span />
          </div>
          <div className="dash-grid">
            <div className="dash-panel wide">
              <small>Today</small>
              <strong>92 checked in</strong>
              <i />
            </div>
            <div className="dash-panel amber">
              <small>Risk</small>
              <strong>3 alerts</strong>
            </div>
            <div className="dash-panel">
              <small>Payroll</small>
              <strong>Ready</strong>
            </div>
            <div className="dash-bars">
              <b />
              <b />
              <b />
              <b />
            </div>
          </div>
        </div>
        <div className="product-copy reveal">
          <p className="section-label amber">{t.tempoTitle}</p>
          <h2>{t.tempoSub}</h2>
          <p>{t.tempoBody}</p>
          <a className="btn primary magnetic sweep" href="https://tempo.timo.work/" target="_blank" rel="noreferrer">
            {t.openTempo}
          </a>
        </div>
      </section>

      <section className="section mission" id="mission">
        <div className="mission-head reveal">
          <p className="section-label">MISSION</p>
          <h2>{t.missionTitle}</h2>
          <p>{t.missionBody}</p>
        </div>
        <div className="value-grid">
          {t.values.map(([num, title, body]) => (
            <article className="value-card reveal" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="stats">
          {t.stats.map(([num, label]) => (
            <div className="stat reveal" key={label}>
              <strong data-count={num}>{num}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section careers" id="careers">
        <div className="reveal">
          <p className="section-label">CAREERS</p>
          <h2>{t.careersTitle}</h2>
          <p>{t.careersBody}</p>
        </div>
        <div className="role-list reveal">
          {t.roles.map((role) => (
            <a href="mailto:hello@timo.work" key={role}>
              <span>{role}</span>
              <b>APPLY</b>
            </a>
          ))}
        </div>
      </section>

      <section className="section news" id="news">
        <p className="section-label">NEWS</p>
        <h2>{t.newsTitle}</h2>
        <div className="news-grid">
          {t.news.map(([title, body]) => (
            <article className="news-card reveal" key={title}>
              <span>2026</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="reveal">
          <p className="section-label">CONTACT</p>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaBody}</p>
          <a className="btn primary magnetic sweep" href="mailto:hello@timo.work">
            hello@timo.work
          </a>
        </div>
      </section>

      <footer>
        <strong>TIMO WORKS</strong>
        <span>{t.footer}</span>
        <a href="https://tempo.timo.work/">tempo.timo.work</a>
      </footer>
    </main>
  )
}

function useCanvasFx(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let frame = 0
    const pointer = { x: -9999, y: -9999 }
    const particles = Array.from({ length: Math.min(90, Math.floor(window.innerWidth / 18)) }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }))

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.floor(width * window.devicePixelRatio)
      canvas.height = Math.floor(height * window.devicePixelRatio)
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        p.x += p.vx / width
        p.y += p.vy / height
        if (p.x < 0 || p.x > 1) p.vx *= -1
        if (p.y < 0 || p.y > 1) p.vy *= -1
      })

      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i]
        const ax = a.x * width
        const ay = a.y * height
        ctx.fillStyle = 'rgba(255,255,255,.72)'
        ctx.beginPath()
        ctx.arc(ax, ay, 1.4, 0, Math.PI * 2)
        ctx.fill()

        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j]
          const bx = b.x * width
          const by = b.y * height
          const d = (ax - bx) ** 2 + (ay - by) ** 2
          if (d < 18000) {
            const near = (ax - pointer.x) ** 2 + (ay - pointer.y) ** 2 < 22000
            ctx.strokeStyle = near ? 'rgba(255,59,71,.42)' : `rgba(255,255,255,${0.14 - d / 150000})`
            ctx.lineWidth = near ? 1.2 : 0.7
            ctx.beginPath()
            ctx.moveTo(ax, ay)
            ctx.lineTo(bx, by)
            ctx.stroke()
          }
        }
      }
      frame = requestAnimationFrame(draw)
    }

    const move = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', move)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', move)
    }
  }, [canvasRef])
}

function usePageFx() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const spot = document.querySelector<HTMLElement>('#twspot')
    let sx = window.innerWidth / 2
    let sy = window.innerHeight / 2
    let tx = sx
    let ty = sy
    let raf = 0

    const tick = () => {
      sx += (tx - sx) * 0.12
      sy += (ty - sy) * 0.12
      spot?.style.setProperty('--x', `${sx}px`)
      spot?.style.setProperty('--y', `${sy}px`)
      raf = requestAnimationFrame(tick)
    }

    const move = (event: PointerEvent) => {
      tx = event.clientX
      ty = event.clientY
    }

    const scroll = () => {
      document.querySelectorAll<HTMLElement>('[data-par]').forEach((el) => {
        const amount = Number(el.dataset.par ?? '0')
        el.style.transform = `translate3d(0, ${window.scrollY * amount}px, 0)`
      })
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in')
        })
      },
      { threshold: 0.18 },
    )

    const countIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const raw = el.dataset.count ?? '0'
          const target = Number.parseInt(raw, 10)
          const suffix = raw.replace(String(target), '')
          const start = performance.now()
          const step = (now: number) => {
            const p = Math.min(1, (now - start) / 1300)
            el.textContent = `${Math.round(target * (1 - (1 - p) ** 3))}${suffix}`
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          countIo.unobserve(el)
        })
      },
      { threshold: 0.5 },
    )

    const tiltMove = (event: Event) => {
      const el = event.currentTarget as HTMLElement
      const pointer = event as PointerEvent
      const rect = el.getBoundingClientRect()
      const x = (pointer.clientX - rect.left) / rect.width - 0.5
      const y = (pointer.clientY - rect.top) / rect.height - 0.5
      el.style.transform = `rotateX(${-y * 11}deg) rotateY(${x * 11}deg)`
    }

    const tiltLeave = (event: Event) => {
      ;(event.currentTarget as HTMLElement).style.transform = ''
    }

    const magMove = (event: Event) => {
      const el = event.currentTarget as HTMLElement
      const pointer = event as PointerEvent
      const rect = el.getBoundingClientRect()
      el.style.transform = `translate(${(pointer.clientX - rect.left - rect.width / 2) * 0.18}px, ${
        (pointer.clientY - rect.top - rect.height / 2) * 0.18
      }px)`
    }

    const magLeave = (event: Event) => {
      ;(event.currentTarget as HTMLElement).style.transform = ''
    }

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => countIo.observe(el))

    if (!reduce) {
      tick()
      window.addEventListener('pointermove', move)
      window.addEventListener('scroll', scroll, { passive: true })
      document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
        el.addEventListener('pointermove', tiltMove)
        el.addEventListener('pointerleave', tiltLeave)
      })
      document.querySelectorAll<HTMLElement>('.magnetic').forEach((el) => {
        el.addEventListener('pointermove', magMove)
        el.addEventListener('pointerleave', magLeave)
      })
    }

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      countIo.disconnect()
      window.removeEventListener('pointermove', move)
      window.removeEventListener('scroll', scroll)
      document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
        el.removeEventListener('pointermove', tiltMove)
        el.removeEventListener('pointerleave', tiltLeave)
      })
      document.querySelectorAll<HTMLElement>('.magnetic').forEach((el) => {
        el.removeEventListener('pointermove', magMove)
        el.removeEventListener('pointerleave', magLeave)
      })
    }
  }, [])
}

export default App
