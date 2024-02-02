import { DeleteUrlButton, UrlForm } from "@/components";
import { getUrls } from "@/lib";
import { UrlItem } from "@/models";

export default async function Home() {
  const urls = await getUrls();

  return (
    <main className="flex w-full min-h-[calc(100vh-80px)] flex-col items-center justify-between p-16">
      <section>
        <article>
          <UrlForm />
        </article>
        <article>
          <ul className="flex flex-col gap-3 mt-8">
            {
              urls.data.map((url: UrlItem, index: number) => (
                <li key={index} className="border border-[#ccc] rounded-md p-2.5 flex flex-col">
                  <span className="font-bold text-white bg-black rounded px-1.5 py-0.5 w-fit">{index}</span>
                  <h2 className="mt-4 font-bold inline">{url._id}</h2><DeleteUrlButton urlId={url._id} />
                  <div className="flex flex-col gap-0.5 mt-0.5 border-t border-t-[#ccc] rounded-md p-0.5">
                    <p>
                      <strong>Original:</strong> {url.original}
                    </p>
                    <p>
                      <strong>Short:</strong> {url.short}
                    </p>
                  </div>
                  <a href={`/${url.short}`} className="self-end" target="_blank">Test</a>
                </li>
              ))
            }
          </ul>
        </article>
      </section>
    </main>
  );
}