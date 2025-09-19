import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Shield } from "lucide-react";

export const CrisisSupport = () => {
  return (
    <Card className="p-6 bg-destructive/10 border-destructive/20 shadow-soft animate-calm-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <Shield className="w-6 h-6 text-destructive" />
        <h3 className="text-lg font-semibold text-destructive">
          Need Immediate Support?
        </h3>
      </div>
      
      <p className="text-foreground/80 mb-4 leading-relaxed">
        If you're experiencing thoughts of self-harm or are in crisis, please reach out for professional help immediately.
      </p>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 bg-background/50 rounded-xl">
          <Phone className="w-5 h-5 text-destructive" />
          <div>
            <p className="font-medium text-foreground">India - Vandrevala Foundation</p>
            <p className="text-sm text-muted-foreground">9152987821 (24/7 Free)</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-3 bg-background/50 rounded-xl">
          <Phone className="w-5 h-5 text-destructive" />
          <div>
            <p className="font-medium text-foreground">India - iCall</p>
            <p className="text-sm text-muted-foreground">1800-599-0019 (Free)</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-3 bg-background/50 rounded-xl">
          <Heart className="w-5 h-5 text-destructive" />
          <div>
            <p className="font-medium text-foreground">Emergency Services</p>
            <p className="text-sm text-muted-foreground">Call local emergency number</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-comfort-soft rounded-xl">
        <p className="text-sm text-comfort-foreground/80 text-center">
          💙 Remember: You matter, your life has value, and support is available.
        </p>
      </div>
    </Card>
  );
};