/**
 * 把 codex 產出的 PNG 素材轉成上線用的 WebP。
 *
 *   npm run assets
 *
 * 掃描 public/assets/ 底下所有 .png，縮到實際顯示尺寸、轉 WebP，
 * 原始檔移到 plan_asset/generated/ 保留。codex 每補一張圖就重跑一次。
 */

import sharp from 'sharp';
import { readdir, mkdir, rename, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, basename, extname } from 'node:path';

const SRC = 'public/assets';
const KEEP = 'plan_asset/generated';

/** 生成階段的工作檔，不上線，直接移走不轉檔 */
const WORK_FILES = ['character-sheet'];

/** 依實際顯示尺寸決定，2x retina 已計入 */
const SIZES = {
  'hero-person': [640, 960],
  default: [512, 512],
};

/**
 * 筆記文章的圖走檔名規則，不逐張列舉。
 * note-XX-hero 同時是該篇的 og:image，社群平台抓 PNG 最保險，
 * 所以除了 WebP 再輸出一張縮好的 PNG，蓋掉原始大檔。
 */
const noteSize = (name) => {
  if (/^note-\d+-hero$/.test(name)) return [1200, 630];
  if (/^note-\d+-fig$/.test(name)) return [900, 600];
  return null;
};

const isOgHero = (name) => /^note-\d+-hero$/.test(name);

const kb = (n) => (n / 1024).toFixed(0).padStart(5);

const pngs = (await readdir(SRC)).filter((f) => extname(f) === '.png');

if (pngs.length === 0) {
  console.log('public/assets 裡沒有待處理的 PNG。');
  process.exit(0);
}

if (!existsSync(KEEP)) await mkdir(KEEP, { recursive: true });

let before = 0;
let after = 0;

for (const file of pngs) {
  const name = basename(file, '.png');
  const src = join(SRC, file);

  if (WORK_FILES.includes(name)) {
    await rename(src, join(KEEP, file));
    console.log(`${name.padEnd(16)} 工作檔，移出 public`);
    continue;
  }

  const out = join(SRC, `${name}.webp`);
  const [w, h] = noteSize(name) ?? SIZES[name] ?? SIZES.default;

  // og:image 的 PNG 處理完會留在原地，prebuild 每次都會再掃到它。
  // 已經有一份不比它舊的 WebP，就代表這張做過了，跳過免得反覆重壓。
  if (isOgHero(name) && existsSync(out)) {
    const [srcStat, outStat] = await Promise.all([stat(src), stat(out)]);
    if (outStat.mtimeMs >= srcStat.mtimeMs) {
      console.log(`${name.padEnd(16)} 已是最新，跳過`);
      continue;
    }
  }

  const sizeBefore = (await stat(src)).size;

  await sharp(src)
    .resize(w, h, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 92, effort: 6, alphaQuality: 100 })
    .toFile(out);

  const sizeAfter = (await stat(out)).size;

  // og:image 先縮到暫存檔，等原始檔移走再改回正式名稱
  const ogTmp = isOgHero(name) ? join(SRC, `${name}.og.tmp.png`) : null;

  if (ogTmp) {
    await sharp(src)
      .resize(w, h, { fit: 'inside', withoutEnlargement: true })
      .png({ compressionLevel: 9, palette: true })
      .toFile(ogTmp);
  }

  // 原始檔留底，不進 dist
  await rename(src, join(KEEP, file));

  if (ogTmp) await rename(ogTmp, src);

  before += sizeBefore;
  after += sizeAfter;
  console.log(`${name.padEnd(16)} ${kb(sizeBefore)} KB → ${kb(sizeAfter)} KB`);
}

console.log('─'.repeat(40));
console.log(
  `${String(pngs.length).padStart(2)} 張　` +
    `${(before / 1024 / 1024).toFixed(2)} MB → ${(after / 1024).toFixed(0)} KB`,
);
