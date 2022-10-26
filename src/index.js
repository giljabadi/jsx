// 1) Import the react and react dom libraries
import React from "react";
import ReactDOM from 'react-dom/client';

// 2) Get a recerence to the div with id root
const el = document.getElementById('root');
// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);
// 4) Create a component
function App() {
        return <textarea autoFocus={true}></textarea>
}
// 5) Show the component on the screen
root.render(<App/>);

