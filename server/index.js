/* eslint-disable */
require('dotenv').config()
const express = require('express')
const server = express()
const admin = require('./admin/admin')

const PORT = process.env.PORT || 3000

async function verifyToken(req, res, next){
    const idToken = req.headers.authorization

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken)

        if (decodedToken) {
            req.body.uid = decodedToken.uid

            return next()
        } else {
            return res.status(401).send('You are not authorized!')
        }
    } catch(e) {
        return res.status(401).send('You are not authorized!')
    }
}

// router.get('example-path', async (req, res) => {
//     const { uid } = req.body
// })

server.listen(PORT, () => {
    console.log(`Server Running on port: ${PORT}`)
})