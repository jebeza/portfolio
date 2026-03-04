import { AuroraText } from "@/components/ui/aurora-text";
import CategoryFilter from "./CategoryFilter";

interface Props {
  activeCategory: string | null;
  setActiveCategory: (value: string | null) => void;
}

export default function Header({ activeCategory, setActiveCategory }: Props) {
  return (
    <header className="flex flex-col items-center mb-10">
      <AuroraText className="text-4xl md:text-4xl xl:text-5xl font-display">
        Jenifer
      </AuroraText>

      <CategoryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </header>
  );
}