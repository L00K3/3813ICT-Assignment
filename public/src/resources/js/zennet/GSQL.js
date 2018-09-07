/* global $ */
/* global TypeEnum */
/* global ErrorEnum */
const GSQL_Enums = {
	Tables: {
		Columns: "columns",
		Constraints: "constraints"
	},
	
	Columns: {
		Name: 0,
		Column_Index: 1,
		Table: 2,
		Type: 3,
		Key: 4,
		LastIndex: 5,
	},
	
	Constraints: {
		Column_Index: 0,
		Constraints: 1
	},
	
	Type: {
		Null: 0,
		Char: 1,
		String: 2,
		URI: 3,
		Base64: 4,
		Boolean: 5,
		Int: 6,
		Float: 7,
		Date: 8,
		Time: 9,
		Array: 10,
		XML: 11
	},
	
	Type_String: {
		0: "Null",
		1: "Char",
		2: "String",
		3: "URI",
		4: "Base64",
		5: "Boolean",
		6: "Int",
		7: "Float",
		8: "Date",
		9: "Time",
		10: "Array",
		11: "XML"
	},
	
	checkType: function(value, type, path = "value") {
		if (value == null || value == "") { return {isValid: true, error: "", evaluated: null} }
		
		if (typeof type == TypeEnum.Num && typeof path == TypeEnum.Str) {
			let evaluated = null
			let regex = null
			
			if (typeof value == TypeEnum.Str) {
				try {
					evaluated = JSON.parse(value)
				} catch(error) {
					//Continue Execution
				}
			} else {
				evaluated = value
			}
			
			switch(type) {
				case this.Type.Null:
					return {isValid: true, error: "", evaluated: value}
				case this.Type.String:
					try {
						if (typeof value != TypeEnum.Str) { value = value.toString() }
						return {isValid: true, error: "", evaluated: value}
					} catch(error) {
						//Continue Execution
					}
					
					return {isValid: false, error: path + " is not of type 'String'", evaluated: value}
				case this.Type.Char:
					try {
						if (typeof value != TypeEnum.Str) { value = value.toString() }
						if (value.length <= 1) {
							return {isValid: true, error: "", evaluated: value}
						}
					} catch(error) {
						//Continue Execution
					}
					
					return {isValid: false, error: path + " is not of type 'Char'", evaluated: value}
				case this.Type.URI:
					if (typeof value == TypeEnum.Str) {
						console.log("GSQL: Stub @GSQL_Enums.checkType.case[URI]")
						//Do resource check
						return {isValid: true, error: "", evaluated: value}
					}
					
					return {isValid: false, error: path + " is not a valid 'URI'", evaluated: value}
				case this.Type.Base64:
					regex = value.match(/[a-zA-Z0-9+/]+$/)
					
					if (regex.length != 0) {
						return {isValid: true, error: "", evaluated: regex[0]}
					}
					
					return {isValid: false, error: path + " is not of type 'Base64'", evaluated: value}
				case this.Type.Boolean:
					if (typeof evaluated == TypeEnum.Bool) {
						return {isValid: true, error: "", evaluated: evaluated}
					}
					
					return {isValid: false, error: path + " is not of type 'Boolean'", evaluated: value}
				case this.Type.Int:
					if (typeof evaluated == TypeEnum.Num) {
						if (evaluated % 1 == 0) {
							return {isValid: true, error: "", evaluated: evaluated}
						}
					}
					
					return {isValid: false, error: path + " is not of type 'Int'", evaluated: value}
				case this.Type.Float:
					if (typeof evaluated == TypeEnum.Num) {
						return {isValid: true, error: "", evaluated: evaluated}
					}
					
					return {isValid: false, error: path + " is not of type 'Float'", evaluated: value}
				case this.Type.Date:
					regex = value.match(/(0[0-9]|1[0-2])(\/|-)([0-2][0-9]|3[01])(\/|-)[0-9]+/)
					
					if (regex.length != 0) {
						evaluated = new Date(regex[0])
						return {isValid: true, error: "", evaluated: evaluated}
					}
					
					return {isValid: false, error: path + " is not of type 'Date'", evaluated: value}
				case this.Type.Time:
					evaluated = new Date()
					let hours = value.match(/[0-9]+h/) || ['0h']
					evaluated.setHours(hours[0].substring(0, hours[0].length - 1))
					let minutes = value.match(/[0-5]{0,1}[0-9]m/) || ['0m']
					evaluated.setMinutes(minutes[0].substring(0, minutes[0].length - 1))
					let seconds = value.match(/[0-5]{0,1}[0-9]s/) || ['0s']
					evaluated.setSeconds(seconds[0].substring(0, seconds[0].length - 1))
					if (!(hours[1].hasOwnProperty('index') || minutes[1].hasOwnProperty('index') || seconds[1].hasOwnProperty('index'))) {
						return {isValid: true, error: "", evaluated: evaluated}
					}
					
					return {isValid: false, error: path + " is not of type 'Time'", evaluated: value}
				case this.Type.Time.Array:
					if (Array.isArray(evaluated)) {
						return {isValid: true, error: "", evaluated: evaluated}
					}
					
					return {isValid: false, error: path + " is not an 'Array'", evaluated: value}
				case this.Type.XML:
					try {
						evaluated = $.parseXML(value)
						return {isValid: true, error: "", evaluated: evaluated}
					} catch(error) {
						//Continue Execution
					}
					
					return {isValid: false, error: path + " is not a valid 'XML' string", evaluated: value}
			}
		}
		
		return {isValid: false, error: path + " has an invalid type '" + type + "'", evaluated: value}
	},
	
	toType: function(type) {
		if (typeof type == TypeEnum.Str) {
			switch(type.toUpperCase()) {
				case "NULL":
					return this.Type.Null
				case "CHAR":
					return this.Type.Char
				case "STRING":
					return this.Type.String
				case "URI":
					return this.Type.URI
				case "BASE64":
					return this.Type.Base64
				case "BOOLEAN":
					return this.Type.Boolean
				case "INT":
					return this.Type.Int
				case "FLOAT":
					return this.Type.Float
				case "DATE":
					return this.Type.Date
				case "TIME":
					return this.Type.Time
				case "ARRAY":
					return this.Type.Array
				case "XML":
					return this.Type.XML
			}
		}
		
		console.log(ErrorEnum.TypeErr.Str)
		return this.Type.Null
	},
	
	Constraint: {
		Null: 0,
		AutoIncrement: 1,
		NotNull: 2,
		Check: 3
	},
	
	Constraint_String: {
		0: "Null",
		1: "AutoIncrement",
		2: "NotNull",
		3: "Check"
	},
	
	checkConstraint: function(value, constraint, attributes = {}, path = "value") {
		if (typeof constraint == TypeEnum.Num && typeof path == TypeEnum.Str) {
			switch(constraint) {
				case this.Constraint.Null:
					return {isValid: true, error: "", evaluated: value}
				case this.Constraint.NotNull:
					if (value != null) { return {isValid: true, error: "", evaluated: value} }
					return {isValid: false, error: path + " is null when column may not contain null!", evaluated: value}
				case this.Constraint.AutoIncrement:
					if (typeof value == TypeEnum.Num) {
						return {isValid: true, error: "", evaluated: value}
					}
					
					//Return next value
					if (typeof value == TypeEnum.Undefined && attributes.last != TypeEnum.Undefined) {
						return {isValid: true, error: "", evaluated: attributes.last}
					}
					
					return {isValid: false, error: path + " has the constraint AutoIncrement but does not contain a valid type!", evaluated: value}
				case Check:
					console.log("GSQL: Stub @checkConstraint.Check")
					return {isValid: true, error: "", evaluated: value}
			}
		}
		
		return {isValid: false, error: path + " has an uknown constraint '" + constraint + "'!", evaluated: value}
	},
	
	toConstraint: function(constraint) {
		if (typeof constraint == TypeEnum.Str) {
			let attributes = constraint.match(/\(\d*\)/)
			if (attributes != null) {
				constraint = constraint.substr(0, constraint.length - attributes[0].length)
				attributes = attributes.match(/\(([^\)]+)\)/)[1]
			} else {
				attributes = {}
			}
			
			switch(constraint.toUpperCase()) {
				case "NULL":
					return {constraint: this.Constraint.Null, attributes: attributes}
				case "AUTOINCREMENT":
					return {constraint: this.Constraint.AutoIncrement, attributes: attributes}
				case "NOTNULL":
					return {constraint: this.Constraint.NotNull, attributes: attributes}
				case "CHECK":
					return {constraint: this.Constraint.Check, attributes: attributes}
			}
		}
		
		console.log(ErrorEnum.TypeErr.Str)
		return {constraint: this.Constraint.Null, attributes: {}}
	},
	
	Permisions: {
		Read: 1,
		Write: 2,
		Executable: 4
	}
}

let GSQL = new class {
	//Setup Singleton
	constructor() {
		//// Setup Structs ////
		
		//Cell Struct (Contains A Single Cell In A Tuple)
		this.Cell = class {
			constructor(path, cell = {value: undefined, type: undefined, constraints: undefined}) {
				//Make sure path is correctly formatted
				this._path = {table: undefined, tuple: undefined, column: undefined}
				if (typeof path == TypeEnum.Obj) {
					if(typeof path.table == TypeEnum.Str) {
						this._path.table = path.table
					}
					
					if(typeof path.tuple == TypeEnum.Str) {
						this._path.tuple = path.tuple
					}
					
					if(typeof path.column == TypeEnum.Str) {
						this._path.column = path.column
					}
				}
				
				//Make Sure Cell Is Correctly Formatted
				this._value = undefined
				this._type = undefined
				this._constraints = undefined
				if (typeof cell == TypeEnum.Obj) {
					this._value = cell.value
					if (typeof cell.type == TypeEnum.Num) {
						this._type = cell.type
					}
					
					if (Array.isArray(cell.constraints)) {
						this._constraints = cell.constraints
					}
				}
			}
			
			//Setters + Getters
			get path() { return this._path }
			get formattedPath() { return this.path.table + "." + this.path.tuple + "." + this.path.column }
			get constraints() { return this._constraints }
			get type() { return this._type }
			get value() { return this._value }
			
			set value(newValue) {
				//Check Type
				let isValid = true
				let error = ""
				let check = GSQL_Enums.checkType(newValue, this.type, this.formattedPath)
				if (!check.isValid) { isValid = false; error += "\n" + check.error }
				let evaluated = check.evaluated
				
				//Check Constraints
				for (let index in this.constraints) {
					let constraint = this.constraints[index]
					check = GSQL_Enums.checkConstraint(evaluated, constraint.constraint, constraint.attributes, this.formattedPath)
					if (!check.isValid) { isValid = false; error += "\n" + check.error }
				}
				
				if (isValid) {
					this._value = evaluated
				} else {
					console.log(error)
				}
			}
		}
		
		//Tuple Struct (Contains A Single Tuple In A Table)
		this.Tuple = class {
			constructor(path, parent, columns, data = undefined, Keys = {PK: {}, FK: {}}) {
				//Make sure path is correctly formatted
				if (!Array.isArray(path)) {
					this._path = {table: undefined, tuple: undefined}
				} else if(path.length != 2) {
					this._path = {table: undefined, tuple: undefined}
				} else if (typeof path[0] != TypeEnum.Str && typeof path[1] != TypeEnum.Str) {
					this._path = {table: undefined, tuple: undefined}
				} else {
					this._path = {table: path[0], tuple: path[1]}
				}
				
				//Set parent
				if (parent instanceof GSQL.Table) {
					this._parent = parent
				} else {
					this._parent = undefined
				}
				
				//Initialise Columns
				this._columns = {}
				if (typeof columns == TypeEnum.Obj) {
					for (let index in columns) {
						try {
							let column = columns[index]
							if (typeof column.type == TypeEnum.Num && typeof column.constraints == TypeEnum.Obj && typeof this[index] == TypeEnum.Undefined) {
								this._columns[index] = {type: column.type, constraints: column.constraints}
								this.__defineGetter__(index, function() {return this._cells[index]})
							}
						} catch(error) {
							//Continue Execution
						}
					}
				}
				
				//Initialise Array Of Cells
				this._cells = {}
				this.set(data)
			}
			
			//Initialise Data For Tuple
			set(data) {
				//Type Check Data
				if (typeof data == TypeEnum.Obj) {
					//Check if valid tuple
					data = this.check(data)
					if (data.error.isValid) {
						//Iterate through cells
						data = data.data
						for (let column in data) {
							//Type Check Cell
							let cell = data[column]
							this._cells[column] = new GSQL.Cell({table: this.path.table, tuple: this.path.tuple.toString(), column: column}, {value: cell, type: this._columns[column].type, constraints: this._columns[column].constraints})
						}
						
						//Break Execution
						return
					}
				}
				
				//Return Error
				console.log("GSQL: Attempt to create invalid tuple for table '" + this.path.table + "'!")
			}
			
			//Check tuple against constraints
			check(data = null) {
				let error = {isValid: false, details: this.formattedPath + " does not conform to constraints, the following errors have occured:"}
				let evaluated = {}
				
				//Type Check Data
				if (typeof data == TypeEnum.Obj) {
					//Check Supplied Data
					error.isValid = true
					
					//Check Columns
					for (let index in this._columns) {
						let column = this._columns[index]
						let cell = data[index]
						let check = GSQL_Enums.checkType(cell, column.type, this.formattedPath + "." + index)
						
						//Check data
						if (!check.isValid) {
							error.isValid = false
							error.details += check.error
						}
						
						//Add evaluated value
						evaluated[index] = check.evaluated
						
						//Check Constraints
						for (let constraintIndex in column.constraints) {
							let constraint = column.constraints[constraintIndex]
							check = GSQL_Enums.checkConstraint(evaluated[index], constraint.constraint, constraint.attributes, this.formattedPath + "." + index)
							
							//Check data
							if (!check.isValid) {
								error.isValid = false
								error.details += check.error
							}
						}
					}
				}
				
				//Display Errors
				if (!error.isValid) {
					console.log(error.details)
				}
				
				return {error: error, data: evaluated}
			}
			
			//Setters + Getters
			get path() { return this._path }
			get parent() { return this._parent }
			get formattedPath() { return this.path.table + "." + this.path.tuple }
			get tuple() { return this._cells }
			
			remove() { this.parent.remove_tuple(this.path.tuple) }
		}
		
		//Table Struct (Contains A Single Table In A Database)
		this.Table = class {
			constructor(path, parent, columns) {
				//Check type of path
				if (typeof path != TypeEnum.Str) {
					this._path = {table: undefined}
				} else {
					this._path = {table: path}
				}
				
				//Set parent
				if (parent instanceof GSQL.Database) {
					this._parent = parent
				} else {
					this._parent = undefined
				}
				
				//Init attributes
				this._sheetID
				this._tuples = Array()
				
				//Check type of columns
				this._columns = {}
				this._primaryKeys = Array()
				this._foreignKeys = Array()
				if (Array.isArray(columns)) {
					for (let index in columns) {
						let column = columns[index]
						
						try {
							if (typeof this[column.name] == TypeEnum.Undefined) {
								let constraints = Array()
								for (let constraintIndex in column.constraints) {
									let constraint = column.constraints[constraintIndex]
									constraints[constraints.length] = {constraint: constraint.constraint, attributes: constraint.attributes}
								}
								
								this._columns[column.name] = {type: GSQL_Enums.toType(column.type), constraints: constraints} ////STUB////
								this[column.name] = this._columns[column.name]
								
								//Check if PK
								if (column.keys.PK) {
									this._primaryKeys[this._primaryKeys.length] = column.name
								}
								
								if (typeof column.keys.FK != TypeEnum.Undefined) {
									this.addFK(column.name, column.keys.FK)
								}
							} else {
								//Return Error
								console.log("GSQL: Column '" + column.name + "' is a reserved name!")
							}
						} catch(error) {
							//Return Error
							console.log("GSQL: Invalid column layout given while attempting to create table '" + this._path.table + "'!")
						}
					}
				}
			}
			
			//Setters + Getters
			get path() { return this._path }
			get formattedPath() { return this.path.table + "." + this.path.tuple }
			get parent() { return this._parent }
			get columns() { return this._columns }
			get tuples() { return this._tuples }
			get primaryKeys() { return this._primaryKeys }
			get foreignKeys() { return this._foreignKeys }
			get keys() { return {PK: this.primaryKeys, FK: this.foreignKeys} }
			
			//Get column
			column(index) {
				if (typeof index == TypeEnum.Str) {
					try {
						let column = this._columns[index]
						let cells = {}
						
						for (let tuple in this._tuples) {
							cells[cells.length] = this._tuples[tuple].index
						}
						
						//Break Execution
						return cells
					} catch(error) {
						//Continue Execution
					}
				}
				
				return null
			}
			
			//Check if column exists
			hasColumn(index) {
				//Check attribute type
				if (typeof index == TypeEnum.Str) {
					return (typeof this._columns[index] != TypeEnum.Undefined)
				}
				
				return false
			}
			
			//Add a foreign key to table
			addFK(source, path) {
				//Check if FK
				if (typeof source == TypeEnum.Str && typeof path == TypeEnum.Str) {
					path = path.split(".")
					
					//Check if table exists
					if (path.length == 2) {
						if (this.parent instanceof GSQL.Database) {
							if (typeof this.parent.tables[path[0]] != TypeEnum.Undefined) {
								if (typeof this.parent.tables[path[0]].hasColumn(path[1]) != TypeEnum.Undefined) {
									this._foreignKeys[this._foreignKeys.length] = {source: source, table: this.parent.tables[path[0]], column: function() {return this.table.column(path[1])}, destination: path[0] + "." + path[1]}
									return
								}
							}
						}
					}
				}
				
				console.log("GSQL: Attempt to add invalid foreign key for 'path'!")
			}
			
			//Get tuple @index
			tupleRawIndex(index) { return this.getTuple(index, false) }
			tuple(index) { return this.getTuple(index) }
			getTuple(index, isKeyed = true) {
				//Check attribute type
				if (typeof index == TypeEnum.Obj && typeof isKeyed == TypeEnum.Bool) {
					try {
						let keyCount = 0
						
						//Iterate tuples
						for (let tupleIndex in this._tuples) {
							let tuple = this._tuples[tupleIndex]
							keyCount = 0
							
							//Check against each primaryKey
							for (let keyIndex in index) {
								let key = keyIndex
								if (tuple[key].value == index[key]) {
									keyCount += 1
								}
							}
							
							//Check if all primary keys matched
							if (keyCount == Object.keys(index).length) { if (isKeyed) { return tuple } else { return tupleIndex } }
						}
					} catch(error) {
						//Continue Execution
					}
				}
				
				console.log("GSQL: Tuple @'" + index + "' does not exists!")
				return null
			}
			
			//Get multiple tuples @index
			tuplesRawIndex(index, limit = 0, skip = 0) { return this.getTuples(index, false, limit, skip) }
			tuples(index, limit = 0, skip = 0) { return this.getTuples(index, true, limit, skip) }
			getTuples(index, isKeyed = true, limit = 0, skip = 0) {
				let tuples = new Array()
				
				//Check attribute type
				if (typeof index == TypeEnum.Obj && typeof isKeyed == TypeEnum.Bool && typeof limit == TypeEnum.Num && typeof skip == TypeEnum.Num) {
					try {
						let keyCount = 0
						
						//Iterate tuples
						for (let tupleIndex in this._tuples) {
							let tuple = this._tuples[tupleIndex]
							keyCount = 0
							
							//Check against each primaryKey
							for (let keyIndex in index) {
								let key = keyIndex
								if (tuple[key].value == index[key]) {
									keyCount += 1
								}
							}
							
							//Check if all primary keys matched
							if (keyCount == Object.keys(index).length) { if (skip <= 0) { if (isKeyed) { tuples[tuples.length] = tuple } else { tuples[tuples.length] = tupleIndex } } else { skip-- } }
							if (tuples.length >= limit && limit != 0) { break }
						}
						
						return tuples
					} catch(error) {
						//Continue Execution
					}
				}
				
				console.log("GSQL: Tuple @'" + index + "' does not exists!")
				return null
			}
			
			//Inerts new tuple for database table
			insert(tuple) {
				this._tuples[this._tuples.length] = new GSQL.Tuple([this.path.table, this._tuples.length], this, this.columns, tuple, this.keys)
				return
			}
			
			//Remove Table
			remove() { this.parent.remove(this.path.table) }
			
			//Remove Tuple @index
			remove_tuple(index) {
				//Check Type
				if (typeof index == TypeEnum.Str) {
					let tuple = this.tupleRawIndex(index)
					if (tuple != null) {
						//Resort Array
						for (let tupleIndex = 0; tupleIndex < this._tuples.length - 1; tupleIndex++) {
							this._tuples[tupleIndex] = this._tuples[tupleIndex + 1]
						}
						
						//Break Execution
						this._tuples[this._tuples.length - 1] = undefined
						return
					}
				}
				
				console.log("GSQL: Attempt to remove tuple that does not exist in table '" + this.path.table + "'")
			}
		}
		
		//Database Struct (Contains A Single Database)
		this.Database = class {
			constructor(name, tables = {}, mode, gDrive = {}) {
				this._name = ""
				this._tables = {}
				
				//Check type of name
				if (typeof name == TypeEnum.Str) {
					this._name = name
				}
				
				//Check if tables is an array
				if (Array.isArray(tables)) {
					//Create through tables
					for (let index in tables) {
						this.create(tables[index])
					}
				}
				
				//Check if mode is an int
				if (typeof mode == TypeEnum.Num) {
					this.mode = mode
				} else {
					this.mode = GSQL_Enums.Permisions.READ
				}
				
				//Check if dGrive is an object
				if (typeof gDrive == TypeEnum.Obj) {
					try {
						this.sheetID = gDrive.sheetID
						this.key = gDrive.key
					} catch(error) {
						console.log("GSQL: Invalid arguments given for google drive attributes")
					}
				} else {
					this.sheetID = null
					this.key = null
				}
			}
			
			//Setters + Getters
			get name() { return this._name }
			get tables() { return this._tables }
			
			//Create new table for database
			create(table) {
				//Check if valid attribute type given
				if (typeof table == TypeEnum.Obj) {
					//Check if table contains required attributes
					if (typeof table.name == TypeEnum.Str && Array.isArray(table.columns) && Array.isArray(table.tuples)) {
						//Check if table exists
						if (typeof this._tables[table.name] != TypeEnum.Undefined) {
							//Break Execution
							console.log("GSQL: Table '" + table.name + "' already exists!")
							return
						}
						
						//Check for reserved name
						if (typeof this[table.name] != TypeEnum.Undefined) {
							//Break Execution
							console.log("GSQL: Table '" + table.name + "' is a reserved name!")
							return
						}
						
						//Create Table
						this._tables[table.name] = new GSQL.Table(table.name, this, table.columns)
						this[table.name] = this._tables[table.name]
						let newTable = this._tables[table.name]
						
						//Create tuples
						for (let index in table.tuples) {
							let tuple = table.tuples[index]
							newTable.insert(tuple)
						}
						
						//Break Execution
						return
					}
				}
				
				console.log("GSQL: Attempt to create invalid table")
			}
			
			//Remove table
			remove(index) {
				//Check Type
				if (typeof index == TypeEnum.Str) {
					//Break Execution
					if (this._tables[index] instanceof GSQL.Table) {
						this._tables[index] = undefined
						this[index] = undefined
						return
					}
				}
				
				console.log("GSQL: Attempt to remove table '" + index + "' that does not exist!")
			}
			
			//Download table
			download() {
				//Prepare File Cache
				let files = new Array()
				
				//Prepare Column Cache
				let columns = new Array()
				let columnLookup = {}
				
				//Prepare Constraint Cache
				let constraints = new Array()
				let foreignKeys = new Array()
				
				//Iterate Tables
				for(let tableIndex in this.tables) {
					let table = this.tables[tableIndex]
					files[files.length] = {name: tableIndex + ".csv", data: ""}
					let file = files[files.length - 1]
					
					//Store columns iterated in table
					let tableColumns = 0
					
					//Iterate Columns
					for (let columnIndex in table.columns) {
						let tableColumn = table.columns[columnIndex]
						columns[columns.length] = {name: columnIndex, index: "", type: GSQL_Enums.Type_String[tableColumn.type], keys: ""}
						columnLookup[tableIndex + "." + columnIndex] = columns.length - 1
						let column = columns[columns.length - 1]
						
						//Get calculated values
						if (tableColumn.name == "id") { column.index = "auto" } else { column.index = (tableColumns - 1).toString(); tableColumns++ }
						
						//Iterate Constraints
						for (let constraintIndex in tableColumn.constraints) {
							let tableConstraint = tableColumn.constraints[constraintIndex]
							constraints[constraints.length] = (columns.length - 1).toString() + "," + GSQL_Enums.Constraint_String[tableConstraint.constraint]
							
							//Add attributes to constraints
							for (let attributeIndex in tableConstraint.attributes) {
								constraints[constraints.length] += "(" + tableConstraint.attributes[attributeIndex] + ")"
							}
						}
					}
					
					//Iterate PKs
					for (let keyIndex in table.primaryKeys) {
						columns[columnLookup[tableIndex + "." + table.primaryKeys[keyIndex]]].keys = "PK"
					}
					
					//Iterate FKs
					for (let keyIndex in table.foreignKeys) {
						foreignKeys[foreignKeys.length] = {source: columnLookup[tableIndex + "." + table.foreignKeys[keyIndex].source], destination: table.foreignKeys[keyIndex].destination}
					}
					
					//Iterate Tuples
					for (let tupleIndex in table.tuples) {
						let tuple = table.tuples[tupleIndex]
						if (file.data.length > 0) {file.data += "\n"}
						for (let columnIndex in table.columns) {
							if (file.data.length > 0) {file.data += ","}
							file.data += tuple.cells[table.columns[columnIndex]].value
						}
					}
				}
				
				//Calculate FK Destinations
				for (let keyIndex in foreignKeys) {
					let column = columns[foreignKeys[keyIndex].source]
					if (column.keys.length > 0) {column.keys += ";"}
					column.keys += "FK(" + columnLookup[foreignKeys[keyIndex].destination] + ")"
				}
				
				//Generate columns file
				files[files.length] = {name: "columns.csv", data: ""}
				let file = files[files.length - 1]
				for (let columnIndex in columns) {
					let column = columns[columnIndex]
					if (file.data.length > 0) {file.data += "\n"}
					file.data += column.name + "," + column.index + "," + column.type + "," + column.keys
				}
				
				//Generate constraints file
				files[files.length] = {name: "constraints.csv", data: ""}
				file = files[files.length - 1]
				for (let constraintIndex in constraints) {
					if (file.data.length > 0) {file.data += "\n"}
					file.data += constraints[constraintIndex]
				}
				
				//Download Files
				for (let index in files) {
					let file = files[index]
					let DOM = document.createElement('a')
					DOM.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(file.data)
					DOM.download = file.name
					document.body.appendChild(DOM)
					DOM.click()
					document.body.removeChild(DOM)
				}
			}
			
			//Close this database
			close() {
				GSQL.close(this.name)
			}
		}
		
		////Init Class////
		this._database = {}
	}
	
	//Load Table
	open() {
		//Key is found in 'https://docs.google.com/spreadsheets/d/{Key}/edit' when getting sharable link, sheet needs to be web published
		
		//Check Arguments To Set Defaults
		let argList = {sheetID: "", key: "", mode: GSQL_Enums.Permisions.Read, callback: null}
		try {
			let args = arguments[0]
			for (let index in args) {
				let value = args[index]
				console.log(index, "; ", value)
				switch (index) {
					case "sheetID":
						argList.sheetID = value
						break
					case "key":
						argList.key = value
						break
					case "mode":
						argList.mode = value
						break
					case "callback":
						argList.callback = value
						break
				}
			}
		} catch(error) {
			console.log(error)
		}
		
		if (typeof argList.sheetID == TypeEnum.Str && typeof argList.key == TypeEnum.Str) {
			let url = 'https://sheets.googleapis.com/v4/spreadsheets/' + argList.sheetID + '?key=' + argList.key
			
			$.ajax({
				url: url,
				dataType: "jsonp", 
				success: function(data){
					//Create Database
					this.create(data.properties.title)
					let database = this._database[data.properties.title]
					let sheets = data.sheets
					database.sheetID = argList.sheetID
					database.key = argList.key
					database.mode = argList.mode
					
					//Get Columns
					let url = 'https://sheets.googleapis.com/v4/spreadsheets/' + argList.sheetID + '/values/' + GSQL_Enums.Tables.Columns + '?key=' + argList.key
					$.ajax({
						url: url,
						dataType: "jsonp", 
						success: function(data){
							try {
								//Store Columns
								let columns = []
								for (let dataIndex in data.values) {
									let values = data.values[dataIndex]
									let index = (JSON.parse(dataIndex) + 1).toString()
									columns[index ] = {
										name: values[GSQL_Enums.Columns.Name],
										table: values[GSQL_Enums.Columns.Table],
										index: values[GSQL_Enums.Columns.Column_Index],
										type: values[GSQL_Enums.Columns.Type],
										lastIndex: values[GSQL_Enums.Columns.LastIndex],
										constraints: [],
										keys: {PK: false}
									}
									
									//If no lastIndex, set lastIndex to 0
									if (typeof columns[index].lastIndex == TypeEnum.Undefined) { columns[index].lastIndex = 0 }
									
									//Get Keys (PK, FK)
									let keys = values[GSQL_Enums.Columns.Key]
									if (typeof keys == TypeEnum.Str) {
										keys = keys.split(";")
										
										for (let keyIndex in keys) {
											let key = keys[keyIndex]
											if (key == "PK") {
												columns[index].keys.PK = true
											} else {
												key = key.match(/FK\(\d+\)$/)
												if (key != null) {
													try {
														key = JSON.parse(key[0].match(/\d+/)[0])
														columns[index].keys.FK = key
													} catch(error) {
														//Continue Execution
													}
												}
											}
										}
									}
								}
								
								for (let index in columns) {
									if (typeof columns[index].keys.FK == TypeEnum.Num) {
										columns[index].keys.FK = columns[columns[index].keys.FK].table + "." + columns[columns[index].keys.FK].name
									}
								}
								
								//Load Constraints
								let url = 'https://sheets.googleapis.com/v4/spreadsheets/' + argList.sheetID + '/values/' + GSQL_Enums.Tables.Constraints + '?key=' + argList.key
								$.ajax({
									url: url,
									dataType: "jsonp",
									success: function(data){
										//Load Constraints
										for (let index in data.values) {
											let column = columns[data.values[index][GSQL_Enums.Constraints.Column_Index]]
											
											if (data.values[index][GSQL_Enums.Constraints.Constraints] == "column_id") {
												column.constraints[column.constraints.length] = {constraint: GSQL_Enums.Constraint.AutoIncrement, attributes: {last: column.lastIndex}}
												column.constraints[column.constraints.length] = {constraint: GSQL_Enums.Constraint.NotNull, attributes: {}}
											} else {
												column.constraints[column.constraints.length] = GSQL_Enums.toConstraint(data.values[index][GSQL_Enums.Constraints.Constraints])
											}
										}
										
										//Prepare Tables
										let tables = {}
										let tableKeys = {}
										for (let index in columns) {
											let column = columns[index]
											if (typeof tables[column.table] == TypeEnum.Undefined) {
												tables[column.table] = {name: column.table, columns: [], tuples: []}
												tableKeys[column.table] = {}
											}
											
											let table = tables[column.table]
											tableKeys[column.table][column.name] = column.keys.FK
											column.keys.FK = undefined
											table.columns[table.columns.length] = column
										}
										
										//Create Tables
										for (let index in tables) {
											let table = tables[index]
											database.create(table)
										}
										
										//Add Foreign Keys
										for (let index in tableKeys) {
											let keys = tableKeys[index]
											for (let keyIndex in keys) {
												let key = keys[keyIndex]
												if (typeof key != TypeEnum.Undefined) { database[index].addFK(keyIndex, key) }
											}
										}
										
										//Insert Data Into Tables
										let tuple_insertions = sheets.slice(2).length
										for (let index in sheets.slice(2)) {
											let sheet = sheets.slice(2)[index]
											let url = 'https://sheets.googleapis.com/v4/spreadsheets/' + argList.sheetID + '/values/' + sheet.properties.title + '?key=' + argList.key
											
											$.ajax({
												url: url,
												dataType: "jsonp", 
												success: function(data){
													let table = tables[sheet.properties.title]
													
													//Iterate through data
													for (let index in data.values) {
														//Prepare Tuple
														let tuple = {}
														let values = data.values[index]
														for (let columnIndex in table.columns) {
															if (table == null) {
																table
															}
															if (table.columns[columnIndex].index == "auto") {
																tuple[table.columns[columnIndex].name] = index
															} else {
																tuple[table.columns[columnIndex].name] = values[table.columns[columnIndex].index]
															}
														}
														
														//Insert Tuple
														database[sheet.properties.title].insert(tuple)
														
														if (tuple_insertions == 0) {
															if (typeof argList.callback == TypeEnum.Func) {
																argList.callback()
															}
														} else {
															tuple_insertions -= 1
														}
													}
												}.bind(this)
											});
										}
									}.bind(this)
								})
							} catch(error) {
								//Return Error
								console.log("GSQL: An uknown error occured while loading database metadata!")
							}
						}.bind(this)
					})
				}.bind(this)
			})
		}
	}
	
	convert(name, sql) {
		//Type check
		if (typeof name == TypeEnum.Str && typeof sql == TypeEnum.Str) {
			//Init cache
			let tables = []
			let foreignKeys = []
			let tuples = []
			
			//Get lines
			let lines = sql.split('\n')
			
			let linePointer = 0 //For some reason linepointer revaluates each for-loop iteration
			for (linePointer; linePointer < lines.length; linePointer++) {
				//Break up line into blocks
				let line = lines[linePointer]
				line = line.trim().replace(/\s{2,}/g, ' ').split(/\s/)
				
				//Init state
				let index = 0
				
				try {
					switch(line[0].toUpperCase()) {
						case "CREATE":
							//Create new entity
							switch(line[1].toUpperCase()) {
								case "TABLE":
									//Init table
									line[2] = line[2].replace(/('|`)/g, '')
									tables[tables.length] = {name: line[2], columns: [], tuples: []}
									let table = tables[tables.length - 1]
									
									//Single Command Per Line
									let EOL = ''
									linePointer++
									while (linePointer < lines.length && EOL != ');') {
										let line = lines[linePointer]
										line = line.trim().replace(/\s{2,}/g, ' ').split(/\s/)
										EOL = line[line.length - 1].substr(-2)
										
										if ((line[0].match(/('|`)/g) || []).length == 2 && line.length >= 2) {
											if (line[1].substr(-1) == ",") {line[1] = line[1].substr(0, line[1].length - 1)}
											
											//Create column
											line[0] = line[0].replace(/('|`)/g, '')
											table.columns[table.columns.length] = {
												name: line[0],
												type: line[1],
												lastIndex: 0,
												constraints: [],
												keys: {PK: false}
											}
											let column = table.columns[table.columns.length - 1]
											index = 2
											
											//Collect Constraints
											let EOW = ""
											while (EOW != "," && index < line.length) {
												//Get word
												let word = line[index]
												
												//Extract End Of Line
												EOW = word.substr(-1)
												if (EOW == ",") { word = word.substr(0, word.length - 1) }
												
												//Check Constraints
												if (word == "PK") {
													//Found PK
													column.keys.PK = true
												} else if (word.match(/FK(?=\()/) != null && word.match(/\(*\)/) != null) {
													//Found FK
													foreignKeys[foreignKeys.length] = {table: table.name, column: column.name, destination: word.match(/\(.*(?=\))/)[0].substr(1).replace(/('|`)/g, '')}
												} else if (word == "column_id") {
													//Found column_id
													column.constraints[column.constraints.length] = {constraint: GSQL_Enums.Constraint.AutoIncrement, attributes: {last: column.lastIndex}}
													column.constraints[column.constraints.length] = {constraint: GSQL_Enums.Constraint.NotNull, attributes: {}}
												} else {
													//Found Generic Constraint
													column.constraints[column.constraints.length] = GSQL_Enums.toConstraint(word)
												}
												
												//Increment Key
												index++
											}
										}
										
										//Increment linePointer
										linePointer++
									}
									
									if (EOL == ");") { linePointer-- }
									break
								case "VIEW":
									console.log("GSQL: Attempting to create view while attempting to convert SQL to GSQL, this is currently not supported!")
									break
								default:
									console.log("GSQL: Uknown entry for 'CREATE', '" + line[0].toUpperCase + "' while attempting to convert SQL file!")
							}
							
							break
						case "INSERT":
							//Insert into entity
							console.log("GSQL: Stub @convert(name, sql)")
							break
						case "":
							break
						default:
							console.log("GSQL: Uknown key '" + line[0].toUpperCase + "' while attempting to convert SQL file!")
					}
				} catch(error) {
					console.log("GSQL: Something went wrong while converting SQL to GSQL!")
				}
			}
			
			//Create Database
			this.create(name, tables)
			
			//Store foreignKeys
			let database = this[name]
			for (let index in foreignKeys) {
				let key = foreignKeys[index]
				let table = database[key.table]
				table.addFK(key.column, key.destination)
			}
		}
	}
	
	create(name, tables) {
		if (typeof name == TypeEnum.Str) {
			if (typeof this[name] == TypeEnum.Undefined) {
				this._database[name] = new GSQL.Database(name, tables, GSQL_Enums.Permisions.Read + GSQL_Enums.Permisions.Write)
				this[name] = this._database[name]
				return
			} else {
				console.log("GSQL: Attempt to create database '" + name + "' with a reserved name!")
			}
		}
		
		console.log("GSQL: An uknown error occured while creating a new database")
	}
	
	close(index) {
		console.log("GSQL: Stub @Database.close()")
	}
}