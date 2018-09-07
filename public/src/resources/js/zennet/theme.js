/* This script sets up the style schemes as per requested theme */
/*global TypeEnum*/

let theme = new class {
	//Getters
	get colorSchema() {
		return {
			primary: getComputedStyle(document.body).getPropertyValue('--Color_Primary'),
			secondary: getComputedStyle(document.body).getPropertyValue('--Color_Secondary'),
			text: getComputedStyle(document.body).getPropertyValue('--Color_Text')
		}
	}
	
	get moduleSchema() {
		return {name: "Angular"}
	}
	
	//Test Screen
	showPalette() {
		let colors = ["turquoise", "emerald", "peterriver", "amethyst", "wetasphalt",
			"greensea", "nephritis", "belizehole", "wisteria", "midnightblue",
			"sunflower", "carrot", "alizarin", "clouds", "concrete",
			"orange", "pumpkin", "pomegranate", "silver", "asbestos"
		]
		let DOM = "<div id='colorPalette' style='width: 98vw; height: 98vh; left: 1vw; top: 1vh; grid-template-columns: repeat(5, 1fr); grid-template-rows: repeat(4, 1fr); display: grid; position: absolute'>"
		
		for (let index in colors) {
			let color = colors[index]
			
			DOM += "<div style='width: 100%; height: 100%; position: relative; border-radius: 0px; color: #FFFFFF; background: " + this.color2Text(this.getColor(color)) + "'> <p style='position: absolute; bottom: 0px; left: 0px'>" + color + "</p> </div>"
		}
		
		document.body.innerHTML += DOM + "</div>"
	}
	
	hidePalette() {
		let DOM = document.getElementById("colorPalette")
		DOM.parentElement.removeChild(DOM)
	}
	
	//Colors
	getColor(color) {
		if (typeof color == TypeEnum.Str) {
			color = color.toLowerCase()
			
			switch (color) {
				case "white":
					return [0xff, 0xff, 0xff]
					break
				case "turquoise":
					return [0x1a, 0xbc, 0x9c]
					break
				case "emerald":
					return [0x2e, 0xcc, 0x71]
					break
				case "peterriver":
					return [0x34, 0x98, 0xdb]
					break
				case "amethyst":
					return [0x9b, 0x59, 0xb6]
					break
				case "wetasphalt":
					return [0x34, 0x49, 0x5e]
					break
				case "greensea":
					return [0x16, 0xa0, 0x85]
					break
				case "nephritis":
					return [0x27, 0xae, 0x60]
					break
				case "belizehole":
					return [0x29, 0x80, 0xb9]
					break
				case "wisteria":
					return [0x8e, 0x44, 0xad]
					break
				case "midnightblue":
					return [0x2c, 0x3e, 0x50]
					break
				case "sunflower":
					return [0xf1, 0xc4, 0x0f]
					break
				case "carrot":
					return [0xe6, 0x7e, 0x22]
					break
				case "alizarin":
					return [0xe7, 0x4c, 0x3c]
					break
				case "clouds":
					return [0xec, 0xf0, 0xf1]
					break
				case "concrete":
					return [0x95, 0xa5, 0xa6]
					break
				case "orange":
					return [0xf3, 0x9c, 0x12]
					break
				case "pumpkin":
					return [0xd3, 0x54, 0x00]
					break
				case "pomegranate":
					return [0xc0, 0x39, 0x2b]
					break
				case "silver":
					return [0xbd, 0xc3, 0xc7]
					break
				case "asbestos":
					return [0x7f, 0x8c, 0x8d]
					break
				default:
					return [0x00, 0x00, 0x00]
					break
			}
		}
		
		return null
	}
	
	luminateColor(color, luminance = 0x10) {
		try {
			let newColor = new Array(3)
			
			if (typeof luminance != TypeEnum.Num) {
				luminance = 0x10
			} else if (luminance > 0xFF || luminance < 0x01) {
				luminance = 0x10
			}
			
			for (let index in color) {
				if (color[index] > (0xFF - luminance)) {
					newColor[index] = 0xFF
				} else {
					newColor[index] = color[index] + luminance
				}
			}
			
			return newColor
		} catch(error) {
			return [0xFF, 0xFF, 0xFF]
		}
	}
	
	dimColor(color, luminance = 0x10) {
		try {
			let newColor = new Array(3)
			
			if (typeof luminance != TypeEnum.Num) {
				luminance = 0x10
			} else if (luminance > 0xFF || luminance < 0x01) {
				luminance = 0x10
			}
			
			for (let index in color) {
				if (color[index] < luminance) {
					newColor[index] = 0x00
				} else {
					newColor[index] = color[index] - luminance
				}
			}
			
			return newColor
		} catch(error) {
			return [0xFF, 0xFF, 0xFF]
		}
	}
	
	color2Text(color) {
		try {
			let value = "#"
			for (let index in color) {
				let tempValue = color[index].toString(16)
				if (tempValue.length < 2) {tempValue = "0" + tempValue}
				value += tempValue
			}
			
			return value
		} catch(error) {
			return "#000000"
		}
	}
	
	//Setters
	set primary(color) {
		if (typeof color == TypeEnum.Str) {
			color = this.getColor(color)
			
			if (color !== null) {
				document.documentElement.style.setProperty('--Color_PrimaryDisabled', this.color2Text(this.dimColor(color, 0x40)))
				document.documentElement.style.setProperty('--Color_Primary', this.color2Text(color))
				document.documentElement.style.setProperty('--Color_PrimaryHover', this.color2Text(this.luminateColor(color, 0x20)))
			}
		}
	}
	
	set secondary(color) {
		if (typeof color == TypeEnum.Str) {
			color = this.getColor(color)
			
			if (color !== null) {
				document.documentElement.style.setProperty('--Color_SecondaryDisabled', this.color2Text(this.dimColor(color, 0x40)))
				document.documentElement.style.setProperty('--Color_Secondary', this.color2Text(color))
				document.documentElement.style.setProperty('--Color_SecondaryHover', this.color2Text(this.luminateColor(color, 0x20)))
			}
		}
	}
	
	set text(color) {
		if (typeof color == TypeEnum.Str) {
			color = this.getColor(color)
			
			if (color !== null) {
				document.documentElement.style.setProperty('--Color_Text', this.color2Text(color))
			}
		}
	}
	
	set colorTheme(theme) {
		//Sets up both colors to conform to given theme
		this.primaryColor = theme
		this.secondaryColor = theme
	}
}