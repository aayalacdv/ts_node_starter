import config from 'config'; 
import express from 'express'; 
import routes from '../routes';

const host : string = config.get("host") as string; 
const port : number = config.get("port") as number; 


console.log(`${host} hola que tal ${port}`);


const app = express(); 
app.use( express.json()); 
app.use( express.urlencoded({ extended: false})); 

app.listen(port, host, () => {
    console.log(`escuchando en http://${host}:${port}`);
    routes(app); 
    
})

