import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/types";

interface HomeProps {
  params: Locale;
}

export default async function Home({ params: { lang } }: HomeProps) {
  const t = await getDictionary(lang);

  return <main>{t.home.title}</main>;
}
