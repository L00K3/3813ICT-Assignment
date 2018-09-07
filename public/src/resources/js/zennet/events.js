//Event Structs
const PosStruct = function constructor(xDown = null, yDown = null, xUp = null, yUp = null) {
    this.xDown = xDown
    this.yDown = yDown
    this.xUp = xUp
    this.yUp = yUp
    
    this.__defineGetter__("PosDown", function() {
        return {X: this.xDown, Y: this.yDown}
    })
    
    this.__defineGetter__("PosUp", function() {
        return {X: this.xUp, Y: this.yUp}
    })
    
    this.__defineGetter__("Difference", function() {
        return {X: this.xDown - this.xUp, Y: this.yDown - this.yUp}
    })
}

//Event Handler Class
class EventHandler {
    //Initialise Singleton
    constructor(primaryAnchor = document, mouseAnchor = null, touchAnchor = null, superAnchor = null) {
        //Init Mouse Variables To Use
        this._mousePos = new PosStruct()
        this._mouseButtons = null
        this._mouseEvents = 0
        
        //Init Touch Variables To Use
        this._touchPos = new PosStruct()
        this._touchEvents = 0
        
        //Anchors
        //Check For Undefined Anchors
        if (mouseAnchor === null) {
            mouseAnchor = primaryAnchor
        }
        
        if (touchAnchor === null) {
            touchAnchor = primaryAnchor
        }
        
        if (superAnchor === null) {
            superAnchor = primaryAnchor
        }
        
        //Set Anchors
        this._anchors = {
            keyboard: primaryAnchor, //Primary Anchor Is Treated As Keyboard Anchor, And Used To Define Undefined Anchors
            mouse: mouseAnchor,
            touch: touchAnchor,
            super: superAnchor
        }
    }
    
    //Getters And Setters
    get anchors() {
        return this._anchors
    }
    
    set anchorKeyboard(value) {
        //Check if DOM element
        if (value.nodeName) {
            this._anchors.keyboard = value
        }
    }
    
    set anchorMouse(value) {
        //Check if DOM element
        if (value.nodeName) {
            this._anchors.mouse = value
        }
    }
    
    set anchorTouch(value) {
        //Check if DOM element
        if (value.nodeName) {
            this._anchors.touch = value
        }
    }
    
    set anchorSuper(value) {
        //Check if DOM element
        if (value.nodeName) {
            this._anchors.super = value
        }
    }
    
    get isMouse() {
        return (this._mouseEvents > 0)
    }
    
    get isTouch() {
        return (this._touchEvents > 0)
    }
    
    addEvent(event, func, caller) {
        //Check given attributes
        if (typeof event == TypeEnum.Num && typeof func == TypeEnum.Func) {
            switch (event) {
                //Mouse Events
                case EventEnum.MouseDown:
                    if (this._MouseDown === undefined) { this._anchors.mouse.addEventListener('mousedown', this.handleMouseDown.bind(this), false) }
                    this._MouseDown = func.bind(caller)
                    break;
                case EventEnum.MouseUp:
                    if (this._MouseUp === undefined) { this._anchors.mouse.addEventListener('mouseup', this.handleMouseUp.bind(this), false) }
                    this._MouseUp = func.bind(caller)
                    break;
                case EventEnum.MouseClick:
                    if (this._MouseClick === undefined) { this._anchors.mouse.addEventListener('click', this.handleMouseClick.bind(this), false) }
                    this._MouseClick = func.bind(caller)
                    break;
                case EventEnum.MouseDblClick:
                    if (this._MouseDblClick === undefined) { this._anchors.mouse.addEventListener('dblclick', this.handleMouseDblClick.bind(this), false) }
                    this._MouseDblClick = func.bind(caller)
                    break;
                case EventEnum.MouseRightClick:
                    if (this._MouseRightClick === undefined) { this._anchors.mouse.addEventListener('contextmenu', this.handleMouseRightClick.bind(this), false) }
                    this._MouseRightClick = func.bind(caller)
                    break;
                case EventEnum.MouseAuxClick:
                    if (this._MouseAuxClick === undefined) { this._anchors.mouse.addEventListener('auxclick', this.handleMouseAuxClick.bind(this), false) }
                    this._MouseAuxClick = func.bind(caller)
                    break;
                case EventEnum.MouseWheel:
                    if (this._MouseWheel === undefined) { this._anchors.mouse.addEventListener('wheel', this.handleMouseWheel.bind(this), false) }
                    this._MouseWheel = func.bind(caller)
                    break;
                case EventEnum.MouseOver:
                    console.log("Mouse Anchor: ", this._anchors.mouse)
                    if (this._MouseOver === undefined) { this._anchors.mouse.addEventListener('mouseover', this.handleMouseOver.bind(this), false) }
                    this._MouseOver = func.bind(caller)
                    break;
                case EventEnum.MouseOut:
                    if (this._MouseOut === undefined) { this._anchors.mouse.addEventListener('mouseout', this.handleMouseOut.bind(this), false) }
                    this._MouseOut = func.bind(caller)
                    break;
                
                //Touch Events
                case EventEnum.TouchStart:
                    if (this._TouchStart === undefined) { this._touchEvents++ }
                    this._TouchStart = func.bind(caller)
                    break;
                case EventEnum.TouchSwipe_Left:
                    if (this._TouchSwipeLeft === undefined) { this._touchEvents++ }
                    this._TouchSwipeLeft = func.bind(caller)
                    break;
                case EventEnum.TouchSwipe_Right:
                    if (this._TouchSwipeRight === undefined) { this._touchEvents++ }
                    this._TouchSwipeRight = func.bind(caller)
                    break;
                case EventEnum.TouchSwipe_Up:
                    if (this._TouchSwipeUp === undefined) { this._touchEvents++ }
                    this._TouchSwipeUp = func.bind(caller)
                    break;
                case EventEnum.TouchSwipe_Down:
                    if (this._TouchSwipeDown === undefined) { this._touchEvents++ }
                    this._TouchSwipeDown = func.bind(caller)
                    break
                case EventEnum.TouchEnd:
                    if (this._TouchEnd === undefined) { this._touchEvents++ }
                    this._TouchEnd = func.bind(caller)
                    break;
                
                //Runs This If Invalid Event Supplied
                default:
                    console.log("Error: Invalid Event '" + event + "'")
                    break;
            }
        }
        
        if (this._touchEvents == 1) {
            this._anchors.touch.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
            this._anchors.touch.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
            this._anchors.touch.addEventListener('touchend', this.handleTouchEnd.bind(this), false);
        }
    }
    
    removeEvent(event, func) {
        //Check given attributes
        if (typeof event == TypeEnum.Num && typeof func == TypeEnum.Func) {
            switch (event) {
                //Mouse Events
                case EventEnum.MouseDown:
                    if (this._MouseDown !== undefined) { this._anchors.mouse.removeEventListener('mousedown', this.handleMouseDown, false) }
                    this._MouseDown = undefined
                    break;
                case EventEnum.MouseUp:
                    if (this._MouseUp !== undefined) { this._anchors.mouse.addEventListener('mouseup', this.handleMouseUp, false) }
                    this._MouseUp = undefined
                    break;
                case EventEnum.MouseClick:
                    if (this._MouseClick !== undefined) { this._anchors.mouse.addEventListener('click', this.handleMouseClick, false) }
                    this._MouseClick = undefined
                    break;
                case EventEnum.MouseDblClick:
                    if (this._MouseDblClick !== undefined) { this._anchors.mouse.addEventListener('dblclick', this.handleMouseDblClick, false) }
                    this._MouseDblClick = undefined
                    break;
                case EventEnum.MouseRightClick:
                    if (this._MouseRightClick !== undefined) { this._anchors.mouse.addEventListener('contextmenu', this.handleMouseRightClick, false) }
                    this._MouseRightClick = undefined
                    break;
                case EventEnum.MouseAuxClick:
                    if (this._MouseAuxClick !== undefined) { this._anchors.mouse.addEventListener('auxclick', this.handleMouseAuxClick, false) }
                    this._MouseAuxClick = undefined
                    break;
                case EventEnum.MouseWheel:
                    if (this._MouseWheel !== undefined) { this._anchors.mouse.addEventListener('wheel', this.handleMouseWheel, false) }
                    this._MouseWheel = undefined
                    break;
                case EventEnum.MouseOver:
                    if (this._MouseOver !== undefined) { this._anchors.mouse.addEventListener('mouseover', this.handleMouseOver, false) }
                    this._MouseOver = undefined
                    break;
                case EventEnum.MouseOut:
                    if (this._MouseOut !== undefined) { this._anchors.mouse.addEventListener('mouseout', this.handleMouseOut, false) }
                    this._MouseOut = undefined
                    break;
                
                //Touch Events
                case EventEnum.TouchStart:
                    if (this._TouchStart !== undefined) { this._touchEvents-- }
                    this._TouchStart = undefined
                    break;
                case EventEnum.TouchSwipe_Left:
                    if (this._TouchSwipeLeft !== undefined) { this._touchEvents-- }
                    this._TouchSwipeLeft = undefined
                    break;
                case EventEnum.TouchSwipe_Right:
                    if (this._TouchSwipeRight !== undefined) { this._touchEvents-- }
                    this._TouchSwipeRight = undefined
                    break;
                case EventEnum.TouchSwipe_Up:
                    if (this._TouchSwipeUp !== undefined) { this._touchEvents-- }
                    this._TouchSwipeUp = undefined
                    break;
                case EventEnum.TouchSwipe_Down:
                    if (this._TouchSwipeDown !== undefined) { this._touchEvents-- }
                    this._TouchSwipeDown = undefined
                    break
                case EventEnum.TouchEnd:
                    if (this._TouchEnd !== undefined) { this._touchEvents-- }
                    this._TouchEnd = undefined
                    break;
                
                //Runs This If Invalid Event Supplied
                default:
                    console.log("Error: Invalid Event '" + event + "'")
                    break;
            }
        }
        
        if (this._mouseEvents == 0) {
            
        }
        
        if (this._touchEvents == 0) {
            this._anchor.removeEventListener('touchstart', this.handleTouchStart, false);
            this._anchor.removeEventListener('touchmove', this.handleTouchMove, false);
            this._anchor.removeEventListener('touchend', this.handleTouchEnd, false);
        }
    }
    
    //Mouse Handlers
    handleMouseDown(event) {
        this._mousePos.xDown = event.clientX;
        this._mousePos.yDown = event.clientY;
        this._mouseButtons = event.button;
        
        //MouseDown Event Listeners
        try {
            this._MouseDown(this._mousePos.xDown, this._mousePos.yDown, this._mouseButtons)
        } catch(error) {
            return
        }
    }
    
    handleMouseUp(event) {
        if (this._mousePos.xUp != null && this._mousePos.yUp != null) {
            //Work out last movement distance
            let Difference = this._mousePos.Difference
            
            //MouseUp Event Listeners
            try {
                this._MouseUp(this._mousePos.PosDown, Difference, this._mouseButtons)
            } catch(error) {
                return
            }
            
            /* reset values */
            this._mousePos.xUp = null
            this._mousePos.yUp = null
            this._mousePos.xDown = null
            this._mousePos.yDown = null
            this._mouseButtons = null
        }
    }
    
    handleMouseClick(event) {
        //MouseClick Event Listeners
        try {
            this._MouseClick(event.clientX, event.clientX, event.button)
        } catch(error) {
            return
        }
    }
    
    handleMouseDblClick(event) {
        //MouseDblClick Event Listeners
        try {
            this._MouseDblClick(event.clientX, event.clientX, event.button)
        } catch(error) {
            return
        }
    }
    
    handleMouseRightClick(event) {
        //MouseRightClick Event Listeners
        try {
            this._MouseRightClick(event.clientX, event.clientX)
        } catch(error) {
            return
        }
    }
    
    handleMouseAuxClick(event) {
        //MouseAuxClick Event Listeners
        try {
            this._MouseAuxClick()
        } catch(error) {
            return
        }
    }
    
    handleMouseWheel(event) {
        //MouseWheelClick Event Listeners
        try {
            this._MouseWheel(event.wheelDeltaX, event.wheelDeltaY, event.wheelDeltaZ)
        } catch(error) {
            return
        }
    }
    
    handleMouseOver(event) {
        //MouseWheelClick Event Listeners
        try {
            this._MouseOver(event.clientX, event.clientY)
        } catch(error) {
            return
        }
    }
    
    handleMouseOut(event) {
        //MouseWheelClick Event Listeners
        try {
            this._MouseOut(event.clientX, event.clientY)
        } catch(error) {
            return
        }
    }
    
    //Touch Handlers
    handleTouchStart(event) {
        this._touchPos.xDown = event.touches[0].clientX;
        this._touchPos.yDown = event.touches[0].clientY;
        
        //TouchStart Event Listeners
        try {
            this._TouchStart(this._touchPos.xDown, this._touchPos.yDown)
        } catch(error) {
            return
        }
    }
    
    handleTouchEnd(event) {
        if (this._touchPos.xUp != null && this._touchPos.yUp != null) {
            //Work out last movement distance
            let Difference = this._touchPos.Difference
            
            //TouchEnd Event Listeners
            try {
                this._TouchEnd(this._touchPos.PosDown, Difference)
            } catch(error) {
                return
            }
            
            /* reset values */
            this._touchPos.xUp = null
            this._touchPos.yUp = null
            this._touchPos.xDown = null
            this._touchPos.yDown = null
        }
    }
    
    handleTouchMove(event) {
        if ( !this._touchPos.xDown || !this._touchPos.yDown ) {
            return
        }
        
        //Set New Touch Pos(X, Y)
        this._touchPos.xUp = event.touches[0].clientX
        this._touchPos.yUp = event.touches[0].clientY
        
        //Get Difference Between Old Pos(X, Y) And New Pos(X, Y)
        let Difference = this._touchPos.Difference
        
        if (Math.abs(Difference.X) > Math.abs(Difference.Y)) {
            /*Horizontal most significant*/
            if (Difference.X > 0) {
                //left swipe
                Difference.X = Math.abs(Difference.X);
                
                try {
                    this._TouchSwipeLeft(this.PosDown, Difference.X)
                } catch(error) {
                    return
                }
            } else {
                //right swipe
                Difference.X = Math.abs(Difference.X);
                
                try {
                    this._TouchSwipeRight(this.PosDown, Difference.X)
                } catch(error) {
                    return
                }
            }
        } else {
            /*Vertical most significant*/
            if (Difference.Y > 0) {
                //up swipe
                Difference.Y = Math.abs(Difference.Y);
                
                try {
                    this._TouchSwipeUp(this.PosDown, Difference.Y)
                } catch(error) {
                    return
                }
            } else { 
                //down swipe
                Difference.Y = Math.abs(Difference.Y);
                
                try {
                    this._TouchSwipeDown(this.PosDown, Difference.Y)
                } catch(error) {
                    return
                }
            }                                                                 
        }
    }
}