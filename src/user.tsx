import * as React from 'react';
import { View } from '@tedconf/monterey';
import Text from './text';
import Button from './button';
import useContainerQuery from './use-breakpoint';

const FollowIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 1.16602V12.8327"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.16602 7H12.8327"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UnfollowIcon = () => (
  <svg viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13 1.5L4.75 9.75L1 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type UserProps = {
  photoUrl?: string;
  inline?: boolean;
  stacked?: boolean;
  name?: string;
  byline?: string;
  onFollow?: () => any;
  onUnfollow?: () => any;
};

export default function User({
  photoUrl,
  name,
  stacked,
  inline,
  byline,
  onFollow,
  onUnfollow,
}: UserProps) {
  const { ref, getStyleForBreakpoint: bp } = useContainerQuery({
    breakpoints: [202, 232, 272],
  });
  const randomUrl = React.useMemo(
    () => `${photoUrl}?lock=${Math.random().toFixed(2).slice(2, 5)}`,
    [photoUrl],
  );
  return (
    <View
      // @ts-ignore
      ref={ref}
      sx={{
        width: '100%',
        maxWidth: 68,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        flexWrap: 'wrap',
        // @ts-ignore
        wordBreak: 'break-all',
        ...(inline && { width: 'unset', maxWidth: '100%' }),
      }}
    >
      <View
        sx={{
          minWidth: 6,
          height: '100%',
          marginRight: bp([5, null, 6]),
          marginBottom: bp([5, 0]),
          flexBasis: '33.3%',
          borderRadius: '50%',
          width: '100%',
          ...(inline && {
            width: '1.5em',
            height: '1.5em',
            flexBasis: 'auto',
            minWidth: 'unset',
            marginBottom: 0,
            marginRight: 1,
          }),
          ...(stacked && {
            flexBasis: 'auto',
          }),
        }}
        src={randomUrl}
        as="img"
      />
      <View sx={inline ? { flexDirection: 'row', alignItems: 'center' } : null}>
        <View
          sx={{
            marginBottom: bp([2, 3]),
            ...(inline && {
              marginBottom: 0,
            }),
          }}
        >
          <Text
            // @ts-ignore
            variant={inline ? '1b' : bp(['1b', null, null, '2b'])}
          >
            {name}
            {inline && Boolean(byline) && <>,{'\u00A0'}</>}
          </Text>
        </View>
        {byline && (
          <View sx={{ marginLeft: inline && 1 }}>
            <Text
              color="gray.0"
              variant={inline ? '1r' : bp(['-1r', null, null, '1r'])}
            >
              {byline}
            </Text>
          </View>
        )}
        {onFollow && !inline && (
          <View sx={{ marginTop: bp([3, null, 5, null, 6]) }}>
            <Button icon={<FollowIcon />}>Follow</Button>
          </View>
        )}
        {onUnfollow && (
          <View sx={{ marginTop: bp([3, null, 4, null, 6]) }}>
            <View
              sx={{
                color: 'gray.1',
                flexDirection: 'row',
              }}
            >
              <View sx={{ paddingRight: 2 }}>
                <UnfollowIcon />
              </View>
              <Text variant="-1m">Following</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
