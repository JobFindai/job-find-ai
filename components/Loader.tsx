import { BounceLoader } from "react-spinners";

export default function Loader({ loading }: { loading?: boolean }) {
  return (
    <>
      {loading && (
        <div className="absolute inset-0 bg-black/70 grid place-items-center">
          <BounceLoader color="#0ea5a4 " loading={loading} />
        </div>
      )}
    </>
  );
}
