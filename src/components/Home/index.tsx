import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillPlayFill } from "react-icons/bs";
import { RiUserFill } from "react-icons/ri";

type TopAnimeProps = {
  api: {
    data: Array<{
      mal_id: number;
      title: string;
      episodes: number;
      images: {
        webp: {
          large_image_url: string;
        };
      };
    }>;
  };
};

export default function TopAnime({ api }: TopAnimeProps) {
  return (
    <div className="container mx-auto lg:max-w-[60rem] mb-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2  pb-16 md:px-20 bg-[#222222]">
        {api.data.map((i) => (
          <div key={i.mal_id} className="flex justify-center mt-6">
            <Link
              href={`/${i.mal_id}`}
              className="cursor-pointer hover:scale-[105%] transition-transform duration-300"
            >
              <div className="w-[180px] flex flex-col">
                <Image
                  className="max-w-[180px] max-h-[95px] object-cover rounded-sm"
                  src={i.images.webp.large_image_url}
                  alt={i.title + "Banners"}
                  width={350}
                  height={350}
                  priority={true}
                />
                <div className="pt-4 flex-grow flex flex-col justify-between sm:h-[8rem] md:h-[9rem]">
                  <h5 className="mb-1 md:text-2xl font-semibold line-clamp-1 sm:line-clamp-2 text-[#d4d4d4] hover:text-white">
                    {i.title}
                  </h5>
                  <p className="mb-1 font-normal text-[#737373] line-clamp-3">
                    <span className="flex items-center">
                      <RiUserFill className="mr-2" />
                      Uploader&nbsp;:&nbsp;Aetyyy
                    </span>
                    <span className="flex items-center">
                      <BsFillPlayFill className="mr-2" />
                      Episode&nbsp;&nbsp;&nbsp;:&nbsp;{i.episodes}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
