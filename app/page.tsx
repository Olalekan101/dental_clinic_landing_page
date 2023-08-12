import Image from "next/image";
import Header from "./components/header";
import Mainbody from "./components/mainbody";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex flex-col h-screen overflow-clip">
      <Header />
      <div className="flex-grow">
        <Mainbody />
      </div>
      <Footer />
    </main>
  );
}
