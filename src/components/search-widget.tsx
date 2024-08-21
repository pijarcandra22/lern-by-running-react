import React, { useState, useEffect, useRef } from 'react';
import ShinyButton from "../components/magicui/shiny-button";

interface SearchWidgetProps {
  configId?: string;
  placeholder?: string; // Optional placeholder for the input
}

const SearchWidget: React.FC<SearchWidgetProps> = () => {
  return (
    <div>
      <input 
        type="checkbox"
        id="searchWidgetTrigger"
        style={{"display":"none"}}
      />
      <ShinyButton text="Start Chatting" htmlFor="searchWidgetTrigger"/>
    </div>
  );
};

export default SearchWidget;