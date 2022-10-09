import express from 'express';
import { createStudent, deleteStudent, getAllStudents, getSingleStudent, updateStudent } from '../controllers/studentController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';


// init router
const router = express.Router();


// route
router.route('/').get(authMiddleware, getAllStudents).post(authMiddleware, createStudent);
router.route('/:id').get(authMiddleware, getSingleStudent).put(authMiddleware, updateStudent).patch(authMiddleware, updateStudent).delete(authMiddleware, deleteStudent);


// Export default router
export default router;