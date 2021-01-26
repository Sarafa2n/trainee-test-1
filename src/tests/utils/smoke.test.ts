import { convert, reverse } from "../../utils/smoke";

describe('Тестируем фукнцию reverse', () => {

   test('Функция reverse работает правильно', () => {
       expect(reverse('string')).toEqual('gnirts');
       expect(reverse('gnirts')).toEqual('string');
       expect(reverse(' space')).toEqual('ecaps ');
   });

   test('Функция reverse работает только с типом string', () => {
      expect(() => reverse({})).toThrowError('Данная функция работает только с типом string');
      expect(() => reverse(new Date())).toThrowError('Данная функция работает только с типом string');
      expect(() => reverse(124)).toThrowError('Данная функция работает только с типом string');
      expect(() => reverse(() => {})).toThrowError('Данная функция работает только с типом string');
      expect(() => reverse(null)).toThrowError('Данная функция работает только с типом string');
      expect(() => reverse(undefined)).toThrowError('Данная функция работает только с типом string');
      expect(() => reverse(NaN)).toThrowError('Данная функция работает только с типом string');
      expect(() => reverse([])).toThrowError('Данная функция работает только с типом string');
   });

   test('Функция не работает с Unicode символами', () => {
       expect(reverse(`🤣`)).not.toEqual(`🤣`);
   })
});

describe('Тесты функции convert', () => {

    test('Функция работает правильно', () => {
        expect(convert('string')).toEqual(' gnirts');
        expect(convert('gnirts')).toEqual(' string');
        expect(convert('Привет')).toEqual(' тевиpП');
        expect(convert('Москва')).toEqual(' aвкcoМ');
    });

    test('Функция convert работает только с типом string', () => {
        expect(() => convert({})).toThrowError('Данная функция работает только с типом string');
        expect(() => convert(new Date())).toThrowError('Данная функция работает только с типом string');
        expect(() => convert(124)).toThrowError('Данная функция работает только с типом string');
        expect(() => convert(() => {})).toThrowError('Данная функция работает только с типом string');
        expect(() => convert(null)).toThrowError('Данная функция работает только с типом string');
        expect(() => convert(undefined)).toThrowError('Данная функция работает только с типом string');
        expect(() => convert(NaN)).toThrowError('Данная функция работает только с типом string');
        expect(() => convert([])).toThrowError('Данная функция работает только с типом string');
    });

    test('Строку нельзя найти с помощью регулярного выражения', () => {
       expect(/Москва/i.test(convert('Москва'))).not.toBeTruthy();
       expect(/авксоМ/i.test(convert('Москва'))).not.toBeTruthy();
       expect(/м.*о.*с.*к.*в.*а/i.test(convert('Мдддодддсдддкдддвдддаддд'))).not.toBeTruthy();
       expect(/а.*в.*к.*с.*о.*м/i.test(convert('Мдддодддсдддкдддвдддаддд'))).not.toBeTruthy()

       expect(/Ограничение 18\+/i.test(convert('Ограничение 18+'))).not.toBeTruthy();
       expect(/\+81 еинечинаргО/i.test(convert('Ограничение 18+'))).not.toBeTruthy();

       expect(/АА/i.test(convert('АА'))).not.toBeTruthy();
    });

    test('Строку, состоящую только из спецсимволов или чисел, возможно найти через обратный поиск', () => {
        expect(/81/i.test(convert('18'))).toBeTruthy();
        expect(/#@/i.test(convert('@#'))).toBeTruthy();
        expect(/1#@8/i.test(convert('8@#1'))).toBeTruthy();
    });
});
