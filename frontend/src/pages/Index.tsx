import { useState } from "react";
import { WelcomeHeader } from "@/components/WelcomeHeader";
import { MoodSelector } from "@/components/MoodSelector";
import { JournalEntry } from "@/components/JournalEntry";
import { AICompanion } from "@/components/AICompanion";
import { CrisisSupport } from "@/components/CrisisSupport";

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [journalEntry, setJournalEntry] = useState<string>("");
  const [showJournal, setShowJournal] = useState(false);
  const [showCompanion, setShowCompanion] = useState(false);

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    setShowJournal(true);
    setShowCompanion(true);
  };

  const handleJournalSubmit = (entry: string) => {
    setJournalEntry(entry);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8 max-w-6xl">
        {/* Welcome Header */}
        <WelcomeHeader />
        
        {/* Mood Selection */}
        <MoodSelector 
          selectedMood={selectedMood} 
          onMoodSelect={handleMoodSelect} 
        />
        
        {/* Main Content Grid */}
        {showJournal && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Journal Entry */}
            <div className="space-y-6">
              <JournalEntry onEntrySubmit={handleJournalSubmit} />
              
              {/* Crisis Support - Always visible for safety */}
              <CrisisSupport />
            </div>
            
            {/* AI Companion */}
            {showCompanion && (
              <div>
                <AICompanion 
                  mood={selectedMood} 
                  journalEntry={journalEntry} 
                />
              </div>
            )}
          </div>
        )}
        
        {/* Footer Message */}
        <div className="text-center py-8">
          <p className="text-muted-foreground text-sm">
            💙 Take things one step at a time. You're doing great.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
