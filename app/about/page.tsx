import { Heart, Laptop } from "lucide-react";

function AgeApropos() {
    const bDateEnv = process.env.BDate;
    if (!bDateEnv) {
        return (
            <p
                className="text-center text-sm text-texttertiary"
            >
                Impossible de calculer l'âge : date de naissance non définie.
            </p>
        );
    }
    const birthDate = new Date(bDateEnv);
    if (isNaN(birthDate.getTime())) {
        return (
            <p
                className="text-center text-sm text-texttertiary"
            >
                Impossible de calculer l'âge : date de naissance invalide.
            </p>
        );
    }
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return (
        <p
            className="text-center text-sm text-texttertiary"
        >
            Passionné par le développement web, j&apos;ai <span className="font-semibold">{age} ans</span> et j&apos;aime créer des interfaces interactives et élégantes.
            <br />
            Toujours curieux, j&apos;apprends en continu de nouvelles technologies.
        </p>
    );
}



export default async function About() {
    return (
        <>
            <head>
                <title>À propos | alexm00n.dev 🌙</title>
                <meta name="description" content="En savoir plus sur AlexM00n" />
            </head>
            <style>
                {`
                .bento-card {
                    transition: box-shadow 0.2s, transform 0.2s;
                }
                .bento-card-profile:hover {
                    box-shadow: 0 0 30px 0 var(--primary);
                }
                .bento-card-apropos:hover {
                    box-shadow: 0 0 30px 0 var(--tertiary);
                }
                .bento-card-projets:hover {
                    box-shadow: 0 0 30px 0 var(--tertiary);
                }
                .bento-card-competences:hover {
                    box-shadow: 0 0 30px 0 var(--tertiary);
                }
                .bento-card-contact:hover {
                    box-shadow: 0 0 30px 0 var(--primary);
                }

                .bento-card-funfact:hover {
                    box-shadow: 0 0 30px 0 var(--tertiary);
                }
                    
                @media all and (max-width: 1023px) {
                    .bento-card-contact:hover {
                      box-shadow: 0 0 30px 0 var(--tertiary);
                    }
                }

                @media (max-width: 767px) {
                    .bento-grid {
                        grid-template-columns: 1fr !important;
                        grid-auto-flow: row;
                    }
                    .bento-card,
                    .bento-card-profile,
                    .bento-card-apropos,
                    .bento-card-projets,
                    .bento-card-competences,
                    .bento-card-contact,
                    .bento-card-funfact {
                        grid-column: auto !important;
                        grid-row: auto !important;
                    }
                }
                `}
            </style>
            <div className="mx-auto max-w-5xl grid bento-grid grid-cols-1 md:grid-cols-3 grid-rows- md:grid-rows-3 gap-6 bento-animate mb-5">
                <div
                    className="bento-card bento-card-profile border-primary relative row-span-2 col-span-2 md:row-span-2 md:col-span-3 lg:col-span-1 bg-gradient-to-br from-[var(--primary)]/40 via-[var(--secondary)]/30 to-[var(--tertiary)]/30 border-2 rounded-2xl p-8 flex flex-col items-center justify-center lg:hover:scale-[1.02] transition-transform duration-200"
                >
                    <img
                        src="/animated.gif"
                        alt="Avatar"
                        className="w-32 h-32 rounded-full mb-4 border-4 border-primary"
                        style={{
                            boxShadow: "0 0 20px 0 var(--primary)",
                        }}
                    />
                    <h1
                        className="text-3xl font-bold mb-2 text-textprimary"
                    >
                        AlexM00n
                    </h1>
                    <p
                        className="italic mb-2 text-center text-textprimary"
                    >
                        Je code !<br />
                        (づ˶•༝•˶)づ{" "}
                        <Heart className="w-4 h-4 inline text-primary" />
                        <Laptop className="w-4 h-4 inline text-tertiary" />
                        <Heart className="w-4 h-4 inline text-primary" />
                    </p>
                    <span
                        className="text-xs mb-2 text-textsecondary"
                    >
                        Développeur web & passionné
                    </span>
                    <div className="flex gap-x-3 mt-2">
                        <a
                            href="https://discord.gg/"
                            target="_blank"
                            className="hover:underline text-primary hover:text-tertiary"
                        >*Discord*</a>
                        <a
                            href="https://github.com/alex-m00n"
                            target="_blank"
                            className="hover:underline text-primary hover:text-tertiary"
                        >*Github*</a>
                        <a
                            href="mailto:alex.m00n1.contact@gmail.com"
                            className="hover:underline text-primary hover:text-tertiary"
                        >*Mail*</a>
                    </div>
                </div>
                <div
                    className="bento-card bento-card-apropos border-tertiary bg-gradient-to-br from-[var(--tertiary)]/20 via-[var(--primary)]/20 to-[var(--secondary)]/20 border-2 rounded-2xl p-6 flex flex-col items-center justify-center lg:hover:scale-[1.02] transition-transform duration-200 col-span-2"
                >
                    <h2
                        className="text-lg font-semibold mb-2"
                        style={{ color: "var(--tertiary)" }}
                    >
                        À propos
                    </h2>
                    <AgeApropos />
                </div>
                <div
                    className="bento-card bento-card-projets border-tertiary bg-gradient-to-br from-[var(--primary)]/20 via-[var(--secondary)]/20 to-[var(--tertiary)]/20 border-2 rounded-2xl p-6 flex flex-col items-center justify-center lg:hover:scale-[1.02] transition-transform duration-200"
                >
                    <h2
                        className="text-lg font-semibold mb-2"
                        style={{ color: "var(--tertiary)" }}
                    >
                        Projets
                    </h2>
                    <p
                        className="text-center text-sm"
                        style={{ color: "var(--texttertiary)" }}
                    >
                        Découvrez mes projets{" "}
                        <a
                            href="/projects"
                            rel="noopener noreferrer"
                            className="underline text-tertiary hover:text-primary"
                        >
                            ici
                        </a>
                        <br />
                        ou sur mon{" "}
                        <a
                            href="https://github.com/alex-m00n"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-tertiary hover:text-primary"
                        >
                            Github
                        </a>
                    </p>
                </div>
                <div
                    className="bento-card bento-card-competences border-tertiary  bg-gradient-to-br from-[var(--tertiary)]/30 via-[var(--secondary)]/30 to-[var(--primary)]/20 border-2 rounded-2xl p-6 flex flex-col items-center justify-center lg:hover:scale-[1.02] transition-transform duration-200 lg:row-span-2"
                >
                    <h2
                        className="text-lg font-semibold mb-2"
                        style={{ color: "var(--tertiary)" }}
                    >
                        Compétences
                    </h2>
                    <ul className="list-disc list-inside text-sm text-left" style={{ color: "var(--texttertiary)" }}>
                        <li>React / Next.js</li>
                        <li>TypeScript / JavaScript</li>
                        <li>Tailwind CSS</li>
                        <li>Discord.js</li>
                        <li>Node.js</li>
                    </ul>
                </div>
                <div
                    className="bento-card bento-card-contact lg:border-primary border-tertiary bg-gradient-to-br lg:from-[var(--primary)]/20 lg:via-[var(--tertiary)]/20 lg:to-[var(--secondary)]/20 from-[var(--tertiary)]/30 via-[var(--secondary)]/30 to-[var(--primary)]/20 border-2 rounded-2xl p-6 flex flex-col items-center justify-center lg:hover:scale-[1.02] transition-transform duration-200"
                >
                    <h2
                        className="text-lg font-semibold mb-2 lg:text-primary text-tertiary"
                    >
                        Contact
                    </h2>
                    <p
                        className="text-center text-sm lg:text-textprimary text-texttertiary"
                    >
                        N'hésitez pas à me contacter pour collaborer ou discuter !<br />
                        <a
                            href="/contact"
                            className="underline lg:text-primary lg:hover:text-tertiary text-tertiary hover:text-primary"
                        >
                            ici
                        </a>
                        <br />
                        ou sur mon mail :
                        <br />
                        <a
                            href="mailto:alex.m00n1.contact@gmail.com"
                            className="underline lg:text-primary lg:hover:text-tertiary text-tertiary hover:text-primary"
                        >
                            alex.m00n1.contact@gmail.com
                        </a>
                    </p>
                </div>
                <div
                    className="bento-card bento-card-funfact border-tertiary bg-gradient-to-br from-[var(--tertiary)]/20 via-[var(--primary)]/20 to-[var(--secondary)]/20 border-2 rounded-2xl p-6 flex flex-col items-center justify-center lg:hover:scale-[1.02] transition-transform duration-200"
                >
                    <h2
                        className="text-lg font-semibold mb-2"
                        style={{ color: "var(--tertiary)" }}
                    >
                        Fun fact
                    </h2>
                    <p
                        className="text-center text-sm"
                        style={{ color: "var(--texttertiary)" }}
                    >
                        J'adore les échecs et le basket ♟️🏀
                    </p>
                </div>
            </div>
        </>
    );
}