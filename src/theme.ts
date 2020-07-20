import { theme as oldTheme } from '@tedconf/monterey';

export default {
  ...oldTheme,
  colors: {
    TEDRed: ['#EC1015', 'rgba(236, 16, 21, 0.15)'],
    white: '#FFFFFF',
    black: '#121212',
    blue: '#2763FF',
    gray: ['#494949', '#717171', 'rgba(18, 18, 18, .12)', '#F6F6F6'],
  },
  fontSizes: {
    '-1': '13px',
    '0': '0px',
    '1': '14px',
    '2': '16px',
    '3': '18px',
    '4': '22px',
    '5': '28px',
    '6': '42px',
    '7': '60px',
    root: '14px',
  },
  borderRadius: [0, '2px', '8px'],
};
