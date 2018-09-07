//Global Variables

//This script manages the database operations
module.exports = new class {
	constructor() {
		//Connection Start
		io.on('connection', function(socket) {
			console.log("User Connected")
			
			socket.on('disconnect', function() {
				console.log('User Disconnected')
			})
			
			socket.on('add-message', function(message) {
				console.log('User Said: ', message)
				
				io.emit('message', {type: 'message', text: message})
			})
		})
		
		console.log("Server Socket Initialised")
	}
}
