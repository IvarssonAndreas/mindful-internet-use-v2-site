import { createTheme } from '@mui/material/styles'


const theme = createTheme({
  components: {

      MuiCssBaseline: {
        styleOverrides: `
    /* comfortaa-regular - latin */
@font-face {
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 400;
    font-display: block;
    src: local(''),
    url('/fonts/v1/comfortaa-v34-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    url('/fonts/v1/comfortaa-v34-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* comfortaa-500 - latin */
@font-face {
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 500;
    font-display: block;
    src: local(''),
    url('/fonts/v1/comfortaa-v34-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    url('/fonts/v1/comfortaa-v34-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* comfortaa-700 - latin */
@font-face {
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 700;
    font-display: block;
    src: local(''),
    url('/fonts/v1/comfortaa-v34-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    url('/fonts/v1/comfortaa-v34-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
} `,
      },

    MuiFilledInput: {
      //Override locally
      styleOverrides: {
        input: {
          padding: 16,
        },
        inputMultiline: {
          paddingLeft: 0,
        },
        multiline: {
          paddingTop: 0,
        },
      },
    },
  },
  spacing: 8,
  palette: {
    mode: 'dark',
    primary: {
      main: 'hsl(30, 100%, 74%)',
      light: 'hsl(33, 100%, 85%)',
      dark: 'hsl(33, 91%, 63%)',
      contrastText: 'hsl(211, 100%, 13%)',
    },
    secondary: {
      main: 'hsl(211, 100%, 13%)',
      light: 'hsl(213, 28%, 51%)',
      contrastText: 'hsl(0, 100%, 100%)',
    },
  },
  typography: {
    fontFamily: [
      'comfortaa',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
})

export default theme
