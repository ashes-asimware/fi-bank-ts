// AccountSummary.ts
// Renders the Accounts page UI matching AccountSummary.png / accounts2.png

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

        <nav class="accounts-menu">
          <a class="menu-item active" href="#" data-nav-page="accounts">Accounts</a>
          <div class="menu-dropdown" data-dropdown="pay-transfer">
            <button class="menu-item-button" type="button" data-nav-trigger="pay-transfer" aria-haspopup="true" aria-expanded="false">Pay &amp; Transfer</button>
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
