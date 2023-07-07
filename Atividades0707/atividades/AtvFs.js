//Atividade 01
const http = require('http')
const fs = require('fs')
const PORT = 5000


const server = http.createServer((req, res) =>{
    fs.readFile('Atv01.txt', function(err, data) {
        res.writeHead(200, {'Content-type': 'text/plan'})
        res.write(data)
        return res.end()
    })
}) 

server.listen(PORT, () => {
    console.log('Servidor tá on!🐪')
})


