import "./styles.css";
import { renderAccountsPage } from "./AccountSummary";
import { renderPayTransferPage } from "./PayTransfer";
import { applyLogoFallbacks, LOGO_SRC } from "./logo";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("App root not found.");

let detachMenuOutsideListener: (() => void) | null = null;

function renderLoginPage() {
  detachMenuOutsideListener?.();
  detachMenuOutsideListener = null;

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
      attachMenuHandlers();
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

function attachMenuHandlers() {
  const menu = app!.querySelector(".accounts-menu");
  if (!menu) {
    detachMenuOutsideListener?.();
    detachMenuOutsideListener = null;
    return;
  }

  const dropdowns = menu.querySelectorAll<HTMLElement>(".menu-dropdown");

  const closeAllDropdowns = () => {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("open");
      const trigger = dropdown.querySelector<HTMLButtonElement>(".menu-item-button[data-nav-trigger]");
      trigger?.setAttribute("aria-expanded", "false");
    });
  };

  const toggleDropdown = (dropdownName: string) => {
    const dropdown = menu.querySelector<HTMLElement>(`.menu-dropdown[data-dropdown="${dropdownName}"]`);
    const trigger = menu.querySelector<HTMLButtonElement>(`.menu-item-button[data-nav-trigger="${dropdownName}"]`);
    if (!dropdown || !trigger) return;
    const shouldOpen = !dropdown.classList.contains("open");
    closeAllDropdowns();
    if (shouldOpen) {
      dropdown.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
    }
  };

  const triggers = menu.querySelectorAll<HTMLButtonElement>(".menu-item-button[data-nav-trigger]");
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const dropdownName = trigger.dataset.navTrigger;
      if (dropdownName) {
        toggleDropdown(dropdownName);
      }
    });
  });

  const topLevelLinks = menu.querySelectorAll<HTMLAnchorElement>(".menu-item[data-nav-page]");
  topLevelLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.dataset.navPage;
      if (page === "accounts") {
        renderAccountsPage(app!);
      } else if (page === "pay-transfer") {
        renderPayTransferPage(app!);
      }
      attachLogoutHandler();
      attachMenuHandlers();
    });
  });

  const submenuLinks = menu.querySelectorAll<HTMLAnchorElement>(".menu-dropdown-link[data-nav-page]");
  submenuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.dataset.navPage;
      closeAllDropdowns();
      if (page === "pay-transfer") {
        renderPayTransferPage(app!);
      } else if (page === "accounts") {
        renderAccountsPage(app!);
      }
      attachLogoutHandler();
      attachMenuHandlers();
    });
  });

  const submenuUtilityLinks = menu.querySelectorAll<HTMLAnchorElement>(".menu-dropdown-link:not([data-nav-page])");
  submenuUtilityLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      closeAllDropdowns();
    });
  });

  detachMenuOutsideListener?.();
  const onDocumentClick = (event: MouseEvent) => {
    const target = event.target as Node | null;
    if (target && !menu.contains(target)) {
      closeAllDropdowns();
    }
  };
  document.addEventListener("click", onDocumentClick);
  detachMenuOutsideListener = () => {
    document.removeEventListener("click", onDocumentClick);
  };
}

// Start on login page
renderLoginPage();