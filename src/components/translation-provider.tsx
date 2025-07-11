// Translation provider is no longer needed with server-side translations
// Components now receive translations as props directly from server-side page components

interface TranslationProviderProps {
  children: React.ReactNode;
  locale: string;
}

export default function TranslationProvider({
  children,
  locale,
}: TranslationProviderProps) {
  // Simply pass through children - no client-side translation needed
  return <>{children}</>;
}