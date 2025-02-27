
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DollarSign, Euro } from "lucide-react";
import { generateUniqueId } from "@/utils/generateLinks";
import { SlideTransition } from "@/components/ui/SlideTransition";
import { FadeIn, ScaleIn } from "@/components/ui/animations";
import { useToast } from "@/hooks/use-toast";

// Mock subscription data - would come from API in a real app
const MOCK_SUBSCRIPTIONS = [
  { id: "netflix", name: "Netflix", amount: 19.99 },
  { id: "spotify", name: "Spotify", amount: 9.99 },
  { id: "amazon", name: "Amazon Prime", amount: 14.99 },
  { id: "disney", name: "Disney+", amount: 8.99 },
];

const Index = () => {
  const [amount, setAmount] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);
    
    if (!amount || isNaN(parsedAmount) || parsedAmount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid payment amount",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Generate a unique pool ID
    const poolId = generateUniqueId();
    
    // Navigate to collector page with the amount
    setTimeout(() => {
      navigate(`/collect/${poolId}?amount=${parsedAmount}`);
    }, 500);
  };

  const selectSubscription = (id: string) => {
    navigate(`/collect/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 px-4 border-b border-border">
        <div className="container max-w-6xl">
          <h1 className="text-2xl font-bold">OnPool</h1>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <SlideTransition className="w-full max-w-lg">
          <div className="text-center mb-8">
            <FadeIn>
              <h1 className="text-4xl font-bold mb-3">Split Payments Simplified</h1>
              <p className="text-xl text-muted-foreground">
                Easily split payments among friends, family, or colleagues
              </p>
            </FadeIn>
          </div>
          
          <ScaleIn delay={0.1}>
            <div className="glass-card p-8 mb-6">
              <h2 className="text-2xl font-semibold mb-6">Create a Payment Pool</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="amount" className="block text-sm font-medium mb-2">
                    Total Amount
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <DollarSign size={20} />
                    </div>
                    <input
                      id="amount"
                      type="number"
                      min="0.01"
                      step="0.01"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="input-field pl-12 pr-12 text-lg w-full"
                      placeholder="0.00"
                      required
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Euro size={20} />
                    </div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-t-white/0 border-white rounded-full animate-spin mr-2" />
                      Creating...
                    </span>
                  ) : (
                    "Create Custom Payment Pool"
                  )}
                </button>
              </form>
            </div>
          </ScaleIn>
          
          <ScaleIn delay={0.2}>
            <div className="glass-card p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Popular Subscriptions</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Select a subscription service to split its cost
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {MOCK_SUBSCRIPTIONS.map((subscription) => (
                  <button
                    key={subscription.id}
                    onClick={() => selectSubscription(subscription.id)}
                    className="p-4 border border-input rounded-lg hover:bg-secondary/50 transition-colors text-left"
                  >
                    <div className="font-medium mb-1">{subscription.name}</div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>{subscription.amount.toFixed(2)}</span>
                      <Euro size={12} className="ml-1" />
                      <span className="ml-1">/month</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </ScaleIn>
          
          <FadeIn delay={0.3} className="text-center">
            <p className="text-muted-foreground">
              Simple payment splitting for any occasion
            </p>
          </FadeIn>
        </SlideTransition>
      </main>
      
      <footer className="py-6 px-4 border-t border-border">
        <div className="container max-w-6xl text-center text-sm text-muted-foreground">
          OnPool &copy; {new Date().getFullYear()} — All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Index;
