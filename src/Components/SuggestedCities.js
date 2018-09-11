import React from "react";


function SuggestedCities(props) {
let { suggestedCities, handleSuggestionClick } = props;
  console.log(suggestedCities)
  handleSuggestionClick()

  if (suggestedCities.length > 0) {
     return (
      //map over suggestedCities and append to a list on browser
      <div></div>
      );
  } else {
    return (
      <div></div> //return an empty div if no cities are in the list 
      );
  }
}

export default SuggestedCities;


//after the suggested city is picked, use handleSuggestionClick to append the selected city from the dropdown list to the search bar 
