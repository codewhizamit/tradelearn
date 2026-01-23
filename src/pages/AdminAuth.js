const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "admin123";
const ADMIN_KEY = "tradelearn_admin_auth";

export function adminLogin(email, password) {
  if (
    email.trim() === ADMIN_EMAIL &&
    password.trim() === ADMIN_PASSWORD
  ) {
    localStorage.setItem(ADMIN_KEY, "true");
    return true;
  }
  return false;
}

export function adminLogout() {
  localStorage.removeItem(ADMIN_KEY);
}

export function isAdminLoggedIn() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(ADMIN_KEY) === "true";
}
