export default function VerificationBadge() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="vb" x1="0" y1="0" x2="24" y2="24">
          <stop stopColor="#00d4ff" />
          <stop offset="1" stopColor="#7b61ff" />
        </linearGradient>
      </defs>
      <path
        d="M12 2L21 7v6.5c0 4.5-9 8.5-9 8.5s-9-4-9-8.5V7l9-5Z"
        stroke="url(#vb)"
        strokeWidth="1.3"
        strokeLinejoin="round"
        fill="rgba(0,212,255,0.06)"
      />
      <path
        d="M8 12.5l2.5 2.5 5-5.5"
        stroke="url(#vb)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
