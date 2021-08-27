let url = "http://localhost:9000";
if (sessionStorage.length <= 0) {
    window.location.href = `${url}/ui`
    if (alert("only registered users can access this.")) {
        console.log("here");

    }
}

let user = sessionStorage.getItem("user_name").trim()
let role = sessionStorage.getItem("role").trim()
let organization_id = sessionStorage.getItem("organization_id").trim()
$("#userName").html(sessionStorage.getItem("fullName"));
//==================================
//==Ui Elements like modal and menu==>
//==================================
let commonNav = `<a class="navbar-brand" href="#">Price Finder</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav ml-auto">
    <li class="nav-item">
    <a class="nav-link" href="${url}/ui/home">Home</a>
    </li>`;
let adminNav = `<li class="nav-item">
    <a class="nav-link" href="${url}/ui/productMaster">Manage_Products</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="${url}/ui/userMaster">Manage_User</a>
    </li>`;
let userDropDown = `<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span id="userName"></span>
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" href="#">User Details</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" id="logout" onclick="userSignout()" href="#">Logout</a>
     </div>
    </li>
    </ul>
    </div>`;

let navBar = ''
if (role == "admin") {
    console.log("in for admin");
    navBar = commonNav + adminNav + userDropDown;
} else {
    console.log("in for others");
    navBar = commonNav + userDropDown;
}


window.addEventListener("load", function() {
    let nav_bar = document.getElementById("navBar")
    nav_bar.innerHTML = nav_bar.textContent = navBar;
    let user_span = document.getElementById("userName")
    user_span.innerText = user_span.textContent = user;
});
//==================================
//==Ui Elements like modal and menu==>
//==================================

//let url = "https://x7ghgnav1j.execute-api.us-east-1.amazonaws.com/dev"

async function userSignout() {
    await sessionStorage.clear()
    await localStorage.clear()
    window.location.href = `${url}/ui`;
}