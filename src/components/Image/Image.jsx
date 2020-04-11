import React from "react";

import "./Image.scss";

const Image = () => {
    return (
        <div>
            <div className={"image"} data-object-ratio={"16x9"}>
                <div className="image__container">
                    <picture className="image__picture">
                        <img
                            className="image__source lazyload"
                            src={require("../../images/dishes/1.png")}
                            // onError="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='; this.classList.add('lazyerror')"
                            data-src="https://cdn.kodixauto.ru/media/image/5e73524738ce19000135eae9"
                            draggable="false"
                            alt=""
                            title=""
                            data-object-fit="cover"
                        />
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default Image;
