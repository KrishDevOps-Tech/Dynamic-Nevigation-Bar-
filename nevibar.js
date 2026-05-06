const nav = document.getElementById("nav");
const closeSpan = document.getElementById("closeSpan");
const hint = document.getElementById("hint");
const toast = document.getElementById("toast");
let isOpen = false,
  toastTimer;

// Open Menu function
function openMenu() {
  isOpen = true;
  nav.classList.add("active");
  hint.classList.add("hidden");
}

// Close Menu function
function closeMenu() {
  isOpen = false;
  nav.classList.remove("active");
  setTimeout(() => hint.classList.remove("hidden"), 650);
}

// Show Toast notification
function showToast(label) {
  clearTimeout(toastTimer);
  toast.textContent = label + " tapped!";
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

// Main Click Event Listener
nav.addEventListener("click", (e) => {
  if (!isOpen) {
    openMenu();
    return;
  }
  if (e.target.closest("#closeSpan")) {
    closeMenu();
    return;
  }
  const span = e.target.closest("span[data-label]");
  if (span) {
    showToast(span.dataset.label);
    closeMenu();
  }
});

// Close menu using ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isOpen) closeMenu();
});

// Close menu if clicked outside the container
document.addEventListener("click", (e) => {
  if (isOpen && !nav.contains(e.target)) closeMenu();
});
