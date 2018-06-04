# TODO:
- Performance improvements:
  - (lazy load images using IntersectionObserver and/or import() / ReactLoadable)
  - Next-gen image formats (webp, jpeg xr and jpeg2000 using the picture element and picturefill to list fallbacks)
  - OptimizeJs and babel-plugin-transform-react-remove-prop-types webpack plugins

- Error handling using React 16.3 error boundaries

- More jest tests (would like to try jest-extended, jest-chain, jest-each and new jest 23 features)

- End-to-end tests (Cypress or headless puppeteer browser)

- More animations when transitioning between tabs (e.g. fading images in)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
