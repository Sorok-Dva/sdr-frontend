export function slugify (title: string): string {
  return title
    .toLowerCase() // Convert to lowercase
    .normalize('NFD') // Normalize to decomposed form (NFD)
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics (accents)
    .trim() // Trim leading and trailing whitespace
    .replace(/[\s\W-]+/g, '-') // Replace spaces, non-word characters, and dashes with a single hyphen
    .replace(/^-+|-+$/g, '') // Remove leading or trailing hyphens
}
