export type PatientStatus = 'Stable' | 'Follow-up' | 'Critical';

export type HistoryItem = { date: string; title: string; note: string };
export type AppointmentItem = {
  date: string;
  doctor: string;
  type: string;
  status: 'Completed' | 'Scheduled';
  notes: string;
};
export type DocumentItem = {
  name: string;
  date: string;
  size: string;
  tone: 'pink' | 'blue' | 'mint';
};
export type TagItem = { label: string; tone: 'pink' | 'yellow' | 'mint' };

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
  bloodGroup: string;
  dob: string;
  phone: string;
  email: string;
  address: string;
  emergency: { name: string; relationship: string; phone: string };
  vitals: { bp: string; hr: string; temp: string; spo2: string };
  history: HistoryItem[];
  tags: TagItem[];
  appointments: AppointmentItem[];
  documents: DocumentItem[];
};

export const patients: Patient[] = [
  {
    id: 'PT-10245',
    name: 'Emily Johnson',
    initials: 'EJ',
    avatarColor: '#DCECF8',
    age: 32,
    gender: 'Female',
    condition: 'Hypertension',
    lastVisit: 'Aug 18',
    status: 'Stable',
    bloodGroup: 'O+',
    dob: 'March 15, 1994',
    phone: '(555) 123-4567',
    email: 'emily.j@email.com',
    address: '123 Oak Street, Springfield, IL 62704',
    emergency: { name: 'Robert Johnson', relationship: 'Spouse', phone: '(555) 987-6543' },
    vitals: { bp: '120/80', hr: '72', temp: '98.4', spo2: '98%' },
    history: [
      { date: 'Aug 18, 2026', title: 'Follow-up consultation', note: 'Dr. Sarah reviewed blood pressure and medication.' },
      { date: 'Jul 12, 2026', title: 'General consultation', note: 'Routine health examination.' },
      { date: 'Jun 05, 2026', title: 'Lab results', note: 'Blood work reviewed. All values normal.' },
    ],
    tags: [
      { label: 'Penicillin allergy', tone: 'pink' },
      { label: 'Hypertension', tone: 'yellow' },
      { label: 'Non-smoker', tone: 'mint' },
    ],
    appointments: [
      { date: 'Aug 18, 2026', doctor: 'Dr. Sarah', type: 'Follow-up', status: 'Completed', notes: 'BP reviewed, medication adjusted' },
      { date: 'Aug 25, 2026', doctor: 'Dr. Sarah', type: 'Check-up', status: 'Scheduled', notes: 'Routine follow-up' },
      { date: 'Jul 12, 2026', doctor: 'Dr. Patel', type: 'Consultation', status: 'Completed', notes: 'General examination' },
    ],
    documents: [
      { name: 'Blood Test Results.pdf', date: 'Aug 18, 2026', size: '240 KB', tone: 'pink' },
      { name: 'ECG Report.pdf', date: 'Jul 12, 2026', size: '1.2 MB', tone: 'blue' },
      { name: 'Prescription History.pdf', date: 'Jun 05, 2026', size: '88 KB', tone: 'mint' },
    ],
  },
  {
    id: 'PT-10312',
    name: 'Michael Brown',
    initials: 'MB',
    avatarColor: '#D7EFEB',
    age: 45,
    gender: 'Male',
    condition: 'Diabetes T2',
    lastVisit: 'Aug 16',
    status: 'Follow-up',
    bloodGroup: 'A+',
    dob: 'January 8, 1981',
    phone: '(555) 234-8901',
    email: 'michael.b@email.com',
    address: '88 Maple Ave, Springfield, IL 62702',
    emergency: { name: 'Linda Brown', relationship: 'Spouse', phone: '(555) 234-8902' },
    vitals: { bp: '132/84', hr: '78', temp: '98.6', spo2: '97%' },
    history: [
      { date: 'Aug 16, 2026', title: 'Diabetes follow-up', note: 'HbA1c reviewed. Medication timing adjusted.' },
      { date: 'Jun 20, 2026', title: 'Lab results', note: 'Fasting glucose slightly elevated.' },
      { date: 'Apr 02, 2026', title: 'Nutrition consult', note: 'Diet plan updated with clinic nutritionist.' },
    ],
    tags: [
      { label: 'Type 2 diabetes', tone: 'yellow' },
      { label: 'Metformin', tone: 'mint' },
    ],
    appointments: [
      { date: 'Aug 16, 2026', doctor: 'Dr. Sarah', type: 'Follow-up', status: 'Completed', notes: 'Glucose log reviewed' },
      { date: 'Sep 02, 2026', doctor: 'Dr. Sarah', type: 'Follow-up', status: 'Scheduled', notes: 'Repeat HbA1c' },
    ],
    documents: [
      { name: 'HbA1c Report.pdf', date: 'Aug 16, 2026', size: '180 KB', tone: 'pink' },
      { name: 'Medication List.pdf', date: 'Jun 20, 2026', size: '64 KB', tone: 'mint' },
    ],
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
    bloodGroup: 'B+',
    dob: 'November 22, 1997',
    phone: '(555) 345-1122',
    email: 'olivia.d@email.com',
    address: '41 Cedar Lane, Springfield, IL 62703',
    emergency: { name: 'Hannah Davis', relationship: 'Sister', phone: '(555) 345-1199' },
    vitals: { bp: '118/76', hr: '70', temp: '98.2', spo2: '99%' },
    history: [
      { date: 'Aug 14, 2026', title: 'Asthma review', note: 'Inhaler technique checked. Peak flow normal.' },
      { date: 'May 03, 2026', title: 'Spirometry', note: 'Lung function within expected range.' },
    ],
    tags: [
      { label: 'Asthma', tone: 'mint' },
      { label: 'Pollen allergy', tone: 'pink' },
    ],
    appointments: [
      { date: 'Aug 14, 2026', doctor: 'Dr. Sarah', type: 'Check-up', status: 'Completed', notes: 'Inhaler refill' },
      { date: 'Nov 14, 2026', doctor: 'Dr. Chen', type: 'Review', status: 'Scheduled', notes: 'Seasonal asthma plan' },
    ],
    documents: [
      { name: 'Spirometry.pdf', date: 'May 03, 2026', size: '310 KB', tone: 'blue' },
      { name: 'Inhaler Plan.pdf', date: 'Aug 14, 2026', size: '52 KB', tone: 'mint' },
    ],
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
    bloodGroup: 'O-',
    dob: 'April 4, 1968',
    phone: '(555) 456-7788',
    email: 'james.w@email.com',
    address: '9 River Road, Springfield, IL 62701',
    emergency: { name: 'Carol Wilson', relationship: 'Spouse', phone: '(555) 456-7700' },
    vitals: { bp: '148/92', hr: '110', temp: '98.9', spo2: '95%' },
    history: [
      { date: 'Aug 12, 2026', title: 'Urgent cardiology review', note: 'Irregular rhythm on ECG. Admitted for monitoring.' },
      { date: 'Aug 01, 2026', title: 'ER visit', note: 'Palpitations and dizziness.' },
    ],
    tags: [
      { label: 'Arrhythmia', tone: 'pink' },
      { label: 'Beta blocker', tone: 'yellow' },
    ],
    appointments: [
      { date: 'Aug 12, 2026', doctor: 'Dr. Sarah', type: 'Urgent', status: 'Completed', notes: 'ECG + telemetry' },
      { date: 'Aug 22, 2026', doctor: 'Dr. Sarah', type: 'Follow-up', status: 'Scheduled', notes: 'Rhythm check' },
    ],
    documents: [
      { name: 'ECG Strip.pdf', date: 'Aug 12, 2026', size: '1.4 MB', tone: 'pink' },
      { name: 'Telemetry Notes.pdf', date: 'Aug 12, 2026', size: '96 KB', tone: 'blue' },
    ],
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
    bloodGroup: 'AB+',
    dob: 'July 19, 1987',
    phone: '(555) 567-3344',
    email: 'sophia.m@email.com',
    address: '210 Pine Court, Springfield, IL 62704',
    emergency: { name: 'Diego Martinez', relationship: 'Spouse', phone: '(555) 567-3300' },
    vitals: { bp: '122/78', hr: '68', temp: '98.3', spo2: '99%' },
    history: [
      { date: 'Aug 10, 2026', title: 'Migraine follow-up', note: 'Frequency down to 2 episodes per month.' },
      { date: 'Mar 18, 2026', title: 'Neurology consult', note: 'Preventive therapy started.' },
    ],
    tags: [
      { label: 'Migraine', tone: 'yellow' },
      { label: 'Non-smoker', tone: 'mint' },
    ],
    appointments: [
      { date: 'Aug 10, 2026', doctor: 'Dr. Sarah', type: 'Follow-up', status: 'Completed', notes: 'Trigger diary reviewed' },
      { date: 'Oct 10, 2026', doctor: 'Dr. Rao', type: 'Neurology', status: 'Scheduled', notes: 'Preventive meds' },
    ],
    documents: [
      { name: 'Neurology Letter.pdf', date: 'Mar 18, 2026', size: '120 KB', tone: 'blue' },
      { name: 'Trigger Diary.pdf', date: 'Aug 10, 2026', size: '44 KB', tone: 'mint' },
    ],
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
    bloodGroup: 'A-',
    dob: 'February 27, 1975',
    phone: '(555) 678-9911',
    email: 'robert.l@email.com',
    address: '15 Hillcrest Dr, Springfield, IL 62707',
    emergency: { name: 'Grace Lee', relationship: 'Daughter', phone: '(555) 678-9922' },
    vitals: { bp: '128/82', hr: '74', temp: '98.5', spo2: '98%' },
    history: [
      { date: 'Aug 08, 2026', title: 'Lipid panel review', note: 'LDL still above target. Statin dose increased.' },
      { date: 'Feb 08, 2026', title: 'Annual physical', note: 'Cholesterol flagged on routine labs.' },
    ],
    tags: [
      { label: 'Hyperlipidemia', tone: 'yellow' },
      { label: 'Statin therapy', tone: 'mint' },
    ],
    appointments: [
      { date: 'Aug 08, 2026', doctor: 'Dr. Sarah', type: 'Follow-up', status: 'Completed', notes: 'Dose change' },
      { date: 'Nov 08, 2026', doctor: 'Dr. Sarah', type: 'Labs', status: 'Scheduled', notes: 'Repeat lipid panel' },
    ],
    documents: [
      { name: 'Lipid Panel.pdf', date: 'Aug 08, 2026', size: '210 KB', tone: 'pink' },
      { name: 'Prescription.pdf', date: 'Aug 08, 2026', size: '36 KB', tone: 'mint' },
    ],
  },
];

export function getPatientById(id: string) {
  return patients.find((p) => p.id === id);
}