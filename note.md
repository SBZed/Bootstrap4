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

### Navbars and Breadcumbs
1. .navbar .navbar-dark .navbar-expand-sm
  - navbar-brand
  - navbar-nav
    - nav-item
    - nav-link
2. .navbar-toggler
3. .navbar-collapse
4. .breadcrumb
  - .breadcrumb-item

### Fonts
1. Font Awesome
  - `npm install font-awesome --save`
2. Bootstrap Social Icon
  - `npm install bootstrap-social --save`
3. Information Architecture
    - [Information Architecture 101: Techniques and Best Practices](https://www.webfx.com/blog/web-design/information-architecture-101-techniques-and-best-practices/) (Quick introduction to Information architecture with respect to website design)
    - [What is information architecture?](https://www.steptwo.com.au/papers/kmc_whatisinfoarch/) (Good definition and explanation about the topic)
    - [Designing A Winning Navigation Menu: Ideas and Inspirations](https://www.hongkiat.com/blog/navigation-design-ideas-inspiration/) (Good suggestions on how to design navigation for a website)
    - [Are You Making These Common Website Navigation Mistakes?](https://neilpatel.com/blog/common-website-navigation-mistakes/) (Worth reading at least to learn what not to do)
    - [3 Reasons We Should Stop Using Navigation Bars](http://www.webdesignerdepot.com/2014/01/3-reasons-we-should-stop-using-navigation-bars/) (A provocative view on navigation bars)
4. Breadcrumbs
    - [Breadcrumb Navigation Examined: Best Practices & Examples](https://www.hongkiat.com/blog/breadcrumb-navigation-examined-best-practices-examples/) (Great suggestions on using breadcrumbs for navigation)
    - [Breadcrumb Navigation: A Guide On Types, Benefits And Best Practices](https://www.woorank.com/en/blog/breadcrumb-navigation-a-guide-to-types-benefits-and-best-practices) (Another great resource on types and usage of breadcrumbs)
5. Icon Fonts
    - [Why And How To Use Icon Fonts](http://vanseodesign.com/web-design/icon-fonts/) (a good overview of icon fonts)
    - [Icon Fonts are Awesome](https://css-tricks.com/examples/IconFont/) (another good introduction to icon fonts)
    - [Font Awesome](https://fontawesome.com/6?next=%2F%3Ffrom%3Dio) (one of the most popular icon fonts)
    - [Get started with FontAwesome](https://fontawesome.com/start) (good official help)
    - [Bootstrap-Social](http://lipis.github.io/bootstrap-social/)
    - [The Final Nail in the Icon Fonts Coffin?](https://www.sitepoint.com/final-nail-icon-fonts-coffin/) (a controversial opinion piece on icon fonts)
    - [Using SVGs](https://gomakethings.com/using-svgs/) (alternative to icon fonts)
### Forms
1. .form-group
  - label(.col-form-label)[for]
  - .input(.form-control, .form-check-input) [type, id, name, placeholder] (NOTE: `id` == `for` in label)
    - type: text, tel, email, checkbox, submit
  - .form-check
  - select((.form-control)
    - option
  - textarea((.form-control)[e.g. rows="12"]

2. [When To Use The Button Element](https://css-tricks.com/use-button-element/) (The multifaceted button element)