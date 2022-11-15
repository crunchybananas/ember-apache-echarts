Chart Architecture
==================

Each chart is composed of an Ember component and a modifier that is used to
render the chart into that component.

The chart components serve two purposes:

 - **Determine Chart Size**
   Each chart component renders a `div` whose size determines the size of the
   chart instance rendered within that `div`. A resize observer monitors changes
   to this `div` and resizes the chart accordingly.

 - **Render Custom Tooltips**
   Tooltips are rendered via named blocks, allowing the end user of the chart to
   define custom toolips. Once activated, the tooltips are removed from the
   container `div` and absolutely positioned over the appropriate place on the
   chart.

Each chart component also has a modifier that performs the work of creating and
rendering the chart via Apache eCharts.


### Modifier Architecture

Since Apache eCharts does not have a full layout engine, `AbstractChartModifier`
provides a primitive one, along with other capabilities like monitoring resize
events on its corresponding component and managing event listeners on the chart.

The layout engine enables positioning the data zoom, legend, title and other
chart parts automatically, so manual positioning or style-specific calculations
are not required.

The Apache eChart configuration for the chart is built via the `buildLayout`
method, which is used to progressively add configuration sections to an object
that is eventually passed as the `options` for the chart.

Conceptually, `buildLayout` works by creating a layout context, then
sequentially calling methods to build the different parts of the chart from the
outside inward. This is the "build pipeline".

Currently, the default build pipeline consists of the following steps:

 - *Chart Box*: The background, border, margin & padding for the entire chart
 - *Title*: The title of the chart, if any
 - *Legend*: The legend of the chart, if any
 - *Cell Boxes*: The background, border, margin & padding for each of the plots
   used it this chart. By default, when multiple series are provided as data,
   the chart is rendered using "small multiples", with one chart per series
 - *Cell Titles*: The title for each plot, taken from the series name, if any
 - *Cell Plots*: The chart plots themselves
 - *Cell Text Overlays*: Text overlaid on top of each plot, such as "No Data"
   text when no data is provided or no data exists for a specific series

As mentioned, this order adds parts from the outside inward. If you imagine that
the chart box is the outermost rectangle, then the title, legend and cell boxes
exist as rectangles within that rectangle and the cell titles and cell plots
exist as rectangles within each cell (the text overlays are a layer on top of
the cell plots' rectangles).

As each part of the chart is added to the configuration, the layout context is
adjusted to account for the remaining area in the chart that is available to
be used by the parts further along the build pipeline.

For instance, if the chart is 800 x 600 and a 20 pixel high title is rendered at
the top of the chart at position 0, 0, then the layout context used when adding
the legend will be 800 x 580 at the position 0, 20.

The reduction in render area for each part takes into account not only the space
required to render the core content, but any margin, padding and border applied
to that part. (Though, because the metrics for the core content are calculated
by the layout algorithm without access to the actual render metrics, this can
sometimes be off by a few pixels, so it's best not to lay things out too
tightly).


#### `addXXX` vs `generateXXXConfig` methods

Each of the steps in the build pipline calls an `addXXX` method whose job is to
add one part of the chart to a configuration object (the Apache eCharts
`options` object) and return an adjusted layout (the change to `config` is a
side effect of each of these methods; it is not returned).

These methods in turn call a `generateXXXConfig` method that generates the
actual Apache eCharts configuration.

Roughly, the `add` methods map to the layout framework described above, while
the `generate` methods map to the Apache eCharts options.


### Configuring Styles

The rendering styles on the chart are defined using CSS properties passed in via
a styles argument. Each part of the chart has its own styles argument.

For instance, the following configures the cell for each plot to have a solid
border and a margin of 2.

```
<Chart::Bar
  ...
  @cellStyle={{hash border="solid 1px rgb(229, 231, 235)" margin=2}}
  ...
/>
```

Each style is merged with a default style defined by the `defaultStyles`
property of either `AbstractChartModifier` or a modifer for a specific chart
type. Default styles set the font, margins and text alignment to reasonable
values so these don't have to be specified for every chart part.


### Small Multiple Charts

By default, multiple data series are rendered as separate plots, one for each
data series. Individual chart types may override this on a type or variant
basis.

For example, the `BarChart` overrides this for its stacked and grouped variants.

While multiple chart components could be used to render multiple data series,
using the small multiples functionality provides the added benefit of syncing
colors and filters across all plots, and rendering a single, global legend.

When using small multiples, the `maxColumns` argument determines how many charts
to render in each row. When the number of data series exceeds this number,
multiple rows are created.
