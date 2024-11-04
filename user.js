/**
 * @typedef {Object} User
 * @property {string} name - The user's name
 * @property {number} age - The user's age
 */

/**
 * Creates a user object
 * @param {string} name - The user's name
 * @param {number} age - The user's age
 * @returns {User} A user object
 */
export function createUser(name, age) {
    return { name, age };
}

/**
 * Checks if a user is an adult
 * @param {User} user - The user to check
 * @returns {boolean} True if the user is 18 or older, false otherwise
 */
export function isAdult(user) {
    return user.age >= 18;
}