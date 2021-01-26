import { replaceContent } from 'smokescreen/Utils';

const literal = {
    '43e': '6f', // о
    '443': '79', // у
    '445': '78', // x
    '430': '61', // а
    '410': '41', // A
    '420': '50', // P
    '440': '70', // p
    '441': '63', // c
    '421': '43', // C
    '41e': '4f', // O
};

export const reverse = (str) => {
    if (typeof str !== 'string'){
        throw new TypeError('Данная функция работает только с типом string');
    }

    return str.split('').reverse().join('');
};

export const convert = (str) => {
    if (typeof str !== 'string'){
        throw new TypeError('Данная функция работает только с типом string');
    }

    const convertStr = str.split(' ').map((item) => {
        const word = replaceContent(`'${item}'`)
            .replace(/(')/g, '')
            .split('\\')
            .filter(Boolean);

        return word.map((item) =>
            String.fromCharCode(
                parseInt(literal[item] ? literal[item] : item, 16)
            )).reverse().join('');
    })[0];

    return ' '.concat(convertStr);
};
