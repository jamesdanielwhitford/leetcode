const canPlaceFlowers = require('../solutions/canPlaceFlowers');

describe('Can Place Flowers', () => {
    test('should return true when n = 1 and there is space for one flower', () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
    });

    test('should return false when n = 2 and there is not enough space', () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
    });

    test('should return true when n = 0', () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 0)).toBe(true);
    });

    test('should handle empty plots at the beginning', () => {
        expect(canPlaceFlowers([0, 0, 1, 0, 1], 1)).toBe(true);
    });

    test('should handle empty plots at the end', () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 0], 2)).toBe(true);
    });

    test('should handle single element array', () => {
        expect(canPlaceFlowers([0], 1)).toBe(true);
        expect(canPlaceFlowers([1], 1)).toBe(false);
    });

    test('should handle array with all zeros', () => {
        expect(canPlaceFlowers([0, 0, 0, 0], 2)).toBe(true);
    });
});