const accountID= 2305542
let accountEmail= "ishan@gmail.com"
var accountPassword = "12345"
accountCity="Patna"
let accountState
console.table([accountID,accountPassword,accountEmail,accountPassword,accountCity,accountState])

/* prefer not to use var..because of issue in block scope and functional scope*/

// accountID=2305569 // not allowed

accountEmail="rakesh@gmail.com"
accountPassword="54321"
accountCity="bhubaneshwar"
console.table([accountID,accountPassword,accountEmail,accountPassword,accountCity,accountState])
