type DotNavigationProps = {
  sections: string[];
  activeSection: number;
  onDotClick: (index: number) => void;
};

const DotNavigation = ({
  sections,
  activeSection,
  onDotClick,
}: DotNavigationProps) => {
  return (
    <div className="hidden md:block fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => onDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to ${section} section`}
          />
        ))}
      </div>
    </div>
  );
};

export default DotNavigation;
