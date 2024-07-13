require('dotenv').config()
const sendEmail = require("./src/service")
const {emailList} = require("./src/data")
// Warning: don't promise all it'll give you 'Concurrent connections limit exceeded' Error

// Explenation to the code:
// making a for loop with setTimeout won't make each one executes after 1.7s.
// so i made a recusive func to function as it should.

let timeoutNumber = 1700
let i = 0
const recursiveThroughEmails = () => {
    setTimeout(()=>{
        sendEmail(emailList[i])
        console.log(emailList[i], i)
        if(i < emailList.length-1){
            recursiveThroughEmails()
        }
        i+=1
    }, timeoutNumber)
}
recursiveThroughEmails()