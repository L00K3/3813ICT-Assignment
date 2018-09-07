//This script contains Enums used in other scripts
const TypeEnum = {
	Num: "number",
	Str: "string",
	Bool: "boolean",
	Obj: "object",
	Func: "function",
	Undefined: "undefined"
}
global.TypeEnum = TypeEnum

const ErrorEnum = {
	TypeErr: {
		Num: "Type Error: Value is not numeric",
		Str: "Type Error: Value is not a string",
		Arr: "Type Error: Value is not an array",
		Construct: "Type Error: Arguments provided to this object are not valid types"
	},
	Index: "Index Error: Object does not exist",
	Parent: "Object Error: Parent was not defined!",
	AddObject: "Type Error: Attempt to add object with invalid values",
	Parse: "Parse Error: There was an error while attempting to parse the file!",
	Render: "Render Error: There was an error while attempting to render this object",
	InvalidAttribute: "Object Error: Invalid Attribute Called"
}
global.ErrorEnum = ErrorEnum

const ErrorCodeEnum = {
	Undefined: 0,
	
	VarType: 1,
	TypeErr: {
		//Specific Types [0..32]
		Char: 0,
		String: 1,
		Base64: 2,
		Boolean: 3,
		Int: 4,
		Float: 5,
		Date: 6,
		Time: 7,
		Array: 8,
		XML: 9,
		
		//General Types [33..64]
		Num: 33
	},
	
	Constraint: 2,
	ConstraintErr: {
		Args: 0,
		Null: 1,
		Check: 2
	}
}
global.ErrorCodeEnum = ErrorCodeEnum