import { VNode } from 'vue'; // eslint-disable-line
import { ComponentRenderProxy } from '@vue/composition-api'; // eslint-disable-line

declare module '*.tsx' {}

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode;
    // tslint:disable no-empty-interface
    type ElementClass = ComponentRenderProxy;
    interface ElementAttributesProperty {
      $props: any;
    }

    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface IntrinsicAttributes {
      // ['v-if']?: unknown;
      // ['v-else-if']?: unknown;
      // ['v-else']?: unknown;
      // need
      // ['v-show']?: unknown;
      [elem: string]: any;
      // ['v-html']?: unknown;
      // ['v-text']?: unknown;
      // ['v-model']?: unknown;
    }
  }
}
