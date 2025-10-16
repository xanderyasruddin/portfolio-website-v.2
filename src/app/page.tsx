import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export default function Home() {
  return (
    <div className={`${inter.className} flex flex-col lg:flex-row`}>
      <div className="w-full lg:fixed lg:h-screen lg:w-[43%] p-6">
          <Sidebar />
      </div>

      <div className="w-full lg:ml-[450px] p-6">
        <Main />
      </div>

    </div>
  );
}
