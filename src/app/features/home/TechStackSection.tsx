import { APP_CONSTANTS } from "@/configs/common";
import TechBubbles from "./TechBubbles";
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiMongodb,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { DottedBackground } from "./DottedBackground";

const TechStackSection = () => {
  const techStacks = [
    { icon: <SiMongodb className="size-16" />, title: "MongoDB" },
    { icon: <SiExpress className="size-16" />, title: "Express" },
    { icon: <SiReact className="size-16" />, title: "React" },
    { icon: <SiNodedotjs className="size-16" />, title: "Node.js" },
    { icon: <SiTypescript className="size-16" />, title: "TypeScript" },
    { icon: <SiTailwindcss className="size-16" />, title: "Tailwind CSS" },
    { icon: <SiPrisma className="size-16" />, title: "Prisma" },
    { icon: <SiVite className="size-16" />, title: "Vite" },
    { icon: <SiFigma className="size-16" />, title: "Figma" },
    { icon: <SiGit className="size-16" />, title: "Git" },
    { icon: <SiDocker className="size-16" />, title: "Docker" },
  ];

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <DottedBackground className="absolute right-0 top-0 w-[30%] h-[50%]" />

      <div className="container mx-auto z-10">
        <section className="p-5 md:p-10">
          <h1 className="text-7xl 2xl:text-8xl text-accent-bold w-fit">
            {APP_CONSTANTS.TECH_STACK}
          </h1>
        </section>
        <section className="grid grid-cols-3 md:grid-cols-4 gap-5 p-5 md:p-10">
          {techStacks.map((tech, index) => (
            <TechBubbles key={index} icon={tech.icon} title={tech.title} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default TechStackSection;
