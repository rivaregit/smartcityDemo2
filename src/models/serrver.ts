import express, {Application} from 'express';
import db from '../db/connection';
import routesUser from '../routes/user';
import routes from '../routes/user';


 
 
 class Server{

    private app:Application;

    private port:string;

    constructor() {
        this.app=express();
        //  this.port='3000';
        this.port=process.env.PORT || '4001';

        this.listen();
        this.midlewares();
        this.dbConnect(); 

        this.routes();
        console.log(process.env.PORT);

    }

    listen() {
        this.app.listen(this.port, ()=>{
            console.log('Aplicacion kcorriendo en pto345 '+ this.port);
        })
    }

    routes(){
        this.app.use('/api/users', routesUser);
    }

midlewares(){
    this.app.use(express.json());
}



    async dbConnect(){

        try{
        await db.authenticate();
        console.log('db connected'); 
        }
        catch{
            console.log(Error);
            console.log('Error al conectarse a la db');
            
        }

    }


}

export default Server;