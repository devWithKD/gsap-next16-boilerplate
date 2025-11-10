import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export const textReveal = {
  name: "textReveal",
  defaults: {
    duration: 0.5,
    stagger: 0.05,
  },
  extendTimeline: true,
  effect: (
    targets: HTMLElement | string,
    config: { duration: number; stagger: number },
  ) => {
    let split = new SplitText(targets, { type: "chars" });
    let tl = gsap.timeline();
    return tl.from(split.chars, {
      opacity: 0,
      stagger: config.stagger,
      duration: config.duration,
    });
  },
};
