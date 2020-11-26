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
        alert("FAILED", error);
      }
    );
  return false;
}

//Border change on the picture, on the contact page
//When user clicks on the "Your name" field in the form, border-radius value is changed.
function borderChange(){
  document.getElementById("mailside").style.cssText = "border-radius: 100% 0 0 0.4%";
}

//On burger menu click, main menu will drop down
var burgerMenu = document.getElementsByClassName('burger-menu')[0];
var navbar = document.getElementsByClassName('navbar')[0];
//on click toggle .active class in the navbar to show and hide it
burgerMenu.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// function highlightCurrentPageLink(){
//   var path = location.pathname;
//   //Compares current var path value, and if same, inserts .currentpage class into the nav link
//   // Highlights nav links orrange
//   if(path == "/Cake-and-cookies/index.html" || "index.html"){
//     document.getElementById("about").className = "currentpage";
//   }else if (path == "/Cake-and-cookies/gallery.html" || "gallery.html"){
//     document.getElementById("gallery").className = "currentpage";
//   }else if(path == "/Cake-and-cookies/contact.html"){
//     document.getElementById("contact").className = "currentpage";
//   }
// };


////////////////////////////////////////////
var i = 0;
var img = [];
var time = 5000;

img[0] = "assets/img/pancakes-1512834_1920.jpg";
img[1] = "assets/img/mix2.jpg";
img[2] = "assets/img/mix3.jpg";
img[3] = "assets/img/mix.jpg";

function slide(){
    document.getElementById("slide").src = img[i];
    if (i < img.length - 1) {
    i++;
    } else {
    i = 0;
  }
setTimeout("slide()", time);
}



window.onload = function(){
  slide();
  //Inserts an img into the div with mainimg class
  //mainimg css background removed with @media and this one insterted as HTML element
var x = document.createElement('img');  
x.setAttribute('src', 'assets/img/sweets-887722_1920.jpg');
x.setAttribute('width', '100%');
x.setAttribute('height', 'auto');
x.setAttribute('alt', 'some cakes');
document.getElementById('landingPageFirstImage').appendChild(x);

var y = document.createElement('img');
y.setAttribute('src', 'assets/img/apple-pie-474954_1920.jpg');
y.setAttribute('width', '100%');
y.setAttribute('height', 'auto');
y.setAttribute('alt', 'apple pie');
document.getElementById('landingPageGoalImg').appendChild(y);

};

function highlightCurrentPageLink(){
  timer = setTimeout(function(){
    var path = location.pathname;
  //Compares current var path value, and if same, inserts .currentpage class into the nav link
  // Highlights nav links orrange
  if(path == "/cake-and-cookies/index.html"){
    document.getElementById("about").className = "currentpage";
  }else if (path == "/cake-and-cookies/gallery.html"){
    document.getElementById("gallery").className = "currentpage";
  }else if(path == "/cake-and-cookies/contact.html"){
    document.getElementById("contact").className = "currentpage";
  }
  }, 1000);
};
highlightCurrentPageLink();

console.log(location.pathname);