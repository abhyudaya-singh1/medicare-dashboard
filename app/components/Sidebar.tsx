'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const DRAWER_WIDTH = 240;

const navItems = [
  { label: 'Dashboard', href: '/', icon: <GridViewOutlinedIcon fontSize="small" /> },
  { label: 'Patients', href: '/patients', icon: <PeopleOutlinedIcon fontSize="small" /> },
  { label: 'Appointments', href: '/appointments', icon: <CalendarMonthOutlinedIcon fontSize="small" /> },
  { label: 'Settings', href: '/settings', icon: <SettingsOutlinedIcon fontSize="small" /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ px: '20px', pb: 3, pt: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: '8px',
            bgcolor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AddIcon sx={{ color: '#fff', fontSize: 18 }} />
        </Box>
        <Typography sx={{ fontSize: 16, fontWeight: 600, color: 'text.primary' }}>
          MediCare
        </Typography>
      </Box>

      <List sx={{ flex: 1, px: 1.5, py: 0 }}>
        {navItems.map((item) => {
          const selected = pathname === item.href;
          return (
            <ListItemButton
              key={item.href}
              component={Link}
              href={item.href}
              selected={selected}
              sx={{ mb: 0.25, py: 1.25, px: 1.5 }}
            >
              <ListItemIcon sx={{ minWidth: 34, color: selected ? 'primary.main' : 'text.secondary' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
  primary={item.label}
  slotProps={{
    primary: { sx: { fontSize: 14, fontWeight: 500 } },
  }}
/>
            </ListItemButton>
          );
        })}
      </List>

      <Box
        sx={{
          px: '20px',
          py: 2,
          borderTop: 1,
          borderColor: 'divider',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          mt: 'auto',
        }}
      >
        <Avatar
          sx={{
            width: 36,
            height: 36,
            bgcolor: '#D7EFEB',
            color: 'primary.main',
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          DS
        </Avatar>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography sx={{ fontSize: 13, fontWeight: 500 }}>Dr. Sarah</Typography>
          <Typography sx={{ fontSize: 12, color: '#8A9696' }}>Cardiologist</Typography>
        </Box>
        <KeyboardArrowDownIcon sx={{ fontSize: 16, color: '#8A9696' }} />
      </Box>
    </Drawer>
  );
}