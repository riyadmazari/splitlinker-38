
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContributorForm } from "@/components/ContributorForm";
import { PageTransition } from "@/components/ui/SlideTransition";

const Contributor = () => {
  const { poolId = "demo", contributorId } = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>(25); // Default amount, would come from API in real app

  useEffect(() => {
    if (!contributorId) {
      // If no contributor ID, redirect to index page
      navigate("/");
    }
    
    // In a real app, we would fetch the contributor details from API
    // For demo, we'll use a mock amount
  }, [contributorId, navigate]);

  if (!contributorId) {
    return null; // Will redirect in useEffect
  }

  return (
    <PageTransition>
      <ContributorForm 
        contributorId={contributorId} 
        poolId={poolId || "demo"} 
        amount={amount} 
      />
    </PageTransition>
  );
};

export default Contributor;
