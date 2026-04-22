import pool from '../config/db.js';
import { haversineDistance } from '../utils/distance.js';

const addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  const [result] = await pool.execute(
    'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
    [name.trim(), address.trim(), Number(latitude), Number(longitude)]
  );

  return res.status(201).json({ message: 'School added successfully', id: result.insertId });
};

const listSchools = async (req, res) => {
  const { latitude, longitude } = req.query;

  const [rows] = await pool.execute('SELECT * FROM schools');

  const sorted = rows
    .map((school) => ({
      ...school,
      distance_km: haversineDistance(Number(latitude), Number(longitude), school.latitude, school.longitude),
    }))
    .sort((a, b) => a.distance_km - b.distance_km);

  return res.status(200).json({ schools: sorted });
};

export { addSchool, listSchools };
