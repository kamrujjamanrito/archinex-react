declare module "vanilla-tilt" {
  export interface TiltOptions {
    reverse?: boolean;
    max?: number;
    startX?: number;
    startY?: number;
    perspective?: number;
    easing?: string;
    scale?: number;
    speed?: number;
    transition?: boolean;
    axis?: "x" | "y";
    glare?: boolean;
    "max-glare"?: number;
    reset?: boolean;
    gyroscope?: boolean;
    gyroscopeMinAngleX?: number;
    gyroscopeMaxAngleX?: number;
    gyroscopeMinAngleY?: number;
    gyroscopeMaxAngleY?: number;
  }

  export interface TiltInstance {
    destroy(): void;
  }

  interface VanillaTiltStatic {
    init(
      elements: HTMLElement | NodeListOf<HTMLElement>,
      settings?: TiltOptions,
    ): void;
  }

  const VanillaTilt: VanillaTiltStatic;

  export default VanillaTilt;
}
