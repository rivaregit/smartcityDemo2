import { MarkersxUser } from './../models/markerxuser.model';
import { Request, Response} from 'express';
import { User } from '../models/user.model';
import { Marker } from '../models/marker.model';
import { iMarkersxUsers} from '../intefaces/markerxuser.interface';



//export const getUsersWithMarkers = async () => {
  //export const getUsers2 = async (req:Request, res:Response) =>
  export const getUsersWithMarkers = async (req:Request, res:Response) =>
   {
      try 
      {
  
        const results = await User.findAll({        
          attributes: ['id', 'username'],
          include: [{
            model: Marker,
            attributes: ['id', 'markername', 'markerlng', 'markerlat'],
            through: {
              attributes: []
            }
          }]
        });

        res.json({   results,
                      msg: "Get users2"   
                  })
      } 
      catch (error) 
      {
        console.error('Error fetching users with markers:', error);
      }
  }


  // src/controllers/markerController.js
// const db = require('../models');

// const Marker = db.Marker;
// const MarkersxUser = db.MarkersxUser;

export const getMarkersByUserId = async (req:Request, res:Response) => {
  const { userId } = req.body;

  let tempData:iMarkersxUsers[];
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const markersxUser = await MarkersxUser.findAll({ where: { userid: userId } });

     const markerIds =markersxUser.map(mxu => mxu.id);

     const markers = await Marker.findAll({ where: { id: markerIds } });

     const userMarkers = markers.map(marker => ({
      username: user.username,
      markerid: marker.id,
      markername: marker.markername,
      markerlng: marker.markerlng,
      markerlat: marker.markerlat
    }));

    //res.json(userMarkers);
    res.json(markers);

  } catch (e) {
    res.status(500).json({ message: `Ha ocurrido un error 500` });
  }
};

