# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# Meme Generator App

This is a simple React-based meme generator application that allows users to create custom memes by adding top and bottom text to random meme images fetched from an API.

## Overview

The `Meme` component within this app integrates various functionalities:

- Fetches random meme images from an external API on component mount using `useEffect`.
- Allows users to input custom text for the top and bottom of the meme using input fields.
- Generates a new meme with the user-provided text overlaid on a randomly fetched meme image.
- Renders the generated meme with the custom text and the fetched image.

## Usage

To run this application locally:

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.

## Components and Functionality

### `Meme` Component

- Manages state for the top text, bottom text, and the current meme image URL using React hooks (`useState` and `useEffect`).
- Fetches meme data from an API endpoint on component mount and stores it in state.
- Allows users to input text for the meme's top and bottom captions.
- Generates a new meme by selecting a random image URL from the fetched memes and overlays the top and bottom text on the image.
- Renders a form for text inputs, a button to generate a new meme, and displays the generated meme.

## Dependencies

- React
- PropTypes (for type-checking props)

## Usage Example

[Include an example or screenshot of the application in action.]

## How to Contribute

Contributions are welcome! If you'd like to improve this meme generator app, feel free to fork the repository and submit a pull request with your changes.
