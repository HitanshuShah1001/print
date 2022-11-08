const Hexcodes = require('./Components/Hexcodes')
const Objectmessage = require('./Components/Objectmessage')
const DEFAULTS = require('./CONSTANTS/default');
const TYPES = require('./CONSTANTS/types');

function Coloredconsole(
  message = DEFAULTS.MESSAGE,
  color = DEFAULTS.COLOR,
  ...args
) {
  if (typeof message === TYPES.OBJECT) {
    Objectmessage(message, color)
  } else {
    let Consolecolor = Hexcodes[color]
    if (Consolecolor !== undefined) {
      console.log(`\x1b[${Consolecolor}${message} \x1b[0m`)
    } 
    else if (Consolecolor === undefined) {
      console.log(`\x1b[97m${message} \x1b[0m`)
      console.log(
        `Please provide a valid color. See list here:- \x1b[34mhttps://www.npmjs.com/package/coloredprints \x1b[0m`
      );
    } 
    else {
      console.log(message)
    }
  }
}

module.exports = Coloredconsole
