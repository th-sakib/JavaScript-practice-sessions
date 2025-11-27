const user_name = process.argv[2] || "guest";
const time = process.argv[3];
console.log(process.argv);

console.log("Welcome", user_name);

time ?? console.log("time doesn't exists");
if (time < 12) {
  console.log("Good Morning");
} else if (time < 18) {
  console.log("Good Evening");
} else if (time < 0) {
  console.log("Good Night");
}
