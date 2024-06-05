import Top_section from "@/components/Top_section";
import Header from "@/components/Header";
import Image from "next/image";
import Home_page from "@/components/Home_page";
import Homepg_content from "@/components/Homepg_content";
import Footer from "@/components/Footer";
import Firebase_config from "@/components/Firebase_config";

export default function Home() {
  return (
    <main className="mx-auto m-0 bg-custom-gradient text-white">
      <Header />
      <Top_section/>
      <Home_page />
      <Homepg_content />
      <Footer />
    </main>
  );
}
