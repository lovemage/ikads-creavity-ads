# 一佳廣告筆記　圖片素材生成需求（Midjourney）

> 五篇文章各兩張，共 10 張。由使用者手動在 Midjourney 生成。
> 產出的 PNG 放進 `public/assets/`，跑一次 `npm run assets` 轉檔。
> 對應 `src/data/notes.ts` 的 `hero` / `fig` 欄位與 `PLAN.md` §6 的統一風格前綴。

---

## 產出清單

| 檔名 | 用途 | 比例 | 對應文章 |
|---|---|---|---|
| `note-01-hero.png` | 01 主視覺，同時是該篇 og:image | `--ar 40:21` | 廣告帳號被停用 |
| `note-01-fig.png` | 01 內文插圖，連坐關係 | `--ar 3:2` | 同上 |
| `note-02-hero.png` | 02 主視覺 | `--ar 40:21` | BM 資產分層 |
| `note-02-fig.png` | 02 內文插圖，BM 樹狀結構 | `--ar 3:2` | 同上 |
| `note-03-hero.png` | 03 主視覺 | `--ar 40:21` | Pixel 埋點 |
| `note-03-fig.png` | 03 內文插圖，雙路徑去重 | `--ar 3:2` | 同上 |
| `note-04-hero.png` | 04 主視覺 | `--ar 40:21` | 受眾建立 |
| `note-04-fig.png` | 04 內文插圖，受眾重疊 | `--ar 3:2` | 同上 |
| `note-05-hero.png` | 05 主視覺 | `--ar 40:21` | 長期營運節奏 |
| `note-05-fig.png` | 05 內文插圖，頻率與成效交叉 | `--ar 3:2` | 同上 |

`hero` 的 `40:21` 對應上線尺寸 1200 × 630，社群分享圖用的就是這一張。`fig` 的 `3:2` 對應 900 × 600。

---

## 動手之前先知道三件事

**Midjourney 不輸出透明底。** 站上既有的 `svc-*.webp` 是 GPT Image 2 產的去背 PNG，這一批做不到。所以 prompt 裡直接指定平塗背景 `#F7F7F7`，跟站上 `--bg` 同色，貼上去看起來就像去背。要真的去背得自己後製，不做也不影響版面，文章的圖框本來就有底色。

**風格一致靠 `--sref`。** 先把 `note-01-hero` 生出來，挑一張滿意的放大，複製它的圖片網址，後面九張全部在指令尾巴加上 `--sref <那個網址>`。不加的話十張會飄成十種畫風。

**人物一致靠 `--cref`。** 帶人物的六張（五張 hero 加上沒有人物的四張 fig 以外）用同一個角色。`note-01-hero` 定案之後，複製圖片網址，其餘含人物的 prompt 加上 `--cref <網址> --cw 60`。`--cw` 控制參考強度，60 左右會保留臉部特徵又允許動作改變。

四張 `fig` 是純示意圖，沒有人物，不需要 `--cref`，但仍然要 `--sref`。

---

## 統一風格前綴

**這段必須一字不改地出現在每一則 prompt 開頭。** 整段複製，不要自行拼接或翻譯。

```
minimalist hand-drawn line diagram illustration, thin uneven black ink outlines of roughly 1.5px weight like a quick pen sketch, completely flat 2D with no perspective and no depth, plain solid #F7F7F7 background filling the entire frame, one single accent colour #FFD248 applied to exactly one element and nothing else, every corner perfectly square with zero rounded corners anywhere, generous empty space around the subject, quiet editorial technical-diagram feel, absolutely no text no letters no numbers no labels no watermark, no gradients, no drop shadows, no 3D, no textures
```

## 角色設定

**含人物的圖必須帶這一段，同樣一字不改。** 角色一致性靠它，改字就會飄。

```
a simple hand-drawn stick figure character: a large empty circle for the head taking up about one quarter of the total body height, a pair of round eyeglasses drawn as two plain circles joined by a short bridge line across the middle of the head circle, two small dot eyes inside the lenses, one short upward-curving line below them for a smile, nothing else on the face, no hair no neck no ears no nose no eyebrows, the body is a single vertical line running down from the head circle, the arms are single thin lines branching off that body line ending bluntly with no hands and no fingers, the legs are two single thin lines each ending in one tiny horizontal foot stroke, the figure wears no clothing of any kind
```

## 結尾參數

**含人物的 hero**

```
--ar 40:21 --v 7 --style raw --stylize 80 --no text, letters, numbers, labels, watermark, gradient, shadow, 3d, rounded corners, colour fill
```

**純示意圖的 fig**

```
--ar 3:2 --v 7 --style raw --stylize 60 --no text, letters, numbers, labels, watermark, gradient, shadow, 3d, rounded corners, colour fill
```

第二張起在參數前面接上 `--sref <第一張的圖片網址>`，含人物的再接 `--cref <第一張的圖片網址> --cw 60`。

---

## 01　廣告帳號被停用

### `note-01-hero.png`

> **對應文案**　「Meta 會關掉的東西有四種，個人帳號、Business Manager、粉專和廣告帳戶。」
> **動作設計**　人物退開一步看著整疊視窗，發現被打叉的是最上面那一層。手往上指，指的不是自己正在用的那一層。

```
minimalist hand-drawn line diagram illustration, thin uneven black ink outlines of roughly 1.5px weight like a quick pen sketch, completely flat 2D with no perspective and no depth, plain solid #F7F7F7 background filling the entire frame, one single accent colour #FFD248 applied to exactly one element and nothing else, every corner perfectly square with zero rounded corners anywhere, generous empty space around the subject, quiet editorial technical-diagram feel, absolutely no text no letters no numbers no labels no watermark, no gradients, no drop shadows, no 3D, no textures. On the left stands a simple hand-drawn stick figure character: a large empty circle for the head taking up about one quarter of the total body height, a pair of round eyeglasses drawn as two plain circles joined by a short bridge line across the middle of the head circle, two small dot eyes inside the lenses, one short upward-curving line below them for a smile, nothing else on the face, no hair no neck no ears no nose no eyebrows, the body is a single vertical line running down from the head circle, the arms are single thin lines branching off that body line ending bluntly with no hands and no fingers, the legs are two single thin lines each ending in one tiny horizontal foot stroke, the figure wears no clothing of any kind. The figure stands back and raises one arm to point upward at a stack of four plain square-cornered window frames arranged vertically on the right side of the frame, each window drawn as an empty rectangle with a thin bar across its top edge. The topmost window in the stack is crossed out with one bold X drawn in #FFD248. The three windows below it remain plain black outlines, untouched --ar 40:21 --v 7 --style raw --stylize 80 --no text, letters, numbers, labels, watermark, gradient, shadow, 3d, rounded corners, colour fill
```

### `note-01-fig.png`

> **對應文案**　「連坐是往下傳的。上層被關，下層一起進不去。」
> **動作設計**　叉在最上面，往下的連接線改畫成虛線，一眼看出斷在哪裡。無人物。

```
minimalist hand-drawn line diagram illustration, thin uneven black ink outlines of roughly 1.5px weight like a quick pen sketch, completely flat 2D with no perspective and no depth, plain solid #F7F7F7 background filling the entire frame, one single accent colour #FFD248 applied to exactly one element and nothing else, every corner perfectly square with zero rounded corners anywhere, generous empty space around the subject, quiet editorial technical-diagram feel, absolutely no text no letters no numbers no labels no watermark, no gradients, no drop shadows, no 3D, no textures. The whole frame contains one simple vertical chain diagram: four plain empty rectangles with perfectly square corners, stacked one above another and evenly spaced, centred in the frame, each connected to the one below it by a single short straight vertical line. The topmost rectangle is crossed out with one bold X drawn in #FFD248. All three connecting lines below the crossed-out rectangle are drawn as broken dashed lines instead of solid lines, showing the break travelling downward. Nothing else in the frame --ar 3:2 --v 7 --style raw --stylize 60 --no text, letters, numbers, labels, watermark, gradient, shadow, 3d, rounded corners, colour fill
```

---

## 02　BM 資產分層

### `note-02-hero.png`

> **對應文案**　「一個 BM 只負責持有，另一個 BM 負責投放。」
> **動作設計**　人物兩手各拿一個方塊，往兩個分開的容器放。兩個容器之間留一道明顯的空隙，不相連。

```
minimalist hand-drawn line diagram illustration, thin uneven black ink outlines of roughly 1.5px weight like a quick pen sketch, completely flat 2D with no perspective and no depth, plain solid #F7F7F7 background filling the entire frame, one single accent colour #FFD248 applied to exactly one element and nothing else, every corner perfectly square with zero rounded corners anywhere, generous empty space around the subject, quiet editorial technical-diagram feel, absolutely no text no letters no numbers no labels no watermark, no gradients, no drop shadows, no 3D, no textures. In the centre stands a simple hand-drawn stick figure character: a large empty circle for the head taking up about one quarter of the total body height, a pair of round eyeglasses drawn as two plain circles joined by a short bridge line across the middle of the head circle, two small dot eyes inside the lenses, one short upward-curving line below them for a smile, nothing else on the face, no hair no neck no ears no nose no eyebrows, the body is a single vertical line running down from the head circle, the arms are single thin lines branching off that body line ending bluntly with no hands and no fingers, the legs are two single thin lines each ending in one tiny horizontal foot stroke, the figure wears no clothing of any kind. Both arms are extended sideways in opposite directions, each arm placing one small plain square block into a separate open-topped container. The two containers are drawn as plain square-cornered open boxes, one on the far left and one on the far right, with a wide clear gap between them and no line connecting them. The single block being placed into the left container is filled solid #FFD248, every other block and both containers are plain black outline only --ar 40:21 --v 7 --style raw --stylize 80 --no text, letters, numbers, labels, watermark, gradient, shadow, 3d, rounded corners, colour fill
```

### `note-02-fig.png`

> **對應文案**　「同一個 BM 底下的東西共享同一個風險。」
> **動作設計**　一個父方框往下分三支，黃色只給其中一個子節點，代表資產裡最該保住的那一項。無人物。

```
minimalist hand-drawn line diagram illustration, thin uneven black ink outlines of roughly 1.5px weight like a quick pen sketch, completely flat 2D with no perspective and no depth, plain solid #F7F7F7 background filling the entire frame, one single accent colour #FFD248 applied to exactly one element and nothing else, every corner perfectly square with zero rounded corners anywhere, generous empty space around the subject, quiet editorial technical-diagram feel, absolutely no text no letters no numbers no labels no watermark, no gradients, no drop shadows, no 3D, no textures. The whole frame contains one simple tree diagram: a single wide plain rectangle with perfectly square corners sitting at the top centre, with one short vertical line dropping from its bottom edge into a horizontal connector line, and three short vertical lines descending from that connector to three smaller plain rectangles of equal size arranged in a row below. All lines are straight with right-angle turns only, no curves. The middle one of the three lower rectangles is filled solid #FFD248, the other two and the top rectangle are plain black outline only. Nothing else in the frame --ar 3:2 --v 7 --style raw --stylize 60 --no text, letters, numbers, labels, watermark, gradient, shadow, 3d, rounded corners, colour fill
```

---

## 03　Pixel 埋點

### `note-03-hero.png`

> **對應文案**　「Conversions API 走的是另一條路，不經過使用者的瀏覽器。」
> **動作設計**　人物一手把小方塊按在瀏覽器框上，另一條路徑從底下繞過整個瀏覽器框，直接接到右邊的伺服器。繞過去的那條線是黃的。

```
minimalist hand-drawn line diagram illustration, thin uneven black ink outlines of roughly 1.5px weight like a quick pen sketch, completely flat 2D with no perspective and no depth, plain solid #F7F7F7 background filling the entire frame, one single accent colour #FFD248 applied to exactly one element and nothing else, every corner perfectly square with zero rounded corners anywhere, generous empty space around the subject, quiet editorial technical-diagram feel, absolutely no text no letters no numbers no labels no watermark, no gradients, no drop shadows, no 3D, no textures. On the left stands a simple hand-drawn stick figure character: a large empty circle for the head taking up about one quarter of the total body height, a pair of round eyeglasses drawn as two plain circles joined by a short bridge line across the middle of the head circle, two small dot eyes inside the lenses, one short upward-curving line below them for a smile, nothing else on the face, no hair no neck no ears no nose no eyebrows, the body is a single vertical line running down from the head circle, the arms are single thin lines branching off that body line ending bluntly with no hands and no fingers, the legs are two single thin lines each ending in one tiny horizontal foot stroke, the figure wears no clothing of any kind. One arm reaches out and presses a small plain solid square against the inside of a large plain browser window frame drawn as an empty rectangle with a thin bar across its top edge. From that browser frame a straight line runs rightward to a tall narrow plain rectangle representing a server at the far right. A second separate path drawn in #FFD248 leaves the small square, curves down below the browser frame entirely bypassing it, and rises again to join the same server rectangle on the right. The bypassing path is the only element in #FFD248 --ar 40:21 --v 7 --style raw --stylize 80 --no text, letters, numbers, labels, watermark, gradient, shadow, 3d, rounded corners, colour fill
```

### `note-03-fig.png`

> **對應文案**　「兩邊送同一組 event_id，Meta 會自動去重，保留先到的那一個。」
> **動作設計**　兩條線匯到同一個方框，匯流處放一個黃色小菱形，那就是去重發生的地方。無人物。

```
minimalist hand-drawn line diagram illustration, thin uneven black ink outlines of roughly 1.5px weight like a quick pen sketch, completely flat 2D with no perspective and no depth, plain solid #F7F7F7 background filling the entire frame, one single accent colour #FFD248 applied to exactly one element and nothing else, every corner perfectly square with zero rounded corners anywhere, generous empty space around the subject, quiet editorial technical-diagram feel, absolutely no text no letters no numbers no labels no watermark, no gradients, no drop shadows, no 3D, no textures. The whole frame contains one simple flow diagram reading left to right: two plain empty rectangles with perfectly square corners stacked one above the other on the left side, each sending one straight line rightward, the two lines converging to meet at a single point in the middle of the frame, then continuing as one single straight line into a third plain rectangle on the right side. Exactly at the point where the two lines converge sits one small diamond shape filled solid #FFD248. Every other element is plain black outline only. All lines are straight with right-angle turns, no curves. Nothing else in the frame --ar 3:2 --v 7 --style raw --stylize 60 --no text, letters, numbers, labels, watermark, gradient, shadow, 3d, rounded corners, colour fill
```

---

## 04　受眾建立

### `note-04-hero.png`

> **對應文案**　「受眾設到只剩幾萬人，系統連試的空間都沒有。」
> **動作設計**　三個同心方框由外到內縮小，人物指著中間那一圈，最小的那一圈填黃色，看得出越往內越窄。

```
minimalist hand-drawn line diagram illustration, thin uneven black ink outlines of roughly 1.5px weight like a quick pen sketch, completely flat 2D with no perspective and no depth, plain solid #F7F7F7 background filling the entire frame, one single accent colour #FFD248 applied to exactly one element and nothing else, every corner perfectly square with zero rounded corners anywhere, generous empty space around the subject, quiet editorial technical-diagram feel, absolutely no text no letters no numbers no labels no watermark, no gradients, no drop shadows, no 3D, no textures. On the left stands a simple hand-drawn stick figure character: a large empty circle for the head taking up about one quarter of the total body height, a pair of round eyeglasses drawn as two plain circles joined by a short bridge line across the middle of the head circle, two small dot eyes inside the lenses, one short upward-curving line below them for a smile, nothing else on the face, no hair no neck no ears no nose no eyebrows, the body is a single vertical line running down from the head circle, the arms are single thin lines branching off that body line ending bluntly with no hands and no fingers, the legs are two single thin lines each ending in one tiny horizontal foot stroke, the figure wears no clothing of any kind. One arm extends toward the right, pointing at a set of three concentric square-cornered rectangles nested one inside another, drawn as plain outlines and sharing a common centre, the outermost large and the innermost small. The innermost smallest rectangle is filled solid #FFD248. The two outer rectangles are plain black outline only --ar 40:21 --v 7 --style raw --stylize 80 --no text, letters, numbers, labels, watermark, gradient, shadow, 3d, rounded corners, colour fill
```

### `note-04-fig.png`

> **對應文案**　「重疊的那塊是自己在跟自己競價。」
> **動作設計**　兩個方框交疊，只有交疊的那一塊填滿斜線並上黃色，其餘留白。無人物。

```
minimalist hand-drawn line diagram illustration, thin uneven black ink outlines of roughly 1.5px weight like a quick pen sketch, completely flat 2D with no perspective and no depth, plain solid #F7F7F7 background filling the entire frame, one single accent colour #FFD248 applied to exactly one element and nothing else, every corner perfectly square with zero rounded corners anywhere, generous empty space around the subject, quiet editorial technical-diagram feel, absolutely no text no letters no numbers no labels no watermark, no gradients, no drop shadows, no 3D, no textures. The whole frame contains two plain empty rectangles with perfectly square corners of equal size, placed side by side and horizontally overlapping each other by roughly one third of their width, centred in the frame. The overlapping region where the two rectangles intersect is filled with evenly spaced diagonal hatching lines drawn in #FFD248. The rest of both rectangles is left empty with plain black outlines only. Nothing else in the frame --ar 3:2 --v 7 --style raw --stylize 60 --no text, letters, numbers, labels, watermark, gradient, shadow, 3d, rounded corners, colour fill
```

---

## 05　長期營運節奏

### `note-05-hero.png`

> **對應文案**　「換帳戶只是把資產重新掛一次。做不好就是整組重來。」
> **動作設計**　人物把一疊卡片從左邊的舊容器搬到右邊的新容器，兩個容器底下有一條連續不斷的線，強調接得上。

```
minimalist hand-drawn line diagram illustration, thin uneven black ink outlines of roughly 1.5px weight like a quick pen sketch, completely flat 2D with no perspective and no depth, plain solid #F7F7F7 background filling the entire frame, one single accent colour #FFD248 applied to exactly one element and nothing else, every corner perfectly square with zero rounded corners anywhere, generous empty space around the subject, quiet editorial technical-diagram feel, absolutely no text no letters no numbers no labels no watermark, no gradients, no drop shadows, no 3D, no textures. In the centre stands a simple hand-drawn stick figure character: a large empty circle for the head taking up about one quarter of the total body height, a pair of round eyeglasses drawn as two plain circles joined by a short bridge line across the middle of the head circle, two small dot eyes inside the lenses, one short upward-curving line below them for a smile, nothing else on the face, no hair no neck no ears no nose no eyebrows, the body is a single vertical line running down from the head circle, the arms are single thin lines branching off that body line ending bluntly with no hands and no fingers, the legs are two single thin lines each ending in one tiny horizontal foot stroke, the figure wears no clothing of any kind. Both arms are extended to the right, carrying a small stack of three plain square-cornered cards away from an open-topped box on the left toward an identical open-topped box on the right. Beneath both boxes one single continuous unbroken horizontal line runs from the left box to the right box without any gap or dash, drawn in #FFD248. Everything else is plain black outline only --ar 40:21 --v 7 --style raw --stylize 80 --no text, letters, numbers, labels, watermark, gradient, shadow, 3d, rounded corners, colour fill
```

### `note-05-fig.png`

> **對應文案**　「頻率往上、點擊率往下，兩條線交叉的那幾天就是素材該換的時候。」
> **動作設計**　兩條折線走相反方向，交叉點放一個黃色實心圓，那一點就是換素材的時機。無人物。

```
minimalist hand-drawn line diagram illustration, thin uneven black ink outlines of roughly 1.5px weight like a quick pen sketch, completely flat 2D with no perspective and no depth, plain solid #F7F7F7 background filling the entire frame, one single accent colour #FFD248 applied to exactly one element and nothing else, every corner perfectly square with zero rounded corners anywhere, generous empty space around the subject, quiet editorial technical-diagram feel, absolutely no text no letters no numbers no labels no watermark, no gradients, no drop shadows, no 3D, no textures. The whole frame contains one simple line chart: a plain horizontal baseline and a plain vertical axis line meeting at the bottom left corner, with two hand-drawn polyline paths plotted across the chart area. One polyline rises steadily from lower left to upper right. The other polyline falls steadily from upper left to lower right. The two polylines cross each other once near the centre of the chart. At the exact crossing point sits one small solid filled circle in #FFD248. Both polylines, the baseline and the axis are plain black outline only. Nothing else in the frame --ar 3:2 --v 7 --style raw --stylize 60 --no text, letters, numbers, labels, watermark, gradient, shadow, 3d, rounded corners, colour fill
```

---

## 生成之後

1. 十張都存成 PNG，檔名照上面的清單命名，不要留 Midjourney 的預設檔名。
2. 全部丟進 `public/assets/`。
3. 跑一次轉檔。

```bash
npm run assets
```

腳本會把 `note-XX-hero.png` 縮到 1200 × 630、`note-XX-fig.png` 縮到 900 × 600 並轉出 `.webp`。`hero` 的 PNG 會**留在 `public/assets/`**，因為社群平台抓的 og:image 是那一張；`fig` 的 PNG 轉完會移到 `plan_asset/generated/` 留底。

4. `npm run build` 之後開 `/notes` 確認十張都出得來，沒有破圖。

### 出圖不對的時候

線太粗或帶陰影，把 `--stylize` 再往下調到 50 以下。跑出文字或標籤，確認 `--no` 那一段有完整貼上。畫風跟第一張差太多，檢查 `--sref` 的網址有沒有掉。人物的臉跑掉，把 `--cw` 從 60 往上調到 80 試試。
