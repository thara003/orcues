import React from "react";

export default function Footerv2() {
  return (
    <div className="z-10 flex h-20 items-center justify-center space-x-12 border-t border-gray-700">
      <a href="https://twitter.com/dubdotsh" target="_blank" rel="noreferrer">
        <span className="sr-only">Twitter</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 248 204"
          className="h-6 w-6 text-gray-600 hover:text-white"
        >
          <path
            fill="currentColor"
            d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
          ></path>
        </svg>
      </a>
      <a href="/">
        <span className="sr-only">Dub.sh Logo</span>
        <svg
          width="191"
          height="191"
          fill="currentColor"
          viewBox="0 0 191 191"
          className="h-7 w-7 text-gray-600 hover:text-white"
        >
          <g clip-path="url(#clip0_928_108)">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M122-14h22v27.215a94.965 94.965 0 00-22-9.49V-14zm0 17.725A95.548 95.548 0 0095.5 0C42.757 0 0 42.757 0 95.5S42.757 191 95.5 191 191 148.243 191 95.5c0-35.038-18.869-65.669-47-82.285V148h-22v-7.103A48.776 48.776 0 0195 149c-27.062 0-49-21.938-49-49s21.938-49 49-49a48.773 48.773 0 0127 8.103V3.725z"
              clip-rule="evenodd"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_928_108">
              <rect width="191" height="191" fill="#fff" rx="95.5"></rect>
            </clipPath>
          </defs>
        </svg>
      </a>
      <a
        href="https://github.com/steven-tey/dub"
        target="_blank"
        rel="noreferrer"
      >
        <span className="sr-only">Github</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-6 w-6 text-gray-600 hover:text-white"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
        </svg>
      </a>
    </div>
  );
}
