import * as React from 'react';
import useDimensions from 'react-cool-dimensions';

const styleForBp = (current: string | number) => (styles: any): any => {
  const getLastValue = Array.isArray(styles)
    ? styles.reduce((acc, curr, i) => {
        return current >= i ? (curr == null ? acc : curr) : acc;
      }, undefined)
    : styles;
  return getLastValue;
};

const BREAKPOINTS = [400, 576, 768, 992, 1024, 1200, 1600];

type UseBreakpointsType = {
  breakpoints?: number[];
};
export default (
  { breakpoints = BREAKPOINTS }: UseBreakpointsType = {
    breakpoints: BREAKPOINTS,
  },
) => {
  const formattedBps = React.useMemo(
    () =>
      breakpoints.reduce(
        (acc: Record<string, number>, curr, i) => {
          acc[i + 1] = curr;
          return acc;
        },
        { '0': 0 },
      ),
    [breakpoints],
  );

  const dims = useDimensions({
    breakpoints: formattedBps,
  });
  const value = React.useMemo(() => styleForBp(dims.currentBreakpoint), [dims]);
  return {
    ...dims,
    getStyleForBreakpoint: value,
  };
};
