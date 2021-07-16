console.log(sessionStorage.length);
if (sessionStorage.length <= 0) {
    alert("only registered users can access.")
    window.location.href = "index.html"
}
$("#userName").html(sessionStorage.getItem("fullName"));
//==================================
//==Ui Elements like modal and menu==>
//==================================
let url = "http://localhost:9000"
let commonNav = '<a class="navbar-brand" href="#">Price Finder</a>' +
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">' +
    '<span class="navbar-toggler-icon"></span>' +
    '</button>' +
    '<div class="collapse navbar-collapse" id="collapsibleNavbar">' +
    '<ul class="navbar-nav ml-auto">' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="home.html">Home</a>' +
    '</li>';
let adminNav = '<li class="nav-item">' +
    '<a class="nav-link" href="productMaster.html">Manage_Products</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="userMaster.html">Manage_User</a>' +
    '</li>';
let userDropDown = '<li class="nav-item dropdown">' +
    '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
    '<span id="userName"></span>' +
    '</a>' +
    '<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
    //'<a class="dropdown-item" href="#">Action</a>' +
    '<a class="dropdown-item" href="#">User Details</a>' +
    '<div class="dropdown-divider"></div>' +
    '  <a class="dropdown-item" id="logout" onclick="userSignout()" href="#">Logout</a>' +
    ' </div>' +
    '</li>' +
    '</ul>' +
    '</div>';
let navBar = ''
if (sessionStorage.getItem("role") == "admin") {
    navBar = commonNav + adminNav + userDropDown;
} else {
    navBar = commonNav + userDropDown;
}


//==================================
//==Ui Elements like modal and menu==>
//==================================

//let url = "https://x7ghgnav1j.execute-api.us-east-1.amazonaws.com/dev"

async function userSignout() {
    await sessionStorage.clear()
    window.location.href = "index.html";
}