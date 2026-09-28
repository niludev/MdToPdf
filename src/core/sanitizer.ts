import DOMPurify from "dompurify";

export function sanitize(rawHtml: string): string {

    const sanitizedHtml = DOMPurify.sanitize(rawHtml);

    return sanitizedHtml;
}