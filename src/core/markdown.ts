import { marked } from 'marked';

export function toHtml(markdown: string): string {

  const html = marked.parse(markdown, { async: false });

  return html;
}