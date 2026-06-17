export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#030303]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-white/[0.06]" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#7b61ff] animate-spin" />
        </div>
        <p className="text-sm text-white/20 font-light">Loading...</p>
      </div>
    </div>
  );
}
