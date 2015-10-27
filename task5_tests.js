//    Check that the div with id testresult doesn't have the class failing or passing. 
//    Use console.log to display a message that tells you what the result of the check was.
var testresult = document.getElementById('testresult');

if (testresult.className === "grey"){
	console.log("the class name is passing : " + testresult.className);	
}
else{
	console.log("the class name is failing : " + testresult.className)
}

//    Check that the button has the text 'Make failing'.
var mybutton = document.getElementById("button");
    if(mybutton  === 'make failing'){
    	console.log("the button text is red : " + mybutton.innerHTML);
    } 
    else{
      console.log("the button text is  : " + mybutton.innerHTML);

    }


//    Call setTestStatus('testresult', 'testbutton' , 'failing');


//     Check that #testresult has the class failing. The CSS should give it a red background.
if (testresult.className === "failing"){
	console.log("the testresult class is : " +testresult.className);
}
else{
	console.log("the testresult class is : ");
}

//     Check that the button has the text 'Make passing'.
var mybutton = document.getElementById("button");

if (mybutton!== "make passing"){
console.log("the button text is   :");
}
else{
console.log("the button text is   : ");
} 
//     Call setTestStatus('testresult', 'passing');
         

//     Check that #testresult has the class passing. The CSS should give it a green background.
if (testresult.className = "passing") {
	console.log("");
};

//     Check that the button has the text 'Make red'.


//     Display 'success' if testresult has the class passing, otherwise display 'failure'.

