'use server'
 
import { revalidateTag } from 'next/cache'
 
export async function revalidateUrlsAction() {
  revalidateTag('urls');
}

export async function revalidateUserUrlsAction() {
  revalidateTag('user-urls');
}