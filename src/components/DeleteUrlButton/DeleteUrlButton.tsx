"use client";

import { revalidateUserUrlsAction } from '@/actions';
import { deleteUrl } from '@/lib';

export default function DeleteUrlButton({ urlId }: { urlId: string }) {
  const handleOnClick = async (id: string) => {
    const data = await deleteUrl(id);
    revalidateUserUrlsAction();
    console.log('DATA: ', data)
  }

  return (
    <button onClick={() => handleOnClick(urlId)}>delete</button>
  )
}