import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Logo } from "@/components/logo";

export function SiteBanner({ back = false }: { back?: boolean }) {
  return (
    <header className="w-full border-b border-border">
      <div className="flex h-20 w-full items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        {back && (
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            Voltar
          </Link>
        )}
      </div>
    </header>
  );
}
