import React from "react";
import style from "./style.module.css";


export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={style.modalOverlay} onClick={onClose}>
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={style.modalClose} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};


