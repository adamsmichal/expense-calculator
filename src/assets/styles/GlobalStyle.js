import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  
${normalize}

* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  overflow-x: hidden;
}

iframe {
  border: 0;
}

img,
video {
  max-width: 100%;
  height: auto;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMy41MDYiIGhlaWdodD0iNi43NTMiIHZpZXdCb3g9IjAgMCAxMy41MDYgNi43NTMiPiAgPHBhdGggaWQ9IlN1YnRyYWN0aW9uXzEiIGRhdGEtbmFtZT0iU3VidHJhY3Rpb24gMSIgZD0iTTY2LjMsMTEwLjc1M2gwTDU5LjU0NCwxMDRINzMuMDVMNjYuMywxMTAuNzUzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU5LjU0NCAtMTA0KSIgZmlsbD0iI2Q5ZDlkOSIvPjwvc3ZnPg==);
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-color: transparent;
  cursor: pointer;
}

select::-ms-expand {
  display: none;
}

.table-rwd-wrapper {
  overflow-x: auto;
}

.embed-responsive {
  position: relative;
}

.embed-responsive.ar-4-by-3 {
  padding-bottom: 75%;
}

.embed-responsive .embed-item {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
