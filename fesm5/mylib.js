import { Injectable, Component, NgModule, Input, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MylibService = /** @class */ (function () {
    function MylibService() {
    }
    MylibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    MylibService.ctorParameters = function () { return []; };
    /** @nocollapse */ MylibService.ngInjectableDef = defineInjectable({ factory: function MylibService_Factory() { return new MylibService(); }, token: MylibService, providedIn: "root" });
    return MylibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MylibComponent = /** @class */ (function () {
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
        { type: Component, args: [{
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
var SomethingComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: "mylib-something",
                    template: "<p>\n  something works! so input = {{input}}\n</p>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    SomethingComponent.ctorParameters = function () { return []; };
    SomethingComponent.propDecorators = {
        input: [{ type: Input }]
    };
    return SomethingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MylibModule = /** @class */ (function () {
    function MylibModule() {
    }
    MylibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [MylibComponent, SomethingComponent],
                    exports: [MylibComponent, SomethingComponent]
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

export { MylibService, MylibComponent, MylibModule, SomethingComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlsaWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL215bGliL2xpYi9teWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9teWxpYi9saWIvbXlsaWIuY29tcG9uZW50LnRzIiwibmc6Ly9teWxpYi9saWIvc29tZXRoaW5nL3NvbWV0aGluZy5jb21wb25lbnQudHMiLCJuZzovL215bGliL2xpYi9teWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNeWxpYlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteWxpYi1teWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBteWxpYiB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTXlsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15bGliLXNvbWV0aGluZ1wiLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBzb21ldGhpbmcgd29ya3MhIHNvIGlucHV0ID0ge3tpbnB1dH19XG48L3A+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFNvbWV0aGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlucHV0O1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlucHV0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTXlsaWJDb21wb25lbnQgfSBmcm9tIFwiLi9teWxpYi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNvbWV0aGluZ0NvbXBvbmVudCB9IGZyb20gXCIuL3NvbWV0aGluZy9zb21ldGhpbmcuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtNeWxpYkNvbXBvbmVudCwgU29tZXRoaW5nQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW015bGliQ29tcG9uZW50LCBTb21ldGhpbmdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE15bGliTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3VCQUpEOzs7Ozs7O0FDQUE7SUFhRTtLQUFpQjs7OztJQUVqQixpQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsNkNBSVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7eUJBVkQ7Ozs7Ozs7QUNBQTtJQVlFO0tBQWdCOzs7O0lBRWhCLHFDQUFROzs7SUFBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pCOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLG9EQUVQO29CQUNILE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDYjs7Ozs7d0JBRUUsS0FBSzs7NkJBVlI7Ozs7Ozs7QUNBQTs7OztnQkFJQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO29CQUNsRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7aUJBQzlDOztzQkFSRDs7Ozs7Ozs7Ozs7Ozs7OyJ9