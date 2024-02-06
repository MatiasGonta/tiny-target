import { UrlForm } from "@/components";

export default async function Home() {
  return (
    <main className="flex w-full min-h-[calc(100vh-80px)] flex-col items-center justify-between p-6">
      <section className="w-full max-w-[1024px] flex flex-col items-center">
        <h1 className="font-bold text-[35px] text-center mb-6 text-foreground">Acorta una URL</h1>
        <article className="w-full max-w-[400px]">
          <UrlForm />
        </article>
      </section>
    </main>
  );
}