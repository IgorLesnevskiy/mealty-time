import React, { useCallback } from "react";

import Floor from "../../components/Floor";
import Header from "../../components/Header";
import FilterBar from "../../components/FilterBar";
import DishesList from "../../components/DishesList";

const FilterBarProps = {};

const data = {
    dishes: [
        {
            id: "id-dish-1",
            description:
                "Рисовая каша — это великолепное сочетание быстрых и сложных углеводов, которое придаст вам сил и будет обеспечивать энергией на протяжении всего дня. Она содержит низкое количество калорий и отлично воспринимается организмом.",
            ingredients:
                "мука высший сорт, сыр рикотта, шпинат свежемороженный, меланж яичный, масло сливочное 82% (пастеризованные сливки), масло оливковое шалфей, соль.",
            compoundList: [
                {
                    amount: "13.6",
                    measure: "на 100 грамм",
                    description: "бекли",
                },
                {
                    amount: "19.5",
                    measure: "на 100 грамм",
                    description: "жиры",
                },
                {
                    amount: "5.2",
                    measure: "на 100 грамм",
                    description: "углеводы",
                },
                {
                    amount: "235",
                    measure: "на 100 грамм",
                    description: "калорийность",
                },
                {
                    amount: "470",
                    measure: "г",
                    description: "общая",
                },
            ],
            price: {
                value: "120",
            },
            title:
                "Каша рисовая с соусом из черной смородины и кедровыми орешками",
            inFavorite: {
                type: "checkbox",
                id: "foo-bar-baz-2",
                name: "addToFavorite",
                isChecked: false,
                icon: "heart",
                value: "all",
            },
            image: {
                src: require("../../resources/images/dishes/1.png"),
                alt: "dish 1",
                title: "dish 1",
            },
            tip: {
                content: "Можно брать на два дня на обед",
                position: "left",
            },
        },
        {
            id: "id-dish-2",
            description:
                "Рисовая каша — это великолепное сочетание быстрых и сложных углеводов, которое придаст вам сил и будет обеспечивать энергией на протяжении всего дня. Она содержит низкое количество калорий и отлично воспринимается организмом.",
            ingredients:
                "мука высший сорт, сыр рикотта, шпинат свежемороженный, меланж яичный, масло сливочное 82% (пастеризованные сливки), масло оливковое шалфей, соль.",
            compoundList: [
                {
                    amount: "13.6",
                    measure: "на 100 грамм",
                    description: "бекли",
                },
                {
                    amount: "19.5",
                    measure: "на 100 грамм",
                    description: "жиры",
                },
                {
                    amount: "5.2",
                    measure: "на 100 грамм",
                    description: "углеводы",
                },
                {
                    amount: "235",
                    measure: "на 100 грамм",
                    description: "калорийность",
                },
                {
                    amount: "470",
                    measure: "г",
                    description: "общая",
                },
            ],
            price: {
                value: "120",
            },
            title:
                "Каша рисовая с соусом из черной смородины и кедровыми орешками",
            inFavorite: {
                type: "checkbox",
                id: "foo-bar-baz-2",
                name: "addToFavorite",
                isChecked: false,
                icon: "heart",
                value: "all",
            },
            image: {
                src: require("../../resources/images/dishes/1.png"),
                alt: "dish 1",
                title: "dish 1",
            },
            tip: {
                content: "Можно брать на два дня на обед",
                position: "left",
            },
        },
        {
            id: "id-dish-3",
            description:
                "Рисовая каша — это великолепное сочетание быстрых и сложных углеводов, которое придаст вам сил и будет обеспечивать энергией на протяжении всего дня. Она содержит низкое количество калорий и отлично воспринимается организмом.",
            ingredients:
                "мука высший сорт, сыр рикотта, шпинат свежемороженный, меланж яичный, масло сливочное 82% (пастеризованные сливки), масло оливковое шалфей, соль.",
            compoundList: [
                {
                    amount: "13.6",
                    measure: "на 100 грамм",
                    description: "бекли",
                },
                {
                    amount: "19.5",
                    measure: "на 100 грамм",
                    description: "жиры",
                },
                {
                    amount: "5.2",
                    measure: "на 100 грамм",
                    description: "углеводы",
                },
                {
                    amount: "235",
                    measure: "на 100 грамм",
                    description: "калорийность",
                },
                {
                    amount: "470",
                    measure: "г",
                    description: "общая",
                },
            ],
            price: {
                value: "120",
            },
            title:
                "Каша рисовая с соусом из черной смородины и кедровыми орешками",
            inFavorite: {
                type: "checkbox",
                id: "foo-bar-baz-2",
                name: "addToFavorite",
                isChecked: false,
                icon: "heart",
                value: "all",
            },
            image: {
                src: require("../../resources/images/dishes/1.png"),
                alt: "dish 1",
                title: "dish 1",
            },
            tip: {
                content: "Можно брать на два дня на обед",
                position: "left",
            },
        },
    ],
};

const Index = () => {
    const onFilterBarChange = useCallback((e) => {
        console.log(e);
    }, []);

    return (
        <React.Fragment>
            <Floor offsetTop={"medium"} offsetBottom={"medium"}>
                <Header />
            </Floor>

            <Floor>
                <FilterBar />
            </Floor>

            <Floor offsetTop={"none"} offsetBottom={"none"}>
                <DishesList dishes={data.dishes} />
            </Floor>
        </React.Fragment>
    );
};

export default Index;
