export class Robot {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
    this.currentState = 'neutral';
  }

  updateState(condition, cityData) {
    if (!this.element || !cityData) return;
    
    // reset robot classes
    this.element.className = 'robot';
    
    const { weather, airQuality } = cityData;
    
    // check if conditions are perfect for outdoor activities
    const isPerfect = airQuality.status === 'bom' && 
                     weather.temp >= 18 && weather.temp <= 28 &&
                     weather.wind <= 20 && 
                     weather.humidity >= 40 && weather.humidity <= 70 &&
                     weather.uv !== 'muito alto';
    
    const isHappy = airQuality.status === 'bom' && weather.temp <= 30;
    const isSad = airQuality.status === 'moderado' || airQuality.status === 'ruim';
    
    // set robot mood based on conditions
    if (isPerfect) {
      this.element.classList.add('perfect');
      this.currentState = 'perfect';
    } else if (isHappy) {
      this.element.classList.add('happy');
      this.currentState = 'happy';
    } else if (isSad) {
      this.element.classList.add('sad');
      this.currentState = 'sad';
    } else {
      this.element.classList.add('neutral');
      this.currentState = 'neutral';
    }
    
    // show UV warning when levels are dangerous
    if (weather.uv === 'muito alto' || weather.uv === 'alto') {
      this.element.classList.add('uv-warning');
    }
    
    this.addConditionClass(condition);
    this.addSpecialConditions(weather);
  }

  addConditionClass(condition) {
    // apply weather-specific styling
    switch (condition) {
      case 'sunny':
      case 'hot':
        this.element.classList.add('sunny');
        break;
      case 'rainy':
        this.element.classList.add('rainy');
        break;
      case 'cloudy':
        this.element.classList.add('cloudy');
        break;
      default:
        this.element.classList.add('neutral');
    }
  }

  addSpecialConditions(weather) {
    // add visual effects for extreme conditions
    if (weather.wind > 20) this.element.classList.add('windy');
    if (weather.humidity < 40) this.element.classList.add('dry');
    if (weather.temp > 30) this.element.classList.add('hot-mouth');
    if (weather.temp < 18) this.element.classList.add('cold-mouth');
  }
}
