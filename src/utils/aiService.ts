export class AIService {
  private static instance: AIService;
  private apiKey?: string;

  private constructor() {}

  static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  setApiKey(key: string) {
    this.apiKey = key;
  }

  async generateResponse(message: string, context?: any): Promise<string> {
    // Заглушка для API вызова
    // В реальном проекте здесь будет интеграция с OpenAI/Claude
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.getContextualResponse(message, context));
      }, 1000);
    });
  }

  private getContextualResponse(message: string, context?: any): string {
    const lowerMessage = message.toLowerCase();

    const responses = {
      greeting: [
        "Привет! Я ваш ИИ-помощник. Готов помочь с любыми вопросами о наших услугах!",
        "Здравствуйте! Чем могу быть полезен?",
      ],
      pricing: [
        "У нас есть три гибких тарифа для любых потребностей. Расскажу подробнее?",
        "Цены зависят от объема роликов. Какой масштаб продвижения вас интересует?",
      ],
      features: [
        "Мы создаем вирусный контент из ваших видео и размещаем на всех популярных платформах",
        "Наша технология позволяет генерировать сотни роликов ежедневно с профессиональным качеством",
      ],
    };

    if (lowerMessage.includes("привет") || lowerMessage.includes("hello")) {
      return this.getRandomResponse(responses.greeting);
    }

    if (lowerMessage.includes("цена") || lowerMessage.includes("стоимость")) {
      return this.getRandomResponse(responses.pricing);
    }

    if (lowerMessage.includes("как") || lowerMessage.includes("что")) {
      return this.getRandomResponse(responses.features);
    }

    return "Интересный вопрос! Могу рассказать подробнее о наших тарифах, процессе работы или ответить на любые другие вопросы.";
  }

  private getRandomResponse(responses: string[]): string {
    return responses[Math.floor(Math.random() * responses.length)];
  }

  async analyzeUserBehavior(behavior: any): Promise<any[]> {
    // Простой алгоритм рекомендаций
    const recommendations = [];

    if (behavior.pageViews.includes("/plan-")) {
      recommendations.push({
        type: "plan",
        confidence: 0.8,
        reason: "Интерес к тарифам",
      });
    }

    if (behavior.interactions.length > 5) {
      recommendations.push({
        type: "feature",
        confidence: 0.7,
        reason: "Активное взаимодействие",
      });
    }

    return recommendations;
  }
}

export const aiService = AIService.getInstance();
