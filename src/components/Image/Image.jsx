import React, { useCallback, useState } from "react";
import cn from "classnames";

import "./Image.scss";

const errorImgSrc =
    "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

const Image = (props) => {
    const { ratio = "16x9", fit = "cover", src, alt, title } = props;

    const [isError, setError] = useState(false);
    const [isLoaded, setLoaded] = useState(false);

    const onErrorHandler = useCallback(() => {
        setError(true);
    }, []);

    const onLoadHandler = useCallback(() => {
        setLoaded(true);
    }, []);

    return (
        <div className={"image"} data-object-ratio={ratio}>
            <div className="image__container">
                <picture className="image__picture">
                    <img
                        className={cn([
                            "image__source",
                            isError
                                ? "is-error"
                                : isLoaded
                                ? "is-loaded"
                                : "is-loading",
                        ])}
                        src={isError ? errorImgSrc : src}
                        onError={isError ? null : onErrorHandler}
                        onLoad={isLoaded ? null : onLoadHandler}
                        data-src={src}
                        draggable="false"
                        alt={alt}
                        title={title}
                        data-object-fit={fit}
                    />
                </picture>
            </div>
        </div>
    );
};

export default Image;
