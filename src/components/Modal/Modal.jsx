import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import CustomScrollBarComponent from "../CustomScrollBar";

import "./Modal.scss";

function Modal(props) {
    const { onCloseCallback = Function.prototype, title = "" } = props;

    const handleDocumentClick = useCallback((e) => {
        const target = e.target;

        if (!target.closest(".modal")) {
            onCloseCallback();
        }
    });

    const handleModalCloseClick = useCallback((e) => {
        onCloseCallback();

        e.preventDefault();
    });

    useEffect(() => {
        document.addEventListener("click", handleDocumentClick);
        disableBodyScroll(document.body);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
            enableBodyScroll(document.body);
        };
    });

    return ReactDOM.createPortal(
        <div className={"modal-wrapper"}>
            <div className={"modal"}>
                <a href="#" className={"modal__close"} onClick={handleModalCloseClick}>
                    <FontAwesomeIcon icon={["fas", "close"]} />
                </a>

                <div className={"modal__title"}>{title ? <h2>{title}</h2> : <h2>&nbsp;</h2>}</div>

                <CustomScrollBarComponent flexMode={true}>
                    <div className={"modal__content"}>{props.children}</div>
                </CustomScrollBarComponent>
            </div>
        </div>,
        document.getElementById("modal-root")
    );
}

export default Modal;
