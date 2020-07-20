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
  name?: string;
  byline?: string;
  onFollow?: () => any;
  onUnfollow?: () => any;
};

export default function User({
  photoUrl,
  name,
  byline,
  onFollow,
  onUnfollow,
}: UserProps) {
  const { ref, getStyleForBreakpoint: bp } = useContainerQuery({
    breakpoints: [202, 232, 272],
  });
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
      }}
    >
      <View
        sx={{
          minWidth: 6,
          maxWidth: bp([12, 17, 21, 31]),
          marginRight: bp([5, null, 6]),
          marginBottom: bp([5, 0]),
          flexBasis: '33.3%',
          borderRadius: '50%',
          width: '100%',
        }}
        as="img"
        src={photoUrl}
      />
      <View>
        <View sx={{ marginBottom: bp([2, 3]) }}>
          <Text variant={bp(['1b', null, null, '2b'])}>{name}</Text>
        </View>
        <View>
          <Text color="gray.0" variant={bp(['-1r', null, null, '1r'])}>
            {byline}
          </Text>
        </View>
        {onFollow && (
          <View sx={{ marginTop: bp([3, null, 5, null, 6]) }}>
            {bp([
              <View
                sx={{ flexDirection: 'row', width: '100%', color: 'TEDRed.0' }}
                as="button"
              >
                <View sx={{ width: 3, marginTop: '-1px', marginRight: 2 }}>
                  <FollowIcon />
                </View>
                <Text variant="-1m">Follow</Text>
              </View>,
              null,
              <Button icon={<FollowIcon />}>Follow</Button>,
            ])}
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
