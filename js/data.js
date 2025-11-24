export class DataLoader {
  static async loadCitiesData() {
    try {
      const response = await fetch('./data/cities.json');
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.warn('Failed to load cities data:', error);
      return null;
    }
  }

  static async loadChatKnowledge() {
    try {
      const response = await fetch('./data/chat-knowledge.json');
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.warn('Failed to load chat knowledge:', error);
      return null;
    }
  }
}
