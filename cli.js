const Thermostat = require('./thermostat')
thermostat = new Thermostat;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var recursiveAsyncReadLine = function () {
  rl.question('Enter command ', (answer) => {
    if (answer == 'up') {
        thermostat.up(); 
    }
    else if (answer == 'down') {
        thermostat.down();
    }
    else if (answer == 'exit') {
      return rl.close();
    }
    console.log(thermostat.psmode);
    console.log(`emperature is ${thermostat.temperature}`);
    recursiveAsyncReadLine();
  });
}
recursiveAsyncReadLine();