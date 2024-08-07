import { useTabAwayCount } from "react-customs";

function Content() {
  const tabAwayCount = useTabAwayCount();
  return (
    <main className="w-full p-4 md:p-6 flex justify-center">
      <div className="w-full max-w-[800px] bg-zinc-950 text-zinc-50 rounded-lg p-6">
        <div className="my-8 flex justify-center items-center flex-col gap-6">
          <div className="w-full max-w-[300px] aspect-square bg-zinc-900 flex items-center justify-center text-3xl font-bold rounded-xl text-emerald-400">
            {tabAwayCount}
          </div>
          <p className="w-full text-center text-sm text-zinc-400">Switch to any tab to see an efefct.</p>
        </div>
      </div>
    </main>
  );
}

export default Content;
