import React, { useCallback } from "react";

import "./FilterBar.scss";

import FilterBarItem from "../FilterBarItem";
import FilterBarItemContainer from "../../containers/FilterBarItemContainer";

const FilterBar = (props) => {
    const { filters = [], loading = true, error = null } = props;

    if (loading) {
        return <MockFilterBar />;
    }

    if (error) {
        return null;
    }

    return (
        <form className={"filter"}>
            {filters.map((filterItemId) => (
                <div className={"filter__item"} key={filterItemId}>
                    <FilterBarItemContainer filterItemId={filterItemId} />
                </div>
            ))}
        </form>
    );
};

const MockFilterBar = () => {
    const data = Array.from({ length: 3 });

    return (
        <form className={"filter"}>
            {data.map((_, key) => (
                <div
                    className={"filter__item"}
                    key={`mock-filter-bar-item-${key}`}
                >
                    <FilterBarItem isMock={true} />
                </div>
            ))}
        </form>
    );
};

export default FilterBar;
