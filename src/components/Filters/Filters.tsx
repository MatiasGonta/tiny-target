"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Filters() {
    const searchParams = useSearchParams();
    const router = useRouter();
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const search = new FormData(e.currentTarget).get('search');

        if (search && search.toString().replaceAll(' ', '').length > 0 && search.toString().replaceAll(' ', '') !== "") {
            router.push('/dashboard?search=' + search, { scroll: false });
        } else {
            const searchQuery = searchParams.get('search');

            if (searchQuery) router.push('/dashboard', { scroll: false });
        }
    }

    return (
        <form className="h-[1000px] mx-auto" onSubmit={handleSubmit}>
            <input type="text" name="search" className="bg-slate-200 border border-[#ccc] rounded-l-md" />
            <button type="submit" className="bg-slate-200 border border-[#ccc] rounded-r-md">Search</button>
        </form>
    )
}