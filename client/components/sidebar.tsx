import React from "react";
import { Separator } from "./ui/separator";

export default function Sidebar() {
  return (
    <aside className="w-[300px]">
      <div className="space-y-2">
        <h1 className="font-bold mb-10">หมวดหมู่สินค้า</h1>
        <div className="flex justify-between">
          <a href="#">Clearance Sale</a>
          <p className="text-sm text-slate-300">(14)</p>
        </div>
        <Separator />
      </div>
    </aside>
  );
}
