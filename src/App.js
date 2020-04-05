import React, {useEffect} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas);


function App() {
    return (
        <div className="page">
            <div className="page__inner">
                <div className="floor floor--type-header">
                    <div className="floor__inner">
                        <header className="header">
                            <div className="header__logo">
                                <div className={"logo"}>
                                    <a href={"/"}>
                                        <img src={require('./logo.png')} alt="Mealty Time" title="Mealty Time"
                                             width={"165"}/>
                                    </a>
                                </div>
                            </div>
                            <div className="header__title">
                                Меню
                            </div>
                            <div className="header__search">
                                <div className="search">
                                    <FontAwesomeIcon icon={['fas', 'search']} className={"search__icon"}/>
                                    <input type={"search"} className="search__input" placeholder={"Найти..."}/>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>

                <div className="floor">
                    <div className="floor__inner">
                        <div className={"filter"}>
                            <div className={"filter__item"}>
                                <label className={"label-button"}>
                                    <input className={"label-button__control"} type={"radio"} name={"foo"}
                                           defaultChecked={true}
                                           value={1}/>
                                    <span className={"label-button__content"}>
                                            Все блюда
                                        </span>
                                </label>
                            </div>
                            <div className={"filter__item"}>
                                <label className={"label-button"}>
                                    <input className={"label-button__control"} type={"radio"} name={"foo"}
                                           value={2}/>
                                    <span className={"label-button__content"}>
                                            Много белков
                                        </span>
                                </label>
                            </div>
                            <div className={"filter__item"}>
                                <label className={"label-button"}>
                                    <input className={"label-button__control"} type={"radio"} name={"foo"}
                                           value={3}/>
                                    <span className={"label-button__content"}>
                                            Много жиров
                                        </span>
                                </label>
                            </div>
                            <div className={"filter__item"}>
                                <label className={"label-button"}>
                                    <input className={"label-button__control"} type={"radio"} name={"foo"}
                                           defaultChecked={true}
                                           value={1}/>
                                    <span className={"label-button__content"}>
                                            Много углеводов
                                        </span>
                                </label>
                            </div>
                            <div className={"filter__item"}>
                                <label className={"label-button"}>
                                    <input className={"label-button__control"} type={"radio"} name={"foo"}
                                           value={2}/>
                                    <span className={"label-button__content"}>
                                            Самые дешевые
                                        </span>
                                </label>
                            </div>
                            <div className={"filter__item"}>
                                <label className={"label-button"}>
                                    <input className={"label-button__control"} type={"radio"} name={"foo"}
                                           value={3}/>
                                    <span className={"label-button__content"}>
                                            Самые калорийные
                                        </span>
                                </label>
                            </div>

                            <div className={"filter__item"}>
                                <label className={"label-button"}>
                                    <input className={"label-button__control"} type={"radio"} name={"foo"}
                                           defaultChecked={true}
                                           value={1}/>
                                    <span className={"label-button__content"}>
                                            Самые объемные
                                        </span>
                                </label>
                            </div>
                            <div className={"filter__item"}>
                                <label className={"label-button"}>
                                    <input className={"label-button__control"} type={"radio"} name={"foo"}
                                           value={3}/>
                                    <span className={"label-button__content"}>
                                        <FontAwesomeIcon icon={['fas', 'heart']}></FontAwesomeIcon>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="floor floor--indent-none">
                    <div className="floor__inner">

                        <div className={"dishes"}>
                            <div className={"dishes__item"}>

                                <div className={"dish"}>
                                    <div className={"dish__promo"}>
                                        <div className={"dish__price"}>
                                            <div className={"price"}>
                                                120 <span className={"price__currency"}>руб.</span>
                                            </div>
                                        </div>
                                        <div className={"dish__title"}>

                                            <div className={"dish-title"}>
                                                <div className={"dish-title__action"}>
                                                    <label className={"label-icon"}>
                                                        <input className={"label-icon__control"} type={"checkbox"}
                                                               name={"foo"}
                                                               value={3}/>
                                                        <span className={"label-icon__content"}>
                                                            <FontAwesomeIcon icon={['fas', 'heart']}></FontAwesomeIcon>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className={"dish-title__text"}>
                                                    <h3>Каша рисовая с соусом из черной смородины и кедровыми орешками</h3>
                                                </div>
                                            </div>

                                        </div>
                                        <div className={"dish__image"}>

                                            <div className={"image"} data-object-ratio={"16x9"}>
                                                <div className="image__container">
                                                    <picture className="image__picture">
                                                        <img
                                                            className="image__source lazyload"
                                                            src={require('./images/dishes/1.png')}
                                                            // onError="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='; this.classList.add('lazyerror')"
                                                            data-src="https://cdn.kodixauto.ru/media/image/5e73524738ce19000135eae9"
                                                            draggable="false"
                                                            alt="" title=""
                                                            data-object-fit="cover"/>
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"dish__info"}>
                                        <div className={"dish__tip"}></div>

                                        <div className={"dish__description"}>
                                            Рисовая каша — это великолепное сочетание быстрых и сложных углеводов, которое придаст вам сил и будет обеспечивать энергией на протяжении всего дня. Она содержит низкое количество калорий и отлично воспринимается организмом.
                                        </div>

                                        <div className={"dish__compound-wrapper"}>

                                            <div className={"dish__compound-list"}>
                                                <ul className={"compound-list"}>
                                                    <li className={"compound-list__row"}>
                                                        <div class={"compound-list__measure"}>
                                                            350
                                                        </div>
                                                        <div class={"compound-list__description"}>
                                                            вес/объем <span>(г/мл)</span>
                                                        </div>
                                                    </li>
                                                    <li className={"compound-list__row"}>
                                                        <div className={"compound-list__measure"}>
                                                            350
                                                        </div>
                                                        <div className={"compound-list__description"}>
                                                            вес/объем <span>(г/мл)</span>
                                                        </div>
                                                    </li>
                                                    <li className={"compound-list__row"}>
                                                        <div className={"compound-list__measure"}>
                                                            350
                                                        </div>
                                                        <div className={"compound-list__description"}>
                                                            вес/объем <span>(г/мл)</span>
                                                        </div>
                                                    </li>
                                                    <li className={"compound-list__row"}>
                                                        <div className={"compound-list__measure"}>
                                                            350
                                                        </div>
                                                        <div className={"compound-list__description"}>
                                                            вес/объем <span>(г/мл)</span>
                                                        </div>
                                                    </li>
                                                    <li className={"compound-list__row"}>
                                                        <div className={"compound-list__measure"}>
                                                            350
                                                        </div>
                                                        <div className={"compound-list__description"}>
                                                            вес/объем <span>(г/мл)</span>
                                                        </div>
                                                    </li>
                                                    <li className={"compound-list__row"}>
                                                        <div className={"compound-list__measure"}>
                                                            350
                                                        </div>
                                                        <div className={"compound-list__description"}>
                                                            вес/объем <span>(г/мл)</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className={"dish__ingredients-wrapper"}>
                                                <div className={"dish__ingredients-title"}>Состав:</div>
                                                <div className={"dish__ingredients"}>
                                                    мука высший сорт, сыр рикотта, шпинат свежемороженный, меланж
                                                    яичный, масло сливочное 82% (пастеризованные сливки), масло
                                                    оливковое, шалфей, соль.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"dishes__item"}>

                                <div className={"dish"}>
                                    <div className={"dish__promo"}>
                                        <div className={"dish__price"}>
                                            <div className={"price"}>
                                                120 <span className={"price__currency"}>руб.</span>
                                            </div>
                                        </div>
                                        <div className={"dish__title"}>

                                            <div className={"dish-title"}>
                                                <div className={"dish-title__action"}>
                                                    <label className={"label-icon"}>
                                                        <input className={"label-icon__control"} type={"checkbox"}
                                                               name={"foo"}
                                                               value={3}/>
                                                        <span className={"label-icon__content"}>
                                                            <FontAwesomeIcon icon={['fas', 'heart']}></FontAwesomeIcon>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className={"dish-title__text"}>
                                                    <h3>Каша рисовая с соусом из черной смородины и кедровыми
                                                        орешками</h3>
                                                </div>
                                            </div>

                                        </div>
                                        <div className={"dish__image"}>

                                            <div className={"image"} data-object-ratio={"16x9"}>
                                                <div className="image__container">
                                                    <picture className="image__picture">
                                                        <img
                                                            className="image__source lazyload"
                                                            src={require('./images/dishes/1.png')}
                                                            // onError="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='; this.classList.add('lazyerror')"
                                                            data-src="https://cdn.kodixauto.ru/media/image/5e73524738ce19000135eae9"
                                                            draggable="false"
                                                            alt="" title=""
                                                            data-object-fit="cover"/>
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"dish__info"}>
                                        <div className={"dish__tip"}></div>

                                        <div className={"dish__description"}>
                                            Рисовая каша — это великолепное сочетание быстрых и сложных углеводов,
                                            которое придаст вам сил и будет обеспечивать энергией на протяжении всего
                                            дня. Она содержит низкое количество калорий и отлично воспринимается
                                            организмом.
                                        </div>

                                        <div className={"dish__compound-wrapper"}>

                                            <div className={"dish__compound-list"}>
                                                <ul className={"compound-list"}>
                                                    <li className={"compound-list__row"}>
                                                        <div className={"compound-list__measure"}>
                                                            350
                                                        </div>
                                                        <div className={"compound-list__description"}>
                                                            вес/объем <span>(г/мл)</span>
                                                        </div>
                                                    </li>
                                                    <li className={"compound-list__row"}>
                                                        <div className={"compound-list__measure"}>
                                                            350
                                                        </div>
                                                        <div className={"compound-list__description"}>
                                                            вес/объем <span>(г/мл)</span>
                                                        </div>
                                                    </li>
                                                    <li className={"compound-list__row"}>
                                                        <div className={"compound-list__measure"}>
                                                            350
                                                        </div>
                                                        <div className={"compound-list__description"}>
                                                            вес/объем <span>(г/мл)</span>
                                                        </div>
                                                    </li>
                                                    <li className={"compound-list__row"}>
                                                        <div className={"compound-list__measure"}>
                                                            350
                                                        </div>
                                                        <div className={"compound-list__description"}>
                                                            вес/объем <span>(г/мл)</span>
                                                        </div>
                                                    </li>
                                                    <li className={"compound-list__row"}>
                                                        <div className={"compound-list__measure"}>
                                                            350
                                                        </div>
                                                        <div className={"compound-list__description"}>
                                                            вес/объем <span>(г/мл)</span>
                                                        </div>
                                                    </li>
                                                    <li className={"compound-list__row"}>
                                                        <div className={"compound-list__measure"}>
                                                            350
                                                        </div>
                                                        <div className={"compound-list__description"}>
                                                            вес/объем <span>(г/мл)</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className={"dish__ingredients-wrapper"}>
                                                <div className={"dish__ingredients-title"}>Состав:</div>
                                                <div className={"dish__ingredients"}>
                                                    мука высший сорт, сыр рикотта, шпинат свежемороженный, меланж
                                                    яичный, масло сливочное 82% (пастеризованные сливки), масло
                                                    оливковое, шалфей, соль.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"dishes__item"}>

                                <div className={"dish"}>
                                    <div className={"dish__promo"}>
                                        <div className={"dish__price"}>
                                            <div className={"price"}>
                                                120 <span className={"price__currency"}>руб.</span>
                                            </div>
                                        </div>
                                        <div className={"dish__title"}>

                                            <div className={"dish-title"}>
                                                <div className={"dish-title__action"}>
                                                    <label className={"label-icon"}>
                                                        <input className={"label-icon__control"} type={"checkbox"}
                                                               name={"foo"}
                                                               value={3}/>
                                                        <span className={"label-icon__content"}>
                                                            <FontAwesomeIcon icon={['fas', 'heart']}></FontAwesomeIcon>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className={"dish-title__text"}>
                                                    <h3>Каша рисовая с соусом из черной смородины и кедровыми
                                                        орешками</h3>
                                                </div>
                                            </div>

                                        </div>
                                        <div className={"dish__image"}>

                                            <div className={"image"} data-object-ratio={"16x9"}>
                                                <div className="image__container">
                                                    <picture className="image__picture">
                                                        <img
                                                            className="image__source lazyload"
                                                            src={require('./images/dishes/1.png')}
                                                            // onError="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='; this.classList.add('lazyerror')"
                                                            data-src="https://cdn.kodixauto.ru/media/image/5e73524738ce19000135eae9"
                                                            draggable="false"
                                                            alt="" title=""
                                                            data-object-fit="cover"/>
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"dish__info"}>
                                        <div className={"dish__tip"}></div>

                                        <div className={"dish__description"}>
                                            Рисовая каша — это великолепное сочетание быстрых и сложных углеводов,
                                            которое придаст вам сил и будет обеспечивать энергией на протяжении всего
                                            дня. Она содержит низкое количество калорий и отлично воспринимается
                                            организмом.
                                        </div>

                                        <div className={"dish__compound-wrapper"}>

                                            <div className={"dish__compound-list"}>
                                                <ul className={"compound-list"}>
                                                    <li className={"compound-list__row"}>
                                                        <div className={"compound-list__measure"}>
                                                            350
                                                        </div>
                                                        <div className={"compound-list__description"}>
                                                            вес/объем <span>(г/мл)</span>
                                                        </div>
                                                    </li>
                                                    <li className={"compound-list__row"}>
                                                        <div className={"compound-list__measure"}>
                                                            350
                                                        </div>
                                                        <div className={"compound-list__description"}>
                                                            вес/объем <span>(г/мл)</span>
                                                        </div>
                                                    </li>
                                                    <li className={"compound-list__row"}>
                                                        <div className={"compound-list__measure"}>
                                                            350
                                                        </div>
                                                        <div className={"compound-list__description"}>
                                                            вес/объем <span>(г/мл)</span>
                                                        </div>
                                                    </li>
                                                    <li className={"compound-list__row"}>
                                                        <div className={"compound-list__measure"}>
                                                            350
                                                        </div>
                                                        <div className={"compound-list__description"}>
                                                            вес/объем <span>(г/мл)</span>
                                                        </div>
                                                    </li>
                                                    <li className={"compound-list__row"}>
                                                        <div className={"compound-list__measure"}>
                                                            350
                                                        </div>
                                                        <div className={"compound-list__description"}>
                                                            вес/объем <span>(г/мл)</span>
                                                        </div>
                                                    </li>
                                                    <li className={"compound-list__row"}>
                                                        <div className={"compound-list__measure"}>
                                                            350
                                                        </div>
                                                        <div className={"compound-list__description"}>
                                                            вес/объем <span>(г/мл)</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className={"dish__ingredients-wrapper"}>
                                                <div className={"dish__ingredients-title"}>Состав:</div>
                                                <div className={"dish__ingredients"}>
                                                    мука высший сорт, сыр рикотта, шпинат свежемороженный, меланж
                                                    яичный, масло сливочное 82% (пастеризованные сливки), масло
                                                    оливковое, шалфей, соль.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
