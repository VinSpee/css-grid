import * as React from 'react';
import { theme } from '@tedconf/monterey';
import { ZoneManager, useZone } from 'use-zone-breakpoints';

const styleForBp = (current: string | number) => (styles: any): any => {
  const getLastValue = Array.isArray(styles)
    ? styles.reduce((acc, curr, i) => {
        return current >= i ? (curr == null ? acc : curr) : acc;
      }, undefined)
    : styles;
  return getLastValue;
};

type BreakpointsType = number[];

const BREAKPOINTS = theme.breakpoints as BreakpointsType;
export function WindowSizeManager({
  breakpoints = BREAKPOINTS,
  ...props
}: {
  children: React.ReactNode;
  breakpoints: BreakpointsType;
}): React.ReactElement {
  return <ZoneManager breakpoints={breakpoints} {...props} />;
}

export default () => {
  const currentBreakpoint = useZone();
  const value = React.useMemo(() => styleForBp(currentBreakpoint), [
    currentBreakpoint,
  ]);

  return {
    width: currentBreakpoint,
    getStyleForBreakpoint: value,
  };
};
