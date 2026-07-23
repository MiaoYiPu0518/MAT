import Image from "next/image";
import Link from "next/link";

const capabilities = [
  { number: "01", title: "在线治理", english: "IN-SITU", desc: "无需拆解设备，在运行工况中完成金属表面强化与摩擦治理。" },
  { number: "02", title: "自生强化", english: "REGENERATE", desc: "利用摩擦能量形成保护层，让磨损表面获得持续自愈能力。" },
  { number: "03", title: "全周期提效", english: "LIFECYCLE", desc: "降低摩擦损耗、延长维护周期，重塑装备全生命周期价值。" },
];

const sectors = [
  { title: "风力发电", tag: "WIND ENERGY", image: "/images/home/sector-wind-v2.webp", desc: "齿轮箱 · 主轴轴承 · 发电机轴承" },
  { title: "轨道交通", tag: "RAIL TRANSIT", image: "/images/home/sector-rail-v2.webp", desc: "柴油机 · 传动系统 · 轮轨系统" },
  { title: "工业传动", tag: "INDUSTRIAL DRIVE", image: "/images/home/sector-industrial-v2.webp", desc: "重载齿轮 · 减速器 · 关键摩擦副" },
  { title: "汽车动力", tag: "AUTOMOTIVE", image: "/images/home/sector-automotive-v2.webp", desc: "发动机 · 变速箱 · 差速器" },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <Image src="/images/banner-1.png" alt="全球工业装备运行网络" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="site-shell hero-content">
          <div className="hero-eyebrow"><span /> TRIBOLOGY SYSTEMS ENGINEERING · MAT/96</div>
          <h1>驾驭摩擦。<br /><em>重构寿命。</em></h1>
          <p className="hero-lead">以微纳米材料与摩擦化学为基础，在设备运行工况中原位重构金属表面。无需停机，无需拆解。</p>
          <div className="hero-actions">
            <Link href="/tech/tech-intro" className="button button-primary">探索核心技术 <span>↗</span></Link>
            <Link href="/cases" className="button button-ghost">查看应用案例 <span>→</span></Link>
          </div>
        </div>
        <div className="hero-reference" aria-hidden="true"><span>39.9042° N</span><span>116.4074° E</span><span>SYS / ACTIVE</span></div>
        <div className="hero-rail" aria-label="核心能力">
          <div><strong>IN-SITU</strong><span>原位表面重构</span></div>
          <div><strong>ONLINE</strong><span>在线摩擦治理</span></div>
          <div><strong>LIFECYCLE</strong><span>全寿命周期工程</span></div>
        </div>
        <div className="scroll-cue"><span>SCROLL TO DISCOVER</span><i /></div>
      </section>

      <section className="intro-section">
        <div className="site-shell intro-grid">
          <div className="section-kicker">01 / 核心技术</div>
          <div>
            <h2 className="section-title">摩擦不是损耗，<br />而是<span>可控变量。</span></h2>
            <p className="section-copy">MAT金属表面自生强化技术，将表面工程与润滑技术深度融合。我们不只是延缓损耗，更利用设备运行中的摩擦能，在金属表面原位生成致密强化层。</p>
          </div>
          <Link href="/tech/tech-intro" className="circle-link" aria-label="了解MAT技术"><span>了解技术</span><b>↗</b></Link>
        </div>
        <div className="site-shell capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.number}>
              <div className="capability-top"><span>{item.number}</span><small>{item.english}</small></div>
              <div className="capability-icon" aria-hidden="true"><i /><i /><i /></div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="site-shell process-grid">
          <div className="process-copy">
            <div className="section-kicker light">02 / 作用机理</div>
            <div className="technical-code">MODEL / FLASH-TEMP CLADDING</div>
            <h2>微观重构。<br />宏观跃迁。</h2>
            <p>富镁层状硅酸盐微粒进入摩擦界面，在局部高温高压条件下激活，持续填补磨损微区并形成高硬度保护层。</p>
            <div className="process-steps" aria-label="技术作用过程">
              <div><span>01</span><strong>智能感知磨损区域</strong></div>
              <div><span>02</span><strong>定向激活微纳材料</strong></div>
              <div><span>03</span><strong>原位生成强化表面</strong></div>
            </div>
          </div>
          <div className="process-visual" aria-label="金属表面自生强化技术机理示意">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="core"><span>MAT</span><small>REGENERATIVE LAYER</small></div>
            <div className="particle p1" /><div className="particle p2" /><div className="particle p3" /><div className="particle p4" />
            <div className="visual-label label-a">摩擦能激活 <span>01</span></div>
            <div className="visual-label label-b">微纳米沉积 <span>02</span></div>
            <div className="visual-label label-c">强化层生成 <span>03</span></div>
          </div>
        </div>
      </section>

      <section className="sectors-section">
        <div className="site-shell">
          <div className="section-heading-row">
            <div><div className="section-kicker">03 / 行业方案</div><h2 className="section-title">为关键装备，<br /><span>重构生命周期。</span></h2></div>
            <p>从风电到轨道交通，从工业传动到大型装备，MAT让每一次转动更稳定、更持久、更高效。</p>
          </div>
          <div className="sector-grid">
            {sectors.map((sector, index) => (
              <Link href="/cases" className="sector-card" key={sector.title}>
                <Image src={sector.image} alt={sector.title} fill sizes="(max-width: 800px) 100vw, 33vw" />
                <div className="sector-overlay" />
                <span className="sector-index">0{index + 1}</span>
                <div className="sector-content"><small>{sector.tag}</small><h3>{sector.title}</h3><p>{sector.desc}</p></div>
                <span className="sector-arrow">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="proof-section">
        <div className="site-shell proof-grid">
          <div className="proof-media">
            <Image src="/images/home/documentary-cover-v2.webp" alt="央视《科创中国》摩安科技专题纪录片" fill sizes="(max-width: 900px) 100vw, 50vw" />
            <div className="proof-shade" />
            <a href="/videos/Innovation_China.mp4" target="_blank" rel="noreferrer" className="play-button" aria-label="播放《科创中国》纪录片"><span>▶</span></a>
            <div className="media-caption"><span>CCTV DOCUMENTARY</span><strong>《创启摩安 · 智造未来》</strong></div>
          </div>
          <div className="proof-copy">
            <div className="section-kicker">04 / 权威见证</div>
            <div className="cctv-mark">CCTV <span>科创中国</span></div>
            <h2>被国家级镜头<br />记录的中国创新。</h2>
            <p>作为新质生产力典型代表企业，摩安科技入选央视《科创中国》。三十年专注摩擦治理，让中国原创技术走向关键工业现场。</p>
            <Link href="/about/credentials" className="text-link">查看资质与荣誉 <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-noise" aria-hidden="true" />
        <div className="site-shell cta-inner">
          <div className="section-kicker light">LET&apos;S MOVE INDUSTRY FORWARD</div>
          <h2>关键装备，<br />不应向磨损妥协。</h2>
          <p>由MAT摩擦学工程团队，为您的设备建立专属全寿命周期治理方案。</p>
          <Link href="/contact" className="button button-light">联系技术顾问 <span>↗</span></Link>
        </div>
      </section>
    </div>
  );
}
