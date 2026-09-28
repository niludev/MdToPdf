import { describe, it, expect } from 'vitest';
import { toHtml } from './markdown.ts';


describe('toHtml', () => {

  it('converts a heading', () => {

    expect(toHtml('# Hello')).toContain('<h1');

  });
});