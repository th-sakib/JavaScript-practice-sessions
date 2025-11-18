const fs = require("fs");

const abcd = fs.readFileSync("./.env").toString();

const splittedAbcd = abcd.split("\n");

splittedAbcd.map((el) => {
  const [key, value] = el.split("=");
  process.env[key] = value;
});
