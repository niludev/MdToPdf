// @vitest-environment jsdom

import { describe, it, expect } from "vitest";
import { sanitize } from "./sanitizer";

describe("sanitize", () => {
    it("keeps safe HTML unchanged", () => {
        expect(sanitize('<h1>Hello</h1>')).toBe('<h1>Hello</h1>');
    });

    it('removes script tags', () => {
        expect(sanitize('<p>Hi</p><script>alert(1)</script>')).not.toContain('<script');
    })

    it('removes dangerous attributes', () => {
        expect(sanitize('<img src="x" onerror="alert(1)">')).not.toContain('onerror');
    })

});