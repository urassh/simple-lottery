const maxNumber = 300;

export const numberProvider = (numbers: string[]): string => {
    while (true) {
        const randomNumber = Math.floor(Math.random() * (maxNumber + 1));
        const formattedNumber = numberFormatter(randomNumber);
        const isExist = numbers.includes(formattedNumber);
        if (!isExist) {
            return formattedNumber;
        }
    }
}

export const numberFormatter = (number: number) => {
    return number.toString().padStart(3, '0');
}