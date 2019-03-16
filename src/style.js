import { createGlobalStyle } from 'styled-components'
import eot from '@/statics/fonts/icomoon.eot'
import ttf from '@/statics/fonts/icomoon.ttf'
import woff from '@/statics/fonts/icomoon.woff'
import svg from '@/statics/fonts/icomoon.svg'

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  @font-face {
    font-family: 'icomoon';
    src:  url(${eot});
    src:  url(${eot}) format('embedded-opentype'),
      url(${ttf}) format('truetype'),
      url(${woff}) format('woff'),
      url(${svg}) format('svg');
    font-weight: normal;
    font-style: normal;
  }

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* 来自于 js 的坑这个会生成 js, 所以必须写 js 的格式 */
  .icon-refresh:before {
    content: "\ue900";
  }
  .icon-remove:before {
    content: "\ue901";
  }
  .icon-upload:before {
    content: "\ue902";
  }

`