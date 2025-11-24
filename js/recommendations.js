export class GuardianRecommendations {
  constructor() {
    this.element = document.getElementById('recommendations');
    this.data = null;
    this.loadRecommendations();
  }

  async loadRecommendations() {
    try {
      const response = await fetch('./data/recommendations.json');
      this.data = await response.json();
    } catch (error) {
      console.error('Erro ao carregar recomendações:', error);
    }
  }

  updateRecommendations(cityData) {
    if (!this.element || !cityData || !this.data) return;

    const { weather, airQuality } = cityData;
    const recommendations = this.generateRecommendations(weather, airQuality);
    
    // clear and add new recommendations
    this.element.innerHTML = '';
    recommendations.forEach(rec => {
      const item = document.createElement('div');
      item.className = `recommendation-item ${rec.type || ''}`;
      item.textContent = rec.message;
      this.element.appendChild(item);
    });
  }

  generateRecommendations(weather, airQuality) {
    const recommendations = [];
    const isAirBad = airQuality.status === 'ruim' || airQuality.status === 'moderado';
    
    // add different types of recommendations based on conditions
    this.addAirQualityRecommendations(recommendations, airQuality);
    this.addTemperatureRecommendations(recommendations, weather);
    this.addUVRecommendations(recommendations, weather);
    this.addHumidityRecommendations(recommendations, weather);
    this.addWindRecommendations(recommendations, weather);
    this.addGeneralRecommendations(recommendations, isAirBad);
    this.addPerfectDayRecommendations(recommendations, weather, airQuality);

    return recommendations;
  }

  addAirQualityRecommendations(recommendations, airQuality) {
    // air quality specific advice
    if (airQuality.status === 'ruim') {
      recommendations.push(...this.data.airQuality.poor);
    } else if (airQuality.status === 'moderado') {
      recommendations.push(...this.data.airQuality.moderate);
    } else {
      recommendations.push(this.getRandomItem(this.data.airQuality.good));
    }
  }

  addTemperatureRecommendations(recommendations, weather) {
    // temperature based recommendations
    if (weather.temp > 35) {
      recommendations.push(...this.data.temperature.extremeHot);
    } else if (weather.temp > 30) {
      recommendations.push(this.getRandomItem(this.data.temperature.hot));
    } else if (weather.temp < 10) {
      recommendations.push(this.getRandomItem(this.data.temperature.cold));
    }
  }

  addUVRecommendations(recommendations, weather) {
    // UV protection advice
    if (weather.uv === 'muito alto') {
      recommendations.push(...this.data.uv.veryHigh);
    } else if (weather.uv === 'alto') {
      recommendations.push(this.getRandomItem(this.data.uv.high));
    }
  }

  addHumidityRecommendations(recommendations, weather) {
    // humidity related tips
    if (weather.humidity < 30) {
      recommendations.push(this.getRandomItem(this.data.humidity.low));
    } else if (weather.humidity > 80) {
      recommendations.push(this.getRandomItem(this.data.humidity.high));
    }
  }

  addWindRecommendations(recommendations, weather) {
    // wind condition advice
    if (weather.wind > 25) {
      recommendations.push(this.getRandomItem(this.data.wind.strong));
    }
  }

  addGeneralRecommendations(recommendations, isAirBad) {
    // general environmental tips
    if (isAirBad) {
      // filter out outdoor activities when air is bad
      const safeRecommendations = this.data.general.filter(rec => 
        !rec.message.includes('bike') && 
        !rec.message.includes('caminhada') &&
        !rec.message.includes('ar livre')
      );
      if (safeRecommendations.length > 0) {
        recommendations.push(this.getRandomItem(safeRecommendations));
      }
    } else {
      recommendations.push(this.getRandomItem(this.data.general));
    }
  }

  addPerfectDayRecommendations(recommendations, weather, airQuality) {
    // special recommendations for perfect weather days
    if (airQuality.status === 'bom' && weather.temp >= 18 && weather.temp <= 28) {
      recommendations.push(this.getRandomItem(this.data.perfect));
    }
  }

  getRandomItem(array) {
    // utility to pick random item from array
    return array[Math.floor(Math.random() * array.length)];
  }
}
