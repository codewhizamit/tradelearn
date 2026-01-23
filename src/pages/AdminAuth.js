// SIMPLE ADMIN AUTH (frontend only)

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "admin123";

export function adminLogin(email, password) {
  if (
    email.trim() === ADMIN_EMAIL &&
    password.trim() === ADMIN_PASSWORD
  ) {
    localStorage.setItem("isAdmin", "true");
    return true;
  }
  return false;
}

export function adminLogout() {
  localStorage.removeItem("isAdmin");
}

export function isAdminLoggedIn() {
  return localStorage.getItem("isAdmin") === "true";
}
