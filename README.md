# REACT PULSE 🇮🇳

# Bundler PARCEL/WEBPACK/WHEAT

- Read about bundler

# Process the code before moving it to production includes

- Minify the code
- Bundling the code
- Optimize Images
- Chunking
- Remove Comments
- Code Splitting

- package.json file is a configuration for npm, it keeps track of what version of each dependency is installed in the repository
- our project is dependent on a lot of dependencies, and npm manages those dependencies
- npm takes care of what is the version of thpse dependencies inside package.json


# Job of a Bundler/Parcel/Webpack
- index.html is the source so basically parcel goes to index.html and builds a development build  and host it on local server 1234 
- Dev Build
- Hot Module Replacement
- Local Server
- uses File Watching Algo written in C++, keeps an eye on all the files
- Caching - Faster Builds
- Image Optimization
- Minification of files
- Bundling of files
- Compressing of the files
- Consistent Hashing ==> Read about it
- Code splitting
- Differential Bundling ==> read about it ==> enable your code to run on different different browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remve unused code for you
- Lazy mode
- Deiffernet dev and prod bundling
- go to parceljs.org read about it
  

# Type of dependecies
- there are two kind of dependencies => dev-dependency and normal dependency ==> read about them

# Diffrence b/w ^(carot) and ~(tilde) ?
- carot helps to upgrade for all minor version of dpeendencies
- tilde will update the only for major version of dependencies


- packagelock.json ==> keeps track of the exact version of dependencies, no tilde or carot
- what is integrity in packagelock.json..?
- Node Modules ==> contains all the code that we fetch from npm, it contain all the  dependencies and all the transitive dependencies


- if you have package and packagelock.json, node modules can be recreated ==> npm i
- whatever you can regenerate, don't put it on git

- npm means installing a dependency
- npx means executing the package

- CDN links is not a good way to fetch react in your code base, bcoz fetching REact from cdn is a costly affair, if we already have react in our node modules it becomes very easy to manage react

- Read about Browserslist;
- Read about Babel
- Read about various tags of jsx i.e. img tag
- To give attribute in JSX you have to use camelCase that is not the case in HTML
- Explore various attributes and various tags in JSX => anchor tag, img tag, img src, etc

# Config Driven UI

- Read about it => data driven website i.e config driven UI
- UI layer and Data layer toghether make the UI for modern web pages

# Test 🚀



# QuickCrave 🤩


- Building Food Ordering App - QuickCrave
- Header - Logo, Nav-Items, Cart
- Body - Search, Restaurant Container -Cards inside - img, Star Rating, cuisine  delivery time etc
 - Footer - copyright, links, contact, address, info


- Never ever keep your hard-coded data into your component folder
- Try and find out where default export and named import can exist in same component

# React Hooks

- they are normal js utility functions written by facebook developers
- this function comes with super-power => utility functions
- need is to import these utility function
- two very imp hook is => 1) useEffect(), 2) useState() => super powerful state variable
- whenever a state variable changes, React re-render the component
- React makes the process of DOM manipulation very efficient => fastest library for DOM manipulation
- React uses Reconciliation Algorithm (aka React Fibre) => uses virtual DOM (i.e representation of actual DOM ==> nothing but React Element
- Diff algorithm came out in React16 =>  finds out the difference b/w OLD virtual DOM and New Virtual Dom and actually updates the DOM => this is called as Reconciliation
- Read about React Fiber

- Read about how state variables work in React
- Difference b/w HTML and JSX
- JSX is different than HTML , it is not HTML in Javascript,  it's syntax is like HTML, it looks like HTML/XML

- const jsxHeading = <h1> Namaste Bharat 🇮🇳</h1> ==> this piece of code is JSX
- when JSX code is executed, it is converted to React Element by Parcel ==> parcel transpiles the jsx code to browser understandle code
- if you console an element created by React.createElement() and other created by JSX => both are exactly the same object
- jsx is not a valid pure javascript, js engine can not understand jsx ==> bcoz js engine understand ECMAScript based code
- how is this code working ==> Parcel the ShaktiMaan transpiles jsx into browser executable js and HTML
- root.render(jsx) => before jsx reaches to browser/js engine => Parcel transpiles jsx code into browser understandable code
- Babel the Home Minister comes into picture and transpile the jsx code into normal js and HTML

- For further clarification ==>  when you use React.createElement() => ReactElement => JS object => when rendered => HTML element
- However, JSX code is transpiled/converted to  React.createElement() ==> JS Object => render => HTML element
- JSX behind the scenes at the end of the day is React.createElement() => Babel converts JSX into React.createElement() code
- and now React understands the code and render it onto the browser
- Now the learning is => JSX is not HTML  => JSX converted to React.createElement() => then rendered
- Babel => the Hero is an open source  js compiler => Read about it
- if you write JSX in multiple lines => you must wrap it into brackets => so that babel can understand => where jSx starts and  ends
  
# React Component

- there are two kinds of components in React => 1) Class based component (old way) use classes to write components,  2) Functional Components use js functions to create components
- React functional component is just a normal js function => returns jsx element
- whenever you create a react component => name it with Capital letter otherwise get error
- Find out the difference b/w React element and React Functional Component


# Monolith and MicroService Architecture - Episode 6

- Read about them  => How React make connecton with other microservices => Let's Explore the World
- How will a React application make a backened api call and fetch the data ?
- There are two approaches how  to fetch data from back-end 
- 1) As soon as page loads => make api calls => wait till data  come => render the UI
- 2) in this approach => as soon as page loads, we quickly render it => now api call => data comes => rerender the application
- we always uses the second approach to enhance UX => user does not wait for UI load time
- React render cycle is very fast => one of the best renser mechanism => rendering twice is okay

 # useEffect hook => a hook is a normal javascript function which has its own specific function

 - api calls are made inseide useEffect hook, => api call made after components are rendered .
 - => for fetching the data => we use a method/super-power  'fetch' given to us by Browser => JS engine super power
 - Read about CORS policy => Akshay Saini youtube
 - shimmer UI ..?
 - JSX is javascript syntax which makes it easy to create React element
 - it is not pure valid javascript as browser doesnot understands it => babel transpile jsx into react.createElement => react Element => understood by react => when rendered => converted to html element
 - Read about npm, Parcel, Babel, Webpack
 - A js function that returns a jsx code or a React Element is a functional component in React
 - If you put curly braces inside jsx anywhere, inside these curly braces you can run any js code my dear friends
 - a react Element can be nested inside functional component and vice versa => any damn thing can be nested inside anywhere
 - jsx sanitise your data coming from external api before executing it => hence prevents cross scripting attacks
 - read about diffrence b/w react and jsx
 - config driven UI => controlling your UI using data =>using config=> coming from backend
 - hooks are simple js function given by react for special purpose
 - read about useState and useEffect hooks
 - read about Optional chaining in javascript
 - Read about Shimmer UI
 - Why do we need State Variable..? Can we use a local variable instead ? what is the super power of State Variable
 - state Variable are under constant watch and as soon as there value changes the component is re-rendered

# how a const state variable get's updated ==> how does it's value changes

- the answer is, when you update a state variable, the entire component is re-rendered
- in this re-rendenring process, a new instance of the state variable is created ==> i.e. a new variable is created
- with default value as the last updated value => this is how const state variable modifies it's value
- Reconciliation process while re-rendering => comparison b/w virtual DOM object and updating using Diff Algorithm