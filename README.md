# Templete package

This project was created with the intention of simplifying the creation of personal projects and practicing new concepts.

---

# Install package

to install this library it’s only run the next script in your terminal.

```bash
npm i name-package
```

## Uses

```tsx
import { component } from "name-package"
```

---

## Technologies

[Vite](https://github.com/vitejs/vite)

[Typescript](https://www.typescriptlang.org/) 

[SWC](https://swc.rs/) 

[React](https://react.dev/) 

[Vitest](https://vitest.dev/)

[Storybook](https://storybook.js.org/) 

---

## Install

For this project it is important to use **node** in version 18 or higher.

### Install dependencies

```bash
npm run i 
```

---

# Scripts

That part is only used in the development process.

### Storybook

We use workspace isolation in Storybook to construct and document components.

```bash
npm run storybook
```

### Build-storybook

We can build the project using Storybook and publish this page as documentation.

```bash
nom run build-storybook
```

### Build

This option is only for constructing the app to publish it in package stores.

```bash
npm run build 
```

### Test

We can use this option to test the components in the terminal.

```bash
npm run test
```

### Test-coverage

We can use this option to test the components in the terminal and check the coverage 

```bash
npm run test-coverage
```


### Test-watch

We can use this option when you want to keep track of changes in the test.

```bash
npm run test-watch
```

### Test-ui

This option is used when you want to see the test in the web UI.

```bash
nom run test-ui
```

 

---

# GitHub actions

This project has two different implementations: one for creating a pull request and another for when it is finished.

[GITHUB config](./.github/workflows/README.md)




---

### Setup created by [@jonathanhcruz](https://github.com/jonathanhcruz)
 