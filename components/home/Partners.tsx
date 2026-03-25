import Image from "next/image";

const partners = ["meta", "nestle", "goog", "amazon", "microsoft", "coke"];
export default function Partners() {
  return (
    <div className="lg:h-[20vh] flex flex-col px-3  gap-5">
      <h3 className="text-center font-semibold lg:text-2xl">
        Job opportunities from over top companies and more
      </h3>
      <div className="flex flex-1  gap-5 justify-evenly items-center">
        {partners.map((item) => (
          <div key={item} className="lg:h-10 ">
            <Image
              src={`/${item}.png`}
              alt={item}
              width={500}
              height={500}
              className="object-cover size-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
