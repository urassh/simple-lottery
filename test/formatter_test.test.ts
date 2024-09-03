import { numberFormatter } from '@/composables/numbers';

describe('numberFormatter', () => {
  test('1桁の数字を3桁にフォーマットする', () => {
    expect(numberFormatter(1)).toBe('001');
    expect(numberFormatter(9)).toBe('009');
  });

  test('2桁の数字を3桁にフォーマットする', () => {
    expect(numberFormatter(10)).toBe('010');
    expect(numberFormatter(99)).toBe('099');
  });

  test('3桁の数字をそのまま返す', () => {
    expect(numberFormatter(100)).toBe('100');
    expect(numberFormatter(999)).toBe('999');
  });

  test('0を3桁にフォーマットする', () => {
    expect(numberFormatter(0)).toBe('000');
  });
});