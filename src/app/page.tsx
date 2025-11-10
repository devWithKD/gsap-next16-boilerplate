import TagLine from "@/components/TagLine";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-black">
      <TagLine className="flex flex-col items-center justify-center gap-2 text-2xl text-white">
        <div className="flex gap-2">
          <h1 className="first">created by</h1>
          <h1 className="second text-red-500">MAN</h1>
        </div>
        <div className="flex gap-2">
          <h1 className="third">woven by</h1>
          <h1 className="fourth text-red-500">MACHINE</h1>
        </div>
      </TagLine>
    </div>
  );
}
