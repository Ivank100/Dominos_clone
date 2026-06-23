import logo from "./assets/dominos.png";
import CategorySlider from "./components/CategorySlider";
import HeroSlider from "./components/HeroSlider";

export default function App() {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div className="flex">
          <svg
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
          <img src={logo} alt="Dominos logo" className="h-24 w-auto"></img>
        </div>
        <div className="flex items-center gap-2">
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
          <p>Eng</p>
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
      <HeroSlider />
      <CategorySlider />
    </>
  );
}
