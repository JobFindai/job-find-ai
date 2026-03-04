import Logo from "../Logo";

const navItems = ["Dashboard", "Jobs", "Applications", "Growth", "Automation"];
export default function Navbar() {
  return (
    <div className="min-h-[12vh] flex h-12 items-center justify-between">
      <Logo className="static" />
      <div className="w-2/4  font-medium items-center text-black/80 flex justify-between h-full">
        {navItems.map((item) => (
          <span className="text-base" key={item}>
            {item}
          </span>
        ))}
      </div>
      <div className="w-1/4"></div>
    </div>
  );
}
