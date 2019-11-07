# Complete React Scripts

[DEPRECATION NOTICE]

Unfortunately, Stylus is no longer maintained...
As a result, `complete-react-scripts v3.0.1`
is discontinuing support for it in favor of `sass`.
To reduce friction in updating beyond 3.0.0, `node-sass-magic-importer`
is now included in an attempt to deliver the same functionality that
was included with Stylus.

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).

Please refer to its documentation.

## Usage:

npx (npx 5.2+)

```bash
npx create-react-app my-app
```

npm (npm 6+)

```bash
npm init react-app my-app
```

yarn (yarn 0.25+)

```bash
yarn create react-app my-app --scripts-version complete-react-scripts
```

## This package is modified to include the following additional functionality:

#### Accessibility Tools

- `react-a11y`

#### React Addons

- `classnames`
- `prop-types`

#### React Router 5

- `react-router-dom`

#### Redux

- `redux`
- `react-redux`
- `redux-logger`
- `redux-thunk`

#### node-sass-magic-importer

- [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)
  - node-sass-selector-importer
  - node-sass-filter-importer
  - node-sass-glob-importer
  - node-sass-once-importer
  - node-sass-package-importer

#### Gzip

- `compression-webpack-plugin`

#### IE Support

- Includes IE11 polyfill

---

I plan to stay up to date with create-react-app as often as it is updated.

## For additional information, please refer to the following documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.
