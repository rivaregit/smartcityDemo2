import{Router} from 'express';
import { getVentas } from '../controllers/ventaController';

const router= Router();

router.get('/ventas', getVentas);

export default router;