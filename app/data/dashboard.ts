export type KpiItem = {
  id: string;
  label: string;
  value: string;
  hint: string;
  hintColor: string;
  iconBg: string;
  iconColor: string;
  icon: 'patients' | 'appointments' | 'followups' | 'alerts';
};

export const kpis: KpiItem[] = [
  {
    id: 'patients',
    label: 'Total Patients',
    value: '1,248',
    hint: '+12 this month',
    hintColor: '#5FB8A8',
    iconBg: '#E8F6F3',
    iconColor: '#5FB8A8',
    icon: 'patients',
  },
  {
    id: 'appointments',
    label: "Today's Appointments",
    value: '24',
    hint: '8 remaining',
    hintColor: '#5B9BC2',
    iconBg: '#DCECF8',
    iconColor: '#5B9BC2',
    icon: 'appointments',
  },
  {
    id: 'followups',
    label: 'Follow-ups',
    value: '12',
    hint: '5 due today',
    hintColor: '#9A83C4',
    iconBg: '#F0EAF8',
    iconColor: '#9A83C4',
    icon: 'followups',
  },
  {
    id: 'alerts',
    label: 'Critical Alerts',
    value: '3',
    hint: 'Requires attention',
    hintColor: '#D97973',
    iconBg: '#FDE8E7',
    iconColor: '#D97973',
    icon: 'alerts',
  },
];