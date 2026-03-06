import Logo from "../Logo";
import { PanelRight } from "lucide-react";
import { useIsMobile } from "@/hooks/useMobile";

const navItems = ["Dashboard", "Jobs", "Applications", "Growth", "Automation"];
export default function Navbar() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-[12vh] flex h-12 items-center pr-7 lg:pr-0 justify-between">
      <Logo className="static" />
      {isMobile ? (
        <PanelRight />
      ) : (
        <>
          <div className="w-2/4  font-medium items-center text-black/80 flex justify-between h-full">
            {navItems.map((item) => (
              <span className="text-base" key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className="w-1/4"></div>
        </>
      )}
    </div>
  );
}
