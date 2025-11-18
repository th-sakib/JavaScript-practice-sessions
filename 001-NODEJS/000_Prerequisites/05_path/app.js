// environment variable
const { exec } = require("child_process");
exec(`setx hello "world"`);

const environmentVariables = process.env;
setInterval(() => {
  console.log(environmentVariables);
}, 10000);
