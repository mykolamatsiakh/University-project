function validateForm() {
  var title, smrtdesc, lngdesc;
  title = document.getElementById("title");
  smrtdesc = document.getElementById("short_description");
  long_description  = document.getElementById("long_desription");
  if (title.value == ""||smrtdesc.value == ""||long_description.value == "") {
        alert("Ви не заповнили всі поля");
    }
    else alert("Новина успішно надіслана");
}
function addFeedback(){
  var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}

today = mm + '/' + dd + '/' + yyyy;
  var text, newdiv, input;
  input = document.getElementById("input");
  linebreak = document.createElement("br");
    text = document.getElementById("input");
    newdiv = document.getElementById("newDivs");
    if(input.value == ""){
      alert("Ви не заповнили поле відгуку");
 }
 else {
   newdiv.append(text.value+"      "+today);
   newdiv.appendChild(linebreak);
 }

}

// function showImage(src, target) {
//     var fr = new FileReader();
//     // when image is loaded, set the src of the image where you want to display it
//     fr.onload = function (e) {
//         target.src = this.result;
//     };
//     src.addEventListener("change", function () {
//         // fill fr with image data
//         fr.readAsDataURL(src.files[0]);
//     });
// }
//
// var src = document.getElementById("news-img");
// var target = document.getElementById("added-photo");
// showImage(src, target);
