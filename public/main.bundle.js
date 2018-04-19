webpackJsonp([1,4],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
    }
    PostsService.prototype.getNotifications = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/posts/getnotifications', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getPosts = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/posts/getposts', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.addComment = function (comment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/posts/comment', comment, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.addPost = function (post) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/posts/post', post, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    PostsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], PostsService);
    return PostsService;
    var _a;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/posts.service.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/update', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/auth.service.js.map

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 394;


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(513);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/main.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(707),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/app.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_newsfeed_newsfeed_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_sidebar_sidebar_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_chat_chat_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_map_map_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_searchresult_searchresult_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_editprofile_editprofile_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_footer_footer_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_notifications_notifications_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_register_alumni_register_alumni_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_register_student_register_student_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_validate_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_posts_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__guards_unauth_guard__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_newpost_newpost_component__ = __webpack_require__(520);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



























var appRoutes = [
    { path: '', redirectTo: 'newsfeed', pathMatch: 'full' },
    { path: 'newsfeed', component: __WEBPACK_IMPORTED_MODULE_9__components_newsfeed_newsfeed_component__["a" /* NewsfeedComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'newpost', component: __WEBPACK_IMPORTED_MODULE_26__components_newpost_newpost_component__["a" /* NewpostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_unauth_guard__["a" /* UnAuthGuard */]] },
    { path: 'register-alumni', component: __WEBPACK_IMPORTED_MODULE_18__components_register_alumni_register_alumni_component__["a" /* RegisterAlumniComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_unauth_guard__["a" /* UnAuthGuard */]] },
    { path: 'register-student', component: __WEBPACK_IMPORTED_MODULE_19__components_register_student_register_student_component__["a" /* RegisterStudentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_unauth_guard__["a" /* UnAuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_unauth_guard__["a" /* UnAuthGuard */]] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_11__components_chat_chat_component__["a" /* ChatComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_12__components_map_map_component__["a" /* MapComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__["a" /* SearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'editprofile', component: __WEBPACK_IMPORTED_MODULE_15__components_editprofile_editprofile_component__["a" /* EditprofileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_17__components_notifications_notifications_component__["a" /* NotificationsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_newsfeed_newsfeed_component__["a" /* NewsfeedComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_searchresult_searchresult_component__["a" /* SearchresultComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_editprofile_editprofile_component__["a" /* EditprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_notifications_notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_register_alumni_register_alumni_component__["a" /* RegisterAlumniComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_register_student_register_student_component__["a" /* RegisterStudentComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_newpost_newpost_component__["a" /* NewpostComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_21__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_22__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_23__services_posts_service__["a" /* PostsService */], __WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_25__guards_unauth_guard__["a" /* UnAuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/app.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(708),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [])
    ], ChatComponent);
    return ChatComponent;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/chat.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditprofileComponent = (function () {
    function EditprofileComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    EditprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.email = profile.user.email;
            _this.major = profile.user.major;
            _this.research_area = profile.user.research_area;
            _this.university = profile.user.university;
            _this.city = profile.user.city;
            _this.state = profile.user.state;
            _this.country = profile.user.country;
            _this.link_facebook = profile.user.link_facebook;
            _this.link_linkedin = profile.user.link_linkedin;
            _this.link_twitter = profile.user.link_twitter;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    EditprofileComponent.prototype.onSaveSubmit = function () {
        var _this = this;
        var updatedUser = {
            email: this.email,
            password: this.password,
            major: this.major,
            research_area: this.research_area,
            university: this.university,
            city: this.city,
            state: this.state,
            country: this.country,
            link_facebook: this.link_facebook,
            link_linkedin: this.link_linkedin,
            link_twitter: this.link_twitter
        };
        // Update User
        this.authService.updateUser(updatedUser).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('User updated', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/editprofile']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/editprofile']);
            }
        });
    };
    EditprofileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editprofile',
            template: __webpack_require__(709),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], EditprofileComponent);
    return EditprofileComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/editprofile.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(authService) {
        this.authService = authService;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(710),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], FooterComponent);
    return FooterComponent;
    var _a;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/footer.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000 });
                _this.router.navigate(['newsfeed']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(711),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/login.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(712),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [])
    ], MapComponent);
    return MapComponent;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/map.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(713),
            styles: [__webpack_require__(697)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_posts_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewpostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewpostComponent = (function () {
    function NewpostComponent(validateService, flashMessage, authService, postsService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.postsService = postsService;
        this.router = router;
    }
    NewpostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user_id = profile.user._id;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    NewpostComponent.prototype.onPostSubmit = function () {
        var _this = this;
        var newPost = {
            user_id: this.user_id,
            message: this.message
        };
        // add Comment
        this.postsService.addPost(newPost).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Message Posted', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/newsfeed']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/newsfeed']);
            }
        });
    };
    NewpostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newpost',
            template: __webpack_require__(714),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_posts_service__["a" /* PostsService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], NewpostComponent);
    return NewpostComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/newpost.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_posts_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsfeedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewsfeedComponent = (function () {
    function NewsfeedComponent(validateService, flashMessage, authService, postsService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.postsService = postsService;
        this.router = router;
    }
    NewsfeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getPosts().subscribe(function (data) {
            _this.posts = data.posts;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.authService.getProfile().subscribe(function (profile) {
            _this.user_id = profile.user._id;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    NewsfeedComponent.prototype.onCommentSubmit = function (post_id, comment) {
        var _this = this;
        var newComment = {
            post_id: post_id,
            user_id: this.user_id,
            comment_msg: comment
        };
        // Add Comment
        this.postsService.addComment(newComment).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Comment Posted', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/newsfeed']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/newsfeed']);
            }
        });
        // Force Refresh
        this.postsService.getPosts().subscribe(function (data) {
            _this.posts = data.posts;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    NewsfeedComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newsfeed',
            template: __webpack_require__(715),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_posts_service__["a" /* PostsService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], NewsfeedComponent);
    return NewsfeedComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/newsfeed.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_posts_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificationsComponent = (function () {
    function NotificationsComponent(validateService, flashMessage, authService, postsService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.postsService = postsService;
        this.router = router;
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user_id = profile.user._id;
            var user = {
                user_id: _this.user_id
            };
            _this.postsService.getNotifications(user).subscribe(function (data) {
                _this.notifications = data.notifications;
            }, function (err) {
                console.log(err);
                return false;
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    NotificationsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(716),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_posts_service__["a" /* PostsService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], NotificationsComponent);
    return NotificationsComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/notifications.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterAlumniComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterAlumniComponent = (function () {
    function RegisterAlumniComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterAlumniComponent.prototype.ngOnInit = function () {
    };
    RegisterAlumniComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            fname: this.fname,
            lname: this.lname,
            email: this.email,
            password: this.password,
            is_alumni: true,
            major: this.major,
            research_area: this.research_area,
            grad_year: this.grad_year,
            university: this.university,
            city: this.city,
            state: this.state,
            country: this.country,
            link_facebook: this.link_facebook,
            link_linkedin: this.link_linkedin,
            link_twitter: this.link_twitter
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterAlumniComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-alumni',
            template: __webpack_require__(717),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterAlumniComponent);
    return RegisterAlumniComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/register-alumni.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterStudentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterStudentComponent = (function () {
    function RegisterStudentComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterStudentComponent.prototype.ngOnInit = function () {
    };
    RegisterStudentComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            fname: this.fname,
            lname: this.lname,
            email: this.email,
            password: this.password,
            is_alumni: false,
            major: this.major,
            research_area: this.research_area,
            grad_year: this.grad_year,
            university: "Lahore University Of Management Sciences",
            city: "Lahore",
            state: "",
            country: "Pakistan",
            link_facebook: this.link_facebook,
            link_linkedin: this.link_linkedin,
            link_twitter: this.link_twitter
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterStudentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-student',
            template: __webpack_require__(718),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterStudentComponent);
    return RegisterStudentComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/register-student.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.options = [
            { value: 'student', viewValue: 'Student' },
            { value: 'alumni', viewValue: 'Alumni' }
        ];
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSelectSubmit = function () {
        if (this.status == "alumni") {
            this.router.navigate(['/register-alumni']);
        }
        else {
            this.router.navigate(['/register-student']);
        }
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(719),
            styles: [__webpack_require__(703)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/register.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(720),
            styles: [__webpack_require__(704)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/search.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchresultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchresultComponent = (function () {
    function SearchresultComponent() {
    }
    SearchresultComponent.prototype.ngOnInit = function () {
    };
    SearchresultComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-searchresult',
            template: __webpack_require__(721),
            styles: [__webpack_require__(705)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchresultComponent);
    return SearchresultComponent;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/searchresult.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = (function () {
    function SidebarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(722),
            styles: [__webpack_require__(706)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a, _b;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/sidebar.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnAuthGuard = (function () {
    function UnAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    UnAuthGuard.prototype.canActivate = function () {
        if (!this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/newsfeed']);
            return false;
        }
    };
    UnAuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], UnAuthGuard);
    return UnAuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/unauth.guard.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/environment.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.fname == undefined || user.lname == undefined || user.email == undefined || user.password == undefined || user.major == undefined || user.research_area == undefined || user.grad_year == undefined || user.university == undefined || user.city == undefined || user.country == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/root/Documents/Courses/SE/Project/alumnet/angular-src/src/validate.service.js.map

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = ".comment-form {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  font-size: 10px;\n}\n\n.btn-comment {\n  font-size: 10px;\n}\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<flash-messages></flash-messages>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content d-flex align-items-stretch\">\n  <!-- Sidebar -->\n  <app-sidebar></app-sidebar>\n  <!-- Content -->\n  <div class=\"content-inner\">\n    <!-- Page Header-->\n    <header class=\"page-header\">\n      <div class=\"container-fluid\">\n        <h2 class=\"no-margin-bottom\">Chat</h2>\n      </div>\n    </header>\n\n    <!-- Footer -->\n    <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" class=\"page-content d-flex align-items-stretch\">\n  <!-- Sidebar -->\n  <app-sidebar></app-sidebar>\n  <!-- Content -->\n  <div class=\"content-inner\">\n    <!-- Page Header-->\n    <header class=\"page-header\">\n      <div class=\"container-fluid\">\n        <h2 class=\"no-margin-bottom\">Edit Profile</h2>\n      </div>\n    </header>\n\n    <div class=\"client card\">\n      <div class=\"card-body text-center\">\n        <div class=\"client-avatar\"><img src=\"assets/img/ghani_pic.jpg\" alt=\"...\" class=\"img-fluid rounded-circle\">\n          <div class=\"status bg-green\"></div>\n        </div>\n        <div class=\"client-title\">\n          <h3>{{user.name.first_name}} {{user.name.last_name}}</h3>\n          <span *ngIf=\"user.is_alumni === true\">Alumni</span>\n          <span *ngIf=\"user.is_alumni === false\">Student</span>\n        </div>\n      </div>\n    </div>\n\n\n    <section class=\"forms\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <!-- Horizontal Form-->\n          <div class=\"col-lg-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <form *ngIf=\"user.is_alumni === true\" class=\"form-horizontal\" (submit)=\"onSaveSubmit()\">\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 form-control-label\">Email</label>\n                    <div class=\"col-sm-9\">\n                      <input type=\"text\" [(ngModel)]=\"user.email\" [ngModelOptions]=\"{standalone: true}\" disabled class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 form-control-label\">Password</label>\n                    <div class=\"col-sm-9\">\n                      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 form-control-label\">Major</label>\n                    <div class=\"col-sm-9\">\n                      <input type=\"text\" [(ngModel)]=\"major\" name=\"major\" class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 form-control-label\">Research Area</label>\n                    <div class=\"col-sm-9\">\n                      <input type=\"text\" [(ngModel)]=\"research_area\" name=\"research_area\" class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 form-control-label\">University</label>\n                    <div class=\"col-sm-9\">\n                      <input type=\"text\" [(ngModel)]=\"university\" name=\"university\" class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 form-control-label\">City</label>\n                    <div class=\"col-sm-9\">\n                      <input type=\"text\" [(ngModel)]=\"city\" name=\"city\" class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 form-control-label\">State</label>\n                    <div class=\"col-sm-9\">\n                      <input type=\"text\" [(ngModel)]=\"state\" name=\"state\" class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 form-control-label\">Country</label>\n                    <div class=\"col-sm-9\">\n                      <input type=\"text\" [(ngModel)]=\"country\" name=\"country\" class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 form-control-label\">Facebook</label>\n                    <div class=\"col-sm-9\">\n                      <input type=\"text\" [(ngModel)]=\"link_facebook\" name=\"link_facebook\" class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 form-control-label\">Twitter</label>\n                    <div class=\"col-sm-9\">\n                      <input type=\"text\" [(ngModel)]=\"link_twitter\" name=\"link_twitter\" class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 form-control-label\">Linkedin</label>\n                    <div class=\"col-sm-9\">\n                      <input type=\"text\" [(ngModel)]=\"link_linkedin\" name=\"link_linkedin\" class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <div class=\"col-sm-9 offset-sm-3\">\n                      <input type=\"submit\" value=\"Save Changes\" class=\"btn btn-primary\">\n                    </div>\n                  </div>\n                </form>\n\n                <form *ngIf=\"user.is_alumni === false\" class=\"form-horizontal\" (submit)=\"onSaveSubmit()\">\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 form-control-label\">Email</label>\n                    <div class=\"col-sm-9\">\n                      <input type=\"text\" [(ngModel)]=\"user.email\" [ngModelOptions]=\"{standalone: true}\" disabled class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 form-control-label\">Password</label>\n                    <div class=\"col-sm-9\">\n                      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 form-control-label\">Major</label>\n                    <div class=\"col-sm-9\">\n                      <input type=\"text\" [(ngModel)]=\"major\" name=\"major\" class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 form-control-label\">Research Area</label>\n                    <div class=\"col-sm-9\">\n                      <input type=\"text\" [(ngModel)]=\"research_area\" name=\"research_area\" class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 form-control-label\">Facebook</label>\n                    <div class=\"col-sm-9\">\n                      <input type=\"text\" [(ngModel)]=\"link_facebook\" name=\"link_facebook\" class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 form-control-label\">Twitter</label>\n                    <div class=\"col-sm-9\">\n                      <input type=\"text\" [(ngModel)]=\"link_twitter\" name=\"link_twitter\" class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 form-control-label\">Linkedin</label>\n                    <div class=\"col-sm-9\">\n                      <input type=\"text\" [(ngModel)]=\"link_linkedin\" name=\"link_linkedin\" class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <div class=\"col-sm-9 offset-sm-3\">\n                      <input type=\"submit\" value=\"Save Changes\" class=\"btn btn-primary\">\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Footer -->\n    <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<!-- Page Footer-->\n<footer *ngIf=\"authService.loggedIn()\" class=\"main-footer\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <p>Lahore University Of Management Sciences &copy; 2017-2018</p>\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <p>LUMS Alumni Relations Office</p>\n        <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n  <div class=\"container d-flex align-items-center\">\n    <div class=\"form-holder has-shadow\">\n      <div class=\"row\">\n        <!-- Logo & Information Panel-->\n        <div class=\"col-lg-6\">\n          <div class=\"info d-flex align-items-center\">\n            <div class=\"content\">\n              <div class=\"logo\">\n                <h1>AlumNET</h1>\n              </div>\n              <p>Connecting Lums Community</p>\n            </div>\n          </div>\n        </div>\n        <!-- Form Panel -->\n        <div class=\"col-lg-6 bg-white\">\n          <div class=\"form d-flex align-items-center\">\n            <div class=\"content\">\n              <!-- Form -->\n              <form id=\"login-form\" (submit)=\"onLoginSubmit()\">\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"input-material\">\n                  <label class=\"label-material\">Email</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"input-material\">\n                  <label class=\"label-material\">Password</label>\n                </div>\n\n                <input type=\"submit\" value=\"Login\" class=\"btn btn-primary\">\n              </form>\n\n              <a href=\"#\" class=\"forgot-pass\">Forgot Password?</a>\n              <br>\n              <small>Do not have an account? </small>\n              <a [routerLink]=\"['/register']\" class=\"signup\">Signup</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"copyrights text-center\">\n    <p>© 2017-2018 | Lahore University Of Management Sciences\n      <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content d-flex align-items-stretch\">\n  <!-- Sidebar -->\n  <app-sidebar></app-sidebar>\n  <!-- Content -->\n  <div class=\"content-inner\">\n    <!-- Page Header-->\n    <header class=\"page-header\">\n      <div class=\"container-fluid\">\n        <h2 class=\"no-margin-bottom\">Map</h2>\n      </div>\n    </header>\n\n    <!-- Footer -->\n    <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <nav class=\"navbar\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-holder d-flex align-items-center justify-content-between\">\n        <!-- Navbar Header-->\n        <div class=\"navbar-header\">\n          <!-- Navbar Brand -->\n          <a [routerLink]=\"['/']\" class=\"navbar-brand\">\n            <div class=\"brand-text brand-big\"><span>AlumNET</span></div>\n          </a>\n        </div>\n\n        <!-- Navbar Menu -->\n        <ul class=\"nav-menu list-unstyled d-flex flex-md-row align-items-md-center\">\n          <!-- Logout    -->\n          <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\"><a (click)=\"onLogoutClick()\" href=\"#\" class=\"nav-link logout\">Logout<i class=\"fa fa-sign-out\"></i></a></li>\n        </ul>\n\n      </div>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content d-flex align-items-stretch\">\n  <!-- Sidebar -->\n  <app-sidebar></app-sidebar>\n  <!-- Content -->\n  <div class=\"content-inner\">\n    <!-- Page Header-->\n    <header class=\"page-header\">\n      <div class=\"container-fluid\">\n        <h2 class=\"no-margin-bottom\">New Post</h2>\n      </div>\n    </header>\n\n    <section class=\"forms\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <!-- Horizontal Form-->\n          <div class=\"col-lg-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <form (submit)=\"onPostSubmit()\">\n\n                  <div class=\"form-group row\">\n                    <div class=\"col-sm-12\">\n                      <textarea [(ngModel)]=\"message\" name=\"message\" class=\"form-control\"></textarea>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <div class=\"col-sm-12\" style=\"text-align:center\">\n                      <input type=\"submit\" value=\"Post\" class=\"btn btn-primary\">\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Footer -->\n    <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"posts\" class=\"page-content d-flex align-items-stretch\">\n  <!-- Sidebar -->\n  <app-sidebar></app-sidebar>\n  <!-- Content -->\n  <div class=\"content-inner\">\n    <!-- Page Header-->\n    <header class=\"page-header\">\n      <div class=\"container-fluid row\">\n        <div class=\"col-sm-11\">\n          <h2 class=\"no-margin-bottom\">Newsfeed</h2>\n        </div>\n        <div class=\"col-sm-1\">\n          <a [routerLink]=\"['/newpost']\"><button class=\"btn btn-primary\">New Post</button></a>\n        </div>\n\n      </div>\n\n    </header>\n\n    <div class=\"daily-feeds card\">\n      <div class=\"card-body no-padding\">\n\n        <!-- Items -->\n        <div *ngFor=\"let post of posts\" class=\"item clearfix\">\n          <!-- Post -->\n          <div class=\"feed d-flex justify-content-between\">\n            <div class=\"feed-body d-flex justify-content-between\">\n              <!-- Image -->\n              <a href=\"#\" class=\"feed-profile\"><img src=\"assets/img/ghani_pic.jpg\" alt=\"person\" class=\"img-fluid rounded-circle\"></a>\n              <!-- Post Message -->\n              <div class=\"content\">\n                <h5>{{post.user_name}}</h5><span>{{post.message}}</span>\n              </div>\n            </div>\n            <!-- Date -->\n            <div class=\"date text-right\">\n              <small>{{post.created_at}}</small>\n            </div>\n          </div>\n\n          <!-- Comments -->\n          <div *ngFor=\"let comment of post.comments\" class=\"quote has-shadow\">\n            <h6>{{comment.user_name}} : </h6> <small>{{comment.message}}</small>\n            <!-- Date -->\n            <div class=\"date text-right\">\n              <small>{{comment.created_at}}</small>\n            </div>\n          </div>\n\n          <!-- Comment Form -->\n          <div class=\"comment-form quote has-shadow\">\n            <form>\n              <div class=\"form-group row\">\n                <div class=\"col-sm-11\">\n                  <input type=\"text\" [(ngModel)]=\"post.temp_comment\" placeholder=\"comment\" name=\"comment\" class=\"input-material\">\n                </div>\n                <div class=\"col-sm-1\">\n                  <button (click)=\"onCommentSubmit(post._id, post.temp_comment)\" class=\"btn btn-comment btn-primary\">Comment</button>\n                </div>\n              </div>\n\n            </form>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <!-- Footer -->\n    <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"notifications\" class=\"page-content d-flex align-items-stretch\">\n  <!-- Sidebar -->\n  <app-sidebar></app-sidebar>\n  <!-- Content -->\n  <div class=\"content-inner\">\n    <!-- Page Header-->\n    <header class=\"page-header\">\n      <div class=\"container-fluid\">\n        <h2 class=\"no-margin-bottom\">Notifications</h2>\n      </div>\n    </header>\n\n      <div class=\"daily-feeds card\">\n        <div class=\"card-body no-padding\">\n\n          <!-- Item -->\n          <div *ngFor=\"let notification of notifications.notifications\" class=\"item clearfix\">\n            <div class=\"notification\">\n              <div class=\"notification-content d-flex justify-content-between\">\n                <div><i class=\"icon-padnote\"></i>  {{notification.message}} </div>\n                <div class=\"notification-time text-right\"><small>{{notification.created_at}}</small></div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    <!-- Footer -->\n    <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n  <div class=\"container d-flex align-items-center\">\n    <div class=\"form-holder has-shadow\">\n      <div class=\"row\">\n        <!-- Logo & Information Panel-->\n        <div class=\"col-lg-6\">\n          <div class=\"info d-flex align-items-center\">\n            <div class=\"content\">\n              <div class=\"logo\">\n                <h1>AlumNET</h1>\n              </div>\n              <p>Connecting Lums Community</p>\n            </div>\n          </div>\n        </div>\n        <!-- Form Panel    -->\n        <div class=\"col-lg-6 bg-white\">\n          <div class=\"form d-flex align-items-center\">\n            <div class=\"content\">\n\n              <!-- Form -->\n              <form id=\"register-form\" (submit)=\"onRegisterSubmit()\">\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"fname\" name=\"fname\" class=\"input-material\">\n                  <label class=\"label-material\">First Name</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"lname\" name=\"lname\" class=\"input-material\">\n                  <label class=\"label-material\">Last Name</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"input-material\">\n                  <label class=\"label-material\">Email</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"input-material\">\n                  <label class=\"label-material\">Password</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"major\" name=\"major\" class=\"input-material\">\n                  <label class=\"label-material\">Major</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"research_area\" name=\"research_area\" class=\"input-material\">\n                  <label class=\"label-material\">Research Area</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"grad_year\" name=\"grad_year\" class=\"input-material\">\n                  <label class=\"label-material\">Graduation Year</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"university\" name=\"university\" class=\"input-material\">\n                  <label class=\"label-material\">University</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"city\" name=\"city\" class=\"input-material\">\n                  <label class=\"label-material\">City</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"state\" name=\"state\" class=\"input-material\">\n                  <label class=\"label-material\">State</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"country\" name=\"country\" class=\"input-material\">\n                  <label class=\"label-material\">Country</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"link_facebook\" name=\"link_facebook\" class=\"input-material\">\n                  <label class=\"label-material\">Facebook</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"link_twitter\" name=\"link_twitter\" class=\"input-material\">\n                  <label class=\"label-material\">Twitter</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"link_linkedin\" name=\"link_linkedin\" class=\"input-material\">\n                  <label class=\"label-material\">Linkedin</label>\n                </div>\n\n                <input type=\"submit\" value=\"Register\" class=\"btn btn-primary\">\n              </form>\n\n              <small>Already have an account? </small><a [routerLink]=\"['/login']\" class=\"signup\">Login</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"copyrights text-center\">\n    <p>© 2017-2018 | Lahore University Of Management Sciences\n      <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n  <div class=\"container d-flex align-items-center\">\n    <div class=\"form-holder has-shadow\">\n      <div class=\"row\">\n        <!-- Logo & Information Panel-->\n        <div class=\"col-lg-6\">\n          <div class=\"info d-flex align-items-center\">\n            <div class=\"content\">\n              <div class=\"logo\">\n                <h1>AlumNET</h1>\n              </div>\n              <p>Connecting Lums Community</p>\n            </div>\n          </div>\n        </div>\n        <!-- Form Panel    -->\n        <div class=\"col-lg-6 bg-white\">\n          <div class=\"form d-flex align-items-center\">\n            <div class=\"content\">\n\n              <!-- Form -->\n              <form id=\"register-form\" (submit)=\"onRegisterSubmit()\">\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"fname\" name=\"fname\" class=\"input-material\">\n                  <label class=\"label-material\">First Name</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"lname\" name=\"lname\" class=\"input-material\">\n                  <label class=\"label-material\">Last Name</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"input-material\">\n                  <label class=\"label-material\">Email</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"input-material\">\n                  <label class=\"label-material\">Password</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"major\" name=\"major\" class=\"input-material\">\n                  <label class=\"label-material\">Major</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"research_area\" name=\"research_area\" class=\"input-material\">\n                  <label class=\"label-material\">Research Area</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"grad_year\" name=\"grad_year\" class=\"input-material\">\n                  <label class=\"label-material\">Graduation Year</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"link_facebook\" name=\"link_facebook\" class=\"input-material\">\n                  <label class=\"label-material\">Facebook</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"link_twitter\" name=\"link_twitter\" class=\"input-material\">\n                  <label class=\"label-material\">Twitter</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"link_linkedin\" name=\"link_linkedin\" class=\"input-material\">\n                  <label class=\"label-material\">Linkedin</label>\n                </div>\n\n                <input type=\"submit\" value=\"Register\" class=\"btn btn-primary\">\n              </form>\n\n              <small>Already have an account? </small><a [routerLink]=\"['/login']\" class=\"signup\">Login</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"copyrights text-center\">\n    <p>© 2017-2018 | Lahore University Of Management Sciences\n      <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n  <div class=\"container d-flex align-items-center\">\n    <div class=\"form-holder has-shadow\">\n      <div class=\"row\">\n        <!-- Logo & Information Panel-->\n        <div class=\"col-lg-6\">\n          <div class=\"info d-flex align-items-center\">\n            <div class=\"content\">\n              <div class=\"logo\">\n                <h1>AlumNET</h1>\n              </div>\n              <p>Connecting Lums Community</p>\n            </div>\n          </div>\n        </div>\n        <!-- Form Panel    -->\n        <div class=\"col-lg-6 bg-white\">\n          <div class=\"form d-flex align-items-center\">\n            <div class=\"content\">\n\n              <!-- Form -->\n              <form id=\"register-form\" (submit)=\"onSelectSubmit()\">\n\n\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-3 form-control-label\">You Are?</label>\n                  <div class=\"col-sm-9 select\">\n                    <select [(ngModel)]=\"status\" name=\"status\" class=\"form-control\">\n                      <option *ngFor=\"let o of options\" [ngValue]=\"o.value\">\n                        {{o.viewValue}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n\n                <input type=\"submit\" value=\"Select\" class=\"btn btn-primary\">\n              </form>\n              <br>\n              <small>Already have an account? </small><a [routerLink]=\"['/login']\" class=\"signup\">Login</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"copyrights text-center\">\n    <p>© 2017-2018 | Lahore University Of Management Sciences\n      <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content d-flex align-items-stretch\">\n  <!-- Sidebar -->\n  <app-sidebar></app-sidebar>\n  <!-- Content -->\n  <div class=\"content-inner\">\n    <!-- Page Header-->\n    <header class=\"page-header\">\n      <div class=\"container-fluid\">\n        <h2 class=\"no-margin-bottom\">Search</h2>\n      </div>\n    </header>\n\n    <!-- Footer -->\n    <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<p>\n  searchresult works!\n</p>\n"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "<!-- Side Navbar -->\n<nav class=\"side-navbar\">\n  <!-- Sidebar Header-->\n  <div class=\"sidebar-header d-flex align-items-center\">\n    <a [routerLink]=\"['/editprofile']\"><div class=\"avatar\"><img src=\"assets/img/ghani_pic.jpg\" alt=\"...\" class=\"img-fluid rounded-circle\"></div></a>\n    <div class=\"title\">\n      <h1 *ngIf=\"user\" class=\"h4\">{{user.name.last_name}}</h1>\n    </div>\n  </div>\n  <!-- Sidebar Navigations-->\n  <ul class=\"list-unstyled\">\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/newsfeed']\"> <i class=\"icon-home\"></i>Newsfeed</a></li>\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/notifications']\"> <i class=\"fa fa-bell-o\"></i>Notifications</a></li>\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/chat']\"> <i class=\"icon-mail\"></i>Messages</a></li>\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/search']\"> <i class=\"icon-search\"></i>Search</a></li>\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/map']\"> <i class=\"icon-grid\"></i>Map</a></li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(395);


/***/ })

},[760]);
//# sourceMappingURL=main.bundle.map