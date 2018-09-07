//Global Variables
/*global files*/
/*global __appPath*/

//Middleware
require('module-alias/register')

//Get, Send And Parse Files
global.User = class {
	constructor() {
		this.UID = -1
		this.UserName = ""
		this.Email = ""
		this.FirstName = ""
		this.LastName = ""
		this.DOB = ""
		this.Address = ""
		this.PhoneNo = ""
		this.ImageID = -1
		this.Private = false
	}
	
	//Return weather the user was valid
	get isValid() {
		return this.UID != -1
	}
	
	//Return user avatar tuple from database
	get image() {
		return ""
	}
}
