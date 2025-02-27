
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { CollectorForm } from "@/components/CollectorForm";
import { PageTransition } from "@/components/ui/SlideTransition";

const Collector = () => {
  const { poolId = "demo" } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const amountParam = searchParams.get("amount");
    const amount = amountParam ? parseFloat(amountParam) : 0;
    
    if (!amountParam || isNaN(amount) || amount <= 0) {
      // If no amount or invalid amount, redirect to index page
      navigate("/");
      return;
    }
    
    setTotalAmount(amount);
  }, [searchParams, navigate]);

  if (totalAmount <= 0) {
    return null; // Will redirect to home in useEffect
  }

  return (
    <PageTransition>
      <CollectorForm totalAmount={totalAmount} poolId={poolId} />
    </PageTransition>
  );
};

export default Collector;
