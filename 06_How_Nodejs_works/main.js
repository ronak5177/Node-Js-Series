const fs = require("fs")
const os = require("os")

// console.log(os.cpus().length)


/*
console.log("1")

// Blocking request
const result = fs.readFileSync("contacts.txt", "utf-8")
console.log(result)

console.log("2")

*/


// Output Will be
// 1
// Ronak Patel: +918495392354
// Mayur Dabhi: +919347385239
// 2


console.log("1")

// Non-Blocking request ...
fs.readFile("./contacts.txt", "utf-8", (err, result)=>{
    console.log(result)
})
console.log("2")

/*
1
2
Ronak Patel: +918495392354
Mayur Dabhi: +919347385239
*/