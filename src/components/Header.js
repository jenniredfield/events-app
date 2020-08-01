import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Header() {
  const [keyword, setKeyword] = useState("");
  const history = useHistory();

  function handleOnChange(e) {
    const value = e.target.value;

    setKeyword(value);
  }

  function navigateToSearch() {
    history.push(`/search/${keyword}`);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      navigateToSearch();
    }
  }

  return (
    <header className="header">
      <Link className="header__logo" to="/">
          <img src="/skiddle-logo.png" alt="logo"/>
      </Link>

      <field className="header__input-container">
        <input
            placeholder="Search artist, town or keyword..."
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
            className="header__input"
        />      
        <i class="fa fa-search" aria-hidden="true" onClick={navigateToSearch}></i>
      </field>
    </header>
  );
}

export default Header;