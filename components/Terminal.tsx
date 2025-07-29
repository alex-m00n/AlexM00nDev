"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Line = {
  id: string;
  type: "input" | "output";
  text: string;
};

function generateUUID() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export default function Terminal() {
  // On retire le ascii art de l'initialisation des lignes, il sera affiché dans le rendu selon la taille d'écran
  const asciiArtAlexM00n = ` _____ _____ _____ _____ _____ _____ _____ _____
|| A ||| l ||| e ||| x ||| M ||| 0 ||| 0 ||| n ||
||___|||___|||___|||___|||___|||___|||___|||___||
|/___\\|/___\\|/___\\|/___\\|/___\\|/___\\|/___\\|/___\\|`;

  // On retire le ascii art de la liste initiale
  const [lines, setLines] = useState<Line[]>([
    { id: generateUUID(), type: "output", text: "alexm00n.exe [version 1.0.0]" },
    // asciiArtAlexM00n n'est plus ici
    { id: generateUUID(), type: "output", text: "C:\\alexm00n> help" },
    { id: generateUUID(), type: "output", text: "Commandes disponibles : about[/about], projects[/projects], contact[/contact], help[affiche les commandes du terminal], clear[efface le terminal]" },
  ]);

  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const loadingInterval = useRef<NodeJS.Timeout | null>(null);
  const loadingLineIdRef = useRef<string | null>(null);

  const createLine = (type: "input" | "output", text: string): Line => ({
    id: generateUUID(),
    type,
    text,
  });

  useEffect(() => {
    setLines((prev) => [...prev, createLine("input", "")]);
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, [lines]);

  const addLine = (line: Line) => {
    setLines((prev) => [...prev, line]);
  };

  const addOutput = (text: string) => {
    addLine(createLine("output", text));
  };

  const startLoading = (baseText = "Chargement") => {
    let dots = 1;
    const loadingLine = createLine("output", `${baseText}.`);
    loadingLineIdRef.current = loadingLine.id;

    setLines((prev) => [...prev, loadingLine]);

    loadingInterval.current = setInterval(() => {
      setLines((prev) =>
        prev.map((line) =>
          line.id === loadingLineIdRef.current
            ? { ...line, text: baseText + ".".repeat(dots > 3 ? 1 : dots) }
            : line
        )
      );
      dots = dots >= 3 ? 1 : dots + 1;
    }, 300);
  };

  const stopLoading = async () => {
    if (loadingInterval.current) {
      clearInterval(loadingInterval.current);
      loadingInterval.current = null;
    }

    await new Promise<void>((resolve) => {
      setLines((prev) => {
        const updated = prev.filter((line) => line.id !== loadingLineIdRef.current);
        resolve();
        return updated;
      });
    });

    loadingLineIdRef.current = null;
  };

  const handleCommand = async () => {
    const trimmed = input.trim();
    const command = trimmed.toLowerCase();
    if (!trimmed) return;

    setLines((prev) => prev.slice(0, -1));
    addLine(createLine("input", `C:\\alexm00n> ${trimmed}`));
    setInput("");

    const commands: Record<string, () => Promise<void>> = {
      help: async () => {
        startLoading("Chargement de l’aide");
        await new Promise((r) => setTimeout(r, 1500));
        await stopLoading();
        addOutput("Commandes disponibles : about[/about], projects[/projects], contact[/contact], help[affiche les commande du terminale], clear[clear le terminal]");
      },
      about: async () => {
        startLoading("Chargement de la page à propos");
        await new Promise((r) => setTimeout(r, 1500));
        await stopLoading();
        router.push("/about");
      },
      projects: async () => {
        startLoading("Redirection vers les projets");
        await new Promise((r) => setTimeout(r, 1500));
        await stopLoading();
        router.push("/projects");
      },
      contact: async () => {
        startLoading("Ouverture du formulaire de contact");
        await new Promise((r) => setTimeout(r, 1500));
        await stopLoading();
        router.push("/contact");
      },
      clear: async () => {
        setLines([
          { id: generateUUID(), type: "output", text: "alexm00n.exe [version 1.0.0]" },
          // asciiArtAlexM00n n'est plus ici non plus
          { id: generateUUID(), type: "output", text: "C:\\alexm00n> help" },
          { id: generateUUID(), type: "output", text: "Commandes disponibles : about[/about], projects[/projects], contact[/contact], help[affiche les commandes du terminal], clear[efface le terminal]" },
        ]);
      },
    };
    
    if (commands[command]) {
      await commands[command]();
    } else {
      await new Promise((r) => setTimeout(r, 500));
      addOutput(`'${trimmed}' n'est pas reconnu comme une commande interne ou externe.`);
    }

    setTimeout(() => {
      addLine(createLine("input", ""));
    }, 100);
  };

  return (
    <div className="bg-zinc-900/50 text-green-400 font-mono rounded-md shadow-lg w-full max-w-3xl border border-zinc-700">
      <div className="bg-zinc-800/50 text-white text-sm flex items-center justify-between rounded-t-md border-b border-zinc-700">
        <span className="font-semibold px-4">alexm00n.exe</span>
        <div className="flex">
          <button className="hover:bg-white/50 h-8 w-8 text-center">-</button>
          <button className="hover:bg-white/50 h-8 w-8 text-center">❐</button>
          <button className="hover:bg-red-500 h-8 w-8 text-center rounded-tr-md">×</button>
        </div>
      </div>

      <div className="p-4 whitespace-pre-wrap min-h-[200px]">
        {/* Affichage du ascii art uniquement en sm ou plus */}
        <div className="hidden sm:block mb-2">
          <pre className="text-green-400">{asciiArtAlexM00n}</pre>
        </div>
        {lines.map((line, index) => {
          const isLast = index === lines.length - 1;

          if (line.type === "input") {
            if (line.text === "" && isLast) {
              return (
                <div key={line.id} className="flex">
                  <span className="mr-2">C:\alexm00n&gt;</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleCommand()}
                    className="bg-transparent outline-none text-green-400 flex-1"
                    autoFocus
                  />
                </div>
              );
            }
            return <div key={line.id}>{line.text}</div>;
          }

          return <div key={line.id}>{line.text}</div>;
        })}
      </div>
    </div>
  );
}