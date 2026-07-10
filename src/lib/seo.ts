import { siteConfig } from "./site";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function pageTitle(title?: string) {
  return title ? `${title} | ${siteConfig.name}` : siteConfig.name;
}
