import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";

const topics = [
  {
    title: "ADAS (Advanced Driver Assistance Systems)",
    desc: "Real-time vehicle perception and intelligent decision-making."
  },
  {
    title: "Electric Powertrain",
    desc: "Explore electric drive systems, battery management, and control units."
  },
  {
    title: "Automotive Embedded Systems",
    desc: "Design and programming of microcontrollers and automotive ECUs."
  },
  {
    title: "Vehicle Networks",
    desc: "CAN, LIN, FlexRay, and Ethernet-based in-vehicle communication."
  },
  {
    title: "Automotive Sensors & Actuators",
    desc: "Understanding sensor fusion and actuator control in real-world vehicles."
  },
  {
    title: "AI in Mobility",
    desc: "Machine learning models for vehicle behavior, diagnostics, and autonomy."
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6">
      <Header />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((item, index) => (
          <InfoCard key={index} title={item.title} desc={item.desc} delay={index * 0.2} />
        ))}
      </section>
      <Footer />
    </main>
   );
  }