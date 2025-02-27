
import { useState } from "react";
import { User, CreditCard, Check, ArrowRight, DollarSign, Euro } from "lucide-react";
import { SlideTransition } from "@/components/ui/SlideTransition";
import { VerificationPayment } from "@/components/ui/VerificationPayment";
import { FadeIn, ScaleIn, SuccessCheckmark } from "@/components/ui/animations";
import { ContributorCard } from "@/components/ui/ContributorCard";
import { useToast } from "@/hooks/use-toast";

interface ContributorFormProps {
  contributorId: string;
  poolId: string;
  amount: number;
}

export const ContributorForm = ({
  contributorId,
  poolId,
  amount,
}: ContributorFormProps) => {
  const [step, setStep] = useState<"details" | "verification" | "success">("details");
  const [name, setName] = useState<string>("");
  const { toast } = useToast();
  
  const contributor = {
    id: contributorId,
    name: name || "You",
    amount: amount,
    hasVerified: step === "success",
    hasPaid: step === "success",
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!name) {
      toast({
        title: "Name required",
        description: "Please enter your name to continue",
        variant: "destructive",
      });
      return;
    }
    
    setStep("verification");
  };
  
  const handleVerificationSuccess = () => {
    setStep("success");
  };
  
  const handleVerificationCancel = () => {
    setStep("details");
  };
  
  return (
    <div className="max-w-md mx-auto px-4 py-8">
      {step === "details" && (
        <SlideTransition>
          <div className="mb-8">
            <div className="chip mb-2 bg-primary/10 text-primary">
              PAYMENT REQUEST
            </div>
            <h1 className="text-3xl font-semibold mb-2">Your Payment</h1>
            <p className="text-muted-foreground">
              Complete the form below to make your payment
            </p>
          </div>
          
          <ScaleIn>
            <div className="glass-card p-5 mb-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="p-2.5 rounded-full bg-primary/10 text-primary mr-3">
                    <DollarSign size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Your Amount</p>
                    <div className="flex items-center">
                      <span className="text-2xl font-semibold">
                        {amount.toFixed(2)}
                      </span>
                      <Euro size={18} className="ml-1 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScaleIn>
          
          <ScaleIn delay={0.1}>
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="glass-card p-5">
                <h2 className="text-lg font-medium mb-4">Your Details</h2>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <User size={18} />
                    </div>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input-field pl-10 w-full"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center"
                >
                  Continue to Payment
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </form>
          </ScaleIn>
          
          <FadeIn delay={0.2}>
            <ContributorCard
              contributor={contributor}
              totalAmount={amount}
              isCollector={false}
            />
          </FadeIn>
        </SlideTransition>
      )}
      
      {step === "verification" && (
        <SlideTransition>
          <div className="mb-8">
            <div className="chip mb-2 bg-primary/10 text-primary">
              PAYMENT VERIFICATION
            </div>
            <h1 className="text-3xl font-semibold mb-2">Verify Payment</h1>
            <p className="text-muted-foreground">
              Complete a 0€ verification to confirm your payment method
            </p>
          </div>
          
          <VerificationPayment
            onSuccess={handleVerificationSuccess}
            onCancel={handleVerificationCancel}
          />
        </SlideTransition>
      )}
      
      {step === "success" && (
        <SlideTransition>
          <div className="text-center mb-8">
            <div className="text-emerald-500 mb-4 inline-block">
              <SuccessCheckmark size={80} />
            </div>
            <h1 className="text-3xl font-semibold mb-2">Payment Complete!</h1>
            <p className="text-muted-foreground">
              Thank you, {name}. Your payment has been successfully processed.
            </p>
          </div>
          
          <ScaleIn>
            <div className="glass-card p-5 mb-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="p-2.5 rounded-full bg-emerald-100 text-emerald-600 mr-3">
                    <Check size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Paid Amount</p>
                    <div className="flex items-center">
                      <span className="text-2xl font-semibold">
                        {amount.toFixed(2)}
                      </span>
                      <Euro size={18} className="ml-1 text-muted-foreground" />
                    </div>
                  </div>
                </div>
                
                <div className="chip bg-emerald-100 text-emerald-700">
                  Complete
                </div>
              </div>
            </div>
          </ScaleIn>
          
          <FadeIn delay={0.2}>
            <ContributorCard
              contributor={contributor}
              totalAmount={amount}
              isCollector={false}
            />
          </FadeIn>
        </SlideTransition>
      )}
    </div>
  );
};
