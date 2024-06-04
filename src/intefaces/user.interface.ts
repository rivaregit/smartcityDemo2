import { Model } from 'sequelize';



export interface iUser extends Model {
    id:number;
    username:string;
    password:string;
}