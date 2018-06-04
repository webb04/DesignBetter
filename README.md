# TODO:
- Performance improvements:
  - (lazy load images using IntersectionObserver and/or import() / ReactLoadable)
  - Next-gen image formats (webp, jpeg xr and jpeg2000 using the picture element and picturefill to list fallbacks)
  - OptimizeJs and babel-plugin-transform-react-remove-prop-types webpack plugins

- Error handling using React 16.3 error boundaries

- More jest tests (would like to try jest-extended, jest-chain, jest-each and new jest 23 features)

- End-to-end tests (Cypress or headless puppeteer browser)

- More animations when transitioning between tabs (e.g. fading images in)



# InVision Code Challenge

## Sketch File

https://www.dropbox.com/s/fhjb47ti6gyf8av/workflow-enterprise.sketch?dl=1

The images used in the sketch file can be found in the `/public/images/` directory.
Also note, the desktop and mobile layouts are different sketch pages.

## Summary

For this code challenge, you will create a section of a landing page that displays the offerings from InVision. It will include 3 tabbed sections that automatically switches tabs until the user navigates to a tab on their own. On mobile, it simply provides 3 sections with horizontal scrolling.

## Requirements

- Matches Design
- Responsive
- Automatically swaps tabs
  - Progress bar shows time until swap
  - Pauses when the links are not in the viewport
- Clicking a tab link swaps to the tab
  - This also stops the auto swapping
- Mobile shows all 3 sections with horizontal scrolling

## Tech Stack

The only requirement here is React. Feel free to use whatever css framework or 3rd party lib to help with the challenge. Internally, we use React@16.3.x, styled-components, and NextJS. The tool should work in the latest version of Chrome, Firefox, Safari, Edge, Internet Explorer, iOS Safari, and Samsung Internet.


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

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