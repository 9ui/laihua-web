declare module '*.vue' {
  import { defineComponent } from '@vue/composition-api';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.less' {
  const content: {
    readonly [className: string]: string;
  };
  export default content;
}

declare module '*.json' {
  const content: any | any[];
  export default content;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
