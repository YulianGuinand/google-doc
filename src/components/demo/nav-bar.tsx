import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function NavBarDemo() {
  return (
    <nav className="fixed top-0 left-0 backdrop-blur-xl w-full py-4 flex z-20">
      <div className="md:max-w-[60vw] w-[90vw] mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo svg" width={36} height={36} />
          <h3 className="text-xl">Docs</h3>
        </Link>
        <ul className="flex gap-4">
          <li className="hover:underline">
            <Link href="#">Entreprise</Link>
          </li>
          <li className="hover:underline">
            <Link href="#">Pricing</Link>
          </li>
          <li className="hover:underline">
            <Link href="#">FAQ</Link>
          </li>
        </ul>

        <div className="flex gap-2">
          <Button variant="ghost">Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </nav>
  );
}
