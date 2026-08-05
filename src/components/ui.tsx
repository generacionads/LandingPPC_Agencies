import { ReactNode } from "react";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-brand-purple/25 bg-brand-purple/5 px-4 py-1.5 text-sm font-medium text-brand-purple">
      {children}
    </span>
  );
}

export function PillButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "pill-shadow inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base transition-colors duration-300";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-brand-purple"
      : "bg-white text-black border border-black/10 hover:border-brand-purple hover:text-brand-purple";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignCls}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-lg leading-7 text-black/60">{description}</p>
      ) : null}
    </div>
  );
}
