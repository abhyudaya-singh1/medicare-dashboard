'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import DashboardLayout from '../components/DashboardLayout';
import StatusChip from '../components/StatusChip';
import { patients, type PatientStatus } from '../data/patients';
const FILTERS: Array<'All' | PatientStatus> = ['All', 'Stable', 'Follow-up', 'Critical'];

export default function PatientsView() {
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | PatientStatus>('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return patients.filter((p) => {
      const matchesQuery =
        q === '' ||
        p.name.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q);
      const matchesStatus = statusFilter === 'All' || p.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [query, statusFilter]);

  return (
    <DashboardLayout>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3, gap: 2, flexWrap: 'wrap' }}>
        <Box>
          <Typography sx={{ fontSize: 24, fontWeight: 600 }}>Patients</Typography>
          <Typography sx={{ fontSize: 14, color: 'text.secondary', mt: 0.5 }}>
            {patients.length} total patients under your care.
          </Typography>
        </Box>
        <Button variant="contained" startIcon={<AddIcon />} sx={{ height: 38 }}>
          New Patient
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 1.5, mb: 2.5, flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size="small"
          placeholder="Search by name or ID..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ width: 280, '& .MuiOutlinedInput-root': { height: 36, bgcolor: '#fff', fontSize: 13 } }}
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
        {FILTERS.map((f) => (
          <Chip
            key={f}
            label={f}
            clickable
            onClick={() => setStatusFilter(f)}
            sx={{
              height: 36,
              px: 0.5,
              bgcolor: statusFilter === f ? '#E8F6F3' : '#fff',
              border: '1px solid',
              borderColor: statusFilter === f ? '#5FB8A8' : '#E5EAEA',
              color: statusFilter === f ? '#5FB8A8' : 'text.primary',
              fontWeight: 500,
            }}
          />
        ))}
      </Box>

      <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid #E5EAEA', borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              {['PATIENT', 'ID', 'AGE / GENDER', 'CONDITION', 'LAST VISIT', 'STATUS', 'ACTION'].map((h) => (
                <TableCell key={h} sx={{ color: 'text.secondary', fontSize: 12, fontWeight: 600 }}>
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((p) => (
              <TableRow key={p.id} hover>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Avatar sx={{ width: 36, height: 36, bgcolor: p.avatarColor, color: 'text.primary', fontSize: 13, fontWeight: 600 }}>
                      {p.initials}
                    </Avatar>
                    <Typography sx={{ fontSize: 14, fontWeight: 600 }}>{p.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: 'text.secondary' }}>{p.id}</TableCell>
                <TableCell sx={{ color: 'text.secondary' }}>
                  {p.age} · {p.gender}
                </TableCell>
                <TableCell sx={{ color: 'text.secondary' }}>{p.condition}</TableCell>
                <TableCell sx={{ color: 'text.secondary' }}>{p.lastVisit}</TableCell>
                <TableCell>
                  <StatusChip status={p.status} />
                </TableCell>
                <TableCell>
                  <Button component={Link} href={`/patients/${p.id}`} size="small" sx={{ color: 'primary.main', minWidth: 0 }}>
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} sx={{ py: 4, textAlign: 'center', color: 'text.secondary' }}>
                  No patients match this search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography sx={{ fontSize: 13, color: 'text.secondary', mt: 2 }}>
        Showing {filtered.length} of {patients.length} patients
      </Typography>
    </DashboardLayout>
  );
}