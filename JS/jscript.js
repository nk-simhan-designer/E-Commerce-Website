var sidenav = document.querySelector(".side-navbar");
sidenav.style.left = "-60%";
function showNavbar() {
  sidenav.style.left = "0";
}

function closeNavbar() {
  sidenav.style.left = "-60%";
}

var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function (event) {
  var enteredValue = event.target.value.toUpperCase();
  for (var i = 0; i < productlist.length; i++) {
    var productname = productlist[i].querySelector("p").textContent;
    if (productname.toUpperCase().indexOf(enteredValue) < 0) {
      productlist[i].style.display = "none";
    }
    else {
        productlist[i].style.display = "block";
    }
  }
});
