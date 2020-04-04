import React, {useEffect} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas);


function App() {
    return (
        <div className="page">
            <div className="page__inner">
                <div className="floor">
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

                <div className="floor floor--type-filter">
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

                <div className="floor">
                    <div className="floor__inner">

                        <div className={"dishes"}>
                            <div className={"dishes__item"}>

                                <div className={"dish"}>
                                    <div className={"dish__promo"}>
                                        <div className={"dish__actions"}>

                                            <ul className={"actions-panel"}>
                                                <li className={"actions-panel__item"}>1</li>
                                                <li className={"actions-panel__item"}>2</li>
                                                <li className={"actions-panel__item"}>3</li>
                                            </ul>

                                        </div>

                                        <div className={"dish__price"}>
                                            120 руб.
                                        </div>
                                        <div className={"dish__title"}>
                                            Каша рисовая с соусом из черной смородины и кедровыми орешками
                                        </div>
                                        <div className={"dish__image"}>
                                            <img src={require('./images/dishes/1.png')} alt={"dish-1"}
                                                 title={"dish-1"}/>
                                        </div>
                                    </div>
                                    <div className={"dish__info"}>
                                        <div className={"dish__tip"}></div>
                                        <div className={"dish__description"}></div>
                                        <div className={"dish__compound-wrapper"}>
                                            <div className={"dish__compound-list"}>
                                                <dl className={"compound-list"}>
                                                    <dt>
                                                        <b>350</b>
                                                    </dt>
                                                    <dd>
                                                        <b>вес/объем</b> (г/мл)
                                                    </dd>

                                                    <dt>
                                                        <b>350</b>
                                                    </dt>
                                                    <dd>
                                                        <b>вес/объем</b> (г/мл)
                                                    </dd>
                                                </dl>
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
