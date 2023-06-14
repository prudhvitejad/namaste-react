import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1",{"id":"title"},"Heading1");
const heading2 = React.createElement("h1",{},"Heading2");
const container = React.createElement("div",{},[heading1,heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));

const FunctionalComponent = () => {
   return <h1>This is from functional Component</h1>
};

const CompositeFunctionalComponent = () => {
    return ( 
       <div>
            <FunctionalComponent/>
            <h1>This is h1 using jsx</h1>
            <h2>This is h2 using jsx</h2>
        </div>  
    );
}

//root.render(container);
//root.render(<FunctionalComponent/>);
root.render(<CompositeFunctionalComponent/>);
//root.render(CompositeFunctionalComponent());
