const maxVowels = require('../solutions/leet_code_75/sliding_window/maximumVowelsInSubstring/maximumVowelsInSubstring'); 

describe('Maximum Number of Vowels in Substring', () => {
    // Basic functionality tests
    test('should handle the example cases correctly', () => {
        expect(maxVowels("abciiidef", 3)).toBe(3);
        expect(maxVowels("aeiou", 2)).toBe(2);
        expect(maxVowels("leetcode", 3)).toBe(2);
    });

    test('should handle single character strings', () => {
        expect(maxVowels("a", 1)).toBe(1);
        expect(maxVowels("b", 1)).toBe(0);
    });

    // Edge cases
    test('should handle when k equals string length', () => {
        expect(maxVowels("aeiou", 5)).toBe(5);
        expect(maxVowels("xyz", 3)).toBe(0);
    });

    // Pattern tests
    test('should handle alternating patterns', () => {
        expect(maxVowels("aeaeae", 2)).toBe(2);
        expect(maxVowels("aeiouaeiou", 3)).toBe(3);
    });

    // Special cases
    test('should handle strings with no vowels', () => {
        expect(maxVowels("bcd", 2)).toBe(0);
        expect(maxVowels("xyz", 3)).toBe(0);
    });

    test('should handle strings with all vowels', () => {
        expect(maxVowels("aeiou", 3)).toBe(3);
        expect(maxVowels("aeiouu", 4)).toBe(4);
    });

    // Boundary tests
    test('should handle extreme string lengths within constraints', () => {
        const longString = "a".repeat(10000) + "e".repeat(10000);
        expect(maxVowels(longString, 5)).toBe(5);
    });
});