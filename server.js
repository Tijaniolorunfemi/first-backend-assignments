const http = require('http')
const PORT = 8080

http.createServer(('/' ,(req , res) => {
    res.write("Hello Word")
    res.end()
})).listen(PORT , () => console.log(`your server is listening at ${PORT}`))


const http = require('http')
const PORT = 8080

const requestHandler = (req, res) => {
  if(req.url === '/'){
    res.end(`welcome to homepage`)
  }else if (req.url === '/about'){
    res.end('this is about')
  }else{
    res.end('you are on the wrong part')
  }
}
http.createServer(requestHandler).listen(PORT , () => console.log(`Your server is listening... at ${PORT}`))




