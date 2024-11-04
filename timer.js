/**
 * Calls a callback with a greeting after a delay
 * @param {string} name - The name to greet
 * @param {function(string): void} callback - The callback to call with the greeting
 */
export function delayedGreeting(name, callback) {
    setTimeout(() => {
        callback(`Hello, ${name}!`);
    }, 1000);
}

// timer.test.js
import { expect, test, vi } from 'vitest'
import { delayedGreeting } from './timer.js'

test('delayedGreeting calls callback with correct message', () => {
    // Arrange
    vi.useFakeTimers();
    const callback = vi.fn();

    // Act
    delayedGreeting('Alice', callback);
    vi.runAllTimers();

    // Assert
    expect(callback).toHaveBeenCalledWith('Hello, Alice!');
    vi.useRealTimers();
});