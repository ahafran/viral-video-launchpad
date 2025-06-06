import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const getIcon = () => {
    return theme === "light" ? "Sun" : "Moon";
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border-border hover:bg-accent"
    >
      <Icon name={getIcon()} size={16} />
    </Button>
  );
};

export default ThemeToggle;
