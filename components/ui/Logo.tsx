import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-light shadow-soft">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6 text-white"
          aria-hidden="true"
        >
          <path
            d="M4 7.5C4 6.12 5.12 5 6.5 5H14a4 4 0 0 1 0 8H6.5A2.5 2.5 0 0 0 4 15.5V7.5Z"
            fill="currentColor"
            opacity="0.55"
          />
          <path
            d="M4 11.5A2.5 2.5 0 0 1 6.5 9H15a4 4 0 0 1 0 8H6.5A2.5 2.5 0 0 1 4 14.5v-3Z"
            fill="currentColor"
          />
        </svg>
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-bold tracking-tight text-[rgb(var(--foreground))]">
            Business<span className="text-brand-light">Soft</span>
          </span>
          <span className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-muted">
            Soluciones CRM
          </span>
        </span>
      )}
    </span>
  );
}
