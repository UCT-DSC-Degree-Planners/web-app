// A script that is supposed to 

// const fs = require('fs');
const { exec } = require('child_process');

// const server = fs.openSync("./web-back/index")
// setTimeout(() => require("./web-back/index"), 5000);

process.chdir("web-front");
exec("start npm start", () => require("./web-back/index"));

// setTimeout(() => exec(), 5000);