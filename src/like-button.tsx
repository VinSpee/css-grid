import * as React from 'react';
import { View } from '@tedconf/monterey';
import Text from './text';

const LikeIcon = ({ recorded }: { recorded?: boolean }) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.66671 14.6666H2.66671C2.31309 14.6666 1.97395 14.5261 1.7239 14.2761C1.47385 14.026 1.33337 13.6869 1.33337 13.3333V8.66659C1.33337 8.31296 1.47385 7.97383 1.7239 7.72378C1.97395 7.47373 2.31309 7.33325 2.66671 7.33325H4.66671M9.33337 5.99992V3.33325C9.33337 2.80282 9.12266 2.29411 8.74759 1.91904C8.37252 1.54397 7.86381 1.33325 7.33337 1.33325L4.66671 7.33325V14.6666H12.1867C12.5083 14.6702 12.8203 14.5575 13.0653 14.3493C13.3103 14.141 13.4718 13.8512 13.52 13.5333L14.44 7.53325C14.469 7.34216 14.4562 7.14704 14.4023 6.96142C14.3484 6.7758 14.2548 6.60412 14.1279 6.45826C14.0011 6.31241 13.8441 6.19587 13.6678 6.11673C13.4914 6.03759 13.3 5.99773 13.1067 5.99992H9.33337Z"
      stroke="currentColor"
      fill={recorded ? 'currentColor' : ''}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type LikeButtonProps = {
  count?: number;
  recorded?: boolean;
  as?: string | React.ReactElement;
};

export default function LikeButton({
  count = 0,
  as = 'button',
  recorded,
}: LikeButtonProps) {
  return (
    <View
      as={as}
      sx={{
        flexDirection: 'row',
        paddingX: 4,
        paddingY: 3,
        color: 'gray.1',
        borderRadius: '3em',
        // @ts-ignore
        border: (theme) => `1px solid ${theme.colors.gray[2]}`,
        ...(recorded && {
          color: 'TEDRed.0',
          backgroundColor: 'TEDRed.1',
          border: '1px solid currentColor',
        }),
      }}
    >
      <View
        sx={{
          width: 4,
          paddingRight: '1px',
          marginRight: 2,
          marginTop: '-5px',
        }}
      >
        <LikeIcon recorded={recorded} />
      </View>
      <View>
        <Text variant="-1m">{count}</Text>
      </View>
    </View>
  );
}
