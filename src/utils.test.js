import { describe, it, expect } from 'vitest';
import { getType, double, isType } from './utils.js';

describe('utils', () => {
  describe('getType()', () => {
    it('should return the type of the given value', () => {
      expect(getType(4)).toEqual('number');
      expect(getType('4')).toEqual('string');
      expect(getType(true)).toEqual('boolean');
      expect(getType(null)).toEqual('null');
      expect(getType(undefined)).toEqual('undefined');
      expect(getType({})).toEqual('object');
      expect(getType([])).toEqual('array');
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      expect(getType(() => {})).toEqual('function');
    });
  });

  describe('double()', () => {
    it('should double the given value', () => {
      expect(double(4)).toEqual(8);
    });
  });

  describe('isType()', () => {
    it('should return true or false for the appropriate type', () => {
      expect(isType(4, 'number')).toEqual(true);
      expect(isType(4, 'string')).toEqual(false);
      expect(isType('yo', 'string')).toEqual(true);
      expect(isType('yo', 'number')).toEqual(false);
    });
  });
});
