"use client"
import Link from "next/link";
import { useState } from "react";
import { useEffect, useRef } from "react";

function MenuMobile() {
    const [ouvert, setOuvert] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ouvert) return;

        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setOuvert(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ouvert]);

    return (
        <div ref={menuRef}>
            <button
                aria-label="Ouvrir le menu"
                className="p-2 focus:outline-none"
                onClick={() => setOuvert(!ouvert)}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={ouvert ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                </svg>
            </button>
            {ouvert && (
                <div className="fixed top-[56px] left-0 w-full bg-background border-t border-accent shadow-lg flex flex-col z-50 md:hidden">
                    <Link
                        href="/about"
                        className="px-4 py-4 hover:bg-accent/20 border-b border-accent"
                        onClick={() => setOuvert(false)}
                    >
                        /about
                    </Link>
                    <Link
                        href="/contact"
                        className="px-4 py-4 hover:bg-accent/20 border-b border-accent"
                        onClick={() => setOuvert(false)}
                    >
                        /contact
                    </Link>
                    <Link
                        href="/projects"
                        className="px-4 py-4 hover:bg-accent/20 border-b border-accent"
                        onClick={() => setOuvert(false)}
                    >
                        /projects
                    </Link>
                </div>
            )}
        </div>
    );
}

export default function Header() {
    return (
    <div>
        <div className="z-30 justify-between flex w-full lg:w-[90vw] py-2 gap-1 fixed top-0 left-0 right-0 bg-background m-auto border-b-2 border-accent">
            <h2 className="text-2xl font-bold ml-2 flex">
                <Link href={"/"} className="hover:underline">alexm00n.dev</Link>
            </h2>
            <div className="hidden md:flex pt-1">
                <Link href={"/about"} className="hover:underline mx-2">/about</Link>
                <Link href={"/contact"} className="hover:underline mx-2">/contact</Link>
                <Link href={"/projects"} className="hover:underline mx-2">/projects</Link>
            </div>
            <div className="md:hidden flex items-center">
                <MenuMobile />
            </div>
        </div>
        <div className="fixed w-full z-20 bg-background top-0 left-0 right-0 flex h-12"></div>
    </div>
    );
  }