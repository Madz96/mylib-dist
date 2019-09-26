(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('mylib', ['exports', '@angular/core'], factory) :
    (factory((global.mylib = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MylibService = (function () {
        function MylibService() {
        }
        MylibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        MylibService.ctorParameters = function () { return []; };
        /** @nocollapse */ MylibService.ngInjectableDef = i0.defineInjectable({ factory: function MylibService_Factory() { return new MylibService(); }, token: MylibService, providedIn: "root" });
        return MylibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MylibComponent = (function () {
        function MylibComponent() {
        }
        /**
         * @return {?}
         */
        MylibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MylibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mylib-mylib',
                        template: "\n    <p>\n      mylib works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        MylibComponent.ctorParameters = function () { return []; };
        return MylibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SomethingComponent = (function () {
        function SomethingComponent() {
        }
        /**
         * @return {?}
         */
        SomethingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                console.log(this.input);
            };
        SomethingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "mylib-something",
                        template: "<p>\n  something works!\n</p>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        SomethingComponent.ctorParameters = function () { return []; };
        SomethingComponent.propDecorators = {
            input: [{ type: i0.Input }]
        };
        return SomethingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MylibModule = (function () {
        function MylibModule() {
        }
        MylibModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [MylibComponent, SomethingComponent],
                        exports: [MylibComponent]
                    },] },
        ];
        return MylibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.MylibService = MylibService;
    exports.MylibComponent = MylibComponent;
    exports.MylibModule = MylibModule;
    exports.ɵa = SomethingComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlsaWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9teWxpYi9saWIvbXlsaWIuc2VydmljZS50cyIsIm5nOi8vbXlsaWIvbGliL215bGliLmNvbXBvbmVudC50cyIsIm5nOi8vbXlsaWIvbGliL3NvbWV0aGluZy9zb21ldGhpbmcuY29tcG9uZW50LnRzIiwibmc6Ly9teWxpYi9saWIvbXlsaWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTXlsaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXlsaWItbXlsaWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbXlsaWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE15bGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteWxpYi1zb21ldGhpbmdcIixcbiAgdGVtcGxhdGU6IGA8cD5cbiAgc29tZXRoaW5nIHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFNvbWV0aGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlucHV0O1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlucHV0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE15bGliQ29tcG9uZW50IH0gZnJvbSAnLi9teWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU29tZXRoaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9zb21ldGhpbmcvc29tZXRoaW5nLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTXlsaWJDb21wb25lbnQsIFNvbWV0aGluZ0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtNeWxpYkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTXlsaWJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIklucHV0IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7OzJCQUpEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQixpQ0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLDZDQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7OzZCQVZEOzs7Ozs7O0FDQUE7UUFhRTtTQUFnQjs7OztRQUVoQixxQ0FBUTs7O1lBQVI7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekI7O29CQWZGQSxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsUUFBUSxFQUFFLGlDQUdYO3dCQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztxQkFDYjs7Ozs7NEJBRUVDLFFBQUs7O2lDQVhSOzs7Ozs7O0FDQUE7Ozs7b0JBSUNDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFDUjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7d0JBQ2xELE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztxQkFDMUI7OzBCQVREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==