/** @jsx jsx */

// @ts-ignore
import { jsx, View } from '@tedconf/monterey';
import Text from './text';
import User from './user';

export default function PeopleDemo() {
  return (
    <View
      sx={{
        // @ts-ignore
        '& > *': { marginBottom: 20 },
      }}
    >
      <View sx={{ width: '100%' }}>
        <User
          name="Kristin Watson"
          byline="Role at Organization"
          onFollow={() => {}}
          photoUrl="https://loremflickr.com/250/250/dog"
        />
      </View>
      <View sx={{ width: '100%', maxWidth: 51 }}>
        <User
          name="Kristin Watson"
          byline="Role at Organization"
          onFollow={() => {}}
          photoUrl="https://loremflickr.com/250/250/dog"
        />
      </View>
      <View sx={{ width: '100%', maxWidth: 29 }}>
        <User
          stacked
          name="Kristin Watson"
          byline="Role at Organization"
          onFollow={() => {}}
          photoUrl="https://loremflickr.com/250/250/dog"
        />
      </View>
      <View sx={{ width: '100%', display: 'inline', flexDirection: 'row' }}>
        <Text>
          <View>
            <User
              inline
              name="Kristin Watson"
              byline="Role at Organization"
              photoUrl="https://loremflickr.com/250/250/dog"
            />
          </View>
          {'\u00A0'}, who is a normal person{' '}
        </Text>
      </View>
    </View>
  );
}
