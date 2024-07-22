function getValidUrl(url: string): string {
  try {
    const urlObject = new URL(url);
    return urlObject.href;
  } catch (e) {}

  if (url.substring(0, 2) === "//") {
    return window.location.protocol + url;
  } else {
    return window.location.origin + url;
  }
}

function openTab(url: string): void {
  window.open(url, "_blank");
}

export { getValidUrl, openTab };
