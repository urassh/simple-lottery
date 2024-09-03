import { numberValidator } from '@/composables/numbers';

describe('numberValidator', () => {
  test('リストに含まれていない有効な数字に対してtrueを返す', () => {
    const numbers = ['001', '002', '003'];
    expect(numberValidator(numbers, '004')).toBe(true);
  });

  test('すでにリストに含まれている数字に対してfalseを返す', () => {
    const numbers = ['001', '002', '003'];
    expect(numberValidator(numbers, '002')).toBe(false);
  });

  test('除外された数字に対してfalseを返す', () => {
    const numbers = ['001', '002', '003'];
    expect(numberValidator(numbers, '000')).toBe(false);
  });

  test('範囲の端にある有効な数字に対してtrueを返す', () => {
    const numbers = ['001', '002', '003'];
    expect(numberValidator(numbers, '300')).toBe(true);
  });

  test('先頭にゼロがある有効な数字に対してtrueを返す', () => {
    const numbers = ['001', '002', '003'];
    expect(numberValidator(numbers, '099')).toBe(true);
  });

  test('有効範囲外の数字に対してfalseを返す', () => {
    const numbers = ['001', '002', '003'];
    expect(numberValidator(numbers, '301')).toBe(false);
  });

  test('空の数字配列でも正しく動作する', () => {
    const numbers: string[] = [];
    expect(numberValidator(numbers, '150')).toBe(true);
    expect(numberValidator(numbers, '000')).toBe(false);
  });
});