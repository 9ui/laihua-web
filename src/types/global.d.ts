declare interface Fn<T = any> {
  (...arg: T[]): T;
}
declare type Nullable<T> = T | null;

declare type CustomizedHTMLElement<T> = HTMLElement & T;

declare interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
  $el: T;
}

declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null;
