import React from "react";
import "./Country.css";
const Country = (props) => {
  const { region, population, name, flags } = props.country;
  //   console.log(props);
  return (
    <div className="country">
      {" "}
      <h1>Name:{name.common}</h1>
      <h2>Population:{population}</h2>
      <h3>Region:{region}</h3>
      <img src={flags.png}></img>
    </div>
  );
};

export default Country;
