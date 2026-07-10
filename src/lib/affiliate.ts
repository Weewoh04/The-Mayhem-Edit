export const affiliateLinkProps = {
  target: "_blank",
  rel: "sponsored nofollow noopener noreferrer"
} as const;

export function getAffiliateUrl(url?: string) {
  return url && url.trim().length > 0 ? url : "https://www.amazon.com/";
}
