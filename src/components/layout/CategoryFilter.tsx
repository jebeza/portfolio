interface Props {
  activeCategory: string | null;
  setActiveCategory: (value: string | null) => void;
}

const categories = ["All", "About", "Projects", "Others"];

export default function CategoryFilter({
  activeCategory,
  setActiveCategory,
}: Props) {
  return (
    <nav className="flex gap-2 mt-4 p-1.25 rounded-4xl bg-black/5 dark:bg-white/10">
      {categories.map((cat) => {
        const isActive =
          activeCategory === cat || (cat === "All" && !activeCategory);

        return (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat === "All" ? null : cat)}
            className={`h-8 px-4 rounded-[50px] cursor-pointer ${
              isActive
                ? "bg-white dark:bg-[#8f6fc4]"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </nav>
  );
}