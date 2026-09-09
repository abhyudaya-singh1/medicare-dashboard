'use client';

import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import Header from './Header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
        }}
      >
        <Header />
        <Box
          component="main"
          sx={{
            flex: 1,
            p: '28px',
            bgcolor: 'background.default',
            overflow: 'auto',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}