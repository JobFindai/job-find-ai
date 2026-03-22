import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center gap-7 text-center mt-10 p-10">
      <div className="flex flex-col gap-3 w-1/3">
        <h3 className="text-4xl font-semibold">About Us</h3>
        <p className=" text-muted-foreground text-sm leading-normal">
          We are not another job board. We are your career acceleration partner,
          using the <b>CARES</b> framework
        </p>
      </div>
      <div className="flex gap-2 flex-1 w-full">
        <div className="w-4/6 bg-gray-200 rounded-xl">
          <div>
            <h4>The Stripe of Career Services</h4>
            <p>
              An AI infrastructure layer powering career development across
              institutions, individuals, and enterprises
            </p>
          </div>
          <div>
            <h5>Our Mission</h5>
            <p>
              To become the Stripe of Career Services by providing institutions
              and individuals an AI infrastructure layer for end-to-end career
              guidance
            </p>
          </div>
          <div>
            <h5>Our Vision</h5>
            <p>
              To power career journeys globally with data-driven intelligence—so
              everyone, everywhere, knows exactly what&apos;s next.
            </p>
          </div>
        </div>
        <div className="w-2/6">
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
  );
}
