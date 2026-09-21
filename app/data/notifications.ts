export type NotificationItem = {
  id: string;
  title: string;
  body: string;
  time: string;
  unread: boolean;
  kind: 'critical' | 'followup' | 'lab' | 'patient';
};

export const notifications: NotificationItem[] = [
  {
    id: 'n1',
    title: 'Critical BP reading',
    body: "John Smith's blood pressure requires review.",
    time: '10 minutes ago',
    unread: true,
    kind: 'critical',
  },
  {
    id: 'n2',
    title: 'Overdue follow-up',
    body: "Maria Thomas's follow-up appointment is overdue.",
    time: '2 hours ago',
    unread: true,
    kind: 'followup',
  },
  {
    id: 'n3',
    title: 'Lab results ready',
    body: "Robert Lee's lab results are ready for review.",
    time: '3 hours ago',
    unread: true,
    kind: 'lab',
  },
  {
    id: 'n4',
    title: 'New patient registered',
    body: 'Sophia Martinez was added to your list.',
    time: 'Yesterday',
    unread: false,
    kind: 'patient',
  },
];