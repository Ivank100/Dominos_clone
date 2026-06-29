import logo from "../assets/dominos.png";
import { useState } from "react";
export default function Navbar({
  sethamburger,
}: {
  sethamburger: (val: boolean) => void;
}) {
  const [lang, setLang] = useState("Eng");
  const [langbox, setlangbox] = useState(false);
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex">
        <svg
          onClick={() => sethamburger(true)}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="flex">
        <img src={logo} alt="Dominos logo" className="h-24 w-auto" />
      </div>
      <div className="flex items-center gap-2 relative">
        <div className="cursor-pointer" onClick={() => setlangbox(!langbox)}>
          {lang === "Eng" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 30"
              width="30"
              height="15"
            >
              <clipPath id="flag-round">
                <rect width="60" height="30" rx="4" ry="4" />
              </clipPath>
              <g clipPath="url(#flag-round)">
                <rect width="60" height="30" fill="#fff" />
                <rect x="25" width="10" height="30" fill="#C8102E" />
                <rect y="10" width="60" height="10" fill="#C8102E" />
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 900 600"
              width="30"
              height="20"
            >
              <rect width="900" height="600" fill="#A51931" />
              <rect width="900" height="400" y="100" fill="#F4F5F8" />
              <rect width="900" height="200" y="200" fill="#2D2A4A" />
            </svg>
          )}
        </div>
        {langbox && (
          <div className="absolute top-20 right-0 bg-white shadow-md p-5 rounded-xl z-10 flex flex-col gap-2">
            <div
              onClick={() => {
                setLang("Eng");
                setlangbox(false);
              }}
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 30"
                width="30"
                height="15"
              >
                <clipPath id="flag-round-eng">
                  <rect width="60" height="30" rx="4" ry="4" />
                </clipPath>
                <g clipPath="url(#flag-round-eng)">
                  <rect width="60" height="30" fill="#fff" />
                  <rect x="25" width="10" height="30" fill="#C8102E" />
                  <rect y="10" width="60" height="10" fill="#C8102E" />
                </g>
              </svg>
              <p>Eng</p>
            </div>
            <div className="border-b border-gray-300"> </div>
            <div
              onClick={() => {
                setLang("Tha");
                setlangbox(false);
              }}
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-3"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 900 600"
                width="30"
                height="20"
              >
                <rect width="900" height="600" fill="#A51931" />
                <rect width="900" height="400" y="100" fill="#F4F5F8" />
                <rect width="900" height="200" y="200" fill="#2D2A4A" />
              </svg>
              <p>Tha</p>
            </div>
          </div>
        )}
        {lang}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8" strokeWidth={2} />
          <path strokeLinecap="round" strokeWidth={2} d="M21 21l-4.35-4.35" />
        </svg>
      </div>
    </div>
  );
}
