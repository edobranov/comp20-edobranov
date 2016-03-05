//	Filename:	lab.js
//	Purpose:	JSON Parsing for data.json
//	Author:		EVGENI C. DOBRANOV
//	Date:		3/5/2016

// Function to be called when the body loads in index.html
function parse()
{
	// First we create a XMLHttpRequest object to ... request data!
	request = new XMLHttpRequest();

	// Now we open the JSON file
	request.open("GET", "data.json", true);

	// Every time the ready state changes, will call this anonymous function
	request.onreadystatechange = function() {
		
		if (request.readyState == 4) {
		
			// Store the raw data
			data = JSON.parse(request.responseText);
				
			document.getElementById("messages").innerHTML = data;

			console.log(data);
		
		}
	};
	
	// No request to send
	request.send(null);
	
}