import { Form } from "@/components";

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-between p-24">
      <section>
        <article>
          <Form />
        </article>
      </section>
    </main>
  );
}