import * as React from 'react';
import { View } from '@tedconf/monterey';
import Text from './text';
import Ratio from './ratio';
import useContainerQuery from './use-breakpoint';

type TalkUnitProps = {
  src: string;
  stacked?: boolean;
  title: string;
};
export default function TalkUnit({
  stacked = false,
  src,
  title,
}: TalkUnitProps) {
  const { ref, getStyleForBreakpoint: bp } = useContainerQuery({
    breakpoints: [340, 480, 556],
  });

  return (
    <View
      // @ts-ignore
      ref={ref}
      sx={{
        width: '100%',
        maxWidth: 181,
        flexDirection: stacked ? 'column' : 'row',
        alignItems: bp([null, 'center']),
      }}
    >
      <View
        as={Ratio}
        sx={{
          borderRadius: '8px',
          backgroundImage: `url(${src})`,
          position: 'relative',
          width: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          marginBottom: 2,
          marginRight: 4,
        }}
      />
      <View
        sx={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexDirection: 'row',
          marginTop: bp([null, 1, 3, 5]),
          height: '100%',
        }}
      >
        <View
          sx={{
            justifyContent: 'center',
            alignItems: bp(['center', 'flex-start']),
            marginRight: 3,
          }}
        >
          <View>
            <Text variant={bp(['1b', '4b', '5b', null])}>{title}</Text>
          </View>
          <View
            sx={{
              // @ts-ignore
              visibility: bp(['hidden', 'visible']),
              marginTop: bp([null, 5, 4, 5]),
            }}
          >
            <Text color="gray.1" variant="-1u">
              Persona Namehaver
            </Text>
          </View>
        </View>
        <View
          sx={{
            color: 'gray.0',
            width: 5,
            height: 5,
          }}
        >
          <svg
            viewBox="0 0 6 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16671 11C4.16671 10.3557 3.64437 9.83335 3.00004 9.83335C2.35571 9.83335 1.83337 10.3557 1.83337 11C1.83337 11.6444 2.35571 12.1667 3.00004 12.1667C3.64437 12.1667 4.16671 11.6444 4.16671 11Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.16671 2.83333C4.16671 2.189 3.64437 1.66667 3.00004 1.66667C2.35571 1.66667 1.83337 2.189 1.83337 2.83333C1.83337 3.47767 2.35571 4 3.00004 4C3.64437 4 4.16671 3.47767 4.16671 2.83333Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.16671 19.1666C4.16671 18.5223 3.64437 18 3.00004 18C2.35571 18 1.83337 18.5223 1.83337 19.1666C1.83337 19.811 2.35571 20.3333 3.00004 20.3333C3.64437 20.3333 4.16671 19.811 4.16671 19.1666Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </View>
      </View>
    </View>
  );
}
