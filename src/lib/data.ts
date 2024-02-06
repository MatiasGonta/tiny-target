import { TINY_TARGET_URL } from "@/constants";
import { User } from "@/models";

export async function signup(newUser: {
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string,
}) {
    const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
    })
    const data = await res.json();

    return data;
}

export async function getUrls(user_email: User['email'], filters?: { page?: number | null; search?: string | null }) {
    let URL = TINY_TARGET_URL + '/api/url/' + user_email;

    const params = new URLSearchParams();

    if (filters?.page !== undefined && filters.page !== null) {
        params.append('page', filters.page.toString());
    }
    if (filters?.search) {
        params.append('search', filters.search);
    }

    // Agregar los parámetros a la URL
    if (params.toString() !== '') {
        URL += `?${params.toString()}`;
    }
    console.log(URL)
    const response = await fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        next: {
            tags: ['urls']
        }
    });
    const data = await response.json();

    return data;
}

export async function createUrl(newUrlData: { user_email: string, url: string; alias?: string }) {
    const response = await fetch('/api/url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUrlData)
    });

    const data = await response.json();

    return data;
}

export async function deleteUrl(id: string) {
    const URL = '/api/url/delete/' + id;
    const response = await fetch(URL, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();

    return data;
}

export async function updateUrl(id: string, newUrlData: { newOriginal: string; newShort: string }) {
    const URL = '/api/url/put/' + id;
    const response = await fetch(URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUrlData)
    });
    const data = await response.json();

    return data;
}

export async function updatedUnauthUrls(user_email: User['email'], unauthedUrlIds: string[]) {
    console.log('asidokas: ',unauthedUrlIds)
    const URL = '/api/url/' + user_email;
    const response = await fetch(URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ unauthedUrlIds })
    });
    const data = await response.json();

    return data;
}