export function copyToClipboard(value: string) {
  navigator.clipboard.writeText(value);
}
