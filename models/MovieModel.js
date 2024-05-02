const mongoose  = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    image:{
        type: String,
        require:true
    },
    genre:{
        type: String,
        require:true
        
    },
    year: {
        type: String,
        require:true
    },
    language:{
        type:String,
        require:true
    },
    description:{
        type: String,
        require:true

    },
    YTUrl:{
        type:String,
        require:true
    }


},
{
    timestamps: true
}
)

movieSchema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id;
        return object;

})

const Movie =  new mongoose.model('movies', movieSchema)

module.exports = Movie