"use client";

import { useState } from "react";

const LIST_URL =
  "https://zoonk-waiting-list-default-rtdb.firebaseio.com/wikaro.json";

interface WaitingListFormProps {
  t: { [key: string]: string };
}

type LoadingState = "idle" | "pending" | "success" | "error";

export default function WaitingListForm({ t }: WaitingListFormProps) {
  const [loading, setLoading] = useState<LoadingState>("idle");

  const saveEmail = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading("pending");
    const form = new FormData(event.target as HTMLFormElement);
    const email = form.get("email");
    const args = { method: "POST", body: JSON.stringify({ email }) };

    fetch(LIST_URL, args)
      .then((res) => res.json())
      .then(() => setLoading("success"))
      .catch(() => setLoading("error"));
  };

  return (
    <div className="flex mx-auto mt-10 items-center justify-center max-w-md flex-col gap-y-4">
      <form className="flex w-full gap-x-4" onSubmit={saveEmail}>
        <label htmlFor="email-address" className="sr-only">
          {t.email}
        </label>

        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
          placeholder={t.email_placeholder}
        />

        <button
          type="submit"
          disabled={loading === "pending"}
          className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {t.action}
        </button>
      </form>

      {loading === "success" && <p className="text-green-100">{t.success}</p>}
      {loading === "error" && <p className="text-red-100">{t.error}</p>}
    </div>
  );
}
