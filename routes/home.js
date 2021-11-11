const router = require('express').Router()
const Questions = require('../models/Questions')

router.get('/',async(req,res)=>{
  try {
  const count = await Questions.countDocuments()
  var random = Math.floor(Math.random()*count )
      
            let quest = await Questions.find({}).skip(random).limit(1)
              res.render('home',{myquests:quest})
              }
           catch (err) {
            res.status(500).send(err)
          }    
   
})
module.exports=router
