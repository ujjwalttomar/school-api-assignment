# School Management API

Node.js + Express + MySQL REST API.

## Setup

```bash
npm install
cp .env.example .env   # fill in your DB credentials
mysql -u root -p < schema.sql
node index.js
```

## Endpoints

### POST /api/addSchool

**Body (JSON):**
```json
{
  "name": "Delhi Public School",
  "address": "Mathura Road, New Delhi",
  "latitude": 28.6139,
  "longitude": 77.2090
}
```

**Response 201:**
```json
{ "message": "School added successfully", "id": 1 }
```

---

### GET /api/listSchools

**Query params:** `latitude`, `longitude`

**Example:** `GET /api/listSchools?latitude=28.6139&longitude=77.2090`

**Response 200:**
```json
{
  "schools": [
    {
      "id": 1,
      "name": "Delhi Public School",
      "address": "Mathura Road, New Delhi",
      "latitude": 28.6139,
      "longitude": 77.2090,
      "distance_km": 0
    }
  ]
}
```

## Postman

Import `postman_collection.json` and set `base_url` variable to your host.
