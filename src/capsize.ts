const FONT_METRICS = {
  familyName: 'Inter',
  subfamilyName: 'Regular',
  capHeight: 2048,
  ascent: 2728,
  descent: -680,
  lineGap: 0,
  unitsPerEm: 2816,
  xHeight: 1536,
};

// Modified from https://github.com/seek-oss/capsize/blob/47ad276443609559096f4d95d45de387f97a037b/packages/capsize/src/index.ts

const preventCollapse = 1;
// @ts-ignore
export default function capsize({
  leading,
  gap,
  capHeight,
  fontSize,
  fontMetrics = FONT_METRICS,
}) {
  if (typeof leading !== 'undefined' && typeof gap !== 'undefined') {
    throw new Error(
      'Only a single line height style can be provided. Please pass either `gap` OR `leading`.',
    );
  }

  if (typeof capHeight !== 'undefined' && typeof fontSize !== 'undefined') {
    throw new Error('Please pass either `capHeight` OR `fontSize`, not both.');
  }

  const capHeightScale = fontMetrics.capHeight / fontMetrics.unitsPerEm;

  let specifiedFontSize;
  let specifiedCapHeight;

  if (typeof fontSize !== 'undefined') {
    specifiedFontSize = fontSize;
    specifiedCapHeight = fontSize * capHeightScale;
  } else {
    specifiedFontSize = capHeight / capHeightScale;
    specifiedCapHeight = capHeight;
  }

  const specifiedLineHeight =
    typeof gap !== 'undefined' ? specifiedCapHeight + gap : leading;

  return createCss({
    specifiedLineHeight,
    fontSize: specifiedFontSize,
    fontMetrics,
  });
}

function createCss({
  // @ts-ignore
  specifiedLineHeight,
  // @ts-ignore
  fontSize,
  // @ts-ignore
  fontMetrics,
}) {
  const capHeightScale = fontMetrics.capHeight / fontMetrics.unitsPerEm;
  const formattedFontSize =
    typeof fontSize === 'string'
      ? Number(fontSize.replace('px', ''))
      : fontSize;
  // @ts-ignore
  const toScale = (value) => value / formattedFontSize;

  const absoluteDescent = Math.abs(fontMetrics.descent);
  const descentScale = absoluteDescent / fontMetrics.unitsPerEm;
  const ascentScale = fontMetrics.ascent / fontMetrics.unitsPerEm;
  const contentArea = fontMetrics.ascent + absoluteDescent;
  const lineHeight = contentArea + fontMetrics.lineGap;
  const lineHeightScale = lineHeight / fontMetrics.unitsPerEm;
  const lineHeightNormal = lineHeightScale * formattedFontSize;

  const hasSpecifiedLineHeight = typeof specifiedLineHeight !== 'undefined';

  const specifiedLineHeightOffset =
    hasSpecifiedLineHeight && typeof specifiedLineHeight === 'number'
      ? (lineHeightNormal - specifiedLineHeight) / 2
      : 0;

  // @ts-ignore
  const leadingTrim = (value) =>
    value - toScale(specifiedLineHeightOffset) + toScale(preventCollapse);

  return {
    fontSize,
    ...(hasSpecifiedLineHeight && { lineHeight: `${specifiedLineHeight}px` }),
    paddingTop: `${preventCollapse}px`,
    paddingBottom: `${preventCollapse}px`,
    ':before': {
      content: "''",
      marginTop: `-${leadingTrim(ascentScale - capHeightScale)}em`,
      display: 'block',
      height: 0,
    },
    ':after': {
      content: "''",
      marginBottom: `-${leadingTrim(descentScale)}em`,
      display: 'block',
      height: 0,
    },
  };
}
