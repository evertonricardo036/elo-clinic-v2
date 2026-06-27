# Elo Clinic V2

A RESTful API for clinic management, built with Node.js and Express, following a layered architecture (routes → controllers → services → data).

This project was built as a learning vehicle to practice backend architecture patterns, business logic validation, and clean code organization — serving as the technical foundation for **NeuroClinic Assist**, a future clinic management platform tailored to pediatric and adolescent rehabilitation (ABA therapy, autism spectrum support).

## Tech Stack

- **Node.js**
- **Express.js**
- In-memory data storage (arrays) — designed to be swapped for a relational database (PostgreSQL) in a future iteration

## Architecture

The project follows a clean separation of concerns:

```
routes/        → defines API endpoints, delegates to controllers
controllers/    → handles HTTP requests/responses
services/       → contains business logic and validation rules
data/           → in-memory data storage
middlewares/    → cross-cutting request handling (logging, validation)
```

This structure keeps each layer focused on a single responsibility, making the codebase easier to test, maintain, and extend (e.g., replacing in-memory arrays with a real database without touching controllers or routes).

## Project Structure

```
backend/
├── controllers/
│   ├── clinics.controller.js
│   ├── professionals.controller.js
│   ├── patients.controller.js
│   └── appointments.controller.js
│
├── services/
│   ├── clinics.service.js
│   ├── professionals.service.js
│   ├── patients.service.js
│   └── appointments.service.js
│
├── data/
│   ├── clinics.js
│   ├── professionals.js
│   ├── patients.js
│   └── appointments.js
│
├── middlewares/
│   ├── requestLogger.js
│   └── validateName.js
│
├── routes/
│   ├── clinics.routes.js
│   ├── professionals.routes.js
│   ├── patients.routes.js
│   └── appointments.routes.js
│
└── server.js
```

## Features

- **Clinics CRUD** — with duplicate CNPJ validation
- **Professionals CRUD**
- **Patients CRUD** — with duplicate CPF validation
- **Appointments CRUD** — with relationship validation (clinic, professional, and patient must exist) and status validation (`scheduled`, `completed`, `cancelled`)
- **Middlewares** — request logging and required-field validation

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/evertonricardo036/elo-clinic-v2.git

# Navigate to the backend folder
cd elo-clinic-v2/backend

# Install dependencies
npm install
```

### Running the server

```bash
node server.js
```

The server will start on `http://localhost:3000`.

## API Endpoints

### Clinics

| Method | Endpoint | Description |
|--------|----------|--------------|
| GET | `/clinics` | List all clinics |
| POST | `/clinics` | Create a new clinic |
| PUT | `/clinics/:id` | Update a clinic |
| DELETE | `/clinics/:id` | Delete a clinic |

**Body example (POST/PUT):**
```json
{
  "name": "Clinic Example",
  "cnpj": "00.000.000/0001-00"
}
```

### Professionals

| Method | Endpoint | Description |
|--------|----------|--------------|
| GET | `/professionals` | List all professionals |
| POST | `/professionals` | Create a new professional |
| PUT | `/professionals/:id` | Update a professional |
| DELETE | `/professionals/:id` | Delete a professional |

**Body example (POST/PUT):**
```json
{
  "name": "Ana",
  "specialty": "Speech Therapy",
  "hourlyRate": 90
}
```

### Patients

| Method | Endpoint | Description |
|--------|----------|--------------|
| GET | `/patients` | List all patients |
| POST | `/patients` | Create a new patient |
| PUT | `/patients/:id` | Update a patient |
| DELETE | `/patients/:id` | Delete a patient |

**Body example (POST/PUT):**
```json
{
  "name": "Maria",
  "cpf": "111.222.333-44"
}
```

### Appointments

| Method | Endpoint | Description |
|--------|----------|--------------|
| GET | `/appointments` | List all appointments |
| POST | `/appointments` | Create a new appointment |
| PUT | `/appointments/:id` | Update an appointment |
| DELETE | `/appointments/:id` | Delete an appointment |

**Body example (POST):**
```json
{
  "clinicId": 1,
  "professionalId": 1,
  "patientId": 1,
  "date": "2026-07-01",
  "status": "scheduled",
  "serviceType": "Particular"
}
```

**Body example (PUT):**
```json
{
  "date": "2026-07-05",
  "status": "completed",
  "serviceType": "Particular"
}
```

Valid `status` values: `scheduled`, `completed`, `cancelled`

## Roadmap

- [ ] Replace in-memory arrays with PostgreSQL
- [ ] Add authentication (JWT)
- [ ] Add input validation library (e.g., Zod or Joi)
- [ ] Add automated tests
- [ ] Deploy to a cloud platform (e.g., Railway, Render)

## Author

**Everton Ricardo da Silva Santos**
Full Stack Developer in training

[GitHub](https://github.com/evertonricardo036) · [LinkedIn](https://www.linkedin.com/in/everton-ricardo-santos-devv/)

## License

This project is open source and available for educational purposes.
