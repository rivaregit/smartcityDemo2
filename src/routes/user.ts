import{Router} from 'express';
import { getUsers, loginUser, newUser } from '../controllers/user';

const router= Router();

router.get('/', getUsers);
router.post('/', newUser); 
router.post('/login', loginUser);


export default router;