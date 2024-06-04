import { Request, Response} from 'express';
// import bcrypt from 'bcrypt';
import { User } from '../models/user.model';
import jwt from 'jsonwebtoken';
import { CredentialsUserResponse } from '../models/credentialsUserResponse.model';


export const getUsers= async (req:Request, res:Response)=>
    {
        try{
            const listUsers= await User.findAll();
            res.json({
                listUsers,
                msg: "Get users"   
            })
        }
        catch(error){
            console.log('Ha ocurrido el error:', error); 
        }


    }

export const newUser = async (req: Request, res: Response) => {

    const { username, password } = req.body;

    // Validamos si el usuario ya existe en la base de datos
    const user = await User.findOne({ where: { username: username } });

    if(user) {
       return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`
        })
    } 
 
   // const hashedPassword = await bcrypt.hash(password, 10); 
    
    try {
        // Guardarmos usuario en la b ase de d atos
        await User.create({
            username: username,
            password: password
        })
    
        res.json({
            msg: `Usuario ${username} creado exitosamente!`
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Upps ocurrio un error',
            error
        })
    }
}

export const loginUser = async (req: Request, res: Response) => {

    const { username,email, password } = req.body;
    console.log('username es:', username, ' email es:', email, ' y passw es:', password );

   // Validamos si el usuario existe en la base de datos
  // const user: any = await User.findOne({ where: { username: username } });
   const user: any = await User.findOne({ where: { username: email } });
    console.log('user es:', user);

   if(!user) {
        return res.status(400).json({
           // msg: `No existe un usuario con el   nombre ${username} en la base datos`
            msg: `No existe un usuario con el nombre ${email} en la base datos`

        })
   }

   // Validamos password
   let passwordValid =false;
   if(password== user.password)passwordValid=true;
   if(!passwordValid) {
    return res.status(400).json({
        msg: `Password Incorrecta`
    })
   }

   console.log('Ha llegado hasta el comienzo del token'); 
   // Generamos token
   const token = jwt.sign({
    //username: username
    username: email

   }, process.env.SECRET_KEY || 'pepito1243');

   console.log('token es:', token);
   const responseData: CredentialsUserResponse={
    email:email, 
    username:email,
    sucessed:"1",
    token:token,
    id:user.id
   }
   
 //  res.json(token);
 // return res.json(200).send(responseData );
 return  res.json(responseData);

}



