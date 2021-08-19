import React from "react";

import * as styles from "./search-input.module.scss";

const SearchInput = ({ textChangeHandler, placeholder } ) => {

    return <input className={styles.search} type="search" onChange={textChangeHandler} placeholder={placeholder}/>
}

export default SearchInput;