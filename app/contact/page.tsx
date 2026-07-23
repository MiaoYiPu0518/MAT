import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们 | MAT摩安科技",
  description: "联系MAT摩安科技技术团队，获取金属表面自生强化与工业设备摩擦治理方案。",
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="site-shell">
          <div className="section-kicker">CONTACT / MAT TECHNOLOGY</div>
          <h1>让关键设备，<br />获得专业的工程答案。</h1>
          <p>从现场工况出发，与MAT摩擦学工程团队建立直接联系，获取专属的全寿命周期治理方案。</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="site-shell">
          <div className="contact-grid">
            <div className="contact-panel dark">
              <div className="section-kicker">01 / ENGINEERING DESK</div>
              <h2>联系技术顾问</h2>
              <p>请留下您的设备类型、运行工况或当前遇到的摩擦磨损问题。MAT团队将根据现场需求，为您匹配合适的产品与应用路径。</p>
              <div className="contact-details">
                <div className="contact-detail"><small>DIRECT LINE / 直接电话</small><a href="tel:+8613604098408">+86 136 0409 8408</a></div>
                <div className="contact-detail"><small>EMAIL / 电子邮箱</small><a href="mailto:caoqi0511@gmail.com">caoqi0511@gmail.com</a></div>
                <div className="contact-detail"><small>OFFICE / 办公地址</small><address>北京市丰台区外环南路甲1号 A座 3-701</address></div>
                <div className="contact-detail"><small>AVAILABILITY / 服务时间</small><address>工作日 09:00 — 18:00<br />中国标准时间 GMT+8</address></div>
              </div>
            </div>

            <div className="contact-panel wechat-panel">
              <div>
                <div className="section-kicker">02 / WECHAT CHANNEL</div>
                <h2>扫码，进入MAT微信服务台。</h2>
                <p>关注MAT微信公众号，获取技术动态、应用案例与产品资料，也可以直接向我们发起咨询。</p>
              </div>
              <div>
                <div className="qr-frame"><Image src="/images/QR_code.jpg" alt="MAT摩安科技微信公众号二维码" width={420} height={420} /></div>
                <div className="wechat-caption"><div><strong>MAT摩安科技</strong><span>OFFICIAL WECHAT ACCOUNT</span></div><span>SCAN / CONNECT</span></div>
              </div>
            </div>
          </div>

          <div className="contact-next">
            <p>还在了解MAT技术？先从核心机理开始。</p>
            <Link href="/tech/tech-intro">查看核心技术 <span>↗</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
