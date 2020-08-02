import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import '../styles/Header.css';

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
      <Link className="header__logo" to="/" data-testid="header-logo-link">
          <img src="/skiddle-logo.png" alt="logo"/>
      </Link>
      <fieldset className="header__input-container">
        <input
            placeholder="Search artist, town or keyword..."
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
            className="header__input"
        />      
        <i className="fa fa-search" aria-hidden="true" onClick={navigateToSearch} data-testid="header-input-button"></i>
      </fieldset>
    </header>
  );
}

export default Header;
