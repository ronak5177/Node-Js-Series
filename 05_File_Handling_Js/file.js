const fs = require("fs")

// Sync ...Blocking Request
// fs.writeFileSync("./test.txt", "This is test file")

// Async ...Non-Blocking Request
// fs.writeFile("./test.txt", "This is test file2", (err) =>{
//     console.log(err)
// })

// const data = fs.readFileSync("./contacts.txt", "utf-8")

// fs.readFile("./contacts.txt", "utf-8", (err, data)=>{
//     if(err){
//         console.log(err)
//     } else{
//         console.log(data)
//     }
// })

// fs.appendFileSync("./contacts.txt", "\nNiharika Dube: +919438923434")
// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString())

// fs.cpSync("./contacts.txt", "./dummy.txt")

// fs.unlink("./dummy.txt", (err)=>{
//     if (err){
//         console.log(err)
//     } else{
//         console.log("file successfully deleted")
//     }
// })

// const state = fs.statSync("./test.txt")
// console.log(state)

fs.mkdirSync("my-docs/test1/a/", {recursive: true})

// console.log(data)
