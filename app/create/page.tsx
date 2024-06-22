'use client';
import { FormEvent, useState } from 'react';
import SuccessToast from '../_components/SuccessToast';
import { useRouter } from 'next/navigation';
export default function Page() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();
  const titleRegex = /^[a-zA-Z]{5,}$/;
  const descriptionRegex = /^[a-zA-Z]{10,}$/;
  const isTitleMatch = titleRegex.test(title);
  const isDescriptionMatch = descriptionRegex.test(description);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTitle(t => (t = ''));
    setDescription(d => (d = ''));
    setTimeout(() => router.push('/'), 3000);
  }
  return (
    <>
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
        Write a meaningful post now
      </div>
      <form
        onSubmit={handleSubmit}
        className="editor mx-auto w-10/12 flex flex-col text-gray-800  p-4  max-w-2xl"
      >
        <input
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
          pattern="^[a-zA-Z]{5,}$"
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="text"
        />
        <textarea
          required
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellCheck="false"
          placeholder="Describe everything about this post here"
        ></textarea>
        <div className="mt-20 flex flex-col gap-4 sm:flex-row sm:items-center justify-end ">
          <button
            type="reset"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring text-sm font-medium"
          >
            Reset
          </button>

          <SuccessToast
            isDescriptionMatch={isDescriptionMatch}
            isTitleMatch={isTitleMatch}
          />
        </div>
      </form>
    </>
  );
}
