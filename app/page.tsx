import React from "react";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id="123"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="maths"
          duration={30}
          color="#FFDA6E"
        />
        <CompanionCard
          id="876"
          name="Verba the Vocabulary Builder"
          topic="English Literature"
          subject="language"
          duration={42}
          color="#BDE7FF"
        />
        <CompanionCard
          id="456"
          name="Memo, the Memory Keeper"
          topic="World Wars: Causes & Consequences"
          subject="history"
          duration={15}
          color="#FFECC8"
        />
      </section>

      <section className="home-section">
        <CompanionsList />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
