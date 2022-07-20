ember-apache-echarts
==============================================================================

[![CI](https://github.com/crunchybananas/ember-apache-echarts/actions/workflows/ci.yml/badge.svg)](https://github.com/crunchybananas/ember-apache-echarts/actions/workflows/ci.yml)

A modern take on using so-called "portals" to render things in a
different place of the DOM tree than they are logically defined in the app.

Implemented using lightweight Glimmer components and Ember's new `{{in-element}}`,
but without its caveats.


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

To unlink this project:

```
cd <project-root>
npm unlink --no-save ember-apache-echarts

cd packages/ember-apache-echarts/
npm unlink

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



Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
