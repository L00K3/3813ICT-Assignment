/*global TypeEnum*/
let spinners = new Array()

let animation = new class {
    constructor() {
        this.parents = {}
    }
    
    createHexLoader(parentID, objectID) {
        if (typeof objectID == TypeEnum.Str && typeof parentID == TypeEnum.Str) {
            let DOM = document.getElementById(parentID)
            
            if (DOM != null) {
                if (this.parents[objectID] == undefined) {
                    this.parents[objectID] = parentID
                    DOM.innerHTML += '<div id="' + objectID + '" class="animation">\
                                <div class="ani-ld-hex fra1"> <div class="shape"> <div class="hexagon hexagon-1 secondary"></div> <div class="hexagon hexagon-2 secondary"></div> <div class="hexagon hexagon-3 secondary"></div> </div> </div>\
                                <div class="ani-ld-hex fra2"> <div class="shape"> <div class="hexagon hexagon-1 secondary"></div> <div class="hexagon hexagon-2 secondary"></div> <div class="hexagon hexagon-3 secondary"></div> </div> </div>\
                                <div class="ani-ld-hex fra3"> <div class="shape"> <div class="hexagon hexagon-1 secondary"></div> <div class="hexagon hexagon-2 secondary"></div> <div class="hexagon hexagon-3 secondary"></div> </div> </div>\
                                <div class="ani-ld-hex fra4"> <div class="shape"> <div class="hexagon hexagon-1 secondary"></div> <div class="hexagon hexagon-2 secondary"></div> <div class="hexagon hexagon-3 secondary"></div> </div> </div>\
                                <div class="ani-ld-hex fra5"> <div class="shape"> <div class="hexagon hexagon-1 secondary"></div> <div class="hexagon hexagon-2 secondary"></div> <div class="hexagon hexagon-3 secondary"></div> </div> </div>\
                                <div class="ani-ld-hex fra6"> <div class="shape"> <div class="hexagon hexagon-1 secondary"></div> <div class="hexagon hexagon-2 secondary"></div> <div class="hexagon hexagon-3 secondary"></div> </div> </div> </div>'
                } else {
                    console.log("Animation: Attempt to create hexagonal loader with an already existing id!")
                }
            } else {
                console.log("Animation: Attempt to create hexagonal loader with non existent parent!")
            }
        } else {
            console.log("Animation: Attempt to create hexagon loader with invalid arguments!")
        }
    }
    
    removeSpinner(objectID) {
        if (typeof objectID == TypeEnum.Str) {
            let parent = this.parents[objectID]
            
            if (parent != undefined) {
                let parentDOM = document.getElementById(parent)
                let objectDOM = document.getElementById(objectID)
                
                if (parentDOM != null && objectDOM != null) {
                    parentDOM.removeChild(objectDOM)
                } else {
                    console.log("Animation: Attempt to remove spinner but was unable to locate spinner or parent DOM!")
                }
                this.parents[objectID] = undefined
            } else {
                console.log("Animation: Attempt to remove spinner with invalid id!")
            }
        } else {
            console.log("Animation: Attempt to remove spinner but was given invalid arguments!")
        }
    }
}