import React from "react";
import Button from "#components/Button";
import logo from "#img/logo";
import logoBBC from "#img/logo-bbc.png";
import logoForbes from "#img/logo-forbes.png";
import logoTechCrunch from "#img/logo-techcrunch.png";
import logoBI from "#img/logo-bi.png";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="Nexter logo" className="header__logo" />
        <h3 className="heading-3">Your own home:</h3>
        <h1 className="heading-1">The ultimate personal freedom</h1>
        <Button
          cn="header__btn"
          text="View our properties"
          renderBtn={() => console.log("Clicked in the Header")}
        />
        <div className="header__seenon-text">Seen on</div>
        <div className=" header__seenon-logos">
          <img src={logoBBC} alt="Seen on logo 1"></img>
          <img src={logoForbes} alt="Seen on logo 2"></img>
          <img src={logoTechCrunch} alt="Seen on logo 3"></img>
          <img src={logoBI} alt="Seen on logo 4"></img>
        </div>
      </header>
    );
  }
}

export default Header;
