// server-side component
"use client";

import { Helicopter } from "@/app/types";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";

interface HelicopterDetailProps {
  params: {
    id: string;
  };
}

export async function getHelicopterData(id: string): Promise<Helicopter | null> {
  return await client.fetch(
    `*[_type == "helicopter" && _id == $id][0]`,
    { id }
  );
}

export default async function HelicopterDetail({ params }: HelicopterDetailProps) {
  const { id } = params;
  const helicopter = await getHelicopterData(id);

  if (!helicopter) {
    notFound(); // Handles redirect to a 404 page or shows an error
  }

  const imageUrl = helicopter.image ? urlFor(helicopter.image).url() : "";


  const handleAddToCart = (e: React.MouseEvent, heicopter : Helicopter) => {
    e.preventDefault()
  }
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-black shadow-lg rounded-lg">
      <img className="w-full h-96 object-cover rounded-lg" src={imageUrl} alt={helicopter.name} />
      <div className="max-w-3xl mx-auto mb-10">
        <article className="w-full mx-auto p-5 bg-gray-100 rounded-lg shadow-md">
          <h1 className="font-titleFont font-semibold text-[32px] text-primary border-b-[1px] border-cyan-800 mt-10 mb-3">
            {helicopter.name}
          </h1>
          <h2 className="font-bodyFont text-[18px] text-gray-700 mb-4">{helicopter.description}</h2>
          {helicopter.details && (
            <PortableText
              value={helicopter.details}
              components={{
                types: {
                  image: ({ value }: any) => (
                    <img
                      src={urlFor(value).url()}
                      alt="Embedded Image"
                      className="my-5 w-full rounded-lg shadow-md"
                    />
                  ),
                },
                marks: {
                  link: ({ value, children }: any) => (
                    <a href={value?.href} className="text-cyan-500 hover:underline">
                      {children}
                    </a>
                  ),
                },
                block: {
                  h1: ({ children }: any) => (
                    <h1 className="text-xl font-semibold my-3">{children}</h1>
                  ),
                  h2: ({ children }: any) => (
                    <h2 className="text-lg font-medium my-3">{children}</h2>
                  ),
                  h3: ({ children }: any) => (
                    <h3 className="text-base font-medium my-2">{children}</h3>
                  ),
                  normal: ({ children }: any) => <p className="text-sm text-gray-700 mb-2">{children}</p>,
                },
              }}
            />
          )}
        </article>
        <div className="flex items-center justify-center mt-4">
        <button  className="w-[240px] h-10 font-bold bg-white text-black rounded hover:bg-slate-600">
          Add To Cart
        </button>
      </div>
      </div>
    </div>
  );
}


      

     