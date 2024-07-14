import React, { ReactNode } from "react"

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

const ModalWindow: React.FC<ModalType> = ({children, isOpen, toggle}) => {
    return (
        <div onClick={toggle} 
            className={`fixed z-10 inset-0 flex justify-center items-center transition-colors 
                ${isOpen ? "visible bg-black/90" : "invisible"} w-full`
            }
        >
            <div onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalWindow
