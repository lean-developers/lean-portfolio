import HeroSection from "@/features/home/HeroSection";
import DotNavigation from "@/features/navigation/DotNavigation";
import React from "react";
import useScrollSections from "@/hooks/useScrollSections";
import ContactSection from "@/features/home/ContactSection";
import ServicesSection from "@/features/home/ServicesSection";
import TechStackSection from "@/features/home/TechStackSection";

const HomePage = () => {
  const sectionComponents = [
    { id: "hero", component: <HeroSection /> },
    { id: "services", component: <ServicesSection /> },
    { id: "tech", component: <TechStackSection /> },
    { id: "contact", component: <ContactSection /> },
  ];

  const { activeSection, goToSection } = useScrollSections(
    sectionComponents.length
  );

  return (
    <>
      <DotNavigation
        sections={sectionComponents.map((section) => section.id)}
        activeSection={activeSection}
        onDotClick={goToSection}
      />

      <div
        className="transition-transform duration-700 ease-in-out"
        style={{
          height: `${sectionComponents.length * 100}vh`,
          transform: `translateY(-${activeSection * 100}vh)`,
        }}
      >
        {sectionComponents.map((section) => (
          <React.Fragment key={section.id}>{section.component}</React.Fragment>
        ))}
      </div>
    </>
  );
};

export default HomePage;
