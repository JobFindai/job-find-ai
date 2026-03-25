import Image from "next/image";
import Fadeup from "../animation/Fadeup";

export default function AboutUs() {
  return (
    <Fadeup>
      <div className="min-h-[70vh] flex flex-col items-center gap-7 text-center mt-10 lg:p-10 p-5">
        <div className="flex flex-col gap-3 lg:w-1/3">
          <h3 className="lg:text-4xl text-2xl font-semibold">About Us</h3>
          <p className=" text-muted-foreground text-sm leading-normal">
            We are not another job board. We are your career acceleration
            partner, using the <b>CARES</b> framework
          </p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row lg:gap-2 gap-5 flex-1 w-full">
          <div className="lg:w-4/6 px-5 py-7 lg:p-0  bg-gray-200 rounded-xl grid place-items-center">
            <div className=" lg:w-2/4 h-full leading-normal flex flex-col gap-7 lg:gap-0 justify-evenly items-center">
              <div className="flex flex-col gap-2">
                <h4 className="lg:text-4xl text-xl font-semibold">
                  The Stripe of Career Services
                </h4>
                <p className="text-sm">
                  An AI infrastructure layer powering career development across
                  institutions, individuals, and enterprises
                </p>
              </div>
              <div className="flex flex-col lg:gap-1 gap-2">
                <h5 className="text-blue-600 lg:text-xl text-lg font-medium">
                  Our Mission
                </h5>
                <p className="text-sm">
                  To become the Stripe of Career Services by providing
                  institutions and individuals an AI infrastructure layer for
                  end-to-end career guidance
                </p>
              </div>
              <div className="flex flex-col lg:gap-1 gap-2">
                <h5 className="text-blue-600 lg:text-xl text-lg font-medium">
                  Our Vision
                </h5>
                <p className="text-sm">
                  To power career journeys globally with data-driven
                  intelligence—so everyone, everywhere, knows exactly
                  what&apos;s next.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/6">
            <Image
              src="/about-us.png"
              alt="about-us"
              width={500}
              height={500}
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </Fadeup>
  );
}
