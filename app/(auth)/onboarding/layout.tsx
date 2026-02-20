import Image from "next/image";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute top-7 h-14 min-w-20 left-12">
        <Image
          className="object-cover size-full"
          src="/logo.png"
          alt="logo"
          width={700}
          height={700}
        />
      </div>
      {children}
    </>
  );
}
