export function PaperBackground() {
  return (
    <>
      <div className="paper-texture fixed inset-0 z-50 pointer-events-none" />
      <div className="notebook-lines fixed inset-0 pointer-events-none" />
      <div className="pointer-events-none select-none fixed inset-0 overflow-hidden">
        <div className="absolute top-20 right-[5%] font-sketch text-pencil/30 -rotate-6 text-sm md:text-base hidden md:block">
          draft_v2_final.final
        </div>
        <div className="absolute top-[85%] right-12 font-sketch text-pencil/25 rotate-3 text-sm hidden md:block">
          // optimize the Redis cache layer
        </div>
      </div>
    </>
  );
}
