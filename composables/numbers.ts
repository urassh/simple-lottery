const maxNumber = 300;
const excludedNumbers = ['000'];

export const numberProvider = (numbers: string[]): string => {
    while (true) {
        const randomNumber = Math.floor(Math.random() * (maxNumber + 1));
        const formattedNumber = numberFormatter(randomNumber);
        const isValid = numberValidator(numbers, formattedNumber);

        if (isValid) {
            return formattedNumber;
        }
    }
}

export const numberFormatter = (number: number) => {
    return number.toString().padStart(3, '0');
}

const numberValidator = (numbers: string[], formattedNumber: string) => {
    const isExist = numbers.includes(formattedNumber);
    const isExcludedNumber = excludedNumbers.includes(formattedNumber);
    const invalid = isExist || isExcludedNumber;
    return !invalid;
}
