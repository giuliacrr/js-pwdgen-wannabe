const firstName = prompt("What's your name?");
const lastName = prompt("What's your last name?");
const userAge = prompt("How old are you?");
const yourFavColor = prompt("What's your favourite color?");
const bonus = 21 + parseInt(userAge);

document.getElementById("firstName").innerHTML = `${firstName}`
document.getElementById("lastName").innerHTML = `${lastName}`
document.getElementById("userAge").innerHTML = `${userAge}`
document.getElementById("yourFavColor").innerHTML = `${yourFavColor}`
document.getElementById("generatedPw").innerHTML = firstName + lastName + yourFavColor + bonus;

