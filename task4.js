var button = document.getElementById("button");
var count = 0;
var square1 = document.getElementById("square1");
button.addEventListener("click",function() {
count +=1;
switch(count){
case 1:
square1.innerHTML="stop";
square1.className="red";
button.innerHTML="make green";
break;
case 2:
square1.innerHTML="go";
square1.className="green";
button.innerHTML="make red";
count=0;
break;
}
});
