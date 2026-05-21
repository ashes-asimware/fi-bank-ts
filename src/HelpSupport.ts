// HelpSupport.ts
// Renders the Help & Support page UI with Connect with us section

import { renderAccountsMenu } from "./accountsMenu";
import { applyLogoFallbacks, LOGO_SRC } from "./logo";

export function renderHelpSupportPage(container: HTMLElement) {
  container.innerHTML = `
    <main class="page-shell">
      <section class="accounts-card" aria-label="Help and Support">
        <header class="accounts-header">
          <div class="accounts-title">
            <img class="accounts-brand-logo" src="${LOGO_SRC}" data-logo-fallback="true" alt="" aria-hidden="true">
            <span class="accounts-brand-name">Dampoo Bank</span>
            <span class="accounts-brand-rest">Online Banking</span>
          </div>
          <button class="accounts-logout" type="button">Log out</button>
        </header>

        ${renderAccountsMenu("help-support", LOGO_SRC)}

        <div class="help-support-banner">
          <div class="help-support-banner-content">
            <h1 class="help-support-banner-text">How can we help?</h1>
            <div class="help-support-search-box">
              <input type="text" class="help-support-search-input" placeholder="Search..." aria-label="Search for help">
              <button type="button" class="help-support-search-button">Search</button>
            </div>
          </div>
        </div>

        <div class="help-support-content">
          <h2 class="help-support-title">Help & Support</h2>
          <p class="help-support-description">We're here to help you with any questions or issues you may have.</p>
        </div>

        <div class="connect-with-us-section">
          <h2 class="connect-with-us-title">Connect with us</h2>
          <div class="connect-with-us-grid">
            <div class="connect-with-us-item">
              <span class="connect-with-us-icon" aria-hidden="true">📅</span>
              <a class="connect-with-us-link" href="#">Schedule an appointment</a>
            </div>
            <div class="connect-with-us-item">
              <span class="connect-with-us-icon" aria-hidden="true">📍</span>
              <a class="connect-with-us-link" href="#">Find a location</a>
            </div>
            <div class="connect-with-us-item">
              <span class="connect-with-us-icon" aria-hidden="true">☎️</span>
              <a class="connect-with-us-link" href="#">Contact us</a>
            </div>
          </div>
        </div>

      </section>
    </main>
  `;

  applyLogoFallbacks(container);
}
