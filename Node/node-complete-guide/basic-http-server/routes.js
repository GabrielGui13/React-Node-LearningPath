const fs = require('fs')

const requestHandler = (req, res) => {
    //console.log(req.url, req.method, req.headers)
    //process.exit()
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html') //says it will be returning a html code response

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter message</title><head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>')
        res.write('</html>')
        return res.end()
    }
    if (url === '/message' && method === 'POST') {
        const body = []

        req.on('data', (chunk) => { //chunks/pieces of the request
            body.push(chunk) //will execute often until its done
        });

        return req.on('end', () => { //returning here will not execute the next lines
            const parsedBody = Buffer.concat(body).toString(); //Buffer => the bus stop for the stream req data 
            const message = parsedBody.split('=')[1] //message=sentValue
            fs.writeFile('message.txt', message, (err) => { //sync statement will block code execution until the file is created
                //will be executed once done writing the file
                res.writeHead(302, { //CODE 302 - FOUND
                    'Location': '/'
                })
                return res.end()
            })
        })

        //removed end response, so raw code will be different
        //it will reach the if statement, register the two events, and jump into next code lines
        //the return would be to quit the function and not run any code later
    }

    res.write('<html>')
    res.write('<head><title>My First Page</title><head>')
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>')
    res.end()
}

//module.exports = requestHandler;

//modules.exports.handler = requestHandler;
//exports.someText = 'Some hard coded text'; 

module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
}