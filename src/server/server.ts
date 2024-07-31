import express from "express";
import os from "node:os";
import config from "./config";
import apiRouter from "./api-router";
import serverRender from "./render";

const server = express()

server.use(express.static("dist"))
server.set("view engine", "ejs")

server.use("/api", apiRouter);
server.use("/" ,async (req,res)=>{
    // server render
    const {initialMarkup,initialData}= await serverRender();
    res.render("index",{
         initialMarkup,
         initialData,
    });
});
server.listen(config.PORT,config.HOST,()=>{
    console.info(
        `express server is listening ${config.SERVER_URL}`,
        `free Mem: ${os.freemem()/1024/1024}`
    );

})
