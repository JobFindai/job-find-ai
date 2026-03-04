import Loader from "@/components/Loader";
import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <Loader loading={true} />
      <AuthenticateWithRedirectCallback />
      {/* <div id="clerk-captcha" /> */}
    </>
  );
}
