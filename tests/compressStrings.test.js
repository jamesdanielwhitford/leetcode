const compress = require('../solutions/leet_code_75/arrays_strings/compressString/compressString');

describe('String Compression', () => {
    // Basic functionality tests
    test('compresses basic repeated characters', () => {
        const chars = ["a","a","b","b","c","c","c"];
        const result = compress(chars);
        expect(result).toBe(6);
        expect(chars.slice(0, result)).toEqual(["a","2","b","2","c","3"]);
    });

    // Single character test
    test('handles single character', () => {
        const chars = ["a"];
        const result = compress(chars);
        expect(result).toBe(1);
        expect(chars.slice(0, result)).toEqual(["a"]);
    });

    // Large number of repetitions
    test('handles counts >= 10', () => {
        const chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
        const result = compress(chars);
        expect(result).toBe(4);
        expect(chars.slice(0, result)).toEqual(["a","b","1","2"]);
    });

    // No compression needed
    test('handles string with no repeated characters', () => {
        const chars = ["a","b","c"];
        const result = compress(chars);
        expect(result).toBe(3);
        expect(chars.slice(0, result)).toEqual(["a","b","c"]);
    });

    // Multiple different groups
    test('handles multiple different groups with various counts', () => {
        const chars = ["a","a","a","b","c","c","c","c","d","d","d","d","d"];
        const result = compress(chars);
        expect(result).toBe(7);
        expect(chars.slice(0, result)).toEqual(["a","3","b","c","4","d","5"]);
    });

    // Edge case: multiple digit counts
    test('handles multiple groups with double-digit counts', () => {
        const chars = Array(15).fill("a").concat(Array(12).fill("b"));
        const result = compress(chars);
        expect(result).toBe(6);
        expect(chars.slice(0, result)).toEqual(["a","1","5","b","1","2"]);
    });

    // Special characters
    test('handles special characters', () => {
        const chars = ["!","!","!","@","@","#"];
        const result = compress(chars);
        expect(result).toBe(5);
        expect(chars.slice(0, result)).toEqual(["!","3","@","2","#"]);
    });
});