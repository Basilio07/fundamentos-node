import http from 'node:http'
import { JSON } from './middleware/json.js'

const database = new Database()

const users = []
const server = http.createServer(async (req, res) => {
    const{ method, url} = req

 await json(req, res)

if(method == 'GET' && url == '/users') {
  const users = database.select('users')

    return res 
    .end(JSON.stringify(users))
}

if(method == 'POST' && url == '/users'){
 const{  name, email } = body


    const user = {
    nome:'Gabriel',
    idade:28    
    }

database.insert('users', user )

    return res.writeHead(201).end()
}

    return res.writeHead(404).end()
})

server.listen(3333)
