const os = require('os');

console.log('ระบบปฏิบัติการ:', os.platform());
console.log('CPU:', os.cpus().length, 'คอร์');
console.log('Memory:', os.totalmem() / (1024 * 1024 * 1024), 'GB');
console.log('User Info:', os.userInfo());