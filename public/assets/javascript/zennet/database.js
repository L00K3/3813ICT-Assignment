//Global Variables

//Middleware
angular.module('app', [require('angular-sqlite')])

//This script manages the database operations
module.exports = new class {
	constructor() {
		this.databaseReady = false
		
		//Init SQLite3
		//this.sqlite3 = require('sqlite3')
		this.sqlite3 = $SQLite
		this.connection = new this.sqlite3.Database('./database.db', function(error) {
			if (error) {
				console.log(ReferenceError("Unable to load database into memory, sqlite3 return [" + error + "]"))
				return
			}
			
			this.databaseReady = true
			console.log("Database Loaded")
		})
	}
	
	select(args) {
		//Extract Arguments
		if (args == undefined) { return }
		let callback = args.callback || null
		let columns = args.columns || ["*"]
		let tables = args.tables || ["*"]
		let statement = args.statement || ""
		let variables = args.variables || {}
		let sql = "SELECT $tables FROM $columns"
		
		//Check to see if callback given
		if (callback == null) {
			console.log(RefError("Called database.getUser() without callback!"))
			return
		}
		
		try {
			//Check If Statement Given
			if (statement.length > 0) { sql += " " + statement }
			sql += ";"
			
			//Format Columns And Tables
			sql = sql.replace('$columns', tables.join(', '))
			sql = sql.replace('$tables', columns.join(', '))
			
			this.connection.all(sql, variables, callback)
		} catch(error) {
			callback(TypeError("Invalid"))
		}
	}
}
