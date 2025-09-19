import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface MoodOption {
  emoji: string;
  label: string;
  color: string;
}

const moodOptions: MoodOption[] = [
  { emoji: "😊", label: "Happy", color: "nature" },
  { emoji: "😌", label: "Calm", color: "calm" },
  { emoji: "😐", label: "Okay", color: "secondary" },
  { emoji: "😔", label: "Sad", color: "comfort" },
  { emoji: "😰", label: "Anxious", color: "destructive" },
  { emoji: "😤", label: "Angry", color: "destructive" },
];

interface MoodSelectorProps {
  selectedMood?: string;
  onMoodSelect: (mood: string) => void;
}

export const MoodSelector = ({ selectedMood, onMoodSelect }: MoodSelectorProps) => {
  return (
    <Card className="p-6 bg-gradient-calm border-none shadow-soft animate-calm-fade-in">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          How are you feeling today?
        </h2>
        <p className="text-muted-foreground">
          Choose the mood that best describes how you're feeling right now
        </p>
      </div>
      
      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
        {moodOptions.map((mood) => (
          <Button
            key={mood.label}
            variant={selectedMood === mood.label ? "mood" : "outline"}
            size="mood"
            onClick={() => onMoodSelect(mood.label)}
            className={`
              flex-col gap-2 h-20 transition-all duration-300
              ${selectedMood === mood.label ? 'ring-2 ring-primary ring-offset-2' : ''}
              hover:animate-gentle-scale
            `}
          >
            <span className="text-2xl">{mood.emoji}</span>
            <span className="text-xs font-medium">{mood.label}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};