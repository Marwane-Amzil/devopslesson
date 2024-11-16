import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        coverage: {
            reporter: ['text', 'json', 'html'], // Adjust according to your needs
            reportsDirectory: './coverage' // Ensure this path is correct
        }
    }
});
