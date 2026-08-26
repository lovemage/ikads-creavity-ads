/**
 * 全站原生 JS，總量控制在 4KB 內。
 * 兩件事：進場動畫、捲動進度條。手風琴用原生 <details>，區域切換用 CSS-only radio。
 */

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* 進場動畫 */
const revealTargets = document.querySelectorAll<HTMLElement>('.reveal');

if (reduced || !('IntersectionObserver' in window)) {
  revealTargets.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.style.transitionDelay = `${Math.min(i, 4) * 70}ms`;
        el.classList.add('is-in');
        io.unobserve(el);
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
  );

  revealTargets.forEach((el) => io.observe(el));
}

/* 捲動進度條 */
const bar = document.querySelector<HTMLElement>('[data-progress-bar]');
const num = document.querySelector<HTMLElement>('[data-progress-num]');

if (bar && num && !reduced) {
  let ticking = false;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    bar.style.transform = `scaleY(${ratio})`;
    num.textContent = String(Math.round(ratio * 100)).padStart(2, '0');
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );

  update();
}
