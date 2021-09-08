const fs = require("fs")

fs.writeFile(`index.html` , `<h1>hello Word </h1>` ,  (error , data ) => {
    if (error ) {
        console.log("an error occured")
    }
    fs.readFile(`index.html` , (error , response) => {
        if (error) {
            console.log ("There's an error in your code ")
        }
        console.log(response.toString())
    })
})

// fs.writeFile(`server.js` ,`const name = [femi , lawal , mohammed , promise ]` , (error , data ) => {
//     if (error ) {
//         console.log("error occured")
//     }
//     console.log("Your file was created sucessfully okay ") ; 
// })

// fs.rename('index.html' , 'new.html' , err => {	
//     if (err)  {
//         console.log("An error occured")
//     } 	
//     console.log('Rename completed') 
// })

// fs.appendFile('new.html' , '<h2>I am Adeleke Bright</h2>' , err => { 
//     if (err) {
//         console.log("An error occured")
//     } 
//     console.log("Your file was renamed successfully")
// })

// fs.unlink('index.html' , err => {	
//     if (err) {
//         console.log("An error occured")
//     } 
//     console.log('The file was removed')
// })







