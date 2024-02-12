import React, { useEffect } from "react";
import "/src/assets/loader/loader.css";
type Props = {};

const Loader = () => {
  return (
    <div id="bg">
      <svg width="270" height="270" viewBox="0 0 270 270" fill="none">
        <symbol id="container">
          {" "}
          <circle cx="135" cy="125" r="110" stroke="#508D69" stroke-width="6" />
        </symbol>
        <symbol id="liquid">
          <path
            d="M0 71.0344C0 11.7849 73.6393 -15.5736 112.324 29.3037V29.3037C134.143 54.6151 171.778 58.8457 198.672 39.0103L206.818 33.002C231.973 14.4496 266.21 14.1976 291.635 32.3779V32.3779C318.355 51.4837 354.605 50.1371 379.833 29.1014L397.314 14.5252C414.946 -0.176172 439.21 -4.04721 460.54 4.43827V4.43827C484.364 13.9156 500 36.963 500 62.6028V399H0V71.0344Z"
            fill="#183D3D"
            fill-opacity="0.5"
          />
        </symbol>
        <symbol id="bubbles">
          <path
            d="M91 10C91 15.5228 86.5228 20 81 20C75.4772 20 71 15.5228 71 10C71 4.47715 75.4772 0 81 0C86.5228 0 91 4.47715 91 10Z"
            fill="#00703C"
          />
          <path
            d="M20 38C20 43.5228 15.5228 48 10 48C4.47715 48 0 43.5228 0 38C0 32.4772 4.47715 28 10 28C15.5228 28 20 32.4772 20 38Z"
            fill="#CEF4FD"
          />
          <circle cx="58.5" cy="58.5" r="7.5" fill="#ffff" />
          <circle cx="110.5" cy="78.5" r="7.5" fill="#CEF4FD" />
          <circle cx="131" cy="33" r="5" fill="#0C134F" />
          <circle cx="37" cy="111" r="5" fill="#CEF4FD" />
        </symbol>
        <defs>
          <clipPath id="circleClip">
            <circle cx="135" cy="125" r="110" />
          </clipPath>
        </defs>

        <g className="loader">
          <g id="liquid1-clip" clip-path="url(#circleClip)">
            <g>
              <use id="liquid1" href="#liquid" transform="translate(0,180)" />
              <use id="bubble1" href="#bubbles" transform="translate(60,100)" />
            </g>
          </g>
          <g id="liquid2-clip" clip-path="url(#circleClip)">
            <g>
              <use
                id="liquid2"
                href="#liquid"
                fill-opacity="0.15"
                transform="translate(0,175)"
              />
              <use id="bubble2" href="#bubbles" transform="translate(60,100)" />
            </g>
          </g>
          <use href="#container" />
        </g>
      </svg>
      <h2 className="loader-header">Magic Brewing ...</h2>
    </div>
  );
};

export default Loader;
