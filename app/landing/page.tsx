import Navbar from "../components/Navbar";
import Register from "../components/Register";
import Documents from "../components/Documents";
export default function Home() {
  return (
    <main className="mb-24">
      <Navbar />
      <div className="text-[#2A56FE] text-sm 2xl:text-base border-b py-2 2xl:pl-10 pl-4">
        Register Driver
      </div>
      <div className="w-screen flex">
        <Register />
        <Documents />
      </div>
    </main>
  );
}
