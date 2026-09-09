'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#5FB8A8',
      dark: '#4FA696',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#253333',
      secondary: '#687777',
    },
    background: {
      default: '#F8FAFA',
      paper: '#FFFFFF',
    },
    divider: '#E5EAEA',
    error: { main: '#D97973' },
    success: { main: '#3F8056' },
    warning: { main: '#8A6A2F' },
    info: { main: '#5B9BC2' },
  },
  typography: {
    fontFamily: 'var(--font-inter)',
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F8FAFA',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        color: 'inherit',
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          borderColor: '#E5EAEA',
          borderRadius: 12,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 240,
          boxSizing: 'border-box',
          borderRight: '1px solid #E5EAEA',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&.Mui-selected': {
            backgroundColor: '#E8F6F3',
            color: '#5FB8A8',
            '&:hover': {
              backgroundColor: '#E8F6F3',
            },
            '& .MuiListItemIcon-root': {
              color: '#5FB8A8',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 20,
        },
      },
    },
  },
});

export default theme;