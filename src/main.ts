import "./styles.css";
import { renderAccountsPage } from "./AccountSummary";
import { applyLogoFallbacks, LOGO_SRC } from "./logo";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("App root not found.");

function renderLoginPage() {
  app!.innerHTML = `
    <main class="page-shell">
      <section class="login-card" aria-label="Financial institution login form">
        <header class="login-header">
          <div class="accounts-title">
            <img class="accounts-brand-logo" src="${LOGO_SRC}" data-logo-fallback="true" alt="" aria-hidden="true">
            <span class="accounts-brand-name">Dampoo Bank</span>
            <span class="accounts-brand-rest">Online Banking</span>
          </div>
        </header>

        <form class="login-form" action="#" method="post" novalidate>
          <label class="field-label" for="user-id">User ID</label>
          <input id="user-id" name="userId" class="field-input" type="text" autocomplete="username" />

          <label class="field-label second" for="password">Password</label>
          <input id="password" name="password" class="field-input" type="password" autocomplete="current-password" />

          <label class="save-row" for="save-user-id">
            <input id="save-user-id" type="checkbox" name="rememberUser" />
            <span>Save user ID</span>
          </label>

          <button class="login-button" type="submit">Log in</button>

          <a class="primary-link" href="#">Forgot user ID/password</a>

          <div class="secondary-links">
            <a href="#">Security &amp; Help</a>
            <a href="#">Enroll</a>
          </div>
        </form>
      </section>
    </main>
  `;
  applyLogoFallbacks(app!);

  // Demo: on submit, show accounts page
  const form = app!.querySelector(".login-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      renderAccountsPage(app!);
      attachLogoutHandler();
    });
  }
}

function attachLogoutHandler() {
  const logoutBtn = app!.querySelector(".accounts-logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      renderLoginPage();
    });
  }
}

// Start on login page
renderLoginPage();