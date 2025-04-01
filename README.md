# App base electron

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

## Development Server
To start a local development server, run:
```bash
ng serve
```
Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Running the Application with Electron

This project supports running in Electron for a desktop experience.

### Development Mode (with Live Reload)

To run Electron in development mode with live reload, use:

```bash
npm run dev
```

- `dev:angular`: Starts the Angular development server on `http://localhost:4200`.
- `dev:electron`: Waits for Angular to be ready, then launches Electron.

### Production Mode

To build the application for production and run it with Electron:

```bash
npm run electron
```

This command builds the Angular app in production mode and launches Electron using the compiled files.

## Code Scaffolding

To generate a new component, run:
```bash
ng generate component component-name
```

For a complete list of schematics, run:
```bash
ng generate --help
```

## Building

To compile your project for production:
```bash
ng build
```

Build artifacts are stored in the `dist/` directory. By default, the production build optimizes the application.

## Running Unit Tests

To run unit tests using [Karma](https://karma-runner.github.io):
```bash
ng test
```

## Running End-to-End Tests

For end-to-end testing, run:
```bash
ng e2e
```

You may need to set up an e2e framework separately.

## Additional Resources

For more details, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

