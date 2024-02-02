import { DeleteUrlButton, Filters } from "@/components";
import { getCreatedUrlsByUser } from "@/lib";
import { UrlItem } from "@/models";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard({ searchParams }: { searchParams: { [key: string]: string } }) {
  const session = await getServerSession();
  if (!session || !session.user || !session.user.email) return redirect('/signin');

  const { page, limit, search } = searchParams;

  const filters = {
    page: page ? parseInt(page) : null,
    limit: limit ? parseInt(limit) : null,
    search: search ? search : null,
  }

  const createdUrls = await getCreatedUrlsByUser(session.user.email, filters);
  console.log(createdUrls)

  return (
    <div className="flex flex-col items-center gap-8">
      {createdUrls.data && createdUrls.data.docs
        ? (
          <ul className="flex flex-col gap-3 mt-8 w-fit mx-auto">
            {
              createdUrls.data.docs.map((url: UrlItem, index: number) => (
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
        ) : (
          <p>No hay URLs creadas</p>
        )
      }

      <Filters />
    </div>
  )
}