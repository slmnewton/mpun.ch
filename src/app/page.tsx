import Image from "next/image";

export default function Home() {
  return (
    <div className="text-5xl text-white">
      <a href="https://ape.express/explore/0xdfc6eee0ea0aa358eabf7bc6a5e99a68517a7cca" target="_blank" rel="noopener noreferrer" className="cursor-pointer">$MPUNCH</a>
      <Image src={"/mpunch.svg"} alt="$MPUNCH" width={420} height={420}/>
    </div>
  )
}