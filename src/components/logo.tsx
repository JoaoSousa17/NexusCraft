import Image from "next/image";

import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = "default",
}: {
  className?: string;
  size?: "default" | "lg";
}) {
  return (
    <Image
      src="/logo.png"
      alt="NexusCraft"
      width={992}
      height={992}
      priority
      className={cn(
        "h-auto w-auto object-contain",
        size === "lg" ? "max-h-52 md:max-h-80" : "max-h-14",
        className
      )}
    />
  );
}
