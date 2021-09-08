const fs = require("fs")

fs.writeFile(`states.html` ,
    `<h1>Abia state </h1> 
    <h1>Adamawa state</h1>  
    <h1>Lagos state</h1>
    <h1>Ogun state </h1> 
    <h1>Kogi state </h1>`, (error , data ) => {
    if (error ) {
        console.log("an error occured")
    }
    fs.readFile(`states.html` , (error , response) => {
        if (error) {
            console.log ("The states are not valid")
        }
        console.log(response.toString())
    })
})


