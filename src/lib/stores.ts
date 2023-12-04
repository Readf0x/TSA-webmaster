import { browser } from "$app/environment";
import { writable, type Writable } from "svelte/store";

export type Theme = "light" | "dark"
function assignTheme(): Writable<Theme> {
  if (browser) return writable(
    localStorage.getItem("theme") ||
    window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark" ||
    "light")
  else return writable("light")
}
export const theme: Writable<Theme> = assignTheme()
