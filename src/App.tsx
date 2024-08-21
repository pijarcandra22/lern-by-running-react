import React from 'react';
import logo from './logo.svg';
import './App.css';

import { AnimatedListDemo } from "../src/components/listofheaven";
import GradualSpacing from "../src/components/magicui/gradual-spacing";
import SearchWidget from "../src/components/search-widget";

function App() {
  return (
    <div className='background relative h-[100vh]'>
      <div className='background_covered absolute bottom-0'></div>
      <div style={{"paddingTop":"30vh"}} ></div>
      <div className='logo'></div>
      <GradualSpacing
        className="font-display text-center
        font-bold tracking-[-0.1em] 
        text-white text-8xl
        leading-[rem] mb-2 mb-0"
        text="ISEAI BNI"
      />
      <div className='pt-1'>
      <GradualSpacing
        className="font-display text-center
        text-2xl tracking-[-0.1em] 
        text-white font-sans
        leading-[rem]"
        text="INTERNAL SEARCH ENGINE AI"
      />
      </div>
      <div style={{
        "maxWidth": "fit-content",
        "marginLeft": "auto",
        "marginRight": "auto",
        "marginTop":"30px"
      }}>
        <SearchWidget/>
      </div>
    </div>
  );
}

export default App;
