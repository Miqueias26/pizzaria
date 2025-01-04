import { IoMdCloseCircleOutline } from "react-icons/io";

const CloseDisplay = () => {
  <Reviews style={{ display: "hidden" }} />;
};

function Reviews() {
  return (
    <div className="z-50 absolute bg-slate-200 top-0 left-0 w-full">
      <button onClick={CloseDisplay}>
        <IoMdCloseCircleOutline />
      </button>
      <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p>
    </div>
  );
}
export default Reviews;
