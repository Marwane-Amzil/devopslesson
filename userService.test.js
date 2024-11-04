import { expect, test, vi } from 'vitest'
import { createUserService } from './userService.js'

test('getUserName returns the user\'s name', async () => {
    // Arrange
    const mockApi = {
        fetchUser: vi.fn().mockResolvedValue({ name: 'John Doe' })
    };
    const userService = createUserService(mockApi);

    // Act
    const name = await userService.getUserName(1);

    // Assert
    expect(mockApi.fetchUser).toHaveBeenCalledWith(1);
    expect(name).toBe('John Doe');
});