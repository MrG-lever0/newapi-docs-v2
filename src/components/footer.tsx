import { getLocalePath } from '@/lib/i18n';

interface FooterProps {
  lang: string;
}

// ============================================
// Footer Component
// ============================================
export function Footer({ lang }: FooterProps) {
  return (
    <footer className="border-fd-border bg-fd-card/30 mt-auto border-t backdrop-blur-sm">
      <div className="mx-auto max-w-[1400px] px-6 py-6">
        <div className="text-fd-muted-foreground text-xs">
          <p>© 2025 ESEN GLOBAL. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}