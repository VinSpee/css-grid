import * as React from 'react';
import { View } from '@tedconf/monterey';
import Text from './text';

type EndorsementProps = { children: string; disclaimer?: string };

export default function Endorsement({
  children,
  disclaimer,
}: EndorsementProps) {
  return (
    <View sx={{ width: '100%', maxWidth: 154, position: 'relative' }}>
      <View sx={{ position: 'absolute', top: 0, left: -3 }}>
        <Text color="gray.1" variant="3serif">
          “
        </Text>
      </View>
      <View>
        <Text variant="3serif">{children}”</Text>
      </View>
      {disclaimer && (
        <View
          sx={{
            position: 'relative',
            left: -3,
            width: '100%',
            flexDirection: 'row',
            color: 'gray.1',
            marginTop: 6,
          }}
        >
          <View sx={{ marginRight: 2 }}>
            <Text variant="-1m">★</Text>
          </View>
          <Text variant="-1m">{disclaimer}</Text>
        </View>
      )}
    </View>
  );
}
