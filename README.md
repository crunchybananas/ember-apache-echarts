ember-apache-echarts
==============================================================================

[![CI](https://github.com/crunchybananas/ember-apache-echarts/actions/workflows/ci.yml/badge.svg)](https://github.com/crunchybananas/ember-apache-echarts/actions/workflows/ci.yml)

An add-on that helps simplify Apache eChart integration with Ember.


Compatibility
------------------------------------------------------------------------------

* Ember.js v4.0.0 or above
* Embroider or ember-auto-import v2


Installation
------------------------------------------------------------------------------

```
ember install ember-apache-echarts
```

### Linking Library for Development

To link this package locally for development, execute the following, where
`<project-root>` is the root of the project using this library as a dependency:

```
cd packages/ember-apache-echarts/
npm link

cd <project-root>
npm link ember-apache-echarts
```

Or for `yarn`:

```
cd packages/ember-apache-echarts/
yarn link

cd <project-root>
yarn link ember-apache-echarts
```

To unlink this project via `npm`:

```
cd <project-root>
npm unlink --no-save ember-apache-echarts

cd packages/ember-apache-echarts/
npm unlink
```

To unlink this project via `yarn`:

```
cd packages/ember-apache-echarts/
yarn unlink

cd <project-root>
yarn unlink ember-apache-echarts
yarn install --check-files
// or yarn install --force
```

Note that after unlinking, you may need to delete `node_modules` and reinstall
the dependencies. Sometimes simply reinstalling the dependencies after relinking
doesn't work.

#### Linking for Test App

The test app isn't automatically linked to the local repo. To run the test app
on the local codebase it must also be linked in the same fashion as above:

```
cd packages/ember-apache-echarts/
npm link

cd ../test-app/
npm link ember-apache-echarts
```

Note that you may need to delete `node_modules` in the `test-app` directory
before linking and then reinstall the dependencies for the link to work.


Why this addon?
------------------------------------------------------------------------------

Development
------------------------------------------------------------------------------

Run `ember serve` from packages/test-app and navigate to http://localhost:4200
in your browser.


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
