const isSubsequence = require('../solutions/leet_code_75/two_pointers/isSubsequence/isSubsequence');

describe('Is Subsequence', () => {
    test('Basic true case - characters in order with gaps', () => {
        const s = 'abc';
        const t = 'ahbgdc';
        expect(isSubsequence(s,t)).toEqual(true);
    });

    test('Basic false case - characters out of order', () => {
        const s = 'axc';
        const t = 'ahbgdc';
        expect(isSubsequence(s,t)).toEqual(false);
    });

    test('Empty s string should return true', () => {
        const s = '';
        const t = 'ahbgdc';
        expect(isSubsequence(s,t)).toEqual(true);
    });

    test('Empty t string with non-empty s should return false', () => {
        const s = 'abc';
        const t = '';
        expect(isSubsequence(s,t)).toEqual(false);
    });

    test('Single character that exists', () => {
        const s = 'a';
        const t = 'ahbgdc';
        expect(isSubsequence(s,t)).toEqual(true);
    });

    test('Single character that does not exist', () => {
        const s = 'x';
        const t = 'ahbgdc';
        expect(isSubsequence(s,t)).toEqual(false);
    });

    test('S longer than t should return false', () => {
        const s = 'abcd';
        const t = 'abc';
        expect(isSubsequence(s,t)).toEqual(false);
    });

    test('Repeated characters in correct order', () => {
        const s = 'aaa';
        const t = 'aaaaaa';
        expect(isSubsequence(s,t)).toEqual(true);
    });

    test('Repeated characters in wrong order', () => {
        const s = 'aaa';
        const t = 'aabaa';
        expect(isSubsequence(s,t)).toEqual(true);
    });

    test('Same string for s and t', () => {
        const s = 'abc';
        const t = 'abc';
        expect(isSubsequence(s,t)).toEqual(true);
    });
});