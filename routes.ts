import { Express, Request, Response } from "express";
import { request } from "http";


export default function routes (app : Express){

    app.get('/', (req: Request, res: Response ) => {
        res.status(200).send({message : "Hello"}); 
    })
}