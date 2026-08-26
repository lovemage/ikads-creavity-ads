/** 03 合作流程 — 六步直式時間軸 */

export interface Step {
  no: string;
  title: string;
  body: string;
}

export const processLead = '六步，最快三個工作天內廣告會開始跑。';

export const steps: Step[] = [
  {
    no: '01',
    title: 'Telegram 洽詢',
    body: '說一下你要投哪個區域、大概想跑多少量。我們回你適用哪個方案。',
  },
  {
    no: '02',
    title: '需求確認',
    body: '談定方案、素材由誰做、每月預算。這一步結束你會拿到明確的總額。',
  },
  {
    no: '03',
    title: 'USDT 付款',
    body: '月服務費和第一筆媒體費儲值一起付。TRC20、ERC20 都收，入金地址在 Telegram 給。',
  },
  {
    no: '04',
    title: '帳戶與素材備置',
    body: '開帳戶、綁支付卡、儲值。選全代製作的話，素材和文案同一時間做。',
  },
  {
    no: '05',
    title: '上線投放',
    body: '自備素材 1 到 3 個工作天上線，全代製作 3 到 5 個工作天。',
  },
  {
    no: '06',
    title: '數據回報',
    body: '上線第二天起回報花費、曝光和成效數字。媒體費快用完會提前通知你補。',
  },
];
