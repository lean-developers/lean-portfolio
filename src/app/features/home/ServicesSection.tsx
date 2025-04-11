import { APP_CONSTANTS } from "@/configs/common";
import ServiceCard from "./ServiceCard";
import { FaGlobe, FaLightbulb, FaMobileScreen } from "react-icons/fa6";
import { DottedBackground } from "./DottedBackground";

const services = [
  {
    icon: <FaGlobe className="text-white-bold size-6" />,
    name: "Web Development",
    description:
      "We offer high-quality web development services to bring your ideas to life.",
  },
  {
    icon: <FaMobileScreen className="text-white-bold size-6" />,
    name: "Mobile App Development",
    description:
      "Create user-friendly and scalable mobile applications for all platforms.",
  },
  {
    icon: <FaLightbulb className="text-white-bold size-6" />,
    name: "UI/UX Design",
    description:
      "Design intuitive and beautiful user interfaces and experiences.",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <DottedBackground className="absolute left-0 top-1/2 -translate-y-1/2 w-[30%] h-[50%]" />

      <div className="container mx-auto z-10">
        <section className="p-5 md:p-10">
          <h1 className="text-7xl 2xl:text-8xl text-accent-bold w-fit">
            {APP_CONSTANTS.SERVICES}
          </h1>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5 md:p-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default ServicesSection;
