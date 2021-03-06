/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ClTwo {
        /**
          * Optional value to override `'background-color': 'rgb(250, 235, 215)'` on the content in `slot` "primary-content-panel"
         */
        "primaryBackgroundColor": string;
        /**
          * Optional value to override `'background-color': 'rgb(222, 184, 135)'` on the content in `slot` "supplemental-content-panel"
         */
        "supplementalBackgroundColor": string;
    }
}
declare global {
    interface HTMLClTwoElement extends Components.ClTwo, HTMLStencilElement {
    }
    var HTMLClTwoElement: {
        prototype: HTMLClTwoElement;
        new (): HTMLClTwoElement;
    };
    interface HTMLElementTagNameMap {
        "cl-two": HTMLClTwoElement;
    }
}
declare namespace LocalJSX {
    interface ClTwo {
        /**
          * Optional value to override `'background-color': 'rgb(250, 235, 215)'` on the content in `slot` "primary-content-panel"
         */
        "primaryBackgroundColor"?: string;
        /**
          * Optional value to override `'background-color': 'rgb(222, 184, 135)'` on the content in `slot` "supplemental-content-panel"
         */
        "supplementalBackgroundColor"?: string;
    }
    interface IntrinsicElements {
        "cl-two": ClTwo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cl-two": LocalJSX.ClTwo & JSXBase.HTMLAttributes<HTMLClTwoElement>;
        }
    }
}
