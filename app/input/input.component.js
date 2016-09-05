"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MyNumberComponent = (function () {
    function MyNumberComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MyNumberComponent.prototype, "mynumber", void 0);
    MyNumberComponent = __decorate([
        core_1.Component({
            selector: 'my-number',
            template: '<div><p> The next number is {{ mynumber + 1}} </p></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], MyNumberComponent);
    return MyNumberComponent;
}());
exports.MyNumberComponent = MyNumberComponent;
var MyNumberRootComponent = (function () {
    function MyNumberRootComponent() {
    }
    MyNumberRootComponent = __decorate([
        core_1.Component({
            selector: 'MyNumberRootComponent',
            directives: [MyNumberComponent],
            template: "<my-number [mynumber]=\"42\"></my-number>"
        }), 
        __metadata('design:paramtypes', [])
    ], MyNumberRootComponent);
    return MyNumberRootComponent;
}());
exports.MyNumberRootComponent = MyNumberRootComponent;
//# sourceMappingURL=input.component.js.map