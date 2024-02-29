import { getPhotoList, getUserList } from "@/app/api/user/user.api";
import Image from "next/image";
import React from "react";

//---photos type----------------------------------------

interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default async function Images({ items }: { items: number }) {
  const photoList: IPhoto[] = await getPhotoList(items);

  return (
    <div>
      <ul>
        {photoList.map((item) => {
          return (
            <div key={item.id} className="flex items-center">
              <Image
                src={item.url}
                alt={item.title}
                height={40}
                width={40}
                className="rounded-full"
              />
              <li>{item.title}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
