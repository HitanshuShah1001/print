const Hexcodes = require("./Hexcodes");
function Objectmessage(message,color){
    let Consolecolor = Hexcodes[color];
    if (Consolecolor !== undefined) {
        console.log(`\x1b[${Consolecolor}${JSON.stringify(message)} \x1b[0m`);
      } else if (Consolecolor === undefined) {
        console.log(`\x1b[97m${JSON.stringify(message)} \x1b[0m`);
        console.log(
            `Please provide a valid color. See list here:- \x1b[34mhttps://www.npmjs.com/package/coloredprints \x1b[0m`
          );
      } else {
        console.log(message);
      }
}
module.exports = Objectmessage;