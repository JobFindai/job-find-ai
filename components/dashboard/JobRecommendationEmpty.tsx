import Image from "next/image";

export default function JobRecommendationEmpty() {
  return (
    <div className=" flex flex-col pt-10 gap-7 items-center justify-center">
      <h3 className="text-xl font-medium">No recommendations found</h3>
      <div className=" w-full">
        <Image
          src="/empty-img.png"
          alt="empty"
          width={500}
          height={500}
          className="size-full object-cover"
        />
      </div>
    </div>
  );
}
