import Image from "next/image";

export default function Home() {
  return (
    <div className="text-5xl text-white">
      <a href="https://pump.fun/coin/4QHT9zvtzFofR3PUEJHGsG4B14CNVvzR9QizTtHVpump" target="_blank" rel="noopener noreferrer" className="cursor-pointer">$MPUNCH</a>
      <Image src={"/mpunch.svg"} alt="$MPUNCH" width={420} height={420}/>
    </div>
  )
}