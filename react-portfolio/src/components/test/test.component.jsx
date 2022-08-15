import { useRef, useEffect } from "react";

import styles from "./test.styles.scss";

/**
 *
 * @param {SVGRect} svgViewBox
 * @param {DOMRect} svgDimension
 * @returns {(a: number, b: number) => [x: number, y: number]}
 */
const createTranslator = (svgViewBox, svgDimension) => (a, b) => {
  if (!svgViewBox || !svgDimension) {
    console.warn("No dimension provided.");
    return [a, b];
  }
  const { width: viewBoxWidth, height: viewBoxHeight } = svgViewBox;
  const { top, left, width: svgWidth, height: svgHeight } = svgDimension;

  const x = ((a - left) * viewBoxWidth) / svgWidth;
  const y = ((b - top) * viewBoxHeight) / svgHeight;

  return [x, y];
};

/**
 * @param {HTMLElement} $el
 * @param {number} x
 * @param {number} y
 */
const followCursor = ($el, x, y) => {
  $el.setAttribute("cx", x);
  $el.setAttribute("cy", y);
};

export const Test = () => {
  const combinedRefs = useRef({
    $container: null,
    $innerDot: null,
    $outerDot: null
  });

  useEffect(() => {
    const { $container, $innerDot, $outerDot } = combinedRefs.current;
    if (!$container || !$innerDot || !$outerDot) {
      return;
    }

    let translateCoords = (...args) => args;

    /* debounce this in a real app */
    const getDimensions = () => {
      const svgDimension = 500;
      const svgViewBox = 1000;
      translateCoords = createTranslator(svgViewBox, svgDimension);
    };

    getDimensions();

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const [x, y] = translateCoords(clientX, clientY);
      followCursor($innerDot, x, y);
      followCursor($outerDot, x, y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", getDimensions);
    window.addEventListener("scroll", getDimensions);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", getDimensions);
      window.removeEventListener("scroll", getDimensions);
    };
  });

  return (
    <svg
      ref={($el) => (combinedRefs.current.$container = $el)}
      className={styles.svg}
      viewBox="0 0 500 500"
    >
      <defs>
        <linearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stop-color="plum">
            <animate
              attributeName="stop-color"
              values="plum; violet; plum"
              dur="3s"
              repeatCount="indefinite"
            ></animate>
          </stop>

          <stop offset="100%" stop-color="mediumpurple">
            <animate
              attributeName="stop-color"
              values="mediumpurple; mediumorchid; mediumpurple"
              dur="3s"
              repeatCount="indefinite"
            ></animate>
          </stop>
        </linearGradient>

        <linearGradient id="gradient2" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stop-color="turquoise"></stop>
          <stop offset="100%" stop-color="deepskyblue"></stop>
        </linearGradient>

        <clipPath id="clip-text">
          <text id="text" x="20" y="1.25em"> {/* x,y are positions */}
            <tspan>A</tspan>
          </text>
          <text x="20" dy="3.25em">
           Amal Saju Kalarickal
          </text>
        </clipPath>
      </defs>

      <circle
        className={styles.dot}
        ref={($el) => (combinedRefs.current.$outerDot = $el)}
        r="40"
        fill="navy"
      ></circle>
      <use href="#text" stroke="url(#gradient)" strokeWidth="0.5" fill="none" />

      <g clipPath="url(#clip-text)">
        <circle
          className={styles.dot}
          ref={($el) => (combinedRefs.current.$innerDot = $el)}
          r="40"
          fill="url(#gradient2)"
        ></circle>
      </g>
    </svg>
  );
};

export default Test;
