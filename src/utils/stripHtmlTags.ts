export function stripHtmlTags(content: string): string {
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = content
  return tempDiv.textContent || tempDiv.innerText || ''
}
