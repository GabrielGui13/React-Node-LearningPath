const express = require('express')
const app = express()
const bodyParser = require('body-parser') 
const path = require('path')
const rootDir = require('./util/path')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false })) //to parse the request body as a middleware
app.use(express.static(path.join(rootDir, 'public'))) //pass a static folder to server content
//will handle any request that tries to find a file

/* app.use((req, res, next) => { //just the / would run for all routes that start with it
    console.log('This always runs!');
    next() //allow the request to travel on to the next middleware
}) */

app.use('/admin', adminRoutes) //adds /admin to next paths 
app.use(shopRoutes) //in second place if we were using 'use' instead of 'get'

app.use((req, res, next) => { //will handle all http requests and paths
    res.status(404)
        //.send('<h1>Page not found</h1>')
        .sendFile(path.join(rootDir, 'views', '404.html'))
})

app.listen(PORT, () => {
    console.log(`Server is up and running in PORT ${PORT}`)
})