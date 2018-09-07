//Global Variables
/*global __appPath*/
/*global files*/

//Middleware
require('module-alias/register')

//Contains Routes To Call
module.exports = new class {
	constructor() {
		//Store Site Route Sections
		this.routes = {
			
		}
		
		console.log("Index Routes Loaded")
	}
	
	home(request, response, args) {
		//Extract Arguments
		if (args == undefined) { return }
		let AJAX = args.AJAX || false
		let path = args.path || "/"
		let subroute = args.subroute || 1
		let account = args.account || new Users()
		let content = args.content || {}
		
		//Return Homepage
		response.sendfile(__appPath + "/public/index.html")
	}
}
