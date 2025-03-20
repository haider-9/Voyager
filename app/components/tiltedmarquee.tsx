import { useEffect, useRef } from "react";

export default function TiltedMarquee() {
  const words = ["Luxury", "Enjoy", "Explore", "Adventure"];
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeAnimation = () => {
      if (marqueeRef.current) {
        const container = marqueeRef.current;
        const firstChild = container.firstElementChild as HTMLElement;
        
        if (!firstChild) return;
        
        const animationDuration = 100; // seconds
        const containerWidth = container.offsetWidth;
        
        // Clone the content for seamless looping
        const clone = firstChild.cloneNode(true) as HTMLElement;
        container.appendChild(clone);
        
        // Set up animation
        let position = 0;
        const pixelsPerFrame = 2; // Adjust for speed
        
        const animate = () => {
          position -= pixelsPerFrame;
          
          // Reset position when first element is completely out of view
          if (position <= -firstChild.offsetWidth) {
            position = 0;
            container.removeChild(container.firstElementChild as Node);
            container.appendChild(firstChild.cloneNode(true) as Node);
          }
          
          container.style.transform = `translateX(${position}px)`;
          requestAnimationFrame(animate);
        };
        
        requestAnimationFrame(animate);
      }
    };

    marqueeAnimation();
    
    // Cleanup function
    return () => {
      if (marqueeRef.current) {
        marqueeRef.current.style.transform = '';
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="bg-[var(--color-slime)] h-16 w-full absolute" />
      <div className="bg-[var(--color-dark-green)] w-full top-2 relative transform overflow-hidden skew-y-2">
        <div 
          ref={marqueeRef}
          className="whitespace-nowrap text-white text-xl p-4 skew-y-2 inline-flex"
          style={{ willChange: "transform" }}
        >
          <div className="flex flex-row items-center justify-center gap-10">
            {[...Array(4)].map((_, i) =>
              words.map((word, index) => (
                <span key={`${word}-${i}-${index}`} className="mx-5">{word}</span>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
