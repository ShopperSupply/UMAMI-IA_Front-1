import { useModal } from "@/providers/modaisProvider";
import { NextComponentType } from "next";

const Modal = () => {
  const { isReversed, isOpen, content, hideModal } = useModal();

  return (
    <div
      className={`flex flex-row${isReversed ? "-reverse" : ""} ${
        !isOpen ? "hidden" : ""
      }`}
    >
      {content}
      <div
        onClick={hideModal}
        className="h-screen w-3/4 backdrop-blur-sm bg-black bg-opacity-25"
      ></div>
    </div>
  );
};
export default Modal;
