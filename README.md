# node-pombo

[![Greenkeeper badge](https://badges.greenkeeper.io/VitorLuizC/node-pombo.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/VitorLuizC/node-pombo.svg?branch=master)](https://travis-ci.org/VitorLuizC/node-pombo)

Just provide a random nice pombo ASCII draw(and his author).

## Instalation

Of course U're using [Yarn](https://yarnpkg.com/), right?!

```sh
yarn add pombo
```

U can also install by NPM

```sh
npm install pombo
```

## Usage

```js
const pombo = require('pombo').default

// Or using ES6

import pombo from 'pombo'

console.log(`${pombo.draw} by ${pombo.author}`)
```

## Utility

- `pombo.randomDraw` is a simple function to get a random pombo;

- `pombo.draws` is a list with all pombos and their authors.
