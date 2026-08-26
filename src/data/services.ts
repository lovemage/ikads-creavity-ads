/**
 * 01 服務內容 — 五張橫向卡
 * art 為 null 代表素材尚未產出，元件會略過插圖不渲染破圖。
 * 素材規格見 image_prompts.md。
 */

export interface Service {
  no: string;
  title: string;
  body: string;
  art: string | null;
  alt: string;
}

export const servicesLead =
  '灰產廣告代投，除了風控，沒有我們上不了的灰色產業。讓我們幫你提升你的業績。';

export const services: Service[] = [
  {
    no: '01',
    title: '廣告帳號',
    body: '廣告帳戶由我們提供，帳號掛在我們這邊，你不用自己申請、也不用自己養。帳號被封我們換一個新的接著投，不另外收費。',
    art: '/assets/svc-account.webp',
    alt: '線條插畫，人物把一個廣告帳戶視窗遞向前方',
  },
  {
    no: '02',
    title: '廣告支付卡',
    body: '帳戶要綁的支付卡由我們準備。媒體費從你儲值進來的額度扣，扣到哪、剩多少，我們回報給你。',
    art: '/assets/svc-card.webp',
    alt: '線條插畫，人物遞出一張廣告支付卡',
  },
  {
    no: '03',
    title: '廣告素材',
    body: '全代製作方案含圖片與影片素材，依版位尺寸做好。選自備素材方案就由你提供，我們負責代投。',
    art: '/assets/svc-creative.webp',
    alt: '線條插畫，人物擺放三種不同比例的素材圖框',
  },
  {
    no: '04',
    title: '廣告文案',
    body: '全代製作方案含廣告主文案、標題與行動按鈕文字。自備素材方案的文案由你自己寫。',
    art: '/assets/svc-copy.webp',
    alt: '線條插畫，人物用螢光筆在廣告文案上劃線',
  },
  {
    no: '05',
    title: '投放優化',
    body: '上線之後第二天我們會上報數據。成效不好我們會負責調受眾、調預算、調出價，關掉花了錢沒有回收的廣告組。數字誠實給你，跑得不好也照實講。',
    art: '/assets/svc-optimize.webp',
    alt: '線條插畫，人物把圖表上一根長條拉下來關掉',
  },
];
