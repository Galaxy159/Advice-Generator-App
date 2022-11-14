import { useState, useEffect } from "react";
import dividerDesktop from "../images/pattern-divider-desktop.svg";
import dividerMobile from "../images/pattern-divider-mobile.svg";
import { ReactComponent as IconDice } from "../images/icon-dice.svg";

export default function Generator() {
  const [data, setData] = useState();

  useEffect(() => {
    if (data) {
      fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((error) => console.log(error));
    }
  }, [data]);

  return (
    <>
      <main className="generator">
        <h1 className="generator__headline">Advice #117</h1>
        <p className="generator__text">
          “It is easy to sit up and take notice, what's difficult is getting up
          and taking action.”
        </p>
        <picture>
          <source media="(min-width: 540px)" srcSet={dividerDesktop} />
          <img
            src={dividerMobile}
            alt="Divider"
            className="generator__divider"
          />
        </picture>
        <div className="generator__dice">
          <IconDice className="generator__dice--img" />
        </div>
      </main>
    </>
  );
}
