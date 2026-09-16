export type PatientStatus = 'Stable' | 'Follow-up' | 'Critical';

export type Patient = {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  age: number;
  gender: 'Female' | 'Male';
  condition: string;
  lastVisit: string;
  status: PatientStatus;
};

export const patients: Patient[] = [
  {
    id: 'PT-10245',
    name: 'Emily Johnson',
    initials: 'EJ',
    avatarColor: '#D7EFEB',
    age: 32,
    gender: 'Female',
    condition: 'Hypertension',
    lastVisit: 'Aug 18',
    status: 'Stable',
  },
  {
    id: 'PT-10312',
    name: 'Michael Brown',
    initials: 'MB',
    avatarColor: '#DCECF8',
    age: 45,
    gender: 'Male',
    condition: 'Diabetes T2',
    lastVisit: 'Aug 16',
    status: 'Follow-up',
  },
  {
    id: 'PT-10198',
    name: 'Olivia Davis',
    initials: 'OD',
    avatarColor: '#F0EAF8',
    age: 28,
    gender: 'Female',
    condition: 'Asthma',
    lastVisit: 'Aug 14',
    status: 'Stable',
  },
  {
    id: 'PT-10087',
    name: 'James Wilson',
    initials: 'JW',
    avatarColor: '#FDE8E7',
    age: 58,
    gender: 'Male',
    condition: 'Arrhythmia',
    lastVisit: 'Aug 12',
    status: 'Critical',
  },
  {
    id: 'PT-10423',
    name: 'Sophia Martinez',
    initials: 'SM',
    avatarColor: '#DCECF8',
    age: 39,
    gender: 'Female',
    condition: 'Migraine',
    lastVisit: 'Aug 10',
    status: 'Stable',
  },
  {
    id: 'PT-10356',
    name: 'Robert Lee',
    initials: 'RL',
    avatarColor: '#E8F6F3',
    age: 51,
    gender: 'Male',
    condition: 'High cholesterol',
    lastVisit: 'Aug 08',
    status: 'Follow-up',
  },
];

export function getPatientById(id: string) {
  return patients.find((p) => p.id === id);
}