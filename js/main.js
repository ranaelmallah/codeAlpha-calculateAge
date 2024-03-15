let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let submit = document.querySelector("#submit");
let form = document.querySelector(".form");
let age = document.querySelector(".age");
let link = document.querySelector(".link");


let current = new Date();
let currentYear = new Date().getFullYear();
let currentmonth = new Date().getMonth() + 1;
let currentday = new Date().getDay() + 10;

console.log(current);
console.log(currentYear);
console.log(currentmonth);
console.log(currentday)
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let yourAgeInyears = (currentYear - parseInt(year.value))
    let yourAgeInmonthes = (currentmonth - parseInt(month.value))
    let yourAgeIndayes = (currentday - parseInt(day.value))
    if (yourAgeInmonthes < 0) {
        yourAgeInyears--;
        yourAgeInmonthes += 12;
    }
    if (yourAgeIndayes < 0) {
        month.value--;
        yourAgeIndayes += 31;
    }
    form.style.display = "none";
    age.textContent = ` Your Age is ${ parseInt(yourAgeInyears) } Year and ${ yourAgeInmonthes } Month and ${ yourAgeIndayes }  Dayes `;
    link.style.display = 'block'

    link.onclick = function() {
        form.style.display = 'block'
        age.textContent = ``;
        link.style.display = 'none'

    }

});