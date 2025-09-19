import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Brain } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface AICompanionProps {
  mood?: string;
  journalEntry?: string;
}

export const AICompanion = ({ mood, journalEntry }: AICompanionProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi, I'm here to listen and support you. How are you feeling right now?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mood && !messages.some((m) => m.text.includes(mood))) {
      const moodResponse = getMoodResponse(mood);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: moodResponse,
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    }
  }, [mood]);

  useEffect(() => {
    if (journalEntry) {
      const journalResponse = getJournalResponse(journalEntry);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() - 1).toString(),
          text: journalEntry,
          isUser: true,
          timestamp: new Date(),
        },
        {
          id: Date.now().toString(),
          text: journalResponse,
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    }
  }, [journalEntry]);

  const getMoodResponse = (mood: string) => {
    const responses = {
      Happy:
        "I'm so glad to hear you're feeling happy today! 😊 That's wonderful. What's bringing you joy?",
      Calm: "It sounds like you're in a peaceful place right now. That's beautiful. 🌸 Sometimes taking a moment to appreciate this feeling can be really grounding.",
      Okay: "Thank you for being honest about feeling just okay. That's completely valid. Sometimes 'okay' is exactly where we need to be. 💙",
      Sad: "I hear that you're feeling sad, and I want you to know that it's okay to feel this way. Your feelings are valid. 🤗 Would you like to share what's been weighing on your heart?",
      Anxious:
        "I can sense you're feeling anxious right now. That must feel overwhelming. 🌿 Remember to breathe deeply. You're safe in this moment. What's been causing you to feel this way?",
      Angry:
        "It sounds like you're experiencing some intense feelings right now. Anger can be really difficult to sit with. 🕯️ What's been frustrating you?",
    };
    return (
      responses[mood as keyof typeof responses] ||
      "Thank you for sharing how you're feeling. I'm here to listen."
    );
  };

  const getJournalResponse = (entry: string) => {
    // Simple keyword-based responses (in a real app, this would use AI)
    const keywords = entry.toLowerCase();

    if (keywords.includes("stress") || keywords.includes("overwhelm")) {
      return "I can hear that you're feeling overwhelmed. That's a lot to carry. Remember that you don't have to handle everything at once. What's one small thing you could do to take care of yourself today? 💙";
    }

    if (keywords.includes("grateful") || keywords.includes("thankful")) {
      return "It's beautiful that you're finding things to be grateful for. Gratitude can be such a powerful practice. Thank you for sharing these positive moments with me. ✨";
    }

    if (keywords.includes("difficult") || keywords.includes("hard")) {
      return "Thank you for trusting me with something that's been difficult for you. It takes courage to acknowledge when things are hard. You're not alone in this. 🤗";
    }

    return "Thank you for sharing this with me. I can sense the depth of your feelings. Your experiences and emotions matter. Is there anything specific you'd like support with today? 💙";
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response (in real app, this would call an AI service)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I hear you. Thank you for sharing that with me. Your feelings are completely valid. 💙",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);

    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Card className="flex flex-col h-[500px] bg-primary-soft border-none shadow-soft animate-calm-fade-in">
      <div className="p-4 border-b border-primary/10 bg-gradient-hero rounded-t-2xl">
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-white animate-soft-pulse" />
          <h3 className="font-semibold text-white">Your AI Companion</h3>
        </div>
        <p className="text-white/80 text-sm mt-1">
          Here to listen, support, and understand
        </p>
      </div>

      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.isUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`
                  max-w-[80%] p-3 rounded-2xl transition-all duration-300
                  ${
                    message.isUser
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-secondary text-secondary-foreground shadow-soft"
                  }
                `}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <span className="text-xs opacity-60 mt-1 block">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t border-primary/10">
        <div className="flex gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Share your thoughts..."
            className="flex-1 border-primary/20 bg-background rounded-xl 
                     focus:border-primary focus:ring-primary/20"
          />
          <Button
            onClick={sendMessage}
            disabled={!inputMessage.trim()}
            size="icon"
            variant="default"
            className="shadow-soft"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
