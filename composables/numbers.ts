const maxNumber = 300;
const excludedNumbers = ['000'];

type NumberGenerator = () => number;
type NumberFormatter = (number: number) => string;
type NumberValidator = (numbers: string[], formattedNumber: string) => boolean;

const randomNumberGenerator = (): number => {
  return Math.floor(Math.random() * maxNumber);
}

const numberFormatter = (number: number): string => {
    return number.toString().padStart(3, '0');
}

const numberValidator = (numbers: string[], formattedNumber: string): boolean => {
    const numberAsInt = parseInt(formattedNumber, 10);
    const isExist = numbers.includes(formattedNumber);
    const isExcludedNumber = excludedNumbers.includes(formattedNumber);
    const isOverMaxNumber = numberAsInt > maxNumber;
    const invalid = isExist || isExcludedNumber || isOverMaxNumber;
    return !invalid;
}

const defaultNumberGenerator: NumberGenerator = randomNumberGenerator;
const defaultNumberFormatter: NumberFormatter = numberFormatter;
const defaultNumberValidator: NumberValidator = numberValidator;

export const numberProvider = (
  numbers: string[],
  numberGenerator: NumberGenerator = defaultNumberGenerator,
  numberFormatter: NumberFormatter = defaultNumberFormatter,
  numberValidator: NumberValidator = defaultNumberValidator
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
