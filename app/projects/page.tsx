import { Bot, Code2, Tag, Tags } from "lucide-react";

export default async function Projects() {
    return (

        <>
            <head>
                <title>Mes Projets | alexm00n.dev 🌙</title>
                <meta name="description" content="Les projets d'AlexM00n" />
            </head>
            <h1
                className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent drop-shadow-lg mb-4 animate-fade-in"
            >
                Mes projets
                <p className="text-center text-lg animate-fade-in-slow mt-3 lg:max-w-[60vw] md:max-w-[70vw] max-w-[90vw] mx-auto">
                    Découvrez quelques-unes de mes réalisations récentes, alliant passion, créativité et technologie.
                </p>
            </h1>
            <div className="w-full flex flex-col gap-12 items-center justify-center mt-10 pb-3">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full max-w-6xl">
                    <a
                        href="https://github.com/alex-m00n/AlexM00nTV"
                        target="_blank"
                        className="flex flex-col h-full z-10"
                    >
                        <div
                            className="relative bg-gradient-to-br from-primary/70 via-background to-tertiary/40 border-2 border-[color-mix(in_srgb,var(--tertiary)_40%,transparent)] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 overflow-hidden w-full h-full max-h-[520px] mx-auto lg:hover:scale-105"
                            style={{ willChange: "transform" }}
                        >
                            <span
                                className="absolute -top-8 -left-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-2xl opacity-60 transition-opacity duration-300"
                                style={{ background: "color-mix(in_srgb,var(--tertiary)_20%,transparent)" }}
                            ></span>

                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="rounded-full bg-gradient-to-tr from-[var(--primary)] via-[var(--tertiary)] to-[var(--tertiary)] flex items-center justify-center h-14 w-14 sm:h-20 sm:w-20 shadow-lg border-4 border-white/20">
                                    <Code2 size={40} className="text-white drop-shadow sm:hidden" />
                                    <Code2 size={56} className="text-white drop-shadow hidden sm:block" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold" style={{ color: "var(--tertiary)", textShadow: "0 2px 8px var(--tertiary)" }}>
                                    alexm00n.tv
                                </h2>
                            </div>
                            <div className="mt-4 sm:mt-6 flex-1">
                                <p
                                    className="text-sm sm:text-base mb-2 flex items-center gap-2"
                                    style={{ color: "var(--tertiary)" }}
                                >
                                    <Tags className="inline text-tertiary" />
                                    <span className="hover:underline transition-colors duration-200">Next.js</span>,
                                    <span className="hover:underline transition-colors duration-200">Tailwind</span>
                                </p>
                                <p className="text-sm sm:text-base">
                                    Juste mon ancien site (il n'est plus maintenu)
                                </p>
                            </div>
                            <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6 justify-center overflow-x-auto">
                                <img
                                    src="/preview-alexm00ntv-dark.png"
                                    className="preview-dark sm:h-32 rounded-xl border-2 shadow-lg transition-transform duration-200 group-lg:hover:scale-105 max-w-full border-tertiary/60 w-auto h-auto"
                                    alt="Dark preview"
                                />
                                <img
                                    src="/preview-alexm00ntv-light.png"
                                    className="preview-light sm:h-32 rounded-xl border-2 shadow-lg transition-transform duration-200 group-lg:hover:scale-105 max-w-full border-tertiary/30 w-auto h-auto"
                                    alt="Light preview"
                                />
                            </div>

                        </div>
                    </a>
                    <a
                        href="https://github.com/alex-m00n/M00nBot"
                        target="_blank"
                        className="flex flex-col h-full z-10"
                    >
                        <div
                            className="relative bg-gradient-to-br from-primary/70 via-background to-primary/40 border-2 border-[color-mix(in_srgb,var(--primary)_40%,transparent)] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 overflow-hidden w-full h-full max-h-[520px] mx-auto lg:hover:scale-105"
                            style={{ willChange: "transform" }}
                        >
                            <span
                                className="absolute -top-8 -right-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-2xl opacity-60 transition-opacity duration-300"
                                style={{ background: "color-mix(in_srgb,var(--primary)_20%,transparent)" }}
                            ></span>

                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="rounded-full bg-gradient-to-tr from-[var(--primary)] via-[var(--primary)] to-[var(--tertiary)] flex items-center justify-center h-14 w-14 sm:h-20 sm:w-20 shadow-lg border-4 border-white/20">
                                    <Bot size={40} className="text-white drop-shadow sm:hidden" />
                                    <Bot size={56} className="text-white drop-shadow hidden sm:block" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold" style={{ color: "var(--primary)", textShadow: "0 2px 8px var(--primary)" }}>
                                    M00nBot
                                </h2>
                            </div>
                            <div className="mt-4 sm:mt-6 flex-1">
                                <p
                                    className="text-sm sm:text-base mb-2 flex items-center gap-2 text-primary"
                                >
                                    <Tag className="inline text-primary" />
                                    <span className="hover:underline transition-colors duration-200">Discord.js</span>
                                </p>
                                <p className="text-sm sm:text-base">
                                    Juste mon bot Discord
                                </p>
                                <ul className="list-inside text-sm sm:text-base space-y-1 pl-2">
                                    <li>🎫 Système de tickets</li>
                                    <li>🎵 Système musical</li>
                                    <li>🛡️ Système de modération</li>
                                    <li>🏷️ Système de rôles</li>
                                    <li>✨ Et encore plus ...</li>
                                </ul>
                                <span className="italic text-xs mt-4 block">
                                    Un bot multifonction complet
                                </span>
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://github.com/alex-m00n/M00nBot-website"
                        target="_blank"
                        className="flex flex-col h-full z-10"
                    >
                        <div
                            className="relative bg-gradient-to-br from-primary/70 via-background to-tertiary/40 border-2 border-[color-mix(in_srgb,var(--tertiary)_40%,transparent)] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 overflow-hidden w-full h-full max-h-[520px] mx-auto lg:hover:scale-105"
                            style={{ willChange: "transform" }}
                        >
                            <span
                                className="absolute -top-8 -left-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-2xl opacity-60 transition-opacity duration-300"
                                style={{ background: "color-mix(in_srgb,var(--tertiary)_20%,transparent)" }}
                            ></span>

                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="rounded-full bg-gradient-to-tr from-[var(--primary)] via-[var(--tertiary)] to-[var(--tertiary)] flex items-center justify-center h-14 w-14 sm:h-20 sm:w-20 shadow-lg border-4 border-white/20">
                                    <Code2 size={40} className="text-white drop-shadow sm:hidden" />
                                    <Code2 size={56} className="text-white drop-shadow hidden sm:block" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-tertiary text-shadow-tertiary" style={{ textShadow: "0 2px 8px" }}>
                                    M00nBot
                                </h2>
                            </div>
                            <div className="mt-4 sm:mt-6 flex-1">
                                <p
                                    className="text-sm sm:text-base mb-2 flex items-center gap-2"
                                    style={{ color: "var(--tertiary)" }}
                                >
                                    <Tags className="inline text-tertiary" />
                                    <span className="hover:underline transition-colors duration-200">Next.js</span>,
                                    <span className="hover:underline transition-colors duration-200">Tailwind</span>
                                </p>
                                <p className="text-sm sm:text-base">
                                    Juste le site de mon Bot Discord
                                </p>
                            </div>
                            <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6 justify-center overflow-x-auto">
                                <img
                                    src="/preview-m00nbotwebsite-dark.png"
                                    className="preview-dark sm:h-32 rounded-xl border-2 shadow-lg transition-transform duration-200 group-hover:scale-105 max-w-full border-tertiary/60 w-auto h-auto"
                                    alt="Dark preview"
                                />
                                <img
                                    src="/preview-m00nbotwebsite-light.png"
                                    className="preview-light sm:h-32 rounded-xl border-2 shadow-lg transition-transform duration-200 group-hover:scale-105 max-w-full border-tertiary/30 w-auto h-auto"
                                    alt="Light preview"
                                />
                            </div>

                        </div>
                    </a>
                    <a
                        href="https://github.com/alex-m00n/AlexM00nDev"
                        target="_blank"
                        className="flex flex-col h-full z-10"
                    >
                        <div
                            className="relative bg-gradient-to-br from-primary/70 via-background to-tertiary/40 border-2 border-[color-mix(in_srgb,var(--tertiary)_40%,transparent)] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 overflow-hidden w-full h-full max-h-[520px] mx-auto lg:hover:scale-105"
                            style={{ willChange: "transform" }}
                        >
                            <span
                                className="absolute -top-8 -left-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-2xl opacity-60 transition-opacity duration-300"
                                style={{ background: "color-mix(in_srgb,var(--tertiary)_20%,transparent)" }}
                            ></span>

                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="rounded-full bg-gradient-to-tr from-[var(--primary)] via-[var(--tertiary)] to-[var(--tertiary)] flex items-center justify-center h-14 w-14 sm:h-20 sm:w-20 shadow-lg border-4 border-white/20">
                                    <Code2 size={40} className="text-white drop-shadow sm:hidden" />
                                    <Code2 size={56} className="text-white drop-shadow hidden sm:block" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold" style={{ color: "var(--tertiary)", textShadow: "0 2px 8px var(--tertiary)" }}>
                                    alexm00n.dev
                                </h2>
                            </div>
                            <div className="mt-4 sm:mt-6 flex-1">
                                <p
                                    className="text-sm sm:text-base mb-2 flex items-center gap-2"
                                    style={{ color: "var(--tertiary)" }}
                                >
                                    <Tags className="inline text-tertiary" />
                                    <span className="hover:underline transition-colors duration-200">Next.js</span>,
                                    <span className="hover:underline transition-colors duration-200">Tailwind</span>
                                </p>
                                <p className="text-sm sm:text-base">
                                    Juste mon site (Vous êtes dessus)
                                </p>
                            </div>
                            <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6 justify-center overflow-x-auto">
                                <img
                                    src="/preview-alexm00ndev-dark.png"
                                    className="preview-dark sm:h-32 rounded-xl border-2 shadow-lg transition-transform duration-200 group-hover:scale-105 max-w-full border-tertiary/60 w-auto h-auto"
                                    alt="Dark preview"
                                />
                                <img
                                    src="/preview-alexm00ndev-light.png"
                                    className="preview-light sm:h-32 rounded-xl border-2 shadow-lg transition-transform duration-200 group-hover:scale-105 max-w-full border-tertiary/30 w-auto h-auto"
                                    alt="Light preview"
                                />
                            </div>

                        </div>
                    </a>
                </div>
            </div >
        </>
    )
}