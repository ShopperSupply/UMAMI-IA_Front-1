import { useData } from "@/providers/dataProvider";
import { useModal } from "@/providers/modaisProvider";

const Modal = () => {
  const { isReversed, isOpen, content, hideModal } = useModal();
  const {errorsTypes, addError} = useData();

  console.log(errorsTypes)
  return (
    <div
      className={`flex flex-row absolute w-screen z-0 ${isReversed ? "-reverse" : ""} ${
        !isOpen ? "hidden" : ""
      } transition `}
    >
      {content}
      <div
        onClick={hideModal}
        className={`h-screen ${
          errorsTypes ? "w-3/4" : "w-2/4"
        } backdrop-blur-sm bg-black bg-opacity-20`}
      ></div>
    </div>
  );
};
export default Modal;
