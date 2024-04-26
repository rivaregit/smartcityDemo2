import { Request, Response } from "express";

export const getUsers= (req:Request, res:Response)=>
{
    res.json({
        msg: "Get users"
    })
}

export const newUser=(req:Request, res:Response)=>{
    console.log('newUser body:', req.body);

    res.json({
        msg:'mock new user created',
        body: req.body
    })
}

export const loginUser=(req:Request, res:Response)=>{
    console.log('login body:', req.body);

    res.json({
        msg:'mock login user logged',
        body: req.body
    })
}