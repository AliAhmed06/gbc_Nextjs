import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";
import { navItems } from "./DATA";
import Link from "next/link";

function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger>
        <IoMenuOutline />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div>
          <Image src="/images/logo.png" height={70} width={70} alt="" />
          <div className="flex flex-col items-center justify-center gap-5 mt-20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className="text-gray-600 hover:text-gray-900 font-bold"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavbar;
