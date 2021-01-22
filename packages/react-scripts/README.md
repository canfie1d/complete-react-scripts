# Complete React Scripts

[v4.0.1 Breaking Changes]
- `react-redux` has been removed in favor of React's built-in [Context API](https://reactjs.org/docs/context.html)

[v4.0.1 DEPRECATION NOTICE]

Unfortunately, `node-sass` is deprecated...
As a result, `complete-react-scripts v4.0.1` is discontinuing support for it in favor of `sass` (dart sass) and since there is no suitable replacement for `node-sass-magic-importer`, glob importing is no longer supported.

`react-a11y` is also deprecated and will no longer be included.

[v3.0.1 DEPRECATION NOTICE]

Unfortunately, Stylus is no longer maintained...
As a result, `complete-react-scripts v3.0.1`
is discontinuing support for it in favor of `node-sass`.
To reduce friction in updating beyond 3.0.0, `node-sass-magic-importer`
is now included in an attempt to deliver the same functionality that
was included with Stylus.

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).

Please refer to its documentation.

## Usage:

npx

```bash
npx create-react-app my-app  --scripts-version complete-react-scripts --template cra-template-complete
```

npm

```bash
npm init react-app my-app  --scripts-version complete-react-scripts --template cra-template-complete
```

yarn

```bash
yarn create react-app test-app --scripts-version complete-react-scripts --template cra-template-complete
```

## This package is modified to include the following additional functionality:

#### Supporting React Libraries
- `react-router-dom`
- `classnames`
- `prop-types`
- `sass`
---

I plan to stay up to date with create-react-app as often as it is updated.

## For additional information, please refer to the following documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.
