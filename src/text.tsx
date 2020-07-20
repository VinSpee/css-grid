// @ts-nocheck
import { HTMLAttributes } from 'react';
import { Pseudos } from 'csstype';
import css from '@styled-system/css';
import { Theme, styled } from '@tedconf/monterey';
import theme from './theme';
import { color, ResponsiveValue } from 'styled-system';
import {
  TextColorProps,
  TextAlignProps,
  TextShadowProps,
  TextStyleProps,
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';
// @ts-ignore
import variant from '@styled-system/variant';
import capsize from './capsize';

const styles = {
  '-1m': {
    letterSpacing: '-0.45px',
    fontWeight: 500,
    ...capsize({ leading: 20, fontSize: theme.fontSizes[-1] }),
  },
  '-1r': {
    letterSpacing: '-0.75px',
    fontWeight: 300,
    ...capsize({ leading: 20, fontSize: theme.fontSizes[-1] }),
  },
  '-1u': {
    ...capsize({ leading: 20, fontSize: theme.fontSizes[-1] }),
    letterSpacing: '0.6px',
    fontWeight: 700,
    textTransform: 'uppercase',
  },

  '1rserif': {
    ...capsize({ leading: 21, fontSize: theme.fontSizes[1] }),
    letterSpacing: '-0.25px',
    fontWeight: 300,
    fontFamily: 'serif',
  },
  '1r': {
    ...capsize({ leading: 22, fontSize: theme.fontSizes[1] }),
    letterSpacing: '-0.45px',
    fontWeight: 300,
  },
  '1b': {
    ...capsize({ leading: 22, fontSize: theme.fontSizes[1] }),
    letterSpacing: '-0.4px',
    fontWeight: 700,
  },
  '2r': {
    ...capsize({ leading: 24, fontSize: theme.fontSizes[2] }),
    letterSpacing: '-0.6px',
    fontWeight: 300,
  },
  '2b': {
    ...capsize({ leading: 24, fontSize: theme.fontSizes[2] }),
    letterSpacing: '-0.65px',
    fontWeight: 700,
  },
  '3r': {
    ...capsize({ leading: 25, fontSize: theme.fontSizes[3] }),
    letterSpacing: '-0.75px',
    fontWeight: 300,
    fontFamily: 'serif',
  },
  '3b': {
    ...capsize({ leading: 25, fontSize: theme.fontSizes[3] }),

    letterSpacing: '-0.75px',
    fontWeight: 700,
  },
  '3serif': {
    ...capsize({ leading: 28, fontSize: theme.fontSizes[3] }),
    letterSpacing: '-0.25px',
    fontWeight: 300,
    fontFamily: 'serif',
  },
  '4b': {
    ...capsize({ leading: 28, fontSize: theme.fontSizes[4] }),

    letterSpacing: '-0.95px',
    fontWeight: 700,
  },
  '5': {
    ...capsize({ leading: 36, fontSize: theme.fontSizes[5] }),
    letterSpacing: '-1.15px',
    fontWeight: 700,
  },

  '5b': {
    ...capsize({ leading: 36, fontSize: theme.fontSizes[5] }),
    letterSpacing: '-1.15px',
    fontWeight: 700,
  },
  '6': {
    ...capsize({ leading: 44, fontSize: theme.fontSizes[6] }),

    letterSpacing: '-1.45px',
    fontWeight: 700,
  },
  '7': {
    ...capsize({ leading: 72, fontSize: theme.fontSizes[7] }),
    letterSpacing: '-1.45px',
    fontWeight: 700,
  },
};

type TextVariant =
  | '1r'
  | '1rserif'
  | '1b'
  | '2r'
  | '2b'
  | '3b'
  | '3r'
  | '3serif'
  | '4'
  | 4
  | '4b'
  | '5'
  | 5
  | '5b'
  | '6'
  | 6
  | '7'
  | 7
  | '-1m'
  | '-1r'
  | '-1b'
  | '-1u';

type BaseTextProps = TextColorProps &
  TextAlignProps &
  TextShadowProps &
  TextStyleProps;

export type TextProps = Partial<Omit<React.HTMLAttributes<any>, 'color'>> & {
  key?: any;
  as?: any;
  variant?: ResponsiveValue<TextVariant | null>;
  color?: ResponsiveValue<Pick<Theme, 'colors'> | string>;
  sx?: BaseTextProps & Partial<Record<Pseudos, BaseTextProps>>;
};

const Text = styled('span', { shouldForwardProp })<TextProps>(
  color,
  variant({
    variants: Object.entries(styles).reduce((acc, [k, v]) => {
      acc[k] = v;
      return acc;
    }, {}),
  }),
  ({ sx }) => {
    return sx ? css(sx) : null;
  },
);

Text.defaultProps = {
  variant: '1r',
};

Text.displayName = 'Monterey(Text)';

export { Text as default, styles };
