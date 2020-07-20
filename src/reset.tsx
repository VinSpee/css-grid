import * as React from 'react';
import { Global } from '@emotion/core';

export default function Reset(): React.ReactElement {
  return (
    <Global
      styles={`
html {
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
}
*,
*:after,
*:before {
    box-sizing: inherit;
}
small {
    font-size: 100%;
}
button {
    border: 0;
    padding: 0;
    font-size: 100%;
    background-color: transparent;
}
* {
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-size: 1em;
}
code,
input,
isindex,
kbd,
listing,
plaintext,
pre,
samp,
select,
textarea,
tt,
var,
xmp {
    font: inherit;
    font-size: 1em;
    white-space: normal;
}
code, pre { white-space: pre;}
address,
cite,
dfn,
em,
i,
var {
    font-style: normal;
}
b,
h1,
h2,
h3,
h4,
h5,
h6,
strong,
th {
    font-weight: normal;
}
a,
a img,
abbr,
acronym,
applet,
fieldset,
form,
iframe,
img,
object,
table {
    border: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
caption,
center,
td,
th {
    text-align: left;
    vertical-align: top;
}
body {
    margin: 0 !important;
    line-height: 1;
    background: white;
    color: black;
}
q {
    quotes: "" "";
}
dir,
menu,
ol,
ul {
    list-style: none;
    padding-left: 0;
}
sub,
sup {
    vertical-align: baseline;
}
a {
    text-decoration: none;
    color: inherit;
}
hr {
    display: none;
}
font {
    color: inherit !important;
    font: inherit !important;
}
marquee {
    overflow: inherit !important;
    -moz-binding: none;
}
blink {
    text-decoration: none;
}
nobr {
    white-space: normal;
}
    `}
    />
  );
}
