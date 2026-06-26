import {
  siNextdotjs,
  siReact,
  siTypescript,
  siTailwindcss,
  siShadcnui,
  siSupabase,
  siPostgresql,
  siNodedotjs,
} from "simple-icons";

export const techs = [
  { name: "Next.js", icon: siNextdotjs },
  { name: "React", icon: siReact },
  { name: "TypeScript", icon: siTypescript },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "shadcn/ui", icon: siShadcnui },
  { name: "Supabase", icon: siSupabase },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "Node.js", icon: siNodedotjs },
];

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
