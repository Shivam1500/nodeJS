const path = require('path');
const baseName = path.basename("/hi/hello/node.html");
const dirName = path.dirname("/hi/hello/node.html");
const extName = path.extname("/hi/hello/node.html");
console.log(extName);
console.log(dirName);
console.log(baseName);