import React from 'react';
import { Global, css } from '@emotion/react';
import TrueType from './Ananias.ttf';
import Woff from './Ananias.woff';
import Woff2 from './Ananias.woff2';
import OpenType from './Ananias.otf';

const Ananias = css`
    @font-face {
        font-family: 'Ananias';
        src: url(${TrueType}) format('truetype'),
             url(${OpenType}) format('opentype'),
             url(${Woff}) format('woff'),
             url(${Woff2}) format('woff2');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
`;

export default Ananias;
