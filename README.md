# Medicare Dashboard

A healthcare dashboard UI built with **Next.js, React, TypeScript and Material UI**.

This frontend project demonstrates an overview dashboard, a searchable patient list and patient detail screens backed by local fixture data. It is not connected to a clinical backend and is not intended for real patient records.

## Implemented screens

- **Overview:** KPI cards inside a shared dashboard layout.
- **Patients:** search by name or ID, status filters and links to patient details.
- **Patient details:** overview/vitals, medical history, appointments and documents tabs.
- **Notifications:** a notification drawer using local data.
- **Shared UI:** sidebar, header, status chips, cards and a Material UI theme.

## Local setup

With Node.js and npm installed:

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`.

```sh
npm run lint
npm run build
npm start
```

`npm start` serves an existing production build. No database or API service is configured in this repository.

## Source map

```text
app/
  page.tsx                  # Overview and KPI cards
  patients/
    page.tsx
    PatientsView.tsx        # Search and status filtering
    [id]/page.tsx           # Patient detail tabs
  components/               # Shared layout and UI
  data/                     # Local patient, KPI and notification fixtures
  theme.ts                  # Material UI theme
```

## Current scope

- Data comes from checked-in local fixtures, not a live patient system.
- Controls such as New Patient, Edit Patient, Upload and Download are UI placeholders, not completed record-management workflows.
- Authentication, backend persistence and automated tests are not included.
- Use synthetic data only. This is a portfolio UI project, not medical software for clinical use.

## Author

[Abhyudaya Singh](https://github.com/abhyudaya-singh1)
