/**
 * @typedef {Object} User
 * @property {string} name - The user's name
 */

/**
 * @typedef {Object} Api
 * @property {function(number): Promise<User>} fetchUser - Fetches a user by ID
 */

/**
 * Creates a user service
 * @param {Api} api - The API to use for fetching users
 * @returns {Object} An object with a getUserName method
 */
export function createUserService(api) {
    return {
        /**
         * Gets a user's name by their ID
         * @param {number} id - The user's ID
         * @returns {Promise<string>} The user's name
         */
        async getUserName(id) {
            const user = await api.fetchUser(id);
            return user.name;
        }
    };
}