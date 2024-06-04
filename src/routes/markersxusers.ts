// import{Router} from 'express';
// import { getUsersWithMarkers } from '../controllers/markersxuserController';

// const router= Router();

// router.get('/markersxusers', getUsersWithMarkers);

// export default router;


import{Router} from 'express';
import { getUsersWithMarkers, getMarkersByUserId } from '../controllers/markersxuserController';
//import { getUsers2 } from '../controllers/markersxuserController';

const router= Router();

router.get('/markerusers', getUsersWithMarkers);
router.post('/markerusers', getMarkersByUserId);

//router.get('/users2', getUsers2);


export default router;