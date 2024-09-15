# Bertinette Frontend

This is the frontend application for the Bertinette project, built with React Native and Expo.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 20)
- npm (usually comes with Node.js)
- Expo CLI (`npm install -g expo-cli`)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Vroumed/JackyDashboard
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running the Project

To start the development server:

```
cd client
npx expo start
```

This will launch the Expo development server. You can then run the app on:

- iOS Simulator: Press `i`
- Android Emulator: Press `a`
- Web Browser: Press `w`

To run on a physical device, install the Expo Go app and scan the QR code displayed in the terminal.

## Husky Configuration

This project uses Husky to enforce code quality checks before commits. Here's how it's set up:

1. Husky is automatically installed and configured when you run `npm install`.

2. Pre-commit hooks are set up to run linting and type-checking before each commit.

3. To manually set up Husky (if needed), run:

   ```
   npx husky install
   ```

4. The pre-commit hook is configured to run the following checks:

   - ESLint for code style and potential errors
   - TypeScript compiler for type checking

5. If any of these checks fail, the commit will be aborted, allowing you to fix the issues before committing.

6. To bypass Husky checks in exceptional cases, you can use the `--no-verify` flag with your git commit command:
   ```
   git commit -m "Your commit message" --no-verify
   ```

Note: It's recommended to fix the issues rather than bypassing the checks, as these are in place to maintain code quality.

## Available Scripts

In the project directory, you can run:

- `npm start`: Starts the Expo development server
- `npm run android`: Runs the app on an Android emulator or connected device
- `npm run ios`: Runs the app on an iOS simulator or connected device
- `npm run web`: Runs the app in a web browser
- `npm run lint`: Runs ESLint to check for code style issues
- `npm run lint:fix`: Runs ESLint and automatically fixes issues where possible
- `npm run format`: Runs Prettier to format code
- `npm run type-check`: Runs TypeScript compiler to check for type errors

## Project Structure

- `src/`: Contains the main source code
  - `api/`: API calls and data fetching logic
  - `components/`: Reusable React components
  - `navigation/`: Navigation setup and screen definitions
  - `screens/`: Individual screen components
  - `store/`: State management with Zustand
  - `styles/`: Global styles and theme definitions
  - `utily/`: Utility functions and helpers

## Environment Variables

To set up environment variables:

1. Create a `.env` file in the root directory
2. Add your variables (e.g., `REACT_APP_BACKEND_URL=http://your-api-url`)

Make sure to never commit the `.env` file to version control.

## Building for Production

To create a production build:

1. For Android:

   ```
   expo build:android
   ```

2. For iOS:
   ```
   expo build:ios
   ```

Follow the Expo CLI prompts to complete the build process.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
