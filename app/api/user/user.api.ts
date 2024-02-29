import { unstable_noStore as noStore } from "next/cache";

export const getUserList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

export const getPhotoList = async (items: number = 1) => {
  noStore();
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=${items}`,
    {
      next: { revalidate: 100 },
    }
  );
  return response.json();
};
