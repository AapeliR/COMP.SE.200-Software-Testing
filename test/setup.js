import { JSDOM } from 'jsdom';
import '@babel/register';

// Create a DOM environment
const dom = new JSDOM('<!doctype html><html><body></body></html>');

// Assign window and document to global scope
global.window = dom.window;
global.document = dom.window.document;

// Safely define navigator
if (!('navigator' in global)) {
  Object.defineProperty(global, 'navigator', {
    value: {
      userAgent: 'node.js',
    },
    writable: false,
  });
}