// AccountSummary.ts
// Renders the Accounts page UI similar to AccountSummary.png

export function renderAccountsPage(container: HTMLElement) {
  container.innerHTML = `
    <main class="page-shell">
      <section class="accounts-card" aria-label="Account summary">
        <header class="accounts-header">
          <div class="accounts-title">Accounts</div>
          <button class="accounts-logout" type="button">Log out</button>
        </header>
        <div class="accounts-groups">
          <div class="accounts-group">
            <div class="accounts-group-title">Bank Accounts</div>
            <div class="accounts-list">
              <div class="account-row">
                <div class="account-type">Checking ••••1234</div>
                <div class="account-balance">$4,250.00</div>
                <div class="account-actions">
                  <button class="account-action">View</button>
                  <button class="account-action">Transfer</button>
                </div>
              </div>
              <div class="account-row">
                <div class="account-type">Savings ••••5678</div>
                <div class="account-balance">$12,800.00</div>
                <div class="account-actions">
                  <button class="account-action">View</button>
                  <button class="account-action">Transfer</button>
                </div>
              </div>
            </div>
          </div>
          <div class="accounts-group">
            <div class="accounts-group-title">Credit Cards</div>
            <div class="accounts-list">
              <div class="account-row">
                <div class="account-type">Visa Platinum ••••4321</div>
                <div class="account-balance">$-1,200.00</div>
                <div class="account-actions">
                  <button class="account-action">View</button>
                  <button class="account-action">Pay</button>
                </div>
              </div>
              <div class="account-row">
                <div class="account-type">Rewards MasterCard ••••8765</div>
                <div class="account-balance">$-350.00</div>
                <div class="account-actions">
                  <button class="account-action">View</button>
                  <button class="account-action">Pay</button>
                </div>
              </div>
            </div>
          </div>
          <div class="accounts-group">
            <div class="accounts-group-title">Loans</div>
            <div class="accounts-list">
              <div class="account-row">
                <div class="account-type">Auto Loan ••••2468</div>
                <div class="account-balance">$8,900.00</div>
                <div class="account-actions">
                  <button class="account-action">View</button>
                  <button class="account-action">Pay</button>
                </div>
              </div>
              <div class="account-row">
                <div class="account-type">Personal Loan ••••1357</div>
                <div class="account-balance">$2,100.00</div>
                <div class="account-actions">
                  <button class="account-action">View</button>
                  <button class="account-action">Pay</button>
                </div>
              </div>
            </div>
          </div>
          <div class="accounts-group">
            <div class="accounts-group-title">Investments</div>
            <div class="accounts-list">
              <div class="account-row">
                <div class="account-type">Brokerage ••••9753</div>
                <div class="account-balance">$24,500.00</div>
                <div class="account-actions">
                  <button class="account-action">View</button>
                </div>
              </div>
              <div class="account-row">
                <div class="account-type">IRA ••••8642</div>
                <div class="account-balance">$18,200.00</div>
                <div class="account-actions">
                  <button class="account-action">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}
