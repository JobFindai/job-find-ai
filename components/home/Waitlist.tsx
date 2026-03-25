import Image from "next/image";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export default function Waitlist() {
  return (
    <div className="flex flex-col items-center gap-8 min-h-[50vh]  mt-10 p-10">
      <div className="text-center flex flex-col gap-5 w-2/5 leading-normal">
        <h3 className="text-4xl font-bold text-foreground/85">
          Join the Waitlist-First month free for early signups
        </h3>
        <p className="text-muted-foreground  text-sm">
          Get priority access to pilots and exclusive early-bird pricing. Refer
          friends to move up the list
        </p>
      </div>
      <div className="flex w-full ">
        <div className="w-2/4 grid place-items-center">
          <Image
            src="/waitlist-img.png"
            alt="waitlist"
            width={500}
            height={500}
            className="size-full rounded-tl-xl rounded-bl-xl object-cover"
          />
        </div>
        <div className="flex flex-col bg-primary/10 rounded-tr-xl rounded-br-xl items-center flex-1 justify-center">
          <form className="w-3/4 flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <Label htmlFor="first-name">First name</Label>
              <Input
                id="first-name"
                className="bg-white border-none shadow-none! placeholder:text-muted-foreground placeholder:text-xs h-11"
                placeholder="e.g John"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="last-name">Last name</Label>
              <Input
                id="last-name"
                className="bg-white border-none shadow-none! placeholder:text-muted-foreground placeholder:text-xs h-11"
                placeholder="e.g Doe"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                className="bg-white border-none shadow-none! placeholder:text-muted-foreground placeholder:text-xs h-11"
                placeholder="e.g johndoe22@gmail.com"
              />
            </div>
            <Button className="w-full h-11">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
