'use client';

import { useState } from 'react';
import NotificationsDrawer from './NotificationsDrawer';
import { notifications } from '../data/notifications';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const titles: Record<string, string> = {
  '/': 'Dashboard',
  '/patients': 'Patients',
  '/appointments': 'Appointments',
  '/settings': 'Settings',
};

export default function Header() {
  const pathname = usePathname();
    const title = pathname.startsWith('/patients/')
    ? 'Patient Details'
    : (titles[pathname] ?? 'Dashboard');

    const [open, setOpen] = useState(false);
  const unread = notifications.filter((n) => n.unread).length;

  return (
    <Box
      sx={{
        height: 64,
        px: '28px',
        bgcolor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
      }}
    >
      <Typography sx={{ fontSize: 18, fontWeight: 600, color: 'text.primary' }}>
        {title}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <TextField
          size="small"
          placeholder="Search patients..."
          sx={{
            width: 220,
            '& .MuiOutlinedInput-root': {
              height: 36,
              bgcolor: 'background.default',
              fontSize: 13,
              borderRadius: '8px',
            },
          }}
          slotProps={{
  input: {
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon sx={{ fontSize: 16, color: '#8A9696' }} />
      </InputAdornment>
    ),
  },
}}
        />

        <IconButton
          sx={{
            width: 36,
            height: 36,
            borderRadius: '8px',
            border: 1,
            borderColor: 'divider',
          }}
          onClick={() => setOpen(true)}
        >
          <Badge
  variant="dot"
  overlap="circular"
  invisible={unread === 0}
  sx={{ '& .MuiBadge-badge': { bgcolor: '#D97973' } }}
>
            <NotificationsNoneIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
          </Badge>
        </IconButton>

        <Avatar
          sx={{
            width: 36,
            height: 36,
            bgcolor: '#D7EFEB',
            color: 'primary.main',
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          DS
        </Avatar>
      </Box>
            <NotificationsDrawer open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}