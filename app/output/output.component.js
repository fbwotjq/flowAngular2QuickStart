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
var Zippy = (function () {
    function Zippy() {
        this.visible = true;
        this.open = new core_1.EventEmitter();
        this.close = new core_1.EventEmitter();
    }
    Zippy.prototype.toggle = function () {
        this.visible = !this.visible;
        if (this.visible) {
            this.open.emit(null);
        }
        else {
            this.close.emit(null);
        }
    };
    Zippy.prototype.ngOnInit = function () {
        console.log("call ngOnInit in Zippy Component");
        // Properties are resolved and things like
        // this.mapWindow and this.mapControls
        // had a chance to resolve from the
        // two child components <map-window> and <map-controls>
    };
    Zippy.prototype.ngOnDestroy = function () {
        console.log("call ngOnDestroy in Zippy Component");
        // Speak now or forever hold your peace
    };
    Zippy.prototype.ngDoCheck = function () {
        console.log("call ngDoCheck in Zippy Component");
        // Custom change detection
    };
    Zippy.prototype.ngOnChanges = function (changes) {
        console.log("call ngOnChanges in Zippy Component");
        // Called right after our bindings have been checked but only
        // if one of our bindings has changed.
        //
        // changes is an object of the format:
        // {
        //   'prop': PropertyUpdate
        // }
    };
    Zippy.prototype.ngAfterContentInit = function () {
        console.log("call ngAfterContentInit in Zippy Component");
        // Component content has been initialized
    };
    Zippy.prototype.ngAfterContentChecked = function () {
        console.log("call ngAfterContentChecked in Zippy Component");
        // Component content has been Checked
    };
    Zippy.prototype.ngAfterViewInit = function () {
        console.log("call ngAfterViewInit in Zippy Component");
        // Component views are initialized
    };
    Zippy.prototype.ngAfterViewChecked = function () {
        console.log("call ngAfterViewChecked in Zippy Component");
        // Component views have been checked
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Zippy.prototype, "open", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Zippy.prototype, "close", void 0);
    Zippy = __decorate([
        core_1.Component({
            selector: 'zippy',
            template: "\n\t<div class=\"zippy\">\n\t\t<button (click)=\"toggle()\">\uB20C\uB7EC\uBD10 ~</button>\n\t\t<div [hidden]=\"!visible\">\n\t\t\t@Output \uB370\uCF54\uB808\uC774\uD130\uB97C \uD1B5\uD55C \uC774\uBCA4\uD2B8 \uB3D9\uC801 \uBC14\uC778\uB529 \n\t\t</div>\n\t</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], Zippy);
    return Zippy;
}());
exports.Zippy = Zippy;
//# sourceMappingURL=output.component.js.map