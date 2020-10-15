// GOOGLE MAPS
function initMap() {
  var bakery = { lat: 46.315745, lng: 16.32326 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: bakery,
  });
  var marker = new google.maps.Marker({ position: bakery, map: map });
}
// MAIL CONTACT FORM

// function sendMail(contactForm) {
//   emailjs
//     .send("gmail_cake_and_cookies", "template-cb2k35k", {
//       from_name: contactForm.name.value,
//       from_email: contactForm.mail.value,
//       message: contactForm.textarea.value,
//     })
//     .then(
//       function (response) {
//         console.log("Email sent successfuly!", response);
//       },
//       function (error) {
//         console.log("Email not sent!", error);
//       }
//     );
// }

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