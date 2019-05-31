import 'jest-date-mock';

// Fail tests on any warning
console.error = message => {
    throw new Error(message);
};