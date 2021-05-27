name2=localStorage.getItem("Name");
document.getElementById("user").innerHTML=name2;
function logout(){
      localStorage.removeItem("Name");
      window.location="kwitter.html";
}
var firebaseConfig = {
      apiKey: "AIzaSyDkFC5U8wpEZepYRIQTQIErgijc34CsY1g",
      authDomain: "kwitter-ab9b1.firebaseapp.com",
      databaseURL: "https://kwitter-ab9b1.firebaseio.com",
      projectId: "kwitter-ab9b1",
      storageBucket: "kwitter-ab9b1.appspot.com",
      messagingSenderId: "595629750308",
      appId: "1:595629750308:web:5ce5ab5c8565fb1dca40b1"
    };