const mongoose  = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,

    },
    year: {
        type: String
    },

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