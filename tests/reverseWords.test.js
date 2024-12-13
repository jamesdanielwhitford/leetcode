const reverseWords = require('../solutions/leet_code_75/arrays_strings/reverseWords/reverseWords');

describe('Reverse Words', () => {
    // Basic functionality test
    test('reverses words in a simple sentence', () => {
        expect(reverseWords('the sky is blue')).toBe('blue is sky the');
    });

    // Multiple spaces between words
    test('handles multiple spaces between words', () => {
        expect(reverseWords('the  sky is  blue')).toBe('blue is sky the');
    });

    // Leading/trailing spaces
    test('handles leading and trailing spaces', () => {
        expect(reverseWords('  hello world  ')).toBe('world hello');
    });

    // Single word
    test('handles single word', () => {
        expect(reverseWords('hello')).toBe('hello');
    });

    // Empty string
    test('handles empty string', () => {
        expect(reverseWords('')).toBe('');
    });

    // String with only spaces
    test('handles string with only spaces', () => {
        expect(reverseWords('   ')).toBe('');
    });

    // Long sentence
    test('handles long sentence with multiple words', () => {
        expect(reverseWords('a good example of a test')).toBe('test a of example good a');
    });
});