import * as simpleIcons from "simple-icons";

export function resolveIcon(iconSlug: string): { path: string } {
  const icon = (simpleIcons as unknown as Record<string, { path: string }>)[
    iconSlug
  ];
  return icon ?? { path: "" };
}

export function TechIcon({
  icon,
  className,
}: {
  icon: { path: string };
  className?: string;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}
