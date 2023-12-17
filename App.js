
import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement('h1', {id:"heading", xyz:'abc'}, "Hello World Using React!")
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading) // it replaces the existing DOM inside root
console.log(heading)  // React.createElement returns an object aka React Element, not HTML element

// React.createElement => ReactElement(JS object) => HTML Element on rendering

// creation of Nested Elements

const parent = React.createElement('div', {id:'parent'},

React.createElement('div', {id:'child'},

React.createElement('h1', {id:"heading"}, 'Namaste Bharat 🇮🇳 🙏 🙏')))
 
// root.render(parent)

console.log(parent)


// If you want to make more nested structure, the code will become messy
// JSX comes to rescue for writing clean code
// JSX is a js syntax which makes it easier to create React element
// JSX is not HTML inside JS, rather it is HTML like syntax
// React can be written w/o JSX for sure
// JSX is not React
// JSX is not a valid javascript, PARCEL is transpiling/converting jsx into pure js which js engine can understand
// Parcel is having Babel inside ==> BABEL transpiles jsx into pure js so that browser can understand it
// Babel is a opensource JS compiler, read about it
// If you write JSX in multiple lines, you must use brackets(), babel gets to know where jsx starts and end

// JSX =>Babel transpiles it to  React.createElement => React.createElement => JS obejct => HTML Element(on rendering)
// JSX internally uses Recat.createElement only
const jsxHeading = (<h1 id="heading">Namaste Bharat 🇮🇳  🙏🙏 </h1>)  // it is a react element
const shoot = ReactDOM.createRoot(document.getElementById('shoot'))
console.log( jsxHeading, 'jsxheading')
shoot.render(jsxHeading)


// React Component
// 1) Class based Components - OLD
// 2)Functional Components - NEW

// React Functional Component ==> a simple js function ==> which returns some JSX code/element
const SubHeading =()=> (<div className="subheading">I am a subheading</div>)
const HeadingComponent = ()=>(
    <div id="container">
     <h1 className="header">Namaste Bharat 🇮🇳 Functional Component</h1>
     <SubHeading/>
     <SubHeading></SubHeading>
     {SubHeading()}
     {/* line 53 54 and 55 are all same, a function can also be called inside jsx */}
     {console.log('Hii')}
     {jsxHeading}
     </div>
)
// The nesting of compoents above is c/a Component Composition
// One can write javscript inside JSX => very powerful thing

// How to put react element inside jsx
// Read about how jsx sanitise data from apicalls to prevent malaicious data from apis
root.render(<HeadingComponent/>)
// Babel distinguish b/w React Element and React functional componet by the manner they are rendered