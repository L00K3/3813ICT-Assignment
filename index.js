//Global Variables
/*global files*/
global.__appPath = __dirname

require('./private/objects/zennet/constants.js')
require('./private/objects/zennet/general_classes.js')
require('./private/objects/zennet/files.js')
require('/private/objects/sockets.js')

/*global.objReturn = class {
	constructor {
		this.error = null
		this.value = null
		
	}
	
	set error(value) {
		if (typeof value == TypeEnum.Str) {
			this.error = value
		}
	}
	
	get isError() {
		return this.error == null
	}
}*/

//Load In Middleware
require('module-alias/register')
let express = require("express")

//Get Custom Files
let indexRoutes = require('./private/routes/')

//Server Variables
let address = {port: "8080", ip: "0.0.0.0"}

//Init Server
let app = express()
let http = require("http").Server(app)
app.use(express.static(__dirname + "/public/"))
app.use(express.urlencoded())

//Expand Console Arguments
process.argv.forEach(function (value, index, array) {
	let cArgs = value.split(/=/)
	
	try {
		if (cArgs.length == 2) {
			switch(cArgs[0]) {
				case "ip":
					address.ip = cArgs[1]
					break
				case "port":
					address.port = cArgs[1]
					break
			}
		}
	} catch(error) {
		console.log("Invalid Arguments Supplied!")
	}
})

//Load In Database
let account_lookup = {email: {}, username: {}}
files.readJSONFile({filepath: "./data/account_lookup.json", callback: function(error, data) {
	if (error == null) { account_lookup = data }
}})

//// Routes ////
app.get('/*', function (request, response) {
	/*//Split URL
	let url = request.url
	console.log("IP[" + request.connection.remoteAddress + "] Requested GET[" + url + "] with " + request.header('user-agent'))
	if (url[0] == "/") { url = url.substr(1) }
	
	//Get Path
	let path = ["home"]
	let attr = {}
	if (url.length != 0) {
		let parts = url.split(/\?/)
		if (parts.length == 2) {
			let subParts = parts[1].split(/&/)
			for (let index in subParts) {
				let part = subParts[index].split(/=/)
				if (part.length == 2) { attr[part[0]] = part[1].replace(/('||")/g, "") }
			}
		}
		path = parts[0].split(/\//)
	}
	
	//Call Route
	try {
		indexRoutes[path[0]](request, response, {AJAX: false, path: path, attributes: attr, subroute: 1, account: new User(), content: {}})
	} catch(error) {
		console.log("Error @index.js: ", error)
		files.sendErrorPage({response: response, title: "Invalid URL", message: "We were unable to find the resource you requested!"})
	}*/
	response.sendFile(__appPath + "/public/index.html")
})

app.post('/*', function (request, response) {
	/*//Split URL
	let url = request.url
	if (url[0] == "/") { url = url.substr(1) }
	
	//Get Path
	let path = ["home"]
	if (url.length != 0) {
		let parts = url.split(/\?/)
		path = parts[0].split(/\//)
	}
	
	//Call Route
	try {
		indexRoutes[path[0]](request, response, {AJAX: true, path: path, subroute: 1, account: new User(), content: {}})
	} catch(error) {
		console.log("Error @index.js: ", error)
		files.sendErrorMessage({response: response, title: "Invalid URL", message: "We were unable to find the resource you requested!"})
	}*/
	response.sendFile(__appPath + "/public/index.html")
})

//Start Server
let server = http.listen(address.port, address.ip, function () {
    console.log("Server listening on: " + server.address().port + "::" + server.address().address)
})
