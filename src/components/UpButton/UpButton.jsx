import React, { useEffect, useCallback, useState } from "react";
import cn from "classnames";
import anime from "animejs/lib/anime.es.js";
import _throttle from "lodash/throttle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./UpButton.scss";

const DEFAULT_OPTIONS = {
    startScrollPosition: 100, // px, с какой точки начинать показывать стрелку
    onScrollHandlerDelay: 150, // ms, время throttle-задержки
    arrowVisibilityClass: "is-visible", // класс для показа кнопки
};

// document.addEventListener('scroll', _throttle(this.onScrollHandler.bind(this), this.config.onScrollHandlerDelay));
const UpButton = (props) => {
    const {
        startScrollPosition = DEFAULT_OPTIONS.startScrollPosition,
        onScrollHandlerDelay = DEFAULT_OPTIONS.onScrollHandlerDelay,
    } = props;

    const [isArrowVisible, setArrowVisibility] = useState(false);

    const onButtonClickHandler = useCallback(() => {
        scrollToPoint();
    }, []);

    useEffect(() => {
        const onScrollHandler = _throttle(function (e) {
            const shouldShowButton = getScrollTopValue() > startScrollPosition;

            if (shouldShowButton && !isArrowVisible) {
                setArrowVisibility(true);
            } else if (!shouldShowButton && isArrowVisible) {
                setArrowVisibility(false);
            }
        }, onScrollHandlerDelay);

        document.addEventListener("scroll", onScrollHandler);

        return () => {
            document.removeEventListener("scroll", onScrollHandler);
        };
    }, [isArrowVisible, onScrollHandlerDelay, startScrollPosition]);

    return (
        <button
            className={cn("up-button", isArrowVisible ? "is-visible" : "")}
            onClick={onButtonClickHandler}
        >
            <FontAwesomeIcon
                icon={["fas", "arrow-up"]}
                className={"up-button__icon"}
            />
        </button>
    );
};

export default UpButton;

//*****

function scrollToPoint(targetPoint = 0) {
    return anime({
        duration: 500, // ms, длительной анимация прокручивания
        easing: "cubicBezier(0.215, 0.61, 0.355, 1)", // типа анимации
        targets: [document.documentElement, document.body],
        scrollTop: targetPoint,
    }).finished;
}

function getScrollTopValue() {
    const el = document.scrollingElement || document.documentElement;

    return el.scrollTop;
}
