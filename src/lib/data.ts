import { User } from "@/models";

export async function getUrls() {
    const URL = process.env.NEXT_URL + 'api/url';
    const response = await fetch(URL, { next: { tags: ['urls'] } });
    const data = await response.json();

    return data;
}

export async function getCreatedUrlsByUser(user_email: User['email'], filters?: { limit?: number | null; page?: number | null; search?: string | null }) {
    let URL = process.env.NEXT_URL + 'api/url/' + user_email;

    if (filters?.limit) URL += '?limit=' + filters.limit;
    if (filters?.page) URL += '?page=' + filters.page;
    if (filters?.search) URL += '?search=' + filters.search;
    
    const response = await fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        next: {
            tags: ['user-urls']
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
    const URL = 'http://localhost:3000/api/url/delete/' + id;
    const response = await fetch(URL, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();

    return data;
}