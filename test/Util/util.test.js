const {validateUrl} = require('../../app/Util/util');

describe('validateUrl', () => {
  test('returns true for valid URLs', () => {
    expect(validateUrl('http://www.google.com')).toBe(true);
    expect(validateUrl('https://www.google.com')).toBe(true);
    expect(validateUrl('http://google.com')).toBe(true);
    expect(validateUrl('https://google.com')).toBe(true);
    expect(validateUrl('http://www.google.com/search?q=testing')).toBe(true);
    expect(validateUrl('https://www.google.com/search?q=testing')).toBe(true);
  });

  test('returns false for invalid URLs', () => {
    expect(validateUrl('a')).toBe(false);
  });
});