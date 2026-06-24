import { useEffect, useRef, useState } from 'react'
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
  partnerTitle: string
  partnerBody: string
  partnerPoints: Pair[]
  newsTitle: string
  news: Pair[]
  ctaTitle: string
  ctaBody: string
  footer: string
}

const CONTACT_EMAIL = 'koji@timo.work'

const labels: Record<Lang, string> = {
  ko: 'KR',
  en: 'EN',
  ja: 'JP',
  zh: 'CN',
}

const order: Lang[] = ['ko', 'en', 'ja', 'zh']

const copy: Record<Lang, SiteCopy> = {
  ko: {
    nav: ['제품', '파트너', '미션', '뉴스', '문의'],
    heroKicker: 'TIMO WORKS / WORK TIME NETWORK',
    heroA: 'WORK',
    heroB: 'WITHOUT',
    heroC: 'FRICTION',
    heroText:
      'TIMO WORKS는 빈 시간을 일할 수 있는 시간으로 바꾸고, 사람이 필요한 현장에는 바로 연결되는 모바일 워크 네트워크를 만듭니다. TIMO로 빠르게 채우고, TEMPO로 정확하게 운영합니다.',
    primary: '제품 보기',
    secondary: '문의하기',
    marquee: ['빈 시간 워크 매칭', '바로 충원', '모바일 지원', '다국어 운영', '정확한 근태 관리'],
    productsTitle: '일이 필요한 순간과 사람이 비는 순간을 연결합니다',
    productsBody:
      'TIMO는 잠깐 일하고 싶은 사람과 지금 사람이 필요한 파트너를 연결합니다. TEMPO는 출퇴근, 교대, 정산, 증빙까지 매일의 운영을 더 깔끔하게 만듭니다.',
    timoTitle: 'TIMO',
    timoSub: '빈 시간 워크 매칭 모바일 앱',
    timoBody:
      '몇 시간 비는 사람은 가까운 일을 바로 찾고, 파트너는 필요한 시간대에 워커를 빠르게 충원합니다. iOS와 Android 모두를 목표로 하는 모바일 매칭 앱입니다.',
    tempoTitle: 'TEMPO',
    tempoSub: '근태관리 SaaS',
    tempoBody:
      '조직 가입, 출퇴근, 교대, 휴가, 승인, 리포트, 서버비 기반 투명 과금과 고객 데이터 반환 증빙까지 운영자가 매일 보는 화면으로 정리합니다.',
    learn: '알아보기',
    openTempo: 'TEMPO 열기',
    missionTitle: '잠깐 일하고, 원하는 일을 하러 가는 생활.',
    missionBody:
      '빈 시간을 활용해 짧게 일하고, 남은 시간에는 하고 싶은 것을 하는 것. TIMO WORKS는 그런 선택이 더 자연스러운 일상 운영 방식이 되도록 만듭니다.',
    values: [
      ['01', '빈 시간 매칭', '잠깐 일하고 싶은 순간에 가까운 일을 바로 찾을 수 있게 합니다.'],
      ['02', '파트너 즉시 충원', '입점 파트너는 필요한 시간대에 바로 지원 가능한 워커 풀을 만납니다.'],
      ['03', '하고 싶은 일로 돌아가기', '짧게 일하고, 배우고, 쉬고, 만나고, 각자의 다음 시간을 선택하게 합니다.'],
    ],
    stats: [
      ['37', 'TIMO API'],
      ['4', '지원 언어'],
      ['14', '일 카테고리'],
      ['200+', '운영 데이터셋'],
    ],
    partnerTitle: '파트너는 필요한 시간에 바로 사람을 찾습니다',
    partnerBody:
      '매장, 행사, 물류, 서비스 현장에서 갑자기 사람이 필요할 때 TIMO에 입점한 파트너는 빈 시간이 있는 워커에게 빠르게 도달할 수 있습니다.',
    partnerPoints: [
      ['빠른 충원', '당일·단시간·피크타임 공고를 모바일 워커 풀에 바로 노출합니다.'],
      ['운영 부담 감소', '지원, 체크인, 정산 흐름을 제품 안에서 이어지게 설계합니다.'],
      ['반복 파트너십', '좋았던 워커와 다시 만나고, 자주 필요한 시간대를 데이터로 확인합니다.'],
    ],
    newsTitle: '최근 소식',
    news: [
      ['TIMO 워커 여정 완성', '워커 앱 주요 플로우와 백엔드 MVP가 launch-candidate 상태에 도달했습니다.'],
      ['TEMPO 운영 배포 시작', 'tempo.timo.work 운영 배포와 실사용자 준비 체크가 진행 중입니다.'],
      ['TIMO 파트너 네트워크', '빈 시간 워커와 파트너를 빠르게 연결하는 입점 구조를 준비하고 있습니다.'],
    ],
    ctaTitle: '빈 시간 워커가 필요한 파트너를 기다립니다.',
    ctaBody: 'TIMO 입점, TEMPO 도입, 제휴 문의를 보내주세요.',
    footer: 'TIMO WORKS creates a mobile work-time network for people and partners.',
  },
  en: {
    nav: ['Products', 'Partners', 'Mission', 'News', 'Contact'],
    heroKicker: 'TIMO WORKS / WORK TIME NETWORK',
    heroA: 'WORK',
    heroB: 'WITHOUT',
    heroC: 'FRICTION',
    heroText:
      'TIMO WORKS turns spare hours into work time and helps partners fill shifts exactly when they need people. TIMO matches fast; TEMPO keeps operations clear.',
    primary: 'Explore products',
    secondary: 'Contact us',
    marquee: ['SPARE-TIME WORK', 'INSTANT STAFFING', 'MOBILE-FIRST', 'MULTILINGUAL OPS', 'ATTENDANCE SAAS'],
    productsTitle: 'We connect available hours with urgent staffing needs',
    productsBody:
      'TIMO connects people who want short work with partners who need coverage now. TEMPO keeps attendance, shifts, settlement, and proof organized.',
    timoTitle: 'TIMO',
    timoSub: 'Spare-time work matching mobile app',
    timoBody:
      'People with a few open hours can find nearby work, while partners fill time slots quickly. TIMO is built as a mobile app for both iOS and Android.',
    tempoTitle: 'TEMPO',
    tempoSub: 'Attendance-management SaaS',
    tempoBody:
      'Organization signup, clock-in, shifts, leave, approvals, reports, transparent server-cost billing, and customer data return evidence.',
    learn: 'Learn more',
    openTempo: 'Open TEMPO',
    missionTitle: 'Work a short shift, then get back to the life you chose.',
    missionBody:
      'Use open hours for short work, then spend the rest of the day learning, resting, meeting people, or doing what matters next.',
    values: [
      ['01', 'Spare-time matching', 'Find nearby work when a few hours suddenly open up.'],
      ['02', 'Instant partner coverage', 'Partners reach workers who can help during the exact time window they need.'],
      ['03', 'Back to your day', 'Work briefly, get paid, and return to the thing you wanted to do next.'],
    ],
    stats: [
      ['37', 'TIMO API endpoints'],
      ['4', 'Product languages'],
      ['14', 'Job categories'],
      ['200+', 'Data assets per domain'],
    ],
    partnerTitle: 'Partners fill shifts right when they need people',
    partnerBody:
      'Stores, events, logistics, and service teams can reach available mobile workers when sudden staffing gaps appear.',
    partnerPoints: [
      ['Fast coverage', 'Post same-day, short-hour, and peak-time openings to an available worker pool.'],
      ['Less overhead', 'Applications, check-ins, and settlement are designed to stay in one flow.'],
      ['Repeat matches', 'Bring back strong workers and learn which time windows need help most often.'],
    ],
    newsTitle: 'Latest',
    news: [
      ['TIMO worker journey completed', 'The worker app and backend MVP reached launch-candidate coverage.'],
      ['TEMPO production path opened', 'The tempo.timo.work deployment and production-readiness checks are underway.'],
      ['TIMO partner network', 'We are preparing the partner model that connects spare-time workers with urgent staffing needs.'],
    ],
    ctaTitle: 'Find workers for the hours you need covered.',
    ctaBody: 'Contact us about TIMO partner onboarding, TEMPO adoption, or business development.',
    footer: 'TIMO WORKS creates a mobile work-time network for people and partners.',
  },
  ja: {
    nav: ['製品', 'パートナー', 'ミッション', 'ニュース', '問い合わせ'],
    heroKicker: 'TIMO WORKS / WORK TIME NETWORK',
    heroA: 'WORK',
    heroB: 'WITHOUT',
    heroC: 'FRICTION',
    heroText:
      'TIMO WORKSは空いた時間を働ける時間に変え、人が必要な現場へすぐにつなげるモバイルワークネットワークを作ります。',
    primary: '製品を見る',
    secondary: '問い合わせ',
    marquee: ['空き時間ワークマッチング', '即時補充', 'モバイル対応', '多言語運用', '正確な勤怠管理'],
    productsTitle: '空いた時間と人が必要な瞬間をつなげます',
    productsBody:
      'TIMOは短く働きたい人と今すぐ人が必要なパートナーをつなげます。TEMPOは勤怠、シフト、精算、証跡を整理します。',
    timoTitle: 'TIMO',
    timoSub: '空き時間ワークマッチングモバイルアプリ',
    timoBody:
      '数時間だけ空いた人は近くの仕事を見つけ、パートナーは必要な時間帯にワーカーを素早く補充できます。iOSとAndroidを想定したモバイルアプリです。',
    tempoTitle: 'TEMPO',
    tempoSub: '勤怠管理SaaS',
    tempoBody:
      '組織登録、出退勤、シフト、休暇、承認、レポート、透明なサーバー費用請求、データ返却証跡まで整理します。',
    learn: '詳しく見る',
    openTempo: 'TEMPOを開く',
    missionTitle: '短く働いて、やりたいことへ戻る生活。',
    missionBody:
      '空いた時間で短く働き、残りの時間は学ぶ、休む、会う、次にやりたいことへ使う。その選択を自然にします。',
    values: [
      ['01', '空き時間マッチング', '数時間空いた時に近くの仕事をすぐ見つけられます。'],
      ['02', '即時補充', 'パートナーは必要な時間帯に動けるワーカーへ届きます。'],
      ['03', '次の予定へ戻る', '短く働き、支払いを受け、やりたいことへ戻れます。'],
    ],
    stats: [
      ['37', 'TIMO API'],
      ['4', '対応言語'],
      ['14', '職種カテゴリ'],
      ['200+', '運用データセット'],
    ],
    partnerTitle: 'パートナーは必要な時間に人を見つけられます',
    partnerBody:
      '店舗、イベント、物流、サービス現場で急に人が必要な時、TIMOのパートナーは空き時間のあるワーカーへ素早く届きます。',
    partnerPoints: [
      ['素早い補充', '当日、短時間、ピークタイムの募集をモバイルワーカーに届けます。'],
      ['運用負担を軽く', '応募、チェックイン、精算の流れを一つにつなげます。'],
      ['繰り返しの関係', '相性の良いワーカーと再び出会い、必要な時間帯を把握できます。'],
    ],
    newsTitle: 'ニュース',
    news: [
      ['TIMOワーカー導線が完成', 'ワーカーアプリとバックエンドMVPがlaunch-candidate状態に到達しました。'],
      ['TEMPO本番展開を開始', 'tempo.timo.workの運用展開と準備確認が進行中です。'],
      ['TIMOパートナーネットワーク', '空き時間ワーカーとパートナーをつなぐ入店モデルを準備しています。'],
    ],
    ctaTitle: '必要な時間だけワーカーを見つけましょう。',
    ctaBody: 'TIMOパートナー登録、TEMPO導入、提携についてご相談ください。',
    footer: 'TIMO WORKS creates a mobile work-time network for people and partners.',
  },
  zh: {
    nav: ['产品', '伙伴', '使命', '新闻', '联系'],
    heroKicker: 'TIMO WORKS / WORK TIME NETWORK',
    heroA: 'WORK',
    heroB: 'WITHOUT',
    heroC: 'FRICTION',
    heroText:
      'TIMO WORKS 把空闲时间变成可工作的时间，并让需要人的现场马上连接到移动端工作者。',
    primary: '查看产品',
    secondary: '联系我们',
    marquee: ['空闲时间工作匹配', '即时补位', '移动端支持', '多语言运营', '精准考勤管理'],
    productsTitle: '连接空闲时间与即时用人需求',
    productsBody:
      'TIMO 连接想短时间工作的人和马上需要人手的伙伴。TEMPO 管理考勤、排班、结算与证明。',
    timoTitle: 'TIMO',
    timoSub: '空闲时间工作匹配移动应用',
    timoBody:
      '有几个小时空闲的人可以找到附近的工作，伙伴也能快速补充需要的时段。TIMO 面向 iOS 和 Android 移动端。',
    tempoTitle: 'TEMPO',
    tempoSub: '考勤管理 SaaS',
    tempoBody:
      '组织注册、上下班、排班、休假、审批、报表、透明服务器成本计费与客户数据返还证据。',
    learn: '了解更多',
    openTempo: '打开 TEMPO',
    missionTitle: '短时间工作，然后回到想做的事。',
    missionBody:
      '用空闲时间短暂工作，剩下的时间学习、休息、见朋友，或继续做自己想做的事。',
    values: [
      ['01', '空闲时间匹配', '几个小时空出来时，可以马上找到附近的工作。'],
      ['02', '伙伴即时补位', '伙伴能触达刚好可以在该时段工作的人。'],
      ['03', '回到自己的时间', '短暂工作、获得收入，然后回到下一件想做的事。'],
    ],
    stats: [
      ['37', 'TIMO API'],
      ['4', '支持语言'],
      ['14', '工作类别'],
      ['200+', '运营数据集'],
    ],
    partnerTitle: '伙伴可以在需要的时间找到人',
    partnerBody:
      '门店、活动、物流和服务现场突然缺人时，TIMO 伙伴可以快速触达到有空闲时间的移动端工作者。',
    partnerPoints: [
      ['快速补位', '当天、短时段、高峰期岗位可以立即展示给工作者。'],
      ['降低运营负担', '申请、签到、结算被设计在同一个流程里。'],
      ['重复合作', '再次邀请表现好的工作者，并了解常缺人的时间段。'],
    ],
    newsTitle: '最新动态',
    news: [
      ['TIMO 劳动者流程已完成', '劳动者应用与后端 MVP 已达到 launch-candidate 覆盖。'],
      ['TEMPO 生产部署已开启', 'tempo.timo.work 部署与生产准备检查正在推进。'],
      ['TIMO 伙伴网络', '我们正在准备连接空闲时间工作者与用人伙伴的入驻模式。'],
    ],
    ctaTitle: '为需要覆盖的时段找到人。',
    ctaBody: '欢迎咨询 TIMO 伙伴入驻、TEMPO 导入或商务合作。',
    footer: 'TIMO WORKS creates a mobile work-time network for people and partners.',
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
  usePageFx(lang)

  return (
    <main>
      <div id="twspot" aria-hidden="true" />
      <nav className="nav" aria-label="Primary">
        <a className="brand" href="#top" aria-label="TIMO WORKS home">
          <span className="brand-mark">TW</span>
          <span>TIMO WORKS</span>
        </a>
        <div className="nav-links">
          {['products', 'partners', 'mission', 'news', 'contact'].map((id, idx) => (
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
            <a className="btn ghost magnetic" href={`mailto:${CONTACT_EMAIL}`}>
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
        <div className="marquee-track">
          <div className="marquee-group">
            {t.marquee.map((item, idx) => (
              <span key={`a-${item}-${idx}`}>{item}</span>
            ))}
          </div>
          <div className="marquee-group">
            {t.marquee.map((item, idx) => (
              <span key={`b-${item}-${idx}`}>{item}</span>
            ))}
          </div>
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

      <section className="section partners" id="partners">
        <div className="reveal">
          <p className="section-label">PARTNERS</p>
          <h2>{t.partnerTitle}</h2>
          <p>{t.partnerBody}</p>
        </div>
        <div className="partner-list reveal">
          {t.partnerPoints.map(([title, body]) => (
            <article key={title}>
              <span>{title}</span>
              <p>{body}</p>
            </article>
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
          <a className="btn primary magnetic sweep" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </div>
      </section>

      <footer>
        <strong>TIMO WORKS</strong>
        <span>{t.footer}</span>
        <a href="https://tempo.timo.work/">tempo.timo.work</a>
        <small>© 2026 TIMO WORKS. All rights reserved.</small>
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

function useRevealFx(lang: Lang) {
  // Reveal-on-scroll and count-up observers. These must be re-attached when the
  // language changes: switching language remounts the keyed list items (e.g. the
  // mission stats and news cards, whose React keys are language-dependent text),
  // which detaches the original observers and would otherwise leave the new nodes
  // stuck transparent (no `.in`) with their count animation never running.
  useEffect(() => {
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

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => countIo.observe(el))

    return () => {
      io.disconnect()
      countIo.disconnect()
    }
  }, [lang])
}

function usePageFx(lang: Lang) {
  useRevealFx(lang)

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
