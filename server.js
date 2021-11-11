const express =require('express')
const mongoose=require('mongoose')
const {port,database}=require('./config')

const app = express()
//databasa
mongoose.connect(database,()=>{
    console.log("Connecting to Database")
})

//middleware

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(express.json())


app.use(require('./routes/home'))
app.use(require('./routes/create'))


app.listen(port, () => {
    console.log('Backend is running:'+ port);
})