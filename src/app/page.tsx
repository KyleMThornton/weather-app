import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import Forecast from "@/components/Forecast";

export default function Home() {
  return (
    <main className="bg-zinc-100">
      <Navbar />
      <Search />
      {/* <Forecast /> */}
    </main>
  )
}
