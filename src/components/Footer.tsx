import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className=" bg-slate-800 text-white ">
      <div className="container pt-20 px-4 flex flex-col sm:flex-row justify-between gap-6 mx-auto">
        <div>
          <p className="text-lg font-semibold">Estate</p>
          <p className="max-w-lg text-slate-300 mt-1">
            A great platform to buy, sell and rent your properties without any
            agent or commisions.
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold">Contacts</p>
          <address className="text-slate-300 mt-1">
            <MapPin className="inline-block w-5 h-5" />
            135 Walnut St,
            <br /> Yet Another City, USA
          </address>
        </div>
      </div>
      <p className="text-center pt-20 pb-4 text-slate-400">
        &copy; 2024 EState. Design with by The Brave Coders.
      </p>
    </footer>
  );
}
