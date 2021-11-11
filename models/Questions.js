const mongoose=require('mongoose')

const myQuestionSchema=new mongoose.Schema({
    question:{
        type:String,
        required:true  
    },
    
    response1:{
        type:String,
        required:true 
    },
    response2:{
        type:String,
        required:true 
    },
    response3:{
        type:String,
        required:true 
    },
    response4:{
        type:String,
        required:true 
    },
    correct:{
        type:String,
        required:true 
    },
      
},
{timestamps:true}
)
module.exports=mongoose.model('Question',myQuestionSchema)