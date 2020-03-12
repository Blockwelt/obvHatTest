// const Gpio = require('onoff');

// const pin_full = new Gpio(4, 'in');
// const pin_tq = new Gpio(17, 'in');
// const pin_half = new Gpio(27, 'in');
// const pin_low = new Gpio(22, 'in');

// const comparator = [pin_full, pin_tq, pin_half, pin_low]
const comparator2 = [true,false,false,true]

// const pin_red = new Gpio(6, 'out');
// const pin_green = new Gpio(16, 'out');
// const pin_blue = new Gpio(5, 'out');


const toggle = (r,g,b) => {
    pin_red.writeSync(r ? 1:0);
    pin_green.writeSync(g ? 1:0);
    pin_blue.writeSync(b ? 1:0);
};


const bat = () => {

    let reading = 0;
    comparator2.forEach(pin => {
        // reading += !pin.readSync() ? 1 : 0
        reading += !pin ? 1 : 0
    });


    return reading/4
};

//console.log(bat());
module.exports = {bat, toggle}