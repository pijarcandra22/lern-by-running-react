import React, { useState, useEffect, useRef } from 'react';
import ShinyButton from "../components/magicui/shiny-button";

import "../components/search-widget.css";

interface SearchWidgetProps {
  configId: string;
  placeholder?: string; // Optional placeholder for the input
}

const SearchWidget: React.FC<SearchWidgetProps> = ({ configId, placeholder = "Search here" }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const widget = document.createElement('gen-search-widget');
  widget.setAttribute('class', "hellyeah");

  useEffect(() => {
    // Load the Gen App Builder script only once when the component mounts
    const script = document.createElement('script');
    script.src = "https://cloud.google.com/ai/gen-app-builder/client?hl=en_GB";
    script.async = true;

    // Function to initialize the search widget after the script has loaded
    script.onload = () => {
      console.log(inputRef.current)
      if (inputRef.current) {
        widget.setAttribute('configId', configId);
        widget.setAttribute('triggerId', inputRef.current.id);
        
        inputRef.current.insertAdjacentElement('afterend', widget);
      }
    };

    document.head.appendChild(script);

    // Clean up (remove the script) when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, [configId]); // Only re-run the effect if the configId changes

  return (
    <div className='sayang'>
      <input 
        type="checkbox" 
        placeholder={placeholder} 
        id="searchWidgetTrigger" 
        ref={inputRef} 
        style={{"display":"none"}}
      />
      {/* <button>
        <label htmlFor="searchWidgetTrigger">asdasdasd</label>
      </button> */}
      <ShinyButton text="Start Chatting" htmlFor="searchWidgetTrigger"/>
    </div>
  );
};

export default SearchWidget;