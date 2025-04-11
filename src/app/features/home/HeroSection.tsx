import { APP_CONSTANTS } from "@/configs/common";
import { DottedBackground } from "./DottedBackground";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <DottedBackground className="absolute right-0 top-1/2 -translate-y-1/2 w-[30%] h-[50%]" />

      <div className="container relative z-10 p-3 space-y-10">
        <h1 className="text-7xl 2xl:text-8xl text-accent-bold w-fit">
          {APP_CONSTANTS.APP_NAME}
        </h1>
        <p className="text-2xl md:text-3xl text-secondary">
          {APP_CONSTANTS.GROUP_DESCRIPTION}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
