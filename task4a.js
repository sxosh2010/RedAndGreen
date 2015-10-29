var button = document.getElementById("button");
var square1 = document.getElementById("square1");
button.addEventListener("click",function() { 

	if(square1.className==="grey"){
		 square1.innerHTML = "stop";
		 square1.className = "red";
		 button.innerHTML = "Make green";
}

      else if(square1.className==="green"){
       	        square1.innerHTML = "stop";
		        square1.className = "red";
		        button.innerHTML = "Make green";
}  

     else  { 
     	  square1.className==="grey";
		   square1.innerHTML = "go";
		    square1.className = "green";
		     button.innerHTML = "Make red";
	 
}
  

})
	