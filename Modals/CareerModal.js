import mongoose from "mongoose";

var schema = new mongoose.Schema({
    details:Object,
    cardData:Array
})

var modal = mongoose.model('CareerData' , schema , 'CareerData')

export default modal