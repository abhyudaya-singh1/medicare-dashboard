'use client';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { notifications, type NotificationItem } from '../data/notifications';

const iconWrap: Record<NotificationItem['kind'], { bg: string; color: string }> = {
  critical: { bg: '#FDE8E7', color: '#D97973' },
  followup: { bg: '#F8F0DC', color: '#C4A35A' },
  lab: { bg: '#E8F6F3', color: '#5FB8A8' },
  patient: { bg: '#DCECF8', color: '#5B9BC2' },
};

const iconMap = {
  critical: WarningAmberOutlinedIcon,
  followup: CalendarMonthOutlinedIcon,
  lab: AssignmentTurnedInOutlinedIcon,
    patient: PersonOutlinedIcon,
};

const unreadCount = notifications.filter((n) => n.unread).length;

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function NotificationsDrawer({ open, onClose }: Props) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{ paper: { sx: { width: { xs: '100%', sm: 380 } } } }}
    >
      <Box
        sx={{
          px: 2.5,
          py: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography sx={{ fontSize: 16, fontWeight: 600 }}>Notifications</Typography>
          <Box
            sx={{
              px: 1,
              py: 0.25,
              borderRadius: '999px',
              bgcolor: '#FDE8E7',
              color: '#D97973',
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            {unreadCount} new
          </Box>
        </Box>
        <IconButton onClick={onClose} size="small">
          <CloseIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Box>

      <Box sx={{ px: 1, py: 1 }}>
        {notifications.map((n) => {
          const Icon = iconMap[n.kind];
          const colors = iconWrap[n.kind];
          return (
            <Box
              key={n.id}
              sx={{
                display: 'flex',
                gap: 1.5,
                px: 1.5,
                py: 1.5,
                borderRadius: 2,
                '&:hover': { bgcolor: 'background.default' },
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '8px',
                  bgcolor: colors.bg,
                  color: colors.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon sx={{ fontSize: 18 }} />
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography sx={{ fontSize: 14, fontWeight: 600 }}>{n.title}</Typography>
                <Typography sx={{ fontSize: 13, color: 'text.secondary', mt: 0.25 }}>
                  {n.body}
                </Typography>
                <Typography sx={{ fontSize: 12, color: '#8A9696', mt: 0.5 }}>{n.time}</Typography>
              </Box>
              {n.unread && (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    mt: 1,
                    flexShrink: 0,
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>
    </Drawer>
  );
}