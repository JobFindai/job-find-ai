import { PreviewFormItem } from "./PreviewFormItem";

export function Links({ value }: { value: string }) {
  return (
    <PreviewFormItem value={value} title="Links">
      <div className=" w-3/4 flex flex-col gap-2.5">
        <div className="flex items-center gap-3 justify-between">
          <h4 className="font-semibold">INSTITUTION</h4>
          <span>Not set</span>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <h4 className="font-semibold">DEGREE</h4>
          <span>Not set</span>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <h4 className="font-semibold">FIELD OF STUDY</h4>
          <span>Not set</span>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <h4 className="font-semibold">GRADUATION DATE</h4>
          <span>Not set</span>
        </div>
      </div>
    </PreviewFormItem>
  );
}
