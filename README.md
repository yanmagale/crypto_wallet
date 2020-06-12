Crypto Wallet

> A small application to give a access for a user in order to control your cripto currencies.

[![Netlify Status](https://api.netlify.com/api/v1/badges/e9f9ae04-ff13-4032-af47-5aff9774e311/deploy-status)](https://app.netlify.com/sites/crypto-wallet-app/deploys)

# Live Application

Access [this](https://crypto-wallet-app.netlify.app/) link to use the application

# Setup

- After clone this repo, check your node version with `node -v`. Case this version was lower than 11 , run `nvm install 10` or use you system node manager appication to install the version 10
- After that, run `npm install` to install dependencies
- Finnaly run `npm start` and the application will open at the your browser

# Tests

- Run `npm run test`

# Generate a Build

- Run `npm run build`

# Stack

- React
- Redux
- Jest and Enzyme
- Eslint/Prettier/Stylelint
- Styled Components
- Webpack
- For commits - we are using commitlint pattern. [Check it out](https://commitlint.js.org/#/)
- For CI - Netlify

# Next steps

- Create more actions and states at redux (http connexions by example)
- Render fallback messages case dont exists data
- Improve UI actions at form components
- Create a better UI screens
- Create Change Currencies feature
- Limit buy actions based at max amount, calculated by exchange curency rate and national exchange amount
- Limit sell actions based at max amount, calculated by exchange curency rate, national exchange amount and how much currencies user had
- Improve structure to get balances and rates
- Multi user access
- Add to transactions structure an user relation
- Create more tests

# Questions

Fell free to send a message to [this](yanmagale@gmail.com) e-mail
