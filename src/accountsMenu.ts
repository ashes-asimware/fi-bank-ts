export type AccountsMenuPage = "accounts" | "pay-transfer";

export function renderAccountsMenu(activePage: AccountsMenuPage, logoSrc: string) {
  const isAccountsActive = activePage === "accounts";
  const isPayTransferActive = activePage === "pay-transfer";

  return `
        <nav class="accounts-menu">
          <a class="menu-item${isAccountsActive ? " active" : ""}" href="#" data-nav-page="accounts">Accounts</a>
          <div class="menu-dropdown" data-dropdown="pay-transfer">
            <button class="menu-item-button${isPayTransferActive ? " menu-item-button-active" : ""}" type="button" data-nav-trigger="pay-transfer" aria-haspopup="true" aria-expanded="false" aria-controls="menu-panel-pay-transfer">Pay &amp; Transfer</button>
            <div class="menu-dropdown-panel" id="menu-panel-pay-transfer" aria-label="Pay and Transfer">
              <div class="menu-dropdown-title">Pay &amp; Transfer</div>
              <div class="menu-dropdown-grid">
                <div class="menu-dropdown-column">
                  <div class="menu-dropdown-section-title">Transfer between my accounts</div>
                  <a class="menu-dropdown-link" href="#" data-nav-page="pay-transfer">Make a transfer</a>
                  <a class="menu-dropdown-link" href="#">View/manage transfers</a>

                  <div class="menu-dropdown-section-title menu-dropdown-section-spaced">Wire/external transfer</div>
                  <a class="menu-dropdown-link" href="#">Send a wire/external transfer</a>
                  <a class="menu-dropdown-link" href="#">View/manage wires &amp; external transfers</a>
                </div>

                <div class="menu-dropdown-column">
                  <div class="menu-dropdown-section-title">BofA credit cards</div>
                  <a class="menu-dropdown-link" href="#" data-nav-page="pay-transfer">Pay my credit card</a>
                  <a class="menu-dropdown-link" href="#">View/manage payments</a>
                  <a class="menu-dropdown-link" href="#">Manage accounts from other banks</a>

                  <div class="menu-dropdown-section-title menu-dropdown-section-spaced">Bill Pay</div>
                  <a class="menu-dropdown-link" href="#">Make a payment</a>
                  <a class="menu-dropdown-link" href="#">View/manage payments</a>
                  <a class="menu-dropdown-link" href="#">Manage accounts from other banks</a>
                  <a class="menu-dropdown-link" href="#">Help</a>
                </div>

                <div class="menu-dropdown-column">
                  <div class="menu-dropdown-section-title">Pay a person</div>
                  <a class="menu-dropdown-link" href="#" data-nav-page="pay-transfer">Send money with Zelle&reg;</a>
                  <a class="menu-dropdown-link" href="#">Zelle activity</a>
                  <a class="menu-dropdown-link" href="#">Zelle recipients</a>
                  <a class="menu-dropdown-link" href="#">Zelle settings</a>
                  <a class="menu-dropdown-link" href="#">Send to other BofA accounts</a>
                </div>
              </div>
            </div>
          </div>
          <div class="menu-dropdown" data-dropdown="rewards-deals">
            <button class="menu-item-button" type="button" data-nav-trigger="rewards-deals" aria-haspopup="true" aria-expanded="false" aria-controls="menu-panel-rewards-deals">Rewards &amp; Deals</button>
            <div class="menu-dropdown-panel menu-dropdown-panel-rewards" id="menu-panel-rewards-deals" aria-label="Rewards and Deals">
              <div class="menu-dropdown-title menu-dropdown-title-rewards">Rewards &amp; Deals</div>
              <a class="menu-dropdown-link menu-dropdown-link-rewards" href="#">Special offers</a>
              <a class="menu-dropdown-link menu-dropdown-link-rewards" href="#">My Rewards</a>
              <a class="menu-dropdown-link menu-dropdown-link-rewards" href="#">Cash back deals</a>
            </div>
          </div>
          <div class="menu-dropdown" data-dropdown="tools-investing">
            <button class="menu-item-button" type="button" data-nav-trigger="tools-investing" aria-haspopup="true" aria-expanded="false" aria-controls="menu-panel-tools-investing">Tools &amp; Investing</button>
            <div class="menu-dropdown-panel menu-dropdown-panel-tools" id="menu-panel-tools-investing" aria-label="Tools and Investing">
              <div class="menu-dropdown-title menu-dropdown-title-tools">Tools &amp; Investing Overview</div>
              <div class="menu-dropdown-grid-tools">
                <div class="menu-dropdown-tools-col menu-dropdown-tools-col-nav">
                  <div class="menu-dropdown-tools-heading">My Financial Picture</div>
                  <a class="menu-dropdown-link menu-dropdown-link-tools" href="#">Net Worth</a>
                  <a class="menu-dropdown-link menu-dropdown-link-tools" href="#">Activity</a>
                  <a class="menu-dropdown-link menu-dropdown-link-tools" href="#">Budget</a>
                  <a class="menu-dropdown-link menu-dropdown-link-tools" href="#">Manage</a>
                  <div class="menu-dropdown-tools-footer">FICO<sup>&reg;</sup> Score</div>
                </div>

                <div class="menu-dropdown-tools-col">
                  <div class="menu-dropdown-tools-heading menu-dropdown-tools-heading-feature">
                    <img class="menu-dropdown-tools-logo" src="${logoSrc}" data-logo-fallback="true" alt="" aria-hidden="true">
                    <span>Investing</span>
                  </div>
                  <p class="menu-dropdown-tools-copy">Review your account summary, make a transfer or check the account activity of your Merrill accounts</p>
                  <a class="menu-dropdown-link menu-dropdown-link-tools" href="#">Manage your accounts &raquo;</a>
                </div>

                <div class="menu-dropdown-tools-col">
                  <div class="menu-dropdown-tools-heading">Center for Business Empowerment</div>
                  <p class="menu-dropdown-tools-copy">Equip yourself with the tools and information you need to start, run and grow your business.</p>
                  <a class="menu-dropdown-link menu-dropdown-link-tools" href="#">Explore &raquo;</a>
                </div>
              </div>
            </div>
          </div>
          <div class="menu-dropdown" data-dropdown="security-center">
            <button class="menu-item-button" type="button" data-nav-trigger="security-center" aria-haspopup="true" aria-expanded="false" aria-controls="menu-panel-security-center">Security Center</button>
            <div class="menu-dropdown-panel menu-dropdown-panel-security" id="menu-panel-security-center" aria-label="Security Center">
              <a class="menu-dropdown-link menu-dropdown-link-security" href="#">Overview</a>
              <a class="menu-dropdown-link menu-dropdown-link-security" href="#">Change User ID</a>
              <a class="menu-dropdown-link menu-dropdown-link-security" href="#">Change Password</a>
              <a class="menu-dropdown-link menu-dropdown-link-security" href="#">Set up two-factor authentication</a>
              <a class="menu-dropdown-link menu-dropdown-link-security" href="#">Alert settings</a>
              <a class="menu-dropdown-link menu-dropdown-link-security" href="#">Secure your device</a>
              <a class="menu-dropdown-link menu-dropdown-link-security" href="#">Security tips and articles</a>
              <a class="menu-dropdown-link menu-dropdown-link-security" href="#">Report suspicious activity</a>
            </div>
          </div>
          <div class="menu-dropdown" data-dropdown="open-account">
            <button class="menu-item-button" type="button" data-nav-trigger="open-account" aria-haspopup="true" aria-expanded="false" aria-controls="menu-panel-open-account">Open an Account</button>
            <div class="menu-dropdown-panel menu-dropdown-panel-open-account" id="menu-panel-open-account" aria-label="Open an Account">
              <a class="menu-dropdown-link menu-dropdown-link-open-account" href="#">Open a new account</a>
            </div>
          </div>
          <a class="menu-item" href="#">Help &amp; Support</a>
        </nav>
  `;
}
