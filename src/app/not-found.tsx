import { Space_Mono } from "next/font/google"
import Link from "next/link";



const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"]
})

export default function NotFound() {
  return (
    <div className={`${spaceMono.className}`}>
      <div className="flex min-h-screen items-center justify-center flex-col">
        <h1 className="text-3xl font-bold">404</h1>
        <p>Page Not Found</p>
        <Link href={"./"}
        className="mt-3 border rounded px-4 py-1 shadow-2xl bg hover:bg-neutral-800 duration-150">
        Return
        </Link>
      </div>
    </div>
    );
  }