export class WeatherManager {
  constructor(citiesData) {
    this.citiesData = citiesData;
    this.currentCity = 'sao-paulo';
  }

  updateDisplay(cityKey) {
    if (!this.citiesData[cityKey]) return null;

    const cityData = this.citiesData[cityKey];
    const { weather, airQuality } = cityData;

    // update weather elements on screen
    this.updateElement('temperature', `${weather.temp}°C`);
    this.updateElement('weather-description', weather.description);
    this.updateElement('humidity', `${weather.humidity}%`);
    this.updateElement('air-quality', airQuality.status.toUpperCase());
    this.updateElement('wind', `${weather.wind} km/h`);
    this.updateElement('uv-index', weather.uv.toUpperCase());

    this.currentCity = cityKey;
    return weather.condition;
  }

  updateElement(elementId, value) {
    // simple helper to update DOM elements
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = value;
    }
  }
}
