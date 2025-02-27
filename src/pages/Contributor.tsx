
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContributorForm } from "@/components/ContributorForm";
import { PageTransition } from "@/components/ui/SlideTransition";
import { Contributor as ContributorType } from "@/components/ui/ContributorCard";

const Contributor = () => {
  const { poolId = "demo", contributorId } = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>(25); // Default amount, would come from API in real app
  const [availableContributors, setAvailableContributors] = useState<ContributorType[]>([]);

  useEffect(() => {
    if (!contributorId) {
      // If no contributor ID, redirect to index page
      navigate("/");
      return;
    }
    
    // In a real app, we would fetch the contributor details from API
    // For demo, we'll use mock data
    
    // Mock contributors that would be retrieved from the pool
    const mockContributors: ContributorType[] = [
      { id: "mock1", name: "Alice", amount: 25 },
      { id: "mock2", name: "Bob", amount: 25 },
      { id: "mock3", name: "Charlie", amount: 25 },
      { id: "mock4", name: "Dana", amount: 25 },
    ];
    
    setAvailableContributors(mockContributors);
    
    // Find the specific contributor's amount
    const currentContributor = mockContributors.find(c => c.id === contributorId);
    if (currentContributor) {
      setAmount(currentContributor.amount);
    }
  }, [contributorId, navigate, poolId]);

  if (!contributorId) {
    return null; // Will redirect in useEffect
  }

  return (
    <PageTransition>
      <ContributorForm 
        contributorId={contributorId} 
        poolId={poolId || "demo"} 
        amount={amount}
        availableContributors={availableContributors}
      />
    </PageTransition>
  );
};

export default Contributor;
