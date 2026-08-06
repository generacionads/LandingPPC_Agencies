"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ga-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Must run post-mount (not during render) so the server-rendered HTML
    // never depends on localStorage — avoids a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  function choose(value: "accepted" | "declined") {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[60] sm:inset-x-auto sm:left-6 sm:right-auto sm:max-w-sm">
      <div className="soft-shadow flex flex-col gap-4 rounded-3xl bg-white p-6">
        <p className="text-sm leading-6 text-black/70">
          We use cookies to run this site and understand how it&apos;s used.
          See our{" "}
          <a
            href="https://generacionads.com/politica-de-cookies/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-purple underline"
          >
            Cookie Policy
          </a>{" "}
          for details.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => choose("accepted")}
            className="pill-shadow rounded-full bg-black px-5 py-2.5 text-sm text-white transition-colors hover:bg-brand-purple"
          >
            Accept
          </button>
          <button
            onClick={() => choose("declined")}
            className="rounded-full border border-black/10 px-5 py-2.5 text-sm text-black/70 transition-colors hover:border-brand-purple hover:text-brand-purple"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
