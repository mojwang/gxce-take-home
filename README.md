# Take Home

## System Requirements

- Node v14.x+
- NPM 6.x

*Note:* We have support for NVM; if you run `nvm install` or `nvm use` at root of the project you should get the right node version installed

## Running the app

```sh
# Install dependencies
npm install

# Start the server
npm start
```

Upon starting the app a webpack build will be started, this will take some time but at the end you should see a prompt in your terminal `restify listening at http://[::]:8081`

Visit `http://localhost:8081` in browser.

## Preparation

Be prepared to explain your submission in detail for the phone screen; We want to talk about tradeoffs, decisions, gotchas, and anything you found while doing the exercise. Think about edge cases and how we could extend the architecture of your submission to handle more features.

## Tracking changes and improvements

We've included a `CHANGELOG.md` file that should be used to note the high level improvements you've made to the app. You can use this file as a starting point for the conversation when we review this exercise. An example entry is included, but feel free to use a different format if you prefer.

## Troubleshooting

### npm install failed

It might be due to some dependency issue with locked dependencies `rm package-lock.json && npm install` to generate a new lock file.

## npm ERR! notsup Unsupported engine for wmp_take_home

You are using an unsupported version of node or npm in the project, refer to the `"engines"` section in package.json to see the supported versions.
