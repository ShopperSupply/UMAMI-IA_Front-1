import { useModal } from "@/providers/modaisProvider";
import { NextComponentType } from "next";



const Modal = () => {

    const { isReversed, isOpen, content, hideModal } = useModal();

     return(
        <div className={`flex flex-row${isReversed && "-reverse"}`}>
            {content}
        </div>
     )
        
}
export default Modal