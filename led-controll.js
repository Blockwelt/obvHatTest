const Gpio = require('onoff');

const pin_full = new Gpio(4, 'in');
const pin_tq = new Gpio()

const pin_red = new Gpio(6, 'out');
const pin_green = new Gpio(16, 'out');
const pin_blue = new Gpio(5, 'out');


exports.toggle(r,g,b) =>{
    pin_red.writeSync(r ? 1:0);
    pin_green.writeSync(g ? 1:0);
    pin_blue.writeSync(b ? 1:0);
}