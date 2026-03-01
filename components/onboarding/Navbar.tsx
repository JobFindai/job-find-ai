import Logo from "../Logo";

const navItems = ["Dashboard", "Jobs", "Applications", "Growth", "Automation"];
export default function Navbar() {
  return (
    <div>
      <div>
        <Logo />
      </div>
      <div>
        {navItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div></div>
    </div>
  );
}
