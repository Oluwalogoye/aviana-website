import React from 'react'
import { ReactNode, useEffect, useState } from 'react';

const ScrollToTop = ({ children }: { children: ReactNode }) => {
  const [currentPath, setCurrentPath] = useState<string | null>(null);

  useEffect(() => {
    // Check if window is defined to avoid SSR issues
    if (typeof window !== "undefined") {
      // Check if the path has changed
      if (currentPath !== window.location.pathname) {
        setCurrentPath(window.location.pathname);
        window.scrollTo(0, 0); // Scroll to top
      }
    }
  }, [currentPath]);

  return <>{children}</>;
};

export default ScrollToTop;