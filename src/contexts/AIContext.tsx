import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  Message,
  ChatSession,
  UserBehavior,
  Recommendation,
  AIConfig,
} from "@/types/ai";

interface AIContextType {
  chatSession: ChatSession | null;
  userBehavior: UserBehavior;
  recommendations: Recommendation[];
  config: AIConfig;
  sendMessage: (text: string) => void;
  trackBehavior: (action: string, data?: any) => void;
  generateRecommendations: () => void;
  toggleChat: () => void;
  isChatOpen: boolean;
}

const AIContext = createContext<AIContextType | undefined>(undefined);

export function AIProvider({ children }: { children: ReactNode }) {
  const [chatSession, setChatSession] = useState<ChatSession | null>(null);
  const [userBehavior, setUserBehavior] = useState<UserBehavior>({
    pageViews: [],
    timeSpent: {},
    interactions: [],
    preferences: [],
  });
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [config] = useState<AIConfig>({
    enabled: true,
    chatEnabled: true,
    recommendationsEnabled: true,
  });

  const sendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    if (!chatSession) {
      const newSession: ChatSession = {
        id: Date.now().toString(),
        messages: [newMessage],
        isActive: true,
        startedAt: new Date(),
      };
      setChatSession(newSession);
    } else {
      setChatSession((prev) =>
        prev
          ? {
              ...prev,
              messages: [...prev.messages, newMessage],
            }
          : null,
      );
    }

    // Имитация ответа бота
    setTimeout(() => {
      const botResponse = generateBotResponse(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setChatSession((prev) =>
        prev
          ? {
              ...prev,
              messages: [...prev.messages, botMessage],
            }
          : null,
      );
    }, 1000);
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes("цена") || lowerMessage.includes("стоимость")) {
      return "У нас есть три тарифа: Базовый (115,000₽), Стандартный (454,000₽) и Премиум (1,134,000₽). Какой вас интересует?";
    }

    if (lowerMessage.includes("ролик") || lowerMessage.includes("видео")) {
      return "Мы создаем короткие ролики из ваших длинных видео и размещаем их на всех популярных платформах. Хотите узнать подробности?";
    }

    if (lowerMessage.includes("платформ") || lowerMessage.includes("соцсет")) {
      return "Мы работаем с TikTok, Instagram Reels, YouTube Shorts и VK Клипы. Полный охват аудитории!";
    }

    return "Спасибо за вопрос! Я помогу вам разобраться с нашими услугами. Можете уточнить, что именно вас интересует?";
  };

  const trackBehavior = (action: string, data?: any) => {
    setUserBehavior((prev) => ({
      ...prev,
      interactions: [...prev.interactions, action],
      pageViews:
        action === "page_view" ? [...prev.pageViews, data] : prev.pageViews,
    }));
  };

  const generateRecommendations = () => {
    const newRecommendations: Recommendation[] = [
      {
        id: "1",
        type: "plan",
        title: "Стандартный тариф",
        description: "Рекомендуем для активного продвижения",
        confidence: 0.85,
        reason: "Основываясь на вашей активности",
      },
      {
        id: "2",
        type: "feature",
        title: "Гарантия возврата",
        description: "Узнайте о наших гарантиях",
        confidence: 0.75,
        reason: "Популярно среди новых клиентов",
      },
    ];

    setRecommendations(newRecommendations);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    generateRecommendations();
  }, [userBehavior]);

  return (
    <AIContext.Provider
      value={{
        chatSession,
        userBehavior,
        recommendations,
        config,
        sendMessage,
        trackBehavior,
        generateRecommendations,
        toggleChat,
        isChatOpen,
      }}
    >
      {children}
    </AIContext.Provider>
  );
}

export function useAI() {
  const context = useContext(AIContext);
  if (context === undefined) {
    throw new Error("useAI must be used within an AIProvider");
  }
  return context;
}
