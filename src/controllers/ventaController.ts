import { Request, Response } from 'express';
import { Venta } from '../models/ventas.model';

export const getVentas = async (req: Request, res: Response) => {

    try{
        const listVentas= await Venta.findAll();
        res.json({
            listVentas,
            msg: "Get Ventas"   
        })
    }
    catch(error){
        console.log('Ha ocurrido el error:', error); 
    }
}