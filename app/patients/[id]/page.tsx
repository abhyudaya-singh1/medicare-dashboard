'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DashboardLayout from '../../components/DashboardLayout';
import StatusChip from '../../components/StatusChip';
import { getPatientById, type TagItem, type DocumentItem } from '../../data/patients';

const tagColor = {
  pink: { bg: '#FDE8E7', color: '#D97973' },
  yellow: { bg: '#F8F0DC', color: '#8A6A2F' },
  mint: { bg: '#E8F6F3', color: '#3F8056' },
};

const docColor = {
  pink: { bg: '#FDE8E7', color: '#D97973' },
  blue: { bg: '#DCECF8', color: '#5B9BC2' },
  mint: { bg: '#E8F6F3', color: '#5FB8A8' },
};

function Field({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>{label}</Typography>
      <Typography sx={{ fontSize: 14, fontWeight: 600, mt: 0.25 }}>{value}</Typography>
    </Box>
  );
}

function Vital({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <Box sx={{ bgcolor: '#E8F6F3', borderRadius: 2, p: 2, height: '100%' }}>
      <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>{label}</Typography>
      <Typography sx={{ fontSize: 28, fontWeight: 600, lineHeight: 1.2, mt: 0.5 }}>{value}</Typography>
      <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>{unit}</Typography>
      <Chip label="Normal" size="small" sx={{ mt: 1, bgcolor: '#fff', height: 22, fontSize: 11 }} />
    </Box>
  );
}

export default function PatientDetailPage() {
  const params = useParams();
  const id = decodeURIComponent(String(params.id));
  const patient = getPatientById(id);
  const [tab, setTab] = useState(0);

  if (!patient) {
    return (
      <DashboardLayout>
        <Typography sx={{ mb: 2 }}>Patient not found.</Typography>
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
        sx={{ mb: 2, color: 'primary.main', px: 0 }}
      >
        Back to Patients
      </Button>

      <Card sx={{ p: 2.5, mb: 2, display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Avatar sx={{ width: 56, height: 56, bgcolor: patient.avatarColor, color: 'text.primary', fontWeight: 600 }}>
          {patient.initials}
        </Avatar>
        <Box sx={{ flex: 1, minWidth: 200 }}>
          <Typography sx={{ fontSize: 20, fontWeight: 600 }}>{patient.name}</Typography>
          <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>
            {patient.id} · {patient.gender} · {patient.age} years · Blood Group: {patient.bloodGroup}
          </Typography>
        </Box>
        <StatusChip status={patient.status} />
        <Button variant="contained" sx={{ height: 36 }}>
          Edit Patient
        </Button>
        <IconButton sx={{ border: 1, borderColor: 'divider', borderRadius: 2 }}>
          <MoreHorizIcon />
        </IconButton>
      </Card>

      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        sx={{
          mb: 2,
          '& .MuiTab-root': { textTransform: 'none', fontWeight: 500 },
          '& .Mui-selected': { color: 'primary.main' },
        }}
      >
        <Tab label="Overview" />
        <Tab label="Medical History" />
        <Tab label="Appointments" />
        <Tab label="Documents" />
      </Tabs>

      {tab === 0 && (
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' }, gap: 2 }}>
          <Card sx={{ p: 2.5 }}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Patient Information</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              <Field label="Full Name" value={patient.name} />
              <Field label="Date of Birth" value={patient.dob} />
              <Field label="Gender" value={patient.gender} />
              <Field label="Blood Group" value={patient.bloodGroup} />
              <Field label="Phone" value={patient.phone} />
              <Field label="Email" value={patient.email} />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Field label="Address" value={patient.address} />
            </Box>
            <Box sx={{ borderTop: 1, borderColor: 'divider', mt: 2.5, pt: 2 }}>
              <Typography sx={{ fontWeight: 600, mb: 1.5 }}>Emergency Contact</Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                <Field label="Name" value={patient.emergency.name} />
                <Field label="Relationship" value={patient.emergency.relationship} />
                <Field label="Phone" value={patient.emergency.phone} />
              </Box>
            </Box>
          </Card>
          <Card sx={{ p: 2.5 }}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Current Vitals</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
              <Vital label="Blood Pressure" value={patient.vitals.bp} unit="mmHg" />
              <Vital label="Heart Rate" value={patient.vitals.hr} unit="bpm" />
              <Vital label="Temperature" value={patient.vitals.temp} unit="°F" />
              <Vital label="SpO₂" value={patient.vitals.spo2} unit="Oxygen" />
            </Box>
          </Card>
        </Box>
      )}

      {tab === 1 && (
        <Card sx={{ p: 2.5 }}>
          <Typography sx={{ fontWeight: 600, mb: 2 }}>Medical History</Typography>
          {patient.history.map((h, i) => (
            <Box key={h.date} sx={{ display: 'flex', gap: 2, pb: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'primary.main', mt: 0.5 }} />
                {i < patient.history.length - 1 && (
                  <Box sx={{ width: 2, flex: 1, bgcolor: '#D7EFEB', minHeight: 28 }} />
                )}
              </Box>
              <Box>
                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>{h.date}</Typography>
                <Typography sx={{ fontWeight: 600 }}>{h.title}</Typography>
                <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>{h.note}</Typography>
              </Box>
            </Box>
          ))}
          <Box sx={{ borderTop: 1, borderColor: 'divider', pt: 2, mt: 1 }}>
            <Typography sx={{ fontWeight: 600, mb: 1.5 }}>Allergies & Conditions</Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {patient.tags.map((t: TagItem) => (
                <Chip
                  key={t.label}
                  label={t.label}
                  sx={{ bgcolor: tagColor[t.tone].bg, color: tagColor[t.tone].color, fontWeight: 500 }}
                />
              ))}
            </Box>
          </Box>
        </Card>
      )}

      {tab === 2 && (
        <Card sx={{ p: 2.5 }}>
          <Typography sx={{ fontWeight: 600, mb: 2 }}>Recent Appointments</Typography>
          <Table>
            <TableHead>
              <TableRow>
                {['DATE', 'DOCTOR', 'TYPE', 'STATUS', 'NOTES'].map((h) => (
                  <TableCell key={h} sx={{ color: 'text.secondary', fontSize: 12, fontWeight: 600 }}>
                    {h}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {patient.appointments.map((a) => (
                <TableRow key={a.date + a.type}>
                  <TableCell>{a.date}</TableCell>
                  <TableCell>{a.doctor}</TableCell>
                  <TableCell>{a.type}</TableCell>
                  <TableCell>
                    <Chip
                      label={a.status}
                      size="small"
                      sx={{
                        bgcolor: a.status === 'Completed' ? '#E8F6F3' : '#DCECF8',
                        color: a.status === 'Completed' ? '#3F8056' : '#5B9BC2',
                        fontWeight: 500,
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ color: 'text.secondary' }}>{a.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}

      {tab === 3 && (
        <Card sx={{ p: 2.5 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography sx={{ fontWeight: 600 }}>Documents</Typography>
            <Button variant="outlined" startIcon={<UploadIcon />} sx={{ height: 34 }}>
              Upload
            </Button>
          </Box>
          {patient.documents.map((d: DocumentItem) => (
            <Box
              key={d.name}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                p: 1.5,
                mb: 1,
                border: 1,
                borderColor: 'divider',
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 1,
                  bgcolor: docColor[d.tone].bg,
                  color: docColor[d.tone].color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <InsertDriveFileOutlinedIcon fontSize="small" />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: 14, fontWeight: 600 }}>{d.name}</Typography>
                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
                  Uploaded {d.date} · {d.size}
                </Typography>
              </Box>
              <IconButton size="small">
                <DownloadIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Card>
      )}
    </DashboardLayout>
  );
}