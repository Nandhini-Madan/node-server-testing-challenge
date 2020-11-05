const server=require("./server")
const port=process.env.development||5000


server.listen(port,()=>{
    console.log(`Running at htttp://localhost:${port}`)
})
