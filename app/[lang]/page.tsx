import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/types";
import type { Metadata } from "next";

interface HomeProps {
  params: Locale;
}

export async function generateMetadata({
  params,
}: HomeProps): Promise<Metadata> {
  const t = await getDictionary(params.lang);

  return {
    title: t.metadata.home.title,
    description: t.metadata.home.description,
    twitter: {
      title: t.metadata.home.twitter.title,
      description: t.metadata.home.twitter.description,
      creator: "@zoonkeducation",
    },
  };
}

export default async function Home() {
  return <main>home</main>;
}
