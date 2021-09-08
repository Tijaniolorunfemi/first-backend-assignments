// function workAndSmile (smileText) {
//     console.time("Start Iteration")
//     for(let i = 0 ; i <= 100000 ; i++){
//         let result = 20*i
//         if(i === 100000 ){
//             console.log(result)
//         }
//     }
//     console.timeEnd("Start Iteration")
//     console.log(smileText)
// }
// workAndSmile("E Choke")

//Working with callback
// const bar = () => console.log("Bar")
// setTimeout(() => {
//     console.log("hello , world")
// } , 8000)
// const baz = () => console.log("Baz")

// const foo = () => {
//     console.log("fool")
//     setTimeout(() =>bar() , 0)
// }

// foo()
// bar()
// baz()

const fifteen = Promise.reject(15)
fifteen
    .then(result => console.log(result*10))
    .catch(err => console.log(err))

const sum = (a , b) => {
    if (a !== 0){
        return Promise.resolve(a + b )
    }else {
        return Promise.reject("Error Dectected")
    }
}

letsum = sum(0 , 3)
// sum23
.then(result => console.log(result))
.catch(error => console.log(error))

