import Terminal from "@/components/Terminal";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <center>
          <Image src={'/animated.gif'} alt="a" width={250} height={250} className="rounded-full animate-spin" />

          <h1>Bienvenue sur mon site <span className="hover:underline">alexm00n.dev</span></h1>
        </center>
        <div className="flex items-center justify-center p-4">
          <Terminal />
        </div>
    </>
  );
}