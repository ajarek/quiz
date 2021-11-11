const router = require('express').Router()
const Questions = require('../models/Questions')

router.get('/create',(req,res)=>{
      res.render('create')
})

.post('/create',(req,res)=>{
      const{question,response1,response2,response3,response4,correct}=req.body
      if(!question || !response1 || !response2 || !response3 ||!response4,!correct)
       return res.send('Plese enter the required credetnials!')
      
       const newQuestions =new Questions({question,response1,response2,response3,response4,correct})
       console.log(newQuestions)
       newQuestions.save()
       .then(()=>{
           console.log('Record Saved Successfully!')
           res.redirect('/')
       })
       .catch(err=>console.log('err'))
  })

module.exports=router