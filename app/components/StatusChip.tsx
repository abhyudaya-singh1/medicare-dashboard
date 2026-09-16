import Chip from '@mui/material/Chip';
import type { PatientStatus } from '../data/patients';

const styles: Record<PatientStatus, { bg: string; color: string }> = {
  Stable: { bg: '#E8F6F3', color: '#3F8056' },
  'Follow-up': { bg: '#F8F0DC', color: '#8A6A2F' },
  Critical: { bg: '#FDE8E7', color: '#D97973' },
};

export default function StatusChip({ status }: { status: PatientStatus }) {
  const s = styles[status];
  return (
    <Chip
      label={status}
      size="small"
      sx={{ bgcolor: s.bg, color: s.color, fontWeight: 500, height: 24 }}
    />
  );
}