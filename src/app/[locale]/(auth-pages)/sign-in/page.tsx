import { signInAction } from "@/src/app/actions";
import { FormMessage, Message } from "@/src/app/components/form-message";
import { SubmitButton } from "@/src/app/components/submit-button";
import { Input } from "@/src/app/components/ui/input";
import { Label } from "@/src/app/components/ui/label";
import Link from "next/link";

export default async function Login(props: {
  searchParams: Promise<Message>;
  params: { locale: string };
}) {
  const searchParams = await props.searchParams;
  const { locale } = props.params;
  return (
    <form className="flex-1 flex flex-col min-w-64">
      <h1 className="text-2xl font-medium">Sign in</h1>
      <p className="text-sm text-foreground">
        Don't have an account?{" "}
        <Link
          className="text-foreground font-medium underline"
          href={`/${locale}/sign-up`}
        >
          Sign up
        </Link>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="you@example.com" required />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Password</Label>
          <Link
            className="text-xs text-foreground underline"
            href={`/${locale}/forgot-password`}
          >
            Forgot Password?
          </Link>
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          required
        />
        <SubmitButton pendingText="Signing In..." formAction={signInAction}>
          Sign in
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
