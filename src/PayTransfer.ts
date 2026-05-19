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
          <a class="menu-item" href="#" data-nav-page="accounts">Accounts</a>
          <div class="menu-dropdown" data-dropdown="pay-transfer">
            <button class="menu-item-button menu-item-button-active" type="button" data-nav-trigger="pay-transfer" aria-haspopup="true" aria-expanded="false">Pay &amp; Transfer</button>
            <div class="menu-dropdown-panel" role="menu" aria-label="Pay and Transfer">
              <div class="menu-dropdown-title">Pay &amp; Transfer</div>
              <div class="menu-dropdown-grid">
                <div class="menu-dropdown-column">
                  <div class="menu-dropdown-section-title">Transfer between my accounts</div>
                  <a class="menu-dropdown-link" href="#" role="menuitem" data-nav-page="pay-transfer">Make a transfer</a>
                  <a class="menu-dropdown-link" href="#" role="menuitem" data-nav-page="pay-transfer">View/manage transfers</a>

                  <div class="menu-dropdown-section-title menu-dropdown-section-spaced">Wire/external transfer</div>
                  <a class="menu-dropdown-link" href="#" role="menuitem" data-nav-page="pay-transfer">Send a wire/external transfer</a>
                  <a class="menu-dropdown-link" href="#" role="menuitem" data-nav-page="pay-transfer">View/manage wires &amp; external transfers</a>
                </div>

                <div class="menu-dropdown-column">
                  <div class="menu-dropdown-section-title">BofA credit cards</div>
                  <a class="menu-dropdown-link" href="#" role="menuitem" data-nav-page="pay-transfer">Pay my credit card</a>
                  <a class="menu-dropdown-link" href="#" role="menuitem" data-nav-page="pay-transfer">View/manage payments</a>
                  <a class="menu-dropdown-link" href="#" role="menuitem" data-nav-page="pay-transfer">Manage accounts from other banks</a>

                  <div class="menu-dropdown-section-title menu-dropdown-section-spaced">Bill Pay</div>
                  <a class="menu-dropdown-link" href="#" role="menuitem" data-nav-page="pay-transfer">Make a payment</a>
                  <a class="menu-dropdown-link" href="#" role="menuitem" data-nav-page="pay-transfer">View/manage payments</a>
                  <a class="menu-dropdown-link" href="#" role="menuitem" data-nav-page="pay-transfer">Manage accounts from other banks</a>
                  <a class="menu-dropdown-link" href="#" role="menuitem" data-nav-page="pay-transfer">Help</a>
                </div>

                <div class="menu-dropdown-column">
                  <div class="menu-dropdown-section-title">Pay a person</div>
                  <a class="menu-dropdown-link" href="#" role="menuitem" data-nav-page="pay-transfer">Send money with Zelle&reg;</a>
                  <a class="menu-dropdown-link" href="#" role="menuitem" data-nav-page="pay-transfer">Zelle activity</a>
                  <a class="menu-dropdown-link" href="#" role="menuitem" data-nav-page="pay-transfer">Zelle recipients</a>
                  <a class="menu-dropdown-link" href="#" role="menuitem" data-nav-page="pay-transfer">Zelle settings</a>
                  <a class="menu-dropdown-link" href="#" role="menuitem" data-nav-page="pay-transfer">Send to other BofA accounts</a>
                </div>
              </div>
            </div>
          </div>
          <div class="menu-dropdown" data-dropdown="rewards-deals">
            <button class="menu-item-button" type="button" data-nav-trigger="rewards-deals" aria-haspopup="true" aria-expanded="false">Rewards &amp; Deals</button>
            <div class="menu-dropdown-panel menu-dropdown-panel-rewards" role="menu" aria-label="Rewards and Deals">
              <div class="menu-dropdown-title menu-dropdown-title-rewards">Rewards &amp; Deals</div>
              <a class="menu-dropdown-link menu-dropdown-link-rewards" href="#" role="menuitem">Special offers</a>
              <a class="menu-dropdown-link menu-dropdown-link-rewards" href="#" role="menuitem">My Rewards</a>
              <a class="menu-dropdown-link menu-dropdown-link-rewards" href="#" role="menuitem">Cash back deals</a>
            </div>
          </div>
          <div class="menu-dropdown" data-dropdown="tools-investing">
            <button class="menu-item-button" type="button" data-nav-trigger="tools-investing" aria-haspopup="true" aria-expanded="false">Tools &amp; Investing</button>
            <div class="menu-dropdown-panel menu-dropdown-panel-tools" role="menu" aria-label="Tools and Investing">
              <div class="menu-dropdown-title menu-dropdown-title-tools">Tools &amp; Investing Overview</div>
              <div class="menu-dropdown-grid-tools">
                <div class="menu-dropdown-tools-col menu-dropdown-tools-col-nav">
                  <div class="menu-dropdown-tools-heading">My Financial Picture</div>
                  <a class="menu-dropdown-link menu-dropdown-link-tools" href="#" role="menuitem">Net Worth</a>
                  <a class="menu-dropdown-link menu-dropdown-link-tools" href="#" role="menuitem">Activity</a>
                  <a class="menu-dropdown-link menu-dropdown-link-tools" href="#" role="menuitem">Budget</a>
                  <a class="menu-dropdown-link menu-dropdown-link-tools" href="#" role="menuitem">Manage</a>
                  <div class="menu-dropdown-tools-footer">FICO<sup>&reg;</sup> Score</div>
                </div>

                <div class="menu-dropdown-tools-col">
                  <div class="menu-dropdown-tools-heading menu-dropdown-tools-heading-feature">
                    <img class="menu-dropdown-tools-logo" src="${LOGO_SRC}" data-logo-fallback="true" alt="" aria-hidden="true">
                    <span>Investing</span>
                  </div>
                  <p class="menu-dropdown-tools-copy">Review your account summary, make a transfer or check the account activity of your Merrill accounts</p>
                  <a class="menu-dropdown-link menu-dropdown-link-tools" href="#" role="menuitem">Manage your accounts &raquo;</a>
                </div>

                <div class="menu-dropdown-tools-col">
                  <div class="menu-dropdown-tools-heading">Center for Business Empowerment</div>
                  <p class="menu-dropdown-tools-copy">Equip yourself with the tools and information you need to start, run and grow your business.</p>
                  <a class="menu-dropdown-link menu-dropdown-link-tools" href="#" role="menuitem">Explore &raquo;</a>
                </div>
              </div>
            </div>
          </div>
          <div class="menu-dropdown" data-dropdown="security-center">
            <button class="menu-item-button" type="button" data-nav-trigger="security-center" aria-haspopup="true" aria-expanded="false">Security Center</button>
            <div class="menu-dropdown-panel menu-dropdown-panel-security" role="menu" aria-label="Security Center">
              <a class="menu-dropdown-link menu-dropdown-link-security" href="#" role="menuitem">Overview</a>
              <a class="menu-dropdown-link menu-dropdown-link-security" href="#" role="menuitem">Change User ID</a>
              <a class="menu-dropdown-link menu-dropdown-link-security" href="#" role="menuitem">Change Password</a>
              <a class="menu-dropdown-link menu-dropdown-link-security" href="#" role="menuitem">Set up two-factor authentication</a>
              <a class="menu-dropdown-link menu-dropdown-link-security" href="#" role="menuitem">Alert settings</a>
              <a class="menu-dropdown-link menu-dropdown-link-security" href="#" role="menuitem">Secure your device</a>
              <a class="menu-dropdown-link menu-dropdown-link-security" href="#" role="menuitem">Security tips and articles</a>
              <a class="menu-dropdown-link menu-dropdown-link-security" href="#" role="menuitem">Report suspicious activity</a>
            </div>
          </div>
          <div class="menu-dropdown" data-dropdown="open-account">
            <button class="menu-item-button" type="button" data-nav-trigger="open-account" aria-haspopup="true" aria-expanded="false">Open an Account</button>
            <div class="menu-dropdown-panel menu-dropdown-panel-open-account" role="menu" aria-label="Open an Account">
              <a class="menu-dropdown-link menu-dropdown-link-open-account" href="#" role="menuitem">Open a new account</a>
            </div>
          </div>
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
