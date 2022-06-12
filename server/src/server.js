const app =require('./index');
const connect =require("./configs/db");
const PORT =8080;
app.listen(PORT,async()=>{
    await connect();
    console.log('listening on port '+PORT);
})