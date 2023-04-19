import { useData } from "@/providers/dataProvider";
import { useModal } from "@/providers/modaisProvider";

const Modal = () => {
  const { isReversed, isOpen, content, hideModal } = useModal();
  const {errorsTypes, addError} = useData();

  console.log(errorsTypes)
  return (
    <div
      className={`flex flex-row${isReversed ? "-reverse" : ""} ${
        !isOpen ? "hidden" : ""
      } transition`}
    >
      {content}
      <div
        onClick={hideModal}
        className={`h-screen w-${errorsTypes ? "3/4" : "2/4"} backdrop-blur-sm bg-black bg-opacity-20`}
      ></div>
    </div>
  );
};
export default Modal;
