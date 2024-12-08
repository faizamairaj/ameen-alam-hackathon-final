import Banner1 from "@/components/Banner1";
import Banner2 from "@/components/Banner2";
import Cardsection from "@/components/Cardsection";
import Cardsection1 from "@/components/Cardsection1";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Cardsection/>
      <Cardsection1/>
      <Banner1/>
      <Banner2/>
    </div>
  );
}
