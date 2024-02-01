const http = require('http');
const { hostname } = require('os');

const hotName = '127.0.0.1' /* IP */
const port = 3000

/* recebe cmo argumento uma função calback que é chamada */
const server = http.createServer((req, res) => {
    res.statusCode = 200; /* se for 200 ele vai estar rodando */
    res.setHeader ('Content-Type', 'text/plain')
    res.end("hello world")
})

/* metodo listen = cria ouvinte pra escutar a porta */
server.listen(port, hostname, () => { 
    console.log("servidor rodando")
})

