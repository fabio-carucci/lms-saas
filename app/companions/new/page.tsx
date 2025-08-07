import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const NewCompanionPage = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

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
