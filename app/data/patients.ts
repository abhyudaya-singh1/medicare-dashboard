export type PatientStatus = 'Stable' | 'Follow-up' | 'Critical';

export type Patient = {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  avatarColor: string;
  age: number;
  gender: string;
  condition: string;
  lastVisit: string;
  status: PatientStatus;
};

// Matches the "Total Patients" KPI on the dashboard.
// Swap for a real count once patients come from an API.
export const TOTAL_PATIENTS = 1248;

export const patients: Patient[] = [
  { id: 'PT-10245', name: 'Emily Johnson', initials: 'EJ', avatarBg: '#DCECF8', avatarColor: '#5B9BC2', age: 32, gender: 'Female', condition: 'Hypertension', lastVisit: 'Aug 18', status: 'Stable' },
  { id: 'PT-10312', name: 'Michael Brown', initials: 'MB', avatarBg: '#E8F6F3', avatarColor: '#5FB8A8', age: 45, gender: 'Male', condition: 'Diabetes T2', lastVisit: 'Aug 16', status: 'Follow-up' },
  { id: 'PT-10198', name: 'Olivia Davis', initials: 'OD', avatarBg: '#F0EAF8', avatarColor: '#9A83C4', age: 28, gender: 'Female', condition: 'Asthma', lastVisit: 'Aug 14', status: 'Stable' },
  { id: 'PT-10087', name: 'James Wilson', initials: 'JW', avatarBg: '#FDE8E7', avatarColor: '#D97973', age: 58, gender: 'Male', condition: 'Arrhythmia', lastVisit: 'Aug 12', status: 'Critical' },
  { id: 'PT-10423', name: 'Sophia Martinez', initials: 'SM', avatarBg: '#DCECF8', avatarColor: '#5B9BC2', age: 39, gender: 'Female', condition: 'Migraine', lastVisit: 'Aug 10', status: 'Stable' },
  { id: 'PT-10356', name: 'Robert Lee', initials: 'RL', avatarBg: '#E8F6F3', avatarColor: '#5FB8A8', age: 51, gender: 'Male', condition: 'High cholesterol', lastVisit: 'Aug 08', status: 'Follow-up' },
];