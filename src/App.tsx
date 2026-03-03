import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { AuroraText } from "@/components/ui/aurora-text";

import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGit,
  SiTailwindcss,
  SiDotnet,
  SiLinkedin,
  SiMailboxdotorg,
} from "react-icons/si";

import { useLanguage } from "@/hooks/useLanguage";

const techStack = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: ".NET", icon: SiDotnet },
];

function TechGrid() {
  return (
    <div className="grid grid-cols-4 gap-9 place-items-center w-full">
      {techStack.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
        >
          <Icon className="text-gray-800 dark:text-[#b8a0ff] xl:text-[60px] md:text-[40px] lg:text-[40px]" />
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const { language, changeLanguage, AVAILABLE_LANGUAGES, strings } =
    useLanguage();

  return (
    <main className="font-body min-h-screen bg-[#f3efef] dark:bg-[#1b172a] px-6 md:px-12 py-10 text-black dark:text-[#e1d9ff]">
      {/* Header */}
      <header className="flex items-center justify-between mb-10 max-w-350 mx-auto">
        <AuroraText className="text-3xl font-display">Jenifer</AuroraText>
      </header>
      <section
        className="
          grid gap-6 justify-center mx-auto
          sm:grid-cols-[repeat(4,180px)] sm:auto-rows-[180px]
          md:grid-cols-[repeat(4,180px)] md:auto-rows-[180px]
          lg:grid-cols-[repeat(4,180px)] lg:auto-rows-[180px]
          xl:grid-cols-[repeat(4,280px)] xl:auto-rows-[280px]
        "
      >
        {/* 1 — About */}
        <Card
          className="
            rounded-3xl bg-white dark:bg-[#2c2540] shadow-none
            sm:col-span-2 sm:row-span-1
            md:col-span-2 md:row-span-2
            lg:col-span-2 lg:row-span-2
            xl:col-start-1 xl:col-span-2 xl:row-start-1 xl:row-span-1
          "
        >
          <CardContent className="flex flex-col justify-between h-full">
            <div>
              <img
                src="/avatar.png"
                alt="Jenifer's avatar"
                className="w-25 h-30 border-0 dark:border-[#b8a0ff]"
              />
            </div>
            <div>
              <p className="leading-7 letter-spacing-[0.5px] font-body text-lg">
                {strings.im}{" "}
                <span className="text-4xl font-display dark:text-[#8f6fc4]">
                  Jenifer
                </span>
                {strings.about}
              </p>
            </div>
          </CardContent>{" "}
        </Card>

        {/* 2 — Language */}
        <Card
          className="
            rounded-3xl bg-white dark:bg-[#2c2540] shadow-none flex items-center justify-center
            sm:col-span-2 sm:row-span-1
            md:col-span-1 md:row-span-1
            lg:col-span-1 lg:row-span-1
            xl:col-start-3 xl:row-start-1 xl:row-span-1
          "
        >
          <CardContent className="text-center">
            <p className="xl:text-8xl md:text-7xl lg:text-7xl font-display dark:text-[#b8a0ff]">
              {language.toUpperCase()}
            </p>

            <div className="xl:text-sm md:text-xs lg:text-xs mt-2 flex gap-6 justify-center">
              {AVAILABLE_LANGUAGES.map((lang) => {
                const isActive = lang === language;

                return (
                  <span
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`cursor-pointer text-xl ${
                      isActive ? "font-semibold scale-125" : "opacity-50"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </span>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* 3 — Github */}
        <Card
          className="
            rounded-3xl bg-[#62CBDB] dark:bg-[#3aa6b8] text-black dark:text-black shadow-none relative overflow-hidden
            md:col-span-1 md:row-span-2
            lg:col-span-1 lg:row-span-2
            xl:col-start-4 xl:row-start-1 xl:row-span-2
          "
        >
          <CardContent className="flex flex-col justify-between h-full">
            <div>
              <h2 className="xl:text-3xl md:text-3xl lg:text-3xl font-bold font-display mb-7">
                Github
              </h2>{" "}
              <p className="xl:text-lg md:text-sm lg:text-sm">
                {strings.githubDesc}
              </p>
            </div>
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full w-10 h-10 absolute bottom-6 left-6 cursor-pointer z-10"
            >
              <a href="https://github.com/jebeza" target="_blank">
                <ArrowUpRight size={18} />
              </a>
            </Button>
          </CardContent>
          <div
            className="
              absolute
              xl:-bottom-30 xl:-right-60
              md:-bottom-34 md:-right-65
              lg:-bottom-34 lg:-right-65
              xl:w-122 xl:h-98.25
              md:w-100 md:h-80
              lg:w-100 lg:h-80
              bg-[#FAC2D7] dark:bg-[#a56fa5] rounded-full
            "
          />{" "}
        </Card>

        {/* 4 — Projects */}
        <Card
          className="
            rounded-3xl bg-[#FFA498] dark:bg-[#c47791] shadow-none relative overflow-hidden
            md:col-span-1 md:row-span-2
            lg:col-span-1 lg:row-span-2
            xl:col-start-3 xl:row-start-2 xl:row-span-2
          "
        >
          <CardContent className="flex flex-col justify-end h-full z-10">
            <div>
              <h2 className="xl:text-3xl md:text-3xl lg:text-3xlfont-bold font-display mb-7">
                {strings.projectsTitle}
              </h2>

              <p className="xl:text-lg md:text-sm lg:text-sm mb-12">
                {strings.projectsDesc}
              </p>
            </div>
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full w-10 h-10 cursor-pointer"
            >
              <ArrowUpRight size={18} />
            </Button>
          </CardContent>
          <div
            className="
              absolute
              -top-40 -right-40
              md:-top-45 md:-right-40
              lg:-top-45 lg:-right-40
              xl:-top-90 xl:-right-90
              w-80 h-96
              md:w-80 md:h-90
              lg:w-80 lg:h-90
              xl:w-150.75 xl:h-165.5
              bg-[#FAC2D7] dark:bg-[#5b4c8a]
              rounded-full
            "
          />
        </Card>

        {/* 5 — Email */}
        <Card
          className="
            rounded-3xl bg-white dark:bg-[#2c2540] shadow-none flex items-center justify-center p-6
            md:col-span-1 md:row-span-1
            lg:col-span-1 lg:row-span-1
            xl:col-start-1 xl:row-start-2 xl:row-span-1
          "
        >
          <a
            href="mailto:jbenaventzapata@gmail.com"
            target="_blank"
            className="flex items-center justify-center"
          >
            <SiMailboxdotorg className="text-[#62CBDB] dark:text-[#3aa6b8] xl:text-[90px] md:text-[60px] lg:text-[60px]" />
          </a>{" "}
        </Card>

        {/* 6 — LinkedIn */}
        <Card
          className="
            rounded-3xl bg-[#FFA498] dark:bg-[#8f6fc4] shadow-none flex items-center justify-center
            md:col-span-1 md:row-span-1
            lg:col-span-1 lg:row-span-1
            xl:col-start-2 xl:row-start-2 xl:row-span-1
          "
        >
          <a
            href="https://www.linkedin.com/in/jenifer-benavent-zapata"
            target="_blank"
            className="text-5xl font-bold text-white"
          >
            <SiLinkedin className="xl:text-[90px] md:text-[60px] lg:text-[60px]" />
          </a>{" "}
        </Card>

        {/* 8 — Dark mode */}
        <Card
          className="
            rounded-3xl bg-white dark:bg-[#2c2540] shadow-none flex items-center justify-center
            md:col-span-1 md:row-span-1
            lg:col-span-1 lg:row-span-1
            xl:col-start-4 xl:row-start-3
          "
        >
          <AnimatedThemeToggler className="cursor-pointer" />
        </Card>

        {/* 7 — Tech stack */}
        <Card
          className="
            rounded-3xl bg-white dark:bg-[#2c2540] shadow-none p-6 flex items-center justify-center
            md:col-span-2 md:row-span-1
            lg:col-span-2 lg:row-span-1
            xl:col-start-1 xl:col-span-2 xl:row-start-3
          "
        >
          <TechGrid />
        </Card>
      </section>
    </main>
  );
}
