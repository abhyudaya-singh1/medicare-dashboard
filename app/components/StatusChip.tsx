import Chip from '@mui/material/Chip';
import type { PatientStatus } from '../data/patients';

const styles: Record<PatientStatus, { bg: string; color: string }> = {
  Stable: { bg: '#E8F5EC', color: '#3F8056' },
  'Follow-up': { bg: '#FBF1DC', color: '#8A6A2F' },
  Critical: { bg: '#FDE8E7', color: '#D97973' },
};

export default function StatusChip({ status }: { status: PatientStatus }) {
  const { bg, color } = styles[status];
  return (
    <Chip
      label={status}
      size="small"
      sx={{ bgcolor: bg, color, fontSize: 12, height: 24 }}
    />
  );
}