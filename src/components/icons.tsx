type IconProps = {
  className?: string;
};

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function LayoutIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
      <path d="M3.5 9.5h17" />
      <path d="M9 9.5V21" />
    </svg>
  );
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12.2 2.4 2.4 4.6-5.2" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M19 10.5c0 5.5-7 10.5-7 10.5s-7-5-7-10.5a7 7 0 0 1 14 0Z" />
      <circle cx="12" cy="10.5" r="2.4" />
    </svg>
  );
}

export function PlayCircleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M10.3 9.1v5.8l4.9-2.9Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 12h15" />
      <path d="m13 5.5 6.5 6.5-6.5 6.5" />
    </svg>
  );
}

export function StarSparkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2c.6 4.2 2.1 6.8 6 7.5-3.9.7-5.4 3.3-6 7.5-.6-4.2-2.1-6.8-6-7.5 3.9-.7 5.4-3.3 6-7.5Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6.5 3.5 9 6a1.5 1.5 0 0 1-.2 2L7.5 9.3a12.5 12.5 0 0 0 7.2 7.2l1.3-1.3a1.5 1.5 0 0 1 2-.2l2.5 2.5a1.5 1.5 0 0 1 0 2.1c-.9.9-2.3 1.5-3.6 1.2C11.6 19.7 4.3 12.4 3.3 7.3c-.3-1.3.3-2.7 1.2-3.6a1.5 1.5 0 0 1 2 0Z" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m5 5 14 14" />
      <path d="m19 5-14 14" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 4.5 19.5 19.5" />
      <path d="M19.5 4.5 4.5 19.5" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14 21v-7h2.5l.5-3H14V9.2c0-.9.3-1.5 1.6-1.5H17V5.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H8.5v3H10.8v7Z" />
    </svg>
  );
}
