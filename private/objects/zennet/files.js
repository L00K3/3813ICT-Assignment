//Global Variables
/*global files*/
/*global __appPath*/

//Middleware
require('module-alias/register')

//Get, Send And Parse Files
global.files = new class {
	constructor() {
		this.reader = require('fs') 
	}
	
	//Get File Asynchronously
	getAsync(args) {
		//Extract Arguments
		if (args == undefined) { return }
		let filepath = args.filepath || ""
		let encoding = args.encoding || null
		let callback = args.callback || function() { console.log(ReferenceError("Invalid callback given in files.readJSONFile!; Arguments: ", args)) }
		let callbackArgs = args.callbackArgs || null
		
		let returnFunction = function (error, data) {
			if(error) {
				callback(error);
				return;
			}
			
			try {
				callback(null, data, args);
			} catch(exception) {
				callback(exception);
			}
		}
		
		if (encoding == null) {
			files.reader.readFile(filepath, returnFunction)
		} else {
			files.reader.readFile(filepath, encoding, returnFunction)
		}
	}
	
	//Parse JSON File
	readJSONFile(args) {
		//Extract Arguments
		if (args == undefined) { return }
		let filepath = args.filepath || ""
		let callback = args.callback || function() { console.log(ReferenceError("Invalid callback given in files.readJSONFile!; Arguments: ", args)) }
		
		files.getAsync({filepath: filepath, callback: function(error, data) {
			if (error == null) {
				callback(null, JSON.parse(data))
			} else {
				callback(error)
			}
		}})
	}
	
	//Parse HTML Template Files
	parseText(args) {
		//Extract Arguments
		if (args == undefined) { return }
		let text = args.text || ""
		let variables = args.variables || {}
		
		//Process Varaibles
		let variable = ""
		let re = /\{\{((?!\{\{|\}\})[\s\S])*\}\}/g ///\[[\S^<\[\]]*\]/g
		let matches = 256
		while ((variable = re.exec(text)) != null && (matches -= 1) != 0) {
			//Compute Variable
			let varParts = variable[0].replace(/\{\{|\}\}/g, '').split(/\./)
			let varValue = variables
			
			let valuePointer = 0
			while ((valuePointer < 256) && (valuePointer < varParts.length) && (varValue != undefined)) {
				let varPart = varParts[valuePointer]
				varValue = varValue[varPart]
				
				valuePointer += 1
			}
			
			//Attempt to evaluate code
			try {
				if (varValue == undefined) { varValue = eval(variable[0].replace(/\[|\]/, '')) }
			} catch(error) {
				varValue = error
			}
			
			//Reinsert Variable
			let index = variable.index
			text = text.substr(0, index) + varValue + text.substr(index + variable[0].length)
		}
		
		return text
	}
	
	//Get HTML Template File
	getTemplate(args) {
		//Extract Arguments
		if (args == undefined) { return }
		let filepath = args.filepath || ""
		let variables = args.variables || {}
		let callback = args.callback || function() { console.log(ReferenceError("Invalid callback given in files.readJSONFile!; Arguments: ", args)) }
		
		files.reader.readFile(filepath, 'utf-8', function (error, data) {
			if(error) {
				callback(error)
				return
			}
			
			try {
				//Get Data
				let head = data.match(/<head>[\s\S]*<\/head>/)
				let headElements = new Array()
				let body = data.match(/<body>[\s\S]*<\/body>/)
				if (body != null) { body = body[0].replace(/<body>|<\/body>/g, '') } else { body = "" }
				
				//Process head elements
				if (head != null) { head = head[0].replace(/<head>|<\/head>/g, '').match(/<[^<>]*>/g) }
				if (head != null) {
					for (let index in head) {
						let element = head[index].replace(/<|>/g, "").split(/\s/)
						let attributes = {}
						for (let part in element) {
							if (part == 0) {
								attributes["tag"] = element[part]
							} else {
								let attribute = element[part].replace(/"/g, '').split(/=/)
								if (attribute.length > 1) {
									attributes[attribute[0]] = attribute[1]
								} else {
									attributes[attribute[0]] = null
								}
							}
						}
						
						switch(attributes.tag) {
							case "link":
								switch(attributes.type) {
									case "style":
										headElements[index] = {type: "style", src: attributes.src}
										break
									case "script":
										headElements[index] = {type: "script", src: attributes.src}
										break
								}
								break
							case "title":
								headElements[index] = {type: "title", src: attributes.value}
								break
						}
					}
				}
				
				//Process Varaibles
				body = files.parseText({text: body, variables: {}})
				callback(null, {head: headElements, body: body})
			} catch(error) {
				callback(error)
			}
		})
	}
	
	sendHTML(args) {
		//Extract Arguments
		if (args == undefined) { return }
		let headArray = args.head || {}
		let title = args.title || "Node Express Server 2019"
		let body = args.body || ""
		let response = args.response || null
		
		//Create Head Content
		let head = ""
		for (let index in headArray) {
			let element = headArray[index]
			switch(element.type) {
				case "style":
					head += "<link rel='stylesheet' type='text/css' href='" + element.src + "'>"
					break
				case "script":
					head += "<script src='" + element.src + "'></script>"
					break
				case "title":
					head += "<title>" + element.src + "</title>"
					break
			}
		}
		
		if (response == null) {return}
		
		files.getAsync({filepath: __appPath + "/private/index.html", encoding: "utf-8", callback: function(error, data) {
			if (error == null) {
				let html = files.parseText({text: data, variables: {head: head, body: body}})
				response.send(html)
			} else {
				console.log(error)
				files.sendError({response: response, title: "Error", message: "Something went wrong while we were preparing your request!"})
			}
		}})
	}
	
	sendErrorPage(args) {
		//Extract Arguments
		if (args == undefined) { return }
		let response = args.response || null
		let title = args.title || "Error"
		let message = args.message || "Error: Something went wrong and nobody will tell me whats going on :("
		
		//Send Error Page
		console.log("Stub: files.sendError()")
		response.send(message)
	}
	
	sendErrorMessage(args) {
		//Extract Arguments
		if (args == undefined) { return }
		let response = args.response || null
		let title = args.title || "Error"
		let message = args.message || "Something went wrong and nobody will tell me whats going on :("
		
		//Send Error Page
		console.log("Stub: files.sendError()")
		response.send({error: {isError: true, title: title, message: message}})
	}
}
