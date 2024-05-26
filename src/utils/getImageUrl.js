function getImageUrl(path) {
  return new URL(path, import.meta.url).href;
}

export { getImageUrl };
