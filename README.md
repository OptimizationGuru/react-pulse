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
- To give attribute in JSX you have to use camelCase
- Explore various attributes and various tags in JSX