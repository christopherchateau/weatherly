import React from "react";
import "./SuggestedCities.css";

function SuggestedCities(props) {
  let { suggestedCities, handleSuggestionClick } = props;
  //console.log(suggestedCities)
  handleSuggestionClick();
  if (suggestedCities.length > 0) {
    return (
      <div>
        <ul class="drop-down-list">
          {suggestedCities.map(node => {
            return <li>{node.finalWord}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div /> //return an empty div if no cities are in the list
    );
  }
}

export default SuggestedCities;

//after the suggested city is picked, use handleSuggestionClick to append the selected city from the dropdown list to the search bar
