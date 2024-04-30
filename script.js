//1
//adding a child to html element using tree heirarchy
//using append or appendchild method
ach = document.getElementById("ach")
newrow = document.createElement("div")
ach.append(newrow);
newrow.innerText = "this is a new row of achievements div";

//2
//using queryselector change the color of background 
h = document.querySelector("h3");
h.style.background= "aqua";

//3
// on click view a new element
function view(){
    para = document.getElementById("text");
    para.style = "display:block"
}


//4
// to change style attributes using on mouseover  
function changeImg(x){
    x.style.height = "500px";
    x.style.width = "500px";
}

//5
// to give 3d look using box shadow property
function change(x){
    x.style = "box-shadow: 20px 20px #888888;"
}

function normal(x){
    x.style.width = "100%";
    x.style = "box-shadow: 0px 0px;"
}


//6
// using onkeypress event
// when user tries to modify values that aren't supposed to me manipulated 
function defau(){
    alert("this value cannot be changed")
}

//7
// on resizing 
function resiz(){
    document.querySelector("#username").placeholder = "you changed size";
    
}

//8 
//changing img src
function changeSrc(x){
    x.src = "images/flower.jpg"
}

function norm(x){
    x.src = "images/win3.jpg"
}

//9
//checking cookies
function checkCookies() {
    var text = "";
    if (navigator.cookieEnabled == true) {
      text = "Cookies are enabled.";
    } else {
      text = "Cookies are not enabled.";
    }
    //document.getElementById("cookies").innerHTML = text;
  }

//10
function net(){
    var text = "browser is online";
    document.getElementById("line").innerHTML = text;
}

function inet(){
    var text = "browser is offline";
    document.getElementById("line").innerHTML = text;
}