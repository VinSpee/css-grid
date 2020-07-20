import * as React from 'react';
import { View } from '@tedconf/monterey';
import Text from './text';

type ButtonProps = {
  children: string;
  icon?: React.ReactNode;
  as?: string | React.ReactElement;
};
export default function Button({
  icon,
  children,
  as = 'button',
  ...props
}: ButtonProps): React.ReactElement {
  return (
    <View
      as={as}
      sx={{
        // @ts-ignore
        cursor: 'pointer',
        borderRadius: 16,
        backgroundColor: 'black',
        color: 'white',
        paddingX: 4,
        paddingY: 2,
        flexDirection: 'row',
        alignItems: 'center',
        '[disabled]': {
          opacity: 0.25,
        },
        // @ts-ignore
        '&:hover': {
          opacity: 0.75,
        },
        // @ts-ignore
        '&:active': {
          opacity: 0.9,
        },
      }}
      {...props}
    >
      {icon && (
        <View sx={{ flexShrink: 1, height: 3, width: 3, marginRight: 2 }}>
          {icon}
        </View>
      )}{' '}
      <View sx={{ flexGrow: 1, width: 'auto' }}>
        <Text variant="-1m">{children}</Text>
      </View>
    </View>
  );
}
