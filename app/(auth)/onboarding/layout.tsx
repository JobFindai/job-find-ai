import Image from "next/image";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" py-10 pb-20 w-full">
      <div className="absolute top-10 lg:top-7 lg:h-14 h-12 min-w-20 lg:left-12 left-5">
        <Image
          className="object-cover size-full"
          src="/logo.png"
          alt="logo"
          width={700}
          height={700}
        />
      </div>
      {children}
    </div>
  );
}
