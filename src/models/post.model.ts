import { Schema, Document, model } from 'mongoose';






const postSchema = new Schema({

    created: {
        type: Date
    },
    mensaje: {
        type: String
    },
    imgs: [{
        type: String
    }],
    coords: {
        type: String//latitud,longitud paramostrar un mapa
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'Debe de existir una referencia a un usuario']
    }

});

postSchema.pre<IPost>('save', function (next) {//cada ves que se crea un schema se pone la fecha de manera automatica
    this.created = new Date();
    next();
});

interface IPost extends Document {
    created: Date;
    mensaje: string;
    img: string[];
    coords: string;
    usuario: string;
}

export const Post = model<IPost>('Post', postSchema);