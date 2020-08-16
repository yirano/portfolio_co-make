const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const userRouter = require('./routers/users-router')
const restrict = require('./middlewares/restrict')
const issuesRouter = require('./routers/issues-model')
// const bcrypt = require('bcryptjs')
// const cookieParser = require('cookie-parser')

const server = express()
const PORT = process.env.PORT || 4000

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', userRouter)
server.use('/api/issues', restrict, issuesRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({ errorMessage: 'Something happened' })
})

server.listen(PORT, () => {
	console.log(`==== Server Running on http://localhost:${PORT} ====`)
})
