"use client";
import { Fragment } from "react";
import Image from "next/image";
import { Shoe } from "@/models/shoe";
import { useRouter } from "next/navigation";
export default function ShoeCard({ shoe }: { shoe: Shoe }) {
  const router = useRouter();
  return (
    <Fragment>
      <div
        className="w-[300px] h-[200px] relative border rounded-md bg-white hover:w-[305px] hover:h-[205px] transition-all duration-300 cursor-pointer"
        onClick={() => {
          router.push(`/shop/${shoe.id}`);
        }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}/image/${shoe.image}`}
          fill
          alt={shoe.title}
          objectFit="contain"
        />
      </div>
      <div className="p-3">
        <p className="text-sm text-slate-400">{shoe.type}</p>
        <p>{shoe.title}</p>
        <p>{shoe.price} ฿</p>
      </div>
    </Fragment>
  );
}
