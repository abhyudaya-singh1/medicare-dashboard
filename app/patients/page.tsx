'use client';

import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Pagination from '@mui/material/Pagination';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import DashboardLayout from '../components/DashboardLayout';
import StatusChip from '../components/StatusChip';
import { patients, TOTAL_PATIENTS } from '../data/patients';

const filters = ['All', 'Stable', 'Follow-up', 'Critical'] as const;
const columns = ['Patient', 'ID', 'Age / Gender', 'Condition', 'Last Visit', 'Status', 'Action'];

export default function PatientsPage() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return patients.filter((p) => {
      const matchesFilter = activeFilter === 'All' || p.status === activeFilter;
      const matchesQuery = q === '' || p.name.toLowerCase().includes(q) || p.id.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [query, activeFilter]);

  return (
    <DashboardLayout>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <Box>
          <Typography sx={{ fontSize: 24, fontWeight: 600, color: 'text.primary' }}>
            Patients
          </Typography>
          <Typography sx={{ fontSize: 14, color: 'text.secondary', mt: 0.5 }}>
            {TOTAL_PATIENTS.toLocaleString()} total patients under your care.
          </Typography>
        </Box>
        <Button variant="contained" startIcon={<AddIcon />} sx={{ height: 38, px: 2 }}>
          New Patient
        </Button>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5, flexWrap: 'wrap' }}>
        <TextField
          size="small"
          placeholder="Search by name or ID..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{
            flex: '1 1 280px',
            maxWidth: 400,
            '& .MuiOutlinedInput-root': { height: 40, bgcolor: 'background.paper', fontSize: 13 },
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

        <Box sx={{ display: 'flex', gap: 1 }}>
          {filters.map((f) => {
            const selected = activeFilter === f;
            return (
              <Chip
                key={f}
                label={f}
                onClick={() => setActiveFilter(f)}
                sx={{
                  bgcolor: selected ? '#E8F6F3' : 'background.paper',
                  color: selected ? 'primary.main' : 'text.secondary',
                  border: '1px solid',
                  borderColor: selected ? '#E8F6F3' : 'divider',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              />
            );
          })}
        </Box>
      </Box>

      <Card>
        <Box sx={{ overflowX: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((col) => (
                  <TableCell
                    key={col}
                    sx={{ fontSize: 11, fontWeight: 600, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.04em' }}
                  >
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filtered.map((p) => (
                <TableRow key={p.id} hover>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar sx={{ width: 34, height: 34, bgcolor: p.avatarBg, color: p.avatarColor, fontSize: 13, fontWeight: 600 }}>
                        {p.initials}
                      </Avatar>
                      <Typography sx={{ fontSize: 14, fontWeight: 500, color: 'text.primary' }}>
                        {p.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontSize: 13, color: 'text.secondary' }}>{p.id}</TableCell>
                  <TableCell sx={{ fontSize: 13, color: 'text.secondary' }}>{p.age} · {p.gender}</TableCell>
                  <TableCell sx={{ fontSize: 13, color: 'text.secondary' }}>{p.condition}</TableCell>
                  <TableCell sx={{ fontSize: 13, color: 'text.secondary' }}>{p.lastVisit}</TableCell>
                  <TableCell><StatusChip status={p.status} /></TableCell>
                  <TableCell>
                    <Button size="small" sx={{ fontSize: 13, fontWeight: 500, minWidth: 0, p: 0 }}>
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Card>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2.5, flexWrap: 'wrap', gap: 1.5 }}>
        <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>
          Showing {filtered.length} of {TOTAL_PATIENTS.toLocaleString()} patients
        </Typography>
        <Pagination count={3} shape="rounded" size="small" />
      </Box>
    </DashboardLayout>
  );
}