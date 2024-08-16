<div align="center">
    <img src="https://raw.githubusercontent.com/Sorok-Dva/sdr-frontend/main/public/img/logo.png" alt="sdr-frontend Logo">
  <h1>Le Sentier des Rêves</h1>
  <blockquote>Réveillez le rêveur en vous.</blockquote>
  <img src="https://hits.dwyl.com/Sorok-Dva/sdr-frontend.svg?style=flat-square" alt="Views"><br />
  <img src="https://img.shields.io/github/downloads/Sorok-Dva/sdr-frontend/total.svg?style=for-the-badge" alt="Total downloads">
  <!--<a href="https://shields.io/community#sponsors" alt="Sponsors">
    <img src="https://img.shields.io/opencollective/sponsors/Sorok-Dva.svg?style=for-the-badge" />
  </a>-->
  <a href="https://github.com/Sorok-Dva/sdr-frontend/pulse" alt="Activity">
    <img src="https://img.shields.io/github/commit-activity/m/Sorok-Dva/sdr-frontend.svg?style=for-the-badge" />
  </a>
  <br />
  <a href="https://github.com/sponsors/Sorok-Dva">
    <img src="https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#EA4AAA" alt="Sponsor Me">
  </a>
  <a href="https://patreon.com/sorokdva">
    <img src="https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white" alt="Support Me on Patreon">
  </a>
</div>

# Le Sentier des Rêves - frontend app

This project is the frontend of a dream journaling and tutorial platform called "Le Sentier des Rêves".
It is built using React and is designed to provide a user-friendly interface for interacting with the backend services.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the dependencies, you can use `npm` or `yarn`.

```bash
npm install
# or
yarn install
```

## Running the Application

To start the application in development mode, run:

```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`.

## Project Structure

- **public/**: Contains the static assets, such as `index.html` and images.
- **src/**: Contains the source code for the React application.
    - **components/**: Reusable components used across the application.
    - **pages/**: The main pages/routes of the application.
    - **context/**: Context providers for global state management.
    - **assets/**: Images, icons, and other static resources.
    - **styles/**: Global and component-specific styles.
    - **utils/**: Utility functions and helpers.
    - **App.tsx**: The main component that sets up the routes.
    - **index.tsx**: The entry point for the React application.

## Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in development mode.
- **`npm build`**: Builds the app for production.
- **`npm test`**: Launches the test runner.
- **`npm eject`**: Ejects the app configuration.

## Environment Variables

The following environment variables are used in the project:

- **REACT_APP_API_URL**: The base URL for the backend API.
- **REACT_APP_TINYMCE_API_KEY**: The API key for TinyMCE editor.

You can create a `.env` file in the root of the project to define these variables.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **React Router**: A library for managing navigation in React applications.
- **Styled Components**: A library for styling React components using tagged template literals.
- **TinyMCE**: A WYSIWYG editor for rich text editing.
- **React Toastify**: A library for displaying notifications and alerts.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them.
4. Push your branch to your fork.
5. Open a pull request to the main repository.

### Acknowledgments

- Developed by [Сорок два](https://github.com/Sorok-Dva). All rights reserved.

### License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International** - see the [LICENSE](LICENSE) file for details.

## Contributors

<a href="https://github.com/sorok-dva/sdr-frontend/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=sorok-dva/sdr-frontend" />
</a>

## Contact

For any inquiries or feedback, please visit our [GitHub Repository](https://github.com/Sorok-Dva/sdr-frontend) or contact the developers directly.

