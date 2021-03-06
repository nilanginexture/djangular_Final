"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var Form_component_1 = require("./form/Form.component");
var header_component_1 = require("./header/header.component");
var django_component_1 = require("./django.component");
var routing_1 = require("./routing");
var aboutus_component_1 = require("./aboutus/aboutus.component");
var Component_1 = require("./Component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                routing_1.AppRoutingModule
            ],
            declarations: [
                Component_1.AppComponent,
                Form_component_1.FormComponent,
                header_component_1.HeaderComponent,
                aboutus_component_1.AboutusComponent,
                django_component_1.DjangoComponent
            ],
            providers: [Component_1.AppComponent],
            bootstrap: [Component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=Module.js.map