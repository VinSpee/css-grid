import { View, styled, sx } from '@tedconf/monterey';
export default styled<any>(View)(
  sx({
    '&::after': {
      marginTop: 4,
      display: 'block',
      height: '2px',
      width: 10,
      content: '""',
      backgroundColor: 'gray.2',
      borderRadius: 4,
    },
  }),
);
