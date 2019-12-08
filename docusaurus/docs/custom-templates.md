---
id: custom-templates
title: Custom Templates
---

> Note: this feature is available with `react-scripts@3.3.0` and higher.

Custom Templates enable you to select a template to create your project from, while still retaining all of the features of Create React App.

You'll notice that Custom Templates are always named in the format `cra-template-[template-name]`, however you only need to provide the `[template-name]` to the creation command.

### npm

```sh
npm init react-app my-app --template [template-name]
```

### Yarn

```sh
yarn create react-app my-app --template [template-name]
```

## Finding custom templates

We ship two templates by default:

- [`cra-template`](https://github.com/facebook/create-react-app/tree/master/packages/cra-template)
- [`cra-template-typescript`](https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript)

However, you can find many great community templates by searching for ["cra-template-\*"](https://www.npmjs.com/search?q=cra-template-*) on npm.

## Building a template

If you're interested in building a custom template, first take a look at how we've built [`cra-template`](https://github.com/facebook/create-react-app/tree/master/packages/cra-template).

A template must have the following structure:

```
my-app/
  README.md (for npm)
  template.json
  package.json
  template/
    README.md (for projects created from this template)
    gitignore
    public/
      index.html
    src/
      index.js (or index.tsx)
```

### The `template` folder

This folder is copied to the user's app directory as Create React App installs. During this process, the file `gitignore` is renamed to `.gitignore`.

You can add whatever files you want in here, but you must have at least the files specified above.

### The `template.json` file

This is where you can define dependencies (only dependencies are supported for now), as well as any custom scripts that your template relies on.

```json
{
  "dependencies": {
    "serve": "^11.2.0"
  },
  "scripts": {
    "serve": "serve -s build",
    "build-and-serve": "npm run build && npm run serve"
  }
}
```

For convenience, we always replace `npm run` with `yarn` in your custom `"scripts"`, as well as in your `README` when projects are initialized with yarn.
