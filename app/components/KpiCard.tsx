import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

type KpiCardProps = {
  label: string;
  value: string;
  hint: string;
  hintColor: string;
  icon: React.ReactNode;
  iconBg: string;
};

export default function KpiCard({
  label,
  value,
  hint,
  hintColor,
  icon,
  iconBg,
}: KpiCardProps) {
  return (
    <Card sx={{ p: '20px', height: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          mb: 2,
        }}
      >
        <Typography sx={{ fontSize: 13, color: 'text.secondary', fontWeight: 500 }}>
          {label}
        </Typography>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: '8px',
            bgcolor: iconBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </Box>
      </Box>
      <Typography sx={{ fontSize: 28, fontWeight: 600, color: 'text.primary', lineHeight: 1.2 }}>
        {value}
      </Typography>
      <Typography sx={{ fontSize: 12, color: hintColor, mt: 0.75 }}>
        {hint}
      </Typography>
    </Card>
  );
}