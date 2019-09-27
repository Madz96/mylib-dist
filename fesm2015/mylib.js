import { Injectable, Component, NgModule, Input, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MylibService {
    constructor() { }
}
MylibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
MylibService.ctorParameters = () => [];
/** @nocollapse */ MylibService.ngInjectableDef = defineInjectable({ factory: function MylibService_Factory() { return new MylibService(); }, token: MylibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MylibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MylibComponent.decorators = [
    { type: Component, args: [{
                selector: 'mylib-mylib',
                template: `
    <p>
      mylib works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
MylibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SomethingComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.input);
    }
}
SomethingComponent.decorators = [
    { type: Component, args: [{
                selector: "mylib-something",
                template: `<p>
  something works! so input = {{input}}
</p>`,
                styles: [``]
            },] },
];
/** @nocollapse */
SomethingComponent.ctorParameters = () => [];
SomethingComponent.propDecorators = {
    input: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MylibModule {
}
MylibModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [MylibComponent, SomethingComponent],
                exports: [MylibComponent, SomethingComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { MylibService, MylibComponent, MylibModule, SomethingComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlsaWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL215bGliL2xpYi9teWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9teWxpYi9saWIvbXlsaWIuY29tcG9uZW50LnRzIiwibmc6Ly9teWxpYi9saWIvc29tZXRoaW5nL3NvbWV0aGluZy5jb21wb25lbnQudHMiLCJuZzovL215bGliL2xpYi9teWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNeWxpYlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteWxpYi1teWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBteWxpYiB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTXlsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15bGliLXNvbWV0aGluZ1wiLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBzb21ldGhpbmcgd29ya3MhIHNvIGlucHV0ID0ge3tpbnB1dH19XG48L3A+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFNvbWV0aGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlucHV0O1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlucHV0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTXlsaWJDb21wb25lbnQgfSBmcm9tIFwiLi9teWxpYi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNvbWV0aGluZ0NvbXBvbmVudCB9IGZyb20gXCIuL3NvbWV0aGluZy9zb21ldGhpbmcuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtNeWxpYkNvbXBvbmVudCwgU29tZXRoaW5nQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW015bGliQ29tcG9uZW50LCBTb21ldGhpbmdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE15bGliTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7SUFPRSxpQkFBaUI7OztZQUxsQixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7QUNKRDtJQWFFLGlCQUFpQjs7OztJQUVqQixRQUFRO0tBQ1A7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsTUFBTSxFQUFFLEVBQUU7YUFDWDs7Ozs7Ozs7O0FDVkQ7SUFZRSxpQkFBZ0I7Ozs7SUFFaEIsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pCOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOztLQUVQO2dCQUNILE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzs7OztvQkFFRSxLQUFLOzs7Ozs7O0FDVlI7OztZQUlDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsRUFBRTtnQkFDWCxZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7Z0JBQ2xELE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQzthQUM5Qzs7Ozs7Ozs7Ozs7Ozs7OyJ9