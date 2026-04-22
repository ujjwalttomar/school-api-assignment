const validateCoords = (lat, lon) => {
  const errors = [];

  if (lat === undefined || lat === null || lat === '') {
    errors.push('latitude is required');
  } else if (isNaN(Number(lat)) || Number(lat) < -90 || Number(lat) > 90) {
    errors.push('latitude must be a valid number between -90 and 90');
  }

  if (lon === undefined || lon === null || lon === '') {
    errors.push('longitude is required');
  } else if (isNaN(Number(lon)) || Number(lon) < -180 || Number(lon) > 180) {
    errors.push('longitude must be a valid number between -180 and 180');
  }

  return errors;
};

const validateAddSchool = (req, res, next) => {
  const { name, address, latitude, longitude } = req.body;
  const errors = [];

  if (!name || typeof name !== 'string' || name.trim() === '') {
    errors.push('name is required and must be a non-empty string');
  }

  if (!address || typeof address !== 'string' || address.trim() === '') {
    errors.push('address is required and must be a non-empty string');
  }

  errors.push(...validateCoords(latitude, longitude));

  if (errors.length) {
    return res.status(400).json({ errors });
  }

  next();
};

const validateListSchools = (req, res, next) => {
  const { latitude, longitude } = req.query;
  const errors = validateCoords(latitude, longitude);

  if (errors.length) {
    return res.status(400).json({ errors });
  }

  next();
};

export { validateAddSchool, validateListSchools };
