const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000

const server = http.createServer((req,res)=>{
    if(req.url === '/home'){
        let filePath = path.join(__dirname, "public", "index.html");
        fs.readFile(filePath, 'utf-8',(err, data)=>{
            if(err) return

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data)
        })
    } else if(req.url === '/about'){
        let filePath = path.join(__dirname, "public", "about.html");
        fs.readFile(filePath, 'utf-8',(err, data)=>{
            if(err) return

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data)
        })
    } else if(req.url === '/contact'){
        let filePath = path.join(__dirname, "public", "contact.html");
        fs.readFile(filePath, 'utf-8',(err, data)=>{
            if(err) return

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data)
        })
    } else{
        let filePath = path.join(__dirname, "public", "index.html");
        fs.readFile(filePath, 'utf-8',(err, data)=>{
            if(err) return

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data)
        })
    }
})

server.listen(PORT,()=>{
    console.log(`The server is running on http://localhost:${PORT}`);
})