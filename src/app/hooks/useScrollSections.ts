import { useState, useEffect, useRef } from "react";

const useScrollSections = (totalSections: number) => {
  const [activeSection, setActiveSection] = useState(0);
  const isScrollingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const goToNextSection = () => {
    if (activeSection < totalSections - 1 && !isScrollingRef.current) {
      isScrollingRef.current = true;
      setActiveSection(activeSection + 1);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 700);
    }
  };

  const goToPrevSection = () => {
    if (activeSection > 0 && !isScrollingRef.current) {
      isScrollingRef.current = true;
      setActiveSection(activeSection - 1);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 700);
    }
  };

  const goToSection = (index: number) => {
    if (index >= 0 && index < totalSections && !isScrollingRef.current) {
      isScrollingRef.current = true;
      setActiveSection(index);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 700);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrollingRef.current) return;

      if (activeSection === 0 && e.deltaY < 0) return;
      if (activeSection === totalSections - 1 && e.deltaY > 0) return;

      if (e.deltaY > 0) {
        goToNextSection();
      } else if (e.deltaY < 0) {
        goToPrevSection();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeSection]);

  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrollingRef.current) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (activeSection === 0 && diff < 0) return;
      if (activeSection === totalSections - 1 && diff > 0) return;

      if (diff > 50) {
        goToNextSection();
      } else if (diff < -50) {
        goToPrevSection();
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    const preventDefaultScroll = (e: TouchEvent) => {
      e.preventDefault();
    };

    document.addEventListener("touchmove", preventDefaultScroll, {
      passive: false,
    });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchmove", preventDefaultScroll);
    };
  }, [activeSection]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrollingRef.current) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        goToNextSection();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        goToPrevSection();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSection]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return { activeSection, goToNextSection, goToPrevSection, goToSection };
};

export default useScrollSections;
