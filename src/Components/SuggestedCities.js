import React from "react";
import "./SuggestedCities.css";

function SuggestedCities(props) {
  let { suggestedCities, handleSuggestionClick } = props;
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
    return <div />;
  }
}

export default SuggestedCities;
