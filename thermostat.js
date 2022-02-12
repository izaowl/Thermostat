class Thermostat{
  constructor(){
      this.temperature = 20;
      this.powerSaving = true;
      this.minTemperature = 10;
      this.maxTemperature = 25;
      this.maxSavingModeOffTemperature = 32
  }

  getTemperature(){
      return this.temperature;
  }

  getMinTemperature(){
      return this.minTemperature;
  }

  getMaxTemperature(){
      return this.maxTemperature;
  }
  
  getmaxSavingModeOffTemperature (){
      return this.maxSavingModeOffTemperature;
  }

  setPowerSavingMode(mode){
    if (mode === true){
        this.powerSaving = true;
        this.temperature = this.maxTemperature;
    }
    else {
        this.powerSaving = false;
        this.temperature = this.maxSavingModeOffTemperature;
    }
    
  }

  up(){
      this.temperature += 1;
  }
  
  down(){
    this.temperature -= 1;
  }

  reset(){
    this.temperature = 20;
  }

  getCurrentEnergyUsage(){
    if (this.temperature<18)
      return 'low-usage';
    else if (this.temperature>18 && this.temperature<25 )
      return 'medium-usage';
    else 
      return 'high-usage'

  }
}

module.exports = Thermostat;