import { DataLoader } from './data.js';
import { Robot } from './robot.js';
import { WeatherManager } from './weather.js';
import { GuardianRecommendations } from './recommendations.js';

class GuardianBotApp {
  constructor() {
    this.robot = null;
    this.weatherManager = null;
    this.recommendations = null;
    this.citiesData = null;
    this.chatKnowledge = null;
    this.isInitialized = false;
    
    // cache DOM elements we use frequently
    this.elements = {};
  }

  async init() {
    try {
      // load data from JSON files
      this.citiesData = await DataLoader.loadCitiesData();
      this.chatKnowledge = await DataLoader.loadChatKnowledge();
      
      // initialize components
      this.robot = new Robot('robot');
      this.weatherManager = new WeatherManager(this.citiesData);
      this.recommendations = new GuardianRecommendations();
      
      this.cacheElements();
      this.setupEventListeners();
      this.loadInitialData();
      
      this.isInitialized = true;
    } catch (error) {
      console.error('Erro ao inicializar:', error);
    }
  }

  cacheElements() {
    // store frequently used DOM elements
    this.elements = {
      citySelect: document.getElementById('citySelect'),
      chatInput: document.getElementById('chatInput'),
      chatMessages: document.getElementById('chatMessages'),
      sendButton: document.getElementById('sendBtn')
    };
  }

  setupEventListeners() {
    // city selection dropdown
    if (this.elements.citySelect) {
      this.elements.citySelect.addEventListener('change', (e) => {
        this.handleCityChange(e.target.value);
      });
    }
    this.setupChat();
  }

  loadInitialData() {
    // set default robot state
    this.robot.element.classList.add('happy');
    this.robot.currentState = 'happy';
    
    // add initial chat message
    if (this.elements.chatMessages) {
      this.addChatMessage('Olá! Sou o Guardian, seu robô guardião. Como posso ajudar?', 'bot');
    }
    
    // add initial recommendation message
    const recommendationsElement = document.getElementById('recommendations');
    if (recommendationsElement) {
      const item = document.createElement('div');
      item.className = 'recommendation-item';
      item.textContent = 'Selecione uma cidade para ver minhas recomendações personalizadas!';
      recommendationsElement.appendChild(item);
    }
    
    // add initial weather message
    const weatherDesc = document.getElementById('weather-description');
    if (weatherDesc) {
      weatherDesc.textContent = 'Selecione uma cidade para ver os dados climáticos';
    }
  }

  handleCityChange(cityKey) {
    if (!this.weatherManager || !this.citiesData) return;
    
    // update weather display and get condition
    const condition = this.weatherManager.updateDisplay(cityKey);
    const cityData = this.citiesData[cityKey];
    
    if (condition && cityData) {
      // update robot state and recommendations
      this.robot.updateState(condition, cityData);
      this.recommendations.updateRecommendations(cityData);
    }
  }

  setupChat() {
    // send button click
    if (this.elements.sendButton) {
      this.elements.sendButton.addEventListener('click', () => this.sendMessage());
    }
    
    // enter key in input
    if (this.elements.chatInput) {
      this.elements.chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.sendMessage();
      });
    }
  }

  sendMessage() {
    if (!this.elements.chatInput || !this.elements.chatMessages) return;
    
    const message = this.elements.chatInput.value.trim();
    if (!message) return;
    
    // add user message
    this.addChatMessage(message, 'user');
    
    // generate and add bot response with delay
    const botResponse = this.generateBotResponse(message);
    setTimeout(() => {
      this.addChatMessage(botResponse, 'bot');
    }, 500);
    
    this.elements.chatInput.value = '';
  }

  addChatMessage(message, sender) {
    if (!this.elements.chatMessages) return;
    
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}-message`;
    messageElement.textContent = message;
    
    this.elements.chatMessages.appendChild(messageElement);
    this.elements.chatMessages.scrollTop = this.elements.chatMessages.scrollHeight;
  }

  generateBotResponse(userMessage) {
    if (!this.chatKnowledge) {
      return "Desculpe, minha base de conhecimento não carregou. Tente recarregar a página.";
    }
    
    const message = userMessage.toLowerCase();
    
    // search for keywords in knowledge base
    for (const [category, data] of Object.entries(this.chatKnowledge)) {
      if (category === 'default') continue;
      
      const hasKeyword = data.keywords.some(keyword => message.includes(keyword));
      if (hasKeyword) {
        const responses = data.responses;
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    
    // return default response if no match
    const defaultResponses = this.chatKnowledge.default.responses;
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  }
}

const guardianBot = new GuardianBotApp();

document.addEventListener('DOMContentLoaded', () => {
  guardianBot.init();
});
