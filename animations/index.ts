import { initPreloader } from "./preloader";
import { initAboutOverview } from "./aboutOverview";
import { initWorkAnimation } from "./work";
import { initService } from "./service";
import { initAbout } from "./about";
import { initServiceFour } from "./serviceFour";
import { initProcess } from "./process";
import { initOverviewThree } from "./overviewThree";
import { initProject } from "./project";
import { initVanillaTilt } from "./vanillaTilt";
import { initParallaxImage } from "./parallaxImage";
import { initNewsletterUnderline } from "./newsletterUnderline";
import { initScaleUp } from "./scaleUp";
import { initScrollAnimations } from "./scrollAnimations";
import { initSplitTitle } from "./splitTitle";
import { initSplitTitleLg } from "./splitTitleLg";
import { initSplitTitleSd } from "./splitTitleSd";
import { initSplitTitleColor } from "./splitTitleColor";
import { initHoverImage } from "./hoverImage";
import { initSmoothScroll } from "./smoothScroll";

export function initAnimations(): () => void {
  let cleanupAnimations = () => {};

  const cleanupAboutOverview = initAboutOverview();
  const cleanupWork = initWorkAnimation();
  const cleanupService = initService();
  const cleanupAbout = initAbout();
  const cleanupServiceFour = initServiceFour();
  const cleanupProcess = initProcess();
  const cleanupOverviewThree = initOverviewThree();
  const cleanupProject = initProject();
  const cleanupTilt = initVanillaTilt();
  const cleanupParallax = initParallaxImage();
  const cleanupScaleUp = initScaleUp();
  const cleanupScrollAnimations = initScrollAnimations();
  const cleanupHoverImage = initHoverImage();
  const cleanupSmoothScroll = initSmoothScroll();

  initPreloader({
    onComplete: () => {
      const cleanupNewsletter = initNewsletterUnderline();
      const cleanupTitle = initSplitTitle();
      const cleanupTitleLg = initSplitTitleLg();
      const cleanupTitleSd = initSplitTitleSd();
      const cleanupTitleColor = initSplitTitleColor();

      cleanupAnimations = () => {
        cleanupAboutOverview?.();
        cleanupWork?.();
        cleanupService?.();
        cleanupAbout?.();
        cleanupServiceFour?.();
        cleanupProcess?.();
        cleanupOverviewThree?.();
        cleanupProject?.();
        cleanupTilt?.();
        cleanupParallax?.();
        cleanupNewsletter?.();
        cleanupScaleUp?.();
        cleanupScrollAnimations?.();
        cleanupTitle?.();
        cleanupTitleLg?.();
        cleanupTitleSd?.();
        cleanupTitleColor?.();
        cleanupHoverImage?.();
        cleanupSmoothScroll?.();
      };
    },
  });

  return () => {
    cleanupAnimations();
  };
}
