import React from 'react';

export default function Headers({ title, description }: { title: string; description: string }) {
  return (
    <div className="container mx-auto lg:max-w-[60rem] p-4 bg-[#222222] mt-8 pb-8">
      <div className="flex flex-col items-center text-[#d4d4d4]">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p className="px-6 text-pretty">{description}</p>
      </div>
    </div>
  );
}
