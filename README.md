# AngularRepoBoilerplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Best structure

src/
|-- app/
| |-- components/
| |-- services/
| |-- models/
| |-- state/
| |-- core/
| |-- shared/
|-- assets/
|-- environments/

src/app/
This is the main application folder where the core logic of the Angular application resides.

components/: This folder contains all the reusable components used throughout the application. Each component typically has its own sub-folder containing its TypeScript, HTML, and CSS/SCSS files.

services/: This folder contains all the service classes. Services are used for sharing data and functionality across components, and for making HTTP requests.

models/: This folder is for TypeScript interfaces and models that define the shape of the data used in the application.

state/: This folder contains the state management logic, which might include NgRx (store, actions, reducers, effects) or other state management libraries.

core/: This folder is for singleton services and core modules that will be used across the entire application. It typically includes things like authentication services, global error handlers, and core Angular modules.

shared/: This folder contains shared modules, components, directives, and pipes that are used across multiple features of the application. These are not singleton services but reusable code blocks.

src/assets/
This folder contains static assets like images, fonts, and other files that are used throughout the application. They are copied directly to the build output directory when the application is built.

src/environments/
This folder contains environment configuration files. Typically, there are separate configuration files for different environments (e.g., environment.ts for development, environment.prod.ts for production). These files include environment-specific settings like API URLs.

src/
main.ts: The main entry point of the Angular application. This file bootstraps the Angular application by initializing the root module.

index.html: The main HTML file that serves as the entry point for the web application.

styles.scss: Global styles for the application.

polyfills.ts: This file includes polyfills needed by Angular and other dependencies.

## Example Folder Content Breakdown:

# components/

|-- header/
| |-- header.component.ts
| |-- header.component.html
| |-- header.component.scss
|-- footer/
| |-- footer.component.ts
| |-- footer.component.html
| |-- footer.component.scss

# components/

|-- header/
| |-- header.component.ts
| |-- header.component.html
| |-- header.component.scss
|-- footer/
| |-- footer.component.ts
| |-- footer.component.html
| |-- footer.component.scss

# models/

|-- user.model.ts
|-- product.model.ts

# state/

|-- actions/
| |-- user.actions.ts
|-- reducers/
| |-- user.reducers.ts
|-- effects/
| |-- user.effects.ts
|-- selectors/
| |-- user.selectors.ts

# core/

|-- interceptors/
| |-- auth.interceptor.ts
|-- services/
| |-- logger.service.ts
|-- guards/
| |-- auth.guard.ts
|-- core.module.ts

# shared/

|-- components/
| |-- modal/
| |-- modal.component.ts
| |-- modal.component.html
| |-- modal.component.scss
|-- directives/
| |-- highlight.directive.ts
|-- pipes/
| |-- date-format.pipe.ts
|-- shared.module.ts
