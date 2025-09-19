import { Card } from "@/components/ui/card";
import { Brain, Sparkles } from "lucide-react";

export const WelcomeHeader = () => {
  const displayName = "Vansh";

  return (
    <Card className="text-center p-8 bg-gradient-hero border-none shadow-soft animate-calm-fade-in relative">
      
      <div className="flex justify-center mb-4">
        <div className="relative">
          <Brain className="w-12 h-12 text-white animate-soft-pulse" />
          <Sparkles className="w-6 h-6 text-white/80 absolute -top-2 -right-2 animate-gentle-float" />
        </div>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Welcome back, {displayName}!
      </h1>
      
      <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
        Your safe space for mental wellness is ready. 
        Share your feelings, explore your thoughts, and find comfort in this supportive environment.
      </p>
      
      <div className="mt-6 text-white/75 text-sm">
        <p>✨ Your conversations are private and secure</p>
      </div>
    </Card>
  );
};