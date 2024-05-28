//NODE  //NODE  //NODE   //NODE   //NODE
var http = require('http')

var fs = require('fs')

// var nodemailer = require('nodemailer')
// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'arshadmubarak17@gmail.com',
//         pass: 'zpat jpph yhnr ajcg'
//     }
// })

// var options = {
//     from : 'arshadmubarak17@gmail.com',
//     to: 'teluguskillhub@gmail.com',
//     subject: 'testing',
//     text: 'Hello everyone easy to use' 
// }

// transporter.sendMail(options,(err,info)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Email Sent Successfully");
//     }
// })


// var url = require('url')
// var adrs = "http://localhost:8080/home.html?year=2024&month=march"
// var q = url.parse(adrs,true)



http.createServer((req,res)=>{
    res.write('hello world!'.toUpperCase())
    res.end()
    console.log("Server Running");
}).listen(5000)

// console.log(q.host);
// console.log(q.search);
// console.log(q.path);
// console.log(q.pathname);
// console.log(q.hash);
// console.log(q.hostname);
// console.log(q.port);

http.createServer((req,res)=>{
    res.write('Hello Arshad')
    res.end()
    console.log("Server Running");
}).listen(8080)

// http.createServer((req,res)=>{
//     fs.readFile('a.txt',(err,data)=>{
//         res.write(data)
//         res.end()
//     })
//     console.log("Server Running");
// }).listen(7070)

// http.createServer((req,res)=>{
//     fs.appendFile('a.txt','React Developer',(err,data)=>{
//         res.write(data)
//         res.end()
//     })
//     console.log("Server Running");
// }).listen(7070)

// http.createServer((req,res)=>{
//     fs.writeFile('a.txt','Mohammad Arshad Mubarak',(err,data)=>{
//         res.write(data)
//         res.end()
//     })
//     console.log("Server Running");
// }).listen(7070)

// http.createServer((req,res)=>{
//     fs.unlink('a.txt',(err)=>{
//         console.log('file Deleted');
//     })
//     console.log("Server Running");
// }).listen(7070)

//EXPRESS  //EXPRESS  //EXPRESS  //EXPRESS //EXPRESS
const express = require('express')

// const mongoose = require('mongoose')
const app = express()

app.use(express.json())
// mongoose.connect("mongodb+srv://arshadmubarak17:arshadmubarak17@cluster0.d95tfpz.mongodb.net/?retryWrites=true&w=majority").then(
//     ()=>console.log("DB Connected")
// )

app.get('/',(req,res)=>{
    return res.json("Hello Arshad Mubarak")
})



const prod = [
    {
        id:1,
        name:'Redmi'
    },
    {
        id:2,
        name:'Oppo'
    },
    {
        id:3,
        name:'Nokia'
    },
    {
        id:4,
        name:'Vivo'
    },
    {
        id:5,
        name:'Mototrolla'
    },
    {
        id:6,
        name:'Samsung'
    },
    {
        id:7,
        name:'Xiomi'
    },
    {
        id:8,
        name:'Poco'
    },
    {
        id:9,
        name:'Realme'
    },
    {
        id:10,
        name:'Samsung Zflip'
    },
    {
        id:11,
        name:'Oppo Reno'
    },
    {
        id:12,
        name:'Max pro18'
    },

    {
        id:13,
        name:'Iphone 8'
    },
    {
        id:14,
        name:'Micromax'
    },

    {
        id:15,
        name:'Norde 15pro'
    },
]

app.get('/products',(req,res)=>(
    res.json(prod)
))

app.get('/products/:id',(req,res)=>{
    const newData = prod.filter(item=>item.id.toString() === req.params.id)
    return res.json(newData)
})

// app.post('/addproducts',(req,res)=>{
//     const {id,name} = req.body;
//     console.log(id,name);
//     return res.json("data stored")
// })

// app.delete('/products/:id',(req,res)=>{
//    const deletData =  products.find(item => item.id.toString() === req.params.id)
//    console.log('data deleted');
//     return res.json(deletData)
// })

app.listen(8000,()=>console.log("Server Running"))

// "start": "node server.js",
//     "server": "nodemon server.js",

