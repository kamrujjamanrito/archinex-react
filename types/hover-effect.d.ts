declare module "hover-effect" {
  export interface HoverEffectOptions {
    parent: HTMLElement;

    image1: string;
    image2: string;

    displacementImage: string;

    intensity?: number;
    intensity1?: number;
    intensity2?: number;

    speed?: number;
    speedIn?: number;
    speedOut?: number;

    easing?: string;

    angle?: number;
    angle1?: number;
    angle2?: number;

    hover?: boolean;

    imagesRatio?: number;

    video?: boolean;
  }

  export interface HoverEffectInstance {
    next(): void;

    previous(): void;
  }

  export default class HoverEffect implements HoverEffectInstance {
    constructor(options: HoverEffectOptions);

    next(): void;

    previous(): void;
  }
}
