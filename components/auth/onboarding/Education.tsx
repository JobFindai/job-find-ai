import { PreviewFormItem } from "./PreviewFormItem";

export function Education({ value }: { value: string }) {
  return (
    <PreviewFormItem value={value} title="Eduction">
      <div className=" h-full grid grid-cols-2 gap-5 ">
        <div>
          <h4 className="font-semibold mb-1">INSTITUTION</h4>
          <span>Not set</span>
        </div>
        <div>
          <h4 className="font-semibold mb-1">DEGREE</h4>
          <span>Not set</span>
        </div>
        <div>
          <h4 className="font-semibold mb-1">FIELD OF STUDY</h4>
          <span>Not set</span>
        </div>
        <div>
          <h4 className="font-semibold mb-1">GRADUATION DATE</h4>
          <span>Not set</span>
        </div>
      </div>
    </PreviewFormItem>
  );
}
