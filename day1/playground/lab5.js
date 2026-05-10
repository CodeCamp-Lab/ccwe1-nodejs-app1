const os = require("os");

const time = os.uptime();
// console.log(time);

const hour = Math.floor(time / 3600);
const minutes = Math.floor((time % 3600) / 60);
const seconds = time % 60;

console.log(
  `เครื่องเปิดมาแล้ว ${hour} ชั่วโมง ${minutes} นาที ${seconds} วินาที`,
);
