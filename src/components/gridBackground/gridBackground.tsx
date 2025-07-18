export function PlusGridBackground() {
  const plusArray = Array.from({ length: 600 });

  return (
    <div className="w-full h-full inset-0 pointer-events-none bg-black">
      <div className="w-full h-full grid grid-cols-[repeat(auto-fill,_minmax(30px,_1fr))] gap-4 opacity-10 px-4 py-6">
        {plusArray.map((_, i) => (
          <span key={i} className="text-white text-3xl text-center select-none drop-shadow-[0_0_6px_#ffffff80]">+</span>
        ))}
      </div>
    </div>
  );
}
