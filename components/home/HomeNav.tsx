import Logo from "../Logo";
import { Button } from "../ui/button";
import { PanelRight } from "lucide-react";

const navItems = ["Home", "Features", "About Us", "FAQs"];

export default function HomeNav() {
  return (
    <div className=" lg:h-[14vh] h-[11vh] flex bg-white items-center justify-between fixed top-0 w-full z-10 shadow-sm px-10">
      <div className=" h-full grid place-items-center min-w-20">
        <Logo className="static" />
      </div>
      <PanelRight size={19} className="block lg:hidden" />

      <div className="lg:flex hidden   w-2/4 justify-end gap-10 text-base h-full items-center">
        {navItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <Button className="w-1/6 hidden lg:block text-sm! h-11">
        Join the Waitlist
      </Button>
    </div>
  );
}
