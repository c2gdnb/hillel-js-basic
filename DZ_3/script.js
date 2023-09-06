const firstName = prompt("Enter your firstname").trim();
const lastName = prompt("Enter your lastname").trim();
let email = prompt("Enter your email").replaceAll(" ", "");
const birthYear = prompt("Enter your birth year").replaceAll(" ", "");
const infoList = document.querySelector("#list");
let age = 0;

if (birthYear) {
  age = new Date().getFullYear() - birthYear;
}

if (!email.includes("@")) {
  email = `not valid email <b>${email}</b> (symbol @ not exist)`;
} else if (email.charAt(0) === "@") {
  email = `not valid email <b>${email}</b> (symbol @ find in first place)`;
} else if (email.charAt(email.length - 1) === "@") {
  email = `not valid email <b>${email}</b> (symbol @ find in last place)`;
}

infoList.innerHTML = `
  <li>Full name: <b>${firstName} ${lastName}</b></li>
  <li>Email: <b>${email}</b></li>
  <li>Age: <b>${age}</b></li>
`;
