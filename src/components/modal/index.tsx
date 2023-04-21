import { useData } from "@/providers/dataProvider";
import { useModal } from "@/providers/modaisProvider";

const Modal = () => {
  const { isReversed, isOpen, content, hideModal } = useModal();
  const {errorsTypes, addError} = useData();

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
          errorsTypes ? "w-screen" : "w-3/4"
        } backdrop-blur-sm bg-black bg-opacity-20`}
      ></div>
    </div>
  );
};
export default Modal;
