"use client";
import React from "react";

export default function Logo() {
  return (
    <div className="w-[50%]  ">
      <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
        {/* Transparent background - no background rect */}

        {/* Logo Mark - Coffee Bean */}
        <g transform="translate(300, 80)" fill="currentColor">
          {/* These are the elements that make up the coffee bean emblem */}

          {/* Main oval outline */}
          <ellipse
            cx="0"
            cy="0"
            rx="30"
            ry="45"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
          />

          {/* Vertical lines */}
          <line
            x1="0"
            y1="-35"
            x2="0"
            y2="35"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <line
            x1="10"
            y1="-35"
            x2="10"
            y2="35"
            stroke="currentColor"
            strokeWidth="2.5"
          />

          {/* Diagonal lines */}
          <line
            x1="-10"
            y1="0"
            x2="-25"
            y2="-20"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <line
            x1="-10"
            y1="0"
            x2="-25"
            y2="20"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <line
            x1="10"
            y1="0"
            x2="25"
            y2="-20"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <line
            x1="10"
            y1="0"
            x2="25"
            y2="20"
            stroke="currentColor"
            strokeWidth="2.5"
          />

          {/* Small dot */}
          <circle cx="16" cy="0" r="2" fill="currentColor" />
        </g>

        {/* Main Text */}
        <text
          x="300"
          y="175"
          fontFamily="Times New Roman, serif"
          fontSize="45"
          textAnchor="middle"
          fill="currentColor"
          letterSpacing="8"
        >
          KΛHWΛ CΛFE
        </text>

        {/* Raw Text */}
        <text
          x="400"
          y="205"
          fontFamily="Brush Script MT, cursive"
          fontSize="45"
          fill="currentColor"
          fontStyle="italic"
          // color="background"
        >
          Raw
        </text>

        {/* Bottom Line 
        <line
          x1="150"
          y1="240"
          x2="450"
          y2="240"
          stroke="currentColor"
          strokeWidth="1.5"
        />*/}
      </svg>
    </div>
  );
}
