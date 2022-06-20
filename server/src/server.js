const app =require('./index');
const connect =require("./configs/db");
const PORT = process.env.PORT || 8080
app.get("/",(request,response)=>{
    response.send("hello")
    
})

app.listen(PORT,async()=>{
    await connect();
    console.log('listening on port '+PORT);
})