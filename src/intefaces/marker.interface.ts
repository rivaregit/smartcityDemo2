import { Model } from 'sequelize';



export interface iMarker extends Model {
    id:number;
    markername:string;
    markerlng:string;
    markerlat:string;

}