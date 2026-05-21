import "./styles.css";
import { renderAccountsPage } from "./AccountSummary";
import { renderPayTransferPage } from "./PayTransfer";
import { renderHelpSupportPage } from "./HelpSupport";
import { renderRewardsDealPage } from "./RewardsDeals";
import { applyLogoFallbacks, LOGO_SRC } from "./logo";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("App root not found.");

let detachMenuOutsideListener: (() => void) | null = null;
let currentPage: "login" | "accounts" | "pay-transfer" | "help-support" | "rewards-deals" = "login";

function renderLoginPage() {
  detachMenuOutsideListener?.();
  detachMenuOutsideListener = null;
  currentPage = "login";

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
      renderAccountsView();
    });
  }
}

function renderAccountsView() {
  renderAccountsPage(app!);
  currentPage = "accounts";
  attachLogoutHandler();
  attachMenuHandlers();
}

function renderPayTransferView() {
  renderPayTransferPage(app!);
  currentPage = "pay-transfer";
  attachLogoutHandler();
  attachMenuHandlers();
}

function renderHelpSupportView() {
  renderHelpSupportPage(app!);
  currentPage = "help-support";
  attachLogoutHandler();
  attachMenuHandlers();
}

function renderRewardsDealView() {
  renderRewardsDealPage(app!);
  currentPage = "rewards-deals";
  attachLogoutHandler();
  attachMenuHandlers();
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
  const menu = app!.querySelector<HTMLElement>(".accounts-menu");
  if (!menu) {
    detachMenuOutsideListener?.();
    detachMenuOutsideListener = null;
    return;
  }

  const dropdowns = menu.querySelectorAll<HTMLElement>(".menu-dropdown");

  const closeAllDropdowns = (restoreFocus = false) => {
    const openTrigger = menu.querySelector<HTMLButtonElement>(".menu-item-button[data-nav-trigger][aria-expanded='true']");
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("open");
      const trigger = dropdown.querySelector<HTMLButtonElement>(".menu-item-button[data-nav-trigger]");
      trigger?.setAttribute("aria-expanded", "false");
    });
    if (restoreFocus) {
      openTrigger?.focus();
    }
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

    trigger.addEventListener("keydown", (event) => {
      const dropdownName = trigger.dataset.navTrigger;
      if (!dropdownName) return;

      if (event.key === "Escape") {
        event.preventDefault();
        closeAllDropdowns(true);
        return;
      }

      if (event.key !== "ArrowDown") return;

      event.preventDefault();
      const dropdown = menu.querySelector<HTMLElement>(`.menu-dropdown[data-dropdown="${dropdownName}"]`);
      toggleDropdown(dropdownName);
      const firstLink = dropdown?.querySelector<HTMLElement>("a, button, [tabindex]:not([tabindex='-1'])");
      firstLink?.focus();
    });
  });

  const topLevelLinks = menu.querySelectorAll<HTMLAnchorElement>(".menu-item[data-nav-page]");
  topLevelLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      if (link.classList.contains("active")) {
        closeAllDropdowns();
        return;
      }
      const page = link.dataset.navPage;
      if (page === "accounts") {
        if (currentPage !== "accounts") {
          renderAccountsView();
        }
      } else if (page === "pay-transfer") {
        if (currentPage !== "pay-transfer") {
          renderPayTransferView();
        }
      } else if (page === "help-support") {
        if (currentPage !== "help-support") {
          renderHelpSupportView();
        }
      } else if (page === "rewards-deals") {
        if (currentPage !== "rewards-deals") {
          renderRewardsDealView();
        }
      }
    });
  });

  const topLevelUtilityLinks = menu.querySelectorAll<HTMLAnchorElement>(".menu-item:not([data-nav-page])");
  topLevelUtilityLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href")?.trim();
      const isPlaceholderLink = !href || href === "#";

      if (isPlaceholderLink) {
        e.preventDefault();
      }

      closeAllDropdowns();
    });
  });

  const submenuLinks = menu.querySelectorAll<HTMLAnchorElement>(".menu-dropdown-link[data-nav-page]");
  submenuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.dataset.navPage;
      closeAllDropdowns();
      if (page === "pay-transfer") {
        if (currentPage !== "pay-transfer") {
          renderPayTransferView();
        }
      } else if (page === "accounts") {
        if (currentPage !== "accounts") {
          renderAccountsView();
        }
      } else if (page === "help-support") {
        if (currentPage !== "help-support") {
          renderHelpSupportView();
        }
      } else if (page === "rewards-deals") {
        if (currentPage !== "rewards-deals") {
          renderRewardsDealView();
        }
      }
    });
  });

  const submenuUtilityLinks = menu.querySelectorAll<HTMLAnchorElement>(".menu-dropdown-link:not([data-nav-page])");
  submenuUtilityLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href")?.trim();
      const isPlaceholderLink = !href || href === "#";

      if (isPlaceholderLink) {
        e.preventDefault();
        // TODO: Replace placeholder utility links with real navigation targets as they become available.
      }

      closeAllDropdowns();
    });
  });

  detachMenuOutsideListener?.();
  const onDocumentClick = (event: MouseEvent) => {
    if (!event.composedPath().includes(menu)) {
      closeAllDropdowns();
    }
  };
  document.addEventListener("click", onDocumentClick);

  const onDocumentFocusIn = (event: FocusEvent) => {
    if (!event.composedPath().includes(menu)) {
      closeAllDropdowns();
    }
  };
  document.addEventListener("focusin", onDocumentFocusIn);

  const onMenuKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeAllDropdowns(true);
    }
  };
  menu.addEventListener("keydown", onMenuKeyDown);

  detachMenuOutsideListener = () => {
    document.removeEventListener("click", onDocumentClick);
    document.removeEventListener("focusin", onDocumentFocusIn);
    menu.removeEventListener("keydown", onMenuKeyDown);
  };
}

// Start on login page
renderLoginPage();
