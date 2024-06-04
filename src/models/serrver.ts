import express, {Application} from 'express';
import routesUser from '../routes/user';
import routesVentas from '../routes/ventas';
import routesMarkersUsers from '../routes/markersxusers';


import cors from 'cors';
import { User } from './user.model';
import { Venta } from './ventas.model';
import { MarkersxUser } from './markerxuser.model';
import { Marker } from './marker.model';

 
 
 class Server{

    private app:Application;

    private port:string;

    constructor() {
        this.app=express();
        //  this.port='3000';
        this.port=process.env.PORT || '3001';

        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect(); 


        console.log(process.env.PORT);

    }

    listen() {
        this.app.listen(this.port, ()=>{
            console.log('Aplicacion corriendo en pto345  '+ this.port);
        })
    }
    // listen() {
    //     this.app.listen();  
    //     }  


    routes(){

        this.app.use('/api/', routesUser);
        this.app.use('/api/', routesVentas);
        this.app.use('/api/', routesMarkersUsers);

    }

midlewares(){
    this.app.use(express.json());
    this.app.use(cors());
}

    async dbConnect(){

        try{
        await User.sync();
        await Venta.sync();
        await Marker.sync();
        await MarkersxUser.sync();
        console.log('db connected'); 
        }
        catch{
            console.log(Error);
            console.log('Error al conectarse a la db');
            
        }

    }


}

export default Server;