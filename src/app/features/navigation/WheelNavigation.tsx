import React from "react";

interface WheelNavigationProps {
  sections: string[];
  activeSection: number;
  onDotClick: (index: number) => void;
}

const WheelNavigation: React.FC<WheelNavigationProps> = ({
  sections,
  activeSection,
  onDotClick,
}) => {
  const radius = 100; // Radius of the semi-circle
  const angleStep = 180 / (sections.length - 1); // 180 degrees for half wheel

  return (
    <div
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50"
      style={{
        width: `${2 * radius}px`,
        height: `${radius}px`,
        borderRadius: "50%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 bottom-0 transform rotate-180 origin-bottom"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        {sections.map((section, index) => {
          const angle = angleStep * index - 90; // Adjust the angle for each section
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={section}
              onClick={() => onDotClick(index)}
              style={{
                position: "absolute",
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: `translate(-50%, -50%)`,
                width: "20px",
                height: "20px",
                backgroundColor: activeSection === index ? "blue" : "gray",
                borderRadius: "50%",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WheelNavigation;
