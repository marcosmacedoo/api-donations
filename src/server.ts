import express from 'express'
import cors from 'cors'

const server = express()
const PORT = 3333

server.use(cors())
server.use(express.json())

server.get('/', (req, res) => {
    return res.json({ message: 'Hello World' })
})

server.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`))