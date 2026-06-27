export function recentItems<T extends { publishDate: Date }>(items: T[], now = new Date()): T[] {
  const cutoff = now.getTime() - 48 * 3600 * 1000;
  return items.filter(i => i.publishDate.getTime() >= cutoff);
}
