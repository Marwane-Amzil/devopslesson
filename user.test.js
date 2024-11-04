import { expect, test } from 'vitest'
import { createUser, isAdult } from './user.js'

test('createUser correctly creates a user object', () => {
    // Arrange
    const name = 'John Doe';
    const age = 25;

    // Act
    const user = createUser(name, age);

    // Assert
    expect(user.name).toBe(name);
    expect(user.age).toBe(age);
});

test('isAdult returns true for users 18 and older', () => {
    // Arrange
    const user = createUser('Jane Doe', 18);

    // Act
    const result = isAdult(user);

    // Assert
    expect(result).toBe(true);
});

test('isAdult returns false for users under 18', () => {
    // Arrange
    const user = createUser('Jimmy Doe', 17);

    // Act
    const result = isAdult(user);

    // Assert
    expect(result).toBe(false);
});