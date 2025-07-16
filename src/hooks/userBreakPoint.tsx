import { useState, useEffect } from "react";

export const useBreakpoint = () =>{
  const [breakpoint, setBreakpoint] = useState("base");

  useEffect(() => {
    const updateBreakpoint = () => {
      const w = window.innerWidth;
      if (w >= 1024) setBreakpoint("lg");
      else if (w >= 768) setBreakpoint("md");
      else if (w >= 640) setBreakpoint("sm");
      else setBreakpoint("base");
    };
    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
}
