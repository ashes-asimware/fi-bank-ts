// PayTransfer.ts
// Renders the Pay & Transfer page UI matching Pay+Transfer.png

import { applyLogoFallbacks, LOGO_SRC } from "./logo";

export function renderPayTransferPage(container: HTMLElement) {
  container.innerHTML = `
    <main class="page-shell">
      <section class="accounts-card" aria-label="Pay and Transfer">
        <header class="accounts-header">
          <div class="accounts-title">
            <img class="accounts-brand-logo" src="${LOGO_SRC}" data-logo-fallback="true" alt="" aria-hidden="true">
            <span class="accounts-brand-name">Dampoo Bank</span>
            <span class="accounts-brand-rest">Online Banking</span>
          </div>
          <button class="accounts-logout" type="button">Log out</button>
        </header>

        <nav class="accounts-menu">
          <a class="menu-item" href="#">Accounts</a>
          <a class="menu-item active" href="#">Pay & Transfer</a>
          <a class="menu-item" href="#">Rewards & Deals</a>
          <a class="menu-item" href="#">Tools & Investing</a>
          <a class="menu-item" href="#">Security Center</a>
          <a class="menu-item" href="#">Open an Account</a>
          <a class="menu-item" href="#">Help & Support</a>
        </nav>

        <div class="paytransfer-content">
          <h2 class="paytransfer-title">Pay & Transfer</h2>
          <div class="paytransfer-actions">
            <button class="paytransfer-action">
              <span class="paytransfer-action-illustration" aria-hidden="true">🔄</span>
              <span class="paytransfer-action-labels">
                <span class="paytransfer-action-title">Transfer</span>
                <span class="paytransfer-action-sub">Between your accounts</span>
              </span>
            </button>
            <button class="paytransfer-action">
              <span class="paytransfer-action-illustration" aria-hidden="true">💸</span>
              <span class="paytransfer-action-labels">
                <span class="paytransfer-action-title">Zelle</span>
                <span class="paytransfer-action-sub">Send money to others</span>
              </span>
            </button>
            <button class="paytransfer-action">
              <span class="paytransfer-action-illustration" aria-hidden="true">🧾</span>
              <span class="paytransfer-action-labels">
                <span class="paytransfer-action-title">Pay bills</span>
                <span class="paytransfer-action-sub">Pay companies or people</span>
              </span>
            </button>
            <button class="paytransfer-action">
              <span class="paytransfer-action-illustration" aria-hidden="true">🌐</span>
              <span class="paytransfer-action-labels">
                <span class="paytransfer-action-title">Wire/ACH</span>
                <span class="paytransfer-action-sub">Send to other banks</span>
              </span>
            </button>
          </div>

          <div class="paytransfer-history">
            <div class="paytransfer-history-head">
              <div class="paytransfer-history-title-wrap">
                <h3 class="paytransfer-history-title">History</h3>
                <span class="paytransfer-history-range">Last 3 months</span>
              </div>
              <div class="paytransfer-history-tools">
                <a href="#">Download</a>
                <a href="#">Sort: Date (Newest)</a>
                <a href="#">Filter</a>
              </div>
            </div>

            <div class="paytransfer-history-list" role="list">
              <div class="paytransfer-history-row" role="listitem">
                <div class="paytransfer-history-left">
                  <span class="paytransfer-history-icon" aria-hidden="true">
                    <img class="paytransfer-history-icon-image" src="${LOGO_SRC}" data-logo-fallback="true" alt="" aria-hidden="true">
                  </span>
                  <span class="paytransfer-history-name">Travel Rewards Visa Signature - 8345</span>
                </div>
                <div class="paytransfer-history-right">
                  <div class="paytransfer-history-date">May 13, 2026</div>
                  <a class="paytransfer-history-amount" href="#">$5,086.92</a>
                  <div class="paytransfer-history-status">Received</div>
                </div>
              </div>

              <div class="paytransfer-history-row" role="listitem">
                <div class="paytransfer-history-left">
                  <span class="paytransfer-history-icon" aria-hidden="true">
                    <img class="paytransfer-history-icon-image" src="${LOGO_SRC}" data-logo-fallback="true" alt="" aria-hidden="true">
                  </span>
                  <span class="paytransfer-history-name">Platinum Plus Mastercard - 5260</span>
                </div>
                <div class="paytransfer-history-right">
                  <div class="paytransfer-history-date">May 08, 2026</div>
                  <a class="paytransfer-history-amount" href="#">$1,625.00</a>
                  <div class="paytransfer-history-status">Received</div>
                </div>
              </div>

              <div class="paytransfer-history-row" role="listitem">
                <div class="paytransfer-history-left">
                  <span class="paytransfer-history-icon" aria-hidden="true">
                    <img class="paytransfer-history-icon-image" src="${LOGO_SRC}" data-logo-fallback="true" alt="" aria-hidden="true">
                  </span>
                  <span class="paytransfer-history-name">Adv Tiered Interest Chkg - 7724</span>
                </div>
                <div class="paytransfer-history-right">
                  <div class="paytransfer-history-date">May 07, 2026</div>
                  <a class="paytransfer-history-amount" href="#">$2,000.00</a>
                  <div class="paytransfer-history-status">Completed</div>
                </div>
              </div>

              <div class="paytransfer-history-row" role="listitem">
                <div class="paytransfer-history-left">
                  <span class="paytransfer-history-icon" aria-hidden="true">
                    <img class="paytransfer-history-icon-image" src="${LOGO_SRC}" data-logo-fallback="true" alt="" aria-hidden="true">
                  </span>
                  <span class="paytransfer-history-name">Advantage Savings - 6813</span>
                </div>
                <div class="paytransfer-history-right">
                  <div class="paytransfer-history-date">May 04, 2026</div>
                  <a class="paytransfer-history-amount" href="#">$100.00</a>
                  <div class="paytransfer-history-status">You paid</div>
                </div>
              </div>

              <div class="paytransfer-history-row" role="listitem">
                <div class="paytransfer-history-left">
                  <span class="paytransfer-history-icon" aria-hidden="true">
                    <img class="paytransfer-history-icon-image" src="${LOGO_SRC}" data-logo-fallback="true" alt="" aria-hidden="true">
                  </span>
                  <span class="paytransfer-history-name">Advantage Savings - 4096</span>
                </div>
                <div class="paytransfer-history-right">
                  <div class="paytransfer-history-date">Apr 30, 2026</div>
                  <a class="paytransfer-history-amount" href="#">$2,955.35</a>
                  <div class="paytransfer-history-status">Completed</div>
                </div>
              </div>

              <div class="paytransfer-history-row" role="listitem">
                <div class="paytransfer-history-left">
                  <span class="paytransfer-history-icon" aria-hidden="true">
                    <img class="paytransfer-history-icon-image" src="${LOGO_SRC}" data-logo-fallback="true" alt="" aria-hidden="true">
                  </span>
                  <span class="paytransfer-history-name">Advantage Savings - 4096</span>
                </div>
                <div class="paytransfer-history-right">
                  <div class="paytransfer-history-date">Apr 14, 2026</div>
                  <a class="paytransfer-history-amount" href="#">$1,076.93</a>
                  <div class="paytransfer-history-status">Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
  applyLogoFallbacks(container);
}
