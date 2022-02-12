const Thermostat = require('./Thermostat');

describe (Thermostat, () =>{
  const thermostat = new Thermostat;    
  const thermostat1 = new Thermostat;    

  it ('displays result',() =>{
    
    expect(thermostat.getTemperature()).toBe(20);
  });
  it ('increases temp of thermostat up by 2',() =>{
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it ('increases temp of thermostat down by 1',() =>{
    thermostat1.down();
    expect(thermostat1.getTemperature()).toBe(19);
  });

  it('Mint temp has been set up',() => {
    const thermostat = new Thermostat;
    expect(thermostat.getMinTemperature()).toBe(10); 
  });

  it ('ps on, temp up to 25C',() =>{
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(true);
    expect(thermostat.getTemperature()).toBe(25);
  });

  it('Saving mode OFF then MAX temp has been set up to 32',() => {
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false);
    expect(thermostat.getTemperature()).toBe(32); 
  });

  it('Saving mode OFF then MAX temp has been set up to 32',() => {
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false);
    expect(thermostat.getTemperature()).toBe(32); 
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });
  it('Checking energy usage levels',() => {
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false);
    expect(thermostat.getTemperature()).toBe(32); 
    expect(thermostat.getCurrentEnergyUsage()).toBe('high-usage')
    thermostat.reset();
    expect(thermostat.getCurrentEnergyUsage()).toBe('medium-usage')
    expect(thermostat.getTemperature()).toBe(20);
    thermostat.down();
    thermostat.down();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(17);
    expect(thermostat.getCurrentEnergyUsage()).toBe('low-usage')
  });
});













// const Thermostat = require('./Thermostat')

// describe (Thermostat,() => {
//   it ('displays default',() =>{
//     const thermostat = new Thermostat();
//     expect(thermostat.getTemperature()).toEqual(20);

//   });
// });
