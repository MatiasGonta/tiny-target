"use client"

import { FormEvent, useState } from "react";

type FormData = {
    original: string;
    short: string;
}

export default function Form() {
    const [formData, setFormData] = useState<FormData | null>(null);

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const url = formData.get('url');

        if (!url) return;

        try {
            const response = await fetch('/api/url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url })
            });

            if (!response.ok) throw new Error(`Error: ${response.status} - ${response.statusText}`);

            const data = await response.json();

            setFormData({
                original: data.original,
                short: data.short
            })
        } catch (err) {
            console.error('Error al enviar la URL', err)
        }
    }

    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <input className="text-black" type="text" name="url" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
            {
                formData &&
                <div>
                    <p>{JSON.stringify(formData)}</p>
                </div>
            }
        </>
    )
}