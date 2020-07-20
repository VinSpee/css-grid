import * as React from 'react';
import { View } from '@tedconf/monterey';

function calculateAspectRatio(
  aspectRatio: string | number | Array<number>,
): number {
  if (typeof aspectRatio === 'number') {
    return 1 / aspectRatio;
  }

  if (
    Array.isArray(aspectRatio) &&
    aspectRatio[0] !== undefined &&
    aspectRatio[1] !== undefined
  ) {
    return aspectRatio[1] / aspectRatio[0];
  }

  if (typeof aspectRatio === 'string') {
    const parsedValue = Number.parseFloat(aspectRatio);
    if (Number.isNaN(parsedValue)) {
      throw new Error(`Cannot parse props.aspectRatio: ${aspectRatio}`);
    }
    return 1 / Number.parseFloat(aspectRatio);
  }

  throw new Error(`Cannot parse props.aspectRatio: ${aspectRatio}`);
}

type RatioProps = React.AllHTMLAttributes<HTMLElement> & {
  ratio?: Array<number>;
};

function Ratio({
  ratio = [16, 9],
  children,
  className,
  ...props
}: RatioProps): React.ReactElement {
  const multiplier = (r: Array<number>): number => calculateAspectRatio(r);

  return (
    <View
      sx={{
        display: 'block',
        size: '100%',
        position: 'relative',
      }}
      {...props}
    >
      <View
        sx={{
          size: '100%',
          display: 'block',
          paddingTop: `${100 * multiplier(ratio)}%`,
        }}
      />
      <View
        sx={{
          size: '100%',
          display: 'block',
          position: 'absolute',
          bottom: 0,
          left: 0,
          top: 0,
          right: 0,
        }}
        className={className}
      >
        {children}
      </View>
    </View>
  );
}

Ratio.calculate = calculateAspectRatio;

Ratio.displayName = 'ℤenith(Ratio)';

export { Ratio as default, calculateAspectRatio };
