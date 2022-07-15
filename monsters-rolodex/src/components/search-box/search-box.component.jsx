import { Component } from "react";

import './search-box.styles.css'

class SearchBox extends Component {

    render() {

        const { onChangeHandler, placeHolder, searchBox } = this.props;
        return (
            <div>
                <input className= {`search-box ${searchBox}`} type='search' placeholder={placeHolder} onChange={onChangeHandler} />
            </div>
        );
    }

}

export default SearchBox;