import { Link } from "@tanstack/react-router";

export function LogoMark({ className = "h-9 w-11" }: { className?: string }) {
  return <img src="/favicon.svg" className={className} alt="" aria-hidden="true" />;
}

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex shrink-0 items-center text-ink-foreground"
      aria-label="AIN General Trading LLC — Home"
    >
      <img
        src="/ain-logo.png"
        className="h-10 w-auto max-w-[60vw] object-contain"
        alt="AIN General Trading LLC"
      />
    </Link>
  );
}
