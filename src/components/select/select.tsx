// components/CustomSelect.tsx
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { selectAttributes } from "../../utilities/typedeclaration";

export function Select(props: selectAttributes) {
  const { options, defaultValue, className = "", onChange } = props;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(
    options.find((opt) => opt.value === defaultValue) || options[0]
  );

  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: typeof selected) => {
    setSelected(option);
    setOpen(false);
    onChange?.(option.value);
  };

  return (
    <div ref={ref} className={`relative min-w-[140px] ${className}`}>
      <div
        className="border rounded-md px-4 py-2 shadow-sm flex items-center justify-between cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex items-center justify-center w-full gap-2">
          {selected.imageUrl && (
            <img
              src={selected.imageUrl}
              alt={selected.label}
              className="w-5 h-5 rounded-sm"
            />
          )}
          <span className="text-sm font-semibold mx-auto">{selected.label}</span>
        </div>
        <ChevronDown
          className={`w-7 h-7 ml-2 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {open && (
        <ul
          className={`absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg
            transition-all duration-300 origin-top transform scale-y-100 opacity-100`}
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => handleSelect(opt)}
              className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer"
            >
              {opt.imageUrl && (
                <img src={opt.imageUrl} alt={opt.label} className="w-5 h-5" />
              )}
              <span className="text-sm font-semibold">{opt.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

