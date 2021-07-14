# Reapit Starter App

## Installation

- Install dependencies (required to install `yarn` as global):

```bash
yarn
```

- Make a copy of `.env` file then update the environment variables:

```
REACT_APP_ENV=local
REACT_APP_URL=
REACT_APP_CONNECT_CLIENT_ID=
REACT_APP_CONNECT_USER_POOL_ID=eu-west-2_eQ7dreNzJ
REACT_APP_API_URL=
```

- Ensure the app url is configured as Redirect URI(s) and Sign Out URI(s) at Reapit app settings page.

## Development

In the project directory, you can run `yarn start` to run the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Build

Run `yarn build` to build the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Deployment

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
