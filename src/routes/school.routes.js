import { Router } from 'express';
import { addSchool, listSchools } from '../controllers/school.controller.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { validateAddSchool, validateListSchools } from '../middleware/validate.js';

const router = Router();

router.post('/addSchool', validateAddSchool, asyncHandler(addSchool));
router.get('/listSchools', validateListSchools, asyncHandler(listSchools));

export default router;
