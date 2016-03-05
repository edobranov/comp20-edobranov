#Web Programming Lab 6 (Messages)

##Purpose: To demonstrate parsing using JSON and the JS XMLHttpRequest object
					
###Author: EVGENI C. DOBRANOV

###Completion Date: 3/5/2016

**1)** All aspects of the required assignment were implemented correctly (to my knowledge of course). The messages are parsed and displayed in a decent way.

**2)** I've worked on this assignment by myself, frequenting online documentation and forums (namely Ming's example at https://github.com/tuftsdev/WebProgramming/blob/bffc24eb7e2f8ea6d834e6e09ecade52fa22293f/examples/ajax/redline.html)

**3)** I spent ~1.5 hours on this assignment.

---

**Further Questions**

> If the first part worked, turn off Python's simple HTTP server. Instead, open the index.html on a few web browsers (Chrome, Firefox, Safari, Microsoft Edge, etc.) via double-clicking on the file or do a File > Open. Does it really work? Should it work?
+ It does not. The following error shows up in the JS console: **_XMLHttpRequest cannot load file:///C:/Users/Evgeni/Documents/GitHub/comp20-edobranov/messages/data.json. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource._**

> If the first part worked, instead of loading the data from the data.json file, try loading the JSON data from a URI. Replace data.json in your lab.js to https://messagehub.herokuapp.com/messages.json. The JSON looks very similar with the same important fields. You do not need to modify any other code in your JavaScript. Does it work?
+ It doesn't either. The following error shows up in the JS Console: **_XMLHttpRequest cannot load https://messagehub.herokuapp.com/messages.json. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8000' is therefore not allowed access._**

> For this lab, you must also answer an important question: is it possible to request the data from a different origin (e.g., http://messagehub.herokuapp.com/) or from your local machine (from file:///) from using XMLHttpRequest? Why or why not?
+ So the reason the above two requests failed is also the reason why it's not possible (by default) to request data from different origins: Same Origin Policy. That is, in order for JS to run correctly and have access to whatever it needs to, it must be included on the origin/domain of what it's trying to access. Thus, JS will work if I have the local JSON files on my hard drive because the HTML page is being served via localhost. Otherwise, localhost to non-localhost will be blocked because of Same Origin Policy.
It is up to the domain where the resource is located to decide whether or not they want to allow cross domain communication.