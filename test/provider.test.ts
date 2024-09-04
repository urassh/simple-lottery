import { numberProvider } from '@/composables/numbers';

describe('NumberFormatter', () => {
    test('1桁の数字を3桁にフォーマットする', () => {
      const customGenerator = jest.fn().mockReturnValue(5);
      const result = numberProvider([], customGenerator);
      expect(result).toBe('005');
    });

    test('2桁の数字を3桁にフォーマットする', () => {
      const customGenerator = jest.fn().mockReturnValue(42);
      const result = numberProvider([], customGenerator);
      expect(result).toBe('042');
    });

    test('3桁の数字をそのまま返す', () => {
      const customGenerator = jest.fn().mockReturnValue(123);
      const result = numberProvider([], customGenerator);
      expect(result).toBe('123');
    });
  });

describe('NumberValidator', () => {
    test('リストに含まれていない有効な数字を受け入れる', () => {
      const numbers = ['001', '002', '003'];
      const customGenerator = jest.fn().mockReturnValue(4);
      const result = numberProvider(numbers, customGenerator);
      expect(result).toBe('004');
    });

    test('リストに含まれている数字を拒否する', () => {
      const numbers = ['001', '002', '003'];
      const customGenerator = jest.fn()
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(4);
      const result = numberProvider(numbers, customGenerator);
      expect(result).toBe('004');
      expect(customGenerator).toHaveBeenCalledTimes(2);
    });

    test('除外された数字を拒否する', () => {
      const customGenerator = jest.fn()
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(1);
      const result = numberProvider([], customGenerator);
      expect(result).toBe('001');
      expect(customGenerator).toHaveBeenCalledTimes(2);
    });

    test('最大値を超える数字を拒否する', () => {
      const customGenerator = jest.fn()
        .mockReturnValueOnce(301)
        .mockReturnValueOnce(300);
      const result = numberProvider([], customGenerator);
      expect(result).toBe('300');
      expect(customGenerator).toHaveBeenCalledTimes(2);
    });
});

describe('NumberProvider', () => {
    test('有効な数字を生成する', () => {
      const numbers = ['001', '002', '003'];
      const result = numberProvider(numbers);
      expect(result).not.toBeNull();
      expect(result).toMatch(/^\d{3}$/);
      expect(numbers).not.toContain(result);
      expect(parseInt(result, 10)).toBeLessThanOrEqual(300);
    });
  
    test('既存の数字を避けて新しい数字を生成する', () => {
      const numbers = ['001', '002', '003', '004', '005'];
      let callCount = 0;
      const customGenerator = jest.fn(() => {
        callCount++;
        return callCount;
      });
      const result = numberProvider(numbers, customGenerator);
      expect(result).toBe('006');
      expect(numbers).not.toContain(result);
    });
  
    test('除外された数字を生成しない', () => {
      const numbers: string[] = [];
      let callCount = 0;
      const customGenerator = jest.fn(() => {
        callCount++;
        return callCount === 3 ? 0 : 1;
      });
      const result = numberProvider(numbers, customGenerator);
      expect(result).not.toBe('000');
    });
  
    test('最大値を超える数字を生成しない', () => {
      const numbers: string[] = [];
      let callCount = 0;
      const customGenerator = jest.fn(() => {
        callCount++;
        return callCount === 3 ? 300 : 301;
      });
      const result = numberProvider(numbers, customGenerator);
      expect(parseInt(result, 10)).toBe(300);
    });
  
    test('カスタムジェネレーター、フォーマッター、バリデーターを使用する', () => {
      const numbers = ['001', '002', '003'];
      const customGenerator = jest.fn().mockReturnValue(4);
      const customFormatter = jest.fn().mockReturnValue('004');
      const customValidator = jest.fn().mockReturnValue(true);
  
      const result = numberProvider(numbers, customGenerator, customFormatter, customValidator);
  
      expect(result).toBe('004');
      expect(customGenerator).toHaveBeenCalled();
      expect(customFormatter).toHaveBeenCalledWith(4);
      expect(customValidator).toHaveBeenCalledWith(numbers, '004');
    });
  
    test('有効な数字が見つかるまで繰り返し生成する', () => {
      const numbers = ['001', '002', '003'];
      let callCount = 0;
      const customGenerator = jest.fn(() => {
        callCount++;
        return callCount === 3 ? 4 : 1;
      });
  
      const result = numberProvider(numbers, customGenerator);
  
      expect(result).toBe('004');
      expect(customGenerator).toHaveBeenCalledTimes(3);
    });
});