import CompanionForm from "@/components/CompanionForm";

const NewCompanionPage = () => {
  return (
    <main className="min-lg:w-1/3 min-md:2/3 items-center justify-center">
      <article className="w-full flex flex-col gap-4">
        <h1>Companion builder</h1>
        <CompanionForm />
      </article>
    </main>
  );
};

export default NewCompanionPage;
