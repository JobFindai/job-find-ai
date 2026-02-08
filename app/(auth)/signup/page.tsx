import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Eye } from "lucide-react";
import Image from "next/image";

export default function Signup() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className=" w-3/5 h-3/4 flex gap-10  flex-col items-center">
        <header className=" w-full space-y-2">
          <h2 className="text-3xl font-semibold text-gray-800">
            Create your free account
          </h2>
          <span className="text-sm">Create your account for free with us</span>
        </header>
        <form className=" flex flex-col gap-5 w-full">
          <div className="space-y-3">
            <Label className="text-gray-600">Email address</Label>
            <Input className="h-11" placeholder="example@gmail.com" />
          </div>
          <div className="space-y-3">
            <Label className="text-gray-600">Password</Label>
            <InputGroup className="h-11">
              <InputGroupInput placeholder="********" type="password" />
              <InputGroupAddon align="inline-end">
                <Eye />
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div className="mt-10">
            <Button className="h-11 text-sm! bg-primary w-full">
              Continue
            </Button>
          </div>

          <div className="items-center flex flex-col w-full gap-3">
            <div className="flex items-center justify-center gap-7  w-full">
              <Separator className="w-1/3! h-0.5!" />
              <span>or</span>
              <Separator className="w-1/3! h-0.5!" />
            </div>
            <Button className="bg-gray-100 text-gray-700 w-full flex items-center  h-11 hover:bg-gray-200">
              <div className="size-5">
                <Image
                  src="/google.png"
                  alt="google"
                  width={500}
                  height={500}
                  className="size-full"
                />
              </div>
              <span>Sign in with Google</span>
            </Button>
            <span className="text-sm">
              Already have an account? <b className="text-primary">Login</b>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
