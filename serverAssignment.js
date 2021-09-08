// const { fstat } = require('fs')
// const http = require('http')
// const PORT = 80
// const Home = require('./Hello.js')
// const Home = require('./index.html')

// http.createServer(('/' , (req , res) => {
//     res.send(Home)
// })).listen(PORT , () => console.log(`listening to port ${PORT}`))

// const requestHandler = (req, res) => {
//     if(req.url === '/'){
//       res.end(Home)
//     }else if (req.url === '/about'){
//       res.end('this is about')
//     }else{
//       res.end('you are on the wrong part')
//     }
//   }
// http.createServer(requestHandler).listen(PORT , () => console.log(`Your server is listening... at ${PORT}`))


const { createServer } = require("http") ;
const PORT = 8100 ;

const requestListener = (req, res) => {
    let {method , url , headers} = req

    if(url === "/" ){
        res.writeHeader(200 , {"content-Type" : "text/html"})
        res.write("<h1>This is home</h1>")
        res.end()
    }else if(url === "/about") {
        // fs.readFile("index.html" , (err , data) => {
            if(err) {
                res.writeHead(500 , {"content-Type" : "text/html"} )
                res.write("<h1> You are lost </h1>")
                res.end()
            }else {
                res.writeHead(500 , {"content-type" : "text/html "})
                res.write("<h1>You are in about page </h1>")
                res.end()
            }
        // })
    }else if(url === "/contact") {
        // fs.readFile("index.html" , (err , data) => {
            if(err) {
                res.writeHead(500 , {"content-Type" : "text/html"} )
                res.write("<h1> You are lost </h1>")
                res.end()
            }else {
                res.writeHead(500 , {"content-type" : "text/html "})
                res.write("<h1>You are in contact page </h1>")
                res.end()
            }
        // })
    }else {
        res.statusCode - 404 
        res.setHeader(500 , {"content-Type" : "text/html"} )
        res.write("<h1> You are lost </h1>")
        res.end()
    }
}
createServer(requestListener)
.listen(PORT , () => console.log(`Your server is listening... at ${PORT}`))


// Create a web server that does the following : 
// 1. Listens on port 80 
// Create a web server that does the following : 
// 1. Listens on port 802
// 2. Handles request to the root of the application by serving an index.html file 
// 3. Handles request that hits the contact-is route by sending "Welcome to contact us"

