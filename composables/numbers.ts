const maxNumber = 300;
const excludedNumbers = ['000'];

type NumberGenerator = () => number;

const randomNumberGenerator: NumberGenerator = () => 
  Math.floor(Math.random() * maxNumber);

export const numberProvider = (
  numbers: string[],
  numberGenerator: NumberGenerator = randomNumberGenerator
): string => {
  while (true) {
    const generatedNumber = numberGenerator();
    const formattedNumber = numberFormatter(generatedNumber);
    const isValid = numberValidator(numbers, formattedNumber);

    if (isValid) {
      return formattedNumber;
    }
  }
}

export const numberFormatter = (number: number) => {
    return number.toString().padStart(3, '0');
}

export const numberValidator = (numbers: string[], formattedNumber: string) => {
    const numberAsInt = parseInt(formattedNumber, 10);
    const isExist = numbers.includes(formattedNumber);
    const isExcludedNumber = excludedNumbers.includes(formattedNumber);
    const isOverMaxNumber = numberAsInt > maxNumber;
    const invalid = isExist || isExcludedNumber || isOverMaxNumber;
    return !invalid;
}