import 'reflect-metadata';
import * as dotenv  from 'dotenv';
import database from './config/database';
import app from './app';

dotenv.config();
const PORT = process.env.PORT || 3000;
database.initialize().catch(error => console.log(error));
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})