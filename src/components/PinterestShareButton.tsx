"use client";

type PinterestShareButtonProps = {
  title: string;
  image?: string;
};

export function PinterestShareButton({ title, image }: PinterestShareButtonProps) {
  function handleClick() {
    const currentUrl = window.location.href;
    const media = image ? new URL(image, currentUrl).toString() : "";
    const url = new URL("https://www.pinterest.com/pin/create/button/");
    url.searchParams.set("url", currentUrl);
    url.searchParams.set("description", title);
    if (media) url.searchParams.set("media", media);
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center justify-center border border-charcoal bg-paper px-5 py-3 text-sm font-bold text-charcoal hover:bg-cream focus:outline-none focus:ring-2 focus:ring-rose"
    >
      Save to Pinterest
    </button>
  );
}
