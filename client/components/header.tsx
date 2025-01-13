import Image from "next/image";
import SearchBar from "./searchbar";
import { Menu, Heart, ShoppingCart, User } from "lucide-react";
import { Separator } from "./ui/separator";
export default function Header() {
  return (
    <header className="bg-primary px-[200px] flex justify-around items-center text-white py-4">
      <Image src="/logo.png" alt="logo" width={175} height={175} />
      <div className="flex items-center space-x-4">
        <Menu />
        <SearchBar />
      </div>

      <div className="flex h-5 items-center space-x-4 text-sm">
        <Heart className="hover:text-green-500 hover:cursor-pointer" />
        <Separator orientation="vertical" />
        <User className="hover:text-green-500 hover:cursor-pointer" />
        <Separator orientation="vertical" />
        <div className="flex items-center space-x-3 hover:text-green-500 hover:cursor-pointer justify-around">
          0 ฿
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
}
