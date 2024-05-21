import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router();

// will call controller func
router.post('/create-student', studentControllers.createStudent);

export const StudentRoutes = router;
