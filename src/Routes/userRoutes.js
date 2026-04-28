import { Router } from 'express';
import { UserController } from '../Controllers/UserController.js';

const router = Router();
const userController = new UserController();

router.get('/users',     (req, res) => userController.getAllUsers(req, res));
router.get('/users/:id',  (req, res) => userController.getUser(req, res));
router.post('/users',    (req, res) => userController.createUser(req, res));
router.put('/users/:id',  (req, res) => userController.updateUser(req, res));
router.delete('/users/:id', (req, res) => userController.deleteUser(req, res));

export default router;