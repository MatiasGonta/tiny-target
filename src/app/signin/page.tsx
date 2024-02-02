import { SigninForm } from "@/components";

export default function SigninPage() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between p-16">
      <section>
        <article>
          <h1 className="text-3xl font-bold mb-5">Iniciar sesión</h1>
          <SigninForm />
        </article>
      </section>
    </main>
  )
}