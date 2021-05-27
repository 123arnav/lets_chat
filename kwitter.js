function login(){
    username=document.getElementById("user_name").value;
    if (username==""){
console.log("wrong")
document.getElementById("user_name").placeholder="Please type in your username";
    }
    else{
        localStorage.setItem("Name",username);
        window.location="kwitter_room.html";
    }
}