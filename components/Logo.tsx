import Image from "next/image";

export default function Logo() {
  return (
    <div className="size-5">
      <Image
        src="/google.png"
        alt="google"
        width={500}
        height={500}
        className="size-full"
      />
    </div>
  );
}
