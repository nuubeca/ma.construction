import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Service from "@/components/Service";
import VracCaculationBanner from "@/components/VracCaculationBanner";

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <Service />
      <VracCaculationBanner />
    </>
  );
}
