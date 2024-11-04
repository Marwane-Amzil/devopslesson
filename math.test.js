import { expect, test } from 'vitest'
import { add } from './math.js'

test('add function correctly adds two numbers', () => {
    // Arrange
    const a = 2;
    const b = 3;

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(5);
});