import Image from "next/image";
import styles from "@/app/tech/tech-intro/technology.module.css";

const cases = [
  {
    id: "case-wind", category: "01 / WIND POWER", title: "风力发电｜齿轮与轴承的在线治理",
    paragraphs: [
      "围绕主齿轮箱、主轴轴承及偏航、变桨系统，MAT从摩擦界面入手，改善齿面微点蚀、磨损及浅层表面损伤，并结合振动、油液和内窥镜检测持续评价设备状态。",
      "T001机组于2025年9月添加MAT。初期齿面变化尚不明显，至2026年3月，内窥镜观察到修复层逐步覆盖、表面形貌改善；高频振动能量由介入前的0.6–0.7 m/s²，降至2026年1月后的≤0.1 m/s²。",
      "低速高载荷滑动轴承台架在180小时修复运行后，轴表面多数划痕与凹坑消失，同位轴径增加20–40 μm，大块剥落仍存在。主轴轴承台架在15 rpm下连续运行20天，也观察到划痕与凹坑的填充现象。",
    ],
    metrics: [{ label: "T001机组高频振动能量", before: "0.6–0.7", value: "≤0.1", unit: "m/s²" }],
    images: [
      { src: "gear-before-2026.webp", width: 960, height: 720, alt: "T001风电机组三级行星轮治理前的齿面内窥镜图像", label: "治理前" },
      { src: "gear-after-2026.webp", width: 581, height: 436, alt: "T001风电机组三级行星轮治理后的齿面内窥镜图像", label: "治理后" },
    ],
    caption: "T001机组三级行星轮的分阶段观察。拍摄视角与光照不同，结合状态监测综合评价。",
  },
  {
    id: "case-railway", category: "02 / RAIL TRANSPORT", title: "轨道交通｜动力与走行系统的摩擦治理",
    paragraphs: [
      "MAT面向内燃机车柴油机、走行传动及轴箱轴承等关键部位，协同改善润滑与摩擦表面状态。针对长周期、高负荷运行，以油液监测、部件检测和运行考核跟踪技术状态。",
      "哈密机务段DF8B机车16V280型柴油机于2002年12月至2007年11月完成115.2万公里应用考核。期间柴油机技术状态、润滑油理化性能及光谱铁谱监测指标正常；平均燃油单耗较对比新车节约2.2%，较全段同型号机车平均值节约4.0%。",
      "在SKF机车轴箱轴承260小时台架试验中，通过治理前后表面形貌、微观观察和成分检测，评价轴承磨损界面的重构效果。",
    ],
    metrics: [{ label: "DF8B柴油机累计应用考核", value: "115.2", unit: "万公里" }],
    images: [
      { src: "railway-locomotive-2026.webp", width: 512, height: 375, alt: "DF8B内燃机车应用现场", label: "内燃机车" },
      { src: "railway-maintenance-2026.webp", width: 521, height: 378, alt: "铁路柴油机曲轴检查现场", label: "部件检查" },
    ], caption: "从机车运行考核到柴油机部件检查，跟踪动力系统的长期技术状态。",
  },
  {
    id: "case-shield", category: "03 / CONSTRUCTION & MINING", title: "工程与矿山机械｜重载传动的效率优化",
    paragraphs: [
      "针对盾构机、矿山机械及工程装备中的动力和减速传动系统，MAT通过材料与润滑介入，改善重载齿轮、轴承等摩擦副的表面状态，降低摩擦损耗与运行温升。",
      "2013年，中国中铁隧道集团在直径9.33米的海瑞克盾构机上实施应用。与同型号、同标段、同施工量的对比机相比，主刀盘驱动齿轮箱能量输出效率高18.6%，螺旋输送机齿轮箱高8.3%；两处油温分别低1.9℃和5.3℃。",
    ],
    metrics: [{ label: "主刀盘驱动齿轮箱能量输出效率", value: "+18.6", unit: "% / 相较对比机" }],
    images: [
      { src: "shield-site-2026.webp", width: 1328, height: 747, alt: "盾构机关键传动部位的现场作业", label: "施工现场" },
      { src: "shield-system-2026.webp", width: 516, height: 333, alt: "盾构机结构及传动部位示意", label: "系统示意" },
    ], caption: "盾构机现场作业与系统结构示意；治理重点为主刀盘及螺旋输送机齿轮箱。",
  },
  {
    id: "case-automotive", category: "04 / ROAD TRANSPORT", title: "公路运输｜发动机与传动系统的长效润滑",
    paragraphs: [
      "MAT应用于发动机、变速箱、减速器与差速器等车辆摩擦部位，改善接触表面的形貌与润滑状态，服务于营运车辆的燃油经济性、动力性能和长期运行可靠性。",
      "青岛交运巴士以3台公交车开展15000公里应用试验，燃油节约率为3%–6%，发动机输出功率提高2%–5%，尾气排放降低30%–50%。具体效果与车辆状态、运行路线和负载条件相关。",
    ],
    metrics: [{ label: "公交实车应用试验燃油节约率", value: "3–6", unit: "%" }],
    images: [{ src: "automotive-powertrain-2026.webp", width: 517, height: 220, alt: "MAT公路运输应用涉及的客车与货车类型示意", label: "车辆应用范围" }],
    caption: "客车与货车应用范围示意。公交试验结果对应上述3台试验车辆。",
  },
  {
    id: "case-machine", category: "05 / PRECISION MANUFACTURING", title: "精密制造｜机床与机器人传动部件的状态维护",
    paragraphs: [
      "从机床主轴、铣头变速箱到工业机器人RV与谐波减速器，MAT针对高精度传动中的摩擦与磨损开展表面治理，结合设备结构、润滑方式和运行工况制定介入方案。",
      "中船大连船用推进器有限公司的龙门数控铣床铣头变速箱，原平均维护周期约6个月，每次维修成本40–60万元。2022年10月采用MAT后，至2024年6月仍保持稳定状态，累计节省维修费80多万元，减少维修停机至少2个月。",
      "机器人关节传动中，围绕减速器齿轮及轴承的接触界面开展摩擦治理，并通过表面形貌与材料成分检测评价重构效果。",
    ],
    metrics: [{ label: "铣头变速箱应用期间减少维修停机", value: "≥2", unit: "个月" }],
    images: [
      { src: "precision-machine-2026.webp", width: 816, height: 720, alt: "中船大连船用推进器有限公司龙门数控铣床", label: "龙门数控铣床" },
      { src: "precision-robot-2026.webp", width: 753, height: 399, alt: "工业机器人生产单元及关节传动应用场景", label: "工业机器人" },
    ], caption: "龙门数控铣床应用设备与工业机器人场景。维修周期及费用数据对应铣头变速箱案例。",
  },
  {
    id: "case-thermal", category: "06 / THERMAL POWER & COOLING", title: "热电与冷却系统｜风机齿轮箱的摩擦损耗治理",
    paragraphs: [
      "围绕空冷岛风机齿轮箱、轴承及相关传动部位，MAT通过润滑协同与表面重构改善设备运行状态。在持续运行工况下，结合驱动电流、振动和温度变化，评价治理效果。",
      "神华电厂空冷岛风机齿轮箱应用中，两台试验机的驱动电流分别下降2.1%和1.9%，同时观察到振动信号下降。驱动电流变化需结合负载与运行条件分析，不能直接等同于整机节电率。",
    ],
    metrics: [{ label: "两台试验风机驱动电流下降", value: "2.1 / 1.9", unit: "%" }],
    images: [{ src: "thermal-fans-2026.webp", width: 545, height: 410, alt: "热电厂空冷岛大型风机设备现场", label: "空冷岛风机" }],
    caption: "空冷岛风机设备现场。以运行电流与振动监测跟踪传动系统状态。",
  },
  {
    id: "case-steel", category: "07 / METALLURGY", title: "冶金装备｜轧线轴承的表面重构",
    paragraphs: [
      "冶金装备中的轧轮轴承与重载工业传动，长期承受高载荷与复杂润滑条件。MAT在可治理的表面损伤范围内介入，改善滚子、滚道等接触区域的磨损状态，并进行分阶段检查。",
      "钢铁轧线轧轮轴承应用中，在治理前、运行200小时及1500小时三个阶段观察滚子与滚道形貌。后续检查可见滚子表面状态改善，作为持续评价摩擦界面重构的依据。",
    ],
    metrics: [{ label: "轧轮轴承分阶段检查", value: "200 / 1500", unit: "小时" }],
    images: [
      { src: "steel-bearing-before-2026.webp", width: 633, height: 474, alt: "钢铁轧线轧轮轴承治理前的滚子表面", label: "治理前" },
      { src: "steel-bearing-after-2026.webp", width: 603, height: 451, alt: "钢铁轧线轧轮轴承治理1500小时后的滚子表面", label: "治理1500小时" },
    ], caption: "轧轮轴承滚子的分阶段表面观察。图像视角与光照存在差异。",
  },
  {
    id: "case-marine", category: "08 / MARINE PROPULSION", title: "船舶动力｜动力与舵桨传动的摩擦管理",
    paragraphs: [
      "船舶柴油机、动力传动与舵桨传动系统，是MAT面向长周期服役装备的应用方向。围绕齿轮、轴承及其他润滑摩擦副，结合负载、油品和表面状态，制定材料与润滑协同方案。",
      "工程介入以设备状态评估为起点，通过温度、振动、油液和部件检查跟踪运行变化，为动力系统的维护与全寿命周期摩擦治理提供依据。",
    ], metrics: [],
    images: [{ src: "marine-propulsion-2026.webp", width: 1400, height: 788, alt: "船用柴油机与轴系推进传动系统示意", label: "船舶动力应用场景" }],
    caption: "船用柴油机与推进传动系统示意，展示技术适用部位。",
  },
];

function CaseMetric({ label, value, unit, before }: { label: string; value: string; unit: string; before?: string }) {
  return (
    <div className={styles.metricPanel}>
      <dt>{label}</dt>
      {before ? <dd className={styles.metricComparison}>
        <span className={styles.metricBaseline}><span className={styles.metricPhase}>介入前</span><strong>{before}</strong><small>{unit}</small></span>
        <span className={styles.metricArrow} aria-hidden="true">→</span>
        <span className={styles.metricOutcome}><span className={styles.metricPhase}>2026年1月后</span><strong>{value}</strong><small>{unit}</small></span>
      </dd> : <dd className={styles.metricResult}>
        <strong className={value.includes("/") ? styles.metricCompact : undefined}>{value}</strong><small>{unit}</small>
      </dd>}
    </div>
  );
}

export default function TechCaseStudies() {
  return (
    <div className={styles.caseStudies}>
      {cases.map((item) => (
        <article id={item.id} className={styles.featureCase} key={item.id}>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>{item.category}</p>
            <h3>{item.title}</h3>
            {item.metrics.length > 0 && <dl className={styles.featureMetrics}>
              {item.metrics.map((metric) => <CaseMetric key={metric.label} {...metric} />)}
            </dl>}
            {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <figure className={styles.caseFigure}>
            <div className={`${styles.caseImages} ${item.images.length > 1 ? styles.pairedImages : ""}`}>
              {item.images.map((photo) => <div key={photo.src}>
                <Image src={`/images/tech/${photo.src}`} alt={photo.alt} width={photo.width} height={photo.height} sizes={item.images.length > 1 ? "(max-width: 520px) calc(100vw - 40px), (max-width: 760px) 45vw, 24vw" : "(max-width: 760px) calc(100vw - 40px), 50vw"} />
                <span>{photo.label}</span>
              </div>)}
            </div>
            <figcaption>{item.caption}</figcaption>
          </figure>
        </article>
      ))}
      <p className={styles.evidenceNote}>案例结果对应具体设备与试验工况。治理方案、适用范围及评价周期，以设备结构、损伤评估、润滑条件和运行负载为依据。</p>
    </div>
  );
}
