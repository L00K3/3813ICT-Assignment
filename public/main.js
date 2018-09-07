(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accounts/login/login.component.css":
/*!****************************************************!*\
  !*** ./src/app/accounts/login/login.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Login_Wrapper {\r\n        -ms-grid-columns: 1fr 400px 1fr;\r\n        grid-template-columns: 1fr 400px 1fr;\r\n        -ms-grid-rows: 1fr 400px 1fr;\r\n        grid-template-rows: 1fr 400px 1fr;\r\n        grid-template-areas:    \". . .\"\r\n                            \". Login_Window_Wrapper .\"\r\n                            \". . .\";\r\n    display: -ms-grid;\r\n    display: grid;\r\n}\r\n\r\n#Login_Window_Wrapper {\r\n        -ms-grid-columns: 8px 1fr 8px;\r\n        grid-template-columns: 8px 1fr 8px;\r\n        -ms-grid-rows: 0px 16px calc(var(--FontSize_Heading1) + 8px) 16px calc(var(--FontSize_Label) + 8px) 16px calc(var(--FontSize_Label) + 8px) 16px calc(var(--FontSize_Label) + 8px) 16px 1fr 16px 8px;\r\n        grid-template-rows: 0px calc(var(--FontSize_Heading1) + 8px) repeat(3, calc(var(--FontSize_Label) + 8px)) 1fr 8px;\r\n    grid-row-gap: 16px;\r\n        grid-template-areas:    \". . .\"\r\n                            \". Login_Window_Banner .\"\r\n                            \". Login_Window_Username .\"\r\n                            \". Login_Window_Password .\"\r\n                            \". Login_Window_Login_Button .\"\r\n                            \". Login_Window_Login_Spinner .\"\r\n                            \". . .\";\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 2;\r\n    grid-area: Login_Window_Wrapper;\r\n    display: -ms-grid;\r\n    display: grid;\r\n}\r\n\r\n#Login_Window_Banner {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 2;\r\n    grid-area: Login_Window_Banner;\r\n}\r\n\r\n#Login_Window_Username {\r\n    -ms-grid-row: 5;\r\n    -ms-grid-column: 2;\r\n    grid-area: Login_Window_Username;\r\n}\r\n\r\n#Login_Window_Password {\r\n    -ms-grid-row: 7;\r\n    -ms-grid-column: 2;\r\n    grid-area: Login_Window_Password;\r\n}\r\n\r\n#Login_Window_Login_Button {\r\n    -ms-grid-row: 9;\r\n    -ms-grid-column: 2;\r\n    grid-area: Login_Window_Login_Button;\r\n}\r\n\r\n#Login_Window_Login_Spinner {\r\n    -ms-grid-row: 11;\r\n    -ms-grid-column: 2;\r\n    grid-area: Login_Window_Login_Spinner;\r\n}"

/***/ }),

/***/ "./src/app/accounts/login/login.component.html":
/*!*****************************************************!*\
  !*** ./src/app/accounts/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"Login_Wrapper\">\n\t<form id=\"Login_Window_Wrapper\" class=\"primary shadow\" (ngSubmit)=\"post($event)\">\n\t\t<label id=\"Login_Window_Banner\" class=\"secondary shadow text-header label\"> Login </label>\n\t\t\n\t\t<div id=\"Login_Window_Username\" class=\"input secondary shadow\">\n\t\t\t<label class=\"text-label label\"> Email </label>\n\t\t\t<input class=\"shadow-focus text-label textBox\" style=\"font: 400 13.3333px Arial;\" type=\"text\" placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" />\n\t\t</div>\n\t\n\t\t<div id=\"Login_Window_Password\" class=\"input secondary shadow\">\n\t\t\t<label class=\"text-label label\"> Password </label>\n\t\t\t<input class=\"shadow-focus text-label textBox\" style=\"font: 400 13.3333px Arial;\" type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" />\n\t\t</div>\n\n\t\t<button id=\"Login_Window_Login_Button\" class=\"secondary secondary-hover shadow shadow-hover text-label button\" type=\"submit\">\n\t\t\tLogin\n\t\t</button>\n\t\t\n\t\t<div id=\"Login_Window_Login_Spinner\" class=\"\">  </div>\n\t</form>\n\t\n\t<!--\n\t<div id=\"Login_Window_Wrapper\" class=\"primary shadow\">\n\t\t<label id=\"Login_Window_Banner\" class=\"secondary shadow text-header label\"> Login </label>\n\t\t\n\t\t<div id=\"Login_Window_Username\" class=\"secondary shadow\">\n\t\t\t<div class=\"input\">\n\t\t\t\t<label class=\"text-label label\"> Email </label>\n\t\t\t\t<div class=\"shadow-focus text-label textBox\" type=\"text\" placeholder=\"Password\"  contentEditable=true data-placeholder=\"Email\" role=\"textbox\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div id=\"Login_Window_Password\" class=\"secondary shadow\">\n\t\t\t<div class=\"input\">\n\t\t\t\t<label class=\"text-label label\"> Password </label>\n\t\t\t\t<div class=\"shadow-focus text-label textBox\" type=\"password\" placeholder=\"Password\"  contentEditable=true data-placeholder=\"Password\" role=\"textbox\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<button id=\"Login_Window_Login_Button\" class=\"secondary secondary-hover shadow shadow-hover text-label button\" onclick=\"login()\"> Login </button>\n\t\t\n\t\t<div id=\"Login_Window_Login_Spinner\" class=\"\">  </div>\n\t</div>\n\t-->\n</div>\n"

/***/ }),

/***/ "./src/app/accounts/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/accounts/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//let database = require('src/assets/javascript/zennet/database.js')
var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, form) {
        this.route = route;
        this.router = router;
        this.form = form;
        this.username = "";
        this.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        //this.data = database.select({callback: function(error, data) { return data }, tables: ["Users"], columns: ["UserName"], statement: "WHERE UserName = 'L00K3'"})
    };
    LoginComponent.prototype.post = function (event) {
        event.preventDefault();
        console.log(this.username, this.password);
        var result = this.checkAccount(this.username, this.password);
        if (result.isValid) {
            this.router.navigateByUrl('account/user');
        }
        else {
            console.log(result);
        }
    };
    LoginComponent.prototype.checkAccount = function (identifier, password) {
        return { isValid: (identifier == "L00K3" && password == "Password"), UID: 0, UserName: "L00K3", Email: "lhensley97@gmail.com" };
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/accounts/login/login.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/accounts/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/accounts/user/user.component.css":
/*!**************************************************!*\
  !*** ./src/app/accounts/user/user.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Account_Wrapper {\n        -ms-grid-rows: 8px var(--FontSize_Heading1) calc(200px - var(--FontSize_Heading1)) 1fr 8px;\n        grid-template-rows: 8px var(--FontSize_Heading1) calc(200px - var(--FontSize_Heading1)) 1fr 8px;\n        -ms-grid-columns: 8px 200px 1fr 8px;\n        grid-template-columns: 8px 200px 1fr 8px;\n        grid-template-areas:    \". . . .\"\n                            \". Account_Avatar Account_Banner .\"\n                            \". Account_Avatar . .\"\n                            \". Account_Information Account_Information.\"\n                            \". . . .\";\n    display: -ms-grid;\n    display: grid;\n}\n\n#Account_Avatar {\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 2;\n    -ms-grid-column: 2;\n    grid-area: Account_Avatar;\n}\n\n#Account_Banner {\n    -ms-grid-row: 2;\n    -ms-grid-column: 3;\n    grid-area: Account_Banner;\n}\n\n#Account_Information {\n    -ms-grid-row: 4;\n    -ms-grid-column: 2;\n    grid-area: Account_Information;\n}\n"

/***/ }),

/***/ "./src/app/accounts/user/user.component.html":
/*!***************************************************!*\
  !*** ./src/app/accounts/user/user.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"Account_Wrapper\" class=\"wrapper\">\n\t<div id=\"Account_Avatar\" class=\"\"><img class=\"image image-auto\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"></div>\n\t<div id=\"Account_Banner\" class=\"primary text-header\"> User's Account </div>\n\t<div id=\"Account_Information\" class=\"text-body paragraph\">\n\t\tQui cotidieque instructior an, ius civibus consetetur te, ad ponderum omittantur consectetuer per. Id has impetus singulis. Te diceret vocibus usu, ut duo vitae facilis explicari. Mel tollit ullamcorper an. Vis verear mnesarchum ex, no mazim congue mei. His salutandi assentior ne, has an porro movet choro.\n\t\tTe qui probo aliquip officiis. Mea an decore sensibus liberavisse, id probo vocent dissentiunt eos. Qui ad iriure integre dissentiunt, mei wisi modus accusata eu. Cu probo cetero detraxit eum. Simul aperiri eripuit id sea. At summo oblique eos, veniam alienum euripidis eos ad. Latine minimum ut cum, ad modo copiosae usu.\n\t\tAn suscipit gloriatur est, eum et error alienum nominavi. Simul oporteat vivendum at eum. Nam an latine omittam menandri, at sed phaedrum salutandi, pro et salutatus imperdiet constituam. Urbanitas accommodare vel et. Vide dissentiet an vel, ea eam vocent accumsan molestie. Sit solet ornatus eu, debet philosophia nam at.\n\t\tIn usu impedit menandri praesent, est fabulas insolens recteque id, soluta lobortis disputationi no per. Per sale liber no. Ea sea nisl cetero utamur. Scripta scripserit referrentur vix an. Vix at melius singulis electram.\n\t\tDuo vidit referrentur cu, sea posse porro nominati te, alienum mnesarchum ut vim. Amet primis sententiae an est, duo ut adhuc nonumes explicari. Nec deleniti molestiae maiestatis et, no sea modo fabulas dolores. Ne praesent tractatos honestatis vel, cu alii antiopam mel.\n\t\tTota tation adipisci mea an. Ex aliquando sadipscing vix, at impedit argumentum eam, vix ea ipsum solet instructior. Vix falli oratio efficiendi in, maiestatis democritum intellegebat ut vix, eos ut officiis disputationi. Postea quidam quo ne.\n\t\tIn facer detraxit consetetur sed, an quis dico referrentur sea. Ex dicam dolorum incorrupte sed, ea dico virtute corrumpit sit. Expetenda principes qui ne, cu ferri equidem honestatis has, an duo facilisi interesset. Est id elitr clita. Denique partiendo persequeris eos ne, his te falli propriae adipiscing. Mei ut accusata abhorreant, munere quodsi posidonium his id.\n\t\tMel labores fabellas ne, saperet detracto ei vim. Definiebas percipitur in pri, habeo lucilius ullamcorper ex vel. Legere invidunt facilisi has an. Ex atqui exerci nemore vix, legendos sapientem cu mei. Affert ceteros in per, audiam latine ad pri, malis detracto adolescens at vim.\n\t\tMea in modus laboramus moderatius, eum labitur docendi nominati cu. Illud erroribus inciderint pri in, in eum ferri novum diceret, usu malis commodo reformidans no. Sed alterum repudiare quaerendum ei. Detraxit dissentiunt ullamcorper an pro, id aperiam definitiones quo, in eos facete nominati adversarium. Cu diam invenire theophrastus sit. Id wisi placerat tractatos ius.\n\t\tVel minim evertitur ne, vix id partem insolens. Erat dicit civibus his et. Quo ei falli debitis. Ad vix tantas ridens constituto, sea ne fugit congue ponderum. Ad vivendum persequeris mei, duo an ullum fierent.\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/accounts/user/user.component.ts":
/*!*************************************************!*\
  !*** ./src/app/accounts/user/user.component.ts ***!
  \*************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(route) {
        this.route = route;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-user-page',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/accounts/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/accounts/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"pageContainer\">\n\t<div id=\"nav\">\n\t\t<a class=\"secondary secondary-hover text-label tooltip button Nav_Link\" id=\"Nav_Home\" routerLink=\"/\">\n\t\t\t<span class=\"Project_NavText\"> Home </span>\n\t\t\t<i class=\"material-icons icon\">home</i>\n\t\t\t<span class=\"tooltiptext\"> Go Home </span>\n\t\t</a>\n\t\t\n\t\t<a class=\"secondary secondary-hover text-label tooltip button Nav_Link\" id=\"Nav_Admin\" routerLink=\"/\">\n\t\t\t<span class=\"Project_NavText\"> Admin </span>\n\t\t\t<i class=\"material-icons icon\">warning</i>\n\t\t\t<span class=\"tooltiptext\"> User Administration </span>\n\t\t</a>\n\t\t\n\t\t<a class=\"secondary secondary-hover text-label tooltip button Nav_Link\" id=\"Nav_Login\" routerLink=\"account/login\">\n\t\t\t<span class=\"Project_NavText\"> Login </span>\n\t\t\t<i class=\"material-icons icon\">lock_open</i>\n\t\t\t<span class=\"tooltiptext\"> Login to your account </span>\n\t\t</a>\n\t\t\n\t\t<a class=\"secondary secondary-hover text-label tooltip button Nav_Link\" id=\"Nav_Logout\" [ngStyle]=\"elements.Nav_Logout.styles\" routerLink=\"/\">\n\t\t\t<span class=\"Project_NavText\"> Logout </span>\n\t\t\t<i class=\"material-icons icon\">exit_to_app</i>\n\t\t\t<span class=\"tooltiptext\"> Logout of your account </span>\n\t\t</a>\n\t</div>\n\n\t<div id=\"header\" class=\"primary\">\n\t\t<h1 id=\"appBanner\" class=\"text-header\">\n\t\t\tWelcome to {{ title }}! {{ users }}\n\t\t</h1>\n\t\t\n\t\t<div id=\"appLogo\" class=\"image\">\n\t\t\t<img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n\t\t</div>\n\t</div>\n\n\t<div id=\"content\">\n\t\t<router-outlet ng-init=\"onRouteInit()\"></router-outlet>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _objects_database_database_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/database/database.module */ "./src/app/objects/database/database.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _router, _databaseModule) {
        this._route = _route;
        this._router = _router;
        this._databaseModule = _databaseModule;
        //User Variables
        this.user = {
            token: '',
            uid: -1,
            gid: 0,
            username: '',
            privillage: 0 //0 = General User, 1 = Group Admin, 2 = System Admin
        };
        this.elements = {
            Nav_Logout: new /** @class */ (function () {
                function class_1() {
                    this.display = false;
                }
                Object.defineProperty(class_1.prototype, "styles", {
                    get: function () {
                        return {
                            display: this.display ? 'visible' : 'none'
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }())
        };
        //Document Variables
        this.title = 'Chat Room';
        this.debug = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.onRouteInit();
    };
    AppComponent.prototype.onRouteInit = function () {
        this._databaseModule.confirmToken({ callback: function (error, user) {
                var redirect = '/chatroom';
                if (this._router.url != '/') {
                    redirect = this._router.url;
                }
                if (error.isError) {
                    this._router.navigate(['/login', { redirect: redirect }]);
                    return;
                }
                this.user.token = user.UserName;
            }.bind(this) });
        //this.user.token = typeof this._databaseModule.confirmToken
        //let cookie = document.cookie.match(/token\=[^;]*/)
        //let cookie = null
        //if (cookie != null) {
        //	this.user.token = cookie[0].replace(/token\=/, '')
        //} else {
        //CreateCookie()
        //}
        //
        //document.cookie = ''
        //this._cookieService.put('token', 'somevalue', {expires: date})
        //this.user.token = this._cookieService.get('token')
        //if (this.user.token) { this.debug = true }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ../resources/css/zennet/variables.css */ "./src/resources/css/zennet/variables.css"), __webpack_require__(/*! ../resources/css/zennet/general.css */ "./src/resources/css/zennet/general.css"), __webpack_require__(/*! ../resources/css/zennet/accessibility.css */ "./src/resources/css/zennet/accessibility.css"), __webpack_require__(/*! ../resources/css/zennet/content.css */ "./src/resources/css/zennet/content.css"), __webpack_require__(/*! ../resources/css/zennet/images.css */ "./src/resources/css/zennet/images.css"), __webpack_require__(/*! ../resources/css/zennet/shapes.css */ "./src/resources/css/zennet/shapes.css"), __webpack_require__(/*! ../resources/css/zennet/animated.css */ "./src/resources/css/zennet/animated.css"), __webpack_require__(/*! ../resources/css/zennet/variables.css */ "./src/resources/css/zennet/variables.css"), __webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _objects_database_database_module__WEBPACK_IMPORTED_MODULE_2__["DatabaseModule"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-cookie/services/cookies.service */ "./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _objects_database_database_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objects/database/database.module */ "./src/app/objects/database/database.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _accounts_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accounts/login/login.component */ "./src/app/accounts/login/login.component.ts");
/* harmony import */ var _accounts_user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accounts/user/user.component */ "./src/app/accounts/user/user.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _accounts_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _accounts_user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"]
            ],
            imports: [
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["RoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _objects_database_database_module__WEBPACK_IMPORTED_MODULE_4__["DatabaseModule"]
            ],
            providers: [angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _accounts_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accounts/login/login.component */ "./src/app/accounts/login/login.component.ts");
/* harmony import */ var _accounts_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accounts/user/user.component */ "./src/app/accounts/user/user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { "path": "login", "component": _accounts_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { "path": "admin", "component": _accounts_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/objects/database/database.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/objects/database/database.module.ts ***!
  \*****************************************************/
/*! exports provided: DatabaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseModule", function() { return DatabaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-cookie/core */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_core__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseModule = /** @class */ (function () {
    function DatabaseModule(_cookieService) {
        this._cookieService = _cookieService;
        //This script manages the database operations
        this.databaseReady = false;
        //User Variables
        this.user = {
            token: '',
            uid: -1,
            gid: 0,
            username: '',
            privillage: 0 //0 = General User, 1 = Group Admin, 2 = System Admin
        };
        //Token Database Stub
        this.tokens = [
            { TID: 0, UID: 0, Token: 'SomeToken', Date: '' }
        ];
        this.database = new /** @class */ (function () {
            function class_1() {
                //Init SQLite3
                //this.sqlite3 = require('sqlite3')
                /*this.sqlite3 = $SQLite
                this.connection = new this.sqlite3.Database('./database.db', function(error) {
                    if (error) {
                        console.log(ReferenceError("Unable to load database into memory, sqlite3 return [" + error + "]"))
                        return
                    }
                    
                    this.databaseReady = true
                    console.log("Database Loaded")
                })*/
            }
            class_1.prototype.select = function (args) {
                //Extract Arguments
                /*if (args == undefined) { return }
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
                }*/
            };
            return class_1;
        }());
        this.confirmToken = function (args) {
            //Extract Arguments
            if (args == undefined) {
                return;
            }
            var token = document.cookie.match(/token\=[^;]*/) || null;
            var callback = args.callback || null;
            //Check to see if callback given
            if (callback == null) {
                console.log(ReferenceError("Called database.getUser() without callback!"));
                return;
            }
            if (token == null) {
                callback({ isError: true });
                return;
            }
            this.user.token = token;
            callback({ isError: false });
        };
        /*this.account_lookup = {email: {}, username: {}}
        files.readJSONFile({filepath: __appPath + "/data/account_lookup.json", callback: function(error, data) {
            if (error == null) { this.account_lookup = data } else { console.log(ReferenceError("Unable to load account index database!")) }
        }.bind(this)})
        
        //Init Database
        this.bcrypt = require('bcrypt')
        this.database = require(__appPath + '/private/objects/zennet/database.js')
        
        console.log("User Script Loaded")*/
    }
    //Return individual user
    DatabaseModule.prototype.getUser = function (args) {
        /*//Extract Arguments
        if (args == undefined) { return }
        let query = args.query || null
        let callerId = args.callerId || null
        let callback = args.callback || null
        let basic = args.basic || true
        
        //Check to see if callback given
        if (callback == null) {
            console.log(ReferenceError("Called database.getUser() without callback!"))
            return
        }
        
        //Check to see if query given
        if (query == null) {
            callback("No query given")
            return
        }
        
        if (!basic && callerId == null) {
            callback("Requested full profile but no caller")
            return
        }
        
        args = {
            callback: callback,
            tables: ["Users"],
            statement: "WHERE UserName = $query OR Email = $query",
            variables: {$query: query}
        }
        
        if (basic) {
            args["columns"] = ["UID", "UserName", "Email"]
        } else {
            args["columns"] = ["UID", "UserName", "Email", "FirstName", "LastName", "DOB", "Address", "ImageID", "Private"]
        }
        
        this.database.select(args)*/
    };
    //Confirm login credentials, create new token
    DatabaseModule.prototype.confirmLogin = function (args) {
        /*//Extract Arguments
        if (args == undefined) { return }
        let login = args.login || null
        let password = args.password || null
        let callback = args.callback || null
        
        //Check to see if callback given
        if (callback == null) {
            console.log(ReferenceError("Called database.getUser() without callback!"))
            return
        }
        
        //Check to see if login given
        if (login == null) {
            callback("No login argument given")
            return
        }
        
        //Get User From Query
        this.getUser({query: login, callback: function(error, data) {
            if (error != null) {
                callback(error.code)
                return
            }
            
            if (data.length != 1) {
                callback("No valid entries found!")
                return
            }
            
            let user = data[0]
            user['isValid'] = true
            
            //Get Password
            args = {
                tables: ["Users"],
                columns: ["Password"],
                statement: "WHERE UID = $uid",
                variables: {$uid: user.UID}
            }
            
            args["callback"] = function(error, data) {
                if (error != null) {
                    callback(error.code)
                    return
                }
                
                if (data.length != 1) {
                    callback("No valid entries found!")
                    return
                }
                
                this.bcrypt.compare(password, data[0].Password, function(error, result) {
                    if (result) {
                        callback(null, user)
                        return
                    } else {
                        callback(null, new User())
                        return
                    }
                })
            }.bind(this)
            
            this.database.select(args)
        }.bind(this)})*/
    };
    //Collects all unused tokens and removes them from the database
    DatabaseModule.prototype.collectTokens = function () {
        console.log("Stub: userScript.collectTokens()");
    };
    //Checks the token provided
    DatabaseModule.prototype.authID = function (token) {
        console.log("Stub: userScript.authID()");
    };
    //Authorises to view full profile information
    DatabaseModule.prototype.authFullProfile = function (args) {
        /*//Extract Arguments
        if (args == undefined) { return }
        let token = args.token || null
        let userId = args.userId || null
        if (token == null || userId == null) { return {isValid: false, user: {UserName: "", Email: ""}} }
        
        console.log("Stub: userScript.authFull()")*/
    };
    //Creat Session
    DatabaseModule.prototype.login = function (account, password, callback) {
        //	    if (typeof callback == TypeEnum.Func) {
        //    		let accountID = this.account_lookup.email[account] || this.account_lookup.username[account]
        //    		if (accountID != undefined) {
        //    			files.readJSONFile("./data/" + accountID + "/account.json", function(error, data) {
        //    				if (error == null) {
        //    					let account = data
        //    					if (account.password == password) {
        //    					    	callback(true, {username: account.username, email: account.email})
        //    					} else {
        //    							callback(false, {username: "", email: ""})
        //    					}
        //    				} else {
        //    				    console.log(ReferenceError("User attempted to log into an account with id[" + accountID + "] but was unable to access the account database entry."))
        //    				    return {isValid: false, account: {username: "", email: ""}}
        //    				}
        //    			})
        //    		} else {
        //    			callback(false, {username: "", email: ""})
        //    		}
        //	    }
    };
    DatabaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [],
            providers: []
        }),
        __metadata("design:paramtypes", [angular2_cookie_core__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
    ], DatabaseModule);
    return DatabaseModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/resources/css/zennet/accessibility.css":
/*!****************************************************!*\
  !*** ./src/resources/css/zennet/accessibility.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tooltip .tooltiptext {\n    width: 120px;\n    background-color: black;\n    color: white;\n    font-size: var(--FontSize_Label);\n    font-family: sans-serif;\n    text-align: center;\n    border-radius: 4px;\n    padding: 6px 0;\n    display: none;\n\n    /* Position the tooltip */\n    position: fixed;\n    z-index: 1;\n}\n\n.tooltip:hover .tooltiptext {\n    display: inline;\n}"

/***/ }),

/***/ "./src/resources/css/zennet/animated.css":
/*!***********************************************!*\
  !*** ./src/resources/css/zennet/animated.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Animation Objects*/\n@keyframes luminate{\n\t0%{background: #311F04;}\n\t16%{background: #613E07;}\n\t32%{background: #915E0C;}\n\t45%{background: #C27D0E;}\n\t50%{background: #F39C12;}\n\t55%{background: #C27D0E;}\n\t67%{background: #915E0C;}\n\t83%{background: #613E07;}\n\t100%{background: #311F04;}\n}\n@-webkit-keyframes luminate{\n\t0%{background: #311F04;}\n\t16%{background: #613E07;}\n\t32%{background: #915E0C;}\n\t45%{background: #C27D0E;}\n\t50%{background: #F39C12;}\n\t55%{background: #C27D0E;}\n\t67%{background: #915E0C;}\n\t83%{background: #613E07;}\n\t100%{background: #311F04;}\n}\n.animation {\n\twidth: 100px;\n\theight: 100px;\n\tposition: absolute;\n\tleft: 50%;\n\tmargin-left: -50px;\n\ttop: 50%;\n\tmargin-top: -50px;\n}\n.ani-ld-hex{\n\theight: 30px;\n\twidth: 30px;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n}\n.ani-ld-hex.fra1 {\n\tmargin-left: -47px;\n\tmargin-top: -15px;\n}\n.fra1 > .shape > .hexagon {\n\tbackground: #613E07;\n\tanimation-name: luminate;\n\tanimation-duration: 1.5s;\n\tanimation-iteration-count: infinite;\n\tanimation-delay: 0s;\n\t-webkit-animation-name: luminate;\n\t-webkit-animation-duration: 1.5s;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-delay: 0s;\n}\n.ani-ld-hex.fra2 {\n\tmargin-left: -31px;\n\tmargin-top: -43px;\n}\n.fra2 > .shape > .hexagon {\n\tbackground: #613E07;\n\tanimation-name: luminate;\n\tanimation-duration: 1.5s;\n\tanimation-iteration-count: infinite;\n\tanimation-delay: 0.25s;\n\t-webkit-animation-name: luminate;\n\t-webkit-animation-duration: 1.5s;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-delay: 0.25s;\n}\n.ani-ld-hex.fra3 {\n\tmargin-left: 1px;\n\tmargin-top: -43px;\n}\n.fra3 > .shape > .hexagon {\n\tbackground: #613E07;\n\tanimation-name: luminate;\n\tanimation-duration: 1.5s;\n\tanimation-iteration-count: infinite;\n\tanimation-delay: 0.5s;\n\t-webkit-animation-name: luminate;\n\t-webkit-animation-duration: 1.5s;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-delay: 0.5s;\n}\n.ani-ld-hex.fra4 {\n\tmargin-left: 17px;\n\tmargin-top: -15px;\n}\n.fra4 > .shape > .hexagon {\n\tbackground: #613E07;\n\tanimation-name: luminate;\n\tanimation-duration: 1.5s;\n\tanimation-iteration-count: infinite;\n\tanimation-delay: 0.75s;\n\t-webkit-animation-name: luminate;\n\t-webkit-animation-duration: 1.5s;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-delay: 0.75s;\n}\n.ani-ld-hex.fra5 {\n\tmargin-left: 1px;\n\tmargin-top: 13px;\n}\n.fra5 > .shape > .hexagon {\n\tbackground: #613E07;\n\tanimation-name: luminate;\n\tanimation-duration: 1.5s;\n\tanimation-iteration-count: infinite;\n\tanimation-delay: 1s;\n\t-webkit-animation-name: luminate;\n\t-webkit-animation-duration: 1.5s;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-delay: 1s;\n}\n.ani-ld-hex.fra6 {\n\tmargin-left: -31px;\n\tmargin-top: 13px;\n}\n.fra6 > .shape > .hexagon {\n\tbackground: #613E07;\n\tanimation-name: luminate;\n\tanimation-duration: 1.5s;\n\tanimation-iteration-count: infinite;\n\tanimation-delay: 1.25s;\n\t-webkit-animation-name: luminate;\n\t-webkit-animation-duration: 1.5s;\n\t-webkit-animation-iteration-count: infinite;\n\t-webkit-animation-delay: 1.25s;\n}"

/***/ }),

/***/ "./src/resources/css/zennet/content.css":
/*!**********************************************!*\
  !*** ./src/resources/css/zennet/content.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*General Rules*/\n.text-header, .text-label, .text-body {\n\tcolor: var(--Color_Text);\n\ttext-decoration: none;\n}\n.text-header {\n\tmin-height: var(--FontSize_Heading1);\n\tfont-size: var(--FontSize_Heading1);\n\tline-height: calc(var(--FontSize_Heading1) + 8px);\n\ttext-align: center;\n}\n.text-label {\n\tmin-height: var(--FontSize_Label);\n\tfont-size: var(--FontSize_Label);\n\tline-height: calc(var(--FontSize_Label) + 8px);\n\ttext-align: center;\n}\n.text-body {\n\tmin-height: var(--FontSize_BodyText);\n\tfont-size: var(--FontSize_BodyText);\n\tline-height: calc(var(--FontSize_BodyText) + 8px);\n\ttext-align: left;\n}\n.paragraph, .textBox {\n\tcolor: black;\n\tbackground-color: white;\n\toverflow: auto;\n}\n/*Content Element*/\n.container {\n\tborder: var(--Border_Thickness) solid var(--Color_Primary);\n}\n.wrapper {\n\twidth: calc(100% - 16px);\n\theight: calc(100% - 16px);\n\tmargin: 8px;\n}\n.verticalAlign {\n\twidth: 100%;\n\tleft: 50%;\n\ttop: 50%;\n\t-webkit-transform: translate(-50%,-50%);\n\t        transform: translate(-50%,-50%);\n\tposition: absolute;\n}\n.paragraph {\n\twidth: calc(100% - 4px);\n\theight: calc(100% - 4px);\n\tpadding: 2px 2px 2px 2px;\n\twhite-space: pre-wrap;\n}\n.error {\n\tcolor: red;\n\tbackground: white;\n\twidth: calc(100% - 20px);\n\theight: calc(100% - 20px);\n\tpadding: 2px 2px 2px 2px;\n\tmargin: 8px;\n\twhite-space: pre-wrap;\n}\n.error > h2 {\n\theight: var(--FontSize_Heading1);\n\tfont-size: var(--FontSize_Heading1);\n\ttext-align: center;\n}\n.error > p {\n\theight: calc(100% - var(--FontSize_Heading1));\n\tfont-size: var(--FontSize_Label);\n\ttext-align: left;\n}\n/*Text Box Element*/\ndiv.textBox {\n\ttext-indent: 2px;\n\ttext-align: start;\n\tcursor: text;\n\t-webkit-user-modify: read-write-plaintext-only;\n\t-webkit-line-break: read-write-plaintext-only;\n\t-ms-line-break: read-write-plaintext-only;\n\t-moz-user-modify: read-write;\n}\n.textBox:empty:before {\n    content: attr(data-placeholder);\n    color: gray;\n}\n.textBox[type=\"password\"]:not(:empty) {\n\t-webkit-text-security: disc;\n}\n/*Input Field*/\n.input {\n    -ms-grid-columns: 160px 1fr;\n        grid-template-columns: 160px 1fr;\n    -ms-grid-rows: 1fr;\n        grid-template-rows: 1fr;\n    display: -ms-grid;\n    display: grid;\n}\n.input > .label {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 1;\n    grid-column: 1 / 2;\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n}\n.input > .textBox {\n    vertical-align: middle;\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 1;\n    grid-column: 2 / 3;\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n}\n/*Label Element*/\n.label {\n\toverflow: hidden;\n\tborder-color: var(--Color_Primary);\n}\n/*Button Element*/\n/*Button Sub Class*/\n.button {\n\tcolor: var(--Color_Text);\n\toverflow: hidden;\n\ttransition-duration: 0.4s;\n\tcursor: pointer;\n}\n/*Character Rules*/\n.vertical {\n\t-webkit-transform: rotate(0deg);\n\ttransform: rotate(0deg);\n}\n.horizontal {\n\t-webkit-transform: rotate(-90deg);\n\ttransform: rotate(-90deg);\n}\n"

/***/ }),

/***/ "./src/resources/css/zennet/general.css":
/*!**********************************************!*\
  !*** ./src/resources/css/zennet/general.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set HTML To Take Up Full Available Space */\nbody, html {\n\twidth: var(--MaxSize_IncludingBorder);\n\theight: var(--MaxSize_IncludingBorder);\n}\n/*Set Body For Sliding Menu*/\nbody {\n\ttop: 0px;\n\tleft: 0px;\n\tmargin: 0px;\n\tbackground-color: var(--Color_SecondaryLight);\n\twill-change: left;\n\toverflow: hidden;\n\tposition: absolute;\n\tz-index: -1;\n\t\n\t/* CSS Animation */\n\ttransition: left 0.2s;\n}\ndiv, form, label, button, a, i, h1, h2, li, p, input {\n\t/*Size Rules*/\n\twidth: var(--MaxSize_IncludingBorder);\n\theight: var(--MaxSize_IncludingBorder);\n\t\n\t/*Border Styling*/\n\tborder: none;\n\tborder-radius: var(--Border_Radius);\n    border-width: var(--Border_Thickness);\n\tborder-color: transparent;\n\t\n\t/*Override Browser Styling*/\n\twhite-space: normal;\n\tmargin: 0px;\n\tpadding: 0px;\n\t\n\t/*Positioning*/\n\tdisplay: inline-block;\n\tposition: relative;\n}\n*:focus {\n\toutline: none;\n}\n.primary {\n\tbackground-color: var(--Color_Primary);\n\tborder-color: var(--Color_Primary);\n}\n.primary:disabled {\n\tbackground-color: var(--Color_PrimaryDisabled);\n\tborder-color: var(--Color_PrimaryDisabled);\n}\n/*Sets Up Button Hover For When Mouse Is Hovering Over Button*/\n.primary-hover:not([disabled]):hover, .primary-hover:not([disabled]):active {\n\tbackground-color: var(--Color_PrimaryHover);\n\tborder-color: var(--Color_PrimaryHover);\n}\n.secondary {\n\tbackground-color: var(--Color_Secondary);\n\tborder-color: var(--Color_Secondary);\n}\n.secondary:disabled {\n\tbackground-color: var(--Color_SecondaryDisabled);\n\tborder-color: var(--Color_SecondaryDisabled);\n}\n/*Sets Up Button Hover For When Mouse Is Hovering Over Button*/\n.secondary-hover:not([disabled]):hover, .secondary-hover:not([disabled]):active {\n\tbackground-color: var(--Color_SecondaryHover);\n}\n/*Shadow Styling*/\n.shadow-hover:hover, .shadow-focus:focus {\n\tbox-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n}\n.shadow {\n\tbox-shadow: 0 3px 6px rgba(0,0,0,0.20), 0 3px 6px rgba(0,0,0,0.25);\n\ttransition: all 0.3s cubic-bezier(.25,.8,.25,1);\n}\n"

/***/ }),

/***/ "./src/resources/css/zennet/images.css":
/*!*********************************************!*\
  !*** ./src/resources/css/zennet/images.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Google Material Icon Pack */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');\n}\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n}\n.image {\n\tbackground-position: center;\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n\tdisplay: inline-block;\n}\n.image > img {\n\twidth: 100%;\n\theight: 100%;\n\t-o-object-fit: contain;\n\t   object-fit: contain;\n\toverflow: hidden;\n}\n.avatar {\n\twidth: 256px;\n\theight: 256px;\n}\n.icon {\n\twidth: var(--FontSize_Icons);\n\theight: var(--FontSize_Icons);\n}\n.fontIcon {\n\tfont-size: var(--FontSize_Icons);\n}"

/***/ }),

/***/ "./src/resources/css/zennet/shapes.css":
/*!*********************************************!*\
  !*** ./src/resources/css/zennet/shapes.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.shape {*/\n/*\toverflow: hidden;*/\n/*}*/\n/*.hexagon-top, .hexagon-middle, .hexagon-bottom {*/\n/*\tmargin: 0px;*/\n/*\tborder-radius: 0px;*/\n/*\tdisplay: block;*/\n/*}*/\n/*.hexagon-top, .hexagon-bottom {*/\n/*\ttop: -30px;*/\n/*\twidth: 0px;*/\n/*\theight: 30px;*/\n/*\tborder-left: 50px solid transparent;*/\n/*\tborder-right: 50px solid transparent;*/\n/*\tbackground: none;*/\n/*}*/\n/*.hexagon-top {*/\n/*    border-bottom-width: 30px;*/\n/*    border-bottom-style: solid;*/\n/*}*/\n/*.hexagon-middle {*/\n/*\ttop: -30px;*/\n/*\twidth: 100px;*/\n/*\theight: 60px;*/\n/*}*/\n/*.hexagon-bottom {*/\n/*    border-top-width: 30px;*/\n/*    border-top-style: solid;*/\n/*}*/\n.hexagon{\n\ttop: 25%;\n\twidth: 100%;\n\theight: 52%;\n\tposition: absolute;\n\tborder-radius: 0px;\n}\n.hexagon-2{\n\ttransform: rotate(60deg);\n\t-webkit-transform: rotate(60deg);\n}\n.hexagon-3{\n\ttransform: rotate(-60deg);\n\t-webkit-transform: rotate(-60deg);\n}"

/***/ }),

/***/ "./src/resources/css/zennet/variables.css":
/*!************************************************!*\
  !*** ./src/resources/css/zennet/variables.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Declare CSS Variables */\n:root {\n\t/* Font Styling */\n\t--FontSize_Heading1: 24pt;\n\t--FontFamily_Heading1: initial;\n\t--FontSize_Label: 18pt;\n\t--FontFamily_Label: initial;\n\t--FontSize_BodyText: 10pt;\n\t--FontFamily_BodyText: initial;\n\t--FontSize_Icons: 64px;\n\t\n\t/* Navigation Styling */\n\t--NavBar_Margin: 10px;\n\t--NavElement_Height: 110px;\n\t\n\t/* Color Styling */\n\t--Color_Primary: #DFDFDF;\n\t--Color_PrimaryHover: #FFFFFF;\n\t--Color_PrimaryDisabled: #BFBFBF;\n\t--Color_Secondary: #202020;\n\t--Color_SecondaryHover: #404040;\n\t--Color_SecondaryDisabled: #000000;\n\t--Color_Text: #000000;\n\t\n\t/* Border Styling */\n\t--Border_Radius: 12px;\n\t--Border_Thickness: 0px;\n\t--MaxSize_IncludingBorder: calc(100% - 2 * var(--Border_Thickness));\n}\n@media screen and (orientation: landscape) and (min-width: 769px)  {\n\t/* Desktop Port */\n\t:root {\n\t\t/* Navigation Styling */\n\t\t--NavBar_Size: 150px;\n\t\t--NavToggle_Size: 72px;\n\t}\n}\n@media screen and (orientation: portrait), screen and (max-width: 768px) {\n\t/* Mobile Port */\n\t:root {\n\t\t/* Navigation Styling */\n\t\t--NavBar_Size: 100%;\n\t\t--NavToggle_Size: 128px;\n\t}\n}"

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/l00k3/Downloads/Angular/assignment/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map