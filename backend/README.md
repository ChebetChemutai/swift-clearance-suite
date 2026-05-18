# HolivET Africa Django Backend

This is a Django backend for the HolivET Africa frontend.
It provides PostgreSQL-backed shipment APIs, an estimate endpoint, and a health/status endpoint.

## Setup

1. Create and activate a Python virtual environment:

```bash
python -m venv venv
source venv/bin/activate
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Configure PostgreSQL environment variables.

You can export them directly in your shell, or create `backend/.env` with the same values.

```bash
export POSTGRES_DB=holivetafrica
export POSTGRES_USER=postgres
export POSTGRES_PASSWORD=your_postgres_password
export POSTGRES_HOST=127.0.0.1
export POSTGRES_PORT=5432
```

If you use `postgres` as the DB user, make sure the password matches your local Postgres setup.

4. Run migrations:

```bash
python manage.py migrate
```

5. Create an admin user (optional):

```bash
python manage.py createsuperuser
```

6. Start the development server:

```bash
python manage.py runserver
```

The API will be available at `http://127.0.0.1:8000/api/`.

## Endpoints

- `POST /api/admin/login/`
- `GET /api/admin/shipments/`
- `POST /api/estimate/`
- `GET /api/status/`

If you want the frontend to call this backend from a different port, the backend already allows CORS for all origins.
