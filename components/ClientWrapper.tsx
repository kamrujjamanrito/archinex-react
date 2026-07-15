"use client";
import dynamic from "next/dynamic";

const PhosphorLoader = dynamic(() => import("./widgets/PhosphorLoader"), {
  ssr: false,
});
const AnimatedButton = dynamic(() => import("./widgets/AnimatedButton"), {
  ssr: false,
});
const NiceSelectWrapper = dynamic(() => import("./widgets/NiceSelectWrapper"), {
  ssr: false,
});
const CustomCursor = dynamic(() => import("./widgets/CustomCursor"), {
  ssr: false,
});
const ScrollProgress = dynamic(() => import("./widgets/ScrollProgress"), {
  ssr: false,
});
const ThemeSwitcher = dynamic(() => import("./widgets/ThemeSwitcher"), {
  ssr: false,
});
const CustomAnimations = dynamic(() => import("./widgets/CustomAnimations"), {
  ssr: false,
});

const ClientWrapper = () => {
  return (
    <>
      <PhosphorLoader />
      <AnimatedButton />
      <NiceSelectWrapper />
      <CustomCursor />
      <ScrollProgress />
      <ThemeSwitcher />
      <CustomAnimations />
    </>
  );
};

export default ClientWrapper;
