import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useAI } from "@/contexts/AIContext";
import { useNavigate } from "react-router-dom";

const RecommendationEngine = () => {
  const { recommendations, trackBehavior } = useAI();
  const navigate = useNavigate();

  if (recommendations.length === 0) {
    return null;
  }

  const handleRecommendationClick = (rec: any) => {
    trackBehavior("recommendation_click", rec.id);

    if (rec.type === "plan") {
      const contactSection = document.getElementById("contacts");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (rec.type === "feature" && rec.title.includes("Гарантия")) {
      navigate("/guarantee");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <Icon name="Sparkles" className="text-purple-600 mr-2" size={24} />
          <h2 className="text-2xl font-oswald font-bold text-gray-900 dark:text-white">
            Рекомендации для вас
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((rec) => (
            <Card
              key={rec.id}
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    {rec.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {rec.description}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Icon name="Target" size={12} className="mr-1" />
                    <span>{rec.reason}</span>
                  </div>
                </div>
                <div className="ml-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    {rec.type === "plan" && (
                      <Icon
                        name="Package"
                        size={20}
                        className="text-purple-600"
                      />
                    )}
                    {rec.type === "feature" && (
                      <Icon
                        name="Shield"
                        size={20}
                        className="text-purple-600"
                      />
                    )}
                    {rec.type === "content" && (
                      <Icon
                        name="FileText"
                        size={20}
                        className="text-purple-600"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                  <span>Релевантность</span>
                  <span>{Math.round(rec.confidence * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${rec.confidence * 100}%` }}
                  />
                </div>
              </div>

              <Button
                onClick={() => handleRecommendationClick(rec)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                size="sm"
              >
                Подробнее
                <Icon name="ArrowRight" size={14} className="ml-2" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationEngine;
