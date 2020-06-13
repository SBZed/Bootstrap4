# Front-end UI Frameworks
### example
- Bootstrap
- Semantic UI
- Foundation
- Materialize
- Material UI
- Pure
- Skeleton
- UIKit
- Miligram
- Susy

### Why Front-end Web UI Frameworks
- Responsive Web Design
- Cross browser compatibliity
- Increased Productivity
- Community Support

# Bootstrap 4
- install bootstrap in project
```sh
npm install bootstrap@4.0.0 --save
npm install jquery@3.3.1 popper.js@1.12.9 --save
```
- include below code in index.html `head` tag
```html
<!-- Required meta tags always come first -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta http-equiv="x-ua-compatible" content="ie=edge">

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
```

- include at end of `body` tag
**jQuery first, then Popper.js, then Bootstrap JS.**
```html
<!-- jQuery first, then Popper.js, then Bootstrap JS. -->
<script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
<script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
```
- Why we put javascript at bottom of page

> Because when you are loading the page from a web server, you want the CSS classes to be loaded immediately so that as the page starts rendering, when the JavaScript is fetched, the JavaScript needs to execute in order to make changes to your page with the JavaScript code, and that will take a little bit of time. So you don't want the user to be waiting for the entire page to be loaded before they see something in their browser window. So that's why we normally load the JavaScript classes towards the end of our html page just before the body tech.

# Responsive Design
- important aspects
  1. Grid System
  2. Fluid Image
  3. Media Queries

## 1. Grid System
- Bootstrap grid system designed to be responsive, Mobile first and fluid
- Grid system take advantage of "CSS Flexbox layout"

### Useful bootstrap4 classes :
1. `container` `row` `col-*` `col-xs*` `col-sm*` `col-md*` `col-lg*` `col-xl*`
2. Horizontal Alignment
  - `justify-content-center`: class for align div horizontally center
  - `justify-content-around`: space around/surrounding divs equally spaced
  - `justify-content-between`: space in-between divs equally spaced
  - also have option like `justify-content-start` `justify-content-end`
3. Vertical Alignment
  - `align-items-center`: class for align child-div vertically center
  - also have option like `align-items-start` `align-items-end`
  - `align-self-center`: class for align self-div vertically center
  - also have option like `align-self-start` `align-self-end`
4. Reordering Columns
  - .flex-first - Displayed first.
  - .flex-last - Displayed last.
  - .flex-unordered - Displayed between first and last.
  - there is also option like `*-pull-*` `*-push-*`
- `list-unstyled`
