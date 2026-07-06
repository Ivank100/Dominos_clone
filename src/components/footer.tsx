export default function Footer() {
  return (
    <div className="mt-auto">
      <div
        className="flex flex-col items-center p-4 gap-5 text-white"
        style={{ borderTop: "5px solid #9d2235", backgroundColor: "#53565a" }}
      >
        <div className="flex justify-around w-full p-4 md:justify-center md: gap-6">
          {/* Facebook */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>

          {/* Instagram */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="5"
              ry="5"
              strokeWidth="2"
            />
            <circle cx="12" cy="12" r="4" strokeWidth="2" />
            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              fill="currentColor"
              stroke="none"
            />
          </svg>

          {/* X (Twitter) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>
        <div>
          <a className="text-xs"> Privacy Policy</a>
        </div>
        <div className="text-xs">© 2023 Domino's IP Holder LLC , Domino's</div>
      </div>
    </div>
  );
}
