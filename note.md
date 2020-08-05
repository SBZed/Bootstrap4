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

### Table and Cards
#### Description List
- Description List Tag - `dl`
  - Description term - `dt`
  - Term description - `dd`
- The <dd> tag is used to describe a term/name in a description list.
- The <dd> tag is used in conjunction with <dl> (defines a description list) and <dt> (defines terms/names).

#### BLockquote
- `blockquote` tag with `.blockquote` css class
- `footer` tag with `.blockquote-footer` css class
- `cite` tag
```html
<blockquote class="blockquote">
    <p class="mb-0">You better cut the pizza in four pieces because
        I'm not hungry enough to eat six.</p>
    <footer class="blockquote-footer">Yogi Berra,
        <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
            P. Pepe, Diversion Books, 2014</cite>
    </footer>
</blockquote>
```

### Images and Media
#### Images
- `img-fluid` - for responsive image
- `img-thumbnail` - for border
- `rounded`*{top|bottom|left|right} - for rounded edge
- `rounded-circle` - for circle image
- Images with cards
  - card-img-top

#### Media
- `.media` class
- `.media-body`
- `img` tag need some `.d-flex` class to show img to left side of content
- `.media-top`, `.media-bottom` to align image to media

#### Responsive embed
- `.embed-responsive` `.embed-responsive-16by9`
- `iframe`, `video` & `object` tag with class `.embed-responsive-item`

### Alerts, Badges, Progress bars

#### Badge
- .badge .badge-danger .badge-pill .badge-secondary

#### Alert
- .alert .alert-warning .alert-success 
- .alert-dismissible : allow to include cross sign which user can use to close
- <div role="alert"></div>

#### progress bar
- .progress
  - .progress-bar .progress-bar-striped .bg-danger
- <div role="progressbar"></div>

## Bootstrap JavaScript Components
- to include **javascript** in html code you need to write lot of code in JS. need separate js file
- to avoid this next best things is **jquery** which also need code but little. which we include in 
<script></script> tags.
- Where as **Bootstrap Js Component** don't need writie single line of code and we can use in HTML markup easily.
i.e. `data-*` attributes in tags (data-toggle, data-spy)

1. Tabs and Tabbed Navigation
2. Collapse and Accordion

### 1. Tabs and Tabbed Navigation
- Tabs require Javascript support to be enabled for navigating the content.
- below, `data-toggle` is bootstrap JS component
- ul.nav.nav-tabs
  - li.nav-item
    - a.nav-link.active[role="tab", data-toggle="tab" href=demo]
- div.tab-content
  - div.tab-pane.fade.show.active#demo[role="tabpanel"]
```html
<!-- Tab Navigation -->
<ul class="nav nav-tabs">
  <li class="nav-item">
      <a href="#peter" class="nav-link active" role="tab" data-toggle="tab">Peter Pan, CEO </a>
  </li>
  ..
  .
  <li class="nav-item">
      <a href="#saurabh" class="nav-link" role="tab" data-toggle="tab">Saurabh Zinjad, Founder </a>
  </li>
</ul>
<!-- Tab Content -->
<div class="tab-content">
  <div class="tab-pane fade show active" id="peter" role="tabpanel">
    <!-- Content -->
  </div>
  ..
  .
  <div class="tab-pane fade" id="peter" role="tabpanel">
    <!-- Content -->
  </div>
</div>
```

### 2. Collapse and Accordion
- Accordion's Emmet formula
```html
#accordion>(.card>(.card-header#agumbehead[role="tab"]>h3.mb-0>a.collapsed[data-toggle="collapse" data-target="#agumbe"])+(.collapse#agumbe[data-parent="#accordion"]>.card-body))*number_of_cards
```

```html
<div id="accordion">
  <div class="card">
      <div class="card-header" role="tab" id="peterhead">
          <h3 class="mb-0">
              <a data-toggle="collapse" data-target="#peter">
                  <!-- Heading -->
              </a>
          </h3>
      </div>
      <div class="collapse show" id="peter" data-parent="#accordion">
          <div class="card-body">
            <!-- Content -->
          </div>
      </div>
  </div>
  ...Other cards
</div>
```

### 3. Revealing Content
1. tooltips
2. popovers
3. modals

#### 1. Tooltip
- `data-html=true`: can style tooltip content using html markup.
```html
<a role="button" href="#reserveform" class="btn-block nav-link btn-warning" data-toggle="tooltip" data-html="true" title="Or Call  us at <br><strong>+852 12345678</strong>" data-placement="bottom">
    Reserve Table
</a>

<script>
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    })
</script>
```

## Note: A single button can support only one Javascript plugin(bootstrap JS Component) via the data-* attributes.

### Bootstrap and JQuery
Bootstrap Js Components build upon jquery
#### JQuery
-  Lightweight Javascript Library
- Feature-rich:
  - HTML/DOM/CSS Manipulation
  - HTML Event Methods
  - AJAX
  - Effects and animation
#### usage
```js
$(selector).action()
```
- $: Define/access JQuery
- selector: to query and find html element
- action: action to be performed on the elements
- e.g. $("p").hide()

### CSS Preprocessors
1. LESS
2. SCSS/SASS

you can import custom defined scss/less file into other scss/less file.
```css
@import "foo.min.css"
```

#### 1. LESS
- define variables


#### 1. Variable Declaration and Usage
```css
/*2. SCSS*/
$my-var: 300px;
.nav-height {
  height: $my-var;
}

/*1. LESS*/
@my-var: 300px;
.nav-height {
  height: @my-var;
}
```

#### 2. Nesting
```css
.carousel {
  background: black;
  .carousel-item {
    height: 300px;
    .img {
      position: absolute;
      top: 0;
      left: 0;
      min-height: 300px;
    }
  }
}
```

#### 3. Mixin
```css
/*Scss*/
@mixin .zero-margin {
  margin: 0 auto;
  background: white;
}

.row-header {
  @include zero-margin;
  padding: 0px auto;
}

/*Less*/
.zero-margin {
  margin: 0 auto;
  background: white;
}

.row-header {
  .zero-margin;
  padding: 0px auto;
}
```

#### 3. Mixin with parameters
```css
/*Scss*/
@mixin .zero-margin($pad-up-dn, $pad-left-right) {
  margin: 0 auto;
  padding: $pad-up-dn $pad-left-right;
}

.row-header {
  @include zero-margin(0px, 0px);
  padding: 0px auto;
}

.row-content {
  @include zero-margin(50px, 70px);
  padding: 0px auto;
  background: white;
}

/*Less*/
.zero-margin(@pad-up-dn: 0px, @pad-left-right: 0px) {
  margin: 0 auto;
  padding: @pad-up-dn @pad-left-right;
}

.row-header {
  .zero-margin();
  padding: 0px auto;
}

.row-content {
  .zero-margin(50px, 0px);
  min-height: 400px;
}
```

#### 4. Mathematical Operation
```css
/*SCSS*/
$carousel-height: 300px;
.carousel.item {
  min-height: $carousel-height * 2;
}

/*LESS*/
@carousel-height: 300px;
.carousel.item {
  min-height: @carousel-height * 2;
}
```

## Building and Deployment
- Example CSS Task for Building deployment
  - compling sass or less into css
  - Running autofixer to add any vendor prefixes that are needded
  - Minification: complier don't care about comments, whitespaces and newline, so it remove it
  - Concatenation: concate all css files into single file
- Javascript Task
  - JShint: check for error and potential problems
  - concatenation
  - Uglification: minificaton + mangling (reduce local variable to single letters)
  - rechecking error

### Automatically recomplie code on-change the file
- we need to set watch on file
- NPM model : watch, onChange
- parallel shell: can execute multiple NPM script parallel

### NPM Scripts
 - Watch
 - onchange
 - parallelshell

## Build a distribution folder for deployement
- We saving all deployemeny related file into single distribution folder - **dist**.
- Open .gitignore and update it as follows. We do not want the dist folder to be checked into the git repository.
```.gitignore
node_modules
dist
```
##### Clean out a folder using the clean NPM module.
```sh
npm install --save-dev rimraf
```
- past into scripts of package.json
```json
"clean": "rimraf dist",
```
##### Copy files from one folder to another / copying fonts
- Our project uses font-awesome fonts. These need to be copied to the distribution folder. To help us do this, install the copyfiles NPM module globally as follows:
```sh
npm -g install copyfiles
```
- past into scripts of package.json
```json
"copyfonts": "copyfiles -f node_modules/font-awesome/fonts/* dist/fonts",
```
##### Prepare a minified and concatenated css file from all the css files used in your project
- We use the imagemin-cli NPM module to help us to compress our images to reduce the size of the images being used in our project. Install the imagemin-cli module as follows:
```sh
npm -g install imagemin-cli
```
- past into scripts of package.json
```json
"imagemin": "imagemin img/* --out-dir=\"dist/img\"",
```

##### Prepare an uglified and concatenated JS file containing all the JS code used in your project
- Usemin do concatenation, uglifiaction other task. it requires support of other packages (uglifyjs, cssmin and htmlmin)
- Then, install the usemin-cli, cssmin, uglifyjs and htmlmin NPM packages as follows:
```sh
npm install --save-dev usemin-cli cssmin uglifyjs htmlmin
```
- past into scripts of package.json
```json
"usemin": "usemin contactus.html -d dist --htmlmin -o dist/contactus.html && usemin aboutus.html -d dist --htmlmin -o dist/aboutus.html && usemin index.html -d dist --htmlmin -o dist/index.html",
    "build": "npm run clean && npm run imagemin && npm run copyfonts && npm run usemin"
```
- Further we going to combine all css file into single css file. same for js.
- Open index.html and surround the css links inclusion code as follows.
- notice `<!-- build:css css/main.css -->` and `<!-- endbuild -->`. These are important
```html
<!-- build:css css/main.css -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css">
    <link href="css/styles.css" rel="stylesheet">
    <!-- endbuild -->
```
- Similarly, open index.html and surround the js script inclusion code as follows:
```html
    <!-- build:js js/main.js -->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="js/scripts.js"></script>
    <!-- endbuild -->
```

