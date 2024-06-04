import { Model } from 'sequelize';
import { MarkerClass } from '../models/markerClass.model';
import { iMarker } from './marker.interface';

export interface MarkersxUsersInterface {
    id:number;
    username:string;
    marker:iMarker[];
}

export interface iMarkersxUsers extends Model {
    id:number;
    userid:string;
    markers:iMarker[];
}