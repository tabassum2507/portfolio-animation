import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="text-3xl relative bg-black-100 flex-justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full">
           <Hero />
          </div>
        </h1>
      </div>
    </main>
  );
}
