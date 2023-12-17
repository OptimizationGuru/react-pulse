const heading = React.createElement('h1', {id:"heading", xyz:'abc'}, "Hello World Using React!")
const root = ReactDOM.createRoot(document.getElementById('trunk'))
root.render(heading) // it replaces the existing DOM inside root


console.log(heading)  // React.createElement returns an object aka React Element, not HTML element


// creation of Nested Elements

const parent = React.createElement('div', {id:'parent'},

React.createElement('div', {id:'child'},

React.createElement('h1', {}, 'I am an h1 tag')))

root.render(parent)

console.log(parent)


// If you want to make more nested structure, the code will become messy
// JSX comes to rescue for writing clean code