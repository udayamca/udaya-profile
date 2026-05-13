export default function Footer() {
  const year: number = new Date().getFullYear();
  return (
    <>
      <div className="h-10 bg-slate-900 text-white text-center font-light text-xs p-4 fixed bottom-0 w-full border-t-1 border-gray-800">
        © {year} Udaya Chandar · Fremont, CA
      </div>
    </>
  );
}
