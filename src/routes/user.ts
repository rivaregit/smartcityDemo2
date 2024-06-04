import{Router} from 'express';
import { getUsers, loginUser, newUser } from '../controllers/userController';

const router= Router();

router.get('/users', getUsers);
router.post('/users', newUser); 
router.post('/users/login', loginUser);


export default router;