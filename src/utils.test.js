import { describe, it, expect } from 'vitest';
import { getType } from './utils.js';

describe('utils', () => {
  describe('getType()', () => {
    it('should return expected parameter type', () => {
      expect(getType('')).toBe('string');
      expect(getType(0)).toBe('number');
      expect(getType(null)).toBe('null');
      expect(getType(undefined)).toBe('undefined');
      expect(getType({})).toBe('object');
      expect(getType([])).toBe('array');
      // eslint-disable-next-line
      expect(getType(() => { })).toBe('function');
    });
  });
});
