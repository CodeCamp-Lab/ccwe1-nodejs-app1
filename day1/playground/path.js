const path = require('path');

console.log(process.argv[1]);

const filePath = '/Users/prince/Desktop/CCWE1/playground/ccwe-nodejs-app1/day1/path.js'

console.log('ชื่อไฟล์', path.basename(filePath));
console.log('นามสกุลไฟล์', path.extname(filePath));
console.log('dirname',path.dirname(filePath));

const dir = path.dirname(filePath);
const result = path.join(dir, 'aa.js');
console.log(result);