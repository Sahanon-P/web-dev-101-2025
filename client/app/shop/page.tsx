"use client";
import ShoeCard from "@/components/shoecard";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Shoe } from "@/models/shoe";
import { fetcher } from "@/lib/utils";

export default function Shop() {
  //TODO: Implement the following;
  // - Get the parameter from the query string to determine the page number
  // - Fetch the list of shoes from the API by using the useSWR hook
  // - Display the list of shoes using the ShoeCard component
  // - Implement pagination using the Pagination component

  // Tip: useSWR is a React hook that allows you to fetch data from the server and keep it in
  // sync with the server data.
  // You can use it like this:
  // const { data, error, isLoading } = useSWR('/api/shoes', fetcher)
  // where fetcher is a function that fetches the data from the server.

  // Tip: To get query parameters from the URL, try using useSearchParam hook from 'next/navigation'.
  const data = {
    meta: {
      total: 100,
    },
    data: [
      {
        id: "cm5t776x9000ey10eq21k4y08",
        title: "ALTRA ESCALANTE 4",
        price: 3640,
        type: "running shoe",
        color: "black",
        brand: "Altra",
        image: "altra-escalante4.jpg",
        description: null,
      },
    ],
  };
  return (
    <section className="flex flex-col justify-end space-y-5 w-full">
      <div className="flex items-center justify-end space-x-2">
        <p>Showing {data.meta.total} results</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {data.data.map((shoe: Shoe) => (
          <div key={shoe.id}>
            <ShoeCard shoe={shoe} />
          </div>
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
}
