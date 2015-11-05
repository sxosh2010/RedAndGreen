//  Check that the div with id testresult doesn't have the class failing or passing. 
//  Use console.log to display a message that tells you what the result of the check was.
console.log("*******start*******")
var testresult = document.getElementById('testresult');

var className = testresult.className;

if (className === "grey"){
	console.log("the class name is correct : " + testresult.className);	
}
else{
	console.log("the class name is incorrect its supposed to be grey  but its : " + testresult.className)
}

//    Check that the button has the text 'Make failing'.
 var button = document.getElementById("testbutton");

    if (button.innerHTML === "Make failing") {
    	console.log("the button text Make failing is  correct : " + button.innerHTML);
    } 
    else {
      console.log("the button text is  incorrect : " + button.innerHTML);

    }


//    Call setTestStatus('testresult', 'testbutton' , 'failing');
console.log("*******setTestStatus is called for failing******")
         setTestStatus('testresult', 'testbutton' , 'failing');


 //     Check that #testresult has the class failing. The CSS should give it a red background.
 
 if (testresult.className === "failing"){
 	console.log("the testresult class is  correct  the way it is  : " + testresult.className);
 }
else{
	console.log("the testresult class is  incorrect: " + testresult.className);
 }

 //     Check that the button has the text 'Make passing'.
var button = document.getElementById("testbutton");

var innerHTML = testbutton.innerHTML;

if (innerHTML === "Make passing"){
console.log("the button text is  passing  so its  correct  :" + button.innerHTML);
 }
else {
 console.log("the testbutton text is not passing  but it  is: " + button.innerHTML);
 } 
//     Call setTestStatus('testresult', 'passing');
console.log("*******setTestStatus is called for passing******")

        setTestStatus('testresult', 'testbutton'  ,'passing');
          

 //     Check that #testresult has the class passing. The CSS should give it a green background.
if (testresult.className = "passing") {
	console.log("the testresult class is green is correct thats what i want:" +  testresult.className);
}
 else{
    console.log("the  testresult class is  failing: " + testresult.className);
}

 //     Check that the button has the text 'Make red'.
         var button = document.getElementById("testbutton");
        var innerHTML = button.innerHTML;


         if(innerHTML === "Make red"){
            console.log("the button text  is   Make failing its correct : " + button.innerHTML);

         }
         else{
            console.log( "the button text is  incorrect its supposed to  be passing " + button.innerHTML);
          }
 //     Display 'success' if testresult has the class passing, otherwise display 'failure'.
        if(testresult.className === "passing"){
             console.log("success");

         }
        else {
            console.log("failure");
        }
