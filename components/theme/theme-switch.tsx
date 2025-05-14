"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {    Switch } from "@/components/ui/switch"

 
export default  function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid mismatched theme rendering
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  // const isDark = theme === "dark";
  return (
    <div className="flex items-center gap-2 text-foreground">
      <Sun size={18} />
      <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
      <Moon size={18} />
    </div>
  );
}
