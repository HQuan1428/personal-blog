/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                // Brand colors
                primary: '#2563eb', // Màu chính
                secondary: '#6b7280', // Màu phụ
                accent: '#f59e0b', // Màu điểm nhấn

                // Background colors
                dark: '#090D1F',
                light: '#ffffff',

                // Text colors
                title_dark: '#ffffff',
                title_light: '#1a1a1a',
                normal_dark: '#C0C5D0',
                normal_light: '#667085',
                datetime: '#6941C6',
            },
        },
    },
    variants: {},
    plugins:[],
}