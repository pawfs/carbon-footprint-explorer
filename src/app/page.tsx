import ComboBox from "./_components/ComboBox";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-4 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[3rem]">
          Carbon Footprint Explorer
        </h1>
        <div className="grid">
          <ComboBox />
        </div>
      </div>
    </main>
  );
}

