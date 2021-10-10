import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
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
    fontFamily: ['comfortaa', 'Arial', 'sans-serif'].join(','),
  },
})

export default theme
