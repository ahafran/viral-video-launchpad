export interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "text" | "file" | "recommendation";
}

export interface ChatSession {
  id: string;
  messages: Message[];
  isActive: boolean;
  startedAt: Date;
}

export interface UserBehavior {
  pageViews: string[];
  timeSpent: Record<string, number>;
  interactions: string[];
  preferences: string[];
}

export interface Recommendation {
  id: string;
  type: "plan" | "feature" | "content";
  title: string;
  description: string;
  confidence: number;
  reason: string;
}

export interface AIConfig {
  enabled: boolean;
  chatEnabled: boolean;
  recommendationsEnabled: boolean;
  apiKey?: string;
}
