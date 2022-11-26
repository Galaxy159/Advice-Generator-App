import { useState, useEffect } from "react";
import dividerDesktop from "../images/pattern-divider-desktop.svg";
import dividerMobile from "../images/pattern-divider-mobile.svg";
import { ReactComponent as IconDice } from "../images/icon-dice.svg";
import Loader from "./Loader.js";

export default function Generator() {
  const [advice, setAdvice] = useState();
  const [isLoading, setIsLoading] = useState(false);
  function handleDiceClick() {
    setIsLoading(true);
  }

  useEffect(() => {
    if (isLoading) {
      fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setAdvice(data);
        })
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    }
  }, [isLoading]);

  return (
    <>
      <main className="generator">
        <h1 className="generator__headline">
          {advice ? `advice #${advice.slip.id}` : "Advice #117"}
        </h1>
        {isLoading ? (
          <Loader />
        ) : (
          <p className="generator__text">
            <q>
              {advice
                ? `${advice.slip.advice}`
                : `It is easy to sit up and take notice, what's difficult is getting up
              and taking action.`}
            </q>
          </p>
        )}
        <picture>
          <source media="(min-width: 540px)" srcSet={dividerDesktop} />
          <img
            src={dividerMobile}
            alt="Divider"
            className="generator__divider"
          />
        </picture>
        <div
          className="generator__dice"
          onClick={handleDiceClick}
          disabled={isLoading}
        >
          <IconDice className="generator__dice--img" />
        </div>
      </main>
    </>
  );
}
