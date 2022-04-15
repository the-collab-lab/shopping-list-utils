[![](https://img.shields.io/npm/v/@the-collab-lab/shopping-list-utils)](https://www.npmjs.com/package/@the-collab-lab/shopping-list-utils)

# Shopping List Utils

This is an NPM package used to share common methods between the shopping list applications for [The Collab Lab](https://the-collab-lab.codes/)!

## Getting Started

To use this package, you can run the following in your project:

```
npm i @the-collab-lab/shopping-list-utils
```

and use it in your projects like so:

```
import { generateToken, words, calculateEstimate } from '@the-collab-lab/shopping-list-utils
```

Current features include:

Function | Description
| --- | --- |
`words` | An array of words available for use when generating a token.
`generateToken` | Creates a random token string that is 3 words long based on a random calculation.
`calculateEsimate` | This is used to calculate when someone will want to purchase another item based on their purchasing habits.

## Contributing to the Repo

All the code is hosted in the `src` folder and organized into directories by functionality. If you would like to add a new feature, you can create a directory for it, and then add an export from that directory in the `src/index.ts` file.

This repository is currently set up with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for formatting, and you can run `npm run lintfix` and `npm run format` to clean up the codebase.

Tests are also set up with [Jest](https://jestjs.io/) and can be run with `npm run test`

## Publishing a Release

> **Before creating a release, make sure to increment the version number in `package.json`**

Releases are automatically built with a [Github Workflow Action](https://github.com/the-collab-lab/shopping-list-utils/actions) when a new release is [published in Github](https://github.com/the-collab-lab/shopping-list-utils/releases).
