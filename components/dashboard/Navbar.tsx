import Logo from "../Logo";
import {
  BellIcon,
  ChevronDown,
  ChevronRight,
  PanelRight,
  SearchIcon,
} from "lucide-react";
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
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";

const navItems = [
  { title: "Dashboard", active: true },
  { title: "Jobs" },
  { title: "Applications" },
  { title: "Growth" },
  { title: "Automation" },
];
export default function Navbar() {
  const isMobile = useIsMobile();

  return (
    <div className="lg:min-h-[12vh] h-[10vh] lg:bg-white  shadow-sm  flex fixed top-0 z-20 bg-inherit w-full items-center pr-7 lg:pr-0 justify-between">
      <Logo className="static" />
      {isMobile ? (
        <Sheet>
          <SheetTrigger>
            <PanelRight size={20} />
          </SheetTrigger>
          <SheetContent side="right" className="w-full justify-start!">
            <SheetHeader className=" h-[10vh] border-b shadow-sm">
              <SheetTitle className="flex items-center  h-full justify-between">
                <div className="flex items-center  gap-5">
                  <Avatar className="size-11">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="text-lg">John Arthur</span>
                </div>
                <SheetClose>
                  <ChevronRight />
                </SheetClose>
              </SheetTitle>
            </SheetHeader>
            <div className="p-5 flex flex-col gap-10">
              <div className="gap-3 flex-1 flex flex-col">
                {navItems.map((item) => (
                  <span
                    className={cn(
                      "text-lg font-medium p-3 pb-5 border-b text-muted-foreground",
                      item.active && "bg-primary/12 py-5 rounded-md text-black",
                    )}
                    key={item.title}
                  >
                    {item.title}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                <Button className="h-14 ">Explore matches</Button>
                <Button
                  className="border border-primary h-14 text-primary"
                  variant="ghost"
                >
                  Track Applications
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <>
          <div className="w-2/5  font-medium items-center  text-black/70 flex justify-around h-full">
            {navItems.map((item) => (
              <span
                className={cn(
                  "text-base",
                  item.active &&
                    "bg-primary/10 px-3 py-1.5 rounded-md text-black",
                )}
                key={item.title}
              >
                {item.title}
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
