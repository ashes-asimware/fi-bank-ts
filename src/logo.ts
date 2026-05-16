const fallbackSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#ffffff"/><text x="32" y="42" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="32" font-weight="700" fill="#0f3ea4">D</text></svg>`;

export const LOGO_SRC = "/assets/combined2-icon.png";
export const LOGO_FALLBACK_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(fallbackSvg)}`;

export function applyLogoFallbacks(root: ParentNode): void {
  const logos = root.querySelectorAll<HTMLImageElement>('img[data-logo-fallback="true"]');

  logos.forEach((img) => {
    const applyFallback = () => {
      if (img.dataset.fallbackApplied === "true") {
        return;
      }
      img.dataset.fallbackApplied = "true";
      img.src = LOGO_FALLBACK_DATA_URI;
    };

    img.addEventListener("error", applyFallback);

    if (img.complete && img.naturalWidth === 0) {
      applyFallback();
    }
  });
}
