const { info } = require('sass');
const { darkMode } = require('./tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './main.js',
        './pages/**/*.html',
        './layout/**/*.ejs',
        './assets/**/*.{html,js,scss}',
        // 這裡是 tw-elements 的路徑
        './node_modules/tw-elements/js/**/*.js',
    ],
    // darkMode: 'media', // 啟動前綴 dark模式
    theme: {
        screens: {
            md: '792px',
            lg: '992px',
            xl: '1164px',
        },
        // mobile first
        container: {
            center: true, // 置中
            padding: '12px',
            screens: {
                // sm: '375px',
                // md: '768px',
                // lg: '992px',
                // xl: '1140px',
              '2xl': '1320px', // 最大寬度
            }
        },
        extend: {
            colors: {
                primary: {
                    100: '#F5FEE7',
                    200: '#E8FEC5',
                    300: '#C0FA73',
                    400: '#57A203',
                    500: '#477A11',
                },
                neutral: {
                    0: '#FFFFFF',
                    100: '#F8F9FA',
                    200: '#E9ECEF',
                    300: '#DEE2E6',
                    400: '#CED4DA',
                    500: '#ADB5BD',
                    600: '#6C757D',
                    700: '#495057',
                    800: '#343A40',
                    900: '#212529',
                },
                danger: {
                    100: '#FCF1F1',
                    200: '#EBA7A7',
                    300: '#D74F4F',
                    },
                    success: {
                    100: '#EFF8F4',
                    200: '#9AD1BA',
                    300: '#36A375',
                    },
                    warning: {
                    100: '#FEF6EC',
                    200: '#F9C588',
                    300: '#F3B812',
                    },
                    info: {
                    100: '#EEF5FC',
                    200: '#97C3ED',
                    300: '#3087DB',
                    },
            },
            borderRadius: {
                'radius-xs': '2px',
                'radius-sm': '4px',
                'radius-md': '12px',
                'radius-rounded': '1000px',
            },
            fontSize: {
                'd1': ['64px', {fontWeight: '700', lineHeight: '120%', letterSpacing: '0.05em' }],
                'd2': ['48px', {fontWeight: '700', lineHeight: '120%', letterSpacing: '0.05em' }],
                'h1': ['40px', {fontWeight: '700', lineHeight: '120%', letterSpacing: '0.05em' }],
                'h2': ['32px', {fontWeight: '700', lineHeight: '120%', letterSpacing: '0.05em' }],
                'h3': ['28px', {fontWeight: '700', lineHeight: '120%', letterSpacing: '0.05em' }],
                'h4': ['24px', {fontWeight: '700', lineHeight: '120%', letterSpacing: '0.05em' }],
                'h5': ['20px', {fontWeight: '700', lineHeight: '120%', letterSpacing: '0.05em' }],
                'h6': ['16px', {fontWeight: '700', lineHeight: '120%', letterSpacing: '0.05em' }],
                'l-lg': ['20px', { lineHeight: '150%', letterSpacing: '0.05em' }],
                'l-md': ['16px', { lineHeight: '150%', letterSpacing: '0.05em' }],
                'l-sm': ['14px', { lineHeight: '150%', letterSpacing: '0.05em' }],
                'l-xs': ['12px', { lineHeight: '150%', letterSpacing: '0.05em' }],
                'p-lg': ['20px', { lineHeight: '150%',fontWeight: '400', letterSpacing: '0.05em' }],
                'p-md': ['16px', { lineHeight: '150%',fontWeight: '400', letterSpacing: '0.05em' }],
                'p-sm': ['14px', { lineHeight: '150%',fontWeight: '400', letterSpacing: '0.05em' }],
                'p-xs': ['12px', { lineHeight: '150%',fontWeight: '400', letterSpacing: '0.05em' }],
            },
            spacing: {
                'spacing-xxs': '4px',
                'spacing-xs': '8px',
                'spacing-s': '12px',
                'spacing-m': '16px',
                'spacing-l': '24px',
                'spacing-xl': '32px',
                'spacing-2xl': '40px',
                'spacing-3xl': '48px',
                'spacing-4xl': '56px',
                'spacing-5xl': '64px',
                'spacing-6xl': '80px',
            },
        },
    },
    plugins: [require("tw-elements/plugin.cjs")],
    darkMode : "class"
};