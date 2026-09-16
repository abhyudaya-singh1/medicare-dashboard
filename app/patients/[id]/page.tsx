'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DashboardLayout from '../../components/DashboardLayout';
import StatusChip from '../../components/StatusChip';
import { getPatientById } from '../../data/patients';

export default function PatientDetailPage() {
  const params = useParams();
  const id = String(params.id);
  const patient = getPatientById(id);

  if (!patient) {
    return (
      <DashboardLayout>
        <Typography>Patient not found.</Typography>
        <Button component={Link} href="/patients">
          Back to patients
        </Button>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <Button
        component={Link}
        href="/patients"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 2, color: 'text.secondary' }}
      >
        Back
      </Button>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Avatar
          sx={{
            width: 56,
            height: 56,
            bgcolor: patient.avatarColor,
            color: 'text.primary',
            fontWeight: 600,
          }}
        >
          {patient.initials}
        </Avatar>
        <Box>
          <Typography sx={{ fontSize: 24, fontWeight: 600 }}>{patient.name}</Typography>
          <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>{patient.id}</Typography>
        </Box>
        <StatusChip status={patient.status} />
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
          gap: 2,
        }}
      >
        <Card sx={{ p: 2.5 }}>
          <Typography sx={{ fontSize: 12, color: 'text.secondary', mb: 0.5 }}>Age / Gender</Typography>
          <Typography sx={{ fontWeight: 600 }}>
            {patient.age} · {patient.gender}
          </Typography>
        </Card>
        <Card sx={{ p: 2.5 }}>
          <Typography sx={{ fontSize: 12, color: 'text.secondary', mb: 0.5 }}>Condition</Typography>
          <Typography sx={{ fontWeight: 600 }}>{patient.condition}</Typography>
        </Card>
        <Card sx={{ p: 2.5 }}>
          <Typography sx={{ fontSize: 12, color: 'text.secondary', mb: 0.5 }}>Last visit</Typography>
          <Typography sx={{ fontWeight: 600 }}>{patient.lastVisit}</Typography>
        </Card>
      </Box>
    </DashboardLayout>
  );
}