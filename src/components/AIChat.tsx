import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useAI } from "@/contexts/AIContext";

const AIChat = () => {
  const { chatSession, sendMessage, isChatOpen, toggleChat } = useAI();
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatSession?.messages]);

  const handleSend = () => {
    if (inputText.trim()) {
      sendMessage(inputText);
      setInputText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isChatOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          className="w-14 h-14 rounded-full bg-graffiti-red hover:bg-red-600 text-white shadow-lg animate-pulse"
        >
          <Icon name="MessageCircle" size={24} />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96">
      <Card className="bg-white dark:bg-gray-800 shadow-2xl border-0">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-graffiti-red text-white rounded-t-lg">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="Bot" size={16} />
            </div>
            <div>
              <h3 className="font-bold text-sm">ИИ Помощник</h3>
              <p className="text-xs opacity-90">Онлайн</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleChat}
            className="text-white hover:bg-white/20"
          >
            <Icon name="X" size={16} />
          </Button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-3">
          {!chatSession && (
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
              <Icon
                name="MessageSquare"
                size={32}
                className="mx-auto mb-2 opacity-50"
              />
              <p className="text-sm">Привет! Как дела? Чем могу помочь?</p>
            </div>
          )}

          {chatSession?.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  message.sender === "user"
                    ? "bg-graffiti-red text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Напишите сообщение..."
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-graffiti-red focus:border-transparent dark:bg-gray-700 dark:text-white text-sm"
            />
            <Button
              onClick={handleSend}
              disabled={!inputText.trim()}
              className="bg-graffiti-red hover:bg-red-600 text-white px-3"
            >
              <Icon name="Send" size={16} />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AIChat;
