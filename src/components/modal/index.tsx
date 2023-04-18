import { useData } from "@/providers/dataProvider";
import { useModal } from "@/providers/modaisProvider";

const Modal = () => {
  const { isReversed, isOpen, content, hideModal } = useModal();
  const {errors, addError} = useData();

  return (
    <div
      className={`flex flex-row${isReversed ? "-reverse" : ""} ${
        !isOpen ? "hidden" : ""
      } transition`}
    >
      {content}
      <div
        onClick={hideModal}
        className={`h-screen w-${!errors ? "3/4" : "2/4"} backdrop-blur-sm bg-black bg-opacity-20 z-0`}
      ></div>
    </div>
  );
};
export default Modal;
