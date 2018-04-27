webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;
var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
        this.yScrollStack = [];
    }
    AppComponent.prototype.hasScrolled = function () {
        var st = window.pageYOffset;
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        var navbar = document.getElementsByTagName('nav')[0];
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (navbar.classList.contains('nav-down')) {
                navbar.classList.remove('nav-down');
                navbar.classList.add('nav-up');
            }
            // $('.navbar.nav-down').removeClass('nav-down').addClass('nav-up');
        }
        else {
            // Scroll Up
            //  $(window).height()
            if (st + window.innerHeight < document.body.scrollHeight) {
                // $('.navbar.nav-up').removeClass('nav-up').addClass('nav-down');
                if (navbar.classList.contains('nav-up')) {
                    navbar.classList.remove('nav-up');
                    navbar.classList.add('nav-down');
                }
            }
        }
        lastScrollTop = st;
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        if (this.location.path() !== '/sections') {
            this.location.subscribe(function (ev) {
                _this.lastPoppedUrl = ev.url;
            });
            this.router.events.subscribe(function (event) {
                if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                    if (event.url != _this.lastPoppedUrl)
                        _this.yScrollStack.push(window.scrollY);
                }
                else if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]) {
                    if (event.url == _this.lastPoppedUrl) {
                        _this.lastPoppedUrl = undefined;
                        window.scrollTo(0, _this.yScrollStack.pop());
                    }
                    else
                        window.scrollTo(0, 0);
                }
            });
        }
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.navbar.sidebarClose();
            _this.renderer.listenGlobal('window', 'scroll', function (event) {
                var number = window.scrollY;
                var _location = _this.location.path();
                _location = _location.split('/')[2];
                if (_this.location.path() !== '/sections') {
                    if (number > 150 || window.pageYOffset > 150) {
                        // add logic
                        navbar.classList.remove('navbar-transparent');
                    }
                    else if (_location !== 'addproduct' && _location !== 'blogposts' && _location !== 'discover' && _location !== 'contactus' && _location !== 'login' && _location !== 'register' && _location !== 'search' && _this.location.path() !== '/nucleoicons') {
                        // remove logic
                        navbar.classList.add('navbar-transparent');
                    }
                }
            });
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
        this.hasScrolled();
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */])
    ], AppComponent.prototype, "navbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "hasScrolled", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DOCUMENT"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sections_sections_module__ = __webpack_require__("../../../../../src/app/sections/sections.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__("../../../../../src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__examples_examples_module__ = __webpack_require__("../../../../../src/app/examples/examples.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__presentation_presentation_module__ = __webpack_require__("../../../../../src/app/presentation/presentation.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
 // this is needed!











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shared_navbar_navbar_component__["a" /* NavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__presentation_presentation_module__["a" /* PresentationModule */],
                __WEBPACK_IMPORTED_MODULE_6__sections_sections_module__["a" /* SectionsModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_8__examples_examples_module__["a" /* ExamplesModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__presentation_presentation_component__ = __webpack_require__("../../../../../src/app/presentation/presentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_component__ = __webpack_require__("../../../../../src/app/components/components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sections_sections_component__ = __webpack_require__("../../../../../src/app/sections/sections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__examples_aboutus_aboutus_component__ = __webpack_require__("../../../../../src/app/examples/aboutus/aboutus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__examples_addproduct_addproduct_component__ = __webpack_require__("../../../../../src/app/examples/addproduct/addproduct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__examples_blogpost_blogpost_component__ = __webpack_require__("../../../../../src/app/examples/blogpost/blogpost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__examples_blogposts_blogposts_component__ = __webpack_require__("../../../../../src/app/examples/blogposts/blogposts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__examples_contactus_contactus_component__ = __webpack_require__("../../../../../src/app/examples/contactus/contactus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__examples_discover_discover_component__ = __webpack_require__("../../../../../src/app/examples/discover/discover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__examples_ecommerce_ecommerce_component__ = __webpack_require__("../../../../../src/app/examples/ecommerce/ecommerce.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__examples_landing_landing_component__ = __webpack_require__("../../../../../src/app/examples/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__examples_login_login_component__ = __webpack_require__("../../../../../src/app/examples/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__examples_productpage_productpage_component__ = __webpack_require__("../../../../../src/app/examples/productpage/productpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__examples_profile_profile_component__ = __webpack_require__("../../../../../src/app/examples/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__examples_register_register_component__ = __webpack_require__("../../../../../src/app/examples/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__examples_search_search_component__ = __webpack_require__("../../../../../src/app/examples/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__examples_settings_settings_component__ = __webpack_require__("../../../../../src/app/examples/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__examples_twitter_twitter_component__ = __webpack_require__("../../../../../src/app/examples/twitter/twitter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__examples_page404_page404_component__ = __webpack_require__("../../../../../src/app/examples/page404/page404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__examples_page422_page422_component__ = __webpack_require__("../../../../../src/app/examples/page422/page422.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__examples_page500_page500_component__ = __webpack_require__("../../../../../src/app/examples/page500/page500.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_nucleoicons_nucleoicons_component__ = __webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var routes = [
    { path: 'presentation', component: __WEBPACK_IMPORTED_MODULE_4__presentation_presentation_component__["a" /* PresentationComponent */] },
    { path: 'components', component: __WEBPACK_IMPORTED_MODULE_5__components_components_component__["a" /* ComponentsComponent */] },
    { path: 'sections', component: __WEBPACK_IMPORTED_MODULE_6__sections_sections_component__["a" /* SectionsComponent */] },
    { path: 'nucleoicons', component: __WEBPACK_IMPORTED_MODULE_25__components_nucleoicons_nucleoicons_component__["a" /* NucleoiconsComponent */] },
    { path: 'examples/aboutus', component: __WEBPACK_IMPORTED_MODULE_7__examples_aboutus_aboutus_component__["a" /* AboutusComponent */] },
    { path: 'examples/addproduct', component: __WEBPACK_IMPORTED_MODULE_8__examples_addproduct_addproduct_component__["a" /* AddproductComponent */] },
    { path: 'examples/blogpost', component: __WEBPACK_IMPORTED_MODULE_9__examples_blogpost_blogpost_component__["a" /* BlogpostComponent */] },
    { path: 'examples/blogposts', component: __WEBPACK_IMPORTED_MODULE_10__examples_blogposts_blogposts_component__["a" /* BlogpostsComponent */] },
    { path: 'examples/contactus', component: __WEBPACK_IMPORTED_MODULE_11__examples_contactus_contactus_component__["a" /* ContactusComponent */] },
    { path: 'examples/discover', component: __WEBPACK_IMPORTED_MODULE_12__examples_discover_discover_component__["a" /* DiscoverComponent */] },
    { path: 'examples/ecommerce', component: __WEBPACK_IMPORTED_MODULE_13__examples_ecommerce_ecommerce_component__["a" /* EcommerceComponent */] },
    { path: 'examples/landing', component: __WEBPACK_IMPORTED_MODULE_14__examples_landing_landing_component__["a" /* LandingComponent */] },
    { path: 'examples/login', component: __WEBPACK_IMPORTED_MODULE_15__examples_login_login_component__["a" /* LoginComponent */] },
    { path: 'examples/productpage', component: __WEBPACK_IMPORTED_MODULE_16__examples_productpage_productpage_component__["a" /* ProductpageComponent */] },
    { path: 'examples/profile', component: __WEBPACK_IMPORTED_MODULE_17__examples_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'examples/register', component: __WEBPACK_IMPORTED_MODULE_18__examples_register_register_component__["a" /* RegisterComponent */] },
    { path: 'examples/search', component: __WEBPACK_IMPORTED_MODULE_19__examples_search_search_component__["a" /* SearchComponent */] },
    { path: 'examples/settings', component: __WEBPACK_IMPORTED_MODULE_20__examples_settings_settings_component__["a" /* SettingsComponent */] },
    { path: 'examples/twitter', component: __WEBPACK_IMPORTED_MODULE_21__examples_twitter_twitter_component__["a" /* TwitterComponent */] },
    { path: 'examples/page404', component: __WEBPACK_IMPORTED_MODULE_22__examples_page404_page404_component__["a" /* Page404Component */] },
    { path: 'examples/page422', component: __WEBPACK_IMPORTED_MODULE_23__examples_page422_page422_component__["a" /* Page422Component */] },
    { path: 'examples/page500', component: __WEBPACK_IMPORTED_MODULE_24__examples_page500_page500_component__["a" /* Page500Component */] },
    { path: '', redirectTo: 'sections', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/basicelements/basicelements.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-buttons section-gray\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h2>Basic Components</h2>\n        </div>\n        <div id=\"buttons\">\n            <div class=\"title\">\n                <h3>Buttons <br/><small>Pick your style</small>\n                </h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-info\">Default</button>\n                    <button type=\"button\" class=\"btn btn-info btn-round\">Round</button>\n                    <button type=\"button\" class=\"btn btn-info btn-round\"><i class=\"fa fa-heart\"></i> With Icon</button>\n                    <button type=\"button\" class=\"btn btn-info btn-just-icon\"><i class=\"fa fa-heart\"></i></button>\n                    <button type=\"button\" class=\"btn btn-info btn-link\">Simple</button>\n                </div>\n            </div>\n            <div class=\"title\">\n                <h3><small>Pick your size</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-sm\">Small</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger\">Regular</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-lg\">Large</button>\n                </div>\n            </div>\n            <div class=\"title\">\n                <h3><small>Pick your color</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-outline-default btn-round\">Default</button>\n                    <button type=\"button\" class=\"btn btn-outline-primary btn-round\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-outline-info btn-round\">Info</button>\n                    <button type=\"button\" class=\"btn btn-outline-success btn-round\">Success</button>\n                    <button type=\"button\" class=\"btn btn-outline-warning btn-round\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-round\">Danger</button>\n                    <button type=\"button\" class=\"btn btn-outline-neutral btn-round\">Neutral</button>\n                </div>\n            </div>\n            <br/>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-default btn-round\">Default</button>\n                    <button type=\"button\" class=\"btn btn-primary btn-round\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-info btn-round\">Info</button>\n                    <button type=\"button\" class=\"btn btn-success btn-round\">Success</button>\n                    <button type=\"button\" class=\"btn btn-warning btn-round\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Danger</button>\n                    <button type=\"button\" class=\"btn btn-neutral btn-round\">Neutral</button>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div class=\"title\">\n            <h3>Links</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <a href=\"#0\" class=\"btn btn-link btn-default\">Default</a>\n                <a href=\"#0\" class=\"btn btn-link btn-primary\">Primary</a>\n                <a href=\"#0\" class=\"btn btn-link btn-success\">Success</a>\n                <a href=\"#0\" class=\"btn btn-link btn-info\">Info</a>\n                <a href=\"#0\" class=\"btn btn-link btn-warning\">Warning</a>\n                <a href=\"#0\" class=\"btn btn-link btn-danger\">Danger</a>\n                <a href=\"#0\" class=\"btn btn-link btn-neutral\">Neutral</a>\n            </div>\n        </div>\n        <div id=\"icon-buttons\">\n            <div class=\"title\">\n                <h3>Buttons with icons</h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-default btn-just-icon\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></button>\n                    <button type=\"button\" class=\"btn btn-info btn-outline-default btn-just-icon\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></button>\n                    <button type=\"button\" class=\"btn btn-default btn-link btn-just-icon\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></button>\n                    <button type=\"button\" class=\"btn btn-round\"><i class=\"nc-icon nc-settings-gear-65\"></i> Settings</button>\n                    <button type=\"button\" class=\"btn btn-outline-default btn-border btn-round\"><i class=\"nc-icon nc-settings-gear-65\"></i> Settings</button>\n                    <button type=\"button\" class=\"btn btn-link btn-round\"><i class=\"nc-icon nc-settings-gear-65\"></i> Settings</button>\n                    <br /><br />\n                    <button type=\"button\" class=\"btn btn-warning btn-just-icon btn-sm\"><i class=\"nc-icon nc-sound-wave\"></i></button>\n                    <button type=\"button\" class=\"btn btn-danger btn-just-icon\"><i class=\"nc-icon nc-simple-remove\" aria-hidden=\"true\"></i></button>\n                    <button type=\"button\" class=\"btn btn-default btn-just-icon btn-lg\"><i class=\"nc-icon nc-chat-33\"></i></button>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div id=\"icon-buttons\">\n            <div class=\"title\">\n                <h3>Social buttons</h3>\n                <h3><small>Default</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button class=\"btn btn-just-icon btn-twitter\">\n                        <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-facebook\">\n                        <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-google\">\n                        <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-linkedin\">\n                        <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-pinterest\">\n                        <i class=\"fa fa-pinterest-p\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-youtube\">\n                        <i class=\"fa fa-youtube\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-tumblr\">\n                        <i class=\"fa fa-tumblr\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-github\">\n                        <i class=\"fa fa-github-alt\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-dribbble\">\n                        <i class=\"fa fa-dribbble\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-reddit\">\n                        <i class=\"fa fa-reddit-alien\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-instagram\">\n                        <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n                    </button>\n                </div>\n            </div>\n            <div class=\"title\">\n                <h3><small>Bordered</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button class=\"btn btn-just-icon btn-border btn-twitter\">\n                        <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-border btn-facebook\">\n                        <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-border btn-google\">\n                        <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-border btn-linkedin\">\n                        <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-border btn-pinterest\">\n                        <i class=\"fa fa-pinterest-p\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-border btn-youtube\">\n                        <i class=\"fa fa-youtube\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-border btn-tumblr\">\n                        <i class=\"fa fa-tumblr\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-border btn-github\">\n                        <i class=\"fa fa-github-alt\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-border btn-dribbble\">\n                        <i class=\"fa fa-dribbble\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-border btn-reddit\">\n                        <i class=\"fa fa-reddit-alien\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-border btn-instagram\">\n                        <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n                    </button>\n                </div>\n            </div>\n            <div class=\"title\">\n                <h3><small>Links</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button class=\"btn btn-just-icon btn-link btn-twitter\">\n                        <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-link btn-facebook\">\n                        <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-link btn-google\">\n                        <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-link btn-linkedin\">\n                        <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-link btn-pinterest\">\n                        <i class=\"fa fa-pinterest-p\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-link btn-youtube\">\n                        <i class=\"fa fa-youtube\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-link btn-tumblr\">\n                        <i class=\"fa fa-tumblr\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-link btn-github\">\n                        <i class=\"fa fa-github-alt\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-link btn-dribbble\">\n                        <i class=\"fa fa-dribbble\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-link btn-reddit\">\n                        <i class=\"fa fa-reddit-alien\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-link btn-instagram\">\n                        <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div id=\"animated-buttons\">\n            <div class=\"title\">\n                <h3>Animated Buttons</h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button class=\"btn btn-rotate btn-round\"><i class=\"nc-icon nc-settings-gear-65\"></i> Settings</button>\n                    <button class=\"btn btn-magnify btn-round\"><i class=\"nc-icon nc-zoom-split\"></i> Search</button>\n                    <button class=\"btn btn-move-left btn-round\"><i class=\"nc-icon nc-minimal-left\"></i> Back</button>\n                    <button class=\"btn btn-move-right btn-round\">Next <i class=\"nc-icon nc-minimal-right\"></i> </button>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div id=\"inputs\">\n            <div class=\"title\">\n                <h3>Inputs</h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" value=\"\" placeholder=\"Simple\" class=\"form-control\" />\n                    </div>\n                </div>\n                <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" value=\"\" placeholder=\"No Border\" class=\"form-control no-border\" />\n                    </div>\n                </div>\n                <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" value=\"\" placeholder=\"Disabled\" class=\"form-control\" disabled />\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-3\">\n                    <div class=\"input-group\">\n                    <!-- \t   Since the css properties cannot check the previous sibling of an element and for the design consistency we recommend to use the \"input-group-addon\" after the \"form-control\" like in this example -->\n                      <input type=\"text\" placeholder=\"Group Addon\" class=\"form-control\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-group\"></i></span>\n                    </div>\n                </div>\n                <div class=\"col-sm-3\">\n                    <div class=\"input-group no-border\" >\n                      <input type=\"text\" placeholder=\"No Border\" class=\"form-control no-border\">\n                      <span class=\"input-group-addon no-border\">%</span>\n                    </div>\n                </div>\n                <div class=\"col-sm-3\">\n                    <div class=\"input-group\" disabled>\n                      <input type=\"text\" placeholder=\"Group Disabled\" class=\"form-control\" disabled>\n                      <span class=\"input-group-addon\"><i class=\"fa fa-group\"></i></span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-3\">\n                  <div class=\"form-group has-success\">\n                    <input type=\"text\" value=\"Success\" id=\"inputSuccess1\" class=\"form-control form-control-success\" />\n                  </div>\n                </div>\n                <div class=\"col-sm-3\">\n                  <div class=\"form-group has-success\">\n                    <input type=\"text\" value=\"Success\" id=\"inputSuccess1\" class=\"form-control form-control-success no-border\" />\n                  </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-3\">\n                    <div class=\"form-group has-danger\">\n                        <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\" value=\"Error\">\n                        <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div>\n                    </div>\n                </div>\n                <div class=\"col-sm-3\">\n                    <div class=\"form-group has-danger\">\n                        <input type=\"text\" class=\"form-control form-control-danger no-border\" id=\"inputDanger1\" value=\"Error\">\n                        <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div>\n                    </div>\n                </div>\n            </div> <!-- end row -->\n        </div>\n        <br/>\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"title\">\n                    <h3>Checkboxes</h3>\n                </div>\n                <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                        Unchecked\n                        <span class=\"form-check-sign\"></span>\n                    </label>\n                </div>\n                <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                        Checked\n                        <span class=\"form-check-sign\"></span>\n                    </label>\n                </div>\n                <div class=\"form-check disabled\">\n                    <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled>\n                        Disabled unchecked\n                        <span class=\"form-check-sign\"></span>\n                    </label>\n                </div>\n                <div class=\"form-check disabled\">\n                    <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled checked>\n                        Disabled checked\n                        <span class=\"form-check-sign\"></span>\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"title\">\n                    <h3>Radio Buttons</h3>\n                </div>\n\n                <div class=\"form-check-radio\">\n                    <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" >\n                        Radio is off\n                        <span class=\"form-check-sign\"></span>\n                    </label>\n                </div>\n                <div class=\"form-check-radio\">\n                    <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\" checked>\n                        Radio is on\n                        <span class=\"form-check-sign\"></span>\n                    </label>\n                </div>\n\n                <div class=\"form-check-radio disabled\">\n                    <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\" disabled>\n                        Disabled radio is off\n                        <span class=\"form-check-sign\"></span>\n                    </label>\n                </div>\n\n                <div class=\"form-check-radio disabled\">\n                    <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadioz\" id=\"exampleRadios4\" value=\"option4\" checked disabled>\n                        Disabled radio is on\n                        <span class=\"form-check-sign\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <div id=\"textarea\">\n            <div class=\"title\">\n                <h3>Textarea</h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-5 col-sm-6\">\n                    <textarea class=\"form-control border-input\" placeholder=\"This is a textarea with border. Here can be your nice text\" rows=\"3\"></textarea>\n                </div>\n                <div class=\"col-md-5 col-sm-6\">\n                    <textarea class=\"form-control textarea-limited\" placeholder=\"This is a textarea limited to 150 characters.\" rows=\"3\" maxlength=\"150\" ></textarea>\n                    <h5><small><span id=\"textarea-limited-message\" class=\"pull-right\">150 characters left</span></small></h5>\n                </div>\n            </div>\n        </div>\n        <div id=\"switches\">\n            <div class=\"title\">\n                <h3>Switches</h3>\n            </div>\n            <bSwitch\n                [switch-on-color]=\"'primary'\"\n                [switch-off-color]=\"'primary'\"\n                [(ngModel)]=\"state_primary\">\n            </bSwitch>\n            <bSwitch\n                [switch-on-color]=\"'primary'\"\n                [switch-off-color]=\"'primary'\"> Toggle is off\n            </bSwitch>\n            <bSwitch\n                [switch-on-color]=\"'success'\"\n                [switch-off-color]=\"'success'\"\n                [(ngModel)]=\"state_succes\">\n            </bSwitch>\n            <bSwitch\n                [switch-on-color]=\"'success'\"\n                [switch-off-color]=\"'success'\"> Toggle is off\n            </bSwitch>\n            <bSwitch\n                [switch-on-color]=\"'warning'\"\n                [switch-off-color]=\"'warning'\"\n                [(ngModel)]=\"state_warning\">\n            </bSwitch>\n            <bSwitch\n                [switch-on-color]=\"'warning'\"\n                [switch-off-color]=\"'warning'\"> Toggle is off\n            </bSwitch>\n            <div class=\"title\">\n                <h3>Switches with icons</h3>\n            </div>\n            <bSwitch\n                [switch-on-color]=\"'primary'\"\n                [switch-off-color]=\"'primary'\"\n                [(ngModel)]=\"state_icon_primary\"\n                switch-on-text=\"<i class='nc-icon nc-check-2'></i>\"\n                switch-off-text=\"<i class='nc-icon nc-simple-remove'></i>\">\n            </bSwitch>\n            <bSwitch\n                [switch-on-color]=\"'primary'\"\n                [switch-off-color]=\"'primary'\"\n                switch-on-text=\"<i class='nc-icon nc-check-2'></i>\"\n                switch-off-text=\"<i class='nc-icon nc-simple-remove'></i>\"> Toggle is off\n            </bSwitch>\n            <bSwitch\n                [switch-on-color]=\"'success'\"\n                [switch-off-color]=\"'success'\"\n                [(ngModel)]=\"state_icon_succes\"\n                switch-on-text=\"<i class='nc-icon nc-check-2'></i>\"\n                switch-off-text=\"<i class='nc-icon nc-simple-remove'></i>\">\n            </bSwitch>\n            <bSwitch\n                [switch-on-color]=\"'success'\"\n                [switch-off-color]=\"'success'\"\n                switch-on-text=\"<i class='nc-icon nc-check-2'></i>\"\n                switch-off-text=\"<i class='nc-icon nc-simple-remove'></i>\"> Toggle is off\n            </bSwitch>\n            <bSwitch\n                [switch-on-color]=\"'warning'\"\n                [switch-off-color]=\"'warning'\"\n                [(ngModel)]=\"state_icon_warning\"\n                switch-on-text=\"<i class='nc-icon nc-check-2'></i>\"\n                switch-off-text=\"<i class='nc-icon nc-simple-remove'></i>\">\n            </bSwitch>\n            <bSwitch\n                [switch-on-color]=\"'warning'\"\n                [switch-off-color]=\"'warning'\"\n                switch-on-text=\"<i class='nc-icon nc-check-2'></i>\"\n                switch-off-text=\"<i class='nc-icon nc-simple-remove'></i>\"> Toggle is off\n            </bSwitch>\n        </div>\n\n        <div id=\"labels\">\n            <div class=\"title\">\n                <h3>Labels</h3>\n                <h3><small>Simple</small></h3>\n            </div>\n            <span class=\"label label-default\">Default</span>\n            <span class=\"label label-primary\">Primary</span>\n            <span class=\"label label-info\">Info</span>\n            <span class=\"label label-success\">Success</span>\n            <span class=\"label label-warning\">Warning</span>\n            <span class=\"label label-danger\">Danger</span>\n            <br/>\n            <div class=\"title\">\n                <h3><small>Icons</small></h3>\n            </div>\n            <span class=\"label label-default\"><i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></span>\n            <span class=\"label label-primary\"><i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i></span>\n            <span class=\"label label-info\"><i class=\"fa fa-info\" aria-hidden=\"true\"></i></span>\n            <span class=\"label label-success\"><i class=\"fa fa-comments\" aria-hidden=\"true\"></i></span>\n            <span class=\"label label-warning\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></span>\n            <span class=\"label label-danger\"><i class=\"fa fa-battery-half\" aria-hidden=\"true\"></i></span>\n        </div>\n        <div id=\"tags\">\n            <div class=\"title\">\n                <h3>Tags</h3>\n            </div>\n            <tag-input [(ngModel)]='tagItems' theme='regular-theme'></tag-input>\n        </div>\n        <div id=\"select\">\n            <div class=\"title\">\n                <h3>Select</h3>\n            </div>\n            <div class=\"row\">\n               <div class=\"col-md-3 col-sm-3\">\n                    <div class=\"form-group\">\n                        <angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\"\n                            [settings]=\"dropdownSettings\"\n                            (onSelect)=\"onItemSelect($event)\"\n                            (onDeSelect)=\"OnItemDeSelect($event)\"\n                            (onSelectAll)=\"onSelectAll($event)\"\n                            (onDeSelectAll)=\"onDeSelectAll($event)\">\n                        </angular2-multiselect>\n                    </div>\n                </div>\n                <div class=\"col-md-3 col-sm-3\">\n                    <div class=\"form-group\">\n                        <angular2-multiselect [data]=\"dropdownList1\" [(ngModel)]=\"selectedItems1\"\n                            [settings]=\"dropdownSettings1\"\n                            (onSelect)=\"onItemSelect($event)\"\n                            (onDeSelect)=\"OnItemDeSelect($event)\"\n                            (onSelectAll)=\"onSelectAll($event)\"\n                            (onDeSelectAll)=\"onDeSelectAll($event)\">\n                        </angular2-multiselect>\n                    </div>\n                </div>\n            </div>\n            <div id=\"preloaders\">\n                <div class=\"title\">\n                    <h3>Preloaders</h3>\n                </div>\n                <div class='uil-reload-css' style=''><div></div></div>\n                <div class='uil-reload-css reload-small' style=''><div></div></div>\n\n                <div class='uil-reload-css reload-background' style=''><div></div></div>\n                <div class='uil-reload-css reload-background reload-small' style=''><div></div></div>\n\n                <a  class=\"btn btn-round\"><div class='uil-reload-css reload-small' style=''><div></div></div> Something</a>\n            </div>\n            <div id=\"menu-dropdown\">\n                <div class=\"title\">\n                    <h3>Dropdown</h3>\n                    <br />\n                    <div id=\"navbar-dropdown\">\n                        <nav class=\"navbar navbar-expand-md navbar-default\">\n                            <div class=\"container\">\n                                <a class=\"navbar-brand\" >Dropdown colors</a>\n                                <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                                    <span class=\"navbar-toggler-icon\"></span>\n                                    <span class=\"navbar-toggler-icon\"></span>\n                                    <span class=\"navbar-toggler-icon\"></span>\n                                </button>\n                                <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\n                                    <ul class=\"navbar-nav ml-auto\">\n                                        <!-- default color -->\n                                        <li class=\"nav-item\">\n                                            <div ngbDropdown class=\"dropdown\">\n                                                <div class=\"dropdown-toggle btn btn-round\" ngbDropdownToggle>Default<b class=\"caret\"></b></div>\n                                                <div ngbDropdownMenu class=\"dropdown-menu-right\">\n                                                    <div class=\"dropdown-header\">Dropdown header</div>\n                                                    <a class=\"dropdown-item\" >Action</a>\n                                                    <a class=\"dropdown-item\" >Another action</a>\n                                                    <a class=\"dropdown-item\" >Something else here</a>\n                                                    <div class=\"dropdown-divider\"></div>\n                                                    <a class=\"dropdown-item\" >Separated link</a>\n                                                    <div class=\"dropdown-divider\"></div>\n                                                    <a class=\"dropdown-item\" >Another separated link</a>\n                                                </div>\n                                            </div>\n                                        </li>\n                                        <!-- primary color -->\n                                        <li class=\"nav-item\">\n                                            <div ngbDropdown class=\"dropdown\">\n                                                <div class=\"dropdown-toggle btn btn-round btn-primary\" ngbDropdownToggle>Primary<b class=\"caret\"></b></div>\n                                                <div ngbDropdownMenu class=\"dropdown-primary dropdown-menu-right\">\n                                                    <div class=\"dropdown-header\">Dropdown header</div>\n                                                    <a class=\"dropdown-item\" >Action</a>\n                                                    <a class=\"dropdown-item\" >Another action</a>\n                                                    <a class=\"dropdown-item\" >Something else here</a>\n                                                    <div class=\"dropdown-divider\"></div>\n                                                    <a class=\"dropdown-item\" >Separated link</a>\n                                                    <div class=\"dropdown-divider\"></div>\n                                                    <a class=\"dropdown-item\" >Another separated link</a>\n                                                </div>\n                                            </div>\n                                        </li>\n                                        <!-- info color -->\n                                        <li class=\"nav-item\">\n                                            <div ngbDropdown class=\"dropdown\">\n                                                <div class=\"dropdown-toggle btn btn-round btn-info\" ngbDropdownToggle>Info<b class=\"caret\"></b></div>\n                                                <div ngbDropdownMenu class=\"dropdown-info dropdown-menu-right\">\n                                                    <div class=\"dropdown-header\">Dropdown header</div>\n                                                    <a class=\"dropdown-item\" >Action</a>\n                                                    <a class=\"dropdown-item\" >Another action</a>\n                                                    <a class=\"dropdown-item\" >Something else here</a>\n                                                    <div class=\"dropdown-divider\"></div>\n                                                    <a class=\"dropdown-item\" >Separated link</a>\n                                                    <div class=\"dropdown-divider\"></div>\n                                                    <a class=\"dropdown-item\" >Another separated link</a>\n                                                </div>\n                                            </div>\n                                        </li>\n                                        <!-- success color -->\n                                        <li class=\"nav-item\">\n                                            <div ngbDropdown class=\"dropdown\">\n                                                <div class=\"dropdown-toggle btn btn-round btn-success\" ngbDropdownToggle>Success<b class=\"caret\"></b></div>\n                                                <div ngbDropdownMenu class=\"dropdown-success dropdown-menu-right\">\n                                                    <div class=\"dropdown-header\">Dropdown header</div>\n                                                    <a class=\"dropdown-item\" >Action</a>\n                                                    <a class=\"dropdown-item\" >Another action</a>\n                                                    <a class=\"dropdown-item\" >Something else here</a>\n                                                    <div class=\"dropdown-divider\"></div>\n                                                    <a class=\"dropdown-item\" >Separated link</a>\n                                                    <div class=\"dropdown-divider\"></div>\n                                                    <a class=\"dropdown-item\" >Another separated link</a>\n                                                </div>\n                                            </div>\n                                        </li>\n                                        <!-- warning color -->\n                                        <li class=\"nav-item\">\n                                            <div ngbDropdown class=\"dropdown\">\n                                                <div class=\"dropdown-toggle btn btn-round btn-warning\" ngbDropdownToggle>Warning<b class=\"caret\"></b></div>\n                                                <div ngbDropdownMenu class=\"dropdown-warning dropdown-menu-right\">\n                                                    <div class=\"dropdown-header\">Dropdown header</div>\n                                                    <a class=\"dropdown-item\" >Action</a>\n                                                    <a class=\"dropdown-item\" >Another action</a>\n                                                    <a class=\"dropdown-item\" >Something else here</a>\n                                                    <div class=\"dropdown-divider\"></div>\n                                                    <a class=\"dropdown-item\" >Separated link</a>\n                                                    <div class=\"dropdown-divider\"></div>\n                                                    <a class=\"dropdown-item\" >Another separated link</a>\n                                                </div>\n                                            </div>\n                                        </li>\n                                        <!-- danger color -->\n                                        <li class=\"nav-item\">\n                                            <div ngbDropdown class=\"dropdown\">\n                                                <div class=\"dropdown-toggle btn btn-round btn-danger\" ngbDropdownToggle>Danger<b class=\"caret\"></b></div>\n                                                <div ngbDropdownMenu class=\"dropdown-danger dropdown-menu-right\">\n                                                    <div class=\"dropdown-header\">Dropdown header</div>\n                                                    <a class=\"dropdown-item\" >Action</a>\n                                                    <a class=\"dropdown-item\" >Another action</a>\n                                                    <a class=\"dropdown-item\" >Something else here</a>\n                                                    <div class=\"dropdown-divider\"></div>\n                                                    <a class=\"dropdown-item\" >Separated link</a>\n                                                    <div class=\"dropdown-divider\"></div>\n                                                    <a class=\"dropdown-item\" >Another separated link</a>\n                                                </div>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </nav>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/basicelements/basicelements.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/basicelements/basicelements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicelementsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicelementsComponent = /** @class */ (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state_primary = true;
        this.state_succes = true;
        this.state_warning = true;
        this.state_icon_primary = true;
        this.state_icon_succes = true;
        this.state_icon_warning = true;
        this.tagItems = ['Minimal', 'Light', 'New', 'Friends'];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList1 = [];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {};
    }
    BasicelementsComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Multiple Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
        this.dropdownList1 = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {
            singleSelection: true,
            text: "Single Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
    };
    BasicelementsComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-basicelements',
            template: __webpack_require__("../../../../../src/app/components/basicelements/basicelements.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/basicelements/basicelements.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/cards-areas/cards-areas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-gray\" id=\"cards\">\n        <div class=\"container tim-container\">\n            <div class=\"title\">\n                <h2>Cards</h2>\n            </div>\n            <h4 class=\"title\">Blog cards</h4>\n\n            <div class=\"row\">\n                <div class=\"col-md-4 col-sm-6\">\n                    <div class=\"card card-blog\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" src=\"assets/img/sections/neill-kumar.jpg\">\n                            </a>\n                        </div>\n                        <div class=\"card-body text-center\">\n                            <h4 class=\"card-title\">\n                                We will create a great experience\n                            </h4>\n                            <div class=\"card-description\">\n                                Cards are an interaction model that are spreading pretty widely, in fact. What all of these have in common is that they're pulling...\n                            </div>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-danger btn-round\">View Article</a>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card\" data-color=\"purple\" data-background=\"color\">\n                        <div class=\"card-body text-center\">\n                            <h6 class=\"card-category\">\n                                <i class=\"fa fa-dribbble\" aria-hidden=\"true\"></i> Dribbble\n                            </h6>\n                            <h5 class=\"card-title\">\n                                <a href=\"#pablo\">\"Good Design Is as Little Design as Possible\"</a>\n                            </h5>\n                            <p class=\"card-description\">\n                                Design makes an important contribution to the preservation of the environment. It conserves resources and minimises physical and visual pollution throughout the lifecycle of the product....\n                            </p>\n                            <div class=\"card-footer text-center\">\n                                <a href=\"#pablo\" ngbTooltip=\"Bookmark\" class=\"btn btn-outline-neutral btn-round btn-just-icon\"><i class=\"fa fa-bookmark-o\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-round\"><i class=\"fa fa-newspaper-o\"></i> Read</a>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h6 class=\"author pull-left\">Ronna Johnson</h6>\n                            <span class=\"category-social text-info pull-right\">\n                                <i class=\"fa fa-twitter\"></i>\n                            </span>\n                            <div class=\"clearfix\"></div>\n                            <p class=\"card-description\">\n                                \"It clarifies the product’s structure. Better still, it can make the product clearly express its function by making use of the <a href=\"#twitter\" class=\"text-danger\">@mike</a>'s intuition. At best, it is self-explanatory.\"\n                            </p>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"col-md-4 col-sm-6\">\n                    <div class=\"card card-blog\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" src=\"assets/img/sections/anders-jilden.jpg\">\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">\n                                Good Design Is Aesthetic\n                            </h4>\n                            <div class=\"card-description\">\n                                Cards are an interaction model that are spreading pretty widely, in fact. What all of these have in common is that they're pulling...\n                            </div>\n                            <hr />\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <a href=\"#pablo\">\n                                       <img src=\"assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                       <span>Mike John</span>\n                                    </a>\n                                </div>\n                                <div class=\"stats\">\n                                    <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> 5 min read\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card\" data-background=\"image\" style=\"background-image: url('assets/img/sections/rawpixel-com.jpg')\">\n                        <div class=\"card-body\">\n                            <a href=\"#pablo\">\n                                <h3 class=\"card-title\">Ten Principles of “Good Design”</h3>\n                            </a>\n                            <p class=\"card-description\">\n                                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-success btn-round\">\n                                    <i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i> Download PDF\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4 col-sm-6\">\n                    <div class=\"card\" data-background=\"color\" data-color=\"orange\">\n                        <div class=\"card-body\">\n                            <div class=\"author\">\n                                <a href=\"#pablo\">\n                                   <img src=\"assets/img/faces/erik-lucatero-2.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                   <span>Erik Johnson</span>\n                                </a>\n                            </div>\n                            <span class=\"category-social pull-right\">\n                                <i class=\"fa fa-quote-right\"></i>\n                            </span>\n                            <div class=\"clearfix\"></div>\n                            <p class=\"card-description\">\n                                \"Less, but better – because it concentrates on the essential aspects, and the products are not burdened with non-essentials. Back to purity, back to simplicity. At best, it is self-explanatory.\"\n                            </p>\n                        </div>\n                    </div>\n\n                    <div class=\"card\">\n                        <div class=\"card-body text-center\">\n                            <span class=\"category-social text-info pull-right\">\n                                <i class=\"fa fa-twitter\"></i>\n                            </span>\n                            <div class=\"clearfix\"></div>\n                            <div class=\"author\">\n                                <a href=\"#pablo\">\n                                   <img src=\"assets/img/faces/kaci-baum-2.jpg\" alt=\"...\" class=\"avatar-big img-raised border-gray\">\n                                </a>\n                                <h5 class=\"card-title\">Kaci Baum</h5>\n                                <p class=\"category\"><a href=\"#twitter\" class=\"text-danger\">@kacibaum</a></p>\n                            </div>\n                            <p class=\"card-description\">\n                                \"Less, but better – because it concentrates on the essential aspects, and the products are not burdened with non-essentials.\"\n                            </p>\n                        </div>\n                    </div>\n\n                    <div class=\"card\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" src=\"assets/img/sections/david-marcu.jpg\">\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <label class=\"label label-warning\">Travel</label>\n                            <h5 class=\"card-title\">\n                                Currently at the San Francisco Museum of Modern Art\n                            </h5>\n                            <hr />\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <a href=\"#pablo\">\n                                       <img src=\"assets/img/rihanna.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                       <span>Lord Alex</span>\n                                    </a>\n                                </div>\n                               <div class=\"stats\">\n                                    <i class=\"fa fa-heart\" aria-hidden=\"true\"></i> 5.3k\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <h4 class=\"title\">Text Coloured Cards</h4>\n            <div class=\"row coloured-cards\">\n                <div class=\"col-md-4 col-sm-6\">\n                    <div class=\"card-big-shadow\">\n                        <div class=\"card card-just-text\" data-background=\"color\" data-color=\"blue\" data-radius=\"none\">\n                            <div class=\"card-body\">\n                                <h6 class=\"card-category\">Best cards</h6>\n                                <h4 class=\"card-title\"><a href=\"#paper-kit\">Blue Card</a></h4>\n                                <p class=\"card-description\">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>\n                            </div>\n                        </div> <!-- end card -->\n                    </div>\n                </div>\n\n                <div class=\"col-md-4 col-sm-6\">\n                    <div class=\"card-big-shadow\">\n                        <div class=\"card card-just-text\" data-background=\"color\" data-color=\"green\" data-radius=\"none\">\n                            <div class=\"card-body\">\n                                <h6 class=\"card-category\">Best cards</h6>\n                                <h4 class=\"card-title\"><a href=\"#paper-kit\">Green Card</a></h4>\n                                <p class=\"card-description\">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>\n                            </div>\n                        </div> <!-- end card -->\n                    </div>\n                </div>\n\n                <div class=\"col-md-4 col-sm-6\">\n                    <div class=\"card-big-shadow\">\n                        <div class=\"card card-just-text\" data-background=\"color\" data-color=\"yellow\" data-radius=\"none\">\n                            <div class=\"card-body\">\n                                <h6 class=\"card-category\">Best cards</h6>\n                                <h4 class=\"card-title\"><a href=\"#paper-kit\">Yellow Card</a></h4>\n                                <p class=\"card-description\">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>\n                            </div>\n                        </div> <!-- end card -->\n                    </div>\n                </div>\n                <div class=\"col-md-4 col-sm-6\">\n                    <div class=\"card-big-shadow\">\n                        <div class=\"card card-just-text\" data-background=\"color\" data-color=\"brown\" data-radius=\"none\">\n                            <div class=\"card-body\">\n                                <h6 class=\"card-category\">Best cards</h6>\n                                <h4 class=\"card-title\"><a href=\"#paper-kit\">Brown Card</a></h4>\n                                <p class=\"card-description\">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>\n                            </div>\n                        </div> <!-- end card -->\n                    </div>\n                </div>\n\n                <div class=\"col-md-4 col-sm-6\">\n                    <div class=\"card-big-shadow\">\n                        <div class=\"card card-just-text\" data-background=\"color\" data-color=\"purple\" data-radius=\"none\">\n                            <div class=\"card-body\">\n                                <h6 class=\"card-category\">Best cards</h6>\n                                <h4 class=\"card-title\"><a href=\"#paper-kit\">Purple Card</a></h4>\n                                <p class=\"card-description\">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>\n                            </div>\n                        </div> <!-- end card -->\n                    </div>\n                </div>\n\n                <div class=\"col-md-4 col-sm-6\">\n                    <div class=\"card-big-shadow\">\n                        <div class=\"card card-just-text\" data-background=\"color\" data-color=\"orange\" data-radius=\"none\">\n                            <div class=\"card-body\">\n                                <h6 class=\"card-category\">Best cards</h6>\n                                <h4 class=\"card-title\"><a href=\"#paper-kit\">Orange Card</a></h4>\n                                <p class=\"card-description\">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>\n                            </div>\n                        </div> <!-- end card -->\n                    </div>\n                </div>\n\n            </div>\n\n            <h4 class=\"title\">Pricing cards</h4>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Enterprise</h6>\n                            <h1 class=\"card-title\">$139</h1>\n                            <ul>\n                                <li><i class=\"fa fa-check text-success\" aria-hidden=\"true\"></i> Sharing Tools</li>\n                                <li><i class=\"fa fa-check text-success\" aria-hidden=\"true\"></i> Design Tools</li>\n                                <li><i class=\"fa fa-times text-danger\" aria-hidden=\"true\"></i> Private Messages</li>\n                                <li><i class=\"fa fa-times text-danger\" aria-hidden=\"true\"></i> Personal Brand</li>\n                                <li><i class=\"fa fa-times text-danger\" aria-hidden=\"true\"></i> Twitter API</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-success btn-round card-link\">Get Started</a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing\" data-color=\"orange\">\n                        <div class=\"card-body\">\n                            <div class=\"card-icon\">\n                                <span class=\"icon-simple\"><i class=\"nc-icon nc-istanbul\"></i></span>\n                            </div>\n                            <h3 class=\"card-title\">$249</h3>\n\n                            <p class=\"card-description\">\n                                This is good if your company size is between 100 and 299 employees.\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-round\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Premium</h6>\n                            <h1 class=\"card-title\">&euro;89</h1>\n                            <ul>\n                                <li><b>10</b> Projects</li>\n                                <li><b>80</b> Team Members</li>\n                                <li><b>Unlimited</b> Contacts</li>\n                                <li><b>Unlimited</b> Messages</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-warning btn-round\">\n                                Get Started\n                            </a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing\" data-background=\"image\" style=\"background-image: url('assets/img/sections/mika-matin.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Single User</h6>\n                            <div class=\"card-icon\">\n                                <i class=\"nc-icon nc-user-run\"></i>\n                            </div>\n                            <h3 class=\"card-title\">$29</h3>\n                            <p class=\"card-description\">\n                                This is good if you are a freelancer of photographer.\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-info btn-round card-link\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <h4 class=\"title\">Full background cards</h4>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card\" data-background=\"image\" style=\"background-image: url('assets/img/sections/uriel-soberanes.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">\n                                <i class=\"fa fa-newspaper-o\"></i> Technology</h6>\n                            <a href=\"#pablo\">\n                                <h3 class=\"card-title\">The aesthetic quality of a product</h3>\n                            </a>\n                            <p class=\"card-description\">\n                                 It clarifies the product’s structure. Better still, it can make the product clearly express its function by making use of the user’s intuition.\n                            </p>\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <a href=\"#pablo\">\n                                       <img src=\"assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                       <span>Ayo Michael</span>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card\" data-background=\"image\" style=\"background-image: url('assets/img/sections/david-marcu.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Travel</h6>\n                            <div class=\"card-icon\">\n                                <i class=\"nc-icon nc-spaceship\"></i>\n                            </div>\n                            <p class=\"card-description\">Unlike fashionable design, it lasts many years – even in today’s throwaway society.</p>\n\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-danger btn-round card-link\">\n                                    <i class=\"fa fa-book\" aria-hidden=\"true\"></i> Read Article\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card\" data-background=\"image\" style=\"background-image: url('assets/img/sections/leonard-cotte.jpg')\">\n                        <div class=\"card-body\">\n                            <label class=\"label label-info\">Web Design</label>\n                            <a href=\"#pablo\">\n                                <h3 class=\"card-title\">San Francisco Museum of Modern Art</h3>\n                            </a>\n                            <p class=\"card-description\">Nothing must be arbitrary or left to chance. Care and accuracy in the design process show respect towards the consumer.\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-link btn-neutral\">\n                                    <i class=\"fa fa-book\" aria-hidden=\"true\"></i> Read\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-link btn-neutral\">\n                                    <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Bookmark\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <h4 class=\"title\">Team Members Cards</h4>\n            <div class=\"row\">\n                <div class=\"col-md-3 col-sm-6\">\n\n                    <div class=\"card card-profile\">\n                        <div class=\"card-cover\" style=\"background-image: url('assets/img/sections/angelo-pantazis.jpg')\">\n                        </div>\n                        <div class=\"card-avatar border-white\">\n                            <a href=\"#avatar\">\n                                <img src=\"assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"...\"/>\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Ayo Michael</h4>\n                            <h6 class=\"card-category\">Designer</h6>\n                            <p class=\"card-description\">\n                            Hey there! Welcome to your user card. As you can see, it is already looking great.\n                            </p>\n                        </div>\n                    </div> <!-- end card -->\n\n                </div>\n\n                <div class=\"col-md-3 col-sm-6\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-cover\" style=\"background-image: url('assets/img/sections/pavel-kosov.jpg')\">\n                        </div>\n                        <div class=\"card-avatar border-white\">\n                            <a href=\"#avatar\">\n                                <img src=\"assets/img/faces/joe-gardner-2.jpg\" alt=\"...\"/>\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Audrey Hepburn</h4>\n                            <h6 class=\"card-category\">Developer</h6>\n\n                            <div class=\"card-footer text-center\">\n                                <a href=\"#paper-kit\" class=\"btn btn-just-icon btn-twitter\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                                <a href=\"#paper-kit\" class=\"btn btn-just-icon btn-dribbble\">\n                                    <i class=\"fa fa-dribbble\"></i>\n                                </a>\n                                <a href=\"#paper-kit\" class=\"btn btn-just-icon btn-facebook\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                            </div>\n                        </div>\n                    </div> <!-- end card -->\n                </div>\n\n                <div class=\"col-md-3 col-sm-6\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-avatar border-white\">\n                            <a href=\"#avatar\">\n                                <img src=\"assets/img/faces/kaci-baum-2.jpg\" alt=\"...\"/>\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Laci Thor</h4>\n                            <h6 class=\"card-category\">Marketing Specialist</h6>\n                            <p class=\"card-description\">\n                            British actress and humanitarian recognised as a film and fashion icon.\n                            </p>\n                            <div class=\"card-footer text-center\">\n                                <a href=\"#paper-kit\" class=\"btn btn-just-icon btn-outline-default\">\n                                    <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n                                </a>\n                                <a href=\"#paper-kit\" class=\"btn btn-just-icon btn-outline-default \">\n                                    <i class=\"fa fa-github-alt\" aria-hidden=\"true\"></i>\n                                </a>\n                                <a href=\"#paper-kit\" class=\"btn btn-just-icon btn-outline-default\">\n                                    <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n                                </a>\n                            </div>\n                        </div>\n                    </div> <!-- end card -->\n                </div>\n\n                <div class=\"col-md-3 col-sm-6\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-avatar border-white\">\n                            <a href=\"#avatar\">\n                                <img src=\"assets/img/faces/erik-lucatero-2.jpg\" alt=\"...\"/>\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Joe Gardner</h4>\n                            <h6 class=\"card-category\">Artist and Music Composer</h6>\n                            <p class=\"card-description\">\n                            One of the co-founders. Joe drives the technical strategy of the platform, customer support and brand.\n                            </p>\n                            <div class=\"card-footer text-center\">\n                               <button href=\"#paper-kit\" class=\"btn btn-icon btn-outline-default btn-border btn-round\"><i class=\"fa fa-check\"></i> Following</button>\n                            </div>\n                        </div>\n                    </div> <!-- end card -->\n                </div>\n\n            </div>\n\n            <h4 class=\"title\"><small>Plain</small></h4>\n            <div class=\"row\">\n                <div class=\"col-md-4 col-sm-6 ml-auto mr-auto\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar border-white\">\n                            <a href=\"#avatar\">\n                                <img src=\"assets/img/placeholder.jpg\" alt=\"...\"/>\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Anonymous Tim</h4>\n                            <h6 class=\"card-category\">A private guy</h6>\n                            <p class=\"card-description\">\n                            Hey there! Welcome to your user card. As you can see, it is already looking great. But if you want to tell us more about yourself by adding details in the settings page.\n                            </p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a href=\"#paper-kit\" class=\"btn btn-icon btn-rotate btn-round\"><i class=\"fa fa-cog\"></i> Settings</a>\n                        </div>\n                    </div> <!-- end card -->\n                </div>\n\n                <div class=\"col-md-4 col-sm-6 ml-auto mr-auto\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar border-white\">\n                            <a href=\"#avatar\">\n                                <img src=\"assets/img/faces/joe-gardner-2.jpg\" alt=\"...\"/>\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Joe Gardner</h4>\n                            <h6 class=\"card-category\">Artist and Music Composer</h6>\n                            <p class=\"card-description\">\n                            Joe Garnder is one of the co-founders and drives the technical strategy of the platform, customer support and brand. Talk with Joe only interesting topics.\n                            </p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                           <button href=\"#paper-kit\" class=\"btn btn-icon btn-outline-default btn-border btn-round\"><i class=\"fa fa-check\"></i> Following</button>\n                        </div>\n\n                    </div> <!-- end card -->\n                </div>\n            </div>\n\n            <h4 class=\"title\">Image Cards</h4>\n            <h4 class=\"title\"><small>Cards with creators</small></h4>\n            <div class=\"row\">\n                <div class=\"col-md-3 col-sm-6\">\n                    <div class=\"card card-plain\">\n\n                        <div class=\"card-image\">\n                            <a href=\"#paper-kit\">\n                                <img src=\"assets/img/sections/ilya-yakover.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n                            </a>\n                            <div class=\"card-body\">\n                                <a href=\"#paper-kit\">\n                                    <div class=\"author\">\n                                        <img src=\"assets/img/faces/clem-onojeghuo-3.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive img-raised\">\n                                    </div>\n                                    <span class=\"name\">Eric Faker</span>\n                                </a>\n                                <div class=\"meta\">Thinking in Textures</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 col-sm-6\">\n                    <div class=\"card-image text-center\">\n                        <a href=\"#paper-kit\">\n                            <img src=\"assets/img/sections/rawpixel-coms.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n                        </a>\n                        <div class=\"card-body details-center\">\n                            <a href=\"#paper-kit\">\n                                <div class=\"author\">\n                                    <img src=\"assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                    <div class=\"text\">\n                                        <span class=\"name\">Tom Hanks</span>\n                                        <div class=\"meta\">Drawn on 23 Jan</div>\n                                    </div>\n                                </div>\n                            </a>\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card-image text-center\">\n                        <a href=\"#paper-kit\">\n                            <img src=\"assets/img/sections/joshua-stannard.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n                        </a>\n                        <div class=\"card-body details-center\">\n                            <a href=\"#paper-kit\">\n                                <div class=\"author\">\n                                    <img src=\"assets/img/faces/erik-lucatero-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                    <div class=\"text\">\n                                        <span class=\"name\">Sunset Bling</span>\n                                        <div class=\"meta\">Lincoln</div>\n                                    </div>\n                                </div>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <h4 class=\"title\"><small>Cards with products</small></h4>\n            <div class=\"row\">\n                <div class=\"col-md-3 col-sm-4\">\n                    <div class=\"card card-product card-plain\">\n                        <div class=\"card-image\">\n                            <a href=\"#paper-kit\">\n                                <img src=\"assets/img/balmain-1.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n                            </a>\n                            <div class=\"card-body\">\n                                <div class=\"card-description\">\n                                    <h5 class=\"card-title\">Double Breasted Mini Dress</h5>\n                                    <p class=\"card-description\">Dresses & Skirts</p>\n                                </div>\n                                <div class=\"actions\">\n                                    <h5>$300</h5>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3 col-sm-4\">\n                    <div class=\"card card-product card-plain\">\n                        <div class=\"card-image\">\n                            <a href=\"#paper-kit\">\n                                <img src=\"assets/img/balmain-2.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n                            </a>\n                            <div class=\"card-body\">\n                                <div class=\"card-description\">\n                                    <h5 class=\"card-title\">Chrystal Dress</h5>\n                                    <div class=\"meta\">Dresses & Skirts</div>\n                                </div>\n\n                                <div class=\"actions\">\n                                    <button class=\"btn btn-link btn-just-icon\"><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i></button>\n                                    <button class=\"btn btn-link btn-just-icon\"><i class=\"nc-icon nc-simple-delete\"></i></button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3 col-sm-4\">\n                    <div class=\"card card-product card-plain\">\n                        <div class=\"card-image\">\n                            <a href=\"#paper-kit\">\n                                <img src=\"assets/img/balmain-3.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n                            </a>\n                            <div class=\"card-body\">\n                                <div class=\"card-description\">\n                                    <h5 class=\"card-title\">Chrystal Skirt</h5>\n                                    <p class=\"card-description\">Only on demand</p>\n                                </div>\n\n                                <div class=\"actions\">\n                                    <button class=\"btn btn-link btn-danger btn-just-icon\">234 <i class=\"nc-icon nc-favourite-28\"></i></button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/cards-areas/cards-areas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cards-areas/cards-areas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsAreasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardsAreasComponent = /** @class */ (function () {
    function CardsAreasComponent() {
    }
    CardsAreasComponent.prototype.ngOnInit = function () {
    };
    CardsAreasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cards-areas',
            template: __webpack_require__("../../../../../src/app/components/cards-areas/cards-areas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cards-areas/cards-areas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardsAreasComponent);
    return CardsAreasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/comments-areas/comments-areas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-nude-gray\">\n    <div class=\"container container-tim\">\n        <div class=\"title\" id=\"comments\">\n            <h3>Comments Area</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8 ml-auto mr-auto\">\n                <div class=\"media-area\">\n                    <h3>Comments &middot; 10</h3>\n                    <div class=\"media\">\n                          <a class=\"pull-left\" href=\"#paper-kit\">\n                           <div class=\"avatar\">\n                                <img class=\"media-object\" src=\"assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"...\"/>\n                           </div>\n                          </a>\n                          <div class=\"media-body\">\n                            <h5 class=\"media-heading\">John Wayne</h5>\n                            <div class=\"pull-right\">\n                                <h6 class=\"text-muted\">Sep 11, 11:53 AM</h6>\n                                <a href=\"#paper-kit\" class=\"btn btn-info btn-link pull-right \"> <i class=\"fa fa-reply\"></i> Reply</a>\n\n                            </div>\n                            <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n                            <p> Don't forget, You're Awesome!</p>\n\n                            <div class=\"media-footer\">\n                                <a href=\"#paper-kit\" class=\"btn btn-danger btn-link\">\n                                    <i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i> 243\n                                </a>\n                                <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                    <i class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></i> 2\n                                </a>\n                                <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                     Follow &middot; 3\n                                </a>\n                            </div>\n\n                             <div class=\"media media-post\">\n                                     <a class=\"pull-left author\" href=\"#paper-kit\">\n                                      <div class=\"avatar\">\n                                            <img class=\"media-object\" alt=\"64x64\" src=\"assets/img/faces/kaci-baum-2.jpg\">\n                                      </div>\n                                  </a>\n                                  <div class=\"media-body\">\n                                        <textarea class=\"form-control\" placeholder=\"Write a nice reply or go home...\" rows=\"4\"></textarea>\n                                        <div class=\"media-footer\">\n                                             <a href=\"#paper-kit\" class=\"btn btn-info pull-right\">Reply</a>\n                                        </div>\n                                  </div>\n                             </div> <!-- end media-post -->\n                          </div>\n                    </div> <!-- end media -->\n\n                    <!--  Comment                    -->\n                    <div class=\"media\">\n                      <a class=\"pull-left\" href=\"#paper-kit\">\n                          <div class=\"avatar\">\n                             <img class=\"media-object\" alt=\"Tim Picture\" src=\"assets/img/faces/ayo-ogunseinde-2.jpg\">\n                          </div>\n                      </a>\n                      <div class=\"media-body\">\n\n                        <h5 class=\"media-heading\">Flume</h5>\n                        <div class=\"pull-right\">\n                            <h6 class=\"text-muted\">Sep 11, 11:54 AM</h6>\n                            <a href=\"#paper-kit\" class=\"btn btn-info btn-link pull-right \"> <i class=\"fa fa-reply\"></i> Reply</a>\n\n                        </div>\n\n                         <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n\n                         <div class=\"media-footer\">\n                            <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                <i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i> 243\n                            </a>\n                            <a href=\"#paper-kit\" class=\"btn btn-primary btn-link\">\n                                <i class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></i> 2\n                            </a>\n                            <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                 Follow &middot; 3\n                            </a>\n                         </div>\n                         <div class=\"media\">\n                              <a class=\"pull-left\" href=\"#paper-kit\">\n                                  <div class=\"avatar\">\n                                        <img class=\"media-object\" alt=\"64x64\" src=\"assets/img/faces/erik-lucatero-2.jpg\">\n                                  </div>\n                              </a>\n                              <div class=\"media-body\">\n                                    <h5 class=\"media-heading\">Eric Faker</h5>\n                                    <div class=\"pull-right\">\n                                        <h6 class=\"text-muted\">Sep 11, 11:56 AM</h6>\n                                        <a href=\"#paper-kit\" class=\"btn btn-info btn-link pull-right \"> <i class=\"fa fa-reply\"></i> Reply</a>\n\n                                    </div>\n                                    <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n                                    <p> Don't forget, You're Awesome!</p>\n\n                                    <div class=\"media-footer\">\n                                        <a href=\"#paper-kit\" class=\"btn btn-danger btn-link\">\n                                            <i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i> 243\n                                        </a>\n                                        <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                            <i class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></i> 2\n                                        </a>\n                                        <a href=\"#paper-kit\" class=\"btn btn-info btn-link\">\n                                             Follow &middot; 3\n                                        </a>\n                                    </div>\n                              </div>\n                          </div> <!-- end media -->\n                      </div>\n                    </div> <!-- end media -->\n                    <div class=\"media\">\n                          <a class=\"pull-left\" href=\"#paper-kit\">\n                              <div class=\"avatar\">\n                                    <img class=\"media-object\" alt=\"64x64\" src=\"assets/img/faces/joe-gardner-2.jpg\">\n                              </div>\n                          </a>\n                          <div class=\"media-body\">\n                                <h5 class=\"media-heading\">Banks</h5>\n                                <div class=\"pull-right\">\n                                    <h6 class=\"text-muted\">Sep 11, 11:57 AM</h6>\n                                    <a href=\"#paper-kit\" class=\"btn btn-info btn-link pull-right \"> <i class=\"fa fa-reply\"></i> Reply</a>\n\n                                </div>\n                                <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n                                <p> Don't forget, You're Awesome!</p>\n\n                                <div class=\"media-footer\">\n                                    <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                        <i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i> 243\n                                    </a>\n                                    <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                        <i class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></i> 2\n                                    </a>\n                                    <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                         Follow &middot; 3\n                                    </a>\n                                </div>\n                          </div>\n                    </div> <!-- end media -->\n                    <br/>\n                    <div class=\"pagination-area pagination-primary\">\n                        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n                    </div>\n                </div> <!-- end media-area -->\n            </div> <!-- end col-md-8 -->\n        </div> <!-- end row -->\n    </div>\n</div>\n<div class=\"section section-gray\">\n    <div class=\"container tim-container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 ml-auto mr-auto\">\n                  <h3 class=\"text-center\">Post your comment</h3>\n                  <div class=\"media media-post\">\n                      <a class=\"author\" href=\"#paper-kit\">\n                          <div class=\"avatar\">\n                                <img class=\"media-object\" alt=\"64x64\" src=\"assets/img/faces/ayo-ogunseinde-2.jpg\">\n                          </div>\n                      </a>\n                      <div class=\"media-body\">\n                            <textarea class=\"form-control border-input\" placeholder=\"Write some nice stuff or nothing...\" rows=\"6\"></textarea>\n                            <div class=\"media-footer\">\n                                 <a href=\"#paper-kit\" class=\"btn btn-info btn-wd pull-right\">Post Comment</a>\n                            </div>\n                      </div>\n                  </div> <!-- end media-post -->\n\n                  <h3 class=\"text-center\">Post your comment</h3>\n                  <div class=\"media media-post\">\n                      <form class=\"form\">\n                      <a class=\"pull-left author\" href=\"#paper-kit\">\n                          <div class=\"avatar\">\n                                <img class=\"media-object\" alt=\"64x64\" src=\"assets/img/faces/kaci-baum-2.jpg\"/>\n                          </div>\n                      </a>\n                      <div class=\"media-body\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                         <input type=\"email\" class=\"form-control border-input\" placeholder=\"Your Name\"/>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                         <input type=\"email\" class=\"form-control border-input\" placeholder=\"Your email\"/>\n                                    </div>\n                                </div>\n                            </div>\n                            <textarea class=\"form-control border-input\" placeholder=\"Write some nice stuff or nothing...\" rows=\"6\"></textarea>\n                            <div class=\"media-footer\">\n                                <h6 class=\"text-muted\">Sign in with</h6>\n                                <a href=\"#twitter\" class=\"btn btn-just-icon btn-round btn-twitter\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                                <a href=\"#facebook\" class=\"btn btn-round btn-just-icon btn-facebook\">\n                                   <i class=\"fa fa-facebook\"></i>\n                                </a>\n                                <a href=\"#google\" class=\"btn btn-just-icon btn-round btn-google\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                                <a href=\"#paper-kit\" class=\"btn btn-info pull-right\">Post Comment</a>\n                            </div>\n                      </div><!-- end media-body -->\n                      </form>\n                  </div> <!-- end media-post -->\n            </div>\n        </div> <!-- end row -->\n    </div>\n</div>\n<div class=\"section section-nude-gray\">\n    <div class=\"container tim-container\">\n        <div class=\"title\">\n            <h3>Comments Area Small</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"media-area media-area-small\">\n                    <h3>Comments &middot; 10</h3>\n                    <div class=\"media\">\n                          <a class=\"pull-left\" href=\"#paper-kit\">\n                           <div class=\"avatar\">\n                                <img class=\"media-object\" src=\"assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"...\"/>\n                           </div>\n                          </a>\n                          <div class=\"media-body\">\n                            <h5 class=\"media-heading\">John Wayne</h5>\n                            <div class=\"pull-right\">\n                                <h6 class=\"text-muted\">Sep 11, 11:53 AM</h6>\n                                <a href=\"#paper-kit\" class=\"btn btn-info btn-link pull-right \"> <i class=\"fa fa-reply\"></i> Reply</a>\n\n                            </div>\n                            <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n\n                            <div class=\"media-footer\">\n                                <a href=\"#paper-kit\" class=\"btn btn-danger btn-link\">\n                                    <i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i> 243\n                                </a>\n                                <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                    <i class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></i> 2\n                                </a>\n                                <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                     Follow &middot; 3\n                                </a>\n                            </div>\n                          </div>\n                    </div> <!-- end media -->\n\n                    <!--  Comment                    -->\n                    <div class=\"media\">\n                      <a class=\"pull-left\" href=\"#paper-kit\">\n                          <div class=\"avatar\">\n                             <img class=\"media-object\" alt=\"Tim Picture\" src=\"assets/img/faces/clem-onojeghuo-3.jpg\">\n                          </div>\n                      </a>\n                      <div class=\"media-body\">\n                        <h5 class=\"media-heading\">Chet Faker</h5>\n                        <div class=\"pull-right\">\n                            <h6 class=\"text-muted\">Sep 11, 11:54 AM</h6>\n                            <a href=\"#paper-kit\" class=\"btn btn-info btn-link pull-right \"> <i class=\"fa fa-reply\"></i> Reply</a>\n\n                        </div>\n                         <p>Hello guys, nice to have you on the platform!</p>\n\n                        <div class=\"media-footer\">\n                            <a href=\"#paper-kit\" class=\"btn btn-danger btn-link\">\n                                <i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i> 243\n                            </a>\n                            <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                <i class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></i> 2\n                            </a>\n                            <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                 Follow &middot; 3\n                            </a>\n                        </div>\n                         <div class=\"media\">\n                              <a class=\"pull-left\" href=\"#paper-kit\">\n                                  <div class=\"avatar\">\n                                        <img class=\"media-object\" alt=\"64x64\" src=\"assets/img/faces/erik-lucatero-2.jpg\">\n                                  </div>\n                              </a>\n                              <div class=\"media-body\">\n                                    <h5 class=\"media-heading\">Flume</h5>\n                                    <div class=\"pull-right\">\n                                        <h6 class=\"text-muted\">Sep 11, 11:56 AM</h6>\n                                        <a href=\"#paper-kit\" class=\"btn btn-info btn-link pull-right \"> <i class=\"fa fa-reply\"></i> Reply</a>\n\n                                    </div>\n                                    <p> Don't forget, You're Awesome!</p>\n\n                                    <div class=\"media-footer\">\n                                        <a href=\"#paper-kit\" class=\"btn btn-danger btn-link\">\n                                            <i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>243\n                                        </a>\n                                        <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                            <i class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></i> 2\n                                        </a>\n                                        <a href=\"#paper-kit\" class=\"btn btn-info btn-link\">\n                                             Follow &middot; 3\n                                        </a>\n                                    </div>\n                              </div>\n                          </div> <!-- end media -->\n                      </div>\n                    </div> <!-- end media -->\n                    <div class=\"media\">\n                          <a class=\"pull-left\" href=\"#paper-kit\">\n                              <div class=\"avatar\">\n                                    <img class=\"media-object\" alt=\"64x64\" src=\"assets/img/faces/clem-onojeghuo-2.jpg\">\n                              </div>\n                          </a>\n                          <div class=\"media-body\">\n                                <h5 class=\"media-heading\">Banks</h5>\n                                <div class=\"pull-right\">\n                                    <h6 class=\"text-muted\">Sep 11, 11:57 AM</h6>\n                                    <a href=\"#paper-kit\" class=\"btn btn-info btn-link pull-right \"> <i class=\"fa fa-reply\"></i> Reply</a>\n\n                                </div>\n                                <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n                                <p> Don't forget, You're Awesome!</p>\n\n                                <div class=\"media-footer\">\n                                    <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                        <i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i> 243\n                                    </a>\n                                    <a href=\"#paper-kit\" class=\"btn btn-primary btn-link\">\n                                        <i class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></i> 2\n                                    </a>\n                                    <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                         Follow &middot; 3\n                                    </a>\n                                </div>\n                          </div>\n                    </div> <!-- end media -->\n                    <div class=\"pagination-area pagination-primary\">\n                        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page1\" aria-label=\"Default pagination\"></ngb-pagination>\n                    </div>\n\n                    <h3 class=\"text-center\">Post your comment</h3>\n                    <div class=\"media media-post\">\n                      <form class=\"form\">\n                      <a class=\"pull-left author\" href=\"#paper-kit\">\n                          <div class=\"avatar\">\n                                <img class=\"media-object\" alt=\"64x64\" src=\"assets/img/faces/erik-lucatero-2.jpg\"/>\n                          </div>\n                      </a>\n                      <div class=\"media-body\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                         <input type=\"email\" class=\"form-control\" placeholder=\"Your Name\"/>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                         <input type=\"email\" class=\"form-control\" placeholder=\"Your email\"/>\n                                    </div>\n                                </div>\n                            </div>\n                            <textarea class=\"form-control\" placeholder=\"Write some nice stuff or nothing...\" rows=\"6\"></textarea>\n                            <div class=\"media-footer\">\n                                <h6 class=\"text-muted\">Sign in with</h6>\n                                <a href=\"#twitter\" class=\"btn btn-just-icon btn-round btn-twitter\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                                <a href=\"#facebook\" class=\"btn btn-round btn-just-icon btn-facebook\">\n                                   <i class=\"fa fa-facebook\"></i>\n                                </a>\n                                <a href=\"#google\" class=\"btn btn-just-icon btn-round btn-google\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                                <a href=\"#paper-kit\" class=\"btn btn-primary pull-right btn-round\">Post Comment</a>\n                            </div>\n                      </div><!-- end media-body -->\n                      </form>\n                    </div> <!-- end media-post -->\n\n                </div> <!-- end media-area-small -->\n            </div> <!-- end col-md-8 -->\n        </div> <!-- end row -->\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/comments-areas/comments-areas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comments-areas/comments-areas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsAreasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentsAreasComponent = /** @class */ (function () {
    function CommentsAreasComponent() {
        this.page = 1;
        this.page1 = 1;
    }
    CommentsAreasComponent.prototype.ngOnInit = function () {
    };
    CommentsAreasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comments-areas',
            template: __webpack_require__("../../../../../src/app/components/comments-areas/comments-areas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/comments-areas/comments-areas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentsAreasComponent);
    return CommentsAreasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/components.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" style=\"background-image: url('./assets/img/cover.jpg')\">\n    <div class=\"filter\"></div>\n    <div class=\"content-center\">\n        <div class=\"motto\">\n            <h1 class=\"text-center\">Paper Kit 2 Pro</h1>\n            <h3 class=\"text-center\">Components</h3>\n        </div>\n    </div>\n</div>\n<div class=\"main\">\n    <app-basicelements></app-basicelements>\n    <app-navigation></app-navigation>\n    <app-prefooter-areas></app-prefooter-areas>\n    <app-footers-areas></app-footers-areas>\n    <app-description-areas></app-description-areas>\n    <app-info-areas></app-info-areas>\n    <div class=\"container\">\n        <div class=\"title\">\n            <h3>Navigation Pills</h3>\n        </div>\n        <div class=\"col-md-6\">\n            <ngb-tabset type=\"pills\" class=\"nav-pills-danger\">\n                <ngb-tab title=\"Info\">\n                    <ng-template ngbTabContent>\n                    </ng-template>\n                </ngb-tab>\n                <ngb-tab title=\"Menu\">\n                    <ng-template ngbTabContent>\n                    </ng-template>\n                </ngb-tab>\n                <ngb-tab title=\"Concept\">\n                    <ng-template ngbTabContent>\n                    </ng-template>\n                </ngb-tab>\n            </ngb-tabset>\n        </div>\n        <div class=\"title\">\n            <h3>Progress Bar</h3>\n        </div>\n        <div class=\"col-md-8\">\n            <ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar><br>\n            <ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar><br>\n            <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>75%</i></ngb-progressbar><br>\n            <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"title\">\n                    <h3>Pagination</h3>\n                    <br/>\n                </div>\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n                <br/>\n                <ngb-pagination [collectionSize]=\"100\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\"></ngb-pagination>\n            </div>\n        </div>\n    </div>\n    <app-typography></app-typography>\n    <div class=\"section section-gray\" id=\"notifications\">\n        <div class=\"container tim-container\">\n            <div class=\"title\">\n                <h3>Notifications</h3>\n            </div>\n        </div>\n        <app-notification></app-notification>\n    </div>\n    <app-tables-areas></app-tables-areas>\n    <app-comments-areas></app-comments-areas>\n    <div class=\"section javascript-components\">\n        <div class=\"container\">\n            <div class=\"title\">\n                <h2>Angular Native Components</h2>\n            </div>\n            <div class=\"row\" id=\"modals\">\n                <div class=\"col-md-12\">\n                    <div class=\"title\">\n                        <h3>Modals</h3>\n                    </div>\n                    <ngbd-modal-component></ngbd-modal-component>\n                </div>\n            </div>\n            <div class=\"title\">\n                <h3>Collapse</h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"config-panel-one\">\n                        <ngb-panel id=\"config-panel-one\">\n                            <ng-template ngbPanelTitle>\n                                <h5 class=\"mb-0 panel-title\">\n                                    <a class=\"collapsed\">\n                                        Default Collapsible Item 1\n                                        <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                </h5>\n                            </ng-template>\n                            <ng-template ngbPanelContent>\n                                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n                                  aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n                                  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n                                  craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n                                  occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                                  labore sustainable VHS.\n                            </ng-template>\n                        </ngb-panel>\n                        <ngb-panel>\n                            <ng-template ngbPanelTitle>\n                                <h5 class=\"mb-0 panel-title\">\n                                    <a class=\"collapsed\">\n                                        Default Collapsible Item 2\n                                        <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                </h5>\n                            </ng-template>\n                            <ng-template ngbPanelContent>\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n                                aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n                                sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n                                craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n                                occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                                labore sustainable VHS.\n                            </ng-template>\n                        </ngb-panel>\n                        <ngb-panel>\n                            <ng-template ngbPanelTitle>\n                                <h5 class=\"mb-0 panel-title\">\n                                    <a class=\"collapsed\">\n                                        Default Collapsible Item 3\n                                        <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                </h5>\n                            </ng-template>\n                            <ng-template ngbPanelContent>\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n                                aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n                                sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n                                craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n                                occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                                labore sustainable VHS.\n                            </ng-template>\n                        </ngb-panel>\n                    </ngb-accordion>\n                </div>\n            </div>\n            <div class=\"title\">\n                <h3>Gallery</h3>\n            </div>\n            <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n\n            <div class=\"clearfix\"></div>\n\n            <div class=\"col-md-12\">\n                <div class=\"title\">\n                    <h3>Tooltips</h3>\n                </div>\n\n                <button type=\"button\" class=\"btn btn-warning btn-round\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n                   on right\n               </button>\n               <button type=\"button\" class=\"btn btn-warning btn-round\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n                  on left\n               </button>\n                <button type=\"button\" class=\"btn btn-warning btn-round\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n                   on top\n                </button>\n                <button type=\"button\" class=\"btn btn-warning btn-round\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n                   on bottom\n                </button>\n            </div>\n            <div class=\"col-md-12\">\n\t\t\t\t<div class=\"title\">\n\t\t\t\t\t<h3>Popovers</h3>\n\t\t\t\t</div>\n                <button type=\"button\" class=\"btn btn-round\" placement=\"right\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Nude on right\">\n                    Nude on right\n                </button>\n\n                <button type=\"button\" class=\"btn btn-round\" placement=\"top\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Nude on top\">\n                    Nude on top\n                </button>\n\n                <button type=\"button\" class=\"btn btn-round\" placement=\"left\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Nude on left\">\n                    Nude on left\n                </button>\n\n                <button type=\"button\" class=\"btn btn-round\" placement=\"bottom\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Nude on bottom\">\n                    Nude on bottom\n                </button>\n\t\t\t</div>\n\n            <div class=\"col-md-12\">\n                <div class=\"title\">\n                    <h3>Dropup</h3>\n                </div>\n                <div id=\"special-drowdown\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3 col-sm-6\">\n                            <h4 class=\"title\"><small>Dropup with sharing</small></h4>\n                            <div ngbDropdown placement=\"top-right\" class=\"dropup dropup-no-caret\">\n                                <button class=\"btn btn-block btn-round\" id=\"dropdownBasic1\" ngbDropdownToggle>Sharing</button>\n                                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-sharing\">\n                                    <li class=\"dropdown-header text-center\">Sharing is caring!</li>\n                                    <a class=\"dropup-item\">\n                                        <div class=\"social-line\">\n                                            <div class=\"row\">\n                                                <div class=\"col-sm-2\">\n                                                    <span class=\"icon-twitter\"><i class=\"fa fa-twitter\"></i></span>\n                                                </div>\n                                                <div class=\"col-sm-6\">Twitter</div>\n                                                <div class=\"col-sm-4\">\n                                                    <label>\n                                                    <bSwitch\n                                                        [switch-on-color]=\"'primary'\"\n                                                        [switch-off-color]=\"'primary'\"\n                                                        [(ngModel)]=\"state_icon_primary\"\n                                                        switch-on-text=\"<i class='nc-icon nc-check-2'></i>\"\n                                                        switch-off-text=\"<i class='nc-icon nc-simple-remove'></i>\">\n                                                    </bSwitch>\n                                                    </label>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </a>\n                                    <div class=\"dropdown-divider\"></div>\n                                    <a class=\"dropup-item\">\n                                        <div class=\"social-line\">\n                                            <div class=\"row\">\n                                                <div class=\"col-sm-2\">\n                                                    <span class=\"icon-facebook\"><i class=\"fa fa-facebook\"></i></span>\n                                                </div>\n                                                <div class=\"col-sm-6\">Facebook</div>\n                                            </div>\n                                        </div>\n                                    </a>\n                                    <div class=\"dropdown-divider\"></div>\n                                    <a class=\"dropup-item\">\n                                        <div class=\"social-line\">\n                                            <div class=\"row\">\n                                                <div class=\"col-sm-2\">\n                                                    <span class=\"icon-pinterest\"><i class=\"fa fa-pinterest\"></i></span>\n                                                </div>\n                                                <div class=\"col-sm-6\">Pinterest</div>\n                                            </div>\n                                        </div>\n                                    </a>\n                                    <div class=\"dropdown-divider\"></div>\n                                    <a class=\"dropup-item text-center\" href=\"#paper-kit\">\n                                        <button class=\"btn btn-info btn-round ml-auto mr-auto\">Share</button>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3 col-sm-6\">\n                            <h4 class=\"title\"><small>Dropup with actions</small></h4>\n\n                            <div class=\"dropup\">\n\n                              <div ngbDropdown placement=\"top-right\" class=\"dropup dropup-no-caret\">\n                                  <button class=\"btn btn-block btn-round\" ngbDropdownToggle>\n                                    Actions\n                                  </button>\n                                  <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                                      <a class=\"dropdown-item\">\n                                          <div href=\"#paper-kit\" class=\"action-line\">\n                                              <div class=\"row\">\n                                                  <div class=\"col-sm-2\">\n                                                      <span class=\"icon-simple\"><i class=\"nc-icon nc-single-copy-04\"></i></span>\n                                                  </div>\n                                                  <div class=\"col-sm-9\">Duplicate</div>\n                                              </div>\n                                          </div>\n                                      </a>\n                                      <div class=\"dropdown-divider\"></div>\n                                      <a class=\"dropdown-item\">\n                                          <div href=\"#paper-kit\" class=\"action-line\">\n                                              <div class=\"row\">\n                                                  <div class=\"col-sm-2\">\n                                                      <span class=\"icon-simple\"><i class=\"nc-icon nc-user-run\"></i></span>\n                                                  </div>\n                                                  <div class=\"col-sm-9\">Move from here</div>\n                                              </div>\n                                          </div>\n                                      </a>\n                                      <div class=\"dropdown-divider\"></div>\n                                      <a class=\"dropdown-item\">\n                                          <div href=\"#paper-kit\" class=\"action-line link-danger\">\n                                              <div class=\"row\">\n                                                  <div class=\"col-sm-2\">\n                                                      <span class=\"icon-simple\"><i class=\"nc-icon nc-box-2\"></i></span>\n                                                  </div>\n                                                  <div class=\"col-sm-9\">Archive</div>\n                                              </div>\n                                          </div>\n                                      </a>\n                                  </div>\n                              </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n\t\t\t\t<div class=\"title\">\n\t\t\t\t\t<h3>Datepicker</h3>\n\t\t\t\t</div>\n\t\t\t    <div class=\"row\">\n\t\t\t        <div class='col-sm-6'>\n\t\t\t            <div class=\"form-group\">\n\t\t\t                <div class='input-group date'>\n                                <input class=\"form-control\" placeholder=\"06/07/2017\"\n                                     name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\">\n                                <span class=\"input-group-addon\">\n                                    <span class=\"glyphicon glyphicon-calendar\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n                                </span>\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t\t        </div>\n\t\t\t    </div>\n\t\t\t</div>\n            <div class=\"tim-tile\">\n                <h3>File Upload</h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-5 col-sm-8\">\n                    <h4 class=\"title\"><small>Regular Image</small></h4>\n                    <app-image-upload></app-image-upload>\n                </div>\n                <div class=\"col-md-3 col-sm-4\">\n                    <h4 class=\"title\"><small>Avatar</small></h4>\n                    <app-image-upload [isRound]=\"true\"></app-image-upload>\n                </div>\n            </div>\n            <div class=\"title\">\n\t\t\t\t<h3>Carousel</h3>\n\t\t\t</div>\n            <div class=\"row\">\n\t\t\t\t<div class=\"col-md-8 ml-auto mr-auto\">\n\t\t\t\t\t<div class=\"card card-raised page-carousel\">\n                        <ngb-carousel>\n                            <ng-template ngbSlide>\n                                <img src=\"http://www.hudsonmgmt.com/hms/images/slider-img-1.jpg\" alt=\"Random first slide\">\n                                <div class=\"carousel-caption\">\n                                    <p>Somewhere</p>\n                                </div>\n                            </ng-template>\n                            <ng-template ngbSlide>\n                                <img src=\"http://96bda424cfcc34d9dd1a-0a7f10f87519dba22d2dbc6233a731e5.r41.cf2.rackcdn.com/ermu/sliders-1/fall-residential-faders/Fall_Fader2.jpg\" alt=\"Random second slide\">\n                                <div class=\"carousel-caption\">\n                                    <p>Somewhere else</p>\n                                </div>\n                            </ng-template>\n                            <ng-template ngbSlide>\n                                <img src=\"http://www.jveroassociates.com/images/slider/slider-02.jpg\" alt=\"Random third slide\">\n                                <div class=\"carousel-caption\">\n                                    <p>Here it is</p>\n                                </div>\n                            </ng-template>\n                        </ngb-carousel>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>\n    </div>\n    <app-cards-areas></app-cards-areas>\n</div>\n<footer class=\"footer section-dark\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"footer-nav\">\n                <ul>\n                    <li><a href=\"http://www.creative-tim.com\">Creative Tim</a></li>\n                    <li><a href=\"http://blog.creative-tim.com\">Blog</a></li>\n                    <li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\n                </ul>\n            </nav>\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    © {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/components.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_gallery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer, config) {
        this.renderer = renderer;
        this.data = new Date();
        this.page = 4;
        this.page1 = 5;
        this.isCollapsed = true;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.state_icon_primary = true;
        config.closeOthers = true;
        config.type = 'info';
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var input_group_focus = document.getElementsByClassName('form-control');
        var input_group = document.getElementsByClassName('input-group');
        var _loop_1 = function (i) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        };
        for (var i = 0; i < input_group.length; i++) {
            _loop_1(i);
        }
        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: __WEBPACK_IMPORTED_MODULE_2_ngx_gallery__["NgxGalleryAnimation"].Slide
            },
            // max-width 800
            {
                "previewFullscreen": true,
                "previewKeyboardNavigation": true,
                "previewCloseOnClick": true,
                "previewCloseOnEsc": true,
                "previewZoom": true,
                "imageSwipe": true,
                "thumbnailsSwipe": true,
                "previewSwipe": true,
                "imageArrowsAutoHide": true,
                "thumbnailsArrowsAutoHide": true,
                "imageAnimation": "slide"
            },
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
        this.galleryImages = [
            {
                small: './assets/img/gallery/outfit-gucci.jpg',
                medium: './assets/img/gallery/outfit-gucci.jpg',
                big: './assets/img/gallery/outfit-gucci.jpg'
            },
            {
                small: './assets/img/gallery/outfit-paul-smith.jpg',
                medium: './assets/img/gallery/outfit-paul-smith.jpg',
                big: './assets/img/gallery/outfit-paul-smith.jpg'
            },
            {
                small: './assets/img/gallery/outfit-maison-margiela.jpg',
                medium: './assets/img/gallery/outfit-maison-margiela.jpg',
                big: './assets/img/gallery/outfit-maison-margiela.jpg'
            },
            {
                small: './assets/img/gallery/outfit-burberry.jpg',
                medium: './assets/img/gallery/outfit-burberry.jpg',
                big: './assets/img/gallery/outfit-burberry.jpg'
            },
            {
                small: './assets/img/gallery/ressence.jpg',
                medium: './assets/img/gallery/ressence.jpg',
                big: './assets/img/gallery/ressence.jpg'
            },
            {
                small: './assets/img/gallery/gucci-sun.jpg',
                medium: './assets/img/gallery/gucci-sun.jpg',
                big: './assets/img/gallery/gucci-sun.jpg'
            },
            {
                small: './assets/img/gallery/bottega.jpg',
                medium: './assets/img/gallery/bottega.jpg',
                big: './assets/img/gallery/bottega.jpg'
            },
            {
                small: './assets/img/gallery/bracelet.jpg',
                medium: './assets/img/gallery/bracelet.jpg',
                big: './assets/img/gallery/bracelet.jpg'
            }
        ];
    };
    ComponentsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    ComponentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-components',
            template: __webpack_require__("../../../../../src/app/components/components.component.html"),
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbAccordionConfig */]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__ = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__ = __webpack_require__("../../../../jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_chips__ = __webpack_require__("../../../../ngx-chips/dist/ngx-chips.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_chips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_chips__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_multiselect_dropdown_angular2_multiselect_dropdown__ = __webpack_require__("../../../../angular2-multiselect-dropdown/angular2-multiselect-dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_image_upload_image_upload_module__ = __webpack_require__("../../../../../src/app/shared/image-upload/image-upload.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__basicelements_basicelements_component__ = __webpack_require__("../../../../../src/app/components/basicelements/basicelements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__typography_typography_component__ = __webpack_require__("../../../../../src/app/components/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nucleoicons_nucleoicons_component__ = __webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_component__ = __webpack_require__("../../../../../src/app/components/components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__notification_notification_component__ = __webpack_require__("../../../../../src/app/components/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modal_modal_component__ = __webpack_require__("../../../../../src/app/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__prefooter_areas_prefooter_areas_component__ = __webpack_require__("../../../../../src/app/components/prefooter-areas/prefooter-areas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__footers_areas_footers_areas_component__ = __webpack_require__("../../../../../src/app/components/footers-areas/footers-areas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__description_areas_description_areas_component__ = __webpack_require__("../../../../../src/app/components/description-areas/description-areas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__info_areas_info_areas_component__ = __webpack_require__("../../../../../src/app/components/info-areas/info-areas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__tables_areas_tables_areas_component__ = __webpack_require__("../../../../../src/app/components/tables-areas/tables-areas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__comments_areas_comments_areas_component__ = __webpack_require__("../../../../../src/app/components/comments-areas/comments-areas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__cards_areas_cards_areas_component__ = __webpack_require__("../../../../../src/app/components/cards-areas/cards-areas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__["NouisliderModule"],
                __WEBPACK_IMPORTED_MODULE_6_ngx_chips__["TagInputModule"],
                __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__["JWBootstrapSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_gallery__["NgxGalleryModule"],
                __WEBPACK_IMPORTED_MODULE_9__shared_image_upload_image_upload_module__["a" /* ImageUploadModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__components_component__["a" /* ComponentsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__basicelements_basicelements_component__["a" /* BasicelementsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__typography_typography_component__["a" /* TypographyComponent */],
                __WEBPACK_IMPORTED_MODULE_13__nucleoicons_nucleoicons_component__["a" /* NucleoiconsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__notification_notification_component__["a" /* NotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_16__modal_modal_component__["a" /* NgbdModalBasic */],
                __WEBPACK_IMPORTED_MODULE_17__prefooter_areas_prefooter_areas_component__["a" /* PrefooterAreasComponent */],
                __WEBPACK_IMPORTED_MODULE_18__footers_areas_footers_areas_component__["a" /* FootersAreasComponent */],
                __WEBPACK_IMPORTED_MODULE_19__description_areas_description_areas_component__["a" /* DescriptionAreasComponent */],
                __WEBPACK_IMPORTED_MODULE_20__info_areas_info_areas_component__["a" /* InfoAreasComponent */],
                __WEBPACK_IMPORTED_MODULE_21__tables_areas_tables_areas_component__["a" /* TablesAreasComponent */],
                __WEBPACK_IMPORTED_MODULE_22__comments_areas_comments_areas_component__["a" /* CommentsAreasComponent */],
                __WEBPACK_IMPORTED_MODULE_23__cards_areas_cards_areas_component__["a" /* CardsAreasComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_14__components_component__["a" /* ComponentsComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/description-areas/description-areas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container tim-container\">\n    <div id=\"description-areas\">\n        <div class=\"title\">\n            <h3>Description Areas</h3>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-5 col-sm-12\">\n                <h4><small>Horizontal Tabs</small></h4>\n\n                <div class=\"nav-tabs-navigation\">\n                    <div class=\"nav-tabs-wrapper\">\n                        <ngb-tabset [justify]=\"'center'\">\n                            <ngb-tab title=\"Home\">\n                                <ng-template ngbTabContent>\n                                    <div class=\"tab-pane active\" id=\"home\" role=\"tabpanel\"><p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.</p></div>\n                                    <div class=\"tab-pane\" id=\"profile\" role=\"tabpanel\"><p>Here is your profile.</p></div>\n                                    <div class=\"tab-pane\" id=\"messages\" role=\"tabpanel\"><p>Here are your messages.</p></div>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Profile\">\n                                <ng-template ngbTabContent>\n                                    <p>Here is your profile.</p>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Messages\">\n                                <ng-template ngbTabContent>\n                                    <p>Here are your messages.</p>\n                                </ng-template>\n                            </ngb-tab>\n                        </ngb-tabset>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-7 col-sm-12\">\n                <h4><small>Vertical Tabs</small></h4>\n                <div class=\"nav-tabs-navigation\">\n                    <div class=\"nav-tabs-wrapper\">\n                        <ngb-tabset [justify]=\"'center'\" [orientation]=\"'vertical'\" class=\"vertical-tabs\">\n                            <ngb-tab title=\"Info\">\n                                <ng-template ngbTabContent>\n                                    <div class=\"tab-pane active\" id=\"info\">\n                                         <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.</p>\n                                         <p>It’s one continuous form where hardware and software function in perfect unison, creating a new generation of phone that’s better by any measure.</p>\n                                    </div>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Description\">\n                                <ng-template ngbTabContent>\n                                    <div class=\"tab-pane\" id=\"description\">\n                                        <p>The first thing you notice when you hold the phone is how great it feels in your hand. The cover glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable, simplified design. </p>\n                                        <p>There are no distinct edges. No gaps. Just a smooth, seamless bond of metal and glass that feels like one continuous surface.</p>\n                                    </div>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Concept\">\n                                <ng-template ngbTabContent>\n                                    <div class=\"tab-pane\" id=\"concept\">\n                                        <p>It’s one continuous form where hardware and software function in perfect unison, creating a new generation of phone that’s better by any measure.</p>\n                                        <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display. </p>\n                                    </div>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Support\">\n                                <ng-template ngbTabContent>\n                                    <div class=\"tab-pane\" id=\"support\">\n                                        <p>From the seamless transition of glass and metal to the streamlined profile, every detail was carefully considered to enhance your experience. So while its display is larger, the phone feels just right.</p>\n                                        <p>It’s one continuous form where hardware and software function in perfect unison, creating a new generation of phone that’s better by any measure.</p>\n                                    </div>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Extra\">\n                                <ng-template ngbTabContent>\n                                    <div class=\"tab-pane\" id=\"extra\">\n                                        <p>It’s one continuous form where hardware and software function in perfect unison, creating a new generation of phone that’s better by any measure.</p>\n                                        <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display. </p>\n                                    </div>\n                                </ng-template>\n                            </ngb-tab>\n                        </ngb-tabset>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/description-areas/description-areas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/description-areas/description-areas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionAreasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DescriptionAreasComponent = /** @class */ (function () {
    function DescriptionAreasComponent() {
        this.page = 4;
        this.page1 = 5;
    }
    DescriptionAreasComponent.prototype.ngOnInit = function () {
    };
    DescriptionAreasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-description-areas',
            template: __webpack_require__("../../../../../src/app/components/description-areas/description-areas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/description-areas/description-areas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DescriptionAreasComponent);
    return DescriptionAreasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footers-areas/footers-areas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-footers\">\n    <div class=\"container tim-container\">\n        <div class=\"title\" id=\"footers\">\n            <h3>Footers</h3>\n        </div>\n    </div>\n</div>\n<footer class=\"footer footer-big\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 col-sm-9 ml-auto mr-auto\">\n                <div class=\"links\">\n                    <ul class=\"uppercase-links\">\n                        <li>\n                            <a href=\"#paper-kit\">\n                                Home\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#paper-kit\">\n                                Company\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#paper-kit\">\n                                Portfolio\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#paper-kit\">\n                               Team\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#paper-kit\">\n                               Blog\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#paper-kit\">\n                               Contact\n                            </a>\n                        </li>\n\n\n                    </ul>\n                    <hr />\n\n                    <div class=\"copyright\">\n                        © {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4 col-sm-2\">\n                <div class=\"social-area\">\n                    <a href=\"#facebook\" class=\"btn btn-neutral btn-round btn-just-icon btn-facebook facebook-sharrre\">\n                       <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n                   </a>\n                    <a href=\"#twitter\" class=\"btn btn-neutral btn-just-icon btn-round btn-twitter twitter-sharrre\">\n                        <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n                    </a>\n                    <a href=\"#google\" class=\"btn btn-neutral btn-just-icon btn-round btn-google google-sharrre\">\n                        <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n                    </a>\n                    <a href=\"#pin\" class=\"btn btn-neutral btn-just-icon btn-round btn-pinterest pinterest-sharrre\">\n                        <i class=\"fa fa-pinterest-p\" aria-hidden=\"true\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>\n<div class=\"separator\"></div>\n<footer class=\"footer footer-black footer-big\">\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4 col-sm-4 ml-auto mr-auto\">\n                <div class=\"logo text-center\">\n                    <h3>Creative Tim</h3>\n                </div>\n            </div>\n            <div class=\"col-md-6 offset-md-2 col-sm-8\">\n                <div class=\"links\">\n                    <ul>\n                        <li>\n                            <a href=\"#paper-kit\">\n                                Home\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#paper-kit\">\n                                Company\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#paper-kit\">\n                                Portfolio\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#paper-kit\">\n                               Team\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#paper-kit\">\n                               Contact\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#paper-kit\">\n                               We're Hiring!\n                            </a>\n                        </li>\n                    </ul>\n                    <hr />\n                    <div class=\"copyright\">\n                        <div class=\"pull-left\">\n                            © {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> in Bucharest\n                        </div>\n                        <div class=\"pull-right\">\n                            <ul>\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                        Terms\n                                    </a>\n                                </li>\n                                |\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                        Privacy\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</footer>\n<div class=\"separator\"></div>\n<footer class=\"footer footer-big\">\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-sm-6 col-12 ml-auto mr-auto\">\n                 <div class=\"form-group\">\n                    <angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\"\n                        [settings]=\"dropdownSettings\"\n                        (onSelect)=\"onItemSelect($event)\"\n                        (onDeSelect)=\"OnItemDeSelect($event)\"\n                        (onSelectAll)=\"onSelectAll($event)\"\n                        (onDeSelectAll)=\"onDeSelectAll($event)\">\n                    </angular2-multiselect>\n                </div>\n                 <div class=\"form-group\">\n                     <angular2-multiselect [data]=\"dropdownList1\" [(ngModel)]=\"selectedItems1\"\n                         [settings]=\"dropdownSettings1\"\n                         (onSelect)=\"onItemSelect($event)\"\n                         (onDeSelect)=\"OnItemDeSelect($event)\"\n                         (onSelectAll)=\"onSelectAll($event)\"\n                         (onDeSelectAll)=\"onDeSelectAll($event)\">\n                     </angular2-multiselect>\n                </div>\n            </div>\n            <div class=\"col-md-9 ml-auto mr-auto col-sm-9 col-12\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 col-sm-3 col-6\">\n                        <div class=\"links\">\n                            <ul class=\"uppercase-links stacked-links\">\n                                <li>\n                                    <a href=\"#paper-kit\" >\n                                        Home\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                        Discover\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                        Blog\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3 col-sm-3 col-6\">\n                        <div class=\"links\">\n                            <ul class=\"uppercase-links stacked-links\">\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                       Contact Us\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                       We're Hiring\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                       About Us\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3 col-sm-3 col-6\">\n                        <div class=\"links\">\n                            <ul class=\"uppercase-links stacked-links\">\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                        Portfolio\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                       How it works\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                       Testimonials\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3 col-6\">\n                        <div class=\"social-area\">\n                            <a class=\"btn btn-just-icon btn-round btn-facebook\">\n                                <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n                            </a>\n                            <a class=\"btn btn-just-icon btn-round btn-twitter\">\n                                <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n                            </a>\n                            <a class=\"btn btn-just-icon btn-round btn-google\">\n                                <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n                            </a>\n                            <a class=\"btn btn-just-icon btn-round btn-pinterest\">\n                                <i class=\"fa fa-pinterest-p\" aria-hidden=\"true\"></i>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <hr />\n                <div class=\"copyright\">\n                    <div class=\"pull-left\">\n                        © {{data | date: 'yyyy'}} Creative Tim, made with love\n                    </div>\n                    <div class=\"links pull-right\">\n                        <ul>\n                            <li>\n                                <a href=\"#paper-kit\">\n                                    Company Policy\n                                </a>\n                            </li>\n                            |\n                            <li>\n                                <a href=\"#paper-kit\">\n                                    Terms\n                                </a>\n                            </li>\n                            |\n                            <li>\n                                <a href=\"#paper-kit\">\n                                    Privacy\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</footer>\n\n<div class=\"separator\"></div>\n<footer class=\"footer footer-black footer-big\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-2 text-center col-sm-3 col-12 ml-auto mr-auto\">\n                <h4>Creative Tim</h4>\n                <div class=\"social-area\">\n                    <a class=\"btn btn-just-icon btn-round btn-facebook\">\n                        <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n                    </a>\n                    <a class=\"btn btn-just-icon btn-round btn-twitter\">\n                        <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n                    </a>\n                    <a class=\"btn btn-just-icon btn-round btn-google\">\n                        <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-md-9 col-sm-9 col-12 ml-auto mr-auto\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 col-sm-3 col-6\">\n                        <div class=\"links\">\n                            <ul class=\"uppercase-links stacked-links\">\n                                <li>\n                                    <a href=\"#paper-kit\" >\n                                        Home\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                        Discover\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                        Blog\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                        Live Support\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                        Money Back\n                                    </a>\n                                </li>\n                            </ul>\n\n                        </div>\n                    </div>\n                    <div class=\"col-md-3 col-sm-3 col-6\">\n                        <div class=\"links\">\n                            <ul class=\"uppercase-links stacked-links\">\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                       Contact Us\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                       We're Hiring\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                       About Us\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3 col-sm-3 col-6\">\n                        <div class=\"links\">\n                            <ul class=\"uppercase-links stacked-links\">\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                        Portfolio\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                       How it works\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                       Testimonials\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3 col-sm-3 col-6\">\n                        <div class=\"links\">\n                            <ul class=\"stacked-links\">\n                                <li>\n                                    <h4>13.723<br /> <small>accounts</small></h4>\n                                </li>\n                                <li>\n                                    <h4>55.234<br /> <small>downloads</small></h4>\n                                </li>\n\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <hr />\n                <div class=\"copyright\">\n                    <div class=\"pull-left\">\n                        &copy; {{data | date: 'yyyy'}} Creative Tim, made with love\n                    </div>\n                    <div class=\"links pull-right\">\n                        <ul>\n                            <li>\n                                <a href=\"#paper-kit\">\n                                    Company Policy\n                                </a>\n                            </li>\n                            |\n                            <li>\n                                <a href=\"#paper-kit\">\n                                    Terms\n                                </a>\n                            </li>\n                            |\n                            <li>\n                                <a href=\"#paper-kit\">\n                                    Privacy\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/footers-areas/footers-areas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footers-areas/footers-areas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootersAreasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FootersAreasComponent = /** @class */ (function () {
    function FootersAreasComponent() {
        this.data = new Date();
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList1 = [];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {};
    }
    FootersAreasComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { "id": 1, "itemName": "Bahasa Indonesia" },
            { "id": 2, "itemName": "Bahasa Melayu" },
            { "id": 3, "itemName": "Català" },
            { "id": 4, "itemName": "Dansk" },
            { "id": 5, "itemName": "Deutsch" },
            { "id": 6, "itemName": "English" },
            { "id": 7, "itemName": "Español" },
            { "id": 8, "itemName": "Eλληνικά" },
            { "id": 9, "itemName": "Français" },
            { "id": 10, "itemName": "Italiano" },
            { "id": 11, "itemName": "Magyar" },
            { "id": 12, "itemName": "Nederlands" },
            { "id": 13, "itemName": "Norsk" },
            { "id": 14, "itemName": "Polski" },
            { "id": 15, "itemName": "Português" },
            { "id": 16, "itemName": "Suomi" },
            { "id": 17, "itemName": "Svenska" },
            { "id": 18, "itemName": "Türkçe" },
            { "id": 19, "itemName": "Íslenska" },
            { "id": 20, "itemName": "Čeština" },
            { "id": 21, "itemName": "Русский" },
            { "id": 22, "itemName": "ภาษาไทย" },
            { "id": 23, "itemName": "中文 (简体)" },
            { "id": 24, "itemName": "中文 (繁體)" },
            { "id": 25, "itemName": "日本語" },
            { "id": 26, "itemName": "한국어" }
        ];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: true,
            text: "Select language",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
        this.dropdownList1 = [
            { "id": 1, "itemName": "ARS" },
            { "id": 2, "itemName": "AUD" },
            { "id": 3, "itemName": "BRL" },
            { "id": 4, "itemName": "CAD" },
            { "id": 5, "itemName": "CHF" },
            { "id": 6, "itemName": "CNY" },
            { "id": 7, "itemName": "CZK" },
            { "id": 8, "itemName": "DKK" },
            { "id": 9, "itemName": "EUR" },
            { "id": 10, "itemName": "GBP" },
            { "id": 11, "itemName": "HKD" },
            { "id": 12, "itemName": "HUF" },
            { "id": 13, "itemName": "IDR" },
            { "id": 14, "itemName": "ILS" },
            { "id": 15, "itemName": "INR" },
            { "id": 16, "itemName": "JPY" },
            { "id": 17, "itemName": "KRW" },
            { "id": 18, "itemName": "MYR" },
            { "id": 19, "itemName": "MXN" },
            { "id": 20, "itemName": "NOK" },
            { "id": 21, "itemName": "NZD" },
            { "id": 22, "itemName": "PHP" },
            { "id": 23, "itemName": "PLN" },
            { "id": 24, "itemName": "RUB" },
            { "id": 25, "itemName": "SEK" },
            { "id": 26, "itemName": "SGD" },
            { "id": 27, "itemName": "TWD" },
            { "id": 28, "itemName": "USD" },
            { "id": 29, "itemName": "VND" },
            { "id": 30, "itemName": "ZAR" }
        ];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {
            singleSelection: true,
            text: "Select currency",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
    };
    FootersAreasComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    FootersAreasComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    FootersAreasComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    FootersAreasComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    FootersAreasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footers-areas',
            template: __webpack_require__("../../../../../src/app/components/footers-areas/footers-areas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footers-areas/footers-areas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FootersAreasComponent);
    return FootersAreasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/info-areas/info-areas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container tim-container\">\n\n    <div id=\"info-areas\">\n        <div class=\"title\">\n            <h3>Info Areas</h3>\n            <h4><small>Simple</small></h4>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n               <div class=\"info\">\n                    <div class=\"icon\">\n                        <i class=\"nc-icon nc-time-alarm\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\"> Save Time </h4>\n                        <p>Spend your time generating new ideas. You don't have to think of implementing anymore.</p>\n                    </div>\n               </div>\n            </div>\n            <div class=\"col-md-4\">\n               <div class=\"info\">\n                    <div class=\"icon\">\n                        <i class=\"nc-icon nc-delivery-fast\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\"> Fast Prototyping </h4>\n                        <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\n                    </div>\n               </div>\n            </div>\n            <div class=\"col-md-4\">\n               <div class=\"info\">\n                    <div class=\"icon\">\n                        <i class=\"nc-icon nc-palette\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\"> Beautiful Colors </h4>\n                        <p>Choose from a veriety of colors resembling sugar paper pastels.</p>\n                    </div>\n               </div>\n            </div>\n        </div>\n        <h4><small>Coloured Icons</small></h4>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n               <div class=\"info\">\n                    <div class=\"icon icon-primary\">\n                        <i class=\"nc-icon nc-album-2\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\"> Beautiful Gallery </h4>\n                        <p>Spend your time generating new ideas. You don't have to think of implementing anymore.</p>\n                    </div>\n               </div>\n            </div>\n            <div class=\"col-md-4\">\n               <div class=\"info\">\n                    <div class=\"icon icon-warning\">\n                        <i class=\"nc-icon nc-bulb-63\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\"> New Ideas </h4>\n                        <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\n                    </div>\n               </div>\n            </div>\n            <div class=\"col-md-4\">\n               <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-chart-bar-32\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\"> Statistics </h4>\n                        <p>Choose from a veriety of colors resembling sugar paper pastels.</p>\n                    </div>\n               </div>\n            </div>\n        </div>\n        <h4><small>Horizontal</small></h4>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n               <div class=\"info info-horizontal\">\n                    <div class=\"icon\">\n                        <i class=\"nc-icon nc-camera-compact\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\"> Beautiful Gallery </h4>\n                        <p>Spend your time generating new ideas. You don't have to think of implementing anymore.</p>\n                        <a href=\"#paper-kit\" class=\"btn btn-link btn-info\">See more</a>\n                    </div>\n               </div>\n            </div>\n            <div class=\"col-md-4\">\n               <div class=\"info info-horizontal\">\n                    <div class=\"icon icon-warning\">\n                        <i class=\"nc-icon nc-glasses-2\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\"> New Ideas </h4>\n                        <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\n                        <a href=\"#paper-kit\" class=\"btn btn-link btn-info\">See more</a>\n                    </div>\n               </div>\n            </div>\n            <div class=\"col-md-4\">\n               <div class=\"info info-horizontal\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-sound-wave\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\"> Statistics </h4>\n                        <p>Choose from a veriety of colors resembling sugar paper pastels.</p>\n                        <a href=\"#paper-kit\" class=\"btn btn-link btn-info\">See more</a>\n                    </div>\n               </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/info-areas/info-areas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/info-areas/info-areas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoAreasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoAreasComponent = /** @class */ (function () {
    function InfoAreasComponent() {
    }
    InfoAreasComponent.prototype.ngOnInit = function () {
    };
    InfoAreasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-info-areas',
            template: __webpack_require__("../../../../../src/app/components/info-areas/info-areas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/info-areas/info-areas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoAreasComponent);
    return InfoAreasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-round\" (click)=\"open(classic, '')\">Classic modal</button>\n<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"c('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"c('Close click')\">Delete</button>\n        </div>\n    </div>\n</ng-template>\n\n\n\n<button type=\"button\" class=\"btn btn-round\" (click)=\"open(Notice, '')\">\n    Notice modal\n</button>\n<ng-template #Notice let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title\">How Do You Become an Affiliate?</h5>\n        <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"instruction\">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <p> <strong>1. Register</strong> - the first step is to create an account at <a href=\"http://www.creative-tim.com/\">Creative Tim</a>. You can choose a social network or go for the classic version, whatever works best for you.</p>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"picture\">\n                        <img src=\"assets/img/sections/angelo-pantazis.jpg\" alt=\"Thumbnail Image\"  class=\"img-rounded img-responsive\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"instruction\">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <p> <strong>2. Apply</strong> - the first step is to create an account at <a href=\"http://www.creative-tim.com/\">Creative Tim</a>. You can choose a social network or go for the classic version, whatever works best for you.</p>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"picture\">\n                        <img src=\"assets/img/sections/rawpixel-coms.jpg\" alt=\"Thumbnail Image\"  class=\"img-rounded img-responsive\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <p>If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help!</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary btn-link\" (click)=\"c('Close click')\">Okay</button>\n    </div>\n</ng-template>\n\n\n<button type=\"button\" class=\"btn btn-danger btn-round\" (click)=\"open(small, 'sm')\">\n    Small alert modal\n</button>\n<ng-template #small let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"no-title modal-header no-border-header\">\n            <!-- <h4 class=\"modal-title\">Modal title</h4> -->\n        <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body text-center\">\n        <h5>Are you sure you want to do this? </h5>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"c('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\">Yes</button>\n        </div>\n    </div>\n</ng-template>\n\n\n\n<button type=\"button\" class=\"btn btn-danger btn-round\" (click)=\"open(small1, 'sm')\">\n    Small notice modal\n</button>\n<ng-template #small1 let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header no-border-header no-title\">\n        <div></div>\n        <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">&times;</button>\n    </div>\n    <div class=\"modal-body text-center\">\n        <p>If you want to do this, you need to allow it in <strong>Settings</strong>. </p>\n        <a href=\"#paper-kit\" class=\"btn btn-link btn-danger\">Learn more</a>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-link\"  (click)=\"c('Close click')\">Okay</button>\n    </div>\n</ng-template>\n\n\n\n<button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"open(Login)\">\n    Login modal\n</button>\n<ng-template #Login let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header modal-register no-border-header text-center\">\n        <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h6 class=\"text-muted\">Welcome</h6>\n        <h3 class=\"modal-title text-center\">Paper Kit</h3>\n        <p>Log in to your account</p>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"text\" value=\"\" placeholder=\"Email\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" value=\"\" placeholder=\"Password\" class=\"form-control\" />\n        </div>\n        <button class=\"btn btn-block btn-round\">Log in</button>\n    </div>\n    <div class=\"modal-register modal-footer no-border-footer\">\n        <span class=\"text-muted text-center\">Looking <a>create an account</a> ?</span>\n    </div>\n</ng-template>\n\n\n\n<button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"open(Register, '')\">\n    Register modal\n</button>\n<ng-template #Register let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header modal-register no-border-header text-center\">\n        <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">&times;</button>\n        <h6 class=\"text-muted\">Welcome</h6>\n        <h3 class=\"modal-title\">Paper Kit</h3>\n        <p>Create your account free and secure</p>\n    </div>\n    <div class=\"modal-body\">\n        <button class=\"btn btn-block btn-round\"> Sign Up with Email</button>\n        <button class=\"btn btn-block btn-round\">Connect with Facebook</button>\n        <button class=\"btn btn-block btn-round\">Connect with Twitter</button>\n        <button type=\"button\" class=\"btn btn-info btn-round btn-block btn-simple\"> Sign In with Email </button>\n    </div>\n    <div class=\"modal-footer no-border-footer\"><br><br><br></div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbdModalBasic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalBasic = /** @class */ (function () {
    function NgbdModalBasic(modalService) {
        this.modalService = modalService;
    }
    NgbdModalBasic.prototype.open = function (content, type) {
        var _this = this;
        if (type === 'sm') {
            console.log('aici');
            this.modalService.open(content, { size: 'sm' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    NgbdModalBasic.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasic = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngbd-modal-component',
            template: __webpack_require__("../../../../../src/app/components/modal/modal.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]])
    ], NgbdModalBasic);
    return NgbdModalBasic;
}());



/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-navigation\">\n    <div class=\"container tim-container\">\n        <div class=\"title\">\n            <h3>Navigation Areas</h3>\n        </div>\n    </div>\n    <div id=\"navbar-full\">\n        <div class=\"navigation-example\">\n    <!--        default navbar with search form -->\n            <nav class=\"navbar navbar-expand-md bg-primary\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\">Brand</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                        <ul class=\"navbar-nav mr-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\">Home <span class=\"sr-only\">(current)</span></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\">Link</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link disabled\">Disabled</a>\n                            </li>\n                        </ul>\n\n                        <form class=\"form-inline ml-auto\">\n                            <input class=\"form-control mr-sm-2 no-border\" type=\"text\" placeholder=\"Search\">\n                            <button type=\"submit\" class=\"btn btn-primary btn-just-icon btn-round\"><i class=\"nc-icon nc-zoom-split\" aria-hidden=\"true\"></i></button>\n                        </form>\n                    </div>\n                </div>\n            </nav>\n\n    <!--        default navbar with profile photo -->\n            <nav class=\"navbar navbar-expand-md bg-info\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\">Navbar with icon</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n\n                    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\">\n                                    Discover\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\">\n                                    Wishlist\n                                </a>\n                            </li>\n\n                            <li class=\"nav-item\">\n                                <a class=\"btn btn-just-icon btn-warning  \">\n                                    <i class=\"nc-icon nc-sound-wave\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"btn btn-just-icon\">\n                                    <i class=\"nc-icon nc-email-85\"></i>\n                                </a>\n                                <span class=\"label label-danger notification-bubble\">2</span>\n                            </li>\n                            <li class=\"nav-item\">\n                                <div ngbDropdown class=\"dropdown image-dropdown\">\n                                    <div class=\"nav-link\" ngbDropdownToggle>\n                                        <div class=\"profile-photo-small\">\n                                            <img src=\"assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\"  class=\"img-circle img-responsive img-no-padding\">\n                                        </div>\n                                    </div>\n                                    <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown-info\">\n                                        <a class=\"dropdown-item\">Me</a>\n                                        <a class=\"dropdown-item\">Settings</a>\n                                        <li class=\"divider\"></li>\n                                        <a class=\"dropdown-item\">Sign out</a>\n                                    </div>\n                              </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n\n            <!--         default navbar with notifications     -->\n            <nav class=\"navbar navbar-expand-md bg-danger\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\">Navbar with notification</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n\n                    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\">\n                                    Discover\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\">\n                                    Wishlist\n                                </a>\n                            </li>\n\n                            <li class=\"nav-item\">\n                                <div ngbDropdown class=\"dropdown image-dropdown\">\n                                    <div class=\"btn btn-just-icon btn-warning \" ngbDropdownToggle>\n                                        <i class=\"nc-icon nc-sound-wave\"></i>\n                                    </div>\n                                    <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown-notification\">\n                                        <li class=\"no-notification\">\n                                               You're all clear!\n                                        </li>\n                                    </div>\n                                </div>\n                            </li>\n                            <li class=\"nav-item\">\n                                <div ngbDropdown class=\"dropdown image-dropdown\">\n                                    <div class=\"btn btn-just-icon btn-danger\" ngbDropdownToggle>\n                                        <i class=\"nc-icon nc-email-85\"></i>\n                                    </div>\n                                    <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown-wide dropdown-notification\">\n                                        <li class=\"dropdown-header\">\n                                            You have 7 unread notifications\n                                        </li>\n                                        <li >\n                                        <ul class=\"dropdown-notification-list scroll-area\">\n                                            <a class=\"notification-item\">\n                                                <div class=\"notification-text\">\n                                                    <span class=\"label label-icon label-success\"><i class=\"nc-icon nc-chat-33\"></i></span>\n                                                    <span class=\"message\"><b>Patrick</b> mentioned you in a comment.</span>\n                                                    <br />\n                                                    <span class=\"time\">20min ago</span>\n\n                                                    <button class=\"btn btn-just-icon read-notification btn-round\">\n                                                        <i class=\"nc-icon nc-check-2\"></i>\n                                                    </button>\n                                                </div>\n                                            </a>\n\n\n                                            <a class=\"notification-item\">\n                                               <div class=\"notification-text\">\n                                                    <span class=\"label label-icon label-info\"><i class=\"nc-icon nc-alert-circle-i\"></i></span>\n\n                                                    <span class=\"message\">Our privacy policy changed!</span>\n                                                    <br />\n                                                    <span class=\"time\">1day ago</span>\n                                                </div>\n                                            </a>\n\n                                            <a class=\"notification-item\">\n                                                <div class=\"notification-text\">\n                                                    <span class=\"label label-icon label-warning\"><i class=\"nc-icon nc-ambulance\"></i></span>\n\n                                                    <span class=\"message\">Please confirm your email address.</span>\n                                                    <br />\n                                                    <span class=\"time\">2days ago</span>\n                                                </div>\n                                            </a>\n                                            <a class=\"notification-item\">\n                                                <div class=\"notification-text\">\n                                                    <span class=\"label label-icon label-primary\"><i class=\"nc-icon nc-paper\"></i></span>\n                                                    <span class=\"message\">Have you thought about marketing?</span>\n                                                    <br />\n                                                    <span class=\"time\">3days ago</span>\n                                                </div>\n                                            </a>\n                                         </ul>\n                                         </li>\n                                        <!--      end scroll area -->\n\n                                        <li class=\"dropdown-footer\">\n                                            <ul class=\"dropdown-footer-menu\">\n                                                <li>\n                                                    <a>Mark all as read</a>\n                                                </li>\n                                            </ul>\n                                        </li>\n                                    </div>\n                                </div>\n                            </li>\n                            <li class=\"nav-item\">\n                                <div ngbDropdown class=\"dropdown image-dropdown\">\n                                    <div class=\"nav-link navbar-brand\" ngbDropdownToggle>\n                                        <div class=\"profile-photo-small\">\n                                            <img src=\"assets/img/faces/erik-lucatero-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-responsive img-no-padding\">\n                                        </div>\n                                    </div>\n                                    <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown-wide dropdown-notification dropdown-danger\">\n                                        <div class=\"dropdown-header\">Dropdown header</div>\n                                        <a class=\"dropdown-item\">Action</a>\n                                        <a class=\"dropdown-item\">Another action</a>\n                                        <a class=\"dropdown-item\">Something else here</a>\n                                        <div class=\"dropdown-divider\"></div>\n                                        <a class=\"dropdown-item\">Separated link</a>\n                                        <div class=\"dropdown-divider\"></div>\n                                        <a class=\"dropdown-item\">Another separated link</a>\n                                    </div>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n        </div>\n    </div>\n</div>\n<div class=\"section section-navbars\">\n    <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"title\">\n            <h3>Menu</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <nav class=\"navbar navbar-expand-md bg-warning\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\">Yellow Menu</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\n                            <ul class=\"navbar-nav mr-auto\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <div ngbDropdown class=\"dropdown\">\n                                        <div class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\n                                            Dropdown\n                                        </div>\n                                        <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown-warning\">\n                                            <div class=\"dropdown-header\">Dropdown header</div>\n                                            <a class=\"dropdown-item\">Action</a>\n                                            <a class=\"dropdown-item\">Another action</a>\n                                            <a class=\"dropdown-item\">Something else here</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Separated link</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Another separated link</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <nav class=\"navbar navbar-expand-md bg-success\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\">Green Menu</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu-icon\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                            <ul class=\"navbar-nav ml-auto\">\n                                <form class=\"form-inline\">\n                                    <input class=\"form-control mr-sm-2 no-border\" type=\"text\" placeholder=\"Search\">\n                                    <button type=\"submit\" class=\"btn btn-primary btn-just-icon btn-round\"><i class=\"nc-icon nc-zoom-split\"></i></button>\n                                </form>\n                                <li class=\"nav-item active\">\n                                    <a class=\"nav-link\">Link <span class=\"sr-only\">(current)</span></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\">Another Link</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\" >\n        <div class=\"container\">\n            <div class=\"alert-wrapper\">\n                <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\n                    <i class=\"nc-icon nc-simple-remove\"></i>\n                </button>\n                <div class=\"message\">\n                    <ng-container *ngIf=\"alert.icon\">\n                        <i class=\"nc-icon {{alert.icon}}\"></i>\n                    </ng-container>\n                    {{ alert.message }}\n                </div>\n\n\n            </div>\n        </div>\n    </ngb-alert>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
            icon: 'nc-bell-55'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
            icon: 'nc-bell-55'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], NotificationComponent.prototype, "alerts", void 0);
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__("../../../../../src/app/components/notification/notification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nucleoicons/nucleoicons.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <h1>Paper Kit 2 PRO Icons</h1>\n    <p>Built with <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a></p>\n</header>\n\n<div id=\"icons-wrapper\">\n    <section>\n        <ul>\n            <li>\n                <i class=\"nc-icon nc-air-baloon\"></i>\n                <p>nc-air-baloon</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-album-2\"></i>\n                <p>nc-album-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-alert-circle-i\"></i>\n                <p>nc-alert-circle-i</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-center\"></i>\n                <p>nc-align-center</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-left-2\"></i>\n                <p>nc-align-left-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ambulance\"></i>\n                <p>nc-ambulance</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-app\"></i>\n                <p>nc-app</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-atom\"></i>\n                <p>nc-atom</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-badge\"></i>\n                <p>nc-badge</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bag-16\"></i>\n                <p>nc-bag-16</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bank\"></i>\n                <p>nc-bank</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-basket\"></i>\n                <p>nc-basket</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bell-55\"></i>\n                <p>nc-bell-55</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bold\"></i>\n                <p>nc-bold</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-book-bookmark\"></i>\n                <p>nc-book-bookmark</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bookmark-2\"></i>\n                <p>nc-bookmark-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box-2\"></i>\n                <p>nc-box-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box\"></i>\n                <p>nc-box</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-briefcase-24\"></i>\n                <p>nc-briefcase-24</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bulb-63\"></i>\n                <p>nc-bulb-63</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bullet-list-67\"></i>\n                <p>nc-bullet-list-67</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bus-front-12\"></i>\n                <p>nc-bus-front-12</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-pause\"></i>\n                <p>nc-button-pause</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-play\"></i>\n                <p>nc-button-play</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-power\"></i>\n                <p>nc-button-power</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-calendar-60\"></i>\n                <p>nc-calendar-60</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-camera-compact\"></i>\n                <p>nc-camera-compact</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-caps-small\"></i>\n                <p>nc-caps-small</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cart-simple\"></i>\n                <p>nc-cart-simple</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-bar-32\"></i>\n                <p>nc-chart-bar-32</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-pie-36\"></i>\n                <p>nc-chart-pie-36</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chat-33\"></i>\n                <p>nc-chat-33</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-check-2\"></i>\n                <p>nc-check-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-circle-10\"></i>\n                <p>nc-circle-10</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-download-93\"></i>\n                <p>nc-cloud-download-93</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-upload-94\"></i>\n                <p>nc-cloud-upload-94</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-compass-05\"></i>\n                <p>nc-compass-05</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-controller-modern\"></i>\n                <p>nc-controller-modern</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-credit-card\"></i>\n                <p>nc-credit-card</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-delivery-fast\"></i>\n                <p>nc-delivery-fast</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-diamond\"></i>\n                <p>nc-diamond</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-email-85\"></i>\n                <p>nc-email-85</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-favourite-28\"></i>\n                <p>nc-favourite-28</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-glasses-2\"></i>\n                <p>nc-glasses-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe-2\"></i>\n                <p>nc-globe-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe\"></i>\n                <p>nc-globe</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-hat-3\"></i>\n                <p>nc-hat-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-headphones\"></i>\n                <p>nc-headphones</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-html5\"></i>\n                <p>nc-html5</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-image\"></i>\n                <p>nc-image</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-istanbul\"></i>\n                <p>nc-istanbul</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-key-25\"></i>\n                <p>nc-key-25</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-laptop\"></i>\n                <p>nc-laptop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-layout-11\"></i>\n                <p>nc-layout-11</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-lock-circle-open\"></i>\n                <p>nc-lock-circle-open</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-map-big\"></i>\n                <p>nc-map-big</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-down\"></i>\n                <p>nc-minimal-down</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-left\"></i>\n                <p>nc-minimal-left</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-right\"></i>\n                <p>nc-minimal-right</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-up\"></i>\n                <p>nc-minimal-up</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-mobile\"></i>\n                <p>nc-mobile</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-money-coins\"></i>\n                <p>nc-money-coins</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-note-03\"></i>\n                <p>nc-note-03</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-palette\"></i>\n                <p>nc-palette</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-paper\"></i>\n                <p>nc-paper</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-pin-3\"></i>\n                <p>nc-pin-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-planet\"></i>\n                <p>nc-planet</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-refresh-69\"></i>\n                <p>nc-refresh-69</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ruler-pencil\"></i>\n                <p>nc-ruler-pencil</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-satisfied\"></i>\n                <p>nc-satisfied</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-scissors\"></i>\n                <p>nc-scissors</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-send\"></i>\n                <p>nc-send</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings-gear-65\"></i>\n                <p>nc-settings-gear-65</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings\"></i>\n                <p>nc-settings</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-share-66\"></i>\n                <p>nc-share-66</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-shop\"></i>\n                <p>nc-shop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-add\"></i>\n                <p>nc-simple-add</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-delete\"></i>\n                <p>nc-simple-delete</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-remove\"></i>\n                <p>nc-simple-remove</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-02\"></i>\n                <p>nc-single-02</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-copy-04\"></i>\n                <p>nc-single-copy-04</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sound-wave\"></i>\n                <p>nc-sound-wave</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-spaceship\"></i>\n                <p>nc-spaceship</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sun-fog-29\"></i>\n                <p>nc-sun-fog-29</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-support-17\"></i>\n                <p>nc-support-17</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tablet-2\"></i>\n                <p>nc-tablet-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tag-content\"></i>\n                <p>nc-tag-content</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tap-01\"></i>\n                <p>nc-tap-01</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tie-bow\"></i>\n                <p>nc-tie-bow</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tile-56\"></i>\n                <p>nc-tile-56</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-time-alarm\"></i>\n                <p>nc-time-alarm</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-touch-id\"></i>\n                <p>nc-touch-id</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-trophy\"></i>\n                <p>nc-trophy</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tv-2\"></i>\n                <p>nc-tv-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-umbrella-13\"></i>\n                <p>nc-umbrella-13</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-user-run\"></i>\n                <p>nc-user-run</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-vector\"></i>\n                <p>nc-vector</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-watch-time\"></i>\n                <p>nc-watch-time</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-world-2\"></i>\n                <p>nc-world-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-zoom-split\"></i>\n                <p>nc-zoom-split</p>\n            </li>\n            <!-- list of icons here with the proper class-->\n        </ul>\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/nucleoicons/nucleoicons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nucleoicons/nucleoicons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NucleoiconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('app-nucleoicons')[0];
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        body.classList.add('demo-icons');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-hidden');
    };
    NucleoiconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nucleoicons',
            template: __webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/prefooter-areas/prefooter-areas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section sections-prefooter\">\n    <div class=\"container tim-container\">\n        <div class=\"title\" id=\"subscription\">\n            <h3>Pre-footer Areas</h3>\n        </div>\n        <h4><small>Subscription</small></h4>\n    </div>\n</div>\n<div class=\"subscribe-line\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-9 col-sm-8\">\n                <form class=\"\">\n                    <div class=\"form-group\">\n                          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Enter your email...\">\n                    </div>\n                </form>\n            </div>\n            <div class=\"col-md-3 col-sm-4\">\n                <button type=\"button\" class=\"btn btn-danger btn-block btn-lg\">Subscribe Now!</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"separator\"></div>\n\n<div class=\"subscribe-line subscribe-line-black\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-9 col-sm-8\">\n                <form class=\"\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Enter your email...\">\n                    </div>\n                </form>\n            </div>\n            <div class=\"col-md-3 col-sm-4\">\n                <button type=\"button\" class=\"btn btn-neutral btn-block btn-lg\">Join Newsletter</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"separator\"></div>\n\n<div class=\"subscribe-line subscribe-line-transparent\" style=\"background-image: url('assets/img/sections/pavel-kosov.jpg')\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-9 col-sm-8\">\n                <form class=\"\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Enter your email...\">\n                    </div>\n                </form>\n            </div>\n            <div class=\"col-md-3 col-sm-4\">\n                <button type=\"button\" class=\"btn btn-info btn-block btn-round\">Subscribe Now!</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"separator\"></div>\n\n\n<!-- social and sharing areas -->\n<div class=\"section\">\n    <div class=\"container tim-container\">\n        <div class=\"title\">\n            <h4><small>Social and Sharing</small></h4>\n        </div>\n    </div>\n</div>\n<div class=\"social-line\" id=\"sharing\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4 col-sm-12\">\n                <h4 class=\"title\">We are social</h4>\n            </div>\n            <div class=\"col-md-2 col-sm-3\">\n                <a href=\"\" class=\"btn btn-link btn-just-icon btn-facebook\">\n                    <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> Facebook\n                </a>\n            </div>\n              <div class=\"col-md-2 col-sm-3\">\n                <a href=\"\" class=\"btn btn-link btn-just-icon btn-twitter\">\n                    <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Twitter\n                </a>\n             </div>\n             <div class=\"col-md-2 col-sm-3\">\n                <a href=\"\" class=\"btn btn-link btn-just-icon btn-dribbble\">\n                    <i class=\"fa fa-dribbble\" aria-hidden=\"true\"></i> Dribbble\n                </a>\n            </div>\n            <div class=\"col-md-2 col-sm-3\">\n                <a href=\"\" class=\"btn btn-link btn-just-icon btn-youtube\">\n                    <i class=\"fa fa-youtube\" aria-hidden=\"true\"></i> Youtube\n                </a>\n            </div>\n        </div>\n    </div>\n </div>\n\n<div class=\"separator\"></div>\n<div class=\"social-line social-line-black\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4 col-sm-12\">\n                <h4 class=\"title\">Follow Us</h4>\n            </div>\n            <div class=\"col-md-2 col-sm-3\">\n                <a href=\"\" class=\"btn btn-link btn-neutral\">\n                    <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Twitter\n                </a>\n            </div>\n            <div class=\"col-md-2 col-sm-3\">\n                <a href=\"\" class=\"btn btn-link btn-neutral\">\n                    <i class=\"fa fa-dribbble\" aria-hidden=\"true\"></i> Dribbble\n                </a>\n            </div>\n            <div class=\"col-md-2 col-sm-3\">\n                <a href=\"\" class=\"btn btn-link btn-neutral\">\n                    <i class=\"fa fa-youtube\" aria-hidden=\"true\"></i> Youtube\n                </a>\n            </div>\n            <div class=\"col-md-2 col-sm-3\">\n                <a href=\"\" class=\"btn btn-link btn-neutral\">\n                    <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i> Google+\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"separator\"></div>\n<div class=\"social-line\" id=\"social-sharing\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <h4 class=\"title\">Thank you for sharing!</h4>\n            </div>\n            <div class=\"col-md-2 col-sm-6\">\n                <a href=\"\" class=\"btn btn-round btn-facebook\">\n                    <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> Share &middot; 753\n                </a>\n            </div>\n            <div class=\"col-md-2 col-sm-6\">\n                <a href=\"\" class=\"btn btn-round btn-twitter\">\n                    <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Tweet &middot; 832\n                </a>\n            </div>\n            <div class=\"col-md-2 col-sm-6\">\n                <a href=\"\" class=\"btn btn-round btn-google\">\n                    <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i> Share &middot; 131\n                </a>\n            </div>\n            <div class=\"col-md-2 col-sm-6\">\n                <a href=\"\" class=\"btn btn-round btn-youtube\">\n                    <i class=\"fa fa-pinterest-p\" aria-hidden=\"true\"></i> Pin it &middot; 323\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/prefooter-areas/prefooter-areas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/prefooter-areas/prefooter-areas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrefooterAreasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrefooterAreasComponent = /** @class */ (function () {
    function PrefooterAreasComponent() {
    }
    PrefooterAreasComponent.prototype.ngOnInit = function () {
    };
    PrefooterAreasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-prefooter-areas',
            template: __webpack_require__("../../../../../src/app/components/prefooter-areas/prefooter-areas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/prefooter-areas/prefooter-areas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrefooterAreasComponent);
    return PrefooterAreasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tables-areas/tables-areas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-gray\">\n    <div class=\"container tim-container\">\n        <div class=\"title\">\n            <h3>Tables</h3>\n        </div>\n        <h4>Simple Table</h4>\n        <div class=\"row\">\n            <div class=\"col-md-8 ml-auto mr-auto\">\n                <h4 class=\"title\">\n                    <small>Simple With Actions</small>\n                </h4>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                              <th class=\"text-center\">{{ tableData1.headerRow[0] }}</th>\n                              <th>{{ tableData1.headerRow[1] }}</th>\n                              <th>{{ tableData1.headerRow[2] }}</th>\n                              <th class=\"text-right\">{{ tableData1.headerRow[4] }}</th>\n                              <th class=\"text-right\">{{ tableData1.headerRow[5] }}</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let row of tableData1.dataRows\">\n                                <td class=\"text-center\">{{row[0]}}</td>\n                                <td>{{row[1]}}</td>\n                                <td>{{row[2]}}</td>\n                                <td class=\"text-right\">&euro; {{row[4]}}</td>\n                                <td class=\"td-actions text-right\">\n                                    <button type=\"button\" ngbTooltip=\"View Profile\" class=\"btn btn-info btn-link btn-sm\">\n                                        <i class=\"fa fa-user\"></i>\n                                    </button>\n                                    <button type=\"button\" ngbTooltip=\"Edit Profile\" class=\"btn btn-success btn-link btn-sm\">\n                                        <i class=\"fa fa-edit\"></i>\n                                    </button>\n                                    <button type=\"button\" ngbTooltip=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                        <i class=\"fa fa-times\"></i>\n                                    </button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n\n                <h4 class=\"title\">\n                    <small>Striped With Checkboxes</small>\n                </h4>\n                <div class=\"table-responsive\">\n                    <table class=\"table table-striped\">\n                        <thead>\n                            <tr>\n                                <th class=\"text-center\">{{ tableData2.headerRow[0] }}</th>\n                                <th></th>\n                                <th>{{ tableData2.headerRow[1] }}</th>\n                                <th>{{ tableData2.headerRow[2] }}</th>\n                                <th>{{ tableData2.headerRow[3] }}</th>\n                                <th class=\"text-right\">{{ tableData2.headerRow[4] }}</th>\n                                <th class=\"text-right\">{{ tableData2.headerRow[5] }}</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let row of tableData2.dataRows\">\n                                <td class=\"text-center\">{{row.id}}</td>\n                                <td>\n                                    <div [ngSwitch]=\"row.check\">\n                                        <div *ngSwitchCase=\"true\">\n                                            <div class=\"form-check\">\n                                                <label class=\"form-check-label\">\n                                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                    <span class=\"form-check-sign\"></span>\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <div *ngSwitchDefault>\n                                            <div class=\"form-check\">\n                                                <label class=\"form-check-label\">\n                                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" >\n                                                    <span class=\"form-check-sign\"></span>\n                                                </label>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>{{row.product_name}}</td>\n                                <td>{{row.type}}</td>\n                                <td>{{row.qty}}</td>\n                                <td class=\"text-right\">&euro; {{row.price}}</td>\n                                <td class=\"text-right\">&euro; {{row.amount}}</td>\n                            </tr>\n                            <tr>\n                                <td colspan=\"5\"></td>\n                                <td class=\"td-total\">\n                                    Total\n                                </td>\n                                <td class=\"td-price\">\n                                    {{getTotal1()| currency:'EUR':true:'1.2-2'}}\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h4 class=\"title\">Shopping Cart Table</h4>\n            </div>\n            <div class=\"col-md-10 ml-auto mr-auto\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-shopping\">\n                        <thead>\n                            <tr>\n                                <th class=\"text-center\"></th>\n                                <th></th>\n                                <th class=\"text-right\">{{ tableData3.headerRow[2] }}</th>\n                                <th class=\"text-right\">{{ tableData3.headerRow[3] }}</th>\n                                <th class=\"text-right\">{{ tableData3.headerRow[4] }}</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let row of tableData3.dataRows\">\n                                <td>\n                                    <div class=\"img-container\">\n                                        <img src=\"./assets/img/{{row[0]}}\" alt=\"...\">\n                                    </div>\n                                </td>\n                                <td class=\"td-product\">\n                                    <strong>{{row[1]}}</strong>\n                                    <p>{{row[2]}}</p>\n                                </td>\n                                <td class=\"td-price\">\n                                    <small>&euro;</small>{{row[3]}}\n                                </td>\n                                <td class=\"td-number td-quantity\">\n                                    {{row[4]}}\n                                    <div class=\"btn-group\">\n                                        <button class=\"btn btn-sm btn-border btn-round\"> - </button>\n                                        <button class=\"btn btn-sm btn-border btn-round\"> + </button>\n                                    </div>\n                                </td>\n                                <td class=\"td-number\">\n                                    <small>&euro;</small>{{row[5]}}\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td colspan=\"2\"></td>\n                                <td></td>\n                                  <td class=\"td-total\">\n                                    Total\n                                </td>\n                                <td class=\"td-total\">\n                                    {{getTotal2()| currency:'EUR':true:'1.2-2'}}\n                                </td>\n                            </tr>\n                            <tr class=\"tr-actions\">\n                               <td colspan=\"3\"></td>\n                               <td colspan=\"2\" class=\"text-right\">\n                                   <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"showElements()\">Complete Purchase <i class=\"fa fa-chevron-right\"></i></button>\n                               </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/tables-areas/tables-areas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables-areas/tables-areas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesAreasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TablesAreasComponent = /** @class */ (function () {
    function TablesAreasComponent() {
    }
    TablesAreasComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['#', 'Name', 'Job Position', 'Since', 'Salary', 'Actions'],
            dataRows: [
                ['1', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['2', 'John Doe', 'Design', '2012', '89,241', ''],
                ['3', 'Alex Mike', 'Design', '2010', '92,144', ''],
                ['4', 'Mike Monday', 'Marketing', '2013', '49,990', ''],
                ['5', 'Paul Dickens', 'Communication', '2015', '69,201', '']
            ]
        };
        this.tableData2 = {
            headerRow: ['#', 'Product Name', 'Type', 'Qty', 'Price', 'Amount'],
            dataRows: [
                { id: 1, product_name: 'Moleskine Agenda', type: 'Office', qty: 25, price: '49', amount: '1225', check: false },
                { id: 2, product_name: 'Stabilo Pen', type: 'Office', qty: 30, price: '10', amount: '300', check: true },
                { id: 3, product_name: 'A4 Paper Pack', type: 'Office', qty: 50, price: '10.99', amount: '109', check: true },
                { id: 4, product_name: 'Apple iPad', type: 'Meeting', qty: 10, price: '499.00', amount: '4990', check: false },
                { id: 5, product_name: 'Apple iPhone', type: 'Communication', qty: 10, price: '599.00', amount: '5990', check: false }
            ]
        };
        this.tableData3 = {
            headerRow: ['', '', 'Price', 'Quantity', 'Total'],
            dataRows: [
                ['tables/agenda.png', 'Get Shit Done Notebook', 'Most beautiful agenda for the office.', '49', '1', '49'],
                ['tables/stylus.jpg', 'Stylus', 'Design is not just what it looks like and feels like. Design is how it works.', '499', '2', '998'],
                ['tables/evernote.png', 'Evernote iPad Stander', 'A groundbreaking Retina display. All-flash architecture. Fourth-generation Intel processors.', '799', '1', '799']
            ]
        };
    };
    TablesAreasComponent.prototype.getTotal1 = function () {
        var total = 0;
        for (var i = 0; i < this.tableData2.dataRows.length; i++) {
            var integer = parseInt(this.tableData2.dataRows[i].amount);
            total += integer;
        }
        return total;
    };
    ;
    TablesAreasComponent.prototype.getTotal2 = function () {
        var total = 0;
        for (var i = 0; i < this.tableData3.dataRows.length; i++) {
            var integer = parseInt(this.tableData3.dataRows[i][5]);
            total += integer;
        }
        return total;
    };
    ;
    TablesAreasComponent.prototype.showElements = function () {
        for (var i = 0; i < this.tableData3.dataRows.length; i++) {
            console.log(this.tableData3.dataRows[i][1]);
        }
    };
    TablesAreasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tables-areas',
            template: __webpack_require__("../../../../../src/app/components/tables-areas/tables-areas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tables-areas/tables-areas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TablesAreasComponent);
    return TablesAreasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container tim-container\">\n        <div class=\"title\">\n            <h3>Typography</h3>\n        </div>\n        <div id=\"typography\">\n            <div class=\"row\">\n                <div class=\"typography-line\">\n                    <h1>\n                        <span class=\"note\">Header 1</span> Thinking in textures\n                    </h1>\n                </div>\n                <div class=\"typography-line\">\n                    <h2>\n                        <span class=\"note\">Header 2</span> Thinking in textures\n                    </h2>\n                </div>\n                <div class=\"typography-line\">\n                    <h3>\n                        <span class=\"note\">Header 3</span> Thinking in textures\n                    </h3>\n                </div>\n                <div class=\"typography-line\">\n                    <h4>\n                        <span class=\"note\">Header 4</span> Thinking in textures\n                    </h4>\n                </div>\n                <div class=\"typography-line\">\n                    <h5>\n                        <span class=\"note\">Header 5</span> Thinking in textures\n                    </h5>\n                </div>\n                <div class=\"typography-line\">\n                    <h6>\n                        <span class=\"note\">Header 6</span> Thinking in textures\n                    </h6>\n                </div>\n                <div class=\"typography-line\">\n                    <p>\n                        <span class=\"note\">Paragraph</span> Thinking in textures\n                    </p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Quote</span>\n                    <blockquote class=\"blockquote\">\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p><br/>\n                        <footer class=\"blockquote-footer\">Someone famous in <cite title=\"source Title\">Source Title</cite></footer>\n                    </blockquote>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Muted text</span>\n                    <p class=\"text-muted\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Primary text</span>\n                    <p class=\"text-primary\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Success text</span>\n                    <p class=\"text-success\">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Info text</span>\n                    <p class=\"text-info\">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Warning text</span>\n                    <p class=\"text-warning\">Etiam porta sem malesuada magna mollis euismod.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Danger text</span>\n                    <p class=\"text-danger\">Donec ullamcorper nulla non metus auctor fringilla.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <h2><span class=\"note\">Small tag</span>Header with small subtitle\n                        <br/>\n                        <small>\".small\" is a tag for the headers</small>\n                    </h2>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div id=\"images\">\n            <div class=\"container\">\n                <div class=\"title\">\n                    <h3>Images</h3>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6 col-md-3\">\n                        <h4 class=\"images-title\">Rounded Image</h4>\n                        <img src=\"assets/img/sections/por7o.jpg\" class=\"img-rounded img-responsive\" alt=\"Rounded Image\">\n                        <div class=\"img-details\">\n                            <div class=\"author\">\n                                <img src=\"assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                            </div>\n                            <p>Sonia Green </p>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-3 col-md-2 mr-auto ml-auto\">\n                        <h4 class=\"images-title\">Circle Image</h4>\n                        <img src=\"assets/img/faces/kaci-baum-2.jpg\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">Brigitte Bardot</p>\n                    </div>\n                    <div class=\"col-sm-3 col-md-2 mr-auto\">\n                        <h4 class=\"images-title\">Thumbnail</h4>\n                        <img src=\"assets/img/faces/erik-lucatero-2.jpg\" class=\"img-thumbnail img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">John Keynes</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/typography/typography.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__("../../../../../src/app/components/typography/typography.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/typography/typography.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/aboutus/aboutus.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header page-header-small\" style=\" background-image: url('./assets/img/Profile/header.jpg');\">\n\n    <div class=\"content-center\">\n        <div class=\"container\">\n            <h1>Hey</h1>\n            <br>\n            <h2>我想灌醉你</h2>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"wrapper\">\n    <div class=\"main\">\n        <div class=\"section\">\n            <div class=\"container\">\n                <h3 class=\"title-uppercase\">\n                    <i class=\"fa fa-heart heart\"></i>&nbsp; ##热血青年##</h3>\n                <br>\n                <br>\n                <h5>Sweetness中国的伙伴与世界各地的伙伴一样热情、真诚、体贴、博学、充满激情。他们热爱Sweetness文化，积极参与培训，将Sweetness驰名世界的优质服务带到中国。他们是Sweetness与顾客之间的桥梁，也是Sweetness品牌价值的载体和体现。正是这些伙伴以他们的热情和专业，在为顾客们提供一流的服务的同时，将Sweetness的文化和精神内涵传递给我们的顾客。</h5>\n                <br>\n\n\n\n                <h2 class=\"text-center creators\">scarlet</h2>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"card card-profile card-plain\">\n                            <div class=\"card-body\">\n                                <div class=\"card-avatar\">\n                                    <a href=\"#avatar\">\n                                        <img src=\"./assets/img/Profile/aboutus.png\" alt=\"...\">\n                                    </a>\n                                </div>\n                                <p class=\"card-description text-center\">\n                                    A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others.\n                                    No one can whistle a symphony. It takes orchestra to play it.\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n                <div class=\"blog-4\">\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"col-md-8 ml-auto mr-auto\">\n\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"card card-plain card-blog text-center\">\n                                    <div class=\"card-image\">\n                                        <a href=\"#pablo\">\n                                            <img class=\"img img-raised\" src=\"./assets/img/Profile/aboutus2.jpg\" />\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"card card-plain card-blog text-center\">\n                                    <div class=\"card-image\">\n                                        <a href=\"#pablo\">\n                                            <img class=\"img img-raised\" src=\"./assets/img/Profile/WeChat Image.jpg\" />\n                                        </a>\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <h5 class=\"card-category text-info\">春风十里，我想灌醉你</h5>\n                                        <h3 class=\"card-title\">\n                                        </h3>\n                                        <p class=\"card-description\">\n                                            期待一场波涛暗涌的互撩\n                                        </p>\n                                        <br/>\n                                        <a href=\"#pablo\" class=\"btn btn-primary btn-round\">撩！</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<footer class=\"footer footer-black footer-big\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4  col-sm-4 col-12 ml-auto mr-auto\">\n                <div class=\"card-image\">\n                    <img class=\"img-rounded img-responsive\" src=\"./assets/img/Profile/icon.jpg\" alt=\"...\">\n                </div>\n            </div>\n            <div class=\"col-md-8 col-sm-8 col-12 ml-auto mr-auto\">\n\n\n                <hr />\n                <div class=\"row\">\n                    <div class=\"col-md-4 col-sm-4 col-4\">\n                        <div class=\"links\">\n                            <ul class=\"uppercase-links stacked-links\">\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                        Home\n                                    </a>\n                                </li>\n                            </ul>\n\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 col-sm-4 col-4\">\n                        <div class=\"links\">\n                            <ul class=\"uppercase-links stacked-links\">\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                        Contact Us\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 col-sm-4 col-4\">\n                        <div class=\"links\">\n                            <ul class=\"uppercase-links stacked-links\">\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                        Portfolio\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"copyright\">\n                    <div class=\"pull-left\">\n                        &copy; {{data | date: 'yyyy'}} SCARLET\n                    </div>\n                    <div class=\"links pull-right\">\n                        <ul>\n                            <li>\n                                <a href=\"#paper-kit\">\n                                    Company Policy\n                                </a>\n                            </li>\n                            |\n                            <li>\n                                <a href=\"#paper-kit\">\n                                    Terms\n                                </a>\n                            </li>\n                            |\n                            <li>\n                                <a href=\"#paper-kit\">\n                                    Privacy\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/examples/aboutus/aboutus.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/aboutus/aboutus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList1 = [];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {};
        this.data = new Date();
    }
    AboutusComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('about-us');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        this.dropdownList = [
            { "id": 1, "itemName": "Bahasa Indonesia" },
            { "id": 2, "itemName": "Bahasa Melayu" },
            { "id": 3, "itemName": "Català" },
            { "id": 4, "itemName": "Dansk" },
            { "id": 5, "itemName": "Deutsch" },
            { "id": 6, "itemName": "English" },
            { "id": 7, "itemName": "Español" },
            { "id": 8, "itemName": "Eλληνικά" },
            { "id": 9, "itemName": "Français" },
            { "id": 10, "itemName": "Italiano" },
            { "id": 11, "itemName": "Magyar" },
            { "id": 12, "itemName": "Nederlands" },
            { "id": 13, "itemName": "Norsk" },
            { "id": 14, "itemName": "Polski" },
            { "id": 15, "itemName": "Português" },
            { "id": 16, "itemName": "Suomi" },
            { "id": 17, "itemName": "Svenska" },
            { "id": 18, "itemName": "Türkçe" },
            { "id": 19, "itemName": "Íslenska" },
            { "id": 20, "itemName": "Čeština" },
            { "id": 21, "itemName": "Русский" },
            { "id": 22, "itemName": "ภาษาไทย" },
            { "id": 23, "itemName": "中文 (简体)" },
            { "id": 24, "itemName": "中文 (繁體)" },
            { "id": 25, "itemName": "日本語" },
            { "id": 26, "itemName": "한국어" }
        ];
        this.selectedItems = [
            { "id": 4, "itemName": "Dansk" }
        ];
        this.dropdownSettings = {
            singleSelection: true,
            text: "Select language",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
        this.dropdownList1 = [
            { "id": 1, "itemName": "ARS" },
            { "id": 2, "itemName": "AUD" },
            { "id": 3, "itemName": "BRL" },
            { "id": 4, "itemName": "CAD" },
            { "id": 5, "itemName": "CHF" },
            { "id": 6, "itemName": "CNY" },
            { "id": 7, "itemName": "CZK" },
            { "id": 8, "itemName": "DKK" },
            { "id": 9, "itemName": "EUR" },
            { "id": 10, "itemName": "GBP" },
            { "id": 11, "itemName": "HKD" },
            { "id": 12, "itemName": "HUF" },
            { "id": 13, "itemName": "IDR" },
            { "id": 14, "itemName": "ILS" },
            { "id": 15, "itemName": "INR" },
            { "id": 16, "itemName": "JPY" },
            { "id": 17, "itemName": "KRW" },
            { "id": 18, "itemName": "MYR" },
            { "id": 19, "itemName": "MXN" },
            { "id": 20, "itemName": "NOK" },
            { "id": 21, "itemName": "NZD" },
            { "id": 22, "itemName": "PHP" },
            { "id": 23, "itemName": "PLN" },
            { "id": 24, "itemName": "RUB" },
            { "id": 25, "itemName": "SEK" },
            { "id": 26, "itemName": "SGD" },
            { "id": 27, "itemName": "TWD" },
            { "id": 28, "itemName": "USD" },
            { "id": 29, "itemName": "VND" },
            { "id": 30, "itemName": "ZAR" }
        ];
        this.selectedItems1 = [
            { "id": 28, "itemName": "USD" }
        ];
        this.dropdownSettings1 = {
            singleSelection: true,
            text: "Select currency",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
    };
    AboutusComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    AboutusComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    AboutusComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    AboutusComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    AboutusComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('about-us');
        var navbar = document.getElementsByTagName('nav')[0];
        body.classList.remove('navbar-transparent');
    };
    AboutusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__("../../../../../src/app/examples/aboutus/aboutus.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/aboutus/aboutus.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/addproduct/addproduct.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"main\">\n        <div class=\"section\">\n            <div class=\"container\">\n                <h3>Add Product</h3>\n                <form>\n                    <div class=\"row\">\n                        <div class=\"col-md-5 col-sm-5\">\n                            <h6>Product Image</h6>\n                            <app-image-upload></app-image-upload>\n                            <h6>Tags</h6>\n                            <tag-input [(ngModel)]='tagItems' theme='regular-theme' name=\"tagItems\"></tag-input>\n\n                            <h6>Categories</h6>\n                            <tag-input [(ngModel)]='categories' name=\"categories\" theme='regular-theme'></tag-input>\n\n                            <h6>Format <span class=\"icon-danger\">*</span></h6>\n\t\t\t\t\t\t\t<div class=\"form-check-radio\">\n                                <label class=\"form-check-label\">\n                                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" >\n                                    Digital\n                                    <span class=\"form-check-sign\"></span>\n                                </label>\n                            </div>\n                            <div class=\"form-check-radio\">\n                                <label class=\"form-check-label\">\n                                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\" checked>\n                                    Print\n                                    <span class=\"form-check-sign\"></span>\n                                </label>\n                            </div>\n\n                        </div>\n\n                        <div class=\"col-md-7 col-sm-7\">\n                            <div class=\"form-group\">\n                                <h6>Name <span class=\"icon-danger\">*</span></h6>\n                                <input type=\"text\" class=\"form-control border-input\" placeholder=\"enter the product name here...\">\n                            </div>\n                            <div class=\"form-group\">\n                                <h6>Tagline <span class=\"icon-danger\">*</span></h6>\n                                <input type=\"text\" class=\"form-control border-input\" placeholder=\"enter the product tagline here...\">\n                            </div>\n                            <div class=\"row price-row\">\n                                <div class=\"col-md-6\">\n                                    <h6>Price <span class=\"icon-danger\">*</span></h6>\n                                    <div class=\"input-group border-input\">\n                                        <input type=\"text\" value=\"\" placeholder=\"enter price\" class=\"form-control border-input\">\n                                        <span class=\"input-group-addon\"><i class=\"fa fa-euro\"></i></span>\n                                    </div>\n\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <h6>Discount</h6>\n                                    <div class=\"input-group border-input\">\n                                        <input type=\"text\" value=\"\" placeholder=\"enter discount\" class=\"form-control border-input\">\n                                        <span class=\"input-group-addon\">%</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <h6>Description</h6>\n\t\t\t\t\t\t\t\t<textarea class=\"form-control textarea-limited\" placeholder=\"This is a textarea limited to 150 characters.\" rows=\"13\" maxlength=\"150\" ></textarea>\n                                <h5><small><span id=\"textarea-limited-message\" class=\"pull-right\">150 characters left</span></small></h5>\n\n                            </div>\n\t\t\t\t\t\t\t<div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                \tDisplay on landing page\n                                    <span class=\"form-check-sign\"></span>\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <div class=\"row buttons-row\">\n                        <div class=\"col-md-4 col-sm-4\">\n                            <button class=\"btn btn-outline-danger btn-block btn-round\">Cancel</button>\n                        </div>\n                        <div class=\"col-md-4 col-sm-4\">\n                            <button class=\"btn btn-outline-primary btn-block btn-round\">Save</button>\n                        </div>\n                        <div class=\"col-md-4 col-sm-4\">\n                            <button class=\"btn btn-primary btn-block btn-round\">Save & Publish </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<footer class=\"footer footer-black\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<nav class=\"footer-nav\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href=\"https://www.creative-tim.com\">Creative Tim</a></li>\n\t\t\t\t\t<li><a href=\"http://blog.creative-tim.com\">Blog</a></li>\n\t\t\t\t\t<li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t\t<div class=\"credits ml-auto\">\n\t\t\t\t<span class=\"copyright\">\n\t\t\t\t\t© {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/examples/addproduct/addproduct.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/addproduct/addproduct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddproductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddproductComponent = /** @class */ (function () {
    function AddproductComponent() {
        this.data = new Date();
        this.tagItems = ['Minimal', 'Light', 'New', 'Friends'];
        this.categories = ['Food', 'Drink'];
    }
    AddproductComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('add-product');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('bg-danger');
    };
    AddproductComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('add-product');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('bg-danger');
    };
    AddproductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addproduct',
            template: __webpack_require__("../../../../../src/app/examples/addproduct/addproduct.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/addproduct/addproduct.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddproductComponent);
    return AddproductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/blogpost/blogpost.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n  <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-7\" style=\"background-image: url('./assets/img/sections/uriel-soberanes.jpg')\">\n\n  </div>\n    <div class=\"filter\"></div>\n    <div class=\"content-center\">\n        <div class=\"motto\">\n            <h1 class=\"title-uppercase text-center\">Paper Kit</h1>\n            <h3 class=\"text-center\">Make your mark with a new design.</h3>\n            <br/>\n            <a href=\"#pablo\" class=\"btn btn-warning btn-round btn-lg\">\n                <i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i> Share Article\n            </a>\n        </div>\n    </div>\n</div>\n\n<div class=\"wrapper\">\n    <div class=\"main\">\n        <div class=\"section section-white\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 ml-auto mr-auto text-center title\">\n                        <h2>A place for storytelling</h2>\n                        <h3 class=\"title-uppercase\"><small>Written by designers for designers</small></h3>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-10 ml-auto mr-auto\">\n                        <div class=\"text-center\">\n                            <span class=\"label label-warning main-tag\">Trending</span>\n                            <a href=\"javascrip: void(0);\"><h3 class=\"title\">Make Somebody Nervous Before You Die</h3></a>\n                            <h6 class=\"title-uppercase\">October 10, 2016</h6>\n                        </div>\n                    </div>\n                    <div class=\"col-md-8 ml-auto mr-auto\">\n                        <a>\n                            <div class=\"card\" data-radius=\"none\" style=\"background-image: url('./assets/img/sections/daniel-olahs.jpg');\"></div>\n                            <p class=\"image-thumb text-center\">Photo by Cam Adams</p>\n                        </a>\n                        <div class=\"article-content\">\n                            <h4>Follow unconventional beliefs</h4>\n                            <p>\n                             You won’t find many concepts that are very useful or important if you insist on having a worldview that’s void of controversy, invulnerable to criticism, and incapable of making others feel confused.\n                            </p>\n\n                            <p>\n                                Interesting ideas are a reward for not being afraid to have unconventional beliefs.\n                                You can’t grow if you’re never willing to turn your back on the status quo. You can’t expand if you’re never willing to take an unorthodox stand. You can’t have a beautiful mind if you’re never willing to leave the crowd behind.\n                            </p>\n                            <blockquote class=\"blockquote\">\n                              <p>\"Don’t settle: Don’t finish crappy books. If you don’t like the menu, leave the restaurant. If you’re not on the right path, get off it.\"</p>\n                              <footer>- Chris Brogan in <cite title=\"Source Title\">Trust Agents</cite></footer>\n                            </blockquote>\n                            <p>\n                            It’s easier to fear rejection than it is to open our minds to something new, but doing what’s easy doesn’t always equal doing what’s authentic, enriching, and meaningful.\n                            </p>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <a href=\"javascrip: void(0);\">\n                                        <div class=\"card\" data-radius=\"none\" style=\"background-image: url('./assets/img/sections/sebastien-gabrieles.jpg');\">\n                                            </div> <!-- end card -->\n                                    </a>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <a href=\"javascrip: void(0);\">\n                                        <div class=\"card\" data-radius=\"none\" style=\"background-image: url('./assets/img/sections/john-towner.jpg');\"></div>\n                                    </a>\n                                </div>\n                            </div>\n                            <p>\n\n                            </p>\n                            <h4>Ideas Worth Mentioning</h4>\n                            <p>The stories, ideas and lessons are enough to fill a year’s worth of articles, but for now I wanted to share the ideas straight from the people creating the disruption. Below are my most impactful takeaways from the last few days: </p>\n                            <p><strong>No one belongs here more than me.</strong> When in doubt of your surroundings, this is the mantra.</p>\n                            <p><strong>The ultimate currency is being uncool.</strong> Be vulnerably you and watch how you connect.</p>\n                            <p><strong>The opposite of scarcity is enough.</strong> Be confident that if you’re doing work that matters to you, you are enough. There is no comparison.</p>\n                            <p><strong>Unused creativity is not benign</strong> – it turns into grief. Do something with it.</p>\n                            <p><strong>Get in the arena</strong>, show up, do your thing and don’t be afraid to get your ass kicked a little bit.</p>\n                            <p>Who you are will always trump who you think people want you to be.</p>\n                            <p><strong>You can’t control if someone loves you back.</strong> Love them anyway.</p>\n\n                            <h4><strong>Conclusions</strong></h4>\n                            <p>If all of your convictions can be expressed in a sound bite on mainstream television without provoking the slightest bit of anger or annoyance in anyone whatsoever, I think it’s safe to say that your outlook on life offers you very few opportunities for the remarkable.\n                            </p>\n                        </div>\n                        <br/>\n                        <div class=\"article-footer\">\n                            <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <h5>Tags:</h5>\n                                        <span class=\"label label-default\">Motivational</span>\n                                        <span class=\"label label-default\">Newsletter</span>\n                                        <span class=\"label label-warning\">Trending</span>\n                                    </div>\n                                    <div class=\"col-md-4 ml-auto\">\n                                        <div class=\"sharing\">\n                                            <h5>Spread the word</h5>\n                                            <button class=\"btn btn-just-icon btn-twitter\">\n                                                <i class=\"fa fa-twitter\"></i>\n                                            </button>\n                                            <button class=\"btn btn-just-icon btn-facebook\">\n                                                <i class=\"fa fa-facebook\"> </i>\n                                            </button>\n                                            <button class=\"btn btn-just-icon btn-google\">\n                                                <i class=\"fa fa-google\"> </i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <hr>\n                        <div class=\"container\">\n                            <div class=\"row\">\n                                <div class=\"media\">\n                                    <a class=\"pull-left\" href=\"#paper-kit\">\n                                        <div class=\"avatar big-avatar\">\n                                            <img class=\"media-object\" alt=\"64x64\" src=\"./assets/img/faces/kaci-baum-2.jpg\">\n                                        </div>\n                                    </a>\n                                    <div class=\"media-body\">\n                                        <h4 class=\"media-heading\">Sophie Banks</h4>\n                                        <div class=\"pull-right\">\n                                            <a href=\"#paper-kit\" class=\"btn btn-default btn-round \"> <i class=\"fa fa-reply\"></i> Follow</a>\n                                        </div>\n                                        <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n                                        <p> Don't forget, You're Awesome!</p>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"comments media-area\">\n                                    <h3 class=\"text-center\">Comments</h3>\n                                    <div class=\"media\">\n                                        <a class=\"pull-left\" href=\"#paper-kit\">\n                                            <div class=\"avatar\">\n                                                <img class=\"media-object\" alt=\"Tim Picture\" src=\"./assets/img/faces/clem-onojeghuo-3.jpg\">\n                                            </div>\n                                        </a>\n                                        <div class=\"media-body\">\n                                            <h5 class=\"media-heading\">John Lincoln</h5>\n                                            <div class=\"pull-right\">\n                                                <h6 class=\"text-muted\">Sep 11, 11:54 AM</h6>\n                                                <a href=\"#paper-kit\" class=\"btn btn-info btn-link pull-right \"> <i class=\"fa fa-reply\"></i> Reply</a>\n\n                                            </div>\n\n                                            <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n\n                                            <div class=\"media\">\n                                                <a class=\"pull-left\" href=\"#paper-kit\">\n                                                    <div class=\"avatar\">\n                                                        <img class=\"media-object\" alt=\"64x64\" src=\"./assets/img/faces/clem-onojeghuo-2.jpg\">\n                                                    </div>\n                                                </a>\n                                                <div class=\"media-body\">\n                                                    <h5 class=\"media-heading\">Erik P.</h5>\n                                                    <div class=\"pull-right\">\n                                                        <h6 class=\"text-muted\">Sep 11, 11:56 AM</h6>\n                                                        <a href=\"#paper-kit\" class=\"btn btn-info btn-link pull-right \"> <i class=\"fa fa-reply\"></i> Reply</a>\n\n                                                    </div>\n                                                    <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n                                                    <p> Don't forget, You're Awesome!</p>\n\n                                                </div>\n                                            </div> <!-- end media -->\n                                        </div>\n                                    </div> <!-- end media -->\n                                    <div class=\"media\">\n                                        <a class=\"pull-left\" href=\"#paper-kit\">\n                                            <div class=\"avatar\">\n                                                <img class=\"media-object\" alt=\"64x64\" src=\"./assets/img/faces/joe-gardner-2.jpg\">\n                                            </div>\n                                        </a>\n                                        <div class=\"media-body\">\n                                            <h5 class=\"media-heading\">Joe</h5>\n                                            <div class=\"pull-right\">\n                                                <h6 class=\"text-muted\">Sep 11, 11:57 AM</h6>\n                                                <a href=\"#paper-kit\" class=\"btn btn-info btn-link pull-right \"> <i class=\"fa fa-reply\"></i> Reply</a>\n\n                                            </div>\n                                            <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n                                            <p> Don't forget, You're Awesome!</p>\n                                        </div>\n                                    </div> <!-- end media -->\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"related-articles\">\n                        <h3 class=\"title\">Related articles</h3>\n                        <legend></legend>\n                        <div class=\"container\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <a href=\"pkp\"><img src=\"./assets/img/sections/damir-bosnjak.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\"></a>\n                                    <p class=\"blog-title\">My Review of Pitchfork’s ‘Indie 500’ Album Review</p>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <a href=\"pkp\"><img src=\"./assets/img/sections/por7o.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\"></a>\n                                    <p class=\"blog-title\">Top Events This Month</p>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <a href=\"pkp\"><img src=\"./assets/img/sections/jeff-sheldon.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\"></a>\n                                    <p class=\"blog-title\">You Should Get Excited About Virtual Reality. Here’s Why.</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<footer class=\"footer footer-gray\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"footer-nav\">\n                <ul>\n                    <li><a href=\"https://www.creative-tim.com\">Creative Tim</a></li>\n                    <li><a href=\"http://blog.creative-tim.com\">Blog</a></li>\n                    <li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\n                </ul>\n            </nav>\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    © {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/examples/blogpost/blogpost.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/blogpost/blogpost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogpostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rellax__ = __webpack_require__("../../../../rellax/rellax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rellax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rellax__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogpostComponent = /** @class */ (function () {
    function BlogpostComponent() {
        this.data = new Date();
    }
    BlogpostComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new __WEBPACK_IMPORTED_MODULE_1_rellax__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('blog-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('bg-danger');
        navbar.classList.add('navbar-transparent');
    };
    BlogpostComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('blog-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('bg-danger');
        navbar.classList.remove('navbar-transparent');
    };
    BlogpostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blogpost',
            template: __webpack_require__("../../../../../src/app/examples/blogpost/blogpost.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/blogpost/blogpost.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogpostComponent);
    return BlogpostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/blogposts/blogposts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"main\">\n        <div class=\"section section-white\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 ml-auto mr-auto text-center title\">\n                        <h2>A place for storytelling</h2>\n                        <h3 class=\"title-uppercase\"><small>Written by designers for designers</small></h3>\n                    </div>\n                </div>\n                <div class=\"article\">\n                    <div class=\"row\">\n                        <div class=\"col-md-8 ml-auto mr-auto\">\n\t\t\t\t\t\t\t<div class=\"card card-blog card-plain text-center\">\n\t\t\t\t\t\t\t\t<div class=\"card-image\">\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"img img-raised\" src=\"./assets/img/sections/bruno-abatti.jpg\">\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-category\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"label label-primary main-tag\">Featured</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<a href=\"javascrip: void(0);\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"card-title\">My Review of Pitchfork’s ‘Indie 500’ Album Review</h3>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t<p>In the first sentence of Pitchfork’s review of my collaborative project with 9th Wonder, INDIE 500, a reviewer who is associated with music review site rhapsody.com writes about how I criticize and then distance myself from “celebrity straw men” with the line “celebrities be making money...</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-round btn-sm\">Read more</button>\n\t\t\t\t\t\t\t</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"article\">\n                    <div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-8 ml-auto mr-auto\">\n\t\t\t\t\t\t\t<div class=\"card card-blog card-plain text-center\">\n\t\t\t\t\t\t\t\t<div class=\"card-image\">\n\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"img img-raised\" src=\"./assets/img/sections/federico-beccari.jpg\">\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-category\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"label label-info main-tag\">Popular</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<a href=\"javascrip: void(0);\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"card-title\">You Should Get Excited About Virtual Reality.</h3>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"title-uppercase\">October 20, 2016</h6>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t<p>In the first sentence of Pitchfork’s review of my collaborative project with 9th Wonder, INDIE 500, a reviewer who is associated with music review site rhapsody.com writes about how I criticize and then distance myself from “celebrity straw men” with the line “celebrities be making money...</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-round btn-sm\">Read more</button>\n\t\t\t\t\t\t\t</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"article\">\n\t\t\t\t\t<div class=\"col-md-8 ml-auto mr-auto\">\n\t\t\t\t\t\t<div class=\"card card-blog card-plain text-center\">\n\t\t\t\t\t\t\t<div class=\"card-image\">\n\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t<img class=\"img img-raised\" src=\"./assets/img/sections/leonard-cotte.jpg\">\n\t\t\t\t\t\t\t\t\t<p class=\"image-thumb\">Photo by Cam Adams</p>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"card-category\">\n\t\t\t\t\t\t\t\t\t<span class=\"label label-warning main-tag\">Trending</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<a href=\"javascrip: void(0);\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"card-title\">Make Somebody Nervous Before You Die</h3>\n\t\t\t\t\t\t\t\t\t<h6 class=\"title-uppercase\">October 20, 2016</h6>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"card-description\">\n\t\t\t\t\t\t\t\t\t<p>You won’t find many concepts that are very useful or important if you insist on having a worldview that’s void of controversy, invulnerable to criticism, and incapable of making others feel confused...</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-round btn-sm\">Read more</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n                </div>\n                <hr />\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"pull-left\">\n                            <button class=\"btn btn-link btn-default btn-move-left btn-sm\"> <i class=\"fa fa-angle-left\"></i> Older Posts</button>\n                        </div>\n\t\t\t\t\t\t<div class=\"pull-right\">\n                            <button class=\"btn btn-link btn-default btn-move-right btn-sm\">Newer Posts  <i class=\"fa fa-angle-right\"></i></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n<footer class=\"footer footer-gray\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<nav class=\"footer-nav\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href=\"https://www.creative-tim.com\">Creative Tim</a></li>\n\t\t\t\t\t<li><a href=\"http://blog.creative-tim.com\">Blog</a></li>\n\t\t\t\t\t<li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t\t<div class=\"credits ml-auto\">\n\t\t\t\t<span class=\"copyright\">\n\t\t\t\t\t© {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/examples/blogposts/blogposts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/blogposts/blogposts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogpostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogpostsComponent = /** @class */ (function () {
    function BlogpostsComponent() {
        this.data = new Date();
    }
    BlogpostsComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('blog');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('bg-danger');
    };
    BlogpostsComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('blog');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('bg-danger');
        navbar.classList.add('navbar-transparent');
    };
    BlogpostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blogposts',
            template: __webpack_require__("../../../../../src/app/examples/blogposts/blogposts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/blogposts/blogposts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogpostsComponent);
    return BlogpostsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/contactus/contactus.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"section section-gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Get in touch with us</h2>\n                    <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualise customer directed convergence without revolutionary ROI.</p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h3 class=\"title\"><small>Find us on social networks</small></h3>\n                    <button class=\"btn btn-just-icon btn-twitter\">\n                        <i class=\"fa fa-twitter\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-facebook\">\n                        <i class=\"fa fa-facebook\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-google\">\n                        <i class=\"fa fa-google\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-dribbble\">\n                        <i class=\"fa fa-dribbble\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-instagram\">\n                        <i class=\"fa fa-instagram\"></i>\n                    </button>\n                    <button class=\"btn btn-just-icon btn-youtube\">\n                        <i class=\"fa fa-youtube\"></i>\n                    </button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h3 class=\"title\"><small>Or drop us a note</small></h3>\n                    <form class=\"contact\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"First Name\">\n                            </div>\n                            <div class=\"col-md-6\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\">\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n                            </div>\n                            <div class=\"col-md-6\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\n                            </div>\n                        </div>\n                        <textarea class=\"form-control\" placeholder=\"Message\" rows=\"7\" ></textarea>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-6 ml-auto mr-auto\">\n                                <button class=\"btn btn-primary btn-block btn-round\">Send </button>\n                            </div>\n                        </div>\n                    </form>\n                    <h3 class=\"visit\"><small>Or come and visit</small></h3>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"big-map\">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [styles]=\"styles\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n    </agm-map>\n</div>\n\n<footer class=\"footer section-nude\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"footer-nav\">\n                <ul>\n                    <li><a href=\"https://www.creative-tim.com\">Creative Tim</a></li>\n                    <li><a href=\"http://blog.creative-tim.com\">Blog</a></li>\n                    <li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\n                </ul>\n            </nav>\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    © {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/examples/contactus/contactus.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/contactus/contactus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
        this.zoom = 14;
        this.lat = 44.445248;
        this.lng = 26.099672;
        this.styles = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
        this.data = new Date();
    }
    ContactusComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('contact-us');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('bg-info');
    };
    ContactusComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('contact-us');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('bg-info');
        navbar.classList.add('navbar-transparent');
    };
    ContactusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__("../../../../../src/app/examples/contactus/contactus.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/contactus/contactus.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/discover/discover.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"main\">\n        <div class=\"section\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-12 ml-auto mr-auto text-center\">\n                        <h2 class=\"discover-title\"><small>See latest artwork</small></h2>\n                            <form role=\"search\" class=\"form-inline\">\n                                <div class=\"form-group\">\n                                  <input type=\"text\" class=\"form-control border-input\" placeholder=\"or search for something\">&nbsp;&nbsp;\n                                </div>\n                                <button type=\"submit\" class=\"btn btn-just-icon\"><i class=\"fa fa-search\"></i></button>\n                            </form>\n                    </div>\n                </div>\n                <div class=\"row items-row\">\n                    <div class=\"col-md-3 col-sm-4 ml-auto\">\n\t\t\t\t\t\t<div class=\"card card-plain text-center\">\n\t\t\t\t\t\t\t<div class=\"card-image\">\n\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/sections/pavel-kosov.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"card-body details-center\">\n\t\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"name\">Jane Doe</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"meta\">Drawn on 23 Nov</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n                    <div class=\"col-md-4 col-sm-4\">\n\t\t\t\t\t\t<div class=\"card card-plain text-center\">\n\t\t\t\t\t\t\t<div class=\"card-image\">\n\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/sections/por7o.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"card-body details-center\">\n\t\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/faces/erik-lucatero-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"name\">Tom Hanks</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"meta\">Drawn on 23 Jan</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n                    <div class=\"col-md-3 col-sm-4 mr-auto\">\n\t\t\t\t\t\t<div class=\"card card-plain text-center\">\n\t\t\t\t\t\t\t<div class=\"card-image\">\n\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/sections/vincent-versluis.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"card-body details-center\">\n\t\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/chet_faker_2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"name\">Chet Faker</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"meta\">Drawn on 20 Jan</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n                </div>\n                <div class=\"row items-row\">\n                    <div class=\"col-md-4 col-sm-6 ml-auto\">\n\t\t\t\t\t\t<div class=\"card card-plain text-center\">\n\t\t\t\t\t\t\t<div class=\"card-image\">\n\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/sections/ilya-yakover.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"card-body details-center\">\n\t\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"name\">Tom Hank</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"meta\">Drawn on 23 Jan</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n                    <div class=\"col-md-3 col-sm-6\">\n\t\t\t\t\t\t<div class=\"card card-plain text-center\">\n\t\t\t\t\t\t\t<div class=\"card-image\">\n\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/sections/miguel-perales.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"card-body details-center\">\n\t\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"name\">Tom Banks</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"meta\">Drawn on 23 Jan</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n                    <div class=\"col-md-3 mr-auto d-sm-block\">\n\t\t\t\t\t\t<div class=\"card card-plain text-center\">\n\t\t\t\t\t\t\t<div class=\"card-image\">\n\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/sections/neill-kumar.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"card-body details-center\">\n\t\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/flume.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"name\">Flume</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"meta\">Drawn on 4 Aug</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n                </div>\n                <div class=\"row items-row\">\n                    <div class=\"col-md-2 col-sm-6 ml-auto\">\n\t\t\t\t\t\t<div class=\"card card-plain text-center\">\n\t\t\t\t\t\t\t<div class=\"card-image\">\n\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/sections/john-towner.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"card-body details-center\">\n\t\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/placeholder.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"name\">Tom Hanks</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"meta\">Drawn on 23 Jan</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n                    <div class=\"col-md-4 col-sm-6\">\n\t\t\t\t\t\t<div class=\"card card-plain text-center\">\n\t\t\t\t\t\t\t<div class=\"card-image\">\n\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/sections/leonard-cotte.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"card-body details-center\">\n\t\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/placeholder.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"name\">Banks</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"meta\">Drawn on 3 Mar</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n                    <div class=\"col-md-4 col-sm-6 mr-auto\">\n\t\t\t\t\t\t<div class=\"card card-plain text-center\">\n\t\t\t\t\t\t\t<div class=\"card-image\">\n\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/sections/anders-jilden.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"card-body details-center\">\n\t\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/faces/erik-lucatero-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"name\">Tom Hanks</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"meta\">Drawn on 23 Jan</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-4 text-center ml-auto mr-auto\">\n                        <div class=\"preloader\">\n                            <div class='uil-reload-css' style=''><div></div></div> <h5>Loading More  </h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<footer class=\"footer\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<nav class=\"footer-nav\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href=\"https://www.creative-tim.com\">Creative Tim</a></li>\n\t\t\t\t\t<li><a href=\"http://blog.creative-tim.com\">Blog</a></li>\n\t\t\t\t\t<li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t\t<div class=\"credits ml-auto\">\n\t\t\t\t<span class=\"copyright\">\n\t\t\t\t\t© {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/examples/discover/discover.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/discover/discover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DiscoverComponent = /** @class */ (function () {
    function DiscoverComponent() {
        this.data = new Date();
    }
    DiscoverComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('discover');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('bg-danger');
    };
    DiscoverComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('discover');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('bg-danger');
        navbar.classList.add('navbar-transparent');
    };
    DiscoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-discover',
            template: __webpack_require__("../../../../../src/app/examples/discover/discover.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/discover/discover.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DiscoverComponent);
    return DiscoverComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/ecommerce/ecommerce.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" style=\"background-image: url('./assets/img/ecommerce/balmain_runway.jpg');\">\n    <div class=\"filter\"></div>\n    <div class=\"content-center\">\n        <div class=\"container text-center\">\n            <h1>Brace yourself!</h1>\n            <h3>25% Off and Free global delivery for all products</h3>\n        </div>\n    </div>\n</div>\n\n<div class=\"wrapper\">\n <div class=\"section latest-offers\">\n       <div class=\"container\">\n           <h3 class=\"section-title\">Latest Offers</h3>\n           <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-product card-plain\">\n                        <div class=\"card-image\">\n                            <a href=\"#paper-kit\">\n                                <img src=\"./assets/img/ecommerce/balmain_5.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n                            </a>\n                            <div class=\"card-body\">\n                                <div class=\"card-description\">\n                                    <h5 class=\"card-title\">Green Velvet Dress</h5>\n                                    <p class=\"card-description\">This is a limited edition dress for the fall collection. Comes in 3 colours.</p>\n                                </div>\n                                <div class=\"price\">\n                                    <s>3.520 &euro;</s> <span class=\"text-danger\">2.900 &euro;</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                 </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-product card-plain\">\n                        <div class=\"card-image\">\n                            <a href=\"#paper-kit\">\n                                <img src=\"./assets/img/ecommerce/balmain_3.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n                            </a>\n                            <div class=\"card-body\">\n                                <div class=\"card-description\">\n                                    <h5 class=\"card-title\">Crepe and Organza Dress</h5>\n                                    <p class=\"card-description\">This is a limited edition dress for the fall collection. Comes in 3 colours.</p>\n                                </div>\n                                <div class=\"price\">\n                                    <s>2.675 &euro;</s> <span class=\"text-danger\">2.000 &euro;</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                 </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-product card-plain\">\n                        <div class=\"card-image\">\n                            <a href=\"#paper-kit\">\n                                <img src=\"./assets/img/ecommerce/balmain_4.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n                            </a>\n                            <div class=\"card-body\">\n                                <div class=\"card-description\">\n                                    <h5 class=\"card-title\">Lace Mini Dress</h5>\n                                    <p class=\"card-description\">This is a limited edition dress for the fall collection. Comes in 3 colours.</p>\n                                </div>\n                                <div class=\"price\">\n                                    <s>3.915 &euro;</s> <span class=\"text-danger\">3.125 &euro;</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                 </div>\n           </div>\n       </div>\n</div><!-- section -->\n\n<div class=\"section section-gray\">\n       <div class=\"container\">\n           <h3 class=\"section-title\">Find what you need</h3>\n           <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"card card-refine\">\n                        <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"config-panel-one\">\n                            <ngb-panel id=\"config-panel-one\">\n                                <ng-template ngbPanelTitle>\n                                    <h5 class=\"mb-0 panel-title\">\n                                        <a class=\"collapsed\">\n                                            Price Range\n                                            <i class=\"nc-icon nc-minimal-down\"></i>\n                                        </a>\n                                    </h5>\n                                </ng-template>\n                                <ng-template ngbPanelContent>\n                                    <nouislider class=\"slider slider-info\" [connect]=\"true\" [min]=\"0\" [max]=\"10000\" [step]=\"10\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"true\"></nouislider>                                </ng-template>\n                            </ngb-panel>\n                            <ngb-panel>\n                                <ng-template ngbPanelTitle>\n                                    <h5 class=\"mb-0 panel-title\">\n                                        <a class=\"collapsed\">\n                                            Clothing\n                                            <i class=\"nc-icon nc-minimal-down\"></i>\n                                        </a>\n                                    </h5>\n                                </ng-template>\n                                <ng-template ngbPanelContent>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                            Blazers\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Casual Shirts\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Formal Shirts\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Jeans\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Polos\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Pyjamas\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Shorts\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Trousers\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                </ng-template>\n                            </ngb-panel>\n                            <ngb-panel>\n                                <ng-template ngbPanelTitle>\n                                    <h5 class=\"mb-0 panel-title\">\n                                        <a class=\"collapsed\">\n                                            Designer\n                                            <i class=\"nc-icon nc-minimal-down\"></i>\n                                        </a>\n                                    </h5>\n                                </ng-template>\n                                <ng-template ngbPanelContent>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                            All\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Acne Studio\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Alex Mill\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Alexander McQueen\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Alfred Dunhill\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            AMI\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Berena\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Berluti\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Burberry Prorsum\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Berluti\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Calvin Klein\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Club Monaco\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Dolce & Gabbana\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Gucci\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Kolor\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Lanvin\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Loro Piana\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Massimo Alba\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                </ng-template>\n                            </ngb-panel>\n                            <ngb-panel>\n                                <ng-template ngbPanelTitle>\n                                    <h5 class=\"mb-0 panel-title\">\n                                        <a class=\"collapsed\">\n                                            Colour\n                                            <i class=\"nc-icon nc-minimal-down\"></i>\n                                        </a>\n                                    </h5>\n                                </ng-template>\n                                <ng-template ngbPanelContent>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                            All\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Blue\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Brown\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Gray\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Green\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Neutrals\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                            Purple\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                </ng-template>\n                            </ngb-panel>\n                        </ngb-accordion>\n                    </div> <!-- end card -->\n                </div>\n\n                <div class=\"col-md-9\">\n                    <div class=\"products\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4\">\n                                <div class=\"card card-product card-plain\">\n                                    <div class=\"card-image\">\n                                        <a href=\"#paper-kit\">\n                                            <img src=\"./assets/img/ecommerce/balmain_1.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n                                        </a>\n                                        <div class=\"card-body\">\n                                            <div class=\"card-description\">\n                                                <h5 class=\"card-title\">One Shoulder Dress</h5>\n                                                <p class=\"card-description\">Dresses & Skirts</p>\n                                            </div>\n                                            <div class=\"price\">\n                                                <h5>2.900 &euro;</h5>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4 col-sm-4\">\n                                <div class=\"card card-product card-plain\">\n                                    <div class=\"card-image\">\n                                        <a href=\"#paper-kit\">\n                                            <img src=\"./assets/img/ecommerce/balmain_2.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n                                        </a>\n                                        <div class=\"card-body\">\n                                            <div class=\"card-description\">\n                                                <h5 class=\"card-title\">Stretch-Knit Dress</h5>\n                                                <p class=\"card-description\">Dresses & Skirts</p>\n                                            </div>\n                                            <div class=\"price\">\n                                                <h5>1.700 &euro;</h5>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4 col-sm-4\">\n                                <div class=\"card card-product card-plain\">\n                                    <div class=\"card-image\">\n                                        <a href=\"#paper-kit\">\n                                            <img src=\"./assets/img/ecommerce/balmain_2.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n                                        </a>\n                                        <div class=\"card-body\">\n                                            <div class=\"card-description\">\n                                                <h5 class=\"card-title\">Chrystal Sheer Dress</h5>\n                                                <p class=\"card-description\">Dresses & Skirts</p>\n                                            </div>\n                                            <div class=\"price\">\n                                                <h5>1.500 &euro;</h5>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4 col-sm-4\">\n                                <div class=\"card card-product card-plain\">\n                                    <div class=\"card-image\">\n                                        <a href=\"#paper-kit\">\n                                            <img src=\"./assets/img/ecommerce/balmain_2.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n                                        </a>\n                                        <div class=\"card-body\">\n                                            <div class=\"card-description\">\n                                                <h5 class=\"card-title\">One Shoulder Dress</h5>\n                                                <p class=\"card-description\">Dresses & Skirts</p>\n                                            </div>\n                                            <div class=\"price\">\n                                                <h5>2.600 &euro;</h5>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4 col-sm-4\">\n                                <div class=\"card card-product card-plain\">\n                                    <div class=\"card-image\">\n                                        <a href=\"#paper-kit\">\n                                            <img src=\"./assets/img/ecommerce/balmain_8.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n                                        </a>\n                                        <div class=\"card-body\">\n                                            <div class=\"card-description\">\n                                                <h5 class=\"card-title\">Glass Beads Skirt</h5>\n                                                <p class=\"card-description\">Dresses & Skirts</p>\n                                            </div>\n                                            <div class=\"price\">\n                                                <h5>7.500 &euro;</h5>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4 col-sm-4\">\n                                <div class=\"card card-product card-plain\">\n                                    <div class=\"card-image\">\n                                        <a href=\"#paper-kit\">\n                                            <img src=\"./assets/img/ecommerce/balmain_8.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n                                        </a>\n                                        <div class=\"card-body\">\n                                            <div class=\"card-description\">\n                                                <h5 class=\"card-title\">Velvet Mini Dress</h5>\n                                                <p class=\"card-description\">Dresses & Skirts</p>\n                                            </div>\n                                            <div class=\"price\">\n                                                <h5>3.500 &euro;</h5>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                             <div class=\"col-md-3 offset-md-4\">\n                                  <button rel=\"tooltip\" title=\"This is a morphing button\" class=\"btn btn-round btn-outline-default\" id=\"successBtn\" data-toggle=\"morphing\" data-rotation-color=\"gray\">Load more...</button>\n                             </div>\n                        </div>\n                    </div>\n                </div>\n           </div>\n       </div>\n</div><!-- section -->\n\n\n <div class=\"section section-blog\">\n       <div class=\"container\">\n           <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-blog\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"./assets/img/sections/miguel-perales.jpg\">\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category text-info\">Enterprise</h6>\n                            <h5 class=\"card-title\">\n                                <a href=\"#pablo\">LinkedIn’s new desktop app arrives</a>\n                            </h5>\n                            <p class=\"card-description\">\n                                LinkedIn is today launching its official desktop application for Windows 10, allowing the professional social networking service to... <br>\n                            </p>\n                            <hr>\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <a href=\"#pablo\">\n                                       <img src=\"./assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                       <span>Mike John</span>\n                                    </a>\n                                </div>\n                                <div class=\"stats\">\n                                        <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> 5 min read\n                                    </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-blog\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"./assets/img/sections/roger-keller.jpg\">\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category text-success\">\n                                Startups\n                            </h6>\n                            <h5 class=\"card-title\">\n                                <a href=\"#pablo\">MIT’s Cheetah 3 robot is built to save lives</a>\n                            </h5>\n                            <p class=\"card-description\">\n                                The latest version of MIT’s Cheetah robot made its stage debut today at TC Sessions: Robotics in Cambridge, Mass. It’s a familiar project... <br>\n                            </p>\n                            <hr>\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <a href=\"#pablo\">\n                                       <img src=\"./assets/img/faces/kaci-baum-2.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                       <span>Nickie Kelly</span>\n                                    </a>\n                                </div>\n                                <div class=\"stats\">\n                                        <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> 5 min read\n                                    </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-blog\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"./assets/img/sections/joshua-earlesz.jpg\">\n                            </a>\n                        </div>\n\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category text-danger\">\n                                <i class=\"fa fa-free-code-camp\" aria-hidden=\"true\"></i> Enterprise\n                            </h6>\n                            <h5 class=\"card-title\">\n                                <a href=\"#pablo\">Lionel Richie says “Hello” to startup investors</a>\n                            </h5>\n                            <p class=\"card-description\">\n                                Because developing a doctor-on-demand service that would allow personalized medical visits, booked through an app on a user’s phone is... <br>\n                            </p>\n                            <hr>\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <a href=\"#pablo\">\n                                       <img src=\"./assets/img/faces/erik-lucatero-2.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                       <span>Mike John</span>\n                                    </a>\n                                </div>\n                                <div class=\"stats\">\n                                        <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> 5 min read\n                                    </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n       </div>\n</div><!-- section -->\n<div class=\"subscribe-line subscribe-line-black\">\n     <div class=\"container\">\n        <div class=\"row\">\n             <div class=\"col-md-9 col-sm-8\">\n                <form class=\"\">\n                     <div class=\"form-group\">\n                          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Enter your email...\">\n                     </div>\n                 </form>\n             </div>\n             <div class=\"col-md-3 col-sm-4\">\n                 <button type=\"button\" class=\"btn btn-neutral btn-block btn-lg\">Join Newsletter</button>\n             </div>\n        </div>\n     </div>\n</div>\n\n<footer class=\"footer footer-big\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 col-sm-9\">\n                <div class=\"links\">\n                    <ul class=\"uppercase-links\">\n                        <li>\n                            <a href=\"#paper-kit\">\n                                Home\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#paper-kit\">\n                                Company\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#paper-kit\">\n                                Portfolio\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#paper-kit\">\n                               Team\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#paper-kit\">\n                               Blog\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#paper-kit\">\n                               Contact\n                            </a>\n                        </li>\n\n\n                    </ul>\n                    <hr />\n\n                    <div class=\"copyright\">\n                        © {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4 ml-auto col-sm-2\">\n                <div class=\"social-area\">\n                    <a href=\"#facebook\" class=\"btn btn-neutral btn-round btn-just-icon btn-facebook\">\n                       <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n                   </a>\n                    <a href=\"#twitter\" class=\"btn btn-neutral btn-just-icon btn-round btn-twitter\">\n                        <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n                    </a>\n                    <a href=\"#google\" class=\"btn btn-neutral btn-just-icon btn-round btn-google\">\n                        <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n                    </a>\n                    <a href=\"#pin\" class=\"btn btn-neutral btn-just-icon btn-round btn-pinterest\">\n                        <i class=\"fa fa-pinterest-p\" aria-hidden=\"true\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>\n\n\n\n\n</div> <!-- wrapper -->\n"

/***/ }),

/***/ "../../../../../src/app/examples/ecommerce/ecommerce.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/ecommerce/ecommerce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcommerceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EcommerceComponent = /** @class */ (function () {
    function EcommerceComponent() {
        this.doubleSlider = [1000, 5000];
        this.data = new Date();
    }
    EcommerceComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('ecommerce');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    EcommerceComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('ecommerce');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    EcommerceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ecommerce',
            template: __webpack_require__("../../../../../src/app/examples/ecommerce/ecommerce.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/ecommerce/ecommerce.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EcommerceComponent);
    return EcommerceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/examples.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  examples works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/examples/examples.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/examples.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__("../../../../../src/app/examples/examples.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/examples.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/examples.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_multiselect_dropdown_angular2_multiselect_dropdown__ = __webpack_require__("../../../../angular2-multiselect-dropdown/angular2-multiselect-dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_chips__ = __webpack_require__("../../../../ngx-chips/dist/ngx-chips.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_chips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_chips__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__ = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jw_bootstrap_switch_ng2__ = __webpack_require__("../../../../jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jw_bootstrap_switch_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jw_bootstrap_switch_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_image_upload_image_upload_module__ = __webpack_require__("../../../../../src/app/shared/image-upload/image-upload.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__examples_component__ = __webpack_require__("../../../../../src/app/examples/examples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aboutus_aboutus_component__ = __webpack_require__("../../../../../src/app/examples/aboutus/aboutus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__addproduct_addproduct_component__ = __webpack_require__("../../../../../src/app/examples/addproduct/addproduct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__blogpost_blogpost_component__ = __webpack_require__("../../../../../src/app/examples/blogpost/blogpost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__blogposts_blogposts_component__ = __webpack_require__("../../../../../src/app/examples/blogposts/blogposts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contactus_contactus_component__ = __webpack_require__("../../../../../src/app/examples/contactus/contactus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__discover_discover_component__ = __webpack_require__("../../../../../src/app/examples/discover/discover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ecommerce_ecommerce_component__ = __webpack_require__("../../../../../src/app/examples/ecommerce/ecommerce.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__landing_landing_component__ = __webpack_require__("../../../../../src/app/examples/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login_login_component__ = __webpack_require__("../../../../../src/app/examples/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__productpage_productpage_component__ = __webpack_require__("../../../../../src/app/examples/productpage/productpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__profile_profile_component__ = __webpack_require__("../../../../../src/app/examples/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__register_register_component__ = __webpack_require__("../../../../../src/app/examples/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__search_search_component__ = __webpack_require__("../../../../../src/app/examples/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__settings_settings_component__ = __webpack_require__("../../../../../src/app/examples/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__twitter_twitter_component__ = __webpack_require__("../../../../../src/app/examples/twitter/twitter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__page404_page404_component__ = __webpack_require__("../../../../../src/app/examples/page404/page404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__page422_page422_component__ = __webpack_require__("../../../../../src/app/examples/page422/page422.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__page500_page500_component__ = __webpack_require__("../../../../../src/app/examples/page500/page500.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_chips__["TagInputModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__["NouisliderModule"],
                __WEBPACK_IMPORTED_MODULE_7_jw_bootstrap_switch_ng2__["JWBootstrapSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_2_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_8__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY'
                }),
                __WEBPACK_IMPORTED_MODULE_9__shared_image_upload_image_upload_module__["a" /* ImageUploadModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__examples_component__["a" /* ExamplesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__aboutus_aboutus_component__["a" /* AboutusComponent */],
                __WEBPACK_IMPORTED_MODULE_12__addproduct_addproduct_component__["a" /* AddproductComponent */],
                __WEBPACK_IMPORTED_MODULE_13__blogpost_blogpost_component__["a" /* BlogpostComponent */],
                __WEBPACK_IMPORTED_MODULE_14__blogposts_blogposts_component__["a" /* BlogpostsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__contactus_contactus_component__["a" /* ContactusComponent */],
                __WEBPACK_IMPORTED_MODULE_16__discover_discover_component__["a" /* DiscoverComponent */],
                __WEBPACK_IMPORTED_MODULE_17__ecommerce_ecommerce_component__["a" /* EcommerceComponent */],
                __WEBPACK_IMPORTED_MODULE_18__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_19__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__productpage_productpage_component__["a" /* ProductpageComponent */],
                __WEBPACK_IMPORTED_MODULE_21__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_22__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_23__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_24__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__twitter_twitter_component__["a" /* TwitterComponent */],
                __WEBPACK_IMPORTED_MODULE_26__page404_page404_component__["a" /* Page404Component */],
                __WEBPACK_IMPORTED_MODULE_27__page422_page422_component__["a" /* Page422Component */],
                __WEBPACK_IMPORTED_MODULE_28__page500_page500_component__["a" /* Page500Component */]
            ]
        })
    ], ExamplesModule);
    return ExamplesModule;
}());



/***/ }),

/***/ "../../../../../src/app/examples/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n  <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-7\" style=\"background-image: url('./assets/img/sections/uriel-soberanes.jpg')\">\n\n  </div>\n    <div class=\"filter\"></div>\n    <div class=\"content-center\">\n        <div class=\"container\">\n            <div class=\"motto\">\n                <h1 class=\"title\">Landing page</h1>\n                <h3 class=\"description\">Start designing your landing page here.</h3>\n                <br />\n                <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" class=\"btn btn-neutral btn-round\"><i class=\"fa fa-play\"></i>Watch video</a>\n                <button type=\"button\" class=\"btn btn-outline-neutral btn-round\">Download</button>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"wrapper\">\n    <div class=\"section text-center landing-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto\">\n                    <h2 class=\"title\">Let's talk product</h2>\n                    <h5>This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>\n                    <br />\n                    <a href=\"#paper-kit\" class=\"btn btn-danger btn-fill btn-round\">See Details</a>\n                </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-danger\">\n                            <i class=\"nc-icon nc-palette\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Beautiful Gallery</h4>\n                            <p class=\"description\">Spend your time generating new ideas. You don't have to think of implementing.</p>\n                            <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-danger\">\n                            <i class=\"nc-icon nc-bulb-63\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">New Ideas</h4>\n                            <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\n                            <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-danger\">\n                            <i class=\"nc-icon nc-chart-bar-32\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Statistics</h4>\n                            <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>\n                            <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-danger\">\n                            <i class=\"nc-icon nc-sun-fog-29\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Delightful design</h4>\n                            <p>Find unique and handmade delightful designs related items directly from our sellers.</p>\n                            <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"section section-dark text-center landing-section\">\n        <div class=\"container\">\n            <h2 class=\"title\">Let's talk about us</h2>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#avatar\"><img src=\"./assets/img/faces/clem-onojeghuo-3.jpg\" alt=\"...\"></a>\n                        </div>\n                        <div class=\"card-body\">\n                            <a href=\"#paper-kit\">\n                                <div class=\"author\">\n                                    <h4 class=\"card-title\">Henry Ford</h4>\n                                    <h6 class=\"card-category text-muted\">Product Manager</h6>\n                                </div>\n                            </a>\n                            <p class=\"card-description text-center\">\n                            Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.\n                            </p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#avatar\"><img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"...\"></a>\n                        </div>\n                        <div class=\"card-body\">\n                            <a href=\"#paper-kit\">\n                                <div class=\"author\">\n                                    <h4 class=\"card-title\">Sophie West</h4>\n                                    <h6 class=\"card-category text-muted\">Designer</h6>\n                                </div>\n                            </a>\n                            <p class=\"card-description text-center\">\n                            A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.\n                            </p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#avatar\"><img src=\"./assets/img/faces/erik-lucatero-2.jpg\" alt=\"...\"></a>\n                        </div>\n                        <div class=\"card-body\">\n                            <a href=\"#paper-kit\">\n                                <div class=\"author\">\n                                    <h4 class=\"card-title\">Robert Orben</h4>\n                                    <h6 class=\"card-category text-muted\">Developer</h6>\n                                </div>\n                            </a>\n                            <p class=\"card-description text-center\">\n                            The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.\n                            </p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"section landing-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto\">\n                    <h2 class=\"text-center\">Keep in touch?</h2>\n                    <form class=\"contact-form\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Name</label>\n                                <input class=\"form-control\" placeholder=\"Name\">\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label>Email</label>\n                                <input class=\"form-control\" placeholder=\"Email\">\n                            </div>\n                        </div>\n                        <label>Message</label>\n                        <textarea class=\"form-control\" rows=\"4\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 offset-md-4\">\n                                <button class=\"btn btn-danger btn-lg btn-fill\">Send Message</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<footer class=\"footer section-dark\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"footer-nav\">\n                <ul>\n                    <li><a href=\"https://www.creative-tim.com\">Creative Tim</a></li>\n                    <li><a href=\"http://blog.creative-tim.com\">Blog</a></li>\n                    <li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\n                </ul>\n            </nav>\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    © {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/examples/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rellax__ = __webpack_require__("../../../../rellax/rellax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rellax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rellax__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.data = new Date();
    }
    LandingComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new __WEBPACK_IMPORTED_MODULE_1_rellax__('.rellax-header');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    LandingComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/examples/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header\" style=\"background-image: url('./assets/img/sections/bruno-abatti.jpg');\">\n        <div class=\"filter\"></div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-4 col-sm-6 ml-auto mr-auto\">\n                    <div class=\"card card-register\">\n                        <h3 class=\"card-title\">Welcome</h3>\n                        <form class=\"register-form\">\n                            <label>Email</label>\n                            <input type=\"email\" class=\"form-control no-border\" placeholder=\"Email\">\n\n                            <label>Password</label>\n                            <input type=\"password\" class=\"form-control no-border\" placeholder=\"Password\">\n                            <button class=\"btn btn-danger btn-block btn-round\">Login</button>\n                        </form>\n                        <div class=\"forgot\">\n                            <a href=\"#paper-kit\" class=\"btn btn-link btn-danger\">Forgot password?</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"demo-footer text-center\">\n                <h6>&copy; {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim</h6>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/examples/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.data = new Date();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('full-screen');
        body.classList.add('login');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        if (navbar.classList.contains('nav-up')) {
            navbar.classList.remove('nav-up');
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('full-screen');
        body.classList.remove('login');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/examples/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/page404/page404.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background-img\" style=\"background-image: url('./assets/img/sections/martin-knize.jpg')\">\n    <div class=\"filter\"></div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <h1 class=\"title\"> &nbsp;404 <br/>\n                <p class=\"error-msg\">The page you requested could not be found</p>\n            </h1>\n\n\n        </div>\n        <div class=\"container-cards\">\n            <div class=\"row\">\n                <h5 class=\"discover-pages text-center\">You can discover:</h5>\n                <br/><br/><br/>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">\n                            <div class=\"card card-just-text\">\n                                <div class=\"card-body text-center\">\n                                    <div class=\"card-icon\"><a href=\"#paperkit\"><i class=\"fa fa-desktop\" aria-hidden=\"true\"></i></a></div>\n                                    <p class=\"card-description\">Admin & Dashboards</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"card card-hover-effect card-just-text\">\n                                <div class=\"card-body text-center\">\n                                    <h4 class=\"card-icon\"><a href=\"#paperkit\"><i class=\"fa fa-scissors\" aria-hidden=\"true\"></i></a></h4>\n                                    <p class=\"card-description\">UI Kits</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"card card-hover-effect card-just-text\">\n                                <div class=\"card-body text-center\">\n                                    <h4 class=\"card-icon\"><a href=\"#paperkit\"><i class=\"fa fa-gift\" aria-hidden=\"true\"></i></a></h4>\n                                    <p class=\"card-description\">Free Themes</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"card card-hover-effect card-just-text\">\n                                <div class=\"card-body text-center\">\n                                    <h4 class=\"card-icon\"><a href=\"#paperkit\"><i class=\"fa fa-puzzle-piece\" aria-hidden=\"true\"></i></a></h4>\n                                    <p class=\"card-description\">Bootstrap components</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/examples/page404/page404.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/page404/page404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page404Component = /** @class */ (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    Page404Component.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    Page404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page404',
            template: __webpack_require__("../../../../../src/app/examples/page404/page404.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/page404/page404.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "../../../../../src/app/examples/page422/page422.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background-img\" style=\"background-image: url('./assets/img/sections/jan-sendereks.jpg')\">\n    <div class=\"filter\"></div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <h1 class=\"title\"> &nbsp;422 <br/>\n                <p class=\"error-msg\">The changes you wanted was rejected</p>\n            </h1>\n\n\n        </div>\n\n        <div class=\"container-cards\">\n            <div class=\"row\">\n                <h5 class=\"discover-pages text-center\">You can discover:</h5>\n                <br/><br/><br/>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">\n                            <div class=\"card card-hover-effect card-just-text\">\n                                <div class=\"card-body text-center\">\n                                    <div class=\"card-icon\"><a href=\"#paperkit\"><i class=\"fa fa-desktop\" aria-hidden=\"true\"></i></a></div>\n                                    <p class=\"card-description\">Admin & Dashboards</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"card card-hover-effect card-just-text\">\n                                <div class=\"card-body text-center\">\n                                    <h4 class=\"card-icon\"><a href=\"#paperkit\"><i class=\"fa fa-scissors\" aria-hidden=\"true\"></i></a></h4>\n                                    <p class=\"card-description\">UI Kits</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"card card-hover-effect card-just-text\">\n                                <div class=\"card-body text-center\">\n                                    <h4 class=\"card-icon\"><a href=\"#paperkit\"><i class=\"fa fa-gift\" aria-hidden=\"true\"></i></a></h4>\n                                    <p class=\"card-description\">Free Themes</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"card card-hover-effect card-just-text\">\n                                <div class=\"card-body text-center\">\n                                    <h4 class=\"card-icon\"><a href=\"#paperkit\"><i class=\"fa fa-puzzle-piece\" aria-hidden=\"true\"></i></a></h4>\n                                    <p class=\"card-description\">Bootstrap components</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/examples/page422/page422.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/page422/page422.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page422Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page422Component = /** @class */ (function () {
    function Page422Component() {
    }
    Page422Component.prototype.ngOnInit = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    Page422Component.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    Page422Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page422',
            template: __webpack_require__("../../../../../src/app/examples/page422/page422.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/page422/page422.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Page422Component);
    return Page422Component;
}());



/***/ }),

/***/ "../../../../../src/app/examples/page500/page500.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background-img\" style=\"background-image: url('./assets/img/sections/the-how-photographer.jpg')\">\n    <div class=\"filter\"></div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <h1 class=\"title\"> &nbsp;500 <br/>\n                <p class=\"error-msg\">We're sorry, but something went wrong. We are working an fixing this. <br/> Please refresh the page in a couple of seconds.</p>\n            </h1>\n        </div>\n        <div class=\"container-cards space-top\">\n            <div class=\"row\">\n                <h5 class=\"discover-pages text-center\">Meanwhie, you can check our social pages...</h5>\n            </div>\n            <div class=\"offset-md-5 social-buttons\">\n                <a class=\"btn btn-just-icon btn-lg btn-facebook\" href=\"https://www.facebook.com/CreativeTim\" target=\"_blank\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n                <a class=\"btn btn-just-icon btn-lg btn-twitter\" href=\"https://twitter.com/CreativeTim\" target=\"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                <a class=\"btn btn-just-icon btn-lg btn-linkedin\" href=\"https://www.instagram.com/creativetimofficial/\" target=\"_blank\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/examples/page500/page500.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/page500/page500.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page500Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page500Component = /** @class */ (function () {
    function Page500Component() {
    }
    Page500Component.prototype.ngOnInit = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    Page500Component.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    Page500Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page500',
            template: __webpack_require__("../../../../../src/app/examples/page500/page500.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/page500/page500.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Page500Component);
    return Page500Component;
}());



/***/ }),

/***/ "../../../../../src/app/examples/productpage/productpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\t<div class=\"page-header page-header-xs\" style=\"background-image: url('./assets/img/sections/clark-street-mercantile.jpg');\">\n\t\t<div class=\"filter\"></div>\n\t</div>\n    <div class=\"main\">\n        <div class=\"section\">\n            <div class=\"container\">\n                    <div class=\"row title-row\">\n                        <div class=\"col-md-2\">\n                            <h4 class=\"shop\">Shop</h4>\n                        </div>\n                        <div class=\"col-md-4 ml-auto\">\n                            <div class=\"pull-right\">\n                                <span class=\"text-muted\">Order Status</span> <button class=\"btn btn-link\"> <i class=\"fa fa-shopping-cart\"></i> 0 Items</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-7 col-sm-6\">\n\n                            <div id=\"carousel\" class=\"ml-auto mr-auto\">\n\t\t\t\t\t\t\t\t<div class=\"card page-carousel\">\n\t\t\t\t\t\t\t\t\t<ngb-carousel>\n\t\t\t                            <ng-template ngbSlide>\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"d-block img-fluid\" src=\"./assets/img/jacket-1.jpg\" alt=\"Awesome Item\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-caption d-none d-md-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Somewhere</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t                            </ng-template>\n\t\t\t                            <ng-template ngbSlide>\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"d-block img-fluid\" src=\"./assets/img/jacket-2.jpg\" alt=\"Awesome Item\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-caption d-none d-md-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Somewhere else</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t                            </ng-template>\n\t\t\t                            <ng-template ngbSlide>\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"d-block img-fluid\" src=\"./assets/img/jacket-3.jpg\" alt=\"Awesome Item\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-caption d-none d-md-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Here it is</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t                            </ng-template>\n\t\t\t\t\t\t\t\t\t\t<ng-template ngbSlide>\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"d-block img-fluid\" src=\"./assets/img/jacket-4.jpg\" alt=\"Awesome Item\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-caption d-none d-md-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Here it is</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t                        </ngb-carousel>\n\t\t\t\t\t\t\t\t</div>\n                            </div> <!-- end carousel -->\n\n                        </div>\n                        <div class=\"col-md-5 col-sm-6\">\n\t\t\t\t\t\t\t<h2>Suede Blazer</h2>\n\t\t\t\t\t\t\t<h4 class=\"price\"><strong>&euro; 2,900.00</strong></h4>\n\t\t\t\t\t\t\t<hr />\n\t\t\t\t\t\t\t<p>This blazer in suede is a must-have of your wardrobe. Team it with a angora blazer and a angora sweater.</p>\n\t\t\t\t\t\t\t<span class=\"label label-default shipping\">Free shipping to Europe </span>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6 col-sm-6\">\n                                    <label>Select color</label>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t                <angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\"\n\t\t\t\t\t\t                    [settings]=\"dropdownSettings\"\n\t\t\t\t\t\t                    (onSelect)=\"onItemSelect($event)\"\n\t\t\t\t\t\t                    (onDeSelect)=\"OnItemDeSelect($event)\"\n\t\t\t\t\t\t                    (onSelectAll)=\"onSelectAll($event)\"\n\t\t\t\t\t\t                    (onDeSelectAll)=\"onDeSelectAll($event)\">\n\t\t\t\t\t\t                </angular2-multiselect>\n\t\t\t\t\t\t           </div>\n                                </div>\n                                <div class=\"col-md-6 col-sm-6\">\n                                    <label>Select size</label>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t                <angular2-multiselect [data]=\"dropdownList1\" [(ngModel)]=\"selectedItems1\"\n\t\t\t\t\t\t                    [settings]=\"dropdownSettings1\"\n\t\t\t\t\t\t                    (onSelect)=\"onItemSelect($event)\"\n\t\t\t\t\t\t                    (onDeSelect)=\"OnItemDeSelect($event)\"\n\t\t\t\t\t\t                    (onSelectAll)=\"onSelectAll($event)\"\n\t\t\t\t\t\t                    (onDeSelectAll)=\"onDeSelectAll($event)\">\n\t\t\t\t\t\t                </angular2-multiselect>\n\t\t\t\t\t\t           </div>\n                                </div>\n                            </div>\n                            <hr />\n                            <div class=\"row\">\n                                <div class=\"col-md-7 offset-md-5 col-sm-8\">\n                                    <button class=\"btn btn-danger btn-block btn-round\">Add to Cart &nbsp;<i class=\"fa fa-chevron-right\"></i></button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n        </div>\n\n        <div class=\"section\">\n            <div class=\"container\">\n                <div class=\"row card-body-row\">\n                    <div class=\"col-md-4 col-sm-4\">\n                       <div class=\"info\">\n                            <div class=\"icon icon-warning\">\n                                <i class=\"nc-icon nc-delivery-fast\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\"> 2 Days Delivery </h4>\n                                <p>Spend your time generating new ideas. You don't have to think of implementing anymore.</p>\n                            </div>\n                       </div>\n                    </div>\n                    <div class=\"col-md-4 col-sm-4\">\n                       <div class=\"info\">\n                            <div class=\"icon icon-danger\">\n                                <i class=\"nc-icon nc-credit-card\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\"> Refundable Policy </h4>\n                                <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\n                            </div>\n                       </div>\n                    </div>\n                    <div class=\"col-md-4 col-sm-4\">\n                       <div class=\"info\">\n                            <div class=\"icon icon-success\">\n                                <i class=\"nc-icon nc-bulb-63\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\"> Popular Item </h4>\n                                <p>Choose from a veriety of colors resembling sugar paper pastels.</p>\n                            </div>\n                       </div>\n                    </div>\n                </div>\n                <hr />\n                    <p>What to find out more about how we build our stuff? <a class=\"link-danger\">Learn more.</a></p>\n                <hr />\n                <div class=\"faq\">\n\n                    <h4>Frequently Asked Questions</h4> <br/>\n\t\t\t\t\t<ngb-accordion #acc=\"ngbAccordion\">\n\t\t\t\t\t\t<ngb-panel>\n\t\t\t\t\t\t\t<ng-template ngbPanelTitle>\n\t\t\t\t\t\t\t\t<h5 class=\"mb-0 panel-title\">\n\t\t\t\t\t\t\t\t\t<a class=\"collapsed\">\n\t\t\t\t\t\t\t\t\t\tDefault Collapsible Item 1\n\t\t\t\t\t\t\t\t\t\t<i class=\"nc-icon nc-minimal-down\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t\t\t\t\t\t\t  aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t\t\t\t\t\t\t  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t\t\t\t\t\t\t  craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n\t\t\t\t\t\t\t\t  occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n\t\t\t\t\t\t\t\t  labore sustainable VHS.\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ngb-panel>\n\t\t\t\t\t\t<ngb-panel>\n\t\t\t\t\t\t\t<ng-template ngbPanelTitle>\n\t\t\t\t\t\t\t\t<h5 class=\"mb-0 panel-title\">\n\t\t\t\t\t\t\t\t\t<a class=\"collapsed\">\n\t\t\t\t\t\t\t\t\t\tDefault Collapsible Item 2\n\t\t\t\t\t\t\t\t\t\t<i class=\"nc-icon nc-minimal-down\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n\t\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n\t\t\t\t\t\t\t\tlabore sustainable VHS.\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ngb-panel>\n\t\t\t\t\t\t<ngb-panel>\n\t\t\t\t\t\t\t<ng-template ngbPanelTitle>\n\t\t\t\t\t\t\t\t<h5 class=\"mb-0 panel-title\">\n\t\t\t\t\t\t\t\t\t<a class=\"collapsed\">\n\t\t\t\t\t\t\t\t\t\tDefault Collapsible Item 3\n\t\t\t\t\t\t\t\t\t\t<i class=\"nc-icon nc-minimal-down\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n\t\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n\t\t\t\t\t\t\t\tlabore sustainable VHS.\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ngb-panel>\n\t\t\t\t\t</ngb-accordion>\n                </div>\n                <div class=\"row add-row\">\n                    <div class=\"col-md-4 col-sm-4\">\n                        <h4>Complete the Look</h4>\n                    </div>\n                    <div class=\"col-md-4 col-sm-4\">\n                        <h5>Full-Grain Leather Briefcase</h5>\n                        <p class=\"price\"><strong>&euro; 975.00</strong></p>\n\n                        <p>Constructed from robust full-grain leather, it's finished with the label's 'city webbing' - a rich take on the brand's signature stripes.</p>\n\t\t\t\t\t\t<br/>\n                        <button class=\"btn btn-danger btn-round\"> Add to Cart</button>\n                    </div>\n                    <div class=\"col-md-3 ml-auto col-sm-4\">\n                        <img src=\"./assets/img/gallery/paul-smith.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-dark\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\"><h4>Similar Products</h4><br/></div>\n                    <div class=\"col-md-4 col-sm-4\">\n\t\t\t\t\t\t<div class=\"card card-product card-plain\">\n\t\t\t\t\t\t\t<div class=\"card-image\">\n\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/balmain-1.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">Double Breasted Mini Dress</h5>\n\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">Dresses & Skirts</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"actions\">\n\t\t\t\t\t\t\t\t\t\t<h5>1.300 &euro;</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n                    <div class=\"col-md-4 col-sm-4\">\n\t\t\t\t\t\t<div class=\"card card-product card-plain\">\n\t\t\t\t\t\t\t<div class=\"card-image\">\n\t\t\t\t\t\t\t\t<a href=\"#paper-kit\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/img/balmain-2.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">Chrystal Dress</h5>\n\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">Dresses & Skirts</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"actions\">\n\t\t\t\t\t\t\t\t\t\t<h5>1.500 &euro;</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    </div>\n                    <div class=\"col-md-4 col-sm-4\">\n\t\t\t\t\t\t<div class=\"card card-product card-plain\">\n\t                        <div class=\"card-image\">\n\t                            <a href=\"#paper-kit\">\n\t                                <img src=\"./assets/img/balmain-3.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\">\n\t                            </a>\n\t                            <div class=\"card-body\">\n\t                                <div class=\"card-description\">\n\t                                    <h5 class=\"card-title\">Chrystal Skirt</h5>\n\t                                    <p class=\"card-description\">Only on demand</p>\n\t                                </div>\n\n\t                                <div class=\"actions\">\n\t                                    <h5>1.200 &euro;</h5>\n\t                                </div>\n\t                            </div>\n\t                        </div>\n\t\t\t\t\t\t</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<footer class=\"footer section-black\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<nav class=\"footer-nav\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href=\"https://www.creative-tim.com\">Creative Tim</a></li>\n\t\t\t\t\t<li><a href=\"http://blog.creative-tim.com\">Blog</a></li>\n\t\t\t\t\t<li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t\t<div class=\"credits ml-auto\">\n\t\t\t\t<span class=\"copyright\">\n\t\t\t\t\t© {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/examples/productpage/productpage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/productpage/productpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductpageComponent = /** @class */ (function () {
    function ProductpageComponent() {
        this.data = new Date();
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList1 = [];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {};
    }
    ProductpageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('buy-product');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        navbar.classList.add('bg-danger');
        this.dropdownList = [
            { "id": 1, "itemName": "Black" },
            { "id": 2, "itemName": "Gray" },
            { "id": 3, "itemName": "White" }
        ];
        this.selectedItems = [
            { "id": 1, "itemName": "Black" }
        ];
        this.dropdownSettings = {
            singleSelection: true,
            text: "Select language",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
        this.dropdownList1 = [
            { "id": 1, "itemName": "Small" },
            { "id": 2, "itemName": "Medium" },
            { "id": 3, "itemName": "Large" }
        ];
        this.selectedItems1 = [
            { "id": 1, "itemName": "Small" },
        ];
        this.dropdownSettings1 = {
            singleSelection: true,
            text: "Select currency",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
    };
    ProductpageComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    ProductpageComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    ProductpageComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    ProductpageComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    ProductpageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('buy-product');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        navbar.classList.remove('bg-danger');
    };
    ProductpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-productpage',
            template: __webpack_require__("../../../../../src/app/examples/productpage/productpage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/productpage/productpage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductpageComponent);
    return ProductpageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-small\" style=\"background-image: url('./assets/img/sections/rodrigo-ardilha.jpg');\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"profile-content section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"profile-picture\">\n                    <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n                        <div class=\"fileinput-new img-no-padding\">\n                            <img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"...\">\n                        </div>\n                        <div class=\"name\">\n                            <h4 class=\"title text-center\">Chet Faker<br /><small>Music Producer</small></h4>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>\n                    <br />\n                    <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-cog\"></i> Settings</button>\n                </div>\n            </div>\n            <br/>\n            <div class=\"nav-tabs-navigation\">\n                <div class=\"nav-tabs-wrapper\">\n                    <ngb-tabset [justify]=\"'center'\">\n                        <ngb-tab title=\"Follows\">\n                            <ng-template ngbTabContent >\n                                <div class=\"row following\" id=\"follows\">\n                                    <div class=\"col-md-6 ml-auto mr-auto\">\n                                        <ul class=\"list-unstyled follows\">\n                                            <li>\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-2 col-3\">\n                                                        <img src=\"./assets/img/faces/clem-onojeghuo-3.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                                    </div>\n                                                    <div class=\"col-md-7 col-4\">\n                                                        <h6>Lincoln<br/><small>Car Producer</small></h6>\n                                                    </div>\n                                                    <div class=\"col-md-3 col-2\">\n                                                        <div class=\"unfollow\" >\n                                                            <div class=\"form-check\">\n                                                                <label class=\"form-check-label\">\n                                                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                                    <span class=\"form-check-sign\"></span>\n                                                                </label>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </li>\n                                            <hr />\n                                            <li>\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-2 col-3\">\n                                                        <img src=\"./assets/img/faces/erik-lucatero-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                                    </div>\n                                                    <div class=\"col-md-7 col-4\">\n                                                        <h6>Banks<br /><small>Singer</small></h6>\n                                                    </div>\n                                                    <div class=\"col-md-3 col-2\">\n                                                        <div class=\"unfollow\" >\n                                                            <div class=\"form-check\">\n                                                                <label class=\"form-check-label\">\n                                                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                                    <span class=\"form-check-sign\"></span>\n                                                                </label>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"Following\">\n                            <ng-template ngbTabContent>\n                                <h3 class=\"text-muted\">Not following anyone yet :(</h3>\n                                <br>\n                                <button class=\"btn btn-warning btn-round\">Find artists</button>\n                            </ng-template>\n                        </ngb-tab>\n                    </ngb-tabset>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<footer class=\"footer section-dark\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"footer-nav\">\n                <ul>\n                    <li><a href=\"https://www.creative-tim.com\">Creative Tim</a></li>\n                    <li><a href=\"http://blog.creative-tim.com\">Blog</a></li>\n                    <li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\n                </ul>\n            </nav>\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    © {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/examples/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.data = new Date();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('profile');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        navbar.classList.add('bg-danger');
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('profile');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        navbar.classList.remove('bg-danger');
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/examples/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header\" style=\"background-image: url('./assets/img/sections/soroush-karimi.jpg');\">\n        <div class=\"filter\"></div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-sm-7 col-12 ml-auto\">\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon\">\n                                <i class=\"fa fa-umbrella\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h3> We've got you covered </h3>\n                                <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. Everything you need in a single case.</p>\n                            </div>\n                        </div>\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon\">\n                                <i class=\"fa fa-map-signs\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h3> Clear Directions </h3>\n                                <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.</p>\n                            </div>\n                        </div>\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon\">\n                                <i class=\"fa fa-user-secret\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h3> We value your privacy </h3>\n                                <p>Completely synergize resource taxing relationships via premier niche markets.</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 col-sm-5 col-12 mr-auto\">\n                        <div class=\"card card-register\">\n                            <h3 class=\"card-title text-center\">Register</h3>\n                            <div class=\"social\">\n                                <button href=\"#paper-kit\" class=\"btn btn-just-icon btn-facebook\"><i class=\"fa fa-facebook\"></i></button>\n                                <button href=\"#paper-kit\" class=\"btn btn-just-icon btn-google\"><i class=\"fa fa-google\"></i></button>\n                                <button href=\"#paper-kit\" class=\"btn btn-just-icon btn-twitter\"><i class=\"fa fa-twitter\"></i></button>\n                            </div>\n\n                            <div class=\"division\">\n                                <div class=\"line l\"></div>\n                                <span>or</span>\n                                <div class=\"line r\"></div>\n                            </div>\n                            <form class=\"register-form\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\n\n                                <button class=\"btn btn-block btn-round\">Register</button>\n                            </form>\n                            <div class=\"login\">\n                                <p>Already have an account? <a href=\"#0\">Log in</a>.</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        <div class=\"demo-footer text-center\">\n                <h6>&copy; {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim</h6>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/examples/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        this.data = new Date();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('full-screen');
        body.classList.add('register');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('full-screen');
        body.classList.remove('register');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/examples/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n    <div class=\"main\">\n        <div class=\"section section-white section-search\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-12 ml-auto mr-auto text-center\">\n                        <form role=\"search\" class=\"form-inline search-form\">\n                            <div class=\"input-group no-border\">\n                              <span class=\"input-group-addon addon-xtreme no-border\" id=\"basic-addon1\"><i class=\"fa fa-search\"></i></span>\n                              <input type=\"text\" class=\"form-control input-xtreme no-border\" placeholder=\"Find Stuff\" aria-describedby=\"basic-addon1\">\n                            </div>\n                        </form>\n\n                        <h6 class=\"text-muted\">Is this what you are looking for?</h6>\n                        <ul class=\"list-unstyled follows\">\n                            <li>\n                                <div class=\"row\">\n                                    <div class=\"col-md-2 col-3\">\n                                        <img src=\"./assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                    </div>\n                                    <div class=\"col-md-6 col-4 description\">\n                                        <h5>Erik Faker<br>\n                                        <small>Musical Artist with <b>3</b> songs.</small>\n                                        </h5>\n                                    </div>\n                                    <div class=\"col-md-2 col-2\">\n                                        <button class=\"btn btn-just-icon btn-round btn-outline-danger btn-tooltip\" placement=\"right\" ngbTooltip=\"follow\"><i class=\"fa fa-plus\"></i></button>\n                                    </div>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"row\">\n                                    <div class=\"col-md-2 col-3\">\n                                        <img src=\"./assets/img/faces/kaci-baum-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                    </div>\n                                    <div class=\"col-md-6 col-4 description\">\n                                        <h5>Sophie Travolta<br /><small>Singer</small></h5>\n                                    </div>\n                                    <div class=\"col-md-2 col-2\">\n                                        <button class=\"btn btn-just-icon btn-round btn-outline-danger btn-tooltip\" placement=\"right\" ngbTooltip=\"follow\"><i class=\"fa fa-plus\"></i></button>\n                                    </div>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"row\">\n                                    <div class=\"col-md-2 col-3\">\n                                        <img src=\"./assets/img/faces/erik-lucatero-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                    </div>\n                                    <div class=\"col-md-6 col-4 description\">\n                                        <h5>John Lincoln<br /><small>Musical Producer</small></h5>\n                                    </div>\n                                    <div class=\"col-md-2 col-2\">\n                                        <button class=\"btn btn-just-icon btn-round btn-outline-danger btn-tooltip\" placement=\"right\" ngbTooltip=\"follow\"><i class=\"fa fa-plus\"></i></button>\n                                    </div>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"row\">\n                                    <div class=\"col-md-2 col-3\">\n                                        <img src=\"./assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                    </div>\n                                    <div class=\"col-md-6 col-4 description\">\n                                        <h5>Oleg Clem<br /><small>Web Designer</small></h5>\n                                    </div>\n                                    <div class=\"col-md-2 col-2\">\n                                        <button class=\"btn btn-just-icon btn-round btn-outline-danger btn-tooltip\" placement=\"right\" ngbTooltip=\"follow\"><i class=\"fa fa-plus\"></i></button>\n                                    </div>\n                                </div>\n                            </li>\n\n                        </ul>\n\n                        <div class=\"text-missing\">\n                            <h5 class=\"text-muted\">If you are not finding who you’re looking for try using an email address. </h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n<footer class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"footer-nav\">\n                <ul>\n                    <li><a href=\"https://www.creative-tim.com\">Creative Tim</a></li>\n                    <li><a href=\"http://blog.creative-tim.com\">Blog</a></li>\n                    <li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\n                </ul>\n            </nav>\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    © {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/examples/search/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.data = new Date();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('search');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('bg-danger');
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('search');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('bg-danger');
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/examples/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs settings-background\" style=\"background-image: url('./assets/img/sections/joshua-earles.jpg')\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"profile-content section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"profile-picture\">\n                    <app-image-upload [image]=\"'./assets/img/faces/clem-onojeghuo-2.jpg'\"></app-image-upload>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto\">\n                    <form class=\"settings-form\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6 col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label>First Name</label>\n                                    <input type=\"text\" class=\"form-control border-input\" placeholder=\"First Name\">\n                                </div>\n                            </div>\n\n                            <div class=\"col-md-6 col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label>Last Email</label>\n                                    <input type=\"text\" class=\"form-control border-input\" placeholder=\"Last Name\">\n                                </div>\n                            </div>\n                        </div>\n                      <div class=\"form-group\">\n                            <label>Job Title</label>\n                            <input type=\"text\" class=\"form-control border-input\" placeholder=\"Job Title\">\n                      </div>\n                      <div class=\"form-group\">\n                        <label>Description</label>\n                            <textarea class=\"form-control textarea-limited\" placeholder=\"This is a textarea limited to 150 characters.\" rows=\"3\" maxlength=\"150\" ></textarea>\n                            <h5><small><span id=\"textarea-limited-message\" class=\"pull-right\">150 characters left</span></small></h5>\n                      </div>\n\n                    <label>Notifications</label>\n                    <ul class=\"notifications\">\n                          <li class=\"notification-item\">\n                            Updates regarding platform changes\n                            <bSwitch\n                                [switch-on-color]=\"'info'\"\n                                [switch-off-color]=\"'info'\"\n                                [(ngModel)]=\"state_info\"\n                                name=\"first_switch\">\n                            </bSwitch>\n                          </li>\n                          <li class=\"notification-item\">\n                            Updates regarding product changes\n                            <bSwitch\n                                [switch-on-color]=\"'info'\"\n                                [switch-off-color]=\"'info'\"\n                                [(ngModel)]=\"state_info1\"\n                                name=\"second_switch\">\n                            </bSwitch>\n                          </li>\n                          <li class=\"notification-item\">\n                            Weekly newsletter\n                            <bSwitch\n                                [switch-on-color]=\"'info'\"\n                                [switch-off-color]=\"'info'\"\n                                [(ngModel)]=\"state_info2\"\n                                name=\"third_switch\">\n                            </bSwitch>\n                          </li>\n                      </ul>\n                      <div class=\"text-center\">\n                        <button type=\"submit\" class=\"btn btn-wd btn-info btn-round\">Save</button>\n                      </div>\n                    </form>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<footer class=\"footer section-nude\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"footer-nav\">\n                <ul>\n                    <li><a href=\"https://www.creative-tim.com\">Creative Tim</a></li>\n                    <li><a href=\"http://blog.creative-tim.com\">Blog</a></li>\n                    <li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\n                </ul>\n            </nav>\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    © {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/examples/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        this.state_info = true;
        this.state_info1 = true;
        this.state_info2 = true;
        this.data = new Date();
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('settings');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        navbar.classList.add('bg-danger');
    };
    SettingsComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('settings');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        navbar.classList.remove('bg-danger');
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/examples/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/twitter/twitter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-small\"  style=\"background-image: url('./assets/img/rihanna_cover.jpg');\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"profile-content section-white-gray\">\n        <div class=\"container\">\n            <div class=\"row owner\">\n                <div class=\"col-md-2 col-sm-4 col-6 ml-auto mr-auto text-center\">\n                    <div class=\"avatar\">\n                        <img src=\"./assets/img/rihanna.jpg\" alt=\"Circle Image\" class=\"img-circle img-responsive\">\n                        <div class=\"following\">\n                            <button class=\"btn btn-sm btn-info btn-just-icon\" rel=\"tooltip\" title=\"Follow\"><i class=\"nc-icon nc-simple-add\"></i></button>\n                        </div>\n                    </div>\n\n                    <div class=\"name\">\n                        <h4>Rihanna <br /><small>@rihanna</small></h4>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>Excited to share this with you! <a class=\"link-danger twitter-hashtag\" href=\"javascript: void(0);\">#ANTIdiaRy</a> — <a href=\"javascript: void(0);\">http://smarturl.it</a> </p>\n                    <div class=\"description-details\">\n                        <ul class=\"list-unstyled\">\n                            <li><i class=\"fa fa-map-marker\"></i> ANTI</li>\n                            <li><i class=\"fa fa-link\"></i> <a href=\"javascript:void(0);\">rihanna.com</a></li>\n                            <li><i class=\"fa fa-calendar\"></i> Joined October 2009</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"profile-tabs\">\n                <div class=\"nav-tabs-navigation\">\n                    <div class=\"nav-tabs-wrapper\">\n                        <ngb-tabset [justify]=\"'center'\">\n                            <ngb-tab title=\"Tweets\">\n                                <ng-template ngbTabContent>\n                                    <div class=\"tab-pane active\" id=\"tweets\" role=\"tabpanel\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-8\">\n                                                <div class=\"tweets\">\n                                                    <div class=\"media\">\n                                                          <a class=\"pull-left\" href=\"#paper-kit\">\n                                                           <div class=\"avatar\">\n                                                                <img class=\"media-object\" src=\"./assets/img/rihanna.jpg\" alt=\"...\" />\n                                                            </div>\n                                                          </a>\n                                                          <div class=\"media-body\">\n                                                            <strong>Rihanna</strong>\n                                                            <h5 class=\"media-heading\"><small>@rihanna &middot; 1h</small></h5>\n                                                            <p>It's just beyond the vault. Discover room 7 of the <a href=\"javascript: void(0);\" class=\"link-danger\">#ANTIdiaRy</a> at <a href=\"\" class=\"link-info\">http://smarturl.it/AntidiaRyTW</a></p>\n\n                                                            <div class=\"media-footer\">\n                                                                <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                                                     <i class=\"fa fa-reply\"></i>\n                                                                </a>\n                                                                <a href=\"#paper-kit\" class=\"btn btn-success btn-link\">\n                                                                     <i class=\"fa fa-retweet\"></i> 2.1k\n                                                                </a>\n                                                                <a href=\"#paper-kit\" class=\"btn btn-danger btn-link\">\n                                                                     <i class=\"fa fa-heart\"></i> 3.2k\n                                                                </a>\n                                                                <div class=\"dropdown\">\n                                                                  <button id=\"dLabel\" type=\"button\" class=\"btn btn-just-icon btn-link btn-lg\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                                    <i class=\"fa fa-ellipsis-h\"></i>\n                                                                  </button>\n                                                                  <ul class=\"dropdown-menu dropdown-menu-right\">\n                                                                        <li class=\"dropdown-item\">\n                                                                            <a href=\"#paper-kit\">\n                                                                                <div class=\"row\">\n                                                                                    <div class=\"col-sm-2\">\n                                                                                        <span class=\"icon-simple\"><i class=\"fa fa-envelope\"></i></span>\n                                                                                    </div>\n                                                                                    <div class=\"col-sm-9\">Direct Message</div>\n                                                                                </div>\n                                                                            </a>\n                                                                        </li>\n                                                                        <div class=\"dropdown-divider\"></div>\n                                                                        <li class=\"dropdown-item\">\n                                                                            <a href=\"#paper-kit\">\n                                                                                <div class=\"row\">\n                                                                                    <div class=\"col-sm-2\">\n                                                                                        <span class=\"icon-simple\"><i class=\"fa fa-microphone-slash\"></i></span>\n                                                                                    </div>\n                                                                                    <div class=\"col-sm-9\">Mute</div>\n                                                                                </div>\n                                                                            </a>\n                                                                        </li>\n                                                                        <div class=\"dropdown-divider\"></div>\n                                                                        <li class=\"dropdown-item\">\n                                                                            <a href=\"#paper-kit\">\n                                                                                <div class=\"row\">\n                                                                                    <div class=\"col-sm-2\">\n                                                                                        <span class=\"icon-simple\"><i class=\"fa fa-exclamation-circle\"></i></span>\n                                                                                    </div>\n                                                                                    <div class=\"col-sm-9\">Report</div>\n                                                                                </div>\n                                                                            </a>\n                                                                        </li>\n                                                                    </ul>\n                                                                </div>\n                                                            </div>\n\n                                                          </div>\n                                                    </div> <!-- end media -->\n\n                                                    <div class=\"media\">\n                                                      <a class=\"pull-left\" href=\"#paper-kit\">\n                                                          <div class=\"avatar\">\n                                                             <img class=\"media-object\" alt=\"Tim Picture\" src=\"./assets/img/khaled.jpg\">\n                                                          </div>\n                                                          <div class=\"retweet\">\n                                                                <button class=\"btn btn-xs btn-success btn-just-icon btn-sm\" rel=\"tooltip\" title=\"Follow\"><i class=\"fa fa-retweet\"></i></button>\n                                                          </div>\n                                                      </a>\n                                                      <div class=\"media-body\">\n                                                        <strong>DJ KHALED</strong>\n                                                        <h5 class=\"media-heading\"><small>@djkhaled &middot;  6 Jan 2016</small></h5>\n                                                         <p><a href=\"#paper-kit\" class=\"link-danger\">#LA</a> fan luv I'm be <a href=\"#paper-kit\" class=\"link-info\">@1oakla</a> tonight i want see fan luv let's win more ! <a href=\"#paper-kit\" class=\"link-danger\">#wethebest</a> </p>\n                                                        <div class=\"tweet-link\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-4\">\n                                                                    <img src=\"./assets/img/khaled_tweet.png\" alt=\"Rounded Image\" class=\"img-rounded img-tweet-link img-responsive\">\n                                                                </div>\n                                                                <div class=\"col-md-8\">\n                                                                    <strong>Let's win more by DJ Khaled</strong>\n                                                                    <a href=\"#0\"><p>This is a 3-day event hosted by DJ Khaled for his fan luv in LA. Major 🔑 to success. Bless up!</p>\n                                                                    <small><a href=\"#paper-kit\" class=\"text-muted\">djkhaled.com</a></small></a>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n\n\n\n                                                        <div class=\"media-footer\">\n                                                            <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                                                 <i class=\"fa fa-reply\"></i>\n                                                            </a>\n                                                            <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                                                 <i class=\"fa fa-retweet\"></i> 100\n                                                            </a>\n                                                            <a href=\"#paper-kit\" class=\"btn btn-danger btn-link\">\n                                                                 <i class=\"fa fa-heart\"></i> 234\n                                                            </a>\n                                                            <div class=\"dropdown\">\n                                                                  <button id=\"dLabel\" type=\"button\" class=\"btn btn-icon btn-link btn-lg\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                                    <i class=\"fa fa-ellipsis-h\"></i>\n                                                                  </button>\n                                                                  <ul class=\"dropdown-menu dropdown-menu-right\">\n                                                                      <li class=\"dropdown-item\">\n                                                                          <a href=\"#paper-kit\">\n                                                                              <div class=\"row\">\n                                                                                  <div class=\"col-sm-2\">\n                                                                                      <span class=\"icon-simple\"><i class=\"fa fa-envelope\"></i></span>\n                                                                                  </div>\n                                                                                  <div class=\"col-sm-9\">Direct Message</div>\n                                                                              </div>\n                                                                          </a>\n                                                                      </li>\n                                                                      <div class=\"dropdown-divider\"></div>\n                                                                      <li class=\"dropdown-item\">\n                                                                          <a href=\"#paper-kit\">\n                                                                              <div class=\"row\">\n                                                                                  <div class=\"col-sm-2\">\n                                                                                      <span class=\"icon-simple\"><i class=\"fa fa-microphone-slash\"></i></span>\n                                                                                  </div>\n                                                                                  <div class=\"col-sm-9\">Mute</div>\n                                                                              </div>\n                                                                          </a>\n                                                                      </li>\n                                                                      <div class=\"dropdown-divider\"></div>\n                                                                      <li class=\"dropdown-item\">\n                                                                          <a href=\"#paper-kit\">\n                                                                              <div class=\"row\">\n                                                                                  <div class=\"col-sm-2\">\n                                                                                      <span class=\"icon-simple\"><i class=\"fa fa-exclamation-circle\"></i></span>\n                                                                                  </div>\n                                                                                  <div class=\"col-sm-9\">Report</div>\n                                                                              </div>\n                                                                          </a>\n                                                                      </li>\n                                                                  </ul>\n                                                                </div>\n                                                        </div>\n                                                      </div>\n                                                    </div> <!-- end media -->\n                                                    <div class=\"media\">\n                                                      <a class=\"pull-left\" href=\"#paper-kit\">\n                                                          <div class=\"avatar\">\n                                                             <img class=\"media-object\" alt=\"Tim Picture\" src=\"./assets/img/rihanna.jpg\">\n                                                          </div>\n                                                      </a>\n                                                      <div class=\"media-body\">\n                                                        <strong>Rihanna</strong>\n                                                        <h5 class=\"media-heading\"><small>@rihanna &middot;  8 Jan 2016</small></h5>\n                                                         <p>bitch better have my mistletoe <a href=\"#paper-kit\" class=\"link-danger\">#rihannaxstance</a> </p>\n                                                         <img src=\"./assets/img/rihanna_tweet.jpeg\" alt=\"Rounded Image\" class=\"img-rounded img-tweet\">\n\n\n                                                        <div class=\"media-footer\">\n                                                            <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                                                 <i class=\"fa fa-reply\"></i>\n                                                            </a>\n                                                            <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                                                 <i class=\"fa fa-retweet\"></i> 5.8K\n                                                            </a>\n                                                            <a href=\"#paper-kit\" class=\"btn btn-danger btn-link\">\n                                                                 <i class=\"fa fa-heart\"></i> 12K\n                                                            </a>\n                                                            <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                                                 <i class=\"fa fa-ellipsis-h\"></i>\n                                                            </a>\n                                                        </div>\n                                                      </div>\n                                                    </div> <!-- end media -->\n                                                    <div class=\"media\">\n                                                      <a class=\"pull-left\" href=\"#paper-kit\">\n                                                          <div class=\"avatar\">\n                                                             <img class=\"media-object\" alt=\"Tim Picture\" src=\"./assets/img/rihanna.jpg\">\n                                                          </div>\n                                                      </a>\n                                                      <div class=\"media-body\">\n                                                        <strong>Rihanna</strong>\n                                                        <h5 class=\"media-heading\"><small>@rihanna &middot;  9 Jan 2016</small></h5>\n                                                         <p>Thank you God for fulfilling Your plans in my life.... All the Glory belongs to You!!!! <a href=\"https://instagram.com/p/4m5W4sBMzj/\">https://instagram.com/p/4m5W4sBMzj/</a> </p>\n\n\n                                                        <div class=\"media-footer\">\n                                                            <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                                                 <i class=\"fa fa-reply\"></i>\n                                                            </a>\n                                                            <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                                                 <i class=\"fa fa-retweet\"></i> 5.9K\n                                                            </a>\n                                                            <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                                                 <i class=\"fa fa-heart\"></i> 11K\n                                                            </a>\n                                                            <div class=\"dropdown\">\n                                                                  <button id=\"dLabel\" type=\"button\" class=\"btn btn-icon btn-link btn-lg\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                                    <i class=\"fa fa-ellipsis-h\"></i>\n                                                                  </button>\n                                                                  <ul class=\"dropdown-menu dropdown-menu-right\">\n                                                                        <li class=\"dropdown-item\">\n                                                                            <a href=\"#paper-kit\">\n                                                                                <div class=\"row\">\n                                                                                    <div class=\"col-sm-2\">\n                                                                                        <span class=\"icon-simple\"><i class=\"fa fa-envelope\"></i></span>\n                                                                                    </div>\n                                                                                    <div class=\"col-sm-9\">Direct Message</div>\n                                                                                </div>\n                                                                            </a>\n                                                                        </li>\n                                                                        <div class=\"dropdown-divider\"></div>\n                                                                        <li class=\"dropdown-item\">\n                                                                            <a href=\"#paper-kit\">\n                                                                                <div class=\"row\">\n                                                                                    <div class=\"col-sm-2\">\n                                                                                        <span class=\"icon-simple\"><i class=\"fa fa-microphone-slash\"></i></span>\n                                                                                    </div>\n                                                                                    <div class=\"col-sm-9\">Mute</div>\n                                                                                </div>\n                                                                            </a>\n                                                                        </li>\n                                                                        <div class=\"dropdown-divider\"></div>\n                                                                        <li class=\"dropdown-item\">\n                                                                            <a href=\"#paper-kit\">\n                                                                                <div class=\"row\">\n                                                                                    <div class=\"col-sm-2\">\n                                                                                        <span class=\"icon-simple\"><i class=\"fa fa-exclamation-circle\"></i></span>\n                                                                                    </div>\n                                                                                    <div class=\"col-sm-9\">Report</div>\n                                                                                </div>\n                                                                            </a>\n                                                                        </li>\n                                                                    </ul>\n                                                                </div>\n                                                        </div>\n                                                      </div>\n                                                    </div> <!-- end media -->\n                                                    <div class=\"media last-media\">\n                                                      <a class=\"pull-left\" href=\"#paper-kit\">\n                                                          <div class=\"avatar\">\n                                                             <img class=\"media-object\" alt=\"Tim Picture\" src=\"./assets/img/billboard.jpeg\">\n                                                          </div>\n                                                          <div class=\"retweet\">\n                                                                <button class=\"btn btn-xs btn-success btn-just-icon btn-sm\" rel=\"tooltip\" title=\"Follow\"><i class=\"fa fa-retweet\"></i></button>\n                                                          </div>\n                                                      </a>\n                                                      <div class=\"media-body\">\n                                                        <strong>billboard</strong>\n                                                        <h5 class=\"media-heading\"><small>@billboard &middot;  1 Jul 2016</small></h5>\n                                                         <p><a href=\"#paper-kit\">@Rihanna</a> has become the first artist to surpass RIAA's 100 million cumulative singles award threshold: <a href=\"http://blbrd.cm/3rQ3Iq\">http://blbrd.cm/3rQ3Iq</a> </p>\n\n                                                        <div class=\"media-footer\">\n                                                            <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                                                 <i class=\"fa fa-reply\"></i>\n                                                            </a>\n                                                            <a href=\"#paper-kit\" class=\"btn btn-link\">\n                                                                 <i class=\"fa fa-retweet\"></i> 5.6K\n                                                            </a>\n                                                            <a href=\"#paper-kit\" class=\"btn btn-danger btn-link\">\n                                                                 <i class=\"fa fa-heart\"></i> 7.2K\n                                                            </a>\n                                                            <div class=\"dropdown\">\n                                                                  <button id=\"dLabel\" type=\"button\" class=\"btn btn-icon btn-link btn-lg\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                                    <i class=\"fa fa-ellipsis-h\"></i>\n                                                                  </button>\n                                                                  <ul class=\"dropdown-menu dropdown-menu-right\">\n                                                                        <li class=\"dropdown-item\">\n                                                                            <a href=\"#paper-kit\">\n                                                                                <div class=\"row\">\n                                                                                    <div class=\"col-sm-2\">\n                                                                                        <span class=\"icon-simple\"><i class=\"fa fa-envelope\"></i></span>\n                                                                                    </div>\n                                                                                    <div class=\"col-sm-9\">Direct Message</div>\n                                                                                </div>\n                                                                            </a>\n                                                                        </li>\n                                                                        <li class=\"dropdown-item\">\n                                                                            <a href=\"#paper-kit\">\n                                                                                <div class=\"row\">\n                                                                                    <div class=\"col-sm-2\">\n                                                                                        <span class=\"icon-simple\"><i class=\"fa fa-microphone-slash\"></i></span>\n                                                                                    </div>\n                                                                                    <div class=\"col-sm-9\">Mute</div>\n                                                                                </div>\n                                                                            </a>\n                                                                        </li>\n                                                                        <li class=\"dropdown-item\">\n                                                                            <a href=\"#paper-kit\">\n                                                                                <div class=\"row\">\n                                                                                    <div class=\"col-sm-2\">\n                                                                                        <span class=\"icon-simple\"><i class=\"fa fa-exclamation-circle\"></i></span>\n                                                                                    </div>\n                                                                                    <div class=\"col-sm-9\">Report</div>\n                                                                                </div>\n                                                                            </a>\n                                                                        </li>\n                                                                    </ul>\n                                                                </div>\n                                                        </div>\n                                                      </div>\n                                                    </div> <!-- end media -->\n                                                    <br />\n                                                    <div class=\"text-center\">\n                                                     <button class=\"btn btn-outline-info btn-round\">Load more tweets</button>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n                                            <div class=\"col-md-4 col-sm-6\">\n                                                <div class=\"card card-with-shadow\">\n                                                    <div class=\"card-body\">\n                                                        <h5 class=\"card-title\">Who to follow &middot; <small><a href=\"javascript: void(0);\" class=\"link-info\">View all</a></small></h5>\n                                                        <div class=\"accounts-suggestion\">\n                                                            <ul class=\"list-unstyled\">\n                                                                <li class=\"account\">\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-md-3\">\n                                                                            <div class=\"avatar\">\n                                                                                <img src=\"./assets/img/chet_faker_1.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                                                            </div>\n                                                                        </div>\n                                                                        <div class=\"col-md-7 description-section\">\n                                                                            <span>Chet Faker <a href=\"#paper-kit\" class=\"text-muted\">@chetfaker</a></span>\n                                                                            <br />\n                                                                            <span class=\"text-muted\"><small>Followed by <a href=\"#paper-kit\" class=\"link-info\">@banks</a> and <a href=\"#paper-kit\" class=\"link-info\">@rihanna</a> </small></span>\n                                                                        </div>\n\n                                                                        <div class=\"col-md-2 follow\">\n                                                                            <button class=\"btn btn-sm btn-outline-info btn-just-icon\"><i class=\"fa fa-plus\"></i></button>\n                                                                        </div>\n                                                                    </div>\n                                                                </li>\n                                                                <li class=\"account\">\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-md-3\">\n                                                                            <div class=\"avatar\">\n                                                                                <img src=\"./assets/img/placeholder.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                                                            </div>\n                                                                        </div>\n                                                                        <div class=\"col-md-7 description-section\">\n                                                                            <span>John Green <a href=\"#paper-kit\" class=\"text-muted\">@johngreen</a></span>\n                                                                            <br />\n                                                                            <span class=\"text-muted\"><small>Followed by <a href=\"#paper-kit\" class=\"link-info\">@rihanna</a> </small></span>\n                                                                        </div>\n\n                                                                        <div class=\"col-md-2 follow\">\n                                                                            <button class=\"btn btn-sm btn-outline-info btn-just-icon\"><i class=\"fa fa-plus\"></i></button>\n                                                                        </div>\n                                                                    </div>\n                                                                </li>\n                                                                <li class=\"account\">\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-md-3\">\n                                                                            <div class=\"avatar\">\n                                                                                <img src=\"./assets/img/drake.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                                                            </div>\n                                                                        </div>\n                                                                        <div class=\"col-md-7 description-section\">\n                                                                            <span>Drake <a href=\"#paper-kit\" class=\"text-muted\">@drake</a></span>\n                                                                            <br />\n                                                                            <span class=\"text-muted\"><small>Followed by <a href=\"#paper-kit\" class=\"link-info\">@chetfaker</a> </small></span>\n                                                                        </div>\n\n                                                                        <div class=\"col-md-2 follow\">\n                                                                            <button class=\"btn btn-sm btn-outline-info btn-just-icon\"><i class=\"fa fa-plus\"></i></button>\n                                                                        </div>\n                                                                    </div>\n                                                                </li>\n                                                            </ul>\n                                                        </div>\n\n                                                    </div>\n                                                </div> <!-- end card -->\n                                                <div class=\"card card-with-shadow\">\n                                                    <div class=\"card-body\">\n                                                        <h5 class=\"card-title\">Trends &middot; <small><a href=\"javascript: void(0);\" class=\"link-info\">Change</a></small></h5>\n                                                        <div class=\"hashtag-suggestions\">\n                                                            <ul class=\"list-unstyled\">\n                                                                <li><a href=\"#paper-kit\" class=\"link-danger\">#JeSuisToujoursCharlie</a></li>\n                                                                <li><a href=\"#paper-kit\">Oculus Rift</a></li>\n                                                                <li><a href=\"#paper-kit\" class=\"link-danger\">#CarenAndLarryAreNotReal</a></li>\n                                                                <li><a href=\"#paper-kit\" class=\"link-danger\">#Twitter10k</a></li>\n                                                                <li><a href=\"#paper-kit\">EXCLUSIVE MOVE WITHINGTON</a></li>\n                                                                <li><a href=\"#paper-kit\">London</a>\n                                                                <li><a href=\"#paper-kit\">DJ Khaled Snapchat</a>\n                                                            </ul>\n                                                        </div>\n\n                                                    </div>\n                                                </div> <!-- end card -->\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Connections\">\n                                <ng-template ngbTabContent>\n                                    <div class=\"tab-pane text-center\" id=\"connections\" role=\"tabpanel\"></div>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Media\">\n                                <ng-template ngbTabContent>\n                                    <div class=\"tab-pane\" id=\"media\" role=\"tabpanel\"></div>\n                                </ng-template>\n                            </ngb-tab>\n                        </ngb-tabset>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<footer class=\"footer section-gray\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"footer-nav\">\n                <ul>\n                    <li><a href=\"https://www.creative-tim.com\">Creative Tim</a></li>\n                    <li><a href=\"http://blog.creative-tim.com\">Blog</a></li>\n                    <li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\n                </ul>\n            </nav>\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    © {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/examples/twitter/twitter.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/twitter/twitter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TwitterComponent = /** @class */ (function () {
    function TwitterComponent() {
        this.data = new Date();
    }
    TwitterComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('twitter-profile-tweets');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        navbar.classList.add('bg-danger');
    };
    TwitterComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('twitter-profile-tweets');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        navbar.classList.remove('bg-danger');
    };
    TwitterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-twitter',
            template: __webpack_require__("../../../../../src/app/examples/twitter/twitter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/twitter/twitter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TwitterComponent);
    return TwitterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/presentation/presentation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header section-dark\" style=\"background-image: url('./assets/img/sections/pk-pro-cover.jpg')\">\n\t\t<div class=\"content-center\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"title-brand\">\n                    <div class=\"angular-logo\">\n                        <img src=\"./assets/img/angular2-logo.png\" alt=\"\">\n                    </div>\n\t\t\t\t\t<h1 class=\"presentation-title\">Paper Kit 2</h1>\n\t\t\t\t\t<div class=\"type\">PRO</div>\n\t\t\t\t\t<div class=\"fog-low\">\n\t\t\t\t\t\t<img src=\"./assets/img/sections/fog-low.png\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"fog-low right\">\n\t\t\t\t\t\t<img src=\"./assets/img/sections/fog-low.png\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<h2 class=\"presentation-subtitle text-center\">Make your mark with a premium Bootstrap 4 UI Kit! </h2>\n\t\t\t</div>\n\t\t</div>\n\t\t<h6 class=\"category category-absolute\">Designed and coded by\n\t\t\t<a href=\"https://www.creative-tim.com\" target=\"_blank\">\n\t\t\t\t<img src=\"./assets/img/creative-tim-white-slim2.png\" class=\"creative-tim-logo\">\n\t\t\t</a>\n\t\t</h6>\n\t</div>\n    <div class=\"section section-dark section-summary\">\n    \t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t   <div class=\"info\">\n\t\t\t\t\t\t<div class=\"icon icon-danger\">\n\t\t\t\t\t\t\t<i class=\"nc-icon nc-layout-11\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t<h4 class=\"info-title\"> Huge Number of Components </h4>\n\t\t\t\t\t\t\t<p>The kit comes with components designed to look perfect together. All components fit perfectly with each other.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t   </div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t   <div class=\"info\">\n\t\t\t\t\t\t<div class=\"icon icon-danger\">\n\t\t\t\t\t\t\t<i class=\"nc-icon nc-tile-56\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t<h4 class=\"info-title\"> Multi-Purpose Sections </h4>\n\t\t\t\t\t\t\t<p>The sections will help you generate pages in no time. From team presentation to pricing options, you can easily customise and built your examples.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t   </div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t   <div class=\"info\">\n\t\t\t\t\t\t<div class=\"icon icon-danger\">\n\t\t\t\t\t\t\t<i class=\"nc-icon nc-paper\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t<h4 class=\"info-title\"> Example Pages </h4>\n\t\t\t\t\t\t\t<p>Speed up your development time or get inspired with the large number of example pages. You can jump start your development with our pre-built example pages.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t   </div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n    \t</div>\n    </div>\n\n\t<div class=\"section section-components section-dark\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12 col-lg-6\">\n\t\t\t\t<div class=\"image-container\">\n\t\t\t\t\t<img class=\"components-macbook\" src=\"./assets/img/presentation-page/laptop-basic.png\" alt=\"\" />\n\t\t\t\t\t<img class=\"table-img\" src=\"./assets/img/presentation-page/table.jpg\" alt=\"\" />\n\t\t\t\t\t<img class=\"share-btn-img\" src=\"./assets/img/presentation-page/share-btn.png\" alt=\"\" />\n\t\t\t\t\t<img class=\"coloured-card-btn-img\" src=\"./assets/img/presentation-page/coloured-card-with-btn.png\" alt=\"\" />\n\t\t\t\t\t<img class=\"coloured-card-img\" src=\"./assets/img/presentation-page/coloured-card.png\" alt=\"\" />\n\t\t\t\t\t<img class=\"social-img\" src=\"./assets/img/presentation-page/social-row.png\" alt=\"\" />\n\t\t\t\t\t<img class=\"pin-btn-img\" src=\"./assets/img/presentation-page/pin-btn.png\" alt=\"\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-10 col-lg-4 ml-auto mr-auto\">\n\t\t\t\t<div class=\"container basic-container\">\n\t\t\t\t\t<h3 class=\"title\">Basic Components</h3>\n\t\t\t\t\t<h6 class=\"category\">The core elements of your website</h6>\n\t\t\t\t\t<h5 class=\"description\">We re-styled every Bootstrap 4 element to match the Paper Kit style.  All the Bootstrap 4 components that you need in a development have been re-design with the new look. Besides the numerous basic elements, we have also created additional classes. All these items will help you take your project to the next level.</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"section section-cards section-gold\">\n\t\t<div class=\"codrops-header\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-5 col-lg-4\">\n\t\t\t\t\t<div class=\"section-description\">\n\t\t\t\t\t\t<h3 class=\"title\">Beautiful Cards</h3>\n\t\t\t\t\t\t<h6 class=\"category\">One Card for Every Problem</h6>\n\t\t\t\t\t\t<h5 class=\"description\">We have gone above and beyond with options for you to organise your information. From cards designed for blog posts, to product cards or user profiles, you will have many options to choose from. All the cards follow the Paper Kit style principles and have a design that stands out.  </h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                <div class=\"col-md-7 col-lg-8\">\n                    <div class=\"image-container\">\n                        <img src=\"./assets/img/carduri2.png\" alt=\"Cards\">\n                    </div>\n                </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div id=\"fadeInAnim\">\n\t\t<div class=\"section section-content section-gray\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t<div class=\"image-container\">\n\t\t\t\t\t\t\t<img class=\"img\" src=\"./assets/img/presentation-page/iPad-content-2.png\"/>\n\t\t\t\t\t\t\t<img class=\"area-img add-animation\" src=\"./assets/img/presentation-page/ipad-left-img.JPG\" >\n\t\t\t\t\t\t\t<img class=\"info-img add-animation\" src=\"./assets/img/presentation-page/ipad-right-img.JPG\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-4 \">\n\t\t\t\t\t\t<div class=\"section-description\">\n\t\t\t\t\t\t\t<h3 class=\"title\">Content Areas</h3>\n\t\t\t\t\t\t\t<h6 class=\"category\">For Areas that Need More Space</h6>\n\t\t\t\t\t\t\t<h5 class=\"description\">We took into consideration multiple use cases and came up with some specific elements for you. If you need elements such as tables, comments, description areas, tabs and many others, we've got you covered. They're beautiful and easy to use for the end user navigating your website. </h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"section section-sections section-gray\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"col-md-8 ml-auto mr-auto\">\n\t\t\t\t<div class=\"section-description text-center\">\n\t\t\t\t\t<h2 class=\"title\">Sections you will love</h2>\n\n\t\t\t\t\t<h5 class=\"description\"> Build pages in no time using pre-made sections! We have created multiple sections for you to put together and customise into pixel perfect example pages. From headers to footers, you will be able to choose the best combination for your project.</h5>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<a [routerLink]=\"['/presentation']\" class=\"btn btn-rose btn-round\">View All Sections</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"container-fluid\">\n\t\t\t<div class=\"section-cols\">\n\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/screenshots/header-1.jpg\" alt=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/screenshots/header-2.jpg\" alt=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/screenshots/header-3.jpg\" alt=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/screenshots/header-4.jpg\" alt=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/screenshots/team-cards-social.jpg\" alt=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/screenshots/bg-pricing-card.jpg\" alt=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/screenshots/white-pricing-card.jpg\" alt=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/screenshots/team-member-card.jpg\" alt=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/screenshots/testimonials-1.jpg\" alt=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/screenshots/blog-bg-cards.jpg\" alt=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/screenshots/our-products.jpg\" alt=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/screenshots/projects-cards.jpg\" alt=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/screenshots/blogpost-cards.jpg\" alt=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/screenshots/blogpost-2-cards.jpg\" alt=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/screenshots/coloured-picind-card.jpg\" alt=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/screenshots/team-3.jpg\" alt=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"section section-examples section-dark\" id=\"examples\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"title text-center\">\n                \t<h2 class=\"title\">Ready to use Page Examples</h2>\n\t\t\t\t\t<h5 class=\"description\">Paper Kit 2 Pro comes with a large number of example pages, that give you the option to quickly setup the basic flows for your website. From registering to building your profile or setting a blog, we've got you covered.</h5>\n            \t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4\">\n                    <div class=\"details-text\">\n\t\t\t\t\t\tTwitter Redesign\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card card-image card-hover-effect\">\n\t\t\t\t\t\t<a target=\"_blank\" [routerLink]=\"['/examples/twitter']\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/examples/twitter.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"details-text\">\n\t\t\t\t\t\tError Page (422)\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card card-image\">\n\t\t\t\t\t\t<a target=\"_blank\" [routerLink]=\"['/examples/page422']\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/examples/422.png\">\n                        </a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"details-text\">\n\t\t\t\t\t\tDiscover Page\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card card-image\">\n\t\t\t\t\t\t<a target=\"_blank\" [routerLink]=\"['/examples/discover']\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/examples/discover.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"details-text\">\n\t\t\t\t\t\tLogin Page\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card card-image\">\n\t\t\t\t\t\t<a target=\"_blank\" [routerLink]=\"['/examples/login']\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/examples/login-page.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"details-text\">\n\t\t\t\t\t\tBlog Post\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card card-image\">\n\t\t\t\t\t\t<a target=\"_blank\" [routerLink]=\"['/examples/blogpost']\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/examples/blog-post.png\">\n                        </a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"details-text\">\n\t\t\t\t\t\tUser Settings\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card card-image\">\n\t\t\t\t\t\t<a target=\"_blank\" [routerLink]=\"['/examples/settings']\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/examples/settings.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"details-text\">\n\t\t\t\t\t\tRegister Page\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card card-image\">\n\t\t\t\t\t\t<a target=\"_blank\" [routerLink]=\"['/examples/register']\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/examples/register.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"details-text\">\n\t\t\t\t\t\tPublic Profile\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card card-image\">\n\t\t\t\t\t\t<a target=\"_blank\" [routerLink]=\"['/examples/profile']\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/examples/profile.png\">\n                        </a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"details-text\">\n\t\t\t\t\t\tProduct Page\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card card-image\">\n\t\t\t\t\t\t<a target=\"_blank\" [routerLink]=\"['/examples/productpage']\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/examples/product.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"details-text\">\n\t\t\t\t\t\tContact Us\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card card-image\">\n\t\t\t\t\t\t<a target=\"_blank\" [routerLink]=\"['/examples/contactus']\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/examples/contact-us.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"details-text\">\n\t\t\t\t\t\tSearch Page\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card card-image\">\n\t\t\t\t\t\t<a target=\"_blank\" [routerLink]=\"['/examples/search']\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/examples/search.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"details-text\">\n\t\t\t\t\t\tError Page (400)\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card card-image\">\n\t\t\t\t\t\t<a target=\"_blank\" [routerLink]=\"['/examples/page404']\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/examples/404.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"details-text\">\n\t\t\t\t\t\tAdd Product Page\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card card-image\">\n\t\t\t\t\t\t<a target=\"_blank\" [routerLink]=\"['/examples/addproduct']\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/examples/add-product.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"details-text\">\n\t\t\t\t\t\tAbout Us\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card card-image card-hover-effect\">\n\t\t\t\t\t\t<a target=\"_blank\" [routerLink]=\"['/examples/aboutus']\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/examples/about-us.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"details-text\">\n\t\t\t\t\t\tBlog Posts\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card card-image\">\n\t\t\t\t\t\t<a target=\"_blank\" [routerLink]=\"['/examples/blogposts']\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/examples/blog-posts.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"details-text\">\n\t\t\t\t\t\tError Page (500)\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card card-image\">\n\t\t\t\t\t\t<a target=\"_blank\" [routerLink]=\"['/examples/page500']\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/examples/500.png\">\n                        </a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"details-text\">\n\t\t\t\t\t\tLanding Page\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card card-image\">\n\t\t\t\t\t\t<a target=\"_blank\" [routerLink]=\"['/examples/landing']\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/examples/landing.png\" />\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"details-text\">\n\t\t\t\t\t\tEcommerce Page\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card card-image\">\n\t\t\t\t\t\t<a target=\"_blank\" [routerLink]=\"['/examples/ecommerce']\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/examples/ecommerce.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"card card-image\">\n\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/examples/more-brown.png\">\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"section section-icons\">\n\t\t<div class=\"container-fluid\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"icons-nucleo\">\n\t\t\t\t\t\t<i class=\"first-left-icon nc-icon nc-planet add-animation\" ></i>\n\t\t\t\t\t\t<i class=\"second-left-icon nc-icon nc-touch-id add-animation\"></i>\n\t\t\t\t\t\t<i class=\"third-left-icon nc-icon nc-lock-circle-open add-animation\"></i>\n\t\t\t\t\t\t<i class=\"fourth-left-icon nc-icon nc-tap-01 add-animation\"></i>\n\t\t\t\t\t\t<i class=\"fifth-left-icon nc-icon nc-zoom-split add-animation\"></i>\n\t\t\t\t\t\t<i class=\"sixth-left-icon nc-icon nc-atom add-animation\"></i>\n\t\t\t\t\t\t<i class=\"seventh-left-icon nc-icon nc-favourite-28 add-animation\"></i>\n\t\t\t\t\t\t<i class=\"eighth-left-icon nc-icon nc-settings add-animation\"></i>\n\t\t\t\t\t\t<i class=\"ninth-left-icon nc-icon nc-bulb-63 add-animation\"></i>\n\t\t\t\t\t\t<i class=\"tenth-left-icon nc-icon nc-circle-10 add-animation\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 text-center\">\n\t                <h2 class=\"title revealOnScroll\">Custom Icons</h2>\n\t                <h5 class=\"description\">\n\t                    Paper Kit 2 PRO comes with 100 custom demo icons made by our friends from <a href=\"https://nucleoapp.com/?ref=1712\" target=\"_blank\">NucleoApp</a>. The official package contains over 20.729 icons which are looking great in combination with Paper Kit 2 PRO. Make sure you check all of them and use those that you like the most.\n\t                </h5>\n\t\t\t\t\t<br/>\n\t                <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-primary btn-round btn-lg \" target=\"_blank\">View Demo Icons</a>\n\t                <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-outline-primary btn-round btn-lg \" target=\"_blank\">View All Icons</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"icons-nucleo\">\n\t\t\t\t\t\t<i class=\"first-right-icon nc-icon nc-bank add-animation\"></i>\n\t\t\t\t\t\t<i class=\"second-right-icon nc-icon nc-tag-content add-animation\"></i>\n\t\t\t\t\t\t<i class=\"third-right-icon nc-icon nc-bell-55 add-animation\"></i>\n\t\t\t\t\t\t<i class=\"fourth-right-icon nc-icon nc-tv-2 add-animation\"></i>\n\t\t\t\t\t\t<i class=\"fifth-right-icon nc-icon nc-map-big add-animation\"></i>\n\t\t\t\t\t\t<i class=\"sixth-right-icon nc-icon nc-badge add-animation\"></i>\n\t\t\t\t\t\t<i class=\"seventh-right-icon nc-icon nc-simple-add add-animation\"></i>\n\t\t\t\t\t\t<i class=\"eighth-right-icon nc-icon nc-trophy add-animation\"></i>\n\t\t\t\t\t\t<i class=\"ninth-right-icon nc-icon nc-hat-3 add-animation\"></i>\n\t\t\t\t\t\t<i class=\"tenth-right-icon nc-icon nc-key-25 add-animation\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"section section-free-demo section-dark\" style=\"display: none\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t<div class=\"icon-github\">\n\t\t\t\t\t\t<i class=\"fa fa-github\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"section-description\">\n\t\t\t\t\t\t<h3 class=\"title\">Free Demo</h3>\n\t\t\t\t\t\t<h5 class=\"description\">Do you want to test and see the benefits of this kit before purchasing it? You can give the demo version a try. It features enough basic components for you to get a feel of the design and also test the quality of the code. Get it free on GitHub!</h5>\n\t\t\t\t\t\t<div class=\"row space-top\">\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<a href=\"https://github.com/creativetimofficial/paper-kit/tree/bootstrap4-development\" target=\"_blank\" class=\"btn btn-round btn-neutral\">View Demo on Github</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<a class=\"github-button\" href=\"https://github.com/creativetimofficial/paper-kit\" data-show-count=\"true\" data-size=\"large\" aria-label=\"Star ntkme/github-buttons on GitHub\">Star</a>\n\n\t\t\t\t\t\t\t\t<a class=\"github-button\" href=\"https://github.com/creativetimofficial/paper-kit\" data-icon=\"octicon-repo-forked\" data-size=\"large\" aria-label=\"Fork ntkme/github-buttons on GitHub\">Fork</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6 offset-md-1\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<div class=\"card card-pricing\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"card-title\">Free Demo</h3>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li><b>60</b> Components*</li>\n\t\t\t\t\t\t\t\t\t\t<li><b>3</b> Example Pages</li>\n\t\t\t\t\t\t\t\t\t\t<li><b>0</b> Customised Plugins</li>\n\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-times text-danger\"></i> Customised Icons </li>\n\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-times text-danger\"></i> Beautiful Cards</li>\n\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-times text-danger\"></i> Sections</li>\n\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-times text-danger\"></i> Premium Support</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<div class=\"card card-pricing\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"card-title\">PRO Version</h3>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li> <b>1000+</b> Components*</li>\n\t\t\t\t\t\t\t\t\t\t<li> <b>15</b> Example Pages</li>\n\t\t\t\t\t\t\t\t\t\t<li> <b>8</b> Customised Plugins</li>\n\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-check text-success\"></i> Customised Icons </li>\n\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-check text-success\"></i> Beautiful Cards</li>\n\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-check text-success\"></i> Sections</li>\n\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-check text-success\"></i> Premium Support</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<p class=\"description\">*Components: buttons, social buttons, navbars, dropdowns, tabs, tables, cards, select, tags, sliders etc. and their customisation by classes.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"section section-responsive section-gold\">\n\t\t<div class=\"container-fluid\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"phone-container\">\n\t\t\t\t\t\t<img src=\"./assets/img/presentation-page/responsive.png\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4\">\n\n                   <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-danger\">\n\t\t\t\t\t\t\t<i class=\"nc-icon nc-tablet-2\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\"> Fully Responsive Layout </h4>\n                            <p> The kit is designed to be mobile first. Every components looks great on any screen size.</p>\n                        </div>\n                   </div>\n\n\t\t\t\t   <div class=\"info info-horizontal\">\n\t\t\t\t\t\t<div class=\"icon icon-danger\">\n\t\t\t\t\t\t\t<i class=\"nc-icon nc-html5\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t<h4 class=\"info-title\"> HTML5 Powered by Bootstrap 4 </h4>\n\t\t\t\t\t\t\t<p>Paper Kit 2 Pro is built on top of Bootstrap 4. Get the benefits of the most powerful framework and the perks of amazing design.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t   </div>\n\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"section section-overview\">\n\t\t<div class=\"container-fluid\">\n\t\t\t<div class=\"row\">\n\t    \t\t<div class=\"col-md-8 offset-md-2 text-center\">\n\t                <div class=\"space-top\"></div>\n\t    \t\t\t<h2 class=\"title\">Want more details?</h2>\n\t    \t\t</div>\n\t    \t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"space-top\"></div>\n\t    \t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"card\" data-background=\"color\" data-color=\"green\">\n\t\t\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"nc-icon nc-money-coins\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Save Money</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"card-description\">Creating your design from scratch with dedicated designers can be very expensive. Using a kit is the best option to start your development.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"card\" data-background=\"color\" data-color=\"blue\">\n\t\t\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"nc-icon nc-watch-time\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Save Time</h4>\n\t\t\t\t\t\t\t\t\t<p class=\"card-description\">Using the kit will save you large amount of time. You don't have to worry about customising the basic Bootstrap 4 design or its components.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t    \t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"card\" data-background=\"color\" data-color=\"purple\">\n\t\t\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t                                <div class=\"card-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"nc-icon nc-layout-11\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Bootstrap 4 Grid</h4>\n\t                                <p class=\"card-description\">Enjoy the fluid grid system based on 12 columns. Paper Kit 2 PRO is built over Bootstrap 4 and has all the benefits that the framework comes with.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t    \t\t\t\t</div>\n\n\t    \t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"card\" data-background=\"color\" data-color=\"brown\">\n\t\t\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t                                <div class=\"card-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"nc-icon nc-align-center\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Built with Flexbox</h4>\n\t                                <p class=\"card-description\">Paper Kit 2 PRO primarily uses the flexbox for the layout, grid system, cards and components. This is a huge advantage for working with columns. </p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t    \t\t\t\t</div>\n\n\t    \t\t\t</div>\n\t    \t\t</div>\n\t        </div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"section section-testimonials\">\n\t\t<div class=\"container-fluid\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-8 ml-auto mr-auto text-center\">\n\t\t\t\t\t<h2 class=\"title\">Trusted by 232,000+ People</h2>\n\t\t\t\t\t<h5 class=\"description\">The UI Kits, Templates and Dashboards that we've created are used by <b>232,000+ web developers</b> in over <b>400,000 Web Projects</b>. This is what some of them think:</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<div class=\"col-md-2 ml-auto\">\n\t\t\t\t\t<div class=\"testimonials-people\">\n\t\t\t\t\t\t<img class=\"left-first-person add-animation\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/110862/thumb.?1482812727\" alt=\"\" />\n\t\t\t\t\t\t<img class=\"left-second-person add-animation\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/139481/thumb.jpg?1485460613\" alt=\"\" />\n\t\t\t\t\t\t<img class=\"left-third-person add-animation\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/152441/thumb.jpg?1488233314\" alt=\"\" />\n\t\t\t\t\t\t<img class=\"left-fourth-person add-animation\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/134607/thumb.?1487680276\" alt=\"\" />\n\t\t\t\t\t\t<img class=\"left-fifth-person add-animation\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/161506/thumb.?1489848178\" alt=\"\" />\n\t\t\t\t\t\t<img class=\"left-sixth-person add-animation\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/77627/thumb.jpg?1487360092\" alt=\"\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6\">\n\n\t\t\t\t\t<div class=\"page-carousel\">\n                        <ngb-carousel>\n                            <ng-template ngbSlide class=\"carousel-item\">\n                                <div class=\"card card-testimonial card-plain\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-avatar\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"img\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\"I'm newer to the front-end... With my creative side lacking in experience this really put me in the right spot to speed through the fast lane. I love this Design kit so much!\"\n\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Chase Jackson</h4>\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category\">Web Developer</h6>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-stars\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n                            </ng-template>\n                            <ng-template ngbSlide class=\"carousel-item\">\n                                <div class=\"card card-testimonial card-plain\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-avatar\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"img\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/134607/thumb.?1487680276\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\"Love the shapes and color palette on this one! Perfect for one of my pet projects!\"\n\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Robin Leysen</h4>\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category\">Web Developer</h6>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-stars\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n                            </ng-template>\n                            <ng-template ngbSlide class=\"carousel-item\">\n                                <div class=\"card card-testimonial card-plain\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-avatar\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"img\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/125268/thumb.jpeg?1497799215\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\"Love it. Use it for prototypes and along with Paper Dashboard.\"\n\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Cristi Jora</h4>\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category\">Web Developer</h6>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-stars\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n                            </ng-template>\n                        </ngb-carousel>\n\t                </div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-2 mr-auto\">\n\t\t\t\t\t<div class=\"testimonials-people\">\n\t\t\t\t\t\t<img class=\"right-first-person add-animation\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg\" alt=\"\" />\n\t\t\t\t\t\t<img class=\"right-second-person add-animation\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/125268/thumb.jpeg?1497799215\" alt=\"\" />\n\t\t\t\t\t\t<img class=\"right-third-person add-animation\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/123334/thumb.JPG?1479459618\" alt=\"\" />\n\t\t\t\t\t\t<img class=\"right-fourth-person add-animation\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/118235/thumb.?1477435947\" alt=\"\" />\n\t\t\t\t\t\t<img class=\"right-fifth-person add-animation\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/18/thumb.png?1431433244\" alt=\"\" />\n\t\t\t\t\t\t<img class=\"right-sixth-person add-animation\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/167683/thumb.?1491014996\" alt=\"\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"our-clients\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row justify-content-center\">\n\t\t\t\t\t<div class=\"col-md-2 col-5\">\n\t\t\t\t\t\t<img src=\"./assets/img/demo/vodafone.jpg\" alt=\"\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2 col-5\">\n\t\t\t\t\t\t<img src=\"./assets/img/demo/microsoft.jpg\" alt=\"\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2 col-5\">\n\t\t\t\t\t\t<img src=\"./assets/img/demo/harvard.jpg\" alt=\"\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2 col-5\">\n\t\t\t\t\t\t<img src=\"./assets/img/demo/stanford.jpg\" alt=\"\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"section section-sharing section-dark\" id=\"demoPay\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"title text-center\">\n                \t<h3 class=\"title\">Ready to grab this Powerful UI Kit?</h3>\n\t\t\t\t\t<p class=\"description\">You have <b>Free Unlimited Updates</b> and <b>Premium Support</b> on each package. You also have <b>30 days</b> to request a refund if you're not happy with your purchase.</p>\n\t\t\t\t\t<br/>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-8 ml-auto mr-auto\">\n\t\t\t\t\t<div class=\"space-top\"></div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<div class=\"card card-pricing\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-icon\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-simple\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"nc-icon nc-single-02\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<h3 class=\"card-title\">$59</h3>\n\n\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\tFor personal websites, school projects, startups or any other project where your users will not be charged for using it. Create one single website/app for one client.\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"https://www.creative-tim.com/product/paper-kit-2-pro-angular\" class=\"btn btn-danger btn-round\">Buy Now</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<div class=\"card card-pricing\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-icon\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-simple\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"nc-icon nc-bank\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<h3 class=\"card-title\">$239</h3>\n\n\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\tFor business projects, multiple websites for clients or for creating themes where your users will be charged for using it. Create multiple websites/apps for multiple clients.\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"https://www.creative-tim.com/product/paper-kit-2-pro-angular\" class=\"btn btn-danger btn-round\">Buy Now</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-8 offset-md-2 text-center\">\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<span>Pay one time with:</span>\n\t\t\t\t\t<i class=\"fa fa-cc-paypal fa-pay\"></i>\n\t\t\t\t\t<i class=\"fa fa-cc-visa fa-pay\"></i>\n\t\t\t\t\t<i class=\"fa fa-cc-mastercard fa-pay\"></i>\n\t\t\t\t\t<i class=\"fa fa-cc-amex fa-pay\"></i>\n\t\t\t\t\t<br><br>\n\t\t\t</div>\n\n\t\t\t<div class=\"title text-center\">\n\t\t\t\t<h3>Thank you for sharing!</h3>\n\n\t\t\t\t<br>\n\t\t\t\t<button id=\"twitter\" class=\"btn btn-round btn-twitter\"><i class=\"fa fa-twitter\"></i> Twitter </button>\n\t\t\t\t<button id=\"facebook\" class=\"btn btn-round btn-facebook\"><i class=\"fa fa-facebook-square\"></i> Facebook</button>\n\t\t\t\t<button id=\"google\" class=\"btn btn-round btn-google\"><i class=\"fa fa-google-plus\"></i> Google</button>\n\n\t\t\t</div>\n        </div>\n\t</div>\n</div>\n<footer class=\"footer footer-black\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<nav class=\"footer-nav\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href=\"https://www.creative-tim.com\">Creative Tim</a></li>\n\t\t\t\t\t<li><a href=\"https://blog.creative-tim.com\">Blog</a></li>\n\t\t\t\t\t<li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t\t<div class=\"credits ml-auto\">\n\t\t\t\t<span class=\"copyright\">\n\t\t\t\t\t© {{date | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/presentation/presentation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/presentation/presentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PresentationComponent = /** @class */ (function () {
    function PresentationComponent(el) {
        this.el = el;
        this.model = {
            left: true,
            middle: false,
            right: false
        };
        this.date = new Date();
    }
    PresentationComponent.prototype.checkScroll = function () {
        var componentPosition = document.getElementsByClassName('add-animation');
        var scrollPosition = window.pageYOffset;
        for (var i = 0; i < componentPosition.length; i++) {
            var rec = componentPosition[i].getBoundingClientRect().top + window.scrollY + 100;
            if (scrollPosition + window.innerHeight >= rec) {
                componentPosition[i].classList.add('animated');
            }
            else if (scrollPosition + window.innerHeight * 0.8 < rec) {
                componentPosition[i].classList.remove('animated');
            }
        }
    };
    PresentationComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('presentation-page');
        body.classList.add('loading');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        // IsoGrid(document.querySelector('.isolayer--deco1'), {
        //     transform : 'translateX(33vw) translateY(-340px) rotateX(45deg) rotateZ(45deg)',
        //     stackItemsAnimation : {
        //         // properties(pos) {
        //         //     return {
        //         //         translateZ: (pos + 1) * 30,
        //         //         rotateZ: Math.floor(Math.random() * (4 - (-4) + 1)) + (-4)
        //         //     };
        //         // },
        //         options(pos, itemstotal) {
        //             return {
        //                 type: dynamics.bezier,
        //                 duration: 500,
        //                 points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
        //                 delay: (itemstotal-pos-1)*40
        //             };
        //         }
        //     }
        // });
    };
    PresentationComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('presentation-page');
        body.classList.remove('loading');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PresentationComponent.prototype, "checkScroll", null);
    PresentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-presentation',
            template: __webpack_require__("../../../../../src/app/presentation/presentation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/presentation/presentation.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/presentation/presentation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresentationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__presentation_component__ = __webpack_require__("../../../../../src/app/presentation/presentation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PresentationModule = /** @class */ (function () {
    function PresentationModule() {
    }
    PresentationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__presentation_component__["a" /* PresentationComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_6__presentation_component__["a" /* PresentationComponent */]],
            providers: []
        })
    ], PresentationModule);
    return PresentationModule;
}());



/***/ }),

/***/ "../../../../../src/app/sections/blogs/blogs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cd-section section-white\" id=\"blogs\">\n\n    <!--     *********     BLOGS 1      *********      -->\n    <!-- <div class=\"blog-1\" id=\"blog-1\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-10 ml-auto mr-auto\">\n                    <h2 class=\"title\">Latest Blogposts</h2>\n                    <br />\n                    <div class=\"card card-plain card-blog\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <img class=\"img\" src=\"assets/img/sections/stephanie-krist.jpg\" />\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body\">\n                                    <h6 class=\"card-category text-info\">Enterprise</h6>\n                                    <h3 class=\"card-title\">\n                                        <a href=\"#pablo\">The four waves of augmented reality</a>\n                                    </h3>\n                                    <p class=\"card-description\">\n                                        Sharing processing, display and sensors across smartphones and tethered smartglasses gives you two batteries, each powering fewer individual systems. If they’re connected by a cable, this could give a healthy bump to battery life — and… <a href=\"#pablo\"> Read More </a>\n                                    </p>\n                                    <p class=\"author\">\n                                        by <a href=\"#pablo\"><b>Tim Merel</b></a>, 11 hours ago\n                                    </p>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card card-plain card-blog\">\n                        <div class=\"row\">\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body\">\n                                    <h6 class=\"card-category text-danger\">\n                                        <i class=\"fa fa-free-code-camp\" aria-hidden=\"true\"></i> Trending\n                                    </h6>\n                                    <h3 class=\"card-title\">\n                                        <a href=\"#pablo\">Okoli connects you with tour guides around the world</a>\n                                    </h3>\n                                    <p class=\"card-description\">\n                                        Okoli is a new service by developer Jack Deneut that aims to replace those ugly little cards you find in tourist hotels. The web app, which currently works in Prague, Budapest, Berlin and Paris, lets you reserve a nearly private tour with a professional guid — and… <a href=\"#pablo\"> Read More </a>\n                                    </p>\n                                    <p class=\"author\">\n                                        by <a href=\"#pablo\"><b>John Biggs</b></a>, 3 seconds ago\n                                    </p>\n                                </div>\n                            </div>\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <img class=\"img\" src=\"assets/img/sections/federico-beccari.jpg\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n    <div class=\"features-4\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">你还没尝过？</h2>\n                    <h3 class=\"description\">SCARLET.X\n                        <br> 中国第一支口袋香槟\n                    </h3>\n                    <br>\n                </div>\n            </div>\n            <div class=\"row\">\n\n                <div class=\"col-md-6\">\n                    <div class=\"ipad-container\">\n                        <img src=\"assets/img/blog/product.jpg\" />\n                    </div>\n                </div>\n\n                <div class=\"col-md-4 offset-1\">\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-info\">\n                            <i class=\"nc-icon nc-atom\" aria-hidden=\"true\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">\n                                <b>SCARLET.X</b>\n                            </h4>\n                            <p>\n                                黑暗中的一束光，在舞池在迷幻的音乐与闪耀的灯光交错中，你一眼就可以认出她。\n                                <br> 那个你向往已久的她。\n                            </p>\n                        </div>\n                    </div>\n\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-danger\">\n                            <i class=\"nc-icon nc-tie-bow\" aria-hidden=\"true\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">scarlet.X春日新品——挪威的森林</h4>\n                            <p>混合植物的氧气感和新鲜草木的灵气。\n                                <br>琉璃般的透明，一如你全新的心。\n                                <br>一支，释放整个春天的花漾。\n                                <br> 只配你独有。\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"features-3\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"row\">\n                        <div class=\"container\">\n                            <h2 class=\"title\">客观，别急</h2>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div>\n                            <div class=\"info info-horizontal\">\n                                <div class=\"icon icon-warning\">\n                                        <i class=\"nc-icon nc-touch-id\"></i>\n                                </div>\n                                <div class=\"description\">\n                                    <h4 class=\"info-title\">步骤壹：扫一扫</h4>\n                                    <p>拿起你的手机扫描Scarlet.X瓶身二维码\n                                        <br> 填写你的虚拟昵称、换上诱惑的头像\n                                        <br> 没有任何真实信息\n                                        <br> 进入这个神秘的约x世界\n                                    </p>\n                                </div>\n                            </div>\n                            <div class=\"info info-horizontal\">\n                                <div class=\"icon icon-danger\">\n                                    <i class=\"nc-icon nc-layout-11\"></i>\n                                </div>\n                                <div class=\"description\">\n                                    <h4 class=\"info-title\">步骤贰：加入群P!</h4>\n                                    <p>Scarlet.X会根据你的定位显示周边的聊天室\n                                        <br> 进入你身处酒吧的聊天室\n                                        <br> 就能把酒吧内的帅哥美女都认识一遍啦\n                                        <br> 还可以创立属于你自己的聊天室\n                                        <br> 进来的都是“知音”\n                                        <br> 话不多说 直奔主题</p>\n\n                                </div>\n                            </div>\n                            <div class=\"info info-horizontal\">\n                                <div class=\"icon icon-success\">\n                                        <i class=\"nc-icon nc-layout-11\"></i>\n                                </div>\n                                <div class=\"description\">\n                                    <h4 class=\"info-title\">步骤叁：客官，请翻牌</h4>\n                                    <p>群撩发现中意的她/他？\n                                        <br> 翻牌子进入私聊模式吧！\n                                        <br> 耳朵饿了想听情话\n                                        <br> 接下来干什么就看你的本事了\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"col-md-8 ml-auto\">\n                    <div class=\"container\">\n                        <img src=\"assets/img/comments/WeChat Image_20180427211157.jpg\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********     BLOGS 2      *********      -->\n\n    <div class=\"blog-2 section section-gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-10 ml-auto mr-auto\">\n                    <h2 class=\"title\"> 线上已引爆！！ </h2>\n                    <br />\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"card card-blog\">\n                                <div class=\"card-image\">\n                                    <a href=\"https://mp.weixin.qq.com/s?__biz=MzUzOTY5MjIyNw==&mid=2247483680&idx=1&sn=09bdf80e5cde7a3b8f493da167be7c40&chksm=fac5dc8ccdb2559a5534fc35210fc761ca6232cb47ce67b190ccf18b5e208a6fd385983cef21&mpshare=1&scene=1&srcid=0424mvLVBjAyLGgAOP2evH6P#rd\">\n                                        <img class=\"img img-raised\" src=\"assets\\img\\blog\\start.jpg\" />\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <a href=\"https://mp.weixin.qq.com/s?__biz=MzUzOTY5MjIyNw==&mid=2247483680&idx=1&sn=09bdf80e5cde7a3b8f493da167be7c40&chksm=fac5dc8ccdb2559a5534fc35210fc761ca6232cb47ce67b190ccf18b5e208a6fd385983cef21&mpshare=1&scene=1&srcid=0424mvLVBjAyLGgAOP2evH6P#rd\">\n                                        <h5 class=\"card-category text-info\">\n                                            <i class=\"fa fa-free-code-camp\" aria-hidden=\"true\"></i> 春风十里，我想灌醉你 </h5>\n                                    </a>\n                                    <h5 class=\"card-title\">\n                                        <a href=\"https://mp.weixin.qq.com/s?__biz=MzUzOTY5MjIyNw==&mid=2247483680&idx=1&sn=09bdf80e5cde7a3b8f493da167be7c40&chksm=fac5dc8ccdb2559a5534fc35210fc761ca6232cb47ce67b190ccf18b5e208a6fd385983cef21&mpshare=1&scene=1&srcid=0424mvLVBjAyLGgAOP2evH6P#rd\">\n\n                                        </a>\n                                    </h5>\n                                    <p class=\"card-description\">\n                                        我要对你做\n                                        <br> 春天对樱桃树做的事\n                                    </p>\n                                    <hr>\n\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <div class=\"card card-blog\">\n                                <div class=\"card-image\">\n                                    <a href=\"https://mp.weixin.qq.com/s?__biz=MzUzOTY5MjIyNw==&mid=2247483691&idx=1&sn=3076ec5c1764fa15a1ac40c36ca0282a&chksm=fac5dc87cdb25591d526cb733e972fd0665da7ba08fd9de93372966e1dba4505956ef06d1998&mpshare=1&scene=1&srcid=0424X3GVo7l2Klf6K9tPlXwh#rd\">\n                                        <img class=\"img img-raised\" src=\"assets\\img\\product\\WeChat Image_20180427153207.jpg\" />\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <a href=\"https://mp.weixin.qq.com/s?__biz=MzUzOTY5MjIyNw==&mid=2247483680&idx=1&sn=09bdf80e5cde7a3b8f493da167be7c40&chksm=fac5dc8ccdb2559a5534fc35210fc761ca6232cb47ce67b190ccf18b5e208a6fd385983cef21&mpshare=1&scene=1&srcid=0424mvLVBjAyLGgAOP2evH6P#rd\">\n                                        <h5 class=\"card-category text-success\">\n                                            <i class=\"fa fa-free-code-camp\" aria-hidden=\"true\"></i> 如何套路撩小哥哥\n                                        </h5>\n                                    </a>\n                                    <h5 class=\"card-title\">\n                                        <a href=\"https://mp.weixin.qq.com/s?__biz=MzUzOTY5MjIyNw==&mid=2247483691&idx=1&sn=3076ec5c1764fa15a1ac40c36ca0282a&chksm=fac5dc87cdb25591d526cb733e972fd0665da7ba08fd9de93372966e1dba4505956ef06d1998&mpshare=1&scene=1&srcid=0424X3GVo7l2Klf6K9tPlXwh#rd\">\n                                        </a>\n                                    </h5>\n                                    <p class=\"card-description\">\n                                        开始的是她\n                                        <br> 放不下的却是我\n                                    </p>\n                                    <hr>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"card card-blog\">\n                                <div class=\"card-image\">\n                                    <a href=\"https://d.xiumi.us/board/v5/278xu/84877248\">\n                                        <img class=\"img img-raised\" src=\"assets\\img\\beauty\\photo-1470267826516-96fa10965c57.jpg\" />\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <a href=\"https://mp.weixin.qq.com/s?__biz=MzUzOTY5MjIyNw==&mid=2247483680&idx=1&sn=09bdf80e5cde7a3b8f493da167be7c40&chksm=fac5dc8ccdb2559a5534fc35210fc761ca6232cb47ce67b190ccf18b5e208a6fd385983cef21&mpshare=1&scene=1&srcid=0424mvLVBjAyLGgAOP2evH6P#rd\">\n                                        <h5 class=\"card-category text-warning\">\n                                            <i class=\"fa fa-free-code-camp\" aria-hidden=\"true\"></i> 为什么你进入到一半就停了？\n                                        </h5>\n                                    </a>\n                                    <h5 class=\"card-title\">\n                                        <a href=\"https://d.xiumi.us/board/v5/278xu/84877248\">\n\n                                        </a>\n                                    </h5>\n                                    <p class=\"card-description\">\n                                        你主动一点\n                                        <br/> 我们一定有故事\n                                    </p>\n                                    <hr>\n                                    <br>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <div class=\"card card-blog\">\n                                <div class=\"card-image\">\n                                    <a href=\"https://d.xiumi.us/board/v5/278xu/84685963\">\n                                        <img class=\"img img-raised\" src=\"assets\\img\\blog\\WeChat Image_20180427212148.jpg\" />\n                                    </a>\n                                </div>\n\n                                <div class=\"card-body\">\n                                    <a href=\"https://mp.weixin.qq.com/s?__biz=MzUzOTY5MjIyNw==&mid=2247483680&idx=1&sn=09bdf80e5cde7a3b8f493da167be7c40&chksm=fac5dc8ccdb2559a5534fc35210fc761ca6232cb47ce67b190ccf18b5e208a6fd385983cef21&mpshare=1&scene=1&srcid=0424mvLVBjAyLGgAOP2evH6P#rd\">\n                                        <h5 class=\"card-category text-danger\">\n                                            <i class=\"fa fa-free-code-camp\" aria-hidden=\"true\"></i> 我把我种在你身体里，然后一起躲进scarlet.X里\n                                        </h5>\n                                    </a>\n                                    <h5 class=\"card-title\">\n                                        <a href=\"https://mp.weixin.qq.com/s?__biz=MzUzOTY5MjIyNw==&mid=2247483680&idx=1&sn=09bdf80e5cde7a3b8f493da167be7c40&chksm=fac5dc8ccdb2559a5534fc35210fc761ca6232cb47ce67b190ccf18b5e208a6fd385983cef21&mpshare=1&scene=1&srcid=0424mvLVBjAyLGgAOP2evH6P#rd\">\n                                            SCARLET.X\n                                            <br> 中国第一支口袋香槟\n                                            <hr> ⚢　⚣　⚤　⚥　⚧\n                                        </a>\n                                    </h5>\n                                    <p class=\"card-description\">\n\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <!--     *********     BLOGS 3      *********      -->\n    <!-- <div class=\"blog-3\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-10 ml-auto mr-auto\">\n                    <h2 class=\"title\">Latest Blogposts 3</h2>\n                    <br />\n                    <div class=\"card card-plain card-blog\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <div class=\"card-image\">\n                                    <img class=\"img\" src=\"assets/img/sections/jeff-sheldon.jpg\" />\n                                </div>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <div class=\"card-body\">\n                                    <h6 class=\"card-category text-info\">Enterprise</h6>\n                                    <h3 class=\"card-title\">\n                                        <a href=\"#pablo\">SoundCloud says it’s going to survive, but how?</a>\n                                    </h3>\n                                    <p class=\"card-description\">\n                                        No matter what happens — funding versus acquisition versus who knows what — Ljung says SoundCloud is not going away “anytime\n                                        in the foreseeable future.” I hope that’s true, but I can’t help but feel a bit skeptical.\n                                        — and…\n                                        <a href=\"#pablo\"> Read More </a>\n                                    </p>\n                                    <p class=\"author\">\n                                        by\n                                        <a href=\"#pablo\">\n                                            <b>Megan Rose Dickey</b>\n                                        </a>, 11 days ago\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card card-plain card-blog\">\n                        <div class=\"row\">\n                            <div class=\"col-md-8\">\n                                <div class=\"card-body\">\n                                    <h6 class=\"card-category text-danger\">\n                                        <i class=\"fa fa-free-code-camp\" aria-hidden=\"true\"></i> Trending\n                                    </h6>\n                                    <h3 class=\"card-title\">\n                                        <a href=\"#pablo\">Uber acqui-hires social app studio Swipe Labs</a>\n                                    </h3>\n                                    <p class=\"card-description\">\n                                        These issues might be making it a bit harder for Uber to hire right now in the competitive Silicon Valley job market. Acqui-hiring\n                                        companies like it’s doing here with Swipe Labs lets it roll up a bunch of good talent\n                                        — and…\n                                        <a href=\"#pablo\"> Read More </a>\n                                    </p>\n                                    <p class=\"author\">\n                                        by\n                                        <a href=\"#pablo\">\n                                            <b>Josh Constine</b>\n                                        </a>, 2 days ago\n                                    </p>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"card-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"assets/img/sections/rawpixel-comm.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card card-plain card-blog\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <div class=\"card-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"assets/img/sections/jeremy-yap.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <div class=\"card-body\">\n                                    <h6 class=\"card-category text-success\">\n                                        Startups\n                                    </h6>\n                                    <h3 class=\"card-title\">\n                                        <a href=\"#pablo\">HBO and Netflix lead this year’s nominations</a>\n                                    </h3>\n                                    <p class=\"card-description\">\n                                        Streaming services once again top the list of this year’s Emmy nominations – another indicator of the shift in how today’s\n                                        consumers are watching TV. HBO, which has been available.\n                                        <a\n                                            href=\"#pablo\"> Read More </a>\n                                    </p>\n                                    <p class=\"author\">\n                                        by\n                                        <a href=\"#pablo\">\n                                            <b>Sarah Perez</b>\n                                        </a>, 14 Jul 2017\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n\n    <!--     *********     BLOGS 4      *********      -->\n    <!-- <div class=\"blog-4\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto\">\n                    <h2 class=\"title text-center\">Latest Blogposts 4</h2>\n                    <br />\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"card card-plain card-blog text-center\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets\\img\\products\\5S4A7839.JPG\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category text-warning\">Travel</h6>\n                            <h3 class=\"card-title\">\n                                <a href=\"#pablo\">Learning different cultures through travel</a>\n                            </h3>\n                            <p class=\"card-description\">\n                                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole\n                                heart. I am alone, and feel the charm of existence in this spot.\n                            </p>\n                            <br/>\n                            <a href=\"#pablo\" class=\"btn btn-warning btn-round\"> Read More</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card card-plain card-blog text-center\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets/img/sections/rodrigo-ardilha.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category text-info\">Travel</h6>\n                            <h3 class=\"card-title\">\n                                <a href=\"#pablo\">Kick-Ass ways to disappear like a Ninja!</a>\n                            </h3>\n                            <p class=\"card-description\">\n                                In the end, the judge ruled that Levandowski could be brought in and examined, but that each question asked to him would\n                                be vetted in advance and should have some basis in evidence.\n                            </p>\n                            <br/>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-round\"> Read More</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"card card-plain card-blog text-center\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets/img/sections/federico-beccari.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category text-danger\">Lifestyle</h6>\n                            <h3 class=\"card-title\">\n                                <a href=\"#pablo\">We will breathe clean air and exercise</a>\n                            </h3>\n                            <p class=\"card-description\">\n                                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye\n                                I love Rick Owens’ bed design but the back is too high for the beams and angle of the ceiling...\n                            </p>\n                            <br/>\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\"> Read More</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card card-plain card-blog text-center\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets/img/sections/pedro-lastra.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category text-success\">Best Seller</h6>\n                            <h3 class=\"card-title\">\n                                <a href=\"#pablo\">Readers Pick of The Month</a>\n                            </h3>\n                            <p class=\"card-description\">\n                                “Raising equity is very expensive” In essence, it lets new consumer businesses apply to raise funding on its platform, and\n                                gives investors a new way to find and back those tricks to finance their growing businesses.\n                            </p>\n                            <br/>\n                            <a href=\"#pablo\" class=\"btn btn-success btn-round\"> Read More</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n\n    <!--     *********     BLOGS 4      *********      -->\n    <!-- \n    <div class=\"blog-5\">\n        <div class=\"container\">\n            <h2 class=\"title text-center\">Your Latest Blogpost 5</h2>\n            <div class=\"row\">\n                <div class=\"col-md-7\">\n                    <div class=\"card\" data-background=\"image\" style=\"background-image: url('assets/img/sections/uriel-soberanes.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">\n                                <i class=\"fa fa-newspaper-o\"></i> Lifestyle</h6>\n                            <a href=\"#pablo\">\n                                <h3 class=\"card-title\">Twenty-Something Travel - Virtual Wayfarer</h3>\n                            </a>\n                            <p class=\"card-description\">\n                                As happens in most of these hearings so far, that argument led to a back-and-forth between Uber and Waymo’s lawyers over\n                                the pre-trial discovery...\n                            </p>\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <a href=\"#pablo\">\n                                        <img src=\"assets/img/faces/joe-gardner-2.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                        <span>Lynne Barrett</span>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-5\">\n                    <div class=\"card\" data-background=\"image\" style=\"background-image: url('assets/img/sections/forest-bg.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">\n                                <i class=\"fa fa-newspaper-o\"></i> Media</h6>\n                            <a href=\"#pablo\">\n                                <h3 class=\"card-title\">The aesthetic quality of a product</h3>\n                            </a>\n                            <p class=\"card-description\">\n                                It clarifies the product’s structure. Better still, it can make the product clearly express its function by making use of\n                                the user’s intuition.\n                            </p>\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <a href=\"#pablo\">\n                                        <img src=\"assets/img/faces/erik-lucatero-2.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                        <span>Eric J Barnes</span>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"card\" data-background=\"image\" style=\"background-image: url('assets/img/sections/pavel-kosov.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">\n                                <i class=\"fa fa-newspaper-o\"></i>Design</h6>\n                            <a href=\"#pablo\">\n                                <h3 class=\"card-title\">“Good Design”</h3>\n                            </a>\n                            <p class=\"card-description\">\n                                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Jay-z...\n                            </p>\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <a href=\"#pablo\">\n                                        <img src=\"assets/img/faces/kaci-baum-2.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                        <span>Patricia Beatty</span>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card\" data-background=\"image\" style=\"background-image: url('assets/img/sections/ilya-yakover.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">\n                                <i class=\"fa fa-newspaper-o\"></i> Development</h6>\n                            <a href=\"#pablo\">\n                                <h3 class=\"card-title\">In need of a good development</h3>\n                            </a>\n                            <p class=\"card-description\">\n                                Speed up your development time or get inspired with the large number of example pages. You can jump start your development\n                                with our pre-built example pages.\n                            </p>\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <a href=\"#pablo\">\n                                        <img src=\"assets/img/faces/clem-onojeghuo-3.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                        <span>Robert Brandon</span>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\" data-background=\"image\" style=\"background-image: url('assets/img/sections/vincent-versluis.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">\n                                <i class=\"fa fa-newspaper-o\"></i> Technology</h6>\n                            <a href=\"#pablo\">\n                                <h3 class=\"card-title\">A Little Adrift</h3>\n                            </a>\n                            <p class=\"card-description\">\n                                But from the perspective of founders, there’s bound to be some confusion. In an ideal world we will see a meeting of the\n                                minds\n                            </p>\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <a href=\"#pablo\">\n                                        <img src=\"assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                        <span>Ayo Michael</span>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/sections/blogs/blogs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sections/blogs/blogs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogsComponent = /** @class */ (function () {
    function BlogsComponent() {
    }
    BlogsComponent.prototype.ngOnInit = function () {
    };
    BlogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blogs',
            template: __webpack_require__("../../../../../src/app/sections/blogs/blogs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sections/blogs/blogs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogsComponent);
    return BlogsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sections/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cd-section section-white\" id=\"contact-us\">\n\n<!--     *********    CONTACT US 1     *********      -->\n    <!-- <div class=\"contactus-1 section-image\" style=\"background-image: url('assets/img/sections/soroush-karimi.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-10 ml-auto mr-auto\">\n                    <div class=\"card card-contact no-transition\">\n                        <h3 class=\"card-title text-center\">Contact Us</h3>\n                        <div class=\"row\">\n                            <div class=\"col-md-5 ml-auto\">\n                                <div class=\"card-body\">\n                                    <div class=\"info info-horizontal\">\n                                        <div class=\"icon icon-info\">\n                                            <i class=\"nc-icon nc-pin-3\" aria-hidden=\"true\"></i>\n                                        </div>\n                                        <div class=\"description\">\n                                            <h4 class=\"info-title\">Find us at the office</h4>\n                                            <p> Bld Mihail Kogalniceanu, nr. 8,<br>\n                                                7652 Bucharest,<br>\n                                                Romania\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"info info-horizontal\">\n                                        <div class=\"icon icon-danger\">\n                                            <i class=\"nc-icon nc-badge\" aria-hidden=\"true\"></i>\n                                        </div>\n                                        <div class=\"description\">\n                                            <h4 class=\"info-title\">Give us a ring</h4>\n                                            <p> Michael Jordan<br>\n                                                +40 762 321 762<br>\n                                                Mon - Fri, 8:00-22:00\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-5 mr-auto\">\n                                <form role=\"form\" id=\"contact-form\" method=\"post\">\n                                    <div class=\"card-body\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">\n                                                <div class=\"form-group label-floating\">\n                                                    <label class=\"control-label\">First name</label>\n                                                    <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"First Name\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <div class=\"form-group label-floating\">\n                                                    <label class=\"control-label\">Last name</label>\n                                                    <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Last Name\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">Email address</label>\n                                            <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\"/>\n                                        </div>\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">Your message</label>\n                                            <textarea name=\"message\" class=\"form-control\" id=\"message\" rows=\"6\" placeholder=\"Message\"></textarea>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">\n                                                <div class=\"form-check\">\n                                                    <label class=\"form-check-label\">\n                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                        I'm not a robot !\n                                                        <span class=\"form-check-sign\"></span>\n                                                    </label>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <button type=\"submit\" class=\"btn btn-primary pull-right\">Send Message</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n\n<!--     *********    CONTACT US 2     *********      -->\n<!-- \n    <div class=\"contactus-2\">\n        <div id=\"contactUsMap2\" class=\"big-map\">\n            <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [styles]=\"styles\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n            </agm-map>\n        </div>\n        \n        <div class=\"container\">\n            <div class=\"col-md-6\">\n                <div class=\"card card-contact card-raised\">\n                    <div class=\"card-header header-raised header-primary text-center\">\n                        <h4 class=\"card-title\">Contact Us</h4>\n                    </div>\n                    <form role=\"form\" id=\"contact-form\" method=\"post\">\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"info info-horizontal\">\n                                        <div class=\"icon icon-info\">\n                                            <i class=\"nc-icon nc-badge\" aria-hidden=\"true\"></i>\n                                        </div>\n                                        <div class=\"description\">\n                                            <h5 class=\"info-title\">Give us a call</h5>\n                                            <p> Michael Jordan<br>\n                                                +40 762 321 762<br>\n                                                Mon - Fri, 8:00-22:00\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"info info-horizontal\">\n                                        <div class=\"icon icon-danger\">\n                                            <i class=\"nc-icon nc-pin-3\" aria-hidden=\"true\"></i>\n                                        </div>\n                                        <div class=\"description\">\n                                            <h5 class=\"info-title\">Find us at the office</h5>\n                                            <p> Bld Mihail Kogalniceanu<br>\n                                                7652 Bucharest\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Full Name</label>\n                                        <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Full name\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Email address</label>\n                                        <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\"/>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">Your message</label>\n                                <textarea name=\"message\" class=\"form-control\" id=\"message\" rows=\"6\" placeholder=\"Message\"></textarea>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                            I'm not a robot !\n                                            <span class=\"form-check-sign\"></span>\n                                        </label>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <button type=\"submit\" class=\"btn btn-rose pull-right\">Send Message</button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n    <div class=\"page-header page-header-small\" style=\" background-image: url('./assets/img/Profile/header.jpg');\">\n    \n        <div class=\"content-center\">\n            <div class=\"container\">\n                <h1>Hey</h1>\n                <h2>我想灌醉你</h2>\n            </div>\n        </div>\n    </div>\n    \n    \n    <div class=\"wrapper\">\n        <div class=\"main\">\n            <div class=\"section\">\n                <div class=\"container\">\n                    <!-- <h3 class=\"title-uppercase\">\n                        <i class=\"fa fa-heart heart\"></i>&nbsp; ##热血青年##</h3>\n                    <br>\n                    <br>\n                    <h5>Sweetness中国的伙伴与世界各地的伙伴一样热情、真诚、体贴、博学、充满激情。他们热爱Sweetness文化，积极参与培训，将Sweetness驰名世界的优质服务带到中国。他们是Sweetness与顾客之间的桥梁，也是Sweetness品牌价值的载体和体现。正是这些伙伴以他们的热情和专业，在为顾客们提供一流的服务的同时，将Sweetness的文化和精神内涵传递给我们的顾客。</h5>\n                    <br> -->\n\n                    <h2 class=\"text-center creators\">SCARLET.X</h2>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"card card-profile card-plain\">\n                                <div class=\"card-body\">\n                                    <div class=\"card-avatar\">\n                                        <a href=\"#avatar\">\n                                            <img src=\"./assets/img/Profile/aboutus.png\" alt=\"...\">\n                                        </a>\n                                    </div>\n                                    <p class=\"card-description text-center\">\n                                        A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others.\n                                        No one can whistle a symphony. It takes orchestra to play it.\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n    \n    \n                    <div class=\"blog-4\">\n                        <div class=\"container\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8 ml-auto mr-auto\">\n    \n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"card card-plain card-blog text-center\">\n                                        <div class=\"card-image\">\n                                            <a href=\"#pablo\">\n                                                <img class=\"img img-raised\" src=\"./assets/img/Profile/aboutus2.jpg\" />\n                                            </a>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"card card-plain card-blog text-center\">\n                                        <div class=\"card-image\">\n                                            <a href=\"#pablo\">\n                                                <img class=\"img img-raised\" src=\"./assets/img/Profile/WeChat Image.jpg\" />\n                                            </a>\n                                        </div>\n                                        <div class=\"card-body\">\n                                            <h5 class=\"card-category text-info\">春风十里，我想灌醉你</h5>\n                                            <h3 class=\"card-title\">\n                                            </h3>\n                                            <p class=\"card-description\">\n                                                期待一场波涛暗涌的互撩\n                                            </p>\n                                            <br/>\n                                            <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-lg\">撩！</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <footer class=\"footer footer-black footer-big\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-4  col-sm-4 col-12 ml-auto mr-auto\">\n                    <div class=\"card-image\">\n                        <img class=\"img-rounded img-responsive\" src=\"./assets/img/Profile/icon.jpg\" alt=\"...\">\n                    </div>\n                </div>\n                <div class=\"col-md-8 col-sm-8 col-12 ml-auto mr-auto\">\n    \n    \n                    <hr />\n                    <div class=\"row\">\n                        <div class=\"col-md-4 col-sm-4 col-4\">\n                            <div class=\"links\">\n                                <ul class=\"uppercase-links stacked-links\">\n                                    <li>\n                                        <a href=\"#paper-kit\">\n                                            Home\n                                        </a>\n                                    </li>\n                                </ul>\n    \n                            </div>\n                        </div>\n                        <div class=\"col-md-4 col-sm-4 col-4\">\n                            <div class=\"links\">\n                                <ul class=\"uppercase-links stacked-links\">\n                                    <li>\n                                        <a href=\"#paper-kit\">\n                                            Contact Us\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4 col-sm-4 col-4\">\n                            <div class=\"links\">\n                                <ul class=\"uppercase-links stacked-links\">\n                                    <li>\n                                        <a href=\"#paper-kit\">\n                                            Portfolio\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"copyright\">\n                        <div class=\"pull-left\">\n                            &copy; {{data | date: 'yyyy'}} SCARLET.X\n                        </div>\n                        <div class=\"links pull-right\">\n                            <ul>\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                        Company Policy\n                                    </a>\n                                </li>\n                                |\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                        Terms\n                                    </a>\n                                </li>\n                                |\n                                <li>\n                                    <a href=\"#paper-kit\">\n                                        Privacy\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n    \n        </div>\n    </footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sections/contacts/contacts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sections/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// declare const google: any;
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
        this.zoom = 14;
        this.lat = 44.445248;
        this.lng = 26.099672;
        this.styles = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
        this.data = new Date();
    }
    // clickedMarker(label: string, index: number) {
    //     console.log(`clicked the marker: ${label || index}`)
    // }
    //
    // mapClicked($event: MouseEvent) {
    //     this.markers.push({
    //         lat: $event.coords.lat,
    //         lng: $event.coords.lng
    //     });
    // }
    //
    // markerDragEnd(m: marker, $event: MouseEvent) {
    //     console.log('dragEnd', m, $event);
    // }
    ContactsComponent.prototype.ngOnInit = function () {
        //   var myLatlng = new google.maps.LatLng(44.445248, 26.099672);
        //   var mapOptions = {
        //     // zoom: 14,
        //     center: myLatlng,
        //     styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}],
        //     scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        //   }
        //
        //   var map = new google.maps.Map(document.getElementById("contactUsMap2"), mapOptions);
        //
        //   var marker = new google.maps.Marker({
        //       position: myLatlng,
        //       title:"Creative Tim Office"
        //   });
        //
        //   // To add the marker to the map, call setMap();
        //   marker.setMap(map);
    };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__("../../../../../src/app/sections/contacts/contacts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sections/contacts/contacts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sections/features/features.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"cd-section section-white\" id=\"features\"> -->\n\n    <!--     *********     FEATURES 1      *********      -->\n    <!-- <div class=\"features-1\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Why our product is the best</h2>\n                    <h5 class=\"description\">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here.</h5>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-danger\">\n                            <i class=\"nc-icon nc-palette\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Beautiful Gallery</h4>\n                            <p class=\"description\">Spend your time generating new ideas. You don't have to think of implementing.</p>\n                            <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-danger\">\n                            <i class=\"nc-icon nc-bulb-63\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">New Ideas</h4>\n                            <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\n                            <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-danger\">\n                            <i class=\"nc-icon nc-chart-bar-32\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Statistics</h4>\n                            <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>\n                            <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-danger\">\n                            <i class=\"nc-icon nc-sun-fog-29\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Delightful design</h4>\n                            <p>Find unique and handmade delightful designs related items directly from our sellers.</p>\n                            <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n    <!--     *********     FEATURES 2      *********      -->\n    <!-- <div class=\"features-2\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Is this what you are looking for?</h2>\n                    <h5 class=\"description\">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here.</h5>\n                    <br/>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card\" data-background=\"image\" style=\"background-image: url('assets/img/sections/jan-sendereks.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Design</h6>\n                            <div class=\"card-icon\">\n                                <i class=\"nc-icon nc-world-2\"></i>\n                            </div>\n                            <p class=\"card-description\">Unlike fashionable design, it lasts many years – even in today’s throwaway society.</p>\n\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-link btn-neutral\">\n                                    <i class=\"fa fa-book\" aria-hidden=\"true\"></i> Show more\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card\" data-background=\"image\" style=\"background-image: url('assets/img/sections/anders-jilden.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">UI Kits</h6>\n                            <div class=\"card-icon\">\n                                <i class=\"nc-icon nc-single-copy-04\"></i>\n                            </div>\n                            <p class=\"card-description\">Imagine if you could go to the profile of a friend and instead of scrolling through...</p>\n\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-link btn-neutral\">\n                                    <i class=\"fa fa-book\" aria-hidden=\"true\"></i> Show more\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card\" data-background=\"image\" style=\"background-image: url('assets/img/sections/uriel-soberanes.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Development</h6>\n                            <div class=\"card-icon\">\n                                <i class=\"nc-icon nc-time-alarm\"></i>\n                            </div>\n                            <p class=\"card-description\"> For starters, it seemed like a good idea to keep a running list of Vision investments.</p>\n\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-link btn-neutral\">\n                                    <i class=\"fa fa-book\" aria-hidden=\"true\"></i> Show more\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n    <!--     *********     FEATURES 3      *********      -->\n    <!-- <div class=\"features-3\">\n        <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"row\">\n                            <div class=\"container\">\n                                <h2 class=\"title\">Your life will be much easier</h2>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"info info-horizontal\">\n                                    <div class=\"icon icon-success\">\n                                        <i class=\"nc-icon nc-layout-11\"></i>\n                                    </div>\n                                    <div class=\"description\">\n                                        <h4 class=\"info-title\">Components</h4>\n                                        <p>The kit comes with a huge number of components designed to look perfect together.</p>\n                                        <a href=\"#paper-kit\" class=\"btn btn-link\">See more</a>\n                                    </div>\n                                </div>\n                                <div class=\"info info-horizontal\">\n                                    <div class=\"icon icon-warning\">\n                                        <i class=\"nc-icon nc-palette\"></i>\n                                    </div>\n                                    <div class=\"description\">\n                                        <h4 class=\"info-title\">Beautiful Gallery</h4>\n                                        <p>Spend your time generating new ideas. You don't have to think of implementing anymore.</p>\n                                        <a href=\"#paper-kit\" class=\"btn btn-link\">See more</a>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"info info-horizontal\">\n                                    <div class=\"icon icon-danger\">\n                                        <i class=\"nc-icon nc-touch-id\"></i>\n                                    </div>\n                                    <div class=\"description\">\n                                        <h4 class=\"info-title\">Secured</h4>\n                                        <p>Larger, yet dramatically thinner. More powerful, but remarkably power is efficient.</p>\n                                        <a href=\"#paper-kit\" class=\"btn btn-link\">See more</a>\n                                    </div>\n                                </div>\n                                <div class=\"info info-horizontal\">\n                                    <div class=\"icon icon-primary\">\n                                        <i class=\"nc-icon nc-delivery-fast\"></i>\n                                    </div>\n                                    <div class=\"description\">\n                                        <h4 class=\"info-title\">Fast Prototyping</h4>\n                                        <p>Medium has a new head of product, while the startup behind the defunct texting app...</p>\n                                        <a href=\"#paper-kit\" class=\"btn btn-link\">See more</a>\n                                    </div>\n                                </div>\n                            </div> \n                        </div>\n                    </div>\n                    <div class=\"col-md-5 ml-auto\">\n                        <div class=\"iphone-container\">\n                            <img src=\"assets/img/sections/iphone.png\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div> -->\n\n\n    <!--     *********     FEATURES 4     *********      -->\n    <!-- <div class=\"features-4\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Is this what you are looking for?</h2>\n                    <h5 class=\"description\">The more formalized version launching today brings a slate of corporate partners and a more structured\n                        application review process.</h5>\n                </div>\n            </div>\n            <div class=\"row\">\n\n                <div class=\"col-md-6\">\n                    <div class=\"ipad-container\">\n                        <img src=\"assets/img/sections/ipad.png\" />\n                    </div>\n                </div>\n\n                <div class=\"col-md-4 offset-1\">\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-info\">\n                            <i class=\"nc-icon nc-atom\" aria-hidden=\"true\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">For Developers</h4>\n                            <p>The moment you use Paper Kit, you know you’ve never felt anything like it. With a single use,\n                                is's a powerfull UI Kit</p>\n                        </div>\n                    </div>\n\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-success\">\n                            <i class=\"nc-icon nc-ruler-pencil\" aria-hidden=\"true\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">For Designers Only</h4>\n                            <p>The moment you use Paper Kit, you know you’ve never felt anything like it. With a single use,\n                                this powerfull UI Kit lets you do more than ever before.</p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-danger\">\n                            <i class=\"nc-icon nc-tie-bow\" aria-hidden=\"true\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Beautiful Examples</h4>\n                            <p>Speed up your development time or get inspired with the large number of example pages.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n\n    <!--     *********     FEATURES 5      *********      -->\n\n    <!-- <div class=\"features-5 section-image\" style=\"background-image: url('assets/img/sections/the-how-photographer.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"ml-auto mr-auto\">\n                    <h2 class=\"title text-center\">Your life will be much easier</h2>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-5 ml-auto\">\n                    <div class=\"info\">\n                        <div class=\"icon\">\n                            <i class=\"nc-icon nc-atom\" aria-hidden=\"true\"></i>\n                        </div>\n                        <h4 class=\"title\">For Developers</h4>\n                        <p>While everyone technically has the feature now, that doesn’t mean you’ll see it all the time. But\n                            in this case, the feature wasn’t just randomly A/B tested.</p>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-5 mr-auto\">\n                    <div class=\"info\">\n                        <div class=\"icon\">\n                            <i class=\"nc-icon nc-ruler-pencil\" aria-hidden=\"true\"></i>\n                        </div>\n                        <h4 class=\"title\">For Designers</h4>\n                        <p>Loveflutter has actually been around for a while, pivoting from matches based on shared interests\n                            (innovative!) to now focus on analyzing.</p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row bottom-line\">\n                <div class=\"col-sm-5 ml-auto\">\n                    <div class=\"info\">\n                        <div class=\"icon\">\n                            <i class=\"nc-icon nc-paper\" aria-hidden=\"true\"></i>\n                        </div>\n                        <h4 class=\"title\">Example Pages Included</h4>\n                        <p>As for the user backlash, it comes to the challenges faces in building features to aid newcomers,\n                            which can impact its growth and bottom line.</p>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-5 mr-auto\">\n                    <div class=\"info\">\n                        <div class=\"icon\">\n                            <i class=\"nc-icon nc-time-alarm\" aria-hidden=\"true\"></i>\n                        </div>\n                        <h4 class=\"title\">Save Time</h4>\n                        <p>The feature itself had been developed via experimental account, where it had tested how to better\n                            personalize its service to end users.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n<!-- </div> -->"

/***/ }),

/***/ "../../../../../src/app/sections/features/features.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sections/features/features.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-features',
            template: __webpack_require__("../../../../../src/app/sections/features/features.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sections/features/features.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sections/headers/headers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cd-section\" id=\"headers\">\n\n    <!--     *********     HEADER 1      *********      -->\n    <!-- <div class=\"header-1\">\n        <div class=\"page-header\" style=\"background-image: url('https://images.unsplash.com/photo-1486310662856-32058c639c65?dpr=2&auto=format&fit=crop&w=1500&h=1125&q=80&cs=tinysrgb&crop=');\">\n            <div class=\"filter\"></div>\n            <div class=\"content-center\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-5\">\n                            <div class=\"iframe-container\">\n                                <iframe src=\"https://www.youtube.com/embed/RcmrbNRK-jY?modestbranding=1&autohide=1&showinfo=0\" frameborder=\"0\" allowfullscreen height=\"250\"></iframe>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6  ml-auto\">\n                            <h2 class=\"title\">Travel with us</h2>\n                            <h5 class=\"description\">There's no doubt that Tesla is delighted with the interest, but the data also raises a few questions. How long will it take for Tesla to fulfill all those extra orders?</h5>\n                            <br />\n                            <a href=\"https://www.youtube.com/watch?v=RcmrbNRK-jY\" target=\"_blank\" class=\"btn btn-danger\">\n                                <i class=\"nc-icon nc-cart-simple\"></i> Order Now\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n    <!--     *********     HEADER 2      *********      -->\n    <!-- <div class=\"header-2\">\n        <nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute\">\n            <div class=\"container\">\n                <a class=\"navbar-brand mb-0\" href=\"www.creative-tim.com\">Creative Tim</a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-bar\"></span>\n                    <span class=\"navbar-toggler-bar\"></span>\n                    <span class=\"navbar-toggler-bar\"></span>\n                </button>\n\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                    <ul class=\"navbar-nav ml-auto\">\n                        <a href=\"#paper-kit\" class=\"btn btn-link btn-neutral\">Components</a>\n                        <a href=\"#paper-kit\" class=\"btn btn-link btn-neutral\">Tutorial</a>\n                        <a href=\"#paper-kit\" target=\"_blank\" class=\"btn btn-link btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#paper-kit\" target=\"_blank\" class=\"btn btn-link btn-neutral\"><i class=\"fa fa-facebook\"></i></a>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n        <div class=\"page-header\" style=\"background-image: url('https://images.unsplash.com/photo-1498475932703-000eb46e6375?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=');\">\n            <div class=\"filter\"></div>\n            <div class=\"content-center\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                            <h1 class=\"title\"> Find your next trip</h1>\n                            <h5 class=\"description\">Now you have no excuses, it's time to surprise your clients, your competitors, and why not, the world. You probably won't have a better chance to show off all your potential if it's not by designing a website for your own agency or web studio.</h5>\n                            <br />\n                        </div>\n                        <div class=\"col-md-10 ml-auto mr-auto\">\n                            <div class=\"card card-raised card-form-horizontal no-transition\">\n                                <div class=\"card-body\">\n                                    <form method=\"\" action=\"\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-3\">\n                                                <div class=\"form-group\">\n                                                    <input type=\"text\" value=\"\" placeholder=\"City\" class=\"form-control\" />\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-3\">\n                                                <div class=\"form-group\">\n                                                    <input type=\"text\" value=\"\" placeholder=\"Country\" class=\"form-control\" />\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-3\">\n                                                <div class=\"form-group\">\n                                                    <input type=\"text\" value=\"\" placeholder=\"Date\" class=\"form-control\" />\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-3\">\n                                                <button type=\"button\" class=\"btn btn-danger btn-block\"><i class=\"nc-icon nc-zoom-split\"></i> &nbsp; Search</button>\n                                            </div>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n    <!--     *********     HEADER 3      *********      -->\n\n    <div class=\"header-3\">\n        <div class=\"page-carousel\">\n            <div class=\"filter\"></div>\n            <ngb-carousel>\n                    <ng-template ngbSlide>\n                            <div class=\"page-header\" style=\"background-position: center;  background-repeat: no-repeat; background-image: url('assets/img/blog/WeChat Image_20180427212119.jpg')\">\n                                <div class=\"filter\"></div>\n                                <div class=\"content-center\">\n                                    <div class=\"container\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                                                    <h1 class=\"title\">\n                                                            <b>SCARLET.X</b>     </h1>\n                                                            <br>\n                                                            <br>\n                                                          <h3><b> 一款自带社交功能的酒</b></h3>  \n                                                   <h4></h4>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n\n          \n                <ng-template ngbSlide>\n                    <div class=\"page-header\" style=\"background-position: center; background-repeat: no-repeat; background-image: url('assets/img/comments/WeChat Image_20180427211246.jpg')\">\n                        <div class=\"filter\"></div>\n                        <div class=\"content-center\">\n                            <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                                        <h1 class=\"title\">“睡觉和你”</h1>\n                                        <h3>简称，睡你</h3>\n\n                                        <h4>\"你像我被子里的舒服\"</h4>\n                                        <br />\n                                        <!-- <div class=\"buttons\">\n                                            <a href=\"#pablo\" class=\"btn btn-neutral btn-link btn-just-icon\">\n                                                <i class=\"fa fa-twitter\"></i>\n                                            </a>\n                                            <a href=\"#pablo\" class=\"btn btn-neutral btn-link btn-just-icon\">\n                                                <i class=\"fa fa-facebook-square\"></i>\n                                            </a>\n                                            <a href=\"#pablo\" class=\"btn btn-neutral btn-link btn-just-icon\">\n                                                <i class=\"fa fa-instagram\"></i>\n                                            </a>\n                                            <a href=\"#pablo\" class=\"btn btn-neutral btn-link btn-just-icon\">\n                                                <i class=\"fa fa-google-plus\"></i>\n                                            </a>\n                                        </div> -->\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ng-template>\n\n                <h2 class=\"title\">把她插进口袋里</h2>\n                <h5>\n                    <br>\n                    认识那个同样喝scarlet.X的Ta\n                    <br>\n                    在这个冷漠的世界，来让我们温暖彼此\n                </h5>\n\n                <ng-template ngbSlide>\n                        <div class=\"page-header\" style=\"background-position: center; background-repeat: no-repeat; background-image: url('assets/img/Profile/people.jpg')\">\n                            <div class=\"filter\"></div>\n                            <div class=\"content-center\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                                            <h1 class=\"title\">把她插进口袋里</h1>\n                                            <br>\n                                           <h3> 认识那个同样喝scarlet.X的Ta\n                                            <br>\n                                            在这个冷漠的世界，来让我们温暖彼此\n                                        </h3>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n            </ngb-carousel>\n        </div>\n    </div>\n\n    <!--     *********     HEADER 4 (w/ video)      *********      -->\n\n    <!-- <div class=\"header-4\">\n        <div class=\"header-wrapper\">\n            <nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand mb-0\" href=\"www.creative-tim.com\">Creative Tim</a>\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n\n                    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <a href=\"#paper-kit\" class=\"btn btn-link btn-neutral\">Components</a>\n                            <a href=\"#paper-kit\" class=\"btn btn-link btn-neutral\">Tutorial</a>\n                            <a href=\"#paper-kit\" target=\"_blank\" class=\"btn btn-link btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#paper-kit\" target=\"_blank\" class=\"btn btn-link btn-neutral\"><i class=\"fa fa-facebook\"></i></a>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <div class=\"page-header header-video\">\n                <div class=\"filter filter-danger\"></div>\n         \n                <div class=\"video-image visible-xs visible-sm\" style=\"background-image: url('assets/img/video-placeholder.png')\"></div>\n\n                <video id=\"video-source\" preload=\"auto\" loop=\"loop\" muted=\"muted\" volume=\"0\">\n                    <source src=\"assets/video/fireworks.mp4\" type=\"video/mp4\">\n                        Video not supported\n                </video>\n                <div class=\"content-center\">\n                    <div class=\"container upper-container text-center\">\n                        <div class=\"video-text\">\n                            <h2>Make it</h2>\n                            <h1 class=\"title-uppercase title-no-upper-margin\">Stand out</h1>\n                        </div>\n                        <br />\n               \n                        <button type=\"button\" class=\"btn btn-lg btn-neutral\" (click)=\"playBackgroundVideo($event)\">\n                            <i class=\"fa {{icon_video_button_class}}\"></i> {{text_video_button}}\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/sections/headers/headers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sections/headers/headers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadersComponent = /** @class */ (function () {
    function HeadersComponent() {
        this.icon_video_button_class = 'fa-play';
        this.text_video_button = 'Play Video';
    }
    HeadersComponent.prototype.ngOnInit = function () {
        //   $('[data-toggle="video"]').click(function(){
        //       id_video = $(this).data('video');
        //       video = $('#' + id_video).get(0);
        //
        //       parent = $(this).parent('div').parent('div');
        //
        //       if(video.paused){
        //           video.play();
        //           $(this).html('<i class="fa fa-pause"></i> Pause Video');
        //           parent.addClass('state-play');
        //       } else {
        //           video.pause();
        //           $(this).html('<i class="fa fa-play"></i> Play Video');
        //           parent.removeClass('state-play');
        //       }
        //   });
    };
    HeadersComponent.prototype.playBackgroundVideo = function (event) {
        var id_video = document.getElementById('video-source');
        var parent = event.target.parentElement.parentElement;
        if (id_video.paused) {
            id_video.play();
            this.text_video_button = 'Pause Video';
            this.icon_video_button_class = 'fa-pause';
        }
        else {
            id_video.pause();
            this.text_video_button = 'Play Video';
            this.icon_video_button_class = 'fa-play';
        }
    };
    HeadersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-headers',
            template: __webpack_require__("../../../../../src/app/sections/headers/headers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sections/headers/headers.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeadersComponent);
    return HeadersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sections/pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cd-section section-white\" id=\"pricing\">\n\n<!--     *********    PRICING 1     *********      -->\n    <!-- <div class=\"pricing-1 section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Pick the best plan for you</h2>\n                    <h5 class=\"description\">You have Free Unlimited Updates and Premium Support on each package.</h5>\n                </div>\n            </div>\n            <div class=\"space-top\"></div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing\" data-color=\"orange\">\n                        <div class=\"card-body\">\n                            <div class=\"card-icon\">\n                                <span class=\"icon-simple\"><i class=\"nc-icon nc-basket\"></i></span>\n                            </div>\n                            <h3 class=\"card-title\">$199</h3>\n\n                            <p class=\"card-description\">\n                                This is good if your company size is between 5 and 20 employees.\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-round\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing\" data-color=\"yellow\">\n                        <div class=\"card-body\">\n                            <div class=\"card-icon\">\n                                <span class=\"icon-simple\"><i class=\"nc-icon nc-watch-time\"></i></span>\n                            </div>\n                            <h3 class=\"card-title\">$249</h3>\n\n                            <p class=\"card-description\">\n                                This is good if your company size is between 21 and 59 employees.\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-round\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing\" data-color=\"green\">\n                        <div class=\"card-body\">\n                            <div class=\"card-icon\">\n                                <span class=\"icon-simple\"><i class=\"nc-icon nc-settings\"></i></span>\n                            </div>\n                            <h3 class=\"card-title\">$359</h3>\n\n                            <p class=\"card-description\">\n                                This is good if your company size is between 60 and 159 employees.\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-round\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing\" data-color=\"blue\">\n                        <div class=\"card-body\">\n                            <div class=\"card-icon\">\n                                <span class=\"icon-simple\"><i class=\"nc-icon nc-istanbul\"></i></span>\n                            </div>\n                            <h3 class=\"card-title\">$599</h3>\n\n                            <p class=\"card-description\">\n                                This is good if your company size is between 160 and 299 employees.\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-round\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n\n<!--     *********    PRICING 2     *********      -->\n    <!-- <div class=\"pricing-2\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Pick the best plan for you</h2>\n                    <h5 class=\"description\">You have Free Unlimited Updates and Premium Support on each package.</h5>\n                    <br>\n                    <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-danger justify-content-center\">\n                        <ngb-tab title=\"Monthly\">\n                            <ng-template ngbTabContent>\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"Yearly\">\n                            <ng-template ngbTabContent>\n                            </ng-template>\n                        </ngb-tab>\n                    </ngb-tabset>\n                </div>\n            </div>\n            <div class=\"space-top\"></div>\n\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-pricing\" data-background=\"image\" style=\"background-image: url('assets/img/sections/daniel-olahh.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Free</h6>\n                            <h1 class=\"card-title\"><small>$</small>0<small>/mo</small></h1>\n                            <ul>\n                                <li><b>5</b> Sharing Tools</li>\n                                <li><b>10</b> Design Tools</li>\n                                <li><b>100</b> Private Messages</li>\n                                <li><b>2</b> Personal Brand</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-warning btn-round \">\n                                Get Started\n                            </a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-pricing\" data-background=\"image\" style=\"background-image: url('assets/img/sections/forest-bg.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Premium</h6>\n                            <h1 class=\"card-title\"><small>$</small>89<small>/mo</small></h1>\n                            <ul>\n                                <li><b>100</b> Projects</li>\n                                <li><b>5</b> Team Members</li>\n                                <li><b>55</b> Personal Contacts</li>\n                                <li><b>5.000</b> Messages</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-success btn-round\">\n                                Get Started\n                            </a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-pricing\" data-background=\"image\" style=\"background-image: url('assets/img/sections/anders-jilden.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Platinum</h6>\n                            <h1 class=\"card-title\"><small>$</small>199<small>/mo</small></h1>\n                            <ul>\n                                <li><b>1</b> Project</li>\n                                <li><b>5</b> Team Members</li>\n                                <li><b>55</b> Personal Contacts</li>\n                                <li><b>5.000</b> Messages</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round \">Get Started</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n\n<!--     *********    PRICING 3     *********      -->\n    <!-- <div class=\"pricing-3 section-image\" style=\"background-image: url('assets/img/sections/daniel-olahs.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Pick the best plan for you</h2>\n                    <h5 class=\"description\">You have Free Unlimited Updates and Premium Support on each package.</h5>\n                </div>\n            </div>\n            <div class=\"space-top\"></div>\n            <div class=\"row\">\n                <div class=\"col-md-3 ml-auto mr-auto\">\n                    <div class=\"card card-pricing\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Single User</h6>\n                            <div class=\"card-icon\">\n                                <i class=\"nc-icon nc-user-run\"></i>\n                            </div>\n                            <h3 class=\"card-title\">$29</h3>\n                            <p class=\"card-description\">\n                                Here’s a sentence I never expected: we are making...\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-info btn-round card-link\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4 mr-auto\">\n                    <div class=\"card card-pricing\" data-background=\"color\" data-color=\"blue\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Small company</h6>\n                            <div class=\"card-icon\">\n                                <i class=\"nc-icon nc-air-baloon\"></i>\n                            </div>\n                            <h3 class=\"card-title\">$59</h3>\n                            <p class=\"card-description\">\n\n                                Sometimes combining two companies that compete in the same market provides...\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-round card-link\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3 mr-auto\">\n                    <div class=\"card card-pricing\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Large Company</h6>\n                            <div class=\"card-icon\">\n                                <i class=\"nc-icon nc-istanbul\"></i>\n                            </div>\n                            <h3 class=\"card-title\">$199</h3>\n                            <p class=\"card-description\">\n                                This is good if you are a freelancer of photographer.\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-info btn-round card-link\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n\n<!--     *********    PRICING 4     *********      -->\n    <!-- <div class=\"pricing-4 section section-dark\">\n\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Pick the best plan for you</h2>\n                    <h5 class=\"description\">You have Free Unlimited Updates and Premium Support on each package.</h5>\n                </div>\n            </div>\n            <div class=\"space-top\"></div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category text-success\">Startup</h6>\n                            <h1 class=\"card-title\">$0</h1>\n                            <ul  class=\"text-white\">\n                                <li><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Sharing Tools</li>\n                                <li><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Design Tools</li>\n                                <li><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Private Messages</li>\n                                <li><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Personal Brand</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-outline-neutral btn-round\">Downgrade plan</a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category text-success\">Small company</h6>\n                            <h1 class=\"card-title\">$89</h1>\n                            <ul>\n                                <li><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Sharing Tools</li>\n                                <li><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Design Tools</li>\n                                <li><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Private Messages</li>\n                                <li><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Personal Brand</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-outline-success btn-round\">Current plan</a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category text-success\">Large Company</h6>\n                            <h1 class=\"card-title\">$189</h1>\n                            <ul  class=\"text-white\">\n                                <li><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Sharing Tools</li>\n                                <li><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Design Tools</li>\n                                <li><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Private Messages</li>\n                                <li><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Personal Brand</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-outline-neutral btn-round\">Upgrade plan</a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category text-success\">Enterprise</h6>\n                            <h1 class=\"card-title\">$389</h1>\n                            <ul  class=\"text-white\">\n                                <li><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Sharing Tools</li>\n                                <li><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Design Tools</li>\n                                <li><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Private Messages</li>\n                                <li><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Personal Brand</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-outline-neutral btn-round\">Upgrade plan</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n\n<!--     *********    PRICING 5     *********      -->\n\n    <!-- <div class=\"pricing-5 section-gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <h2 class=\"title text-center\">Choose a plan for your next project</h2>\n\n                    <br/>\n                    <p class=\"description text-gray\">You have Free Unlimited Updates and Premium Support on each package. You also have 20 days to request a refund if you're not happy with your purchase.</p>\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"choose-plan\"> -->\n                        <!-- <div class=\"nav-tabs-navigation\">\n                            <div class=\"nav-tabs-wrapper\"> -->\n                                <!-- <ngb-tabset type=\"pills\" [justify]=\"'center'\" class=\"nav-pills-danger justify-content-center\">\n                                    <ngb-tab title=\"Personal\">\n                                        <ng-template ngbTabContent>\n                                            <div class=\"space-top\"></div>\n                                            <div class=\"row\">\n                                                <div class=\"col-md-6\">\n                                                    <div class=\"card card-pricing\">\n                                                        <div class=\"card-body\">\n                                                            <h6 class=\"card-category text-primary\">HTML Package</h6>\n                                                            <h1 class=\"card-title\">$0</h1>\n                                                            <ul>\n                                                                <li><b>1</b> Developer</li>\n                                                                <li><b>99+</b> Components</li>\n                                                                <li><b>HTML</b> Elements</li>\n                                                                <li><b>14</b> Page Examples</li>\n                                                            </ul>\n                                                            <a href=\"#pablo\" class=\"btn btn-primary btn-round\">Free download</a>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-md-6\">\n                                                    <div class=\"card card-pricing\" data-color=\"orange\">\n                                                        <div class=\"card-body\">\n                                                            <h6 class=\"card-category text-success\">HTML Package</h6>\n                                                            <h1 class=\"card-title\">$59</h1>\n                                                            <ul>\n                                                                <li><b>5</b> Developer</li>\n                                                                <li><b>129+</b> Components</li>\n                                                                <li><b>HTML</b> Elements</li>\n                                                                <li><b>24</b> Page Examples</li>\n                                                            </ul>\n                                                            <a href=\"#pablo\" class=\"btn btn-neutral btn-round\">Free download</a>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Commercial\">\n                                        <ng-template ngbTabContent>\n                                            <div class=\"space-top\"></div>\n                                            <div class=\"row\">\n                                                <div class=\"col-md-6\">\n                                                    <div class=\"card card-pricing\">\n                                                        <div class=\"card-body\">\n                                                            <h6 class=\"card-category text-warning\">HTML Package</h6>\n                                                            <h1 class=\"card-title\">$159</h1>\n                                                            <ul>\n                                                                <li><b>5+</b> Developers</li>\n                                                                <li><b>199+</b> Components</li>\n                                                                <li><b>HTML</b> Elements</li>\n                                                                <li><b>34</b> Page Examples</li>\n                                                            </ul>\n                                                            <a href=\"#pablo\" class=\"btn btn-warning btn-round\">Buy Now !</a>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"col-md-6\">\n                                                    <div class=\"card card-pricing\" data-color=\"orange\">\n                                                        <div class=\"card-body\">\n                                                            <h6 class=\"card-category text-success\">HTML Package</h6>\n                                                            <h1 class=\"card-title\">$359</h1>\n                                                            <ul>\n                                                                <li><b>15</b> Developer</li>\n                                                                <li><b>229+</b> Components</li>\n                                                                <li><b>HTML</b> Elements</li>\n                                                                <li><b>44</b> Page Examples</li>\n                                                            </ul>\n                                                            <a href=\"#pablo\" class=\"btn btn-neutral btn-round\">Free download</a>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </ng-template>\n                                    </ngb-tab>\n                                </ngb-tabset>\n                            </div>\n                        </div>\n                    </div>\n                </div> -->\n\n                <!-- <div class=\"col-md-7 ml-auto\">\n                    <div class=\"tab-content text-center\" >\n                        <div class=\"tab-pane active\" id=\"personal\" role=\"tabpanel\">\n                            <div class=\"space-top\"></div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"card card-pricing\">\n                                        <div class=\"card-body\">\n                                            <h6 class=\"card-category text-primary\">HTML Package</h6>\n                                            <h1 class=\"card-title\">$0</h1>\n                                            <ul>\n                                                <li><b>1</b> Developer</li>\n                                                <li><b>99+</b> Components</li>\n                                                <li><b>HTML</b> Elements</li>\n                                                <li><b>14</b> Page Examples</li>\n                                            </ul>\n                                            <a href=\"#pablo\" class=\"btn btn-primary btn-round\">Free download</a>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"card card-pricing\" data-color=\"orange\">\n                                        <div class=\"card-body\">\n                                            <h6 class=\"card-category text-success\">HTML Package</h6>\n                                            <h1 class=\"card-title\">$59</h1>\n                                            <ul>\n                                                <li><b>5</b> Developer</li>\n                                                <li><b>129+</b> Components</li>\n                                                <li><b>HTML</b> Elements</li>\n                                                <li><b>24</b> Page Examples</li>\n                                            </ul>\n                                            <a href=\"#pablo\" class=\"btn btn-neutral btn-round\">Free download</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"tab-pane\" id=\"commercial\" role=\"tabpanel\">\n                            <div class=\"space-top\"></div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"card card-pricing\">\n                                        <div class=\"card-body\">\n                                            <h6 class=\"card-category text-warning\">HTML Package</h6>\n                                            <h1 class=\"card-title\">$159</h1>\n                                            <ul>\n                                                <li><b>5+</b> Developers</li>\n                                                <li><b>199+</b> Components</li>\n                                                <li><b>HTML</b> Elements</li>\n                                                <li><b>34</b> Page Examples</li>\n                                            </ul>\n                                            <a href=\"#pablo\" class=\"btn btn-warning btn-round\">Buy Now !</a>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <div class=\"card card-pricing\" data-color=\"orange\">\n                                        <div class=\"card-body\">\n                                            <h6 class=\"card-category text-success\">HTML Package</h6>\n                                            <h1 class=\"card-title\">$359</h1>\n                                            <ul>\n                                                <li><b>15</b> Developer</li>\n                                                <li><b>229+</b> Components</li>\n                                                <li><b>HTML</b> Elements</li>\n                                                <li><b>44</b> Page Examples</li>\n                                            </ul>\n                                            <a href=\"#pablo\" class=\"btn btn-neutral btn-round\">Free download</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div> -->\n            <!-- </div>\n        </div> -->\n    <!-- </div> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sections/pricing/pricing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sections/pricing/pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__("../../../../../src/app/sections/pricing/pricing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sections/pricing/pricing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sections/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cd-section section-white\" id=\"projects\">\n\n    <!--     *********    PROJECTS 1     *********      -->\n    <div class=\"blog-4\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto\">\n                    <h2 class=\"title text-center\">\n                      <br> <b>“我的味道像不像加了冰的龙舌兰？”</b> </h2>\n                    <br />\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"card card-plain card-blog text-center\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets\\img\\blog\\WeChat Image_20180427211439.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category text-warning\">SIMPLE</h6>\n                            <h3 class=\"card-title\">\n                            </h3>\n                            <p class=\"card-description\">\n                                有好感不等于喜欢\n                                <br> 喜欢不等于只喜欢你\n                            </p>\n                            <br/>\n                            <a href=\"#pablo\" class=\"btn btn-warning btn-round\"> Read More</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card card-plain card-blog text-center\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets\\img\\blog\\WeChat Image_20180427212600.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category text-info\">TRAVEL</h6>\n                            <h3 class=\"card-title\">\n                            </h3>\n                            <p class=\"card-description\">\n                                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole\n                                heart. I am alone, and feel the charm of existence in this spot.\n                            </p>\n                            <br/>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-round\"> Read More</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"card card-plain card-blog text-center\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets\\img\\comments\\WeChat Image_20180427211131.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category text-danger\">Lifestyle</h6>\n                            <h3 class=\"card-title\">\n                            </h3>\n                            <p class=\"card-description\">\n                                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye\n                            </p>\n                            <br/>\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">Read More</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card card-plain card-blog text-center\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets\\img\\Profile\\4.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category text-success\">Best Seller</h6>\n                            <h3 class=\"card-title\">\n                            </h3>\n                            <p class=\"card-description\">\n                                陌生人不在乎你的过去\n                                <br> 只想陪你享受现在\n                            </p>\n                            <br/>\n                            <a href=\"#pablo\" class=\"btn btn-success btn-round\"> Read More</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- <div class=\"projects-1\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Some of Our Awesome Products - 1</h2>\n                    <h5 class=\"description\"> This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information.</h5>\n                </div>\n                <div class=\"project-pills\">\n                    <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-danger justify-content-center\">\n                        <ngb-tab title=\"All categories\">\n                            <ng-template ngbTabContent>\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"Marketing\">\n                            <ng-template ngbTabContent>\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"Development\">\n                            <ng-template ngbTabContent>\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"Productivity\">\n                            <ng-template ngbTabContent>\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"Web Design\">\n                            <ng-template ngbTabContent>\n                            </ng-template>\n                        </ngb-tab>\n                    </ngb-tabset>\n                </div>\n            </div>\n            <div class=\"space-top\"></div>\n            <div class=\"row\">\n                <div class=\"col-md-5\">\n                    <div class=\"card\" data-background=\"image\" style=\"background-image: url('assets\\img\\products\\WeChat Image_20180424081210.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Productivy Apps</h6>\n                            <a href=\"#pablo\">\n                                <h3 class=\"card-title\">The Best Productivity Apps</h3>\n                            </a>\n                            <p class=\"card-description\">\n                                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n                            </p>\n                            <br/>\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">\n                                <i class=\"fa fa-book\" aria-hidden=\"true\"></i> Read Article\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-7\">\n                    <div class=\"card\" data-background=\"image\" style=\"background-image: url('assets/img/sections/gukhwa-jang.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Materials</h6>\n                            <h3 class=\"card-title\">US venture investment ticks up</h3>\n                            <p class=\"card-description\">\n                                Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, late-stage financings and a few outsized early-stage rounds....\n                            </p>\n                            <br/>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-round\">\n                                <i class=\"fa fa-book\" aria-hidden=\"true\"></i> Read Article\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-7\">\n                    <div class=\"card\" data-background=\"image\" style=\"background-image: url('assets/img/sections/joshua-stannard.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Productivy Apps</h6>\n                            <a href=\"#pablo\">\n                                <h3 class=\"card-title\">MateLabs mixes machine</h3>\n                            </a>\n                            <p class=\"card-description\">\n                                If you’re not familiar with IFTTT, it’s an automation tool for creating your own if/then statements without any programming knowledge. The service makes it possible...\n                            </p>\n                            <br/>\n                            <a href=\"#pablo\" class=\"btn btn-info btn-round\">\n                                <i class=\"fa fa-book\" aria-hidden=\"true\"></i> Read Article\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-5\">\n                    <div class=\"card\" data-background=\"image\" style=\"background-image: url('assets/img/sections/ilya-yakover.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Materials</h6>\n                            <h3 class=\"card-title\">How to find the ‘right’ contacts.</h3>\n                            <p class=\"card-description\">\n                                Boom, the invitations start flying and Brella makes it easy to accept/decline, schedule a time and reserve a meeting space in Disrupt’s white-glove CrunchMatch meeting...\n                            </p>\n                            <br/>\n                            <a href=\"#pablo\" class=\"btn btn-warning btn-round\">\n                                <i class=\"fa fa-book\" aria-hidden=\"true\"></i> Read Article\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n\n    <!--     *********    PROJECTS 2     *********      -->\n\n    <!-- <div class=\"projects-2 section section-dark\">\n\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h6 class=\"text-muted\">Our work</h6>\n                    <h2 class=\"title\">Some of Our Awesome Products - 2</h2>\n                    <h5 class=\"description\">This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information.</h5>\n                </div>\n            </div>\n            <div class=\"space-top\"></div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"http://www.creative-tim.com/product/paper-kit\">\n                                <img class=\"img\" src=\"assets/img/sections/opt_pk_thumbnail.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <a href=\"http://www.creative-tim.com/product/paper-kit\" target=\"_blank\"><h4 class=\"card-title\">Paper Kit Free</h4></a>\n                            <h6 class=\"card-category text-muted\">Free Ui kit</h6>\n                            <p class=\"card-description\">\n                                Paper Kit is a free Bootstrap UI kit that can get you going in a new creative direction! To say the least, it's different since it's not material, flat or iOS inspired.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"https://www.creative-tim.com/product/light-bootstrap-dashboard-pro\">\n                                <img class=\"img\" src=\"assets/img/sections/opt_lbd_pro_new_thumbnail.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <a href=\"https://www.creative-tim.com/product/light-bootstrap-dashboard-pro\" target=\"_blank\"><h4 class=\"card-title\">Light Bootstrap Dashboard </h4></a>\n                            <h6 class=\"card-category text-muted\">Premium template</h6>\n                            <p class=\"card-description\">\n                                Light Bootstrap Dashboard PRO is a Bootstrap Admin Theme designed to look simple and beautiful. Forget about boring dashboards and grab yourself a copy to kickstart new project!\n                            </p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"https://www.creative-tim.com/product/get-shit-done-pro\">\n                                <img class=\"img\" src=\"assets/img/sections/opt_gsdk_new_thumbnail.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <a href=\"https://www.creative-tim.com/product/get-shit-done-pro\" target=\"_blank\"><h4 class=\"card-title\">Get Shit Done Kit Pro</h4></a>\n                            <h6 class=\"card-category text-muted\">Premium UI kit</h6>\n                            <p class=\"card-description\">\n                                Get Shit Done Kit Pro it's a Bootstrap Kit that comes with a huge number of customisable components. They are pixel perfect, light and easy to use and combine with other elements.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n\n    <!--     *********    PROJECTS 3     *********      -->\n\n    <!-- <div class=\"projects-3\" id=\"projects-3\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <div class=\"space-top\"></div>\n                    <h6 class=\"category\">Our work</h6>\n                    <h2 class=\"title\">Some of Our Awesome Projects - 3</h2>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"http://www.creative-tim.com/product/paper-kit\">\n                                <img class=\"img\" src=\"assets/img/sections/angelo-pantazis.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Productivity tools</h6>\n                            <h4 class=\"card-title\">Beautiful Desktop for Designers</h4>\n                            <p class=\"card-description\">\n                                As this technology matures it will be cool to see what hackers are able to do with it.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4 \">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"http://www.creative-tim.com/product/paper-kit\">\n                                <img class=\"img\" src=\"assets/img/sections/patrick-tomasso.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Web Design</h6>\n                            <h4 class=\"card-title\">Famous Website Redesign Implementation</h4>\n                            <p class=\"card-description\">\n                                Streaming services once again top the list of this year’s Emmy nominations\n                            </p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"http://www.creative-tim.com/product/paper-kit\">\n                                <img class=\"img\" src=\"assets/img/sections/luke-chesser.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Marketing tools</h6>\n                            <h4 class=\"card-title\">The Best Productivity Applications</h4>\n                            <p class=\"card-description\">\n                                Dietary supplements don’t need approval from the Food and Drug Administration.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"http://www.creative-tim.com/product/paper-kit\">\n                                <img class=\"img\" src=\"assets/img/sections/rawpixel-coms.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Website</h6>\n                            <h4 class=\"card-title\">Behance Redesign</h4>\n                            <p class=\"card-description\">\n                                The HDR rollout is being enabled via support from two major studio partners.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"http://www.creative-tim.com/product/paper-kit\">\n                                <img class=\"img\" src=\"assets/img/sections/patrick-tomasso.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Android App</h6>\n                            <h4 class=\"card-title\">Analytics for Android</h4>\n                            <p class=\"card-description\">\n                                Google did not offer an estimate as to when HDR support reaches its other global markets.\n                            </p>\n                        </div>\n                    </div>\n\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"http://www.creative-tim.com/product/paper-kit\">\n                                <img class=\"img\" src=\"assets/img/sections/rawpixel-coms.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Material</h6>\n                            <h4 class=\"card-title\">How to find the contacts.</h4>\n                            <p class=\"card-description\">\n                                Boom, the invitations start flying and Brella makes it easy to accept/decline\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n    <!--     *********    PROJECTS 4     *********      -->\n\n    <!-- <div class=\"project-4 section section-dark\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Some of Our Awesome Projects - 4</h2>\n                    <h5 class=\"description\">This is the paragraph where you can write more details about your projects. Keep you user engaged by\n                        providing meaningful information.</h5>\n                </div>\n            </div>\n            <div class=\"space-top\"></div>\n            <div class=\"row\">\n                <div class=\"col-md-5 ml-auto\">\n                    <div class=\"card\" data-background=\"image\" style=\"background-image: url('assets/img/sections/sebastien-gabrieles.jpg')\">\n                        <div class=\"card-icon\">\n                            <i class=\"nc-icon nc-mobile\"></i>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-5 mr-auto\">\n                    <div class=\"card card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Technology</h6>\n                            <a href=\"#pablo\">\n                                <h3 class=\"card-title\">The need of a great product</h3>\n                            </a>\n                            <p class=\"card-description\">Artificial intelligence-focused investment funds are a dime a dozen these days. Everyone knows\n                                there’s money to be made from AI, but to capture value, good VCs know they need to back products\n                                and not technologies.</p>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <br/>\n            <hr />\n            <br/>\n            <div class=\"row\">\n                <div class=\"col-md-5 ml-auto\">\n                    <div class=\"card card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">Design</h6>\n                            <a href=\"#pablo\">\n                                <h3 class=\"card-title\">The aesthetic quality of a product</h3>\n                            </a>\n                            <p class=\"card-description\">Eventually, the data collected from the grant program could allow the two to play a bit of machine\n                                learning moneyball — valuing machine learning engineers without traditional metrics (like\n                                having a PhD from Stanford)...</p>\n\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-5 mr-auto\">\n                    <div class=\"card\" data-background=\"image\" style=\"background-image: url('assets/img/sections/john-towner.jpg')\">\n                        <div class=\"card-icon\">\n                            <i class=\"nc-icon nc-controller-modern\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/sections/projects/projects.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sections/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/sections/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sections/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sections/sections.component.html":
/***/ (function(module, exports) {

module.exports = "<app-headers></app-headers>\r\n<!-- <app-features></app-features> -->\r\n<app-blogs></app-blogs>\r\n<app-teams></app-teams>\r\n<app-projects></app-projects>\r\n<!-- <app-pricing></app-pricing> -->\r\n<app-testimonials></app-testimonials>\r\n<app-contacts></app-contacts>\r\n<nav id=\"cd-vertical-nav\">\r\n    <ul>\r\n        <li>\r\n            <a data-number=\"1\" (click)=\"smoothScroll('headers')\">\r\n                <span class=\"cd-dot\"></span>\r\n                <span class=\"cd-label\">BEST</span>\r\n            </a>\r\n        </li>\r\n        <!-- <li>\r\n            <a data-number=\"2\" (click)=\"smoothScroll('features')\">\r\n                <span class=\"cd-dot\"></span>\r\n                <span class=\"cd-label\">Features</span>\r\n            </a>\r\n        </li> -->\r\n        <li>\r\n            <a data-number=\"2\" (click)=\"smoothScroll('blogs')\">\r\n                <span class=\"cd-dot\"></span>\r\n                <span class=\"cd-label\">LATEST POST</span>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a data-number=\"3\" (click)=\"smoothScroll('teams')\">\r\n                <span class=\"cd-dot\"></span>\r\n                <span class=\"cd-label\">PRODUCTS</span>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a data-number=\"4\" (click)=\"smoothScroll('projects')\">\r\n                <span class=\"cd-dot\"></span>\r\n                <span class=\"cd-label\">Projects</span>\r\n            </a>\r\n        </li>\r\n        <!-- <li>\r\n            <a data-number=\"6\" (click)=\"smoothScroll('pricing')\">\r\n                <span class=\"cd-dot\"></span>\r\n                <span class=\"cd-label\">Pricing</span>\r\n            </a>\r\n        </li> -->\r\n        <li>\r\n            <a data-number=\"5\" (click)=\"smoothScroll('testimonials')\">\r\n                <span class=\"cd-dot\"></span>\r\n                <span class=\"cd-label\">Testimonials</span>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a data-number=\"6\" (click)=\"smoothScroll('contact-us')\" >\r\n                <span class=\"cd-dot\"></span>\r\n                <span class=\"cd-label\">Contact Us</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/sections/sections.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sections/sections.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//t = current time
//b = start value
//c = change in value
//d = duration
var easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1)
        return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};
var SectionsComponent = /** @class */ (function () {
    function SectionsComponent(router) {
        router.events.subscribe(function (s) {
            if (s instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]) {
                var tree = router.parseUrl(router.url);
                if (tree.fragment) {
                    var element = document.querySelector("#" + tree.fragment);
                    if (element) {
                        element.scrollIntoView();
                    }
                }
            }
        });
    }
    SectionsComponent.prototype.updateNavigation = function () {
        var contentSections = document.getElementsByClassName('cd-section');
        var navigationItems = document.getElementById('cd-vertical-nav').getElementsByTagName('a');
        for (var i = 0; i < contentSections.length; i++) {
            var activeSection = parseInt(navigationItems[i].getAttribute('data-number')) - 1;
            if ((contentSections[i].offsetTop - window.innerHeight / 2 < window.pageYOffset) && (contentSections[i].offsetTop + contentSections[i].scrollHeight - window.innerHeight / 2 > window.pageYOffset)) {
                navigationItems[activeSection].classList.add('is-selected');
            }
            else {
                navigationItems[activeSection].classList.remove('is-selected');
            }
        }
    };
    SectionsComponent.prototype.ngOnInit = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0];
        navbar.children[0].classList.remove('navbar-transparent');
    };
    SectionsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0];
        navbar.children[0].classList.add('navbar-transparent');
    };
    SectionsComponent.prototype.smoothScroll = function (target) {
        var targetScroll = document.getElementById(target);
        this.scrollTo(document.documentElement, targetScroll.offsetTop, 1250);
    };
    SectionsComponent.prototype.scrollTo = function (element, to, duration) {
        var start = element.scrollTop, change = to - start, currentTime = 0, increment = 20;
        var animateScroll = function () {
            currentTime += increment;
            var val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    };
    SectionsComponent.prototype.ngAfterViewInit = function () {
        this.updateNavigation();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SectionsComponent.prototype, "updateNavigation", null);
    SectionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sections',
            template: __webpack_require__("../../../../../src/app/sections/sections.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sections/sections.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sections/sections.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sections_component__ = __webpack_require__("../../../../../src/app/sections/sections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__headers_headers_component__ = __webpack_require__("../../../../../src/app/sections/headers/headers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__features_features_component__ = __webpack_require__("../../../../../src/app/sections/features/features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blogs_blogs_component__ = __webpack_require__("../../../../../src/app/sections/blogs/blogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teams_teams_component__ = __webpack_require__("../../../../../src/app/sections/teams/teams.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projects_projects_component__ = __webpack_require__("../../../../../src/app/sections/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pricing_pricing_component__ = __webpack_require__("../../../../../src/app/sections/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__testimonials_testimonials_component__ = __webpack_require__("../../../../../src/app/sections/testimonials/testimonials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/sections/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var SectionsModule = /** @class */ (function () {
    function SectionsModule() {
    }
    SectionsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_13__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'YOUR_KEY_HERE'
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["d" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sections_component__["a" /* SectionsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__headers_headers_component__["a" /* HeadersComponent */],
                __WEBPACK_IMPORTED_MODULE_4__features_features_component__["a" /* FeaturesComponent */],
                __WEBPACK_IMPORTED_MODULE_5__blogs_blogs_component__["a" /* BlogsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__teams_teams_component__["a" /* TeamsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pricing_pricing_component__["a" /* PricingComponent */],
                __WEBPACK_IMPORTED_MODULE_9__testimonials_testimonials_component__["a" /* TestimonialsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__contacts_contacts_component__["a" /* ContactsComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__sections_component__["a" /* SectionsComponent */]
            ]
        })
    ], SectionsModule);
    return SectionsModule;
}());



/***/ }),

/***/ "../../../../../src/app/sections/teams/teams.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cd-section section-white\" id=\"teams\">\n\n    <!--     *********    TEAM 1     *********      -->\n    <!-- <div class=\"team-1\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Our Stunning products</h2>\n                    <h5 class=\"description\">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h5>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#avatar\"><img src=\"assets\\img\\products\\5S4A7839.JPG\" alt=\"...\"></a>\n                        </div>\n                        <div class=\"card-body\">\n                            <a href=\"#paper-kit\">\n                                <div class=\"author\">\n                                    <h4 class=\"card-title\">Henry Ford</h4>\n                                    <h6 class=\"card-category text-muted\">Product Manager</h6>\n                                </div>\n                            </a>\n                            <p class=\"card-description text-center\">\n                            Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.\n                            </p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#avatar\"><img src=\"assets/img/faces/joe-gardner-2.jpg\" alt=\"...\"></a>\n                        </div>\n                        <div class=\"card-body\">\n                            <a href=\"#paper-kit\">\n                                <div class=\"author\">\n                                    <h4 class=\"card-title\">Sophie West</h4>\n                                    <h6 class=\"card-category text-muted\">Designer</h6>\n                                </div>\n                            </a>\n                            <p class=\"card-description text-center\">\n                            A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.\n                            </p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#avatar\"><img src=\"assets/img/faces/erik-lucatero-2.jpg\" alt=\"...\"></a>\n                        </div>\n                        <div class=\"card-body\">\n                            <a href=\"#paper-kit\">\n                                <div class=\"author\">\n                                    <h4 class=\"card-title\">Robert Orben</h4>\n                                    <h6 class=\"card-category text-muted\">Developer</h6>\n                                </div>\n                            </a>\n                            <p class=\"card-description text-center\">\n                            The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.\n                            </p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#avatar\"><img src=\"assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"...\"></a>\n                        </div>\n                        <div class=\"card-body\">\n                            <a href=\"#paper-kit\">\n                                <div class=\"author\">\n                                    <h4 class=\"card-title\">Patrick Lencioni</h4>\n                                    <h6 class=\"card-category text-muted\">Brand Manager</h6>\n                                </div>\n                            </a>\n                            <p class=\"card-description text-center\">\n                            Great teams do not hold back with one another. They are unafraid to air their dirty laundry. They admit their mistakes, their weaknesses and their concerns without fear of reprisal.\n                            </p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n<!-- \n    <div class=\"wrapper\">\n        <div class=\"section text-center landing-section\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto\">\n                        <h2 class=\"title\">Let's talk product</h2>\n                        <h5>This is the paragraph where you can write more details about your product. Keep you user engaged\n                            by providing meaningful information. Remember that by this time, the user is curious, otherwise\n                            he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>\n                        <br />\n                        <a href=\"#paper-kit\" class=\"btn btn-danger btn-fill btn-round\">See Details</a>\n                    </div>\n                </div>\n                <br />\n                <br />\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <div class=\"info\">\n                            <div class=\"icon icon-danger\">\n                                <i class=\"nc-icon nc-palette\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Beautiful Gallery</h4>\n                                <p class=\"description\">Spend your time generating new ideas. You don't have to think of implementing.</p>\n                                <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"info\">\n                            <div class=\"icon icon-danger\">\n                                <i class=\"nc-icon nc-bulb-63\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">New Ideas</h4>\n                                <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\n                                <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"info\">\n                            <div class=\"icon icon-danger\">\n                                <i class=\"nc-icon nc-chart-bar-32\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Statistics</h4>\n                                <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>\n                                <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"info\">\n                            <div class=\"icon icon-danger\">\n                                <i class=\"nc-icon nc-sun-fog-29\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Delightful design</h4>\n                                <p>Find unique and handmade delightful designs related items directly from our sellers.</p>\n                                <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n\n\n    </div> -->\n\n    <!-- *********    TEAM 2     *********     \n    <div class=\"team-2 section-image\" style=\"background-image: url('assets/img/sections/jan-sendereks.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">The Executive Team 2</h2>\n                    <h5 class=\"description\">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h5>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" src=\"assets/img/faces/kaci-baum-1.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Alec Thompson</h4>\n                            <h6 class=\"card-category\">Managing Partner</h6>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-link btn-just-icon\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-link btn-just-icon\"><i class=\"fa fa-facebook\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-link btn-just-icon\"><i class=\"fa fa-dribbble\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" src=\"assets/img/faces/clem-onojeghuo-1.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">George Lincoln</h4>\n                            <h6 class=\"card-category\">Backend Hacker</h6>\n\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-link btn-just-icon\"><i class=\"fa fa-linkedin\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-link btn-just-icon\"><i class=\"fa fa-facebook\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-link btn-just-icon\"><i class=\"fa fa-dribbble\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" src=\"assets/img/faces/joe-gardner-1.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Sophie West</h4>\n                            <h6 class=\"card-category\">Photographer</h6>\n\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-link btn-just-icon\"><i class=\"fa fa-dribbble\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-link btn-just-icon\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-link btn-just-icon\"><i class=\"fa fa-linkedin\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n\n    <!--     *********    TEAM 3     *********      -->\n    <!-- <div class=\"team-3\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">The Executive Team 3</h2>\n                    <h5 class=\"description\">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h5>\n                </div>\n            </div>\n            <div class=\"space-top\"></div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-img-top\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"assets/img/faces/clem-onojeghuo-3.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body text-left\">\n                                    <h4 class=\"card-title\">Alec Thompson</h4>\n                                    <h6 class=\"card-category\">Founder</h6>\n                                    <p class=\"card-description\">\n                                        Individual commitment to a group effort – that’s what makes a team work, a society work...\n                                    </p>\n                                    <div class=\"card-footer pull-left\">\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-facebook\"><i class=\"fa fa-facebook\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-google\"><i class=\"fa fa-google-plus\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-img-top\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"assets/img/faces/ayo-ogunseinde-2.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body text-left\">\n                                    <h4 class=\"card-title\">Ethan Smith</h4>\n                                    <h6 class=\"card-category\">Founder</h6>\n                                    <p class=\"card-description\">\n                                        Don't be scared of the truth because we need to restart the human foundation in truth...\n                                    </p>\n                                    <div class=\"card-footer pull-left\">\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-pinterest\"><i class=\"fa fa-pinterest\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-img-top\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"assets/img/faces/clem-onojeghuo-2.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body text-left\">\n                                    <h4 class=\"card-title\">Lucas Andrew</h4>\n                                    <h6 class=\"card-category\">Web Designer</h6>\n                                    <p class=\"card-description\">\n                                        I love you like Kanye loves Kanye. Don't be scared of the truth. Kanye loves himself like Kanye loves Kanye.\n                                    </p>\n                                    <div class=\"card-footer pull-left\">\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-youtube\"><i class=\"fa fa-youtube\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-instagram\"><i class=\"fa fa-instagram\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-img-top\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"assets/img/faces/kaci-baum-2.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body text-left\">\n                                    <h4 class=\"card-title\">Sophie West</h4>\n                                    <h6 class=\"card-category\">Backend Hacker</h6>\n                                    <p class=\"card-description\">\n                                        It is literally true that you can succeed best and quickest by helping others to succeed because they care about.\n                                    </p>\n                                    <div class=\"card-footer pull-left\">\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-instagram\"><i class=\"fa fa-instagram\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n\n    <!--     *********    TEAM 4     *********      -->\n    <!-- <div class=\"team-4 section-image\" style=\"background-image: url('assets/img/sections/fabio-mangione.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">The Executive Team 4</h2>\n                    <h5 class=\"description\">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h5>\n                    <br />\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-body\">\n                            <div class=\"card-avatar\">\n                                <a href=\"#avatar\">\n                                    <img src=\"assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"...\"/>\n                                    <h4 class=\"card-title\">Eric Thomson</h4>\n                                </a>\n                            </div>\n                            <p class=\"card-description text-center\">\n                                A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.\n                            </p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a href=\"#pablo\" class=\"btn btn-just-icon btn-linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-just-icon btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-just-icon btn-instagram\"><i class=\"fa fa-instagram\"></i></a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-body\">\n                            <div class=\"card-avatar\">\n                                <a href=\"#avatar\">\n                                    <img src=\"assets/img/faces/joe-gardner-2.jpg\" alt=\"...\"/>\n                                    <h4 class=\"card-title\">Sophia West</h4>\n                                </a>\n                            </div>\n                            <p class=\"card-description text-center\">\n                                The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.\n                            </p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a href=\"#pablo\" class=\"btn btn-just-icon btn-linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-just-icon btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-just-icon btn-pinterest\"><i class=\"fa fa-pinterest\"></i></a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-body\">\n                            <div class=\"card-avatar\">\n                                <a href=\"#avatar\">\n                                    <img src=\"assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"...\"/>\n                                    <h4 class=\"card-title\">Lucas Andrew</h4>\n                                </a>\n                            </div>\n                            <p class=\"card-description text-center\">\n                                Great teams do not hold back with one another. They are unafraid to air their dirty laundry. They admit their mistakes, their weaknesses and their concerns without fear of reprisal.\n                            </p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a href=\"#pablo\" class=\"btn btn-just-icon btn-youtube\"><i class=\"fa fa-youtube\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-just-icon btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-just-icon btn-instagram\"><i class=\"fa fa-instagram\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n\n    <!--     *********    TEAM 5     *********      -->\n    <!-- <div class=\"team-5 section-image\" style=\"background-image: url('assets/img/sections/martin-knize.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">The Executive Team 5</h2>\n                    <h5 class=\"description\">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h5>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-img-top\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"assets/img/faces/erik-lucatero-2.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body text-left\">\n                                    <h4 class=\"card-title\">Andrew Carnegie</h4>\n                                    <h6 class=\"card-category\">Project Manager</h6>\n                                    <p class=\"card-description\">\n                                        If a team is to reach its potential, each player must be willing to subordinate his personal goals.\n                                    </p>\n                                    <div class=\"card-footer\">\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-neutral\"><i class=\"fa fa-facebook\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-img-top\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"assets/img/faces/kaci-baum-2.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body text-left\">\n                                    <h4 class=\"card-title\">Alec Thompson</h4>\n                                    <h6 class=\"card-category\">Founder</h6>\n                                    <p class=\"card-description\">\n                                        Interdependent people combine their own efforts with the efforts of others to achieve their greatest success.\n                                    </p>\n                                    <div class=\"card-footer\">\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-neutral\"><i class=\"fa fa-dribbble\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-neutral\"><i class=\"fa fa-pinterest\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-img-top\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"assets/img/faces/clem-onojeghuo-3.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body text-left\">\n                                    <h4 class=\"card-title\">Gine Andrew</h4>\n                                    <h6 class=\"card-category\">Web Designer</h6>\n                                    <p class=\"card-description\">\n                                        When he took time to help the man up the mountain, lo, he scaled it himself. Sticks in a bundle are unbreakable.\n                                    </p>\n                                    <div class=\"card-footer\">\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-neutral\"><i class=\"fa fa-youtube\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-neutral\"><i class=\"fa fa-instagram\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-img-top\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"assets/img/faces/clem-onojeghuo-2.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body text-left\">\n                                    <h4 class=\"card-title\">George West</h4>\n                                    <h6 class=\"card-category\">Backend Hacker</h6>\n                                    <p class=\"card-description\">\n                                        I love you like Kanye loves Kanye. Don't be scared of the truth because we need to restart the human foundation.\n                                    </p>\n                                    <div class=\"card-footer\">\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-neutral\"><i class=\"fa fa-instagram\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-neutral\"><i class=\"fa fa-dribbble\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/sections/teams/teams.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sections/teams/teams.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamsComponent = /** @class */ (function () {
    function TeamsComponent() {
    }
    TeamsComponent.prototype.ngOnInit = function () {
    };
    TeamsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-teams',
            template: __webpack_require__("../../../../../src/app/sections/teams/teams.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sections/teams/teams.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamsComponent);
    return TeamsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sections/testimonials/testimonials.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cd-section section-white\" id=\"testimonials\">\n\n    <!--     *********    TESTIMONIALS 1     *********      -->\n\n    <!-- <div class=\"testimonials-1 section-image\" style=\"background-image: url('assets/img/sections/uriel-soberanes.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Our Clients Love Us</h2>\n                    <h5 class=\"description\">You need more information? Check what other persons are saying about our product. They are very happy with their purchase.</h5>\n                </div>\n            </div>\n            <div class=\"space-top\"></div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-testimonial\">\n                        <div class=\"card-icon\">\n                            <i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i>\n                        </div>\n                        <div class=\"card-body\">\n                            <p class=\"card-description\">\n                                Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!\n                            </p>\n                            <div class=\"card-footer\">\n                                <h4 class=\"card-title\">Alec Thompson</h4>\n                                <h6 class=\"card-category\">@alecthompson</h6>\n                                <div class=\"card-avatar\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"assets/img/faces/ayo-ogunseinde-2.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-testimonial\">\n                        <div class=\"card-icon\">\n                            <i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i>\n                        </div>\n                        <div class=\"card-body\">\n                            <p class=\"card-description\">\n                                \"Don't be scared of the truth because we need to restart the human foundation in truth. That's why I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is not so attractive\"\n                            </p>\n                            <div class=\"card-footer\">\n                                <h4 class=\"card-title\">Gina Andrew</h4>\n                                <h6 class=\"card-category\">@ginaandrew</h6>\n                                <div class=\"card-avatar\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"assets/img/faces/joe-gardner-2.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-testimonial\">\n                        <div class=\"card-icon\">\n                            <i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i>\n                        </div>\n                        <div class=\"card-body\">\n                            <p class=\"card-description\">\n                                \"Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!\"\n                            </p>\n                            <div class=\"card-footer\">\n                                <h4 class=\"card-title\">Joe West</h4>\n                                <h6 class=\"card-category\">@georgewest</h6>\n                                <div class=\"card-avatar\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"assets/img/faces/kaci-baum-2.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n\n\n    <div class=\"team-2 section-image\" style=\"background-image: url('assets/img/sections/jan-sendereks.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">小姐姐在用</h2>\n                    <h5 class=\"description\">每个女人都需要“精神慰藉”\n                        <br> 在微弱的灯光下卸下伪装\n                    </h5>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" src=\"assets/img/comments/WeChat Image_20180427152418.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\"></h4>\n                            <h6 class=\"card-category\"></h6>\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">\n                                <i class=\"fa fa-heart\"></i> 翻牌 </a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" src=\"assets/img/comments/WeChat Image_20180427210710.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\"></h4>\n                            <h6 class=\"card-category\"></h6>\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">\n                                <i class=\"fa fa-heart\"></i> 翻牌 </a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" src=\"assets/img/comments/WeChat Image_20180427152433.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\"></h4>\n                            <h6 class=\"card-category\"></h6>\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">\n                                <i class=\"fa fa-heart\"></i> 翻牌 </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <div class=\"card card-profile card-plain\">\n                            <div class=\"card-img-top\">\n                                <a href=\"#pablo\">\n                                    <img class=\"img\" src=\"assets/img/blog/WeChat Image_20180427211729.jpg\" />\n                                </a>\n                            </div>\n                            <div class=\"card-body\">\n                                <h4 class=\"card-title\"></h4>\n                                <h6 class=\"card-category\"></h6>\n                                <a href=\"#pablo\" class=\"btn btn-danger btn-round\">\n                                    <i class=\"fa fa-heart\"></i> 翻牌 </a>\n                            </div>\n                        </div>\n                    </div>\n    \n                    <div class=\"col-md-4\">\n                        <div class=\"card card-profile card-plain\">\n                            <div class=\"card-img-top\">\n                                <a href=\"#pablo\">\n                                    <img class=\"img\" src=\"assets/img/blog/WeChat Image_20180427152522.jpg\" />\n                                </a>\n                            </div>\n                            <div class=\"card-body\">\n                                <h4 class=\"card-title\"></h4>\n                                <h6 class=\"card-category\"></h6>\n                                <a href=\"#pablo\" class=\"btn btn-danger btn-round\">\n                                    <i class=\"fa fa-heart\"></i> 翻牌 </a>\n                            </div>\n                        </div>\n                    </div>\n    \n                    <div class=\"col-md-4\">\n                        <div class=\"card card-profile card-plain\">\n                            <div class=\"card-img-top\">\n                                <a href=\"#pablo\">\n                                    <img class=\"img\" src=\"assets/img/blog/WeChat Image_20180427153153.jpg\" />\n                                </a>\n                            </div>\n                            <div class=\"card-body\">\n                                <h4 class=\"card-title\"></h4>\n                                <h6 class=\"card-category\"></h6>\n                                <a href=\"#pablo\" class=\"btn btn-danger btn-round\">\n                                    <i class=\"fa fa-heart\"></i> 翻牌 </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n        </div>\n    </div>\n\n    <div class=\"team-2 section-image\" style=\"background-image: url('assets/img/sections/jan-sendereks.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">小哥哥在用</h2>\n                    <h5 class=\"description\">灯红酒绿的夜晚\n                        <br> 散发着荷尔蒙的小哥哥穿梭在热闹的酒吧街\n                    </h5>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" src=\"assets/img/comments/WeChat Image_20180427210904.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\"></h4>\n                            <h6 class=\"card-category\"></h6>\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">\n                                <i class=\"fa fa-heart\"></i> 翻牌 </a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" src=\"assets/img/comments/WeChat Image_20180427210400.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\"></h4>\n                            <h6 class=\"card-category\"></h6>\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">\n                                <i class=\"fa fa-heart\"></i> 翻牌 </a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" src=\"assets/img/comments/WeChat Image_20180427210452.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\"></h4>\n                            <h6 class=\"card-category\"></h6>\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">\n                                <i class=\"fa fa-heart\"></i> 翻牌 </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            \n        </div>\n    </div>\n\n    <div class=\"team-2 section-image\" style=\"background-image: url('assets/img/sections/jan-sendereks.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">大咖在用</h2>\n                    <h5 class=\"description\">一旦有更适合让他感兴趣的人出现，你就迅速失宠了\n                        <br> 有一种欲望\n                        <br>来自陌生人\n                    </h5>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" src=\"assets/img/comments/WeChat Image_20180427210426 - Copy.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\"></h4>\n                            <h6 class=\"card-category\"></h6>\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">\n                                <i class=\"fa fa-heart\"></i> 翻牌 </a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" src=\"assets/img/comments/WeChat Image_20180427211045.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\"></h4>\n                            <h6 class=\"card-category\"></h6>\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">\n                                <i class=\"fa fa-heart\"></i> 翻牌 </a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-img-top\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" src=\"assets/img/blog/WeChat Image_20180427152407.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\"></h4>\n                            <h6 class=\"card-category\"></h6>\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">\n                                <i class=\"fa fa-heart\"></i> 翻牌 </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            \n        </div>\n    </div>\n    <!--     *********    TESTIMONIALS 2     *********      -->\n\n    <div class=\"testimonials-2 section section-testimonials\">\n        <div class=\"container\">\n            <h2 class=\"title text-center\">JOIN US!</h2>\n            <div class=\"row\">\n                <div class=\"col-md-2 mr-auto\">\n                    <div class=\"testimonials-people\">\n                        <img class=\"left-first-person add-animation\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/110862/thumb.?1482812727\"\n                            alt=\"\" />\n                        <img class=\"left-second-person add-animation\" src=\".\\assets\\img\\beauty\\shifaaz-shamoon-300079-unsplash.jpg\" alt=\"\" />\n                        <img class=\"left-third-person add-animation\" src=\"assets/img/comments/WeChat Image_20180427210635.jpg\"\n                            alt=\"\" />\n                        <img class=\"left-fourth-person add-animation\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/134607/thumb.?1487680276\"\n                            alt=\"\" />\n                        <img class=\"left-fifth-person add-animation\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/161506/thumb.?1489848178\"\n                            alt=\"\" />\n                        <img class=\"left-sixth-person add-animation\" src=\"assets/img/comments/WeChat Image_20180427210609.jpg\"\n                            alt=\"\" />\n                    </div>\n                </div>\n\n                <div class=\"col-md-6 ml-auto mr-auto\">\n                    <div class=\"page-carousel\">\n                        <ngb-carousel>\n                            <ng-template ngbSlide>\n                                <div class=\"card card-testimonial card-plain\">\n                                    <div class=\"card-avatar\">\n                                        <img class=\"img\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg\" />\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <h5 class=\"card-description\">\n                                            \"I'm newer to the Scarlet with my shy personality...\n                                            <br> Amazing! Just try and you will fall in love with it!\"\n                                        </h5>\n                                        <div class=\"card-footer\">\n                                            <h4 class=\"card-title\">Chase Jackson</h4>\n                                            <h6 class=\"card-category\">25-year-old\n                                                <br> Web Developer</h6>\n                                            <div class=\"card-stars\">\n                                                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-template>\n                            <ng-template ngbSlide>\n                                <div class=\"card card-testimonial card-plain\">\n                                    <div class=\"card-avatar\">\n                                        <img class=\"img\" src=\".\\assets\\img\\beauty\\aily-torres-19206-unsplash.jpg\" />\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <h5 class=\"card-description\">\n                                            \"Love the shapes and color on the bottle!\n                                            <br>Perfect for drinking and singles!\"\n                                        </h5>\n                                        <div class=\"card-footer\">\n                                            <h4 class=\"card-title\">Dara</h4>\n                                            <h6 class=\"card-category\">23-year-old\n                                                <br> Student</h6>\n                                            <div class=\"card-stars\">\n                                                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-template>\n                            <ng-template ngbSlide>\n                                <div class=\"card card-testimonial card-plain\">\n                                    <div class=\"card-avatar\">\n                                        <img class=\"img\" src=\".\\assets\\img\\beauty\\larm-rmah-47685-unsplash.jpg\" />\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <h5 class=\"card-description\">\n                                            \"Love it.\n                                            <br>Just enjoy your life!.\"\n                                        </h5>\n                                        <div class=\"card-footer\">\n                                            <h4 class=\"card-title\"> Lynn</h4>\n                                            <h6 class=\"card-category\">\n                                                23-year-old\n                                                <br> Café Owner</h6>\n                                            <div class=\"card-stars\">\n                                                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </ngb-carousel>\n                    </div>\n                </div>\n\n                <div class=\"col-md-2 ml-auto\">\n                    <div class=\"testimonials-people\">\n                        <img class=\"right-first-person add-animation\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg\" alt=\"\" />\n                        <img class=\"right-second-person add-animation\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/125268/thumb.jpeg?1497799215\"\n                            alt=\"\" />\n                        <img class=\"right-third-person add-animation\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/123334/thumb.JPG?1479459618\"\n                            alt=\"\" />\n                        <img class=\"right-fourth-person add-animation\" src=\"assets/img/comments/WeChat Image_20180427211145.jpg\"\n                            alt=\"\" />\n                        <img class=\"right-fifth-person add-animation\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/18/thumb.png?1431433244\"\n                            alt=\"\" />\n                        <img class=\"right-sixth-person add-animation\" src=\"assets/img/comments/WeChat Image_20180427211011.jpg\"\n                            alt=\"\" />\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n    <!--     *********    TESTIMONIALS 3     *********      -->\n\n    <!-- <div class=\"testimonials-3\">\n\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">What Clients Say</h2>\n\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-3 ml-auto\">\n                    <div class=\"card\" data-background=\"color\" data-color=\"orange\">\n                        <div class=\"card-body\">\n                            <div class=\"author\">\n                                <a href=\"#pablo\">\n                                   <img src=\"assets/img/faces/joe-gardner-2.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                   <span>Erik Johnson</span>\n                                </a>\n                            </div>\n                            <span class=\"category-social pull-right\">\n                                <i class=\"fa fa-quote-right\"></i>\n                            </span>\n                            <div class=\"clearfix\"></div>\n                            <p class=\"card-description\">\n                                \"During the first selection of grant winners on the essential aspects, and the products are not burdened with non-essentials. Back to purity, back to simplicity. At best, it is self-explanatory.\"\n                            </p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card\" data-background=\"color\" data-color=\"green\">\n                        <div class=\"card-body\">\n                            <div class=\"author\">\n                                <a href=\"#pablo\">\n                                   <img src=\"assets/img/faces/erik-lucatero-2.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                   <span>Erik Johnson</span>\n                                </a>\n                            </div>\n                            <span class=\"category-social pull-right\">\n                                <i class=\"fa fa-quote-right\"></i>\n                            </span>\n                            <div class=\"clearfix\"></div>\n                            <p class=\"card-description\">\n                                \"The plan is to add additional flexibility in the future to allow applicants to make a case for how much money they actually need. Less, but better – because it concentrates on the essential aspects, and the products are not burdened with non-essentials...\"\n                            </p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3 mr-auto\">\n                    <div class=\"card\" data-background=\"color\" data-color=\"yellow\">\n                        <div class=\"card-body\">\n                            <div class=\"author\">\n                                <a href=\"#pablo\">\n                                   <img src=\"assets/img/faces/kaci-baum-2.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                   <span>Erik Johnson</span>\n                                </a>\n                            </div>\n                            <span class=\"category-social pull-right\">\n                                <i class=\"fa fa-quote-right\"></i>\n                            </span>\n                            <div class=\"clearfix\"></div>\n                            <p class=\"card-description\">\n                                \"Simulation of many-body quantum systems with neural networks, and the products are not burdened with non-essentials. Back to purity, back to simplicity. At best, it is self-explanatory.\"\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4 ml-auto\">\n                    <div class=\"card\" data-background=\"color\" data-color=\"blue\">\n                        <div class=\"card-body\">\n                            <div class=\"author\">\n                                <a href=\"#pablo\">\n                                   <img src=\"assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                   <span>Erik Johnson</span>\n                                </a>\n                            </div>\n                            <span class=\"category-social pull-right\">\n                                <i class=\"fa fa-quote-right\"></i>\n                            </span>\n                            <div class=\"clearfix\"></div>\n                            <p class=\"card-description\">\n                                \"Machine learning for motion recognition and trajectory generation of human movement for rehabilitation with non-essentials. Back to purity, back to simplicity. At best, it is self-explanatory.\"\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 mr-auto\">\n                    <div class=\"card\" data-background=\"color\" data-color=\"purple\">\n                        <div class=\"card-body\">\n                            <div class=\"author\">\n                                <a href=\"#pablo\">\n                                   <img src=\"assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                   <span>Erik Johnson</span>\n                                </a>\n                            </div>\n                            <span class=\"category-social pull-right\">\n                                <i class=\"fa fa-quote-right\"></i>\n                            </span>\n                            <div class=\"clearfix\"></div>\n                            <p class=\"card-description\">\n                                \"Less, but better – because it concentrates on the essential aspects, and the products are not burdened with non-essentials. Back to purity, back to simplicity. At best, it is self-explanatory. The entire AI Grant project reminds me of a cross between a Thiel Fellowship and a Kaggle competition.\"\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/sections/testimonials/testimonials.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sections/testimonials/testimonials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent() {
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    TestimonialsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testimonials',
            template: __webpack_require__("../../../../../src/app/sections/testimonials/testimonials.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sections/testimonials/testimonials.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/image-upload/image-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fileinput text-center\" >\n    <div [ngClass]=\"{'img-circle':isRound}\" class=\"thumbnail img-no-padding\">\n        <img src={{state.imagePreviewUrl}} alt=\"...\" />\n    </div>\n    <div>\n        <button class=\"btn btn-outline-default btn-file btn-round\" (click)=\"handleClick()\" *ngIf=\"!this.state.file\">Select image</button>\n        <button class=\"btn btn-outline-default btn-file btn-round\" (click)=\"handleClick()\" *ngIf=\"this.state.file\">Change</button>\n        <button class=\"btn btn-link btn-danger\" (click)=\"handleRemove()\" *ngIf=\"this.state.file\"><i class=\"fa fa-times\"></i> Remove</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/image-upload/image-upload.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/image-upload/image-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageUploadComponent = /** @class */ (function () {
    function ImageUploadComponent() {
        this.isRound = false;
        this.state = {};
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    ImageUploadComponent.prototype.ngOnInit = function () {
        this.state = {
            file: null,
            imagePreviewUrl: this.image !== undefined ? this.image : (this.isRound ? './assets/img/placeholder.jpg' : './assets/img/image_placeholder.jpg')
        };
    };
    ImageUploadComponent.prototype.handleImageChange = function (e) {
        var _this = this;
        e.preventDefault();
        var reader = new FileReader();
        var file = e.target.files[0];
        reader.onloadend = function () {
            _this.state.file = file;
            _this.state.imagePreviewUrl = reader.result;
            // this.state.imagePreviewUrl1 = reader.result;
        };
        reader.readAsDataURL(file);
    };
    ImageUploadComponent.prototype.handleSubmit = function (e) {
        e.preventDefault();
        // this.state.file is the file/image uploaded
        // in this function you can save the image (this.state.file) on form submit
        // you have to call it yourself
    };
    ImageUploadComponent.prototype.handleClick = function () {
        var input = document.createElement("input");
        input.type = "file";
        input.onchange = this.handleImageChange;
        input.click();
    };
    ImageUploadComponent.prototype.handleRemove = function () {
        this.state.file = null;
        this.state.imagePreviewUrl = this.image !== undefined ? this.image : (this.isRound ? './assets/img/placeholder.jpg' : './assets/img/image_placeholder.jpg');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ImageUploadComponent.prototype, "isRound", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ImageUploadComponent.prototype, "image", void 0);
    ImageUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-image-upload',
            template: __webpack_require__("../../../../../src/app/shared/image-upload/image-upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/image-upload/image-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageUploadComponent);
    return ImageUploadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/image-upload/image-upload.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageUploadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_upload_component__ = __webpack_require__("../../../../../src/app/shared/image-upload/image-upload.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImageUploadModule = /** @class */ (function () {
    function ImageUploadModule() {
    }
    ImageUploadModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__image_upload_component__["a" /* ImageUploadComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__image_upload_component__["a" /* ImageUploadComponent */]]
        })
    ], ImageUploadModule);
    return ImageUploadModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top nav-down\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <div class=\"navbar-header\">\n                <a class=\"navbar-brand\" [routerLink]=\"['/sections']\" fragment=\"headers\"> scarlet • x\n                    <img class=\"left-first-person add-animation\" src=\".\\assets\\img\\Profile\\icon1.jpg\" alt=\"\" />\n                </a>\n            </div>\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\"\n                aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"navbar-nav ml-auto\">\n                <!-- <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"https://timcreative.github.io/paper-kit-pro-angular/documentation/tutorial\">Documentation</a>\n                </li> -->\n                <div ngbDropdown class=\"nav-item dropdown\">\n                    <div class=\"nav-link dropdown-toggle\" ngbDropdownToggle> HOME </div>\n                    <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown-danger\">\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"headers\">\n                            <i class=\"nc-icon nc-tile-56\"></i>&nbsp; BEST</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"blogs\">\n                            <i class=\"nc-icon nc-bullet-list-67\"></i>&nbsp; LATEST POST</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"projects\">\n                            <i class=\"nc-icon nc-calendar-60\"></i>&nbsp; STORY</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"testimonials\">\n                            <i class=\"nc-icon nc-badge\"></i>&nbsp; Testimonials</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"contact-us\">\n                            <i class=\"nc-icon nc-mobile\"></i>&nbsp; Contacts</a>\n                    </div>\n                </div>\n                <!-- <div ngbDropdown class=\"nav-item dropdown\">\n                    <div class=\"nav-link dropdown-toggle\" ngbDropdownToggle>HEY</div>\n                    <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown-danger\">\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/aboutus']\">\n                            <i class=\"nc-icon nc-bank\"></i>&nbsp; About Us</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/blogpost']\">\n                            <i class=\"nc-icon nc-badge\"></i>&nbsp; Blog Post</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/landing']\">\n                            <i class=\"nc-icon nc-spaceship\"></i>&nbsp; Landing</a>\n                    </div>\n                </div> -->\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map