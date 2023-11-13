import Hero from "@/components/Hero";
import WaitingList from "@/components/WaitingList";
import { getDictionary } from "@/dictionaries";
import type { LanguageParams } from "@/types";
import type { Metadata } from "next";

interface HomeProps {
  params: LanguageParams;
}

export async function generateMetadata({
  params,
}: HomeProps): Promise<Metadata> {
  const t = await getDictionary(params.lang);

  return {
    title: t.metadata.home.title,
    description: t.metadata.home.description,
    alternates: {
      canonical: "/en",
      languages: { en: "/en", pt: "/pt" },
    },
    twitter: {
      title: t.metadata.home.twitter.title,
      description: t.metadata.home.twitter.description,
      creator: "@zoonkeducation",
    },
  };
}

export default async function Home({ params }: HomeProps) {
  return (
    <main>
      <Hero locale={params.lang} />
      <WaitingList locale={params.lang} />
    </main>
  );
}
