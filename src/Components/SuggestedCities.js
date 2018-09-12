import React from "react";
import "./SuggestedCities.css";

function SuggestedCities(props) {
  let { suggestedCities, handleSuggestionClick } = props;
  //handleSuggestionClick();
  if (suggestedCities.length > 0) {
    return (
      <div>
        <ul className="drop-down-list">
          {suggestedCities.map((node, ind) => {
            return (
              <li
                key={ind}
                onClick={e => handleSuggestionClick(e.target.innerText)}
              >
                {node.finalWord}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default SuggestedCities;

//after the suggested city is picked, use handleSuggestionClick to append the selected city from the dropdown list to the search bar
