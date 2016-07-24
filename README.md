## Install

- npm install EfemerideList

## Use

```javascript
import EfemerideList from 'EfemerideList'

ReactDOM.render(<EfemerideList />, document.getElementById('container'))
```

== Build == (for remembering! :-)

- Copy the module outside *node_modules* folder to avoid webpack errors. *components*
folder for example.

- Make modifications

- Change package version number

- npm publish

- cd EfemerideList

- npm install

Use the new tag
:
```javascript
// /components/AppComponent.js
import React from 'react'
import EfemerideList from './EfemerideList'

export default class AppComponent extends React.Component {
  render () {
    return <EfemerideList />
  }
}
```

== Build ==

As we use ES2015/2016 syntax with babel, webpack, sass for styles, standard for linting, components with their own css file, we need on the point that you build your JS and CSS files some packages.

   npm i -D babel-core babel-eslint babel-loader babel-polyfill babel-preset-es2015 babel-preset-react css-loader extract-text-webpack-plugin node-sass sass-loader standard standard-loader style-loader webpack url-loader

For webpack, *webpack.config.js* is an example.

App using <EfemerideList /> component: https://github.com/aitoribanez/efemerideApp
