"use client";

import React, { useEffect } from "react";
import Image from "next/image";

export const InfiniteMovingLogos = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    logo: string;
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  // Define addAnimation as a useCallback hook to avoid creating a new function on every render
  const addAnimation = React.useCallback(() => {
    if (scrollerRef.current) {
      const scrollerWidth = scrollerRef.current.scrollWidth;
      const containerWidth = containerRef.current?.offsetWidth || 0;

      // Clone items if necessary for seamless scrolling
      if (scrollerWidth < containerWidth * 2) {
        const scrollerContent = Array.from(scrollerRef.current.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerRef.current?.appendChild(duplicatedItem);
        });
      }

      setDirection();
      setSpeed();
    }
  }, [direction, speed]); // Add direction and speed to dependencies

  // Ensure this runs only once on mount
  useEffect(() => {
    addAnimation();
  }, [addAnimation]); // Add addAnimation to dependencies

  const setDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "normal" : "reverse"
      );
    }
  };

  const setSpeed = () => {
    if (containerRef.current) {
      switch (speed) {
        case "fast":
          containerRef.current.style.setProperty("--animation-duration", "20s");
          break;
        case "normal":
          containerRef.current.style.setProperty("--animation-duration", "40s");
          break;
        case "slow":
        default:
          containerRef.current.style.setProperty("--animation-duration", "100s");
          break;
      }
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className={`container relative w-full overflow-hidden ${className}`}
      >
        <ul
          ref={scrollerRef}
          className={`flex w-max flex-nowrap gap-4 py-4 animate-scroll ${
            pauseOnHover ? "hover:pause-scroll" : ""
          }`}
        >
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center px-8">
              <Image
                src={item.logo}
                alt={item.name}
                width={100}
                height={100}
                className="w-40 md:w-60"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* CSS goes here */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll var(--animation-duration) linear infinite;
          animation-direction: var(--animation-direction);
        }

        .pause-scroll {
          animation-play-state: paused;
        }

        .container {
          --animation-duration: 100s; /* default duration */
          --animation-direction: normal; /* default direction */
          display: flex;
          align-items: center;
          overflow: hidden;
          width: 100%;
        }
      `}</style>
    </>
  );
};
