import { APP_CONSTANTS } from "@/configs/common";

const DevSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto">
        <section className="p-5 md:p-10">
          <h1 className="text-7xl 2xl:text-8xl text-accent-bold w-fit">
            {APP_CONSTANTS.DEVS}
          </h1>
        </section>
        <section className="grid grid-cols-3 md:grid-cols-4 gap-5 p-5 md:p-10"></section>
      </div>
    </section>
  );
};

export default DevSection;
