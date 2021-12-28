/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface TestingComponent {
    }
    interface TsItem {
    }
    interface TsSlider {
        "displayCount": number;
    }
}
declare global {
    interface HTMLTestingComponentElement extends Components.TestingComponent, HTMLStencilElement {
    }
    var HTMLTestingComponentElement: {
        prototype: HTMLTestingComponentElement;
        new (): HTMLTestingComponentElement;
    };
    interface HTMLTsItemElement extends Components.TsItem, HTMLStencilElement {
    }
    var HTMLTsItemElement: {
        prototype: HTMLTsItemElement;
        new (): HTMLTsItemElement;
    };
    interface HTMLTsSliderElement extends Components.TsSlider, HTMLStencilElement {
    }
    var HTMLTsSliderElement: {
        prototype: HTMLTsSliderElement;
        new (): HTMLTsSliderElement;
    };
    interface HTMLElementTagNameMap {
        "testing-component": HTMLTestingComponentElement;
        "ts-item": HTMLTsItemElement;
        "ts-slider": HTMLTsSliderElement;
    }
}
declare namespace LocalJSX {
    interface TestingComponent {
    }
    interface TsItem {
    }
    interface TsSlider {
        "displayCount"?: number;
    }
    interface IntrinsicElements {
        "testing-component": TestingComponent;
        "ts-item": TsItem;
        "ts-slider": TsSlider;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "testing-component": LocalJSX.TestingComponent & JSXBase.HTMLAttributes<HTMLTestingComponentElement>;
            "ts-item": LocalJSX.TsItem & JSXBase.HTMLAttributes<HTMLTsItemElement>;
            "ts-slider": LocalJSX.TsSlider & JSXBase.HTMLAttributes<HTMLTsSliderElement>;
        }
    }
}
