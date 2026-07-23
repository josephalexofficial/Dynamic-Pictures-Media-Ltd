/** Scroll so section content sits just below the fixed navbar (not below empty padding). */
export function scrollToSection(
  hrefOrId: string,
  behavior: ScrollBehavior = "smooth",
) {
  const id = hrefOrId.startsWith("#") ? hrefOrId.slice(1) : hrefOrId;

  if (id === "home") {
    window.scrollTo({ top: 0, behavior });
    window.history.replaceState(null, "", "#home");
    return true;
  }

  const el = document.getElementById(id);
  if (!el) return false;

  const header = document.querySelector("header");
  const navHeight = header?.getBoundingClientRect().height ?? 72;
  const padTop = parseFloat(getComputedStyle(el).paddingTop) || 0;
  const gap = 12; // small breathing room under the navbar

  const top =
    el.getBoundingClientRect().top + window.scrollY + padTop - navHeight - gap;

  window.scrollTo({ top: Math.max(0, top), behavior });
  window.history.replaceState(null, "", `#${id}`);
  return true;
}
