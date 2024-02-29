import Images from "../ui/images/Images";
import Search from "../ui/search/Search";
import { getPhotoList, getUserList } from "@/app/api/user/user.api";
import Image from "next/image";
import React from "react";

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

//---photos type----------------------------------------

interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default async function Page({
  searchParams,
}: {
  searchParams: { items?: string };
}) {
  const userList: IUser[] = await getUserList();
  const { items = 1 } = searchParams;
  return (
    <div>
      <p>dashboard</p>
      <Search />
      <ul>
        {userList.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
      <Images items={Number(items)} />
    </div>
  );
}
