# Namchee's Boilerplate

[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

[![devDependencies](https://david-dm.org/namchee/namchee-boilerplate/dev-status.svg)](https://david-dm.org/namchee/namchee-boilerplate?type=dev)

A simple to use boilerplate with TypeScript + Babel 7 + ESLint + Webpack on the hood with a touch of namchee

## Installation

1. Clone this repository or execute `git clone https://github.com/Namchee/namchee-boilerplate.git` in your terminal
2. Run `npm install` in your terminal
3. You're all set!

## FAQ

### Why does `webpack` doesn't exist yet there's a `webpack.config.js`?

I've been thinking about this too. But since `serverless` framework requires special webpack module, I must ditch the normal `webpack` and let user to choose their webpack flavor.

Side Note: I only recommend webpack for now, but maybe it will change and the config will be deleted.
