"use client";

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function NavLinks() {
    const { data: session } = useSession();

    const handleSignout = () => signOut({
        callbackUrl: "/signin"
    });

    return (
        <ul className="h-full flex gap-6 items-center">
            <li>
                <Link href="/">Inicio</Link>
            </li>
            <li>
                <Link href="/dashboard">Panel de control</Link>
            </li>
            {
                session
                    ? (
                        <li>
                            <button onClick={handleSignout} className="border border-tiny-target-primary rounded bg-transparent p-1.5">Cerrar sesión</button>
                        </li>
                    ) : (
                        <>
                            <li>
                                <Link href="/signin">Iniciar sesión</Link>
                            </li>
                            <li>
                                <Link href="/signup">Registrarse</Link>
                            </li>
                        </>
                    )
            }
        </ul>
    )
}