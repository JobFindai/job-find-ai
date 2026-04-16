import { PreviewFormItem } from "./PreviewFormItem";

export function BasicInfo({ value }: { value: string }) {
  return (
    <PreviewFormItem value={value} title="Basic Info">
      <div className=" h-full grid grid-cols-2 gap-5 ">
        <div>
          <h4 className="font-semibold mb-1">LOCATION</h4>
          <span>Not set</span>
        </div>
        <div>
          <h4 className="font-semibold mb-1">YEARS OF EXPERIENCE</h4>
          <span>Not set</span>
        </div>
        <div>
          <h4 className="font-semibold mb-1">BI0</h4>
          <span>Not set</span>
        </div>
        <div>
          <h4 className="font-semibold mb-1">WORK AUTHORIZATION</h4>
          <span>Not set</span>
        </div>
        <div>
          <h4 className="font-semibold mb-1">SPONSORSHIP REQUIRED</h4>
          <span className="bg-gray-100 rounded-sm border px-2 font-medium">
            No
          </span>
        </div>
      </div>
    </PreviewFormItem>
  );
}
