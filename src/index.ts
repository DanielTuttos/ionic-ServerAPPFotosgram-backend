import Server from "./classes/server";
import mongoose from 'mongoose';

import cors from 'cors';

import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload'


import userRoutes from "./routes/usuario.routes";
import postRoutes from "./routes/post.routes";





const server = new Server();

//body parser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

//fileUpload
server.app.use(fileUpload({ useTempFiles: true }));

//configurar CORS
server.app.use(cors({ origin: true, credentials: true }));

//rutas de mi aplicacion

server.app.use('/user', userRoutes);
server.app.use('/posts', postRoutes);


//conectar base de datos
mongoose.connect('mongodb://localhost:27017/fotosgram', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;

    console.log('base de datos online');
});

//levantar express
server.start();