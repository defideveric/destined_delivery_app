import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
 
export default function Page() {
  return (
    <div>
      <Image src="/destineddriver.jpg" width={900} height={1000} alt="logo"
        className="object-contain h-full w-full"/>
        <div className="absolute top-30 right-0">
          <SignIn />
        </div>
    </div>
  )
}