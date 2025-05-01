module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
        '^.+\\.css$': 'jest-css-modules-transform'
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx', 'scss'],
    testPathIgnorePatterns: ['node_modules', '.next'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|less|scss)$': 'identity-obj-proxy'
    },
    testEnvironment: 'jest-environment-jsdom'
};