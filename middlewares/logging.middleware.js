
const logging = function (req, res, next) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    console.log(`${day}-${month}-${year} at ${hour}:${min}:${sec}`);
    next()
}
module.export = {logging}