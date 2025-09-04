import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"]
})

export default function Home() {
  return (
    <div className={`${spaceMono.className} flex flex-col lg:flex-row`}>
      <div className="w-full lg:fixed lg:h-screen lg:w-[43%] p-6">
          <Sidebar />
      </div>

      <div className="w-full lg:ml-[450px] p-6">
        <Main />
      </div>

    </div>
  );
}
