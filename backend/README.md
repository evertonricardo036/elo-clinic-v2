# Elo Clinic System V2

Elo Clinic System is a web application designed to help therapy clinics and independent professionals manage appointments, attendance records, working hours, payments, and technical reports.

The project is focused on clinics and professionals working with children with ASD/TEA, ABA-based interventions, therapeutic support, and multidisciplinary care.

## Project Goal

The goal of this project is to replace manual attendance sheets and spreadsheet-based financial control with a digital system that allows professionals and clinics to manage sessions, signatures, monthly reports, and payment calculations in a more organized and professional way.

## Main Features Planned

- Clinic registration with CNPJ
- Professional registration with specialty and hourly rate
- Patient/assisted person registration
- Appointment scheduling
- Attendance record
- Service location: clinic, school, residence, or online
- Professional and responsible person signatures
- Monthly attendance report
- Payment calculation by hours worked
- RH/clinic confirmation workflow
- Invoice support for MEI professionals
- AI-assisted ABA technical report generation

## Current Progress

- Project structure created
- Backend folder created
- Frontend folder created
- Node.js backend initialized
- Express installed
- Basic API server running
- First GET route created for clinics

## Tech Stack

### Backend
- Node.js
- Express.js

### Frontend
- React.js (planned)

### Database
- PostgreSQL or SQLite (planned)

## API Routes

### GET /

Returns a simple message confirming that the API is running.

### GET /clinics

Returns a list of registered clinics.

Example response:

```json
[
  {
    "id": 1,
    "name": "Clínica Exemplo",
    "cnpj": "00.000.000/0001-00"
  }
]