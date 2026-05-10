// const dayjs = require('dayjs');
import dayjs from "dayjs";
import 'dayjs/locale/th';
dayjs.locale('th');

console.log('วันนี้คือ:', dayjs().format('YYYY-MM-DD HH:mm:ss'));

const nextWeek = dayjs().add(7, 'day');
console.log('อีก 7 วันข้างหน้า:', nextWeek.format('YYYY-MM-DD'));

console.log('วันนี้คือ:', dayjs().format('D MMMM YYYY'));