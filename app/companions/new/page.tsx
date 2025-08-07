import CompanionForm from "@/components/CompanionForm";
import { newCompanionPermission } from "@/lib/actions/companion.action";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const NewCompanionPage = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  const canCreateCompanion = await newCompanionPermission();

  return (
    <main className="min-lg:w-1/3 min-md:2/3 items-center justify-center">
      {canCreateCompanion ? (
        <article className="w-full flex flex-col gap-4">
          <h1>Companion builder</h1>
          <CompanionForm />
        </article>
      ) : (
        <article className="companion-limit">
          <Image
            src="/images/limit.svg"
            alt="Companion limit reached"
            width={360}
            height={230}
          />
          <div className="cta-badge">Upgrade your plan</div>
          <h1>You&apos;ve reached your limit.</h1>
          <p>Upgrade to create more companions and premium features.</p>
          <Link
            href="/subscription"
            className="btn-primary w-full justify-center"
          >
            Upgrade My Plan
          </Link>
        </article>
      )}
    </main>
  );
};

export default NewCompanionPage;
