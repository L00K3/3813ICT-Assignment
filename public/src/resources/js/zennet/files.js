/*global TypeEnum*/
let files = new class {
	getSync(filePath) {
		//Get file from url
		var client = new XMLHttpRequest(); //Create new HTML
		var file = null; //Store file return
		
		//Open connection
		client.open("GET", filePath, false);
		client.send(null);
		
		//Return HTTP response
		return client.response;
	}
	
	getAsync(filepath, callback, args) {
		//Get Requested File Asynchronously
		if (typeof filepath == TypeEnum.Str && typeof callback == TypeEnum.Func) {
			let request = new XMLHttpRequest()
			request.onreadystatechange = function() {
				if (request.readyState == 4) {
					callback(request, request.response, args)
				}
			}
			
			request.timeout = 30000
			request.open("GET", filepath, true)
			request.send()
		}
	}
	
	sendAsynch(address, data, callback, args) {
		if (typeof address == TypeEnum.Str && typeof callback == TypeEnum.Func) {
			let request = new XMLHttpRequest();
			let encodedData = ""
			let encodedKVPairs = []
			
			// Turn the data object into an array of URL-encoded key/value pairs
			for(let name in data) {
				encodedKVPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
			}
			
			// Combine the pairs into a single string
			encodedData = encodedKVPairs.join('&').replace(/%20/g, '+')
			
			//Send data
			request.onreadystatechange = function() {
				if (request.readyState == 4) {
					callback(request.error, request.response, args)
				}
			}
			
			request.timeout = 30000
			request.open('POST', address)
			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
			request.send(encodedData)
		}
	}
}