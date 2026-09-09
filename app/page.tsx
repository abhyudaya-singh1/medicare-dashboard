import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import DashboardLayout from './components/DashboardLayout';
import KpiCard from './components/KpiCard';
import { kpis } from './data/dashboard';

const iconMap = {
  patients: PeopleOutlinedIcon,
  appointments: CalendarMonthOutlinedIcon,
  followups: AssignmentOutlinedIcon,
  alerts: WarningAmberOutlinedIcon,
};

export default function Home() {
  return (
    <DashboardLayout>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          mb: 3,
          flexWrap: 'wrap',
        }}
      >
        <Box>
          <Typography sx={{ fontSize: 24, fontWeight: 600, color: 'text.primary' }}>
            Good morning, Dr. Sarah
          </Typography>
          <Typography sx={{ fontSize: 14, color: 'text.secondary', mt: 0.5 }}>
            Here's your clinical overview for today.
          </Typography>
        </Box>
        <Button variant="contained" startIcon={<AddIcon />} sx={{ height: 38, px: 2 }}>
          New Patient
        </Button>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' },
          gap: 2,
        }}
      >
        {kpis.map((kpi) => {
          const Icon = iconMap[kpi.icon];
          return (
            <KpiCard
              key={kpi.id}
              label={kpi.label}
              value={kpi.value}
              hint={kpi.hint}
              hintColor={kpi.hintColor}
              iconBg={kpi.iconBg}
              icon={<Icon sx={{ fontSize: 18, color: kpi.iconColor }} />}
            />
          );
        })}
      </Box>
    </DashboardLayout>
  );
}