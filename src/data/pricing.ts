/**
 * 價格單一資料來源 — PLAN.md「改價格只改這一處」
 * 台灣 250／350 U、香港 150／250 U，均為月服務費，不含媒體費。
 */

export type RegionKey = 'tw' | 'hk';
export type PlanKey = 'self' | 'full';

export interface Plan {
  key: PlanKey;
  name: string;
  price: number;
  summary: string;
}

export interface Region {
  key: RegionKey;
  label: string;
  labelEn: string;
  plans: Plan[];
}

/** 月服務費，幣別 USDT，計價週期單月 */
export const currency = 'U';
export const cycle = '／月';

export const regions: Region[] = [
  {
    key: 'tw',
    label: '台灣',
    labelEn: 'TAIWAN',
    plans: [
      {
        key: 'self',
        name: '自備素材',
        price: 250,
        summary: '圖片、影片與文案由你提供，我們負責帳戶、上稿與投放調整。',
      },
      {
        key: 'full',
        name: '全代製作',
        price: 350,
        summary: '素材和文案我們做，你只要說清楚要推什麼、推給誰。',
      },
    ],
  },
  {
    key: 'hk',
    label: '香港',
    labelEn: 'HONG KONG',
    plans: [
      {
        key: 'self',
        name: '自備素材',
        price: 150,
        summary: '圖片、影片與文案由你提供，我們負責帳戶、上稿與投放調整。',
      },
      {
        key: 'full',
        name: '全代製作',
        price: 250,
        summary: '素材和文案我們做，你只要說清楚要推什麼、推給誰。',
      },
    ],
  },
];

/** 方案內容清單，兩區域共用 */
export interface Feature {
  label: string;
  self: boolean;
  full: boolean;
}

export const features: Feature[] = [
  { label: '所有廣告系列', self: true, full: true },
  { label: '廣告帳號', self: true, full: true },
  { label: '廣告支付卡', self: true, full: true },
  { label: '單一帳戶每日投放上限 100 USD', self: true, full: true },
  { label: '廣告素材', self: false, full: true },
  { label: '廣告文案內容', self: false, full: true },
];

/** 兩方案固定價差 */
export const planGap = 100;

/** 加購：廣告落地頁製作 */
export const landingPage = {
  priceFrom: 80,
  currency: 'USDT',
  note: '一次性買斷，不是月費。依頁面複雜度報價，交付後的修改另外計費。',
};

/** 單一帳戶每日投放上限 */
export const dailyCap = { amount: 100, currency: 'USD' };
