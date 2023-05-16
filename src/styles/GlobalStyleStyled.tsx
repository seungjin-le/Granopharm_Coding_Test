import {createGlobalStyle} from 'styled-components'
import AirbnbCereal_W_Bd from '../assets/fonts/airbnb/AirbnbCereal_W_Bd.otf'
import AirbnbCereal_W_Md from '../assets/fonts/airbnb/AirbnbCereal_W_Md.otf'
import GilroyExtraBold from '../assets/fonts/gilroy/Gilroy-ExtraBold.otf'
import GilroyLight from '../assets/fonts/gilroy/Gilroy-Light.otf'
import Urbanist from '../assets/fonts/urbanist/Urbanist-Black.ttf'

//Gilroy-ExtraBold

//src/assets/fonts/airbnb/AirbnbCereal_W_Bd.otf

const GlobalStyleStyled = () => {
  return <GlobalStyle />
}

export default GlobalStyleStyled

const GlobalStyle = createGlobalStyle`

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
  
  
  /* Airbnb 폰트 */
  @font-face {
    font-family: 'AirbnbCerealBd';
    font-weight: bold;
    src: url(${AirbnbCereal_W_Bd}) format('opentype');
  }

  @font-face {
    font-family: 'AirbnbCerealMd';
    src: url(${AirbnbCereal_W_Md}) format('opentype');
  }

  /* Gilroy 폰트 */
  @font-face {
    font-family: 'Gilroy';
    font-weight: 800; /* ExtraBold */
    src: url(${GilroyExtraBold}) format('opentype');
  }

  @font-face {
    font-family: 'Gilroy';
    font-weight: 300; /* Light */
    src: url(${GilroyLight}) format('opentype');
  }

  /* Urbanist 폰트 */
  @font-face {
    font-family: 'Urbanist';
    src: url(${Urbanist}) format('truetype');
  }

  // 페이지 헤더 프로필 드랍다운 메뉴
  .profileDropDownMenu ul{
    min-width: 248px;
    padding: 24px 20px 22px 24px !important;
    flex-grow: 0;
    border-radius: 8px;
    box-shadow: 0 0 60px 4px rgba(0, 0, 0, 0.2);
    top: 1rem;

    & li {
      margin: 0 !important;
      cursor: default !important;
      padding:0 !important;
    }
    & .ant-dropdown-menu-item-divider {
      margin: 0 !important;
    }
    & li:first-child {
      margin-top: 0 !important;
    }
    & li:last-child {
      margin-bottom: 0 !important;
    }

  }

  // 페이지 헤더 프로필 화살표 버튼
  .ant-dropdown-trigger {
    & .arrowBtn {
      transition: 0.2s;
    }
    &.ant-dropdown-open .arrowBtn{
      transform: rotate(180deg);
    }
  }
  
`
