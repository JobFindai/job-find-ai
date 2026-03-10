import Logo from "../Logo";
import { BellIcon, ChevronDown, PanelRight, SearchIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/useMobile";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const navItems = ["Dashboard", "Jobs", "Applications", "Growth", "Automation"];
export default function Navbar() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-[12vh] lg:bg-white  lg:shadow-sm  flex h-12 items-center pr-7 lg:pr-0 justify-between">
      <Logo className="static" />
      {isMobile ? (
        <PanelRight size={20} />
      ) : (
        <>
          <div className="w-2/5  font-medium items-center  text-black/70 flex justify-around h-full">
            {navItems.map((item) => (
              <span className="text-base" key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className="w-2/5 pr-7 gap-7  flex items-center text-muted-foreground justify-between">
            <InputGroup className="h-10">
              <InputGroupInput placeholder="Search jobs" />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup>

            <BellIcon size={35} />

            <Menubar className="w-2/5 h-12">
              <MenubarMenu>
                <MenubarTrigger className="flex justify-between  w-full">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span>Arthur</span>
                  <ChevronDown />
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarGroup>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                  </MenubarGroup>
                  <MenubarSeparator />
                  <MenubarGroup>
                    <MenubarItem>Share</MenubarItem>
                    <MenubarItem>Print</MenubarItem>
                  </MenubarGroup>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </>
      )}
    </div>
  );
}
