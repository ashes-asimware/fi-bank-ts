// RewardsDeals.ts
// Renders the Rewards & Deals page UI

import { renderAccountsMenu } from "./accountsMenu";
import { applyLogoFallbacks, LOGO_SRC } from "./logo";

export function renderRewardsDealPage(container: HTMLElement) {
  container.innerHTML = `
    <main class="page-shell">
      <section class="accounts-card" aria-label="Rewards and Deals">
        <header class="accounts-header">
          <div class="accounts-title">
            <img class="accounts-brand-logo" src="${LOGO_SRC}" data-logo-fallback="true" alt="" aria-hidden="true">
            <span class="accounts-brand-name">Dampoo Bank</span>
            <span class="accounts-brand-rest">Online Banking</span>
          </div>
          <button class="accounts-logout" type="button">Log out</button>
        </header>

        ${renderAccountsMenu("rewards-deals", LOGO_SRC)}

        <div class="rewards-deals-content">
          <h2 class="rewards-deals-title">My Rewards</h2>
          <p class="rewards-deals-description">Track your rewards and discover exclusive deals tailored just for you.</p>
        </div>

      </section>
    </main>
  `;

  applyLogoFallbacks(container);
}
