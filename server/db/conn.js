const mongoose  = require('mongoose');

const URL = process.env.DATABASE 
mongoose.connect(URL,{useCreateIndex:true,useFindAndModify:true,useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connection succesfull")  
}).catch((err) => 
console.log('no connected')
)