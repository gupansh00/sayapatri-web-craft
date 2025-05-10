
import { useEffect, useRef } from 'react';

interface TypewriterOptions {
  threshold?: number;
  rootMargin?: string;
}

// Make the hook generic to work with different HTML element types
export const useTypewriterEffect = <T extends HTMLElement = HTMLHeadingElement>(options: TypewriterOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const elementRef = useRef<T | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-typewriter");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, rootMargin]);

  return elementRef;
};

export default useTypewriterEffect;
