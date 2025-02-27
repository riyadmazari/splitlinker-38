import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { CollectorForm } from "@/components/CollectorForm";
import { PageTransition } from "@/components/ui/SlideTransition";

interface SubscriptionType {
  id: string;
  name: string;
  amount: number;
}

// This would come from an API in a real application
const MOCK_SUBSCRIPTIONS: Record<string, SubscriptionType> = {
  "netflix": { id: "netflix", name: "Netflix", amount: 19.99 },
  "spotify": { id: "spotify", name: "Spotify", amount: 9.99 },
  "amazon": { id: "amazon", name: "Amazon Prime", amount: 14.99 },
  "disney": { id: "disney", name: "Disney+", amount: 8.99 },
};

const Collector = () => {
  const { poolId = "demo" } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [subscriptionName, setSubscriptionName] = useState<string>("Payment");

  useEffect(() => {
    // In a real app, we would fetch the subscription details from API
    // based on the poolId
    
    // Check if this is a subscription ID from our mock data
    const subscription = MOCK_SUBSCRIPTIONS[poolId];
    
    if (subscription) {
      setTotalAmount(subscription.amount);
      setSubscriptionName(subscription.name);
      return;
    }

    // Otherwise, use the amount from the query parameter
    const amountParam = searchParams.get("amount");
    const amount = amountParam ? parseFloat(amountParam) : 0;
    
    if (!amountParam || isNaN(amount) || amount <= 0) {
      // If no amount or invalid amount, redirect to index page
      navigate("/");
      return;
    }
    
    setTotalAmount(amount);
  }, [searchParams, navigate, poolId]);

  if (totalAmount <= 0) {
    return null; // Will redirect to home in useEffect
  }

  return (
    <PageTransition>
      <CollectorForm 
        totalAmount={totalAmount} 
        poolId={poolId} 
        subscriptionName={subscriptionName}
      />
    </PageTransition>
  );
};

export default Collector;
