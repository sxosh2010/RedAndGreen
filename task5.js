// Create an implementation for the setTestStatus function.
var setTestStatus = function (elementId, buttonId, className){
// Remember that it takes three parameters: the id of the element; the id of the button; the test status.
    var elem = document.getElementById(elementId); 

    elem.className = className;

   var button = document.getElementById(buttonId);

   if (className === "failing") {
    button.innerHTML = "Make passing";
  }


  else {
    button.innerHTML ="Make failing";
 }
};


// Refresh the page and see what happens.
// There should be no errors in Chrome DevTools.
// You should see a console message displaying 'success'.
	

