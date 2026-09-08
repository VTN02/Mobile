import { useEffect, useState } from "react";

/**
 * Dispatches an event when search is opened/closed or hovered/active.
 */
export function setSearchActive(active: boolean) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("app-search-active", { detail: { active } })
    );
  }
}

/**
 * Reactive hook to listen whether search is active anywhere in the app.
 */
export function useSearchActive() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<{ active: boolean }>;
      setIsSearchActive(Boolean(customEvent.detail?.active));
    };
    window.addEventListener("app-search-active", handler);
    return () => window.removeEventListener("app-search-active", handler);
  }, []);

  return isSearchActive;
}
