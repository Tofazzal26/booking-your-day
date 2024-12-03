export const dynamic = "force-dynamic";
import Footer from "@/Components/Footer/page";
import Header from "@/Components/Header/page";
import HomePage from "@/Components/Home/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <div className="mt-[52vh] md:mt-[71vh]">
        <Footer />
      </div>
    </div>
  );
}
