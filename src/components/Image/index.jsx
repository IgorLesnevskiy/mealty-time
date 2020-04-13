import React, { useCallback, useState } from "react";
import cn from "classnames";

import { LazyLoadComponent } from "react-lazy-load-image-component";

import "./styles.scss";

const PIXEL_SRC =
    "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

const Image = (props) => {
    const {
        ratio = "16x9",
        fit = "cover",
        src,
        alt,
        title,
        sources = [
            // [
            //     "(min-width: 1200px)",
            //     "https://dummyimage.com/1920x1200/2ecc71/ffffff.jpg",
            //     "image/jpeg",
            // ],
        ],
    } = props;

    const [imageStatus, setImageStatus] = useState("is-loading");

    const onErrorHandler = useCallback(() => {
        setImageStatus("is-error");
    }, []);

    const onLoadHandler = useCallback(() => {
        setImageStatus("is-loaded");
    }, []);

    const sourcesMarkup = ImageSources({ sources });

    return (
        <div className={"image"} data-object-ratio={ratio}>
            <div className={cn(["image__container", imageStatus])}>
                <LazyLoadComponent placeholder={<ImagePlaceholder />}>
                    <picture className={"image__picture"}>
                        {sourcesMarkup}
                        <img
                            className={"image__source"}
                            src={src}
                            draggable="false"
                            alt={alt}
                            title={title}
                            data-object-fit={fit}
                            onError={
                                imageStatus === "is-error"
                                    ? null
                                    : onErrorHandler
                            }
                            onLoad={
                                imageStatus === "is-loading"
                                    ? onLoadHandler
                                    : null
                            }
                        />
                    </picture>
                </LazyLoadComponent>
            </div>
        </div>
    );
};

function ImageSources({ sources = [] }) {
    if (!sources || !sources.length) {
        return null;
    }

    return sources
        .map(([resolution, src, type = "image/svg+xml"]) => {
            if (!src) {
                return null;
            }

            return <source type={type} srcSet={src} media={resolution} />;
        })
        .filter(Boolean);
}

function ImagePlaceholder({}) {
    return (
        <picture className={"image__picture"}>
            <img className={"image__source"} src={PIXEL_SRC} />
        </picture>
    );
}

export default Image;
