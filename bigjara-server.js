// const { createServer } = require("http") ;
// const PORT = 8000 ;

// const requestListener = (req, res) => {
//     let {method , url } = req
//     switch(url){
//         case "/" :
//             res.write("This is home")
//             res.end()
//             break ; 
//         default :
//         res.write("You are lost ")
//         res.end()
//     }
// }

const { createServer } = require("http") ;
const PORT = 8000 ;

const requestListener = (req, res) => {
    let {method , url , headers} = req

    // console.log(headers)
    if(url === "/" ){
        // res.statusCode = 200
        // res.setHeader("content-Type" , "text/html")
        res.writeHeader(200 , {"content-Type" : "text/html"})
        res.write("<h1>This is home</h1>")
        res.end()
    }else{
        res.statusCode = 404
        res.setHeader("content-Type" , "text/html")
        res.write("<h1> You are lost </h1>")
        res.write("You are lost ")
        res.end()
    }
}
createServer(requestListener)
.listen(PORT , () => console.log(`Your server is listening... at ${PORT}`))




