import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "../Logo";

export default function Footer() {
  return (
    <div className="flex flex-col gap-20 min-h-screen items-center mt-16    ">
      <div className="bg-primary h-[50vh] rounded-xl p-6 w-5/6">
        <div className="bg-white/10 rounded-xl gap-7 shadow-sm backdrop-blur-xl h-full border border-white/50 flex flex-col items-center justify-center text-white p-5">
          <h2 className="text-4xl font-bold tracking-wider">
            Ready to Transform Your Career?
          </h2>
          <p className="text-sm w-2/4 text-center">
            Join thousands of professionals who've discovered their perfect role
            through intelligent job matching. Your next opportunity is waiting.
          </p>
          <Button className="bg-gray-100 hover:bg-gray-300 text-foreground h-11 text-sm! w-2/12">
            Start Here
          </Button>
        </div>
      </div>
      <div className="bg-primary/10 flex flex-col lg:flex-row lg:p-10 mt-16  justify-around flex-1 w-full">
        <div className="flex flex-col pl-16  w-1/3 gap-3">
          <div className="flex items-center min-w-20">
            <Logo className="static" />
          </div>
          <p className="leading-normal w-3/5 text-sm">
            AI-powered career progression platform helping students and
            professionals navigate their career journey with predictive insights
            and personalized guidance
          </p>
        </div>
        <div className="w-1/3 flex flex-col gap-3 pl-16 justify-center">
          <h4 className="mb-1.5 font-medium text-lg">Company</h4>
          <span>About us</span>
          <span>Features</span>
          <span>How it works</span>
          <span>FAQs</span>
          <span>Terms</span>
        </div>
        <div className="text-muted-foreground text-sm flex flex-col gap-5">
          <h4 className="font-medium text-foreground text-lg">Contact</h4>
          <span className="flex items-center gap-1">
            <MapPin size={17} />8 The Green, Ste E Dover, Delaware. Zip code
            19901. USA
          </span>
          <span className="flex items-center gap-1">
            <Mail size={17} />
            info@jobfindai.io
          </span>
          <div className="flex gap-2 text-foreground">
            <Instagram size={20} />
            <Linkedin size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
