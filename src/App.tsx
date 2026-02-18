import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { IconCloud } from "@/components/ui/icon-cloud"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { AuroraText } from "@/components/ui/aurora-text"

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "tailwindcss",
  "shadcnui",
  ".net",
]

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#f3efef] px-6 md:px-12 py-10">

      {/* Header */}
      <header className="flex items-center justify-between mb-10 max-w-350 mx-auto">
        <AuroraText className="text-3xl font-bold">Jenifer</AuroraText>
        <nav>
          <a className="text-sm hover:underline cursor-pointer">
            Contacto
          </a>
        </nav>
      </header>

      {/* Grid */}
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
        <Card
          className="
            rounded-3xl bg-white shadow-none
            xl:col-start-1 xl:col-span-2
            xl:row-start-1
          "
        >
          <CardContent className="p-8 grid gap-6">
            <div className="w-20 h-20 rounded-full bg-black shrink-0" />
            <div>
              <p className="text-base">
                Soy <span className="font-bold text-xl">Jenifer</span>, desarrolladora
                front-end. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. In consequat rhoncus odio, sit amet
                porttitor mauris dictum vitae.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 2 — Language */}
        <Card
          className="
            rounded-3xl bg-white shadow-none
            flex items-center justify-center
            xl:col-start-3 xl:row-start-1
          "
        >
          <CardContent className="text-center">
            <p className="text-8xl font-bold font-serif">ES</p>
            <div className="text-sm mt-2 flex gap-3 justify-center">
              <span className="cursor-pointer text-xl">EN</span>
              <span className="font-semibold text-xl">ES</span>
            </div>
          </CardContent>
        </Card>

        {/* 3 — Github */}
        <Card
          className="
            rounded-3xl bg-[#62CBDB] text-black shadow-none
            relative overflow-hidden
            xl:col-start-4 xl:row-start-1 xl:row-span-2
          "
        >
          <CardContent className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl font-bold font-serif mb-7">Github</h2>
              <p className="text-sm">
                Mi perfil de Github, donde subo todos mis proyectos.
              </p>
            </div>

            <Button
              size="icon"
              variant="secondary"
              className="rounded-full w-10 h-10 absolute bottom-6 left-6 cursor-pointer"
            >
              <ArrowUpRight size={18} />
            </Button>
          </CardContent>

          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#FAC2D7] rounded-full" />
        </Card>

        {/* 4 — ??? */}
        <Card
          className="
            rounded-3xl bg-white shadow-none
            flex flex-col justify-center p-6
            xl:col-start-1 xl:row-start-2
          "
        >
          ???
        </Card>

        {/* 5 — LinkedIn */}
        <Card
          className="
            rounded-3xl bg-[#f0978a] shadow-none
            flex items-center justify-center
            xl:col-start-2 xl:row-start-2
          "
        >
          <span className="text-5xl font-bold text-white">
            in
          </span>
        </Card>

        {/* 6 — Projects */}
        <Card
          className="
            rounded-3xl bg-[#f0978a] shadow-none
            relative overflow-hidden
            xl:col-start-3 xl:row-start-2 xl:row-span-2
          "
        >
          <CardContent className="flex flex-col justify-end h-full">
            <div>
              <h2 className="text-3xl font-bold font-serif mb-7">
                Mis proyectos
              </h2>
              <p className="text-sm mb-12">
                Aquí encontrarás algunos de mis proyectos personales.
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

          <div className="absolute -top-20 -right-20 w-72 h-72 bg-pink-200 rounded-full opacity-70" />
        </Card>

        {/* 7 — Tech stack */}
        <Card
          className="
            rounded-3xl bg-white shadow-none
            p-6 flex flex-wrap gap-4 items-center justify-center
            text-sm font-semibold
            xl:col-start-1 xl:col-span-2 xl:row-start-3
          "
        >
           <div className="relative flex size-full items-center justify-center overflow-hidden">
            <IconCloudDemo />
          </div>
        </Card>
        {/* 8 — Dark mode */}
        <Card
          className="
            rounded-3xl bg-white shadow-none
            flex items-center justify-center
            xl:col-start-4 xl:row-start-3
          "
        >
          <AnimatedThemeToggler />
        </Card>

      </section>
    </main>
  )
}
