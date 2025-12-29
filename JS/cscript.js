var sidenav = document.querySelector(".side-navbar");
sidenav.style.left = "-60%";

function showNavbar() {
  sidenav.style.left = "0";
}

function closeNavbar() {
  sidenav.style.left = "-60%";
}

// Optional: Basic alert on form submit
var contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you for contacting us! We will get back to you soon.");
  contactForm.reset();
});
