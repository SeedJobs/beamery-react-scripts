# Beamery Create React App

## Using this fork

To use this fork, run the following command (optionally with TypeScript).

```sh
npx create-react-app \
  [app-name] \
  --scripts-version @beamery/react-scripts[@release] \
  [--typescript]
```

For example:

```sh
npx create-react-app \
  app-newapp \
  --scripts-version @beamery/react-scripts@3.0.1-a \
  --typescript
```

Release are in the format `#.#.#-a` where the version (`#.#.#`) matches the current official
release of `react-scripts`, and the alpha character (`-a`) is our internal release.

Releases need to be manually created. A full list of available release can be found here:

https://github.com/SeedJobs/bmr-react-scripts/releases

### A note on package `name`

When initialising CRA, the `app-name` will also be set to the value of the `name` field in `package.json`.

In our custom scripts, the `name` field is important. It is used for the following:

- The application's bundle name.
- The application's hook id (when using with `single-spa-react`).
- Webpack's `devtoolModuleFilenameTemplate` template.

You can change the `name` field at any time.

## Updating this package

### Pulling upstream changes

Checkout the `master` branch.

If you don't already have an upstream set, use this command:

```sh
git remote add upstream git@github.com:facebook/create-react-app.git
```

Run the following commands. We use `--rebase` to keep our changes at the head of the branch, which ensures our changes are easy to keep track of.

```sh
git pull --rebase upstream master
```

## Issues

If something doesn’t work, please [file an issue](https://github.com/SeedJobs/create-react-app/issues/new).

## Official docs

- [Create React App README](https://github.com/facebook/create-react-app/blob/master/README.md)
- [User Guide](https://facebook.github.io/create-react-app/docs/folder-structure) – How to develop apps bootstrapped with Create React App.
