const navToggleBtn = document.querySelector(".mobile-toggle-button");
const primaryNavigation = document.querySelector(".primary-navigation");
const overlayBtn = document.querySelector(".nav-overlay");
 
 
navToggleBtn.addEventListener("click", () => {
 
  primaryNavigation.hasAttribute("data-visible")
    ? navToggleBtn.setAttribute("aria-expanded", false)
    : navToggleBtn.setAttribute("aria-expanded", true);
  primaryNavigation.toggleAttribute("data-visible");

    overlayBtn.toggleAttribute("data-visible");
  overlayBtn.style.transition = "all 0.3s ease";
 
});


document.addEventListener("click", e => {
  const isDropdownBtn = e.target.matches("[data-dropdown-btn]")
  if(!isDropdownBtn && e.target.closest("[data-dropdown]") != null) return

  let curdropdown;

  if(isDropdownBtn) {
    curdropdown = e.target.closest("[data-dropdown]")
    curdropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if(dropdown === curdropdown) return
    dropdown.classList.remove("active")
  })

})



 

