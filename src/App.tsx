import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { AuroraText } from "@/components/ui/aurora-text"

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
} from "react-icons/si"

const techStack = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: ".NET", icon: SiDotnet },
]

function TechGrid() {
  return (
    <div className="grid grid-cols-4 gap-9 place-items-center w-full">
      {techStack.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
        >
          <Icon size={50} className="text-gray-800 dark:text-[#b8a0ff]" />
        </div>
      ))}
    </div>
  )
}

export default function App() {
  return (
    <main className="font-body min-h-screen bg-[#f3efef] dark:bg-[#1b172a] px-6 md:px-12 py-10 text-black dark:text-[#e1d9ff]">
      <section
        className="
          grid gap-6
          justify-center
          mx-auto
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-[repeat(4,280px)]
          xl:auto-rows-[280px]
        "
      >
        {/* 1 — About */}
        <Card className="rounded-3xl bg-white dark:bg-[#2c2540] shadow-none xl:col-start-1 xl:col-span-2 xl:row-start-1">
          <CardContent className="grid gap-6">
            <div>
              <img
                src="/avatar.png"
                alt="Jenifer"
                className="w-25 h-30 border-0 dark:border-[#b8a0ff]"
              />
            </div>
            <div>
              <p className="leading-7 letter-spacing-[0.5px] font-body text-lg">
                Soy <AuroraText className="text-4xl font-display dark:text-[#8f6fc4]">Jenifer</AuroraText>, desarrolladora front-end. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat rhoncus odio, sit amet porttitor mauris dictum vitae.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 2 — Language */}
        <Card className="rounded-3xl bg-white dark:bg-[#2c2540] shadow-none flex items-center justify-center xl:col-start-3 xl:row-start-1">
          <CardContent className="text-center">
            <p className="text-8xl font-display dark:text-[#b8a0ff]">ES</p>
            <div className="text-sm mt-2 flex gap-3 justify-center">
              <span className="cursor-pointer text-xl dark:text-[#9b8cff]">EN</span>
              <span className="font-semibold text-xl dark:text-[#b8a0ff]">ES</span>
            </div>
          </CardContent>
        </Card>

        {/* 3 — Github */}
        <Card className="rounded-3xl bg-[#62CBDB] dark:bg-[#3aa6b8] text-black dark:text-black shadow-none relative overflow-hidden xl:col-start-4 xl:row-start-1 xl:row-span-2">
          <CardContent className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl font-bold font-display mb-7">Github</h2>
              <p className="text-lg">
                Mi perfil de Github, donde subo todos mis proyectos.
              </p>
            </div>
            <Button size="icon" variant="secondary" className="rounded-full w-10 h-10 absolute bottom-6 left-6 cursor-pointer z-10">
              <a href="https://github.com/jebeza" target="_blank"><ArrowUpRight size={18} /></a>
            </Button>
          </CardContent>
          <div className="absolute -bottom-30 -right-60 w-122 h-98.25 bg-[#FAC2D7] dark:bg-[#a56fa5] rounded-full" />
        </Card>

        {/* 4 — Email */}
        <Card className="rounded-3xl bg-white dark:bg-[#2c2540] shadow-none flex items-center justify-center p-6 xl:col-start-1 xl:row-start-2">
          <a href="mailto:jbenaventzapata@gmail.com" target="_blank" className="flex items-center justify-center">
            <SiMailboxdotorg size={90} className="text-[#62CBDB] dark:text-[#3aa6b8]" />
          </a>
        </Card>

        {/* 5 — LinkedIn */}
        <Card className="rounded-3xl bg-[#FFA498] dark:bg-[#8f6fc4] shadow-none flex items-center justify-center xl:col-start-2 xl:row-start-2">
          <a href="https://www.linkedin.com/in/jenifer-benavent-zapata" target="_blank" className="text-5xl font-bold text-white">
            <SiLinkedin size={90} />
          </a>
        </Card>

        {/* 6 — Projects */}
        <Card className="rounded-3xl bg-[#FFA498] dark:bg-[#c47791] shadow-none relative overflow-hidden xl:col-start-3 xl:row-start-2 xl:row-span-2">
          <CardContent className="flex flex-col justify-end h-full">
            <div>
              <h2 className="text-3xl font-bold font-display mb-7">
                Mis proyectos
              </h2>
              <p className="text-lg mb-12">
                Aquí encontrarás algunos de mis proyectos personales.
              </p>
            </div>
            <Button size="icon" variant="secondary" className="rounded-full w-10 h-10 cursor-pointer">
              <ArrowUpRight size={18} />
            </Button>
          </CardContent>
          <div className="absolute -top-90 -right-90 w-150.75 h-165.5 bg-[#FAC2D7] dark:bg-[#5b4c8a] rounded-full" />
        </Card>

        {/* 7 — Tech stack */}
        <Card className="rounded-3xl bg-white dark:bg-[#2c2540] shadow-none p-6 flex items-center justify-center xl:col-start-1 xl:col-span-2 xl:row-start-3">
          <TechGrid />
        </Card>

        {/* 8 — Dark mode */}
        <Card className="rounded-3xl bg-white dark:bg-[#2c2540] shadow-none flex items-center justify-center xl:col-start-4 xl:row-start-3">
          <AnimatedThemeToggler className="cursor-pointer"/>
        </Card>

      </section>
    </main>
  )
}
