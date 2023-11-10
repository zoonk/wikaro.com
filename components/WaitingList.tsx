/**
 * This component uses the Tailwind UI license:
 *
 * https://tailwindui.com/license
 */

import { getDictionary } from "@/dictionaries";
import { Locale } from "@/types";
import WaitingListForm from "./WaitingListForm";

interface WaitingListProps {
  locale: Locale;
}

export default async function WaitingList({ locale }: WaitingListProps) {
  const t = await getDictionary(locale);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32">
      <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {t.waiting.title}
      </h2>

      <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
        {t.waiting.subtitle}
      </p>

      <WaitingListForm t={t.waiting} />

      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient
            id="759c1415-0410-454c-8f7c-9a820de03641"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(512 512) rotate(90) scale(512)"
          >
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
