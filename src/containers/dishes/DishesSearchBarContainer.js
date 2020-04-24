import { connect } from "react-redux";
import { dishesActions } from "../../actions";
import SearchBar from "../../components/SearchBar";

const mapDispatchToProps = {
    searchDishes: dishesActions.dishesSearchQuery,
};

export default connect(null, mapDispatchToProps)(SearchBar);
