# Beamery Create React App

## Using this fork

To use this fork, run the following command (optionally with TypeScript).

```sh
npx create-react-app \
  [app-name] \
  --scripts-version git@github.com:SeedJobs/create-react-app.git#[release] \
  [--typescript]
```

For example:

```sh
npx create-react-app \
  app-newapp \
  --scripts-version git@github.com:SeedJobs/create-react-app.git#v2.1.0-a \
  --typescript
```

Releases need to be manually created. Currently the following CRA releases are available:

| Beamery release | CRA release |
| --------------- | ----------- |
| `v2.1.0-a`      | `v2.1.0`    |

### A note on package `name`

When initialising CRA, the `app-name` will also be set to the value of the `name` field in `package.json`.

In our custom scripts, the `name` field is important. It is used for the following:

- The application's bundle name.
- The application's hook id (when using with `single-spa-react`).
- Webpack's `devtoolModuleFilenameTemplate` template.

You can change the `name` field at any time.

### Upgrading to a new release

To move to a new release of `@beamery/react-scripts`, use `yarn add` or `npm install` as below:

```bash
yarn add git@github.com:SeedJobs/create-react-app.git#v2.1.0-a
```

Note that this updates only the react-scripts package.
Any migration steps will be detailed along with that release.

## Updating this package

### Pulling upstream changes

Checkout the `master` branch.

If you don't already have an upstream set, use this command:

```sh
git remote add upstream git@github.com:facebook/create-react-app.git
```

Run the following commands. We use `--rebase` and `-f` to keep our changes at the head of the branch, which ensures our changes are easy to keep track of.

```sh
git pull --rebase upstream master
git push -f
```

### Publishing `react-scripts`

To publish a new release of this package, use the following command:

```sh
git subtree push --prefix packages/react-scripts origin react-scripts --squash
```

Once pushed, create a tag in GitHub on the head of `react-scripts` branch with the format `v[CRA-release]-[release]`.

## Official docs

- [CReate React App README](https://github.com/facebook/create-react-app/blob/master/README.md)
- [User Guide](https://facebook.github.io/create-react-app/docs/folder-structure) – How to develop apps bootstrapped with Create React App.

## Issues

If something doesn’t work, please [file an issue](https://github.com/SeedJobs/create-react-app/issues/new).
