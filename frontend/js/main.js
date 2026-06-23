const token = localStorage.getItem("token");

// Protect dashboard and add-pet pages
const protectedPages = ["dashboard.html", "add-pet.html"];

const currentPage = window.location.pathname.split("/").pop();

if (protectedPages.includes(currentPage) && !token) {
  alert("Please login first");
  window.location.href = "login.html";
}

// Logout function
function logout() {
  localStorage.removeItem("token");
  alert("Logged out successfully");
  window.location.href = "login.html";
}