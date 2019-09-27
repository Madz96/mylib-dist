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
                        template: "<p>\n  something works! so input = {{input}}\n</p>",
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
    exports.SomethingComponent = SomethingComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlsaWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9teWxpYi9saWIvbXlsaWIuc2VydmljZS50cyIsIm5nOi8vbXlsaWIvbGliL215bGliLmNvbXBvbmVudC50cyIsIm5nOi8vbXlsaWIvbGliL3NvbWV0aGluZy9zb21ldGhpbmcuY29tcG9uZW50LnRzIiwibmc6Ly9teWxpYi9saWIvbXlsaWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTXlsaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXlsaWItbXlsaWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbXlsaWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE15bGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteWxpYi1zb21ldGhpbmdcIixcbiAgdGVtcGxhdGU6IGA8cD5cbiAgc29tZXRoaW5nIHdvcmtzISBzbyBpbnB1dCA9IHt7aW5wdXR9fVxuPC9wPmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBTb21ldGhpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpbnB1dDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5pbnB1dCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNeWxpYkNvbXBvbmVudCB9IGZyb20gJy4vbXlsaWIuY29tcG9uZW50JztcbmltcG9ydCB7IFNvbWV0aGluZ0NvbXBvbmVudCB9IGZyb20gJy4vc29tZXRoaW5nL3NvbWV0aGluZy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW015bGliQ29tcG9uZW50LCBTb21ldGhpbmdDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTXlsaWJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE15bGliTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJJbnB1dCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OzsyQkFKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIsaUNBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSw2Q0FJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7Ozs2QkFWRDs7Ozs7OztBQ0FBO1FBWUU7U0FBZ0I7Ozs7UUFFaEIscUNBQVE7OztZQUFSO2dCQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCOztvQkFkRkEsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFFBQVEsRUFBRSxvREFFUDt3QkFDSCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ2I7Ozs7OzRCQUVFQyxRQUFLOztpQ0FWUjs7Ozs7OztBQ0FBOzs7O29CQUlDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO3dCQUNsRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7cUJBQzFCOzswQkFURDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=