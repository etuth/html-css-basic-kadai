const currientDate = new Date();

const year = currientDate.getFullYear();
const month = currientDate.getMonth() + 1; // 1を加える
const date = currientDate.getDate();

const zeroPad = (num) => String(num).padStart(2, '0');

const formattedDate = `${year}年${zeroPad(month)}月${zeroPad(date)}日`;
console.log(formattedDate);