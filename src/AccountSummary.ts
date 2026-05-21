// AccountSummary.ts
// Renders the Accounts page UI matching AccountSummary.png / accounts2.png

import { renderAccountsMenu } from "./accountsMenu";
import { applyLogoFallbacks, LOGO_SRC } from "./logo";

export function renderAccountsPage(container: HTMLElement) {
  container.innerHTML = `
    <main class="page-shell">
      <section class="accounts-card" aria-label="Account summary">
        <header class="accounts-header">
          <div class="accounts-title">
            <img class="accounts-brand-logo" src="${LOGO_SRC}" data-logo-fallback="true" alt="" aria-hidden="true">
            <span class="accounts-brand-name">Dampoo Bank</span>
            <span class="accounts-brand-rest">Online Banking</span>
          </div>
          <button class="accounts-logout" type="button">Log out</button>
        </header>

        ${renderAccountsMenu("accounts", LOGO_SRC)}

        <div class="accounts-welcome">
          <div class="accounts-welcome-left">
            <div class="accounts-client-label">Preferred Client</div>
            <div class="accounts-hello">Hello, <span class="accounts-customer-name">Customer</span>
              <span class="accounts-welcome-links">
                <a href="#">Update Profile</a>
                <span class="divider">|</span>
                <a href="#">Security Center</a>
              </span>
            </div>
          </div>
          <div class="accounts-rewards-badge">
            <div class="accounts-rewards-label">PREFERRED REWARDS</div>
            <div class="accounts-rewards-since">Enrolled since Jul 2015</div>
            <a class="accounts-rewards-link" href="#">View My Rewards</a>
            <div class="accounts-rewards-tier">PLATINUM<br>HONORS</div>
          </div>
        </div>

        <div class="accounts-groups">

          <div class="accounts-group">
            <div class="accounts-group-title">
              <img class="accounts-group-logo" src="${LOGO_SRC}" data-logo-fallback="true" alt="" aria-hidden="true">
              <span>Checking, savings &amp; CDs</span>
            </div>
            <div class="accounts-list">
              <div class="account-row">
                <div class="account-main">
                  <a class="account-name" href="#">Adv Tiered Interest Chkg - 9482</a>
                  <div class="account-sub-row">
                    <a class="account-quick-view" href="#">Quick View</a>
                    <span class="account-promo">Your special offer!</span>
                  </div>
                </div>
                <div class="account-balance">$2,013.54</div>
              </div>
              <div class="account-row">
                <div class="account-main">
                  <a class="account-name" href="#">Adv Tiered Interest Chkg - 3159</a>
                  <div class="account-sub-row"><a class="account-quick-view" href="#">Quick View</a></div>
                </div>
                <div class="account-balance">$205.00</div>
              </div>
              <div class="account-row">
                <div class="account-main">
                  <a class="account-name" href="#">Adv Tiered Interest Chkg - 7724</a>
                  <div class="account-sub-row"><a class="account-quick-view" href="#">Quick View</a></div>
                </div>
                <div class="account-balance">$205.00</div>
              </div>
              <div class="account-row">
                <div class="account-main">
                  <a class="account-name" href="#">Advantage Savings - 4096</a>
                  <div class="account-sub-row"><a class="account-quick-view" href="#">Quick View</a></div>
                </div>
                <div class="account-balance">$205.36</div>
              </div>
              <div class="account-row">
                <div class="account-main">
                  <a class="account-name" href="#">Advantage Savings - 6813</a>
                  <div class="account-sub-row"><a class="account-quick-view" href="#">Quick View</a></div>
                </div>
                <div class="account-balance">$138,041.04</div>
              </div>
            </div>
          </div>

          <div class="accounts-group">
            <div class="accounts-group-title">
              <img class="accounts-group-logo" src="${LOGO_SRC}" data-logo-fallback="true" alt="" aria-hidden="true">
              <span>Credit cards</span>
            </div>
            <div class="accounts-list">
              <div class="account-row">
                <div class="account-main">
                  <a class="account-name" href="#">Platinum Plus Mastercard - 5260</a>
                  <div class="account-sub-row">
                    <a class="account-quick-view" href="#">Quick View</a>
                    <span class="account-note">View reminders for your payments due in Pay &amp; Transfer</span>
                  </div>
                </div>
                <div class="account-balance">$3,723.86</div>
              </div>
              <div class="account-row">
                <div class="account-main">
                  <a class="account-name" href="#">Travel Rewards Visa Signature - 8345</a>
                  <div class="account-sub-row">
                    <a class="account-quick-view" href="#">Quick View</a>
                    <span class="account-note">View reminders for your payments due in Pay &amp; Transfer</span>
                  </div>
                </div>
                <div class="account-balance">$536.16</div>
              </div>
            </div>
          </div>

          <p class="accounts-disclaimer">Investment products are not insured by the FDIC; are not deposits, and may lose value.</p>

          <div class="accounts-group">
            <div class="accounts-group-title">
              <img class="accounts-group-logo" src="${LOGO_SRC}" data-logo-fallback="true" alt="" aria-hidden="true">
              <span>Investment accounts</span>
            </div>
            <div class="accounts-list">
              <div class="account-row">
                <div class="account-main">
                  <a class="account-name" href="#">CMA-Edge 8ZA-85D18</a>
                  <div class="account-sub-row"><a class="account-quick-view" href="#">Quick View</a></div>
                </div>
                <div class="account-balance">$137,983.80</div>
              </div>
              <div class="account-row">
                <div class="account-main">
                  <a class="account-name" href="#">MGIA - 9027</a>
                  <div class="account-sub-label">IRA 7G0-59027</div>
                  <div class="account-sub-row"><a class="account-quick-view" href="#">Quick View</a></div>
                </div>
                <div class="account-balance">$47,327.31</div>
              </div>
              <div class="account-row">
                <div class="account-main">
                  <a class="account-name" href="#">IRA-Edge 53X-86T40</a>
                  <div class="account-sub-row"><a class="account-quick-view" href="#">Quick View</a></div>
                </div>
                <div class="account-balance">$0.38</div>
              </div>
              <div class="account-row">
                <div class="account-main">
                  <a class="account-name" href="#">IRRA-Edge 76W-50U58</a>
                  <div class="account-sub-row"><a class="account-quick-view" href="#">Quick View</a></div>
                </div>
                <div class="account-balance">$11,938.86</div>
              </div>
            </div>
            <a class="accounts-manage-link" href="#">Manage investment accounts</a>
          </div>

          <p class="accounts-disclaimer">Investment and benefit products, except deposit accounts, are not FDIC insured.</p>

          <div class="accounts-group">
            <div class="accounts-group-title">
              <img class="accounts-group-logo" src="${LOGO_SRC}" data-logo-fallback="true" alt="" aria-hidden="true">
              <span>I.R.A. Accounts</span>
            </div>
            <div class="accounts-list">
              <div class="account-row">
                <div class="account-main">
                  <a class="account-name" href="#">401(k) Savings Plan <sup>3</sup> Unvested</a>
                </div>
                <div class="account-balance">$0.00</div>
              </div>
              <div class="account-row">
                <div class="account-main">
                  <a class="account-name" href="#">Shares/Unexercised Options <sup>4</sup></a>
                </div>
                <div class="account-balance">$0.00</div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </main>
  `;

  applyLogoFallbacks(container);
}
