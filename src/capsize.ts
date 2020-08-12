import capsize, { CapsizeOptions } from 'capsize';

const FONT_METRICS = {
  familyName: 'Inter',
  subfamilyName: 'Regular',
  capHeight: 2048,
  ascent: 2728,
  descent: -680,
  lineGap: 0,
  unitsPerEm: 2816,
  xHeight: 1536,
} as CapsizeOptions['fontMetrics'];

export default function interSize(props) {
  return capsize({
    ...props,
    fontSize: props.fontSize ? Number(props.fontSize.replace('px', '')) : null,
    fontMetrics: FONT_METRICS,
  });
}
