function isOnline() {
    return window.navigator.onLine;
}

window.addEventListener('load', function() {

  function updateOnlineStatus(event) {

    var condition = navigator.onLine ? "online" : "offline";
    if( condition == 'online' ){

    }else{
        alert("Зникло інтернет з'єднання'")
    }

  }

  window.addEventListener('online',  updateOnlineStatus(event) );
  window.addEventListener('offline', updateOnlineStatus(event) );

});

var i = 0;

function validateForm() {
  var title, smrtdesc, lngdesc;
  title = document.getElementById("title");
  smrtdesc = document.getElementById("short_description");
  long_description  = document.getElementById("long_desription");
  if (title.value == ""||smrtdesc.value == ""||long_description.value == "") {
        alert("Ви не заповнили всі поля");
    }
  else if (isOnline()) {
    localStorage.setItem('titel', title.value);
    var titul = localStorage.getItem('titel');
    news_title = document.getElementById("titleInNews");
    news_description = document.getElementById("longDescInNews");
    document.getElementById('titleInNews').innerHTML = title.value;
  }
   else {
     localStorage.title = title.value;
     localStorage.smallDescription = smrtdesc.value;
     localStorage.long_description = long_description.value;
   }

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
    var a ='&nbsp &nbsp &nbsp &nbsp &nbsp';
    localStorage.text = text.value;
    localStorage.today = today + linebreak;
    if(input.value == ""){
      alert("Ви не заповнили поле відгуку");
    }
    else if(isOnline()){
     newdiv.append(text.value+today);
     newdiv.appendChild(linebreak);
   }
 else {
   localStorage.text = text.value;
   localStorage.today = today + linebreak;
    alert("Не має інтернету!");
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
