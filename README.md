<h1 align="center">
  <a href="https://www.ndi.org/"><img src="https://www.ndi.org/sites/all/themes/ndi/images/NDI_logo_svg.svg" alt="NDI Logo" width="200"></a>
</h1>

<h1 align="center">
  DemGames - Debate
</h1>

<p align="center">
  <a href="https://github.com/nditech/demgames-debate/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-red.svg" alt="License"/>
  </a>
  <a href="https://docs.mongodb.com/">
    <img src="https://img.shields.io/badge/mongodb-v3.6.5-blue.svg" alt="mongodb"/>
  </a>
  <a href="https://www.npmjs.com/package/express">
    <img src="https://img.shields.io/badge/express-v4.16.3-blue.svg" alt="express"/>
  </a>
  <a href="https://www.npmjs.com/package/react">
    <img src="https://img.shields.io/badge/react-v14.4.0-blue.svg" alt="react"/>
  </a>
  <a href="https://nodejs.org/en/docs/">
    <img src="https://img.shields.io/badge/node-v10.3.0-blue.svg" alt="node"/>
  </a>
</p>

<p align="center">
  <a href="#documentation">Documentation</a> - 
  <a href="#installation">Installation</a> - 
  <a href="#contributing">Contributing</a> - 
  <a href="#license">License</a> - 
  <a href="#authors">Author(s)</a>
</p>

A full stack (MERN) app that helps users learn how to debate effectively.

## Documentation

### :warning: Branch `2018nov16` works on local machine but will throw `error` when build:
```
Failed to minify the code from this file: 

 	./node_modules/autobind-decorator/src/index.js:7 
```
This is a known issue of `autobind-decorator` without proper fix (as of 16 Nov 2018).
`autobind-decorator` is used by `react-tag-input` which is used for the search bar. The decision is made to rebuild the search bar without `react-tag-input`.

> :construction: Under construction

## Installation

Make sure you have [Node.js](https://nodejs.org/en/download/package-manager/) and [Yarn](https://yarnpkg.com/en/docs/install#mac-stable) on your machine. Clone this repository to your local machine (using SSH):
```
$ git clone git@github.com:nditech/demgames-debate.git
$ cd demgames-debate
$ yarn install
$ cd client
$ yarn install
$ cd ..
$ yarn start
```

## Testing

*There is no testing guide at the moment.*

## Contributing

*There is no contributing guide at the moment.*

## License

[MIT](./LICENSE)

## Author(s)

* <b>Viet Nguyen</b>
    > vnguyen@ndi.org &nbsp;&middot;&nbsp;
    > [LinkedIn](https://www.linkedin.com/in/nguyendviet)
