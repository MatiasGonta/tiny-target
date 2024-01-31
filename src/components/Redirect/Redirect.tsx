'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Redirect({ path }: { path: string }) {
    const { push } = useRouter();

    useEffect(() => {
        push(path)
    }, [])

    return <div>Redirecting...</div>;
}