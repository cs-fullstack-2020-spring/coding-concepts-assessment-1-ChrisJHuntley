// sanity check
console.log('Welcome to the assesment')

let userName = prompt('What is your name?')
// prompt users name and apply conditional
while (userName == '') {
    userName = prompt('What is your name?')
}
// prompt users email and apply conditional
let userEmail = prompt('Enter Email here')
while (userEmail == '') {
    userEmail = prompt('Enter Email here')
}
// prompt users message and apply conditional
let userContact = prompt('Contact Message')
while (userContact == '') {
    userContact = prompt('contact message')
}
// create an array
let userArray = []
// push variables(user input) into array
userArray.push(userName)
userArray.push(userEmail)
userArray.push(userContact)
console.log(userArray)
// Set loop for how you want to apply your variables to the array
for( let i=0;i<userArray.length; i++){
    console.log(userArray[i])
}
// confirm with user using true or false method
let userInfo = confirm(`Hello ${userName} 
Your email is ${userEmail} 
Contact message: ${userContact}.
 Would you like to cantact me?`)
if (userInfo == false) {
    alert('Thats ok, Maybe next time')
}
if (userInfo == true) {
    alert('Thank you i will contact you shortly')
}
