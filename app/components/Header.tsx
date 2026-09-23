'use client';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
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
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const profileOpen = Boolean(anchorEl);

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
                <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} sx={{ p: 0 }}>
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: '#E8F6F3',
                color: 'primary.main',
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              DS
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={profileOpen}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            slotProps={{
              paper: {
                sx: { width: 260, mt: 1, borderRadius: 2 },
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2, py: 1.5 }}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: '#E8F6F3',
                  color: 'primary.main',
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                DS
              </Avatar>
              <Box>
                <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Dr. Sarah Chen</Typography>
                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
                  sarah.chen@medicare.io
                </Typography>
              </Box>
            </Box>
            <Divider />
            <MenuItem onClick={() => setAnchorEl(null)}>
              <ListItemIcon>
                <PersonOutlinedIcon fontSize="small" />
              </ListItemIcon>
              My Profile
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>
              <ListItemIcon>
                <SettingsOutlinedIcon fontSize="small" />
              </ListItemIcon>
              Account Settings
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>
              <ListItemIcon>
                <HelpOutlineIcon fontSize="small" />
              </ListItemIcon>
              Help & Support
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => setAnchorEl(null)} sx={{ color: '#D97973' }}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" sx={{ color: '#D97973' }} />
              </ListItemIcon>
              Sign Out
            </MenuItem>
          </Menu>
        
        
      </Box>
            <NotificationsDrawer open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}