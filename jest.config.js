export default {
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
        '^~/(.*)$': '<rootDir>/$1'
    },
    moduleFileExtensions: ['js', 'json', 'vue', 'ts'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.ts$': 'ts-jest'
    },    
    collectCoverage: true,
    collectCoverageFrom: [
      '<rootDir>/components/**/*.vue',
      '<rootDir>/pages/**/*.vue'
    ],
    testMatch: [
        '<rootDir>/test/*.test.js',
        '<rootDir>/test/*.spec.js',
        '<rootDir>/test/*.test.ts',
        '<rootDir>/test/*.spec.ts'
    ],
};
