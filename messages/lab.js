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
		
			// Will be appending to this so it can be printed at once
			htmlresult = "";
		
			// Store the raw data
			data = JSON.parse(request.responseText);
			
			// Concatenate results for all object in the raw data
			for (i = 0; i < data.length; i++) {
				
				htmlresult +=
				
					"<p>" +
						"<span id='boxed'>" +
							data[i]["id"] + ") " +
							data[i]["content"] +
							
							"<span id='small'> " +
								data[i]["username"] +
							"</span>" +
						"</span>" +
					"</p>";
			}
			
			// Push to the HTML page via .innerHTML
			document.getElementById("messages").innerHTML = htmlresult;
		
		}
	};
	
	// No request to send
	request.send(null);
	
}