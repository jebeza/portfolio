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
    <div className="grid grid-cols-4 gap-6 md:gap-9 place-items-center w-full">
      {techStack.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
        >
          <Icon className="text-[36px] md:text-[40px] xl:text-[60px] text-gray-800 dark:text-[#b8a0ff]" />
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
        <AuroraText className="text-xl md:text-2xl xl:text-3xl font-display">
          Jenifer
        </AuroraText>
      </header>

      <section
        aria-label="Portfolio sections cards"
        className="
          grid gap-4 justify-center mx-auto
          grid-cols-[repeat(2,164px)]
          auto-rows-[164px]

          md:grid-cols-[repeat(4,180px)] md:auto-rows-[180px]
          lg:grid-cols-[repeat(4,180px)] lg:auto-rows-[180px]
          xl:grid-cols-[repeat(4,280px)] xl:auto-rows-[280px]
        "
      >
        {/* ABOUT */}
        <Card
          className="
            col-span-2 row-span-2
            rounded-3xl bg-white dark:bg-[#2c2540] shadow-none

            md:col-span-2 md:row-span-2
            lg:col-span-2 lg:row-span-2
            xl:col-start-1 xl:col-span-2 xl:row-start-1 xl:row-span-1
          "
        >
          <CardContent className="flex flex-col justify-between h-full">
            <img
              src="/avatar.png"
              alt="Jenifer's avatar"
              className="
                w-25 h-30
                md:w-29 md:h-35
                xl:w-25 xl:h-30
              "
            />

            <p
              className="
                text-lg    
                md:text-lg  
                xl:text-lg
                leading-relaxed
              "
            >
              {strings.im}{" "}
              <span
                className="
                  text-3xl     
                  md:text-2xl   
                  xl:text-4xl
                  font-display
                  dark:text-[#8f6fc4]
                "
              >
                Jenifer
              </span>
              {strings.about}
            </p>
          </CardContent>
        </Card>

        {/* LANGUAGE */}
        <Card
          className="
            rounded-3xl bg-white dark:bg-[#2c2540] shadow-none flex items-center justify-center
            md:col-span-1 md:row-span-1
            lg:col-span-1 lg:row-span-1
            xl:col-start-3 xl:row-start-1 xl:row-span-1
          "
        >
          <CardContent className="text-center">
            <p className="text-6xl md:text-6xl xl:text-8xl font-display dark:text-[#b8a0ff]">
              {language.toUpperCase()}
            </p>

            <div className="text-sm md:text-sm mt-2 flex gap-4 justify-center">
              {AVAILABLE_LANGUAGES.map((lang) => {
                const isActive = lang === language;

                return (
                  <span
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`cursor-pointer text-base md:text-lg ${
                      isActive ? "font-semibold scale-125 text-[#352949]" : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </span>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* GITHUB */}
        <Card
          className="
            row-span-2
            rounded-3xl bg-[#62CBDB] dark:bg-[#3aa6b8] shadow-none relative overflow-hidden
            md:col-span-1 md:row-span-2
            lg:col-span-1 lg:row-span-2
            xl:col-start-4 xl:row-start-1 xl:row-span-2
          "
        >
          <CardContent className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold font-display mb-4 md:mb-7">
                Github
              </h2>
              <p className="text-sm md:text-sm xl:text-lg">
                {strings.githubDesc}
              </p>
            </div>

            <Button
              aria-label="Go to Github profile" 
              size="icon"
              variant="secondary"
              className="rounded-full w-10 h-10 absolute bottom-6 left-6 z-10"
            >
              <a href="https://github.com/jebeza" target="_blank">
                <ArrowUpRight size={18} />
              </a>
            </Button>
          </CardContent>
          <div
            className="
              absolute
              -bottom-28 -right-40
              w-72 h-72

              md:-bottom-34 md:-right-65
              md:w-100 md:h-80

              lg:-bottom-34 lg:-right-65
              lg:w-100 lg:h-80

              xl:-bottom-30 xl:-right-60
              xl:w-122 xl:h-98.25

              bg-[#FAC2D7] dark:bg-[#a56fa5]
              rounded-full
            "
          />{" "}
        </Card>

        {/* PROJECTS */}
        <Card
          className="
            row-span-2
            rounded-3xl bg-[#FFA498] dark:bg-[#c47791] shadow-none relative overflow-hidden
            md:col-span-1 md:row-span-2
            lg:col-span-1 lg:row-span-2
            xl:col-start-3 xl:row-start-2 xl:row-span-2
          "
        >
          <CardContent className="flex flex-col justify-end h-full z-10">
            <div>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold font-display mb-4 md:mb-7">
                {strings.projectsTitle}
              </h2>

              <p className="text-sm md:text-sm xl:text-lg mb-8 md:mb-12">
                {strings.projectsDesc}
              </p>
            </div>

            <Button
              size="icon"
              variant="secondary"
              className="rounded-full w-10 h-10"
            >
              <ArrowUpRight size={18} />
            </Button>
          </CardContent>
          <div
            className="
              absolute
              -top-35 -right-38
              w-72 h-80

              md:-top-45 md:-right-40
              md:w-80 md:h-90

              lg:-top-45 lg:-right-40
              lg:w-80 lg:h-90

              xl:-top-90 xl:-right-90
              xl:w-150.75 xl:h-165.5

              bg-[#FAC2D7] dark:bg-[#5b4c8a]
              rounded-full
            "
          />{" "}
        </Card>

        {/* EMAIL */}
        <Card className="rounded-3xl bg-white dark:bg-[#2c2540] shadow-none flex items-center justify-center p-6">
          <a href="mailto:jbenaventzapata@gmail.com" target="_blank" aria-label="Send email">
            <SiMailboxdotorg className="text-[54px] md:text-[60px] xl:text-[90px] text-[#62CBDB] dark:text-[#3aa6b8]" />
          </a>
        </Card>

        {/* LINKEDIN */}
        <Card className="rounded-3xl bg-[#FFA498] dark:bg-[#8f6fc4] shadow-none flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/jenifer-benavent-zapata"
            target="_blank"
             aria-label="Go to LinkedIn profile"
            >
            <SiLinkedin className="text-[54px] md:text-[60px] xl:text-[90px] text-white" />
          </a>
        </Card>

        {/* THEME */}
        <Card className="rounded-3xl bg-white dark:bg-[#2c2540] shadow-none flex items-center justify-center">
          <AnimatedThemeToggler />
        </Card>

        {/* TECH STACK */}
        <Card
          className="
            col-span-2
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
