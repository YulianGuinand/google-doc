import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function NavBarDemo() {
  return (
    <nav className="fixed top-0 left-0 w-full py-4 flex z-20 bg-transparent text-black">
      <div className="md:max-w-[60vw] w-[90vw] mx-auto flex justify-between items-center bg-transparent">
        <Link href="/" className="flex items-center gap-2 mix-blend-difference">
          <Image src="/logo.svg" alt="logo svg" width={36} height={36} />
          <h3 className="text-xl">Docs</h3>
        </Link>
        <ul className="flex gap-4">
          <li className="hover:underline">
            <Link href="#" className="mix-blend-difference">
              Entreprise
            </Link>
          </li>
          <li className="hover:underline">
            <Link className="mix-blend-difference" href="#">
              Pricing
            </Link>
          </li>
          <li className="hover:underline">
            <Link className="mix-blend-difference" href="#">
              FAQ
            </Link>
          </li>
        </ul>

        <div className="flex gap-2 ">
          <Button variant="ghost" className="mix-blend-difference">
            Sign In
          </Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </nav>
  );
}
