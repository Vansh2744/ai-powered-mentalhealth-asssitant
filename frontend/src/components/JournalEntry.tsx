import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface JournalEntryProps {
  onEntrySubmit: (entry: string) => void;
}

const journalPrompts = [
  "What's been on your mind lately?",
  "Describe three things you're grateful for today",
  "What would you like to let go of?",
  "How did you take care of yourself today?",
  "What's one small step you can take tomorrow?",
  "What emotions are you experiencing right now?",
];

export const JournalEntry = ({ onEntrySubmit }: JournalEntryProps) => {
  const [entry, setEntry] = useState("");
  const [currentPrompt] = useState(journalPrompts[Math.floor(Math.random() * journalPrompts.length)]);

  const handleSubmit = () => {
    if (entry.trim()) {
      onEntrySubmit(entry);
      setEntry("");
    }
  };

  return (
    <Card className="p-6 bg-gradient-comfort border-none shadow-comfort animate-calm-fade-in">
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-comfort-foreground mb-2">
            Journal Your Thoughts
          </h3>
          <p className="text-comfort-foreground/80 text-sm italic">
            "{currentPrompt}"
          </p>
        </div>

        <div className="space-y-4">
          <Label htmlFor="journal" className="text-comfort-foreground font-medium">
            Share what's in your heart...
          </Label>
          <Textarea
            id="journal"
            placeholder="Take your time... there's no rush. Write whatever feels right for you."
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            className="min-h-[150px] resize-none border-comfort/30 bg-comfort-soft/50 
                     focus:border-comfort focus:ring-comfort/20 rounded-xl
                     placeholder:text-comfort-foreground/60"
          />
        </div>

        <div className="flex gap-3 justify-end">
          <Button 
            variant="outline" 
            onClick={() => setEntry("")}
            disabled={!entry.trim()}
            className="border-comfort/30 text-comfort-foreground"
          >
            Clear
          </Button>
          <Button 
            variant="comfort" 
            onClick={handleSubmit}
            disabled={!entry.trim()}
            className="shadow-comfort"
          >
            Share with AI Companion
          </Button>
        </div>
      </div>
    </Card>
  );
};