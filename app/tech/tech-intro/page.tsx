import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TechCaseStudies from "@/components/TechCaseStudies";
import styles from "./technology.module.css";

const title = "技术介绍与应用案例｜在役微观再制造";
const description = "MAT在役微观再制造技术利用运行中的摩擦能重构金属摩擦界面，改善润滑与表面状态，为风电、铁路、工程机械、精密制造等工业装备提供全寿命周期摩擦治理。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/tech/tech-intro/" },
  openGraph: { title, description, url: "/tech/tech-intro/", type: "website", locale: "zh_CN" },
  twitter: { card: "summary", title, description },
};

const documentUrl = "/docs/mat-technology-2026.pdf";
const mechanisms = [
  { title: "动态抛光", label: "SURFACE TOPOGRAPHY", copy: "通过微观材料去除与表面重整，改善粗糙度及接触形貌，减弱局部应力与电荷集中。" },
  { title: "固液复合润滑", label: "COMPOSITE LUBRICATION", copy: "功能材料参与摩擦界面与润滑介质的作用，协同构建固液多元润滑环境。" },
  { title: "原位改性强化", label: "IN-SITU STRENGTHENING", copy: "在摩擦能作用下发生结构活化、物质迁移与摩擦化学反应，形成具有非晶或微晶特征的复合表层。" },
  { title: "自适应增材修复", label: "ADAPTIVE REGENERATION", copy: "在实际接触区域补充材料、填充表面损伤，动态优化摩擦副表面状态与配合间隙。" },
];
const sectors = [
  ["风力发电", "主轴轴承 · 主齿轮箱 · 电机轴承 · 偏航与变桨系统", "case-wind"],
  ["轨道交通", "柴油机 · 走行传动 · 轴箱与抱轴轴承 · 轮轨界面", "case-railway"],
  ["工程与矿山机械", "动力与传动系统 · 减速器 · 盾构机关键齿轮箱", "case-shield"],
  ["公路运输", "发动机 · 变速箱 · 减速器 · 差速器", "case-automotive"],
  ["精密制造", "机床主轴与铣头变速箱 · 工业机器人RV与谐波减速器", "case-machine"],
  ["热电与冷却系统", "空冷岛风机齿轮箱 · 轴承 · 冷凝与破碎设备", "case-thermal"],
  ["冶金装备", "轧线轧轮轴承 · 重载齿轮与工业传动摩擦副", "case-steel"],
  ["船舶动力", "柴油机 · 动力传动系统 · 舵桨传动系统", "case-marine"],
];

export default function TechIntro() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.breadcrumb}><Link href="/">首页</Link><span>/</span><span>MAT技术</span><span>/</span><span>技术介绍</span></div>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>MAT / IN-SERVICE MICRO-REMANUFACTURING</p>
              <h1 className={styles.title}>在役微观再制造<span>让摩擦界面，在运行中重构。</span></h1>
              <p className={styles.heroLead}>利用设备运行中的摩擦能，让功能材料参与表面抛光、改性与增材修复。从微观界面出发，构建设备全寿命周期的低摩擦、低磨损润滑环境。</p>
              <div className={styles.heroActions}>
                <Link href="#applications" className={styles.primaryButton}>查看应用案例 <span aria-hidden="true">↓</span></Link>
                <Link href="#mechanism" className={styles.heroLink}>了解作用机理 <span aria-hidden="true">↓</span></Link>
              </div>
            </div>
          </div>
          <div className={styles.heroFoot}><span>摩擦界面重构</span><span>表面性能优化</span><span>全寿命周期治理</span></div>
        </div>
      </section>

      <nav className={styles.sectionNav} aria-label="技术介绍页内导航">
        <div className={styles.shell}>
          <Link href="#overview">01 技术概述</Link><Link href="#mechanism">02 作用机理</Link><Link href="#engineering">03 治理路径</Link><Link href="#applications">04 应用案例</Link><Link href="#resources">05 技术支持</Link>
        </div>
      </nav>

      <section id="overview" className={styles.section}>
        <div className={`${styles.shell} ${styles.overviewGrid}`}>
          <div>
            <p className={styles.eyebrow}>01 / TECHNOLOGY OVERVIEW</p><h2 className={styles.heading}>把设备运行过程，<br /><span>变成界面重构过程。</span></h2>
            <figure className={styles.overviewVisual}>
              <div className={styles.surfaceImages}>
                <div><Image src="/images/tech/surface-before.webp" alt="摩擦表面显微图像，可见沟槽与表面损伤形貌" width={324} height={324} sizes="(max-width: 760px) 45vw, 22vw" /><span>磨损表面形貌</span></div>
                <div><Image src="/images/tech/surface-reconstructed.webp" alt="重构表面的显微图像，展示较平整的表面形貌" width={324} height={324} sizes="(max-width: 760px) 45vw, 22vw" /><span>重构表面形貌</span></div>
              </div>
              <figcaption>摩擦表面的显微观察示例。结合形貌、成分与性能检测，评价界面重构效果。</figcaption>
            </figure>
          </div>
          <div className={styles.bodyCopy}>
            <p>MAT在役微观再制造技术，是融合表面工程、摩擦学与润滑技术的在线摩擦治理方法。通过功能材料介入，利用设备服役时产生的摩擦热、载荷和剪切作用，在实际摩擦区域完成微观材料去除、补充、增材、改性和组织重建。</p>
            <p>界面重构调控功能材料（Mechanically Activated Tribointerfacial Material，MAT材料）是这一过程的材料基础。以天然层状硅酸盐为基础的活性功能复合粉体，通过界面吸附、填充、剪切滑动与摩擦化学作用参与重构。</p>
            <p>治理目标是促进界面磨损与微观增材补偿形成相对动态平衡，持续优化表面形貌、表层性能及配合间隙，减少摩擦损耗与零部件劣化。</p>
          </div>
        </div>
        <dl className={`${styles.shell} ${styles.principles}`}>
          <div><dt>能量来源</dt><dd>设备运行中的摩擦能</dd></div>
          <div><dt>作用位置</dt><dd>摩擦副表面与界面</dd></div>
          <div><dt>治理方式</dt><dd>功能材料介入，在线原位重构</dd></div>
        </dl>
      </section>

      <section id="mechanism" className={`${styles.section} ${styles.darkSection}`}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>02 / MECHANISM</p><h2 className={styles.heading}>闪温驱动。<br /><span>原位熔覆。</span></h2></div><p>从局部接触点的瞬态高温与高应力，到摩擦表面的结构重建。MAT将服役中的界面演化转化为可治理的工程过程。</p></div>
          <div className={styles.mechanismFlow} aria-label="闪温驱动原位熔覆作用过程">
            <div><span>输入</span><strong>功能材料 + 润滑介质</strong><p>进入实际摩擦接触区域</p></div><b aria-hidden="true">→</b>
            <div><span>激活</span><strong>摩擦热 / 载荷 / 剪切</strong><p>吸附、富集与摩擦化学作用</p></div><b aria-hidden="true">→</b>
            <div><span>重构</span><strong>原位复合表层</strong><p>动态强化与微观增材补偿</p></div>
          </div>
          <div className={styles.mechanismVisuals}>
            <figure><Image src="/images/tech/interface-adsorption.webp" alt="功能颗粒吸附于摩擦接触界面，通过片状材料与吸附层隔离直接接触的示意图" width={770} height={497} sizes="(max-width: 760px) calc(100vw - 40px), 50vw" /><figcaption><strong>界面吸附与接触隔离</strong><span>功能颗粒在接触区域富集，参与固液复合润滑。</span></figcaption></figure>
            <figure><Image src="/images/tech/interface-filling.webp" alt="片状功能颗粒与磨屑复合填充金属表面凹坑及裂缝的示意图" width={760} height={497} sizes="(max-width: 760px) calc(100vw - 40px), 50vw" /><figcaption><strong>微观填充与材料补偿</strong><span>颗粒参与表面损伤区域的填充与界面重构。</span></figcaption></figure>
          </div>
          <div className={styles.mechanismGrid}>
            {mechanisms.map((item, i) => <div key={item.title}><span className={styles.number}>0{i + 1}</span><h3>{item.title}</h3><small>{item.label}</small><p>{item.copy}</p></div>)}
          </div>
          <div className={styles.technicalNote}><strong>FTC / 闪温驱动原位熔覆</strong><p>闪温驱动原位熔覆（Flash-Temperature-Driven In-Situ Cladding，FTC）使功能材料在局部闪温点发生活化、混合、迁移、反应与再凝固，参与摩擦表层重构。结合实际工况与表面检测，评价重构层的形貌、成分和性能。</p></div>
        </div>
      </section>

      <section id="engineering" className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>03 / ENGINEERING APPROACH</p><h2 className={styles.heading}>从早期强化，<br /><span>到受损界面治理。</span></h2></div><p>以设备状态确定介入时机，以检测记录评价治理效果。将材料、润滑与健康监测纳入同一条工程路径。</p></div>
          <figure className={styles.engineeringVisual}>
            <div><Image src="/images/tech/bearing-maintenance-system.webp" alt="电机与轴承运维部件的分解结构示意，展示电机本体、轴承及端盖部件" width={1069} height={412} sizes="(max-width: 760px) calc(100vw - 40px), 900px" /></div>
            <figcaption><strong>电机轴承运维系统结构示意</strong><span>围绕关键摩擦部位，协同实施状态监测、精准加注与材料治理。</span></figcaption>
          </figure>
          <div className={styles.pathGrid}>
            <div><span className={styles.number}>01 / 早期介入</span><h3>建立抗磨基础</h3><p>从装配、台架跑合、运输与调试阶段，到磨合后的服役阶段，结合设备工况实施表面强化，降低早期磨损与微动损伤。</p></div>
            <div><span className={styles.number}>02 / 在线治理</span><h3>改善表面损伤</h3><p>针对微磨损、微点蚀、浅层疲劳和表面粗糙度恶化等界面问题，先评估损伤，再制定材料与润滑介入方案。</p></div>
            <div><span className={styles.number}>03 / 持续评估</span><h3>用状态数据闭环</h3><p>结合温度、振动、油液及内窥镜记录跟踪状态；必要时以表面形貌、成分和性能检测分析重构层。</p></div>
          </div>
          <div className={styles.engineeringNotes}>
            <div><p className={styles.eyebrow}>ELECTRICAL EROSION</p><h3>电腐蚀抑制与界面修复</h3><p>MAT动态抛光有助于减弱微观凸起处的电荷集中。Mso智能微纳米颗粒在高能区域形成的瞬态导电路径，可能促进电荷疏散；结合电流响应、表面形貌与设备工况，评价电腐蚀抑制及表面治理效果。</p></div>
            <div><p className={styles.eyebrow}>MAT.AI / CONDITION MONITORING</p><h3>材料治理与智能运维协同</h3><p>MAT将状态监测、故障诊断与材料治理相结合。电机轴承运维终端集成温度、振动监测和精准加注，润滑脂滴灌通过微量补充基础油与强化组分，改善润滑性能，支持持续的状态维护。</p></div>
          </div>
          <div className={styles.boundary}><strong>工程适用边界</strong><p>表面治理需以损伤评估为前提。断齿、滚动体破碎、大面积剥落、基体疲劳裂纹扩展至失效、保持架断裂及轴承座永久变形等结构性损伤，应按检修规范维修或更换。针对具体设备，MAT技术团队结合检测结果确定介入方案与检修安排。</p></div>
        </div>
      </section>

      <section id="applications" className={`${styles.section} ${styles.applicationSection}`}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>04 / INDUSTRIAL APPLICATIONS</p><h2 className={styles.heading}>从微观界面，<br /><span>到工业现场。</span></h2></div><p>覆盖动力、传动与关键摩擦副。面向不同行业的设备结构和运行工况，将材料治理、润滑优化与状态监测融入实际运维。</p></div>
          <div className={styles.sectorGrid}>{sectors.map(([title, copy, id], i) => <Link href={`#${id}`} key={title}><span>0{i + 1}</span><h3>{title} <b aria-hidden="true">↓</b></h3><p>{copy}</p></Link>)}</div>
          <TechCaseStudies />
        </div>
      </section>

      <section id="resources" className={`${styles.section} ${styles.resourceSection}`}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>05 / ENGINEERING SUPPORT</p>
          <div className={styles.resourceGrid}>
            <div><h2 className={styles.heading}>为您的设备，<br /><span>制定治理方案。</span></h2><p className={styles.resourceCopy}>从设备结构、运行负载、润滑条件与损伤状态出发，评估适用范围，确定材料介入方式和状态跟踪周期。联系MAT技术团队，开展具体设备的工程评估。</p><Link href="/contact" className={styles.primaryButton}>咨询设备治理方案 <span aria-hidden="true">↗</span></Link></div>
            <div className={styles.resources}>
              <div className={styles.documentCard}><span>PDF / 2026 / 94页</span><h3>MAT技术介绍（2026）</h3><p>技术机理与应用记录完整文档</p><div><a href={documentUrl} target="_blank" rel="noopener noreferrer">在线阅读 ↗</a><a href={documentUrl} download="MAT技术介绍（2026）.pdf">下载资料 ↓</a></div></div>
              <Link href="/tech/reports" className={styles.resourceLink}><div><strong>运用报告</strong><span>查看设备应用与检测报告</span></div><b aria-hidden="true">↗</b></Link>
              <Link href="/tech/papers" className={styles.resourceLink}><div><strong>学术论文</strong><span>阅读材料与摩擦学研究</span></div><b aria-hidden="true">↗</b></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
