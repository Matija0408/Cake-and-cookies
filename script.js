// GOOGLE MAPS
function initMap() {
  var bakery = { lat: 46.315745, lng: 16.32326 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: bakery,
  });
  var marker = new google.maps.Marker({ position: bakery, map: map });
}
//MAIL CONTACT FORM
function sendMail(contactForm) {
  emailjs
    .send("gmail", "cake_cookies", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      message: contactForm.textarea.value,
    })
    .then(
      function (response) {
        alert("Email successfully sent!", response);
      },
      function (error) {
        console.log("FAILED", error);
      }
    );
  return false;
}

//Border change on the picture, on the contact page
//When user clicks on the "Your name" field in the form, border-radius value is changed.
function borderChange(){
  document.getElementById("mailside").style.cssText = "border-radius: 100% 0 0 0.4%";
}
// Highlights nav links orrange
window.onload = function(){
  var path = location.pathname;
  //Compares current var path value, and if same, inserts .currentpage class into the nav link
  if(path == "/index.html"){
    document.getElementById("about").className = "currentpage";
  }else if (path == "/gallery.html"){
    document.getElementById("gallery").className = "currentpage";
  }else if(path == "/contact.html"){
    document.getElementById("contact").className = "currentpage";
  }
//Inserts an img into the div with mainimg class
//mainimg css background removed with @media and this one insterter as HTML element
  var x = document.createElement('img');  
  x.setAttribute('src', 'assets/img/sweets-887722_1920.jpg');
  x.setAttribute('width', '100%');
  x.setAttribute('height', 'auto');
  x.setAttribute('alt', 'some cakes');
  document.getElementById('landingPageFirstImage').appendChild(x);
}

//On burger menu click, main menu will drop down
var burgerMenu = document.getElementsByClassName('burger-menu')[0];
var navbar = document.getElementsByClassName('navbar')[0];
//on click toggle .active class in the navbar to show and hide it
burgerMenu.addEventListener('click', () => {
  navbar.classList.toggle('active');
})



// window.onload = function(){
//   var x = document.createElement('img');  
//   x.setAttribute('src', 'assets/img/sweets-887722_1920.jpg');
//   x.setAttribute('width', '100%');
//   x.setAttribute('height', 'auto');
//   x.setAttribute('alt', 'some cakes');
//   document.getElementById('landingPageFirstImage').appendChild(x);
// }