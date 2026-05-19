### Install Bulma NPM package

Source: https://bulma.io/documentation/start/installation

Install the Bulma framework using npm. This is the recommended way to get the Sass library for custom builds.

```bash
npm install bulma
```

--------------------------------

### Navbar with Dropup Menu Example

Source: https://bulma.io/documentation/components/navbar

An example showcasing a navbar with a dropup menu, suitable for fixed bottom navigation bars.

```html
<section class="hero is-primary">
  <div class="hero-body">
    <p class="title">
      Documentation
    </p>
    <p class="subtitle">
      Everything you need to <strong>create a website</strong> with Bulma
    </p>
  </div>
</section>

<nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item has-dropdown has-dropdown-up is-active">
        <a class="navbar-link">
          Dropup
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Overview
          </a>
          <a class="navbar-item">
            Elements
          </a>
          <a class="navbar-item">
            Components
          </a>
          <hr class="navbar-divider">
          <div class="navbar-item">
            Version 1.0.4
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
```

--------------------------------

### Install Bulma via Yarn

Source: https://bulma.io/documentation/start/installation

Install the Bulma framework using Yarn. This is an alternative to npm for package management.

```bash
yarn add bulma
```

--------------------------------

### Full Navbar Example with Left and Right Dropdowns

Source: https://bulma.io/documentation/components/navbar

A complete navbar structure demonstrating left-aligned and right-aligned dropdown menus.

```html
<nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-active">
        <a class="navbar-link">
          Left
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Overview
          </a>
          <a class="navbar-item">
            Elements
          </a>
          <a class="navbar-item">
            Components
          </a>
          <hr class="navbar-divider">
          <div class="navbar-item">
            Version 1.0.4
          </div>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item has-dropdown is-active">
        <a class="navbar-link">
          Right
        </a>

        <div class="navbar-dropdown is-right">
          <a class="navbar-item">
            Overview
          </a>
          <a class="navbar-item">
            Elements
          </a>
          <a class="navbar-item">
            Components
          </a>
          <hr class="navbar-divider">
          <div class="navbar-item">
            Version 1.0.4
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

<section class="hero is-primary">
  <div class="hero-body">
    <p class="title">
      Documentation
    </p>
    <p class="subtitle">
      Everything you need to <strong>create a website</strong> with Bulma
    </p>
  </div>
</section>
```

--------------------------------

### Transparent Navbar Example

Source: https://bulma.io/documentation/components/navbar

This example demonstrates a transparent navbar with nested dropdowns and navigation items. It includes a 'Docs' link that reveals a boxed dropdown menu with various sections of the documentation. The navbar also features 'end' aligned items, including a Twitter 'Tweet' button and a primary 'Download' button.

```html
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
        Docs
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Overview
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
            Modifiers
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
            Columns
          </a>
          <a class="navbar-item is-selected" href="https://bulma.io/documentation/layout/container/">
            Layout
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
            Form
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
            Elements
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/components/breadcrumb/">
            Components
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a
              class="bd-tw-button button"
              data-social-network="Twitter"
              data-social-action="tweet"
              data-social-target="https://bulma.io"
              target="_blank"
              href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms"
            >
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span> Tweet </span>
            </a>
          </p>
          <p class="control">
            <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/1.0.4/bulma-1.0.4.zip">
              <span class="icon">
                <i class="fas fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
```

--------------------------------

### Navbar Item Example

Source: https://bulma.io/documentation/components/navbar

Demonstrates a typical navbar item with an icon and text. This can be an anchor tag or a div.

```html
<p class="control">
      <a class="button is-primary">
        <span class="icon">
          <i class="fas fa-download" aria-hidden="true"></i>
        </span>
        <span>Download</span>
      </a>
    </p>
```

--------------------------------

### Basic Navbar Structure

Source: https://bulma.io/documentation/components/navbar

This is a complete basic navbar example. It includes the brand, burger menu for mobile, and navigation links.

```html
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>
</svg>

    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

```

--------------------------------

### Bulma Starter Template

Source: https://bulma.io/documentation/start/overview

A basic HTML template to quickly start building a website with Bulma. It includes the necessary meta tags and links to the Bulma CSS file.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello Bulma!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">
  </head>
  <body>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Hello World
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
    </div>
  </section>
  </body>
</html>
```

--------------------------------

### Nested Media Objects Example

Source: https://bulma.io/documentation/layout/media-object

Demonstrates nesting media objects up to three levels deep. This structure is useful for comment threads or hierarchical content displays.

```html
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Barbara Middleton</strong>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros
        lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris
        sit amet dolor blandit rutrum. Nunc in tempus turpis.
        <br />
        <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
      </p>
    </div>

    <article class="media">
      <figure class="media-left">
        <p class="image is-48x48">
          <img src="https://bulma.io/assets/images/placeholders/96x96.png" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Sean Brown</strong>
            <br />
            Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis
            leo feugiat.
            <br />
            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
          </p>
        </div>

        <article class="media">
          Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem
          cursus ullamcorper sit amet nec massa.
        </article>

        <article class="media">
          Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
          Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
          tincidunt iaculis diam non, porta aliquet tortor.
        </article>
      </div>
    </article>

    <article class="media">
      <figure class="media-left">
        <p class="image is-48x48">
          <img src="https://bulma.io/assets/images/placeholders/96x96.png" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Kayli Eunice </strong>
            <br />
            Sed convallis scelerisque mauris, non pulvinar nunc mattis vel.
            Maecenas varius felis sit amet magna vestibulum euismod malesuada
            cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id
            feugiat.
            <br />
            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
          </p>
        </div>
      </div>
    </article>
  </div>
</article>
```

--------------------------------

### Basic Navbar Structure

Source: https://bulma.io/documentation/components/navbar

This is a basic example of a Bulma navbar containing a logo and a dropdown menu. It demonstrates the core structure for navigation elements.

```html
<nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <a class="navbar-item">
    <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>
</svg>

  </a>

  <div class="navbar-item has-dropdown is-active">
    <a class="navbar-link">
      Docs
    </a>

    <div class="navbar-dropdown">
      <a class="navbar-item">
        Overview
      </a>
      <a class="navbar-item">
        Elements
      </a>
      <a class="navbar-item">
        Components
      </a>
      <hr class="navbar-divider">
      <div class="navbar-item">
        Version 1.0.4
      </div>
    </div>
  </div>
</nav>

<section class="hero is-primary">
  <div class="hero-body">
    <p class="title">
      Documentation
    </p>
```

--------------------------------

### Import Bulma CSS via CDN

Source: https://bulma.io/documentation/start/installation

Include the Bulma CSS file directly from jsDelivr using the @import directive. This is a quick way to get started.

```css
@import "https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css";
```

--------------------------------

### Using Imported Columns

Source: https://bulma.io/documentation/start/modular

Provides an HTML example of how to use the `.columns` and `.column` classes after importing the columns Sass module. These classes are available for creating responsive column layouts.

```html
<div class="columns">
  <div class="column">1</div>
  <div class="column">2</div>
  <div class="column">3</div>
  <div class="column">4</div>
  <div class="column">5</div>
</div>
```

--------------------------------

### Link Bulma CSS via CDN

Source: https://bulma.io/documentation/start/installation

Link the Bulma CSS file from a CDN in your HTML. This method is recommended for easy setup.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css"
>
```

--------------------------------

### Basic Media Object Example

Source: https://bulma.io/documentation/layout/media-object

A standard media object structure with an image on the left, content in the middle, and a delete button on the right. This is useful for displaying user posts or comments.

```html
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
        magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
        sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-reply"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-retweet"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
  <div class="media-right">
    <button class="delete"></button>
  </div>
</article>
```

--------------------------------

### Large fullheight hero with boxed tabs

Source: https://bulma.io/documentation/layout/hero

This example demonstrates a large hero that fills the entire viewport height, featuring a sticky navbar and a full-width, boxed tab navigation at the bottom.

```html
<section class="hero is-info is-large">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://bulma.io/assets/images/bulma-type-white.png" alt="Logo" />
          </a>
          <span class="navbar-burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active"> Home </a>
            <a class="navbar-item"> Examples </a>
            <a class="navbar-item"> Documentation </a>
            <span class="navbar-item">
              <a class="button is-info is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">Title</p>
      <p class="subtitle">Subtitle</p>
    </div>
  </div>

  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active">
            <a>Overview</a>
          </li>
          <li>
            <a>Modifiers</a>
          </li>
          <li>
            <a>Grid</a>
          </li>
          <li>
            <a>Elements</a>
          </li>
          <li>
            <a>Components</a>
          </li>
          <li>
            <a>Layout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</section>
```

--------------------------------

### Complete Form Example with Bulma

Source: https://bulma.io/documentation/form/general

Demonstrates a comprehensive form layout using Bulma's field, control, and various input elements. Includes success and danger states for inputs, select dropdowns, textareas, checkboxes, radio buttons, and grouped buttons for submission.

```html
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
</div>

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" value="bulma">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">This username is available</p>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>

<div class="field">
  <label class="label">Subject</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="radio">
      <input type="radio" name="question">
      Yes
    </label>
    <label class="radio">
      <input type="radio" name="question">
      No
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
```

--------------------------------

### Example Button Usage

Source: https://bulma.io/documentation/start/modular

Illustrates various ways to use the `.button` class and its modifiers in HTML, such as color, size, and state variations. These classes are available after importing the button Sass module.

```html
<button class="button">Button</button>
<button class="button is-primary">Primary button</button>
<button class="button is-large">Large button</button>
<button class="button is-loading">Loading button</button>
```

--------------------------------

### Large Input with Icons (Various Sizes)

Source: https://bulma.io/documentation/form/general

Presents large input fields with icons, showcasing combinations of large inputs with small, normal, and medium icons. The last example shows a large input with large icons.

```html
<div class="field">
  <label class="label is-large">Large input</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-large" type="email" placeholder="Extra small">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope fa-xs"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check fa-xs"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-large" type="email" placeholder="Small">
    <span class="icon is-left">
      <i class="fas fa-envelope fa-sm"></i>
    </span>
    <span class="icon is-right">
      <i class="fas fa-check fa-sm"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-large" type="email" placeholder="Normal">
    <span class="icon is-medium is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-medium is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>
```

--------------------------------

### Navbar Structure and Styling

Source: https://bulma.io/documentation/components/navbar

Defines the HTML structure for a Bulma navbar, including items, dividers, and version display. This is a basic example of how to implement a navbar.

```html
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Examples
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
```

--------------------------------

### Clone Bulma GitHub repository (gh CLI)

Source: https://bulma.io/documentation/start/installation

Clone the Bulma GitHub repository using the GitHub CLI. This is a convenient option if you have the gh tool installed.

```bash
gh repo clone jgthms/bulma
```

--------------------------------

### Bulma Navbar Start and End Structure

Source: https://bulma.io/documentation/components/navbar

Shows the placement of navbar-start and navbar-end as direct children of the navbar-menu. On desktop, navbar-start aligns left and navbar-end aligns right.

```html
<div class="navbar-menu">
  <div class="navbar-start">
    <!-- navbar items -->
  </div>

  <div class="navbar-end">
    <!-- navbar items -->
  </div>
</div>
```

--------------------------------

### Normal Input with Icons (Various Sizes)

Source: https://bulma.io/documentation/form/general

Shows normal sized input fields with icons, including examples with extra small (`fa-xs`) and normal sized icons. Bulma centers icons regardless of input or icon size.

```html
<div class="field">
  <label class="label">Normal input</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Extra small">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope fa-xs"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check fa-xs"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Normal">
    <span class="icon is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>
```

--------------------------------

### Apply styles from a breakpoint with `from()`

Source: https://bulma.io/documentation/sass/responsive-mixins

Use the `from()` mixin to apply styles to elements when the screen width is greater than or equal to the specified breakpoint. This example shows how to change the background color.

```sass
@use "bulma/sass/utilities/mixins";

.my-element {
  background: red;

  @include mixins.from(1280px) {
    background: blue;
  }
}
```

```css
.my-element {
  background: red;
}

@media screen and (min-width: 1280px) {
  .my-element {
    background: blue;
  }
}
```

--------------------------------

### Navbar Dropdown with Arrowless Links

Source: https://bulma.io/documentation/components/navbar

An example of a navbar dropdown where the links do not display the default arrow.

```html
<div class="navbar-item has-dropdown is-hoverable">
  <a class="navbar-link is-arrowless">
    Link without arrow
  </a>
  <div class="navbar-dropdown">
    <a class="navbar-item">
      Overview
    </a>
    <a class="navbar-item">
      Elements
    </a>
    <a class="navbar-item">
      Components
    </a>
    <hr class="navbar-divider">
    <div class="navbar-item">
      Version 1.0.4
    </div>
  </div>
</div>
```

--------------------------------

### Apply styles until a breakpoint with `until()` and `from()`

Source: https://bulma.io/documentation/sass/responsive-mixins

Use `until()` to apply styles for screen widths narrower than a breakpoint (with a 1px offset) and `from()` for widths equal to or greater than the same breakpoint. This ensures no gap between styles for adjacent screen sizes. This example changes background colors based on screen width.

```sass
@use "bulma/sass/utilities/mixins";

$breakpoint: 1280px;

.my-element {
  @include mixins.until($breakpoint) {
    background: green;
  }

  @include mixins.from($breakpoint) {
    background: orange;
  }
}
```

```css
@media screen and (max-width: 1279px) {
  .my-element {
    background: green;
  }
}

@media screen and (min-width: 1280px) {
  .my-element {
    background: orange;
  }
}
```

--------------------------------

### Right-Aligned File Input

Source: https://bulma.io/documentation/form/file

Align the file input to the right using the `is-right` modifier. This example demonstrates a simple file input with an info color scheme.

```html
<div class="file is-right is-info">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Right file… </span>
    </span>
    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>
  </label>
</div>
```

--------------------------------

### Media Object with Form Elements

Source: https://bulma.io/documentation/layout/media-object

This example demonstrates how to embed form elements, such as a textarea and buttons, within a media object. It's suitable for comment sections where users can input text.

```html
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
    </p>
  </figure>
  <div class="media-content">
    <div class="field">
      <p class="control">
        <textarea class="textarea" placeholder="Add a comment..."></textarea>
      </p>
    </div>
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <a class="button is-info">Submit</a>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <label class="checkbox">
            <input type="checkbox" /> Press enter to submit
          </label>
        </div>
      </div>
    </nav>
  </div>
</article>
```

--------------------------------

### Append Static Button to Input

Source: https://bulma.io/documentation/form/general

You can attach inputs, buttons, and dropdowns. This example shows appending a static text button like '@gmail.com' to an input field.

```html
<div class="field has-addons">
  <p class="control">
    <input class="input" type="text" placeholder="Your email">
  </p>
  <p class="control">
    <a class="button is-static">
      @gmail.com
    </a>
  </p>
</div>
```

--------------------------------

### Configuring Sass Variables for Section Padding

Source: https://bulma.io/documentation/start/modular

Shows how to customize Bulma's Sass variables when importing a module. This example demonstrates overriding the padding variables for the `.section` component.

```sass
// Load the section component with custom variables
@use "bulma/sass/layout/section" with (
  $section-padding: 3rem,
  $section-padding-desktop: 4.5rem
);
```

--------------------------------

### Right-Aligned Form Addons

Source: https://bulma.io/documentation/form/general

Use the `has-addons-right` modifier on the `field` container to right-align the form addons. This example demonstrates currency selection and an input field aligned to the right.

```html
<div class="field has-addons has-addons-right">
  <p class="control">
    <span class="select">
      <select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </select>
    </span>
  </p>
  <p class="control">
    <input class="input" type="text" placeholder="Amount of money">
  </p>
  <p class="control">
    <button class="button is-primary">
      Transfer
    </button>
  </p>
</div>
```

--------------------------------

### Centered File Input with Boxed Style

Source: https://bulma.io/documentation/form/file

Use the `is-centered` modifier to align the file input to the center. This example also uses `is-boxed` and `has-name` for a more complete UI.

```html
<div class="file is-centered is-boxed is-success has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Centered file… </span>
    </span>
    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>
  </label>
</div>
```

--------------------------------

### Centered Form Addons Alignment

Source: https://bulma.io/documentation/form/general

Use the `has-addons-centered` modifier on the `field` container to center align the form addons. This example shows currency selection and an input field.

```html
<div class="field has-addons has-addons-centered">
  <p class="control">
    <span class="select">
      <select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </select>
    </span>
  </p>
  <p class="control">
    <input class="input" type="text" placeholder="Amount of money">
  </p>
  <p class="control">
    <button class="button is-primary">
      Transfer
    </button>
  </p>
</div>
```

--------------------------------

### Bulma Navbar Toggle with jQuery

Source: https://bulma.io/documentation/components/navbar

An example using jQuery to toggle the 'is-active' class on the navbar-burger and navbar-menu elements when the burger icon is clicked.

```javascript
$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});
```

--------------------------------

### Transparent Navbar Example

Source: https://bulma.io/documentation/components/navbar

Add the `is-transparent` modifier to the `navbar` component to remove background styles from navbar items. This is useful for integrating the navbar into complex visual designs.

```html
<nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>
</svg>

    </a>
    <div class="navbar-burger js-burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="https://bulma.io/"> Home </a>
      <div class="navbar-item has-dropdown is-active">

```

--------------------------------

### Group Form Controls with is-grouped

Source: https://bulma.io/documentation/form/general

Use the `is-grouped` modifier on the `field` container to group controls together. This example shows basic grouping for submit and cancel buttons.

```html
<div class="field is-grouped">
  <p class="control">
    <button class="button is-primary">
      Submit
    </button>
  </p>
  <p class="control">
    <a class="button is-light">
      Cancel
    </a>
  </p>
</div>
```

--------------------------------

### Full Width Select Dropdown in Addons

Source: https://bulma.io/documentation/form/general

Pair `control is-expanded` with `select is-fullwidth` to create a full-width select dropdown within a form addon. This example shows a country selection dropdown.

```html
<div class="field has-addons">
  <div class="control is-expanded">
    <div class="select is-fullwidth">
      <select name="country">
        <option value="Argentina">Argentina</option>
        <option value="Bolivia">Bolivia</option>
        <option value="Brazil">Brazil</option>
        <option value="Chile">Chile</option>
        <option value="Colombia">Colombia</option>
        <option value="Ecuador">Ecuador</option>
        <option value="Guyana">Guyana</option>
        <option value="Paraguay">Paraguay</option>
        <option value="Peru">Peru</option>
        <option value="Suriname">Suriname</option>
        <option value="Uruguay">Uruguay</option>
        <option value="Venezuela">Venezuela</option>
      </select>
    </div>
  </div>
  <div class="control">
    <button type="submit" class="button is-primary">Choose</button>
  </div>
</div>
```

--------------------------------

### Navbar Brand with Logo and Link

Source: https://bulma.io/documentation/components/navbar

Example of a navbar brand containing a logo linked to the homepage. The navbar brand is always visible, so keep its content concise to avoid horizontal overflow on small devices.

```html
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>
</svg>

    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
```

--------------------------------

### Create a Basic Dropdown Menu

Source: https://bulma.io/documentation/components/navbar

Construct a dropdown menu using `navbar-item` with `has-dropdown`, `navbar-link`, and `navbar-dropdown` classes. This structure is essential for dropdown functionality.

```html
<nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-item has-dropdown">
    <a class="navbar-link">
      Docs
    </a>

    <div class="navbar-dropdown">
      <a class="navbar-item">
        Overview
      </a>
      <a class="navbar-item">
        Elements
      </a>
      <a class="navbar-item">
        Components
      </a>
      <hr class="navbar-divider">
      <div class="navbar-item">
        Version 1.0.4
      </div>
    </div>
  </div>
</nav>
```

--------------------------------

### Medium Input with Icons (Various Sizes)

Source: https://bulma.io/documentation/form/general

Illustrates medium sized input fields with icons, demonstrating combinations of medium inputs with small, normal, and medium icons.

```html
<div class="field">
  <label class="label is-medium">Medium input</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-medium" type="email" placeholder="Extra small">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope fa-xs"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check fa-xs"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-medium" type="email" placeholder="Small">
    <span class="icon is-left">
      <i class="fas fa-envelope fa-sm"></i>
    </span>
    <span class="icon is-right">
      <i class="fas fa-check fa-sm"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-medium" type="email" placeholder="Normal">
    <span class="icon is-medium is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-medium is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>
```

--------------------------------

### Use Bulma Until Mixin

Source: https://bulma.io/documentation/sass/responsive-mixins

Apply styles for screens smaller than the FullHD breakpoint.

```scss
@use "bulma/sass/utilities/mixins";

@include mixins.until {
  // Styles applied
  // below $fullhd
}
```

--------------------------------

### Use Bulma Desktop Mixin

Source: https://bulma.io/documentation/sass/responsive-mixins

Apply styles for screens larger than the desktop breakpoint.

```scss
@use "bulma/sass/utilities/mixins";

@include mixins.desktop {
  // Styles applied
  // above $desktop
}
```

--------------------------------

### Use Bulma Desktop-Only Mixin

Source: https://bulma.io/documentation/sass/responsive-mixins

Apply styles specifically for the desktop screen size, between desktop and widescreen breakpoints.

```scss
@use "bulma/sass/utilities/mixins";

@include mixins.desktop-only {
  // Styles applied
  // between $desktop
  // and $widescreen
}
```

--------------------------------

### Importing Bulma Base Styles and Themes

Source: https://bulma.io/documentation/start/modular

This snippet shows how to import Bulma's essential base styles and themes, which include the minireset and default variables. It's recommended to load these before other components.

```sass
// Load Bulma's base styles and themes (including the minireset)
@use "bulma/sass/base";
@use "bulma/sass/themes";
```

--------------------------------

### Fullheight hero with header and download button

Source: https://bulma.io/documentation/layout/hero

This snippet illustrates a full-height hero with a sticky header containing a brand logo and a download button, suitable for landing pages.

```html
<section class="hero is-success is-fullheight">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://bulma.io/assets/images/bulma-type-white.png" alt="Logo" />
          </a>
          <span class="navbar-burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active"> Home </a>
            <a class="navbar-item"> Examples </a>
            <a class="navbar-item"> Documentation </a>
            <span class="navbar-item">
              <a class="button is-success is-inverted">
                <span class="icon">

```

--------------------------------

### Basic Sass Module Import

Source: https://bulma.io/documentation/start/modular

Demonstrates the basic usage of the `@use` directive to import a Sass file. This method loads the target file's styles but may not include base styles or variables from default themes.

```sass
@use "path/to/file.scss";
```

--------------------------------

### Bulma Boxed File Input with Name

Source: https://bulma.io/documentation/form/file

Combines the `has-name` and `is-boxed` modifiers to create a boxed file input that also displays the selected file's name.

```html
<div class="file has-name is-boxed">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Choose a file… </span>
    </span>
    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>
  </label>
</div>
```

--------------------------------

### Small Input with Icons

Source: https://bulma.io/documentation/form/general

Demonstrates a small input field with both left and right icons. The size of the input and icons can be controlled using specific size modifiers.

```html
<div class="field">
  <label class="label is-small">Small input</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-small" type="email" placeholder="Normal">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>
```

--------------------------------

### Use Bulma Tablet-Only Mixin

Source: https://bulma.io/documentation/sass/responsive-mixins

Apply styles specifically for the tablet screen size, between tablet and desktop breakpoints.

```scss
@use "bulma/sass/utilities/mixins";

@include mixins.tablet-only {
  // Styles applied
  // between $tablet
  // and $desktop
}
```

--------------------------------

### No Helpers, Prefixed Bulma Version

Source: https://bulma.io/documentation/start/alternative-versions

This version provides the core Bulma components without helper classes and uses a 'bulma-' prefix for all class names. Ideal for projects needing a clean slate with no class name collisions.

```html
<section class="bulma-section">
  <div class="bulma-container">
    <h1 class="bulma-title">
      Hello World
    </h1>
    <p class="bulma-subtitle">
      My first website with
      <strong>Bulma</strong>!
    </p>
  </div>
</section>
```

--------------------------------

### Importing Multiple Elements and Components

Source: https://bulma.io/documentation/start/modular

Demonstrates importing multiple Bulma elements (button, title) and components (message) along with base styles and themes. This approach allows for a tailored inclusion of UI elements.

```sass
// Load Bulma's base styles and themes (including the minireset)
@use "bulma/sass/base";
@use "bulma/sass/themes";

// Load the button and title elements and components
@use "bulma/sass/elements/button";
@use "bulma/sass/elements/title";
@use "bulma/sass/components/message";
```

--------------------------------

### Bulma Info Colored File Input with Name

Source: https://bulma.io/documentation/form/file

Styles the file input with the `is-info` color modifier and includes a name placeholder using `has-name`.

```html
<div class="file is-info has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Info file… </span>
    </span>
    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>
  </label>
</div>
```

--------------------------------

### Media Object with Nested Media

Source: https://bulma.io/documentation/layout/media-object

Demonstrates how to nest media objects within each other to create comment threads or similar structures. Each nested media object follows the same structure.

```html
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Jane Doe</strong> <small>@janedoe</small> <small>31m</small>
        <br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Pellentesque tempus, lorem et interdum non, lorem ipsum.
      </p>
    </div>

    <article class="media">
      <figure class="media-left">
        <p class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Image">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Pellentesque tempus, lorem et interdum non, lorem ipsum.
          </p>
        </div>
      </div>
    </article>

    <article class="media">
      <figure class="media-left">
        <p class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Image">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Jane Doe</strong> <small>@janedoe</small> <small>31m</small>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Pellentesque tempus, lorem et interdum non, lorem ipsum.
          </p>
        </div>
      </div>
    </article>
  </div>
</article>
```

--------------------------------

### Use Bulma Tablet Mixin

Source: https://bulma.io/documentation/sass/responsive-mixins

Apply styles for screens larger than the tablet breakpoint.

```scss
@use "bulma/sass/utilities/mixins";

@include mixins.tablet {
  // Styles applied
  // above $tablet
}
```

--------------------------------

### Use Bulma Touch Mixin

Source: https://bulma.io/documentation/sass/responsive-mixins

Apply styles for touch devices, typically screens below the desktop breakpoint.

```scss
@use "bulma/sass/utilities/mixins";

@include mixins.touch {
  // Styles applied
  // below $desktop
}
```

--------------------------------

### Use Bulma FullHD Mixin

Source: https://bulma.io/documentation/sass/responsive-mixins

Apply styles for screens with a resolution of FullHD and above.

```scss
@use "bulma/sass/utilities/mixins";

@include mixins.fullhd {
  // Styles applied
  // above $fullhd
}
```

--------------------------------

### Complete Bulma Version

Source: https://bulma.io/documentation/start/alternative-versions

Use this version for a full Bulma experience including all components and helper classes. It's the standard, un-prefixed version.

```html
<section class="section">
  <div class="container has-text-centered">
    <h1 class="title">
      Hello World
    </h1>
    <p class="subtitle">
      My first website with
      <strong class="has-text-primary">Bulma</strong>!
    </p>
  </div>
</section>
```

--------------------------------

### Input with Left and Right Icons

Source: https://bulma.io/documentation/form/general

Use `has-icons-left` and `has-icons-right` on the control, and `icon is-left`/`icon is-right` on the icon spans. The input must be the control's first child.

```html
<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button class="button is-success">
      Login
    </button>
  </p>
</div>
```

--------------------------------

### Importing Specific Bulma Components

Source: https://bulma.io/documentation/start/modular

Illustrates how to import individual Bulma components like buttons and messages after loading the base styles and themes. This allows for a more granular control over your CSS.

```sass
// Load Bulma's base styles and themes (including the minireset)
@use "bulma/sass/base";
@use "bulma/sass/themes";

// Load other Bulma components
@use "bulma/sass/elements/button";
@use "bulma/sass/components/message";
```

--------------------------------

### Bulma File Input with Name Placeholder

Source: https://bulma.io/documentation/form/file

Use the `has-name` modifier to display the selected file's name. This is useful for providing user feedback after a file has been chosen.

```html
<div class="file has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Choose a file… </span>
    </span>
    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>
  </label>
</div>
```

--------------------------------

### Fullheight Hero Layout

Source: https://bulma.io/documentation/layout/hero

This snippet demonstrates the basic structure of a full-height hero with distinct header, body, and footer sections. Use this for creating prominent introductory areas on your page.

```html
<section class="hero is-fullheight">
  <!-- Hero header: will stick on the top -->
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Examples
            </a>
            <a class="navbar-item">
              Documentation
            </a>
            <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">Title</p>
      <p class="subtitle">Subtitle</p>
    </div>
  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
```

--------------------------------

### Replace Deprecated Tiles with Smart Grid

Source: https://bulma.io/documentation/start/migrating-to-v1

The 'tile' component has been deprecated. Use the new 'grid' and 'cell' classes for layout.

```html
<!-- Before -->
<div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Hello World</p>
      <p class="subtitle">What is up?</p>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Foo</p>
      <p class="subtitle">Bar</p>
    </article>
  </div>
</div>
```

```html
<!-- After -->
<div class="grid">
  <div class="cell">
    <article class="box">
      <p class="title">Hello World</p>
      <p class="subtitle">What is up?</p>
    </article>
  </div>
  <div class="cell">
    <article class="box">
      <p class="title">Foo</p>
      <p class="subtitle">Bar</p>
    </article>
  </div>
</div>
```

--------------------------------

### Bulma Fullwidth File Input

Source: https://bulma.io/documentation/form/file

Use the `is-fullwidth` modifier to make the file input name expand to fill available horizontal space.

```html
<div class="file has-name is-fullwidth">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Choose a file… </span>
    </span>
    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>
  </label>
</div>
```

--------------------------------

### Bulma Multiple Fields: Name and Email

Source: https://bulma.io/documentation/form/general

Demonstrates using multiple 'field' containers for distinct form inputs like name and email.

```html
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="e.g Alex Smith">
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
  </div>
</div>
```

--------------------------------

### Bulma File Component: Small Size with Name Display

Source: https://bulma.io/documentation/form/file

Combines the `is-small` size with the `has-name` class to display the selected file's name. This provides user feedback after selection.

```html
<div class="file is-small has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Small file… </span>
    </span>
    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>
  </label>
</div>
```

--------------------------------

### Fullheight hero with navbar and tabs

Source: https://bulma.io/documentation/layout/hero

This snippet shows a medium-sized hero that spans the full viewport height, featuring a sticky navbar at the top and a tabbed navigation at the bottom.

```html
<section class="hero is-primary is-medium">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://bulma.io/assets/images/bulma-type-white.png" alt="Logo" />
          </a>
          <span class="navbar-burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active"> Home </a>
            <a class="navbar-item"> Examples </a>
            <a class="navbar-item"> Documentation </a>
            <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">Title</p>
      <p class="subtitle">Subtitle</p>
    </div>
  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot">
    <nav class="tabs">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
```

--------------------------------

### Bulma File Component: Normal Size

Source: https://bulma.io/documentation/form/file

Uses the default `is-normal` size for the file input. This is the standard appearance.

```html
<div class="file is-normal">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Normal file… </span>
    </span>
  </label>
</div>
```

--------------------------------

### Clone Bulma GitHub repository (HTTPS)

Source: https://bulma.io/documentation/start/installation

Clone the Bulma GitHub repository using HTTPS. This is a standard way to download the source code.

```bash
git clone https://github.com/jgthms/bulma.git
```

--------------------------------

### Hero Section for Documentation

Source: https://bulma.io/documentation/components/navbar

Provides a hero banner with a title and subtitle, commonly used at the top of documentation pages.

```html
<section class="hero">
  <div class="hero-body">
    <p class="title">
      Documentation
    </p>
    <p class="subtitle">
      Everything you need to <strong>create a website</strong> with Bulma
    </p>
  </div>
</section>
```

--------------------------------

### Media Object Structure

Source: https://bulma.io/documentation/layout/media-object

Basic structure of a media object with an image and content. Use the `media` class for the container, `media-left` for the image, and `media-content` for the text.

```html
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
        <br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Pellentesque tempus, lorem et interdum non, lorem ipsum. 
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item" aria-label="reply">
          <span class="icon is-small">
            <i class="fas fa-reply" aria-hidden="true"></i>
          </span>
        </a>
        <a class="level-item" aria-label="retweet">
          <span class="icon is-small">
            <i class="fas fa-retweet" aria-hidden="true"></i>
          </span>
        </a>
        <a class="level-item" aria-label="like">
          <span class="icon is-small">
            <i class="fas fa-heart" aria-hidden="true"></i>
          </span>
        </a>
      </div>
    </nav>
  </div>
</article>
```

--------------------------------

### Use Bulma Until-Widescreen Mixin

Source: https://bulma.io/documentation/sass/responsive-mixins

Apply styles for screens smaller than the widescreen breakpoint.

```scss
@use "bulma/sass/utilities/mixins";

@include mixins.until-widescreen {
  // Styles applied
  // below $widescreen
}
```

--------------------------------

### Importing Columns Module

Source: https://bulma.io/documentation/start/modular

Shows how to import only the Bulma columns module, which does not rely on theme-defined CSS variables. This is useful when you only need layout features.

```sass
// Only load the columns
@use "bulma/sass/grid/columns";
```

--------------------------------

### Bulma Danger Colored Boxed File Input with Name

Source: https://bulma.io/documentation/form/file

Combines `is-danger` color, `is-boxed` style, and `has-name` modifier for a danger-themed file input that displays the selected file name.

```html
<div class="file is-danger has-name is-boxed">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-cloud-upload-alt"></i>
      </span>
      <span class="file-label"> Danger file… </span>
    </span>
    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>
  </label>
</div>
```

--------------------------------

### Bulma Normal File Input

Source: https://bulma.io/documentation/form/file

The default size for the file input is 'normal'. This is applied by default if no size modifier is used.

```html
<div class="file is-normal is-boxed has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Normal file… </span>
    </span>
    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>
  </label>
</div>
```

--------------------------------

### Style Input Placeholder with Mixin

Source: https://bulma.io/documentation/sass/mixins

The `placeholder()` mixin allows for custom styling of input placeholders. The `$offset` parameter can be used to adjust the position of the placeholder text.

```scss
.bulma-placeholder-mixin {
  @include mixins.placeholder {
    color: lightblue;
  }
}
```

--------------------------------

### Navbar Item with Field Element

Source: https://bulma.io/documentation/components/navbar

Demonstrates using a navbar-item to contain arbitrary content, such as a form field.

```html
<div class="navbar-item">
  <div class="field is-grouped">
    <p class="control">
      <a class="button">
        <span class="icon">
          <i class="fas fa-twitter" aria-hidden="true"></i>
        </span>
```

--------------------------------

### Bulma Field with Label, Control, and Help Text

Source: https://bulma.io/documentation/form/general

Use the 'field' container to group a label, a form control, and optional help text for consistent spacing.

```html
<div class="field">
  <label class="label">Label</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
  <p class="help">This is a help text</p>
</div>
```

--------------------------------

### Bulma Form Control with Select Dropdown

Source: https://bulma.io/documentation/form/general

Use the 'control' container with a 'select' element to create enhanced dropdowns.

```html
<div class="control">
  <div class="select">
    <select>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
</div>
```

--------------------------------

### Prefixed Bulma Version

Source: https://bulma.io/documentation/start/alternative-versions

This version includes all components and helper classes but uses a 'bulma-' prefix for all class names to avoid potential conflicts with other CSS frameworks.

```html
<section class="bulma-section">
  <div class="bulma-container bulma-has-text-centered">
    <h1 class="bulma-title">
      Hello World
    </h1>
    <p class="bulma-subtitle">
      My first website with
      <strong class="bulma-has-text-primary">Bulma</strong>!
    </p>
  </div>
</section>
```

--------------------------------

### Bulma File Component: Normal Size with Name Display

Source: https://bulma.io/documentation/form/file

Uses the `is-normal` size and `has-name` class to show the selected file's name. This is a common pattern for user-friendly file uploads.

```html
<div class="file is-normal has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Normal file… </span>
    </span>
    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>
  </label>
</div>
```

--------------------------------

### Bulma File Component: Medium Size with Name Display

Source: https://bulma.io/documentation/form/file

Applies the `is-medium` size and `has-name` class to display the chosen file's name. This variation offers a larger clickable area and clear feedback.

```html
<div class="file is-medium has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Medium file… </span>
    </span>
    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>
  </label>
</div>
```

--------------------------------

### Bulma Small File Input

Source: https://bulma.io/documentation/form/file

Use the `is-small` modifier for a smaller file input. Ensure the `has-name` class is present if a file name is displayed.

```html
<div class="file is-small is-boxed has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Small file… </span>
    </span>
    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>
  </label>
</div>
```

--------------------------------

### Center Element with Mixin

Source: https://bulma.io/documentation/sass/mixins

Use the `center()` mixin to absolutely position an element with fixed dimensions at the center of its closest positioned ancestor. Ensure `$width` and optionally `$height` parameters are provided.

```scss
.bulma-center-mixin {
  @include mixins.center;
}
```

--------------------------------

### Clone Bulma GitHub repository (SSH)

Source: https://bulma.io/documentation/start/installation

Clone the Bulma GitHub repository using SSH. This method includes the documentation and is useful for contributing or advanced customization.

```bash
git clone git@github.com:jgthms/bulma.git
```

--------------------------------

### Use Bulma Mobile Mixin

Source: https://bulma.io/documentation/sass/responsive-mixins

Apply styles for mobile devices, which are styles applied below the tablet breakpoint.

```scss
@use "bulma/sass/utilities/mixins";

@include mixins.mobile {
  // Styles applied
  // below $tablet
}
```

--------------------------------

### Bulma Medium File Input

Source: https://bulma.io/documentation/form/file

Use the `is-medium` modifier to increase the size of the file input. This is useful for larger interfaces or when more visual prominence is needed.

```html
<div class="file is-medium is-boxed has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Medium file… </span>
    </span>
    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>
  </label>
</div>
```

--------------------------------

### Bulma Warning Colored Boxed File Input

Source: https://bulma.io/documentation/form/file

Applies the `is-warning` color modifier and `is-boxed` style to the file input. Note the different upload icon.

```html
<div class="file is-warning is-boxed">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-cloud-upload-alt"></i>
      </span>
      <span class="file-label"> Warning file… </span>
    </span>
  </label>
</div>
```

--------------------------------

### Loader Mixin for Spinning Circle

Source: https://bulma.io/documentation/sass/mixins

Use the `loader()` mixin to create a 1em spinning circle element.

```sass
.bulma-loader-mixin {
  @include mixins.loader;
}
```

```html
<span class="bulma-loader-mixin"></span>
```

--------------------------------

### Basic Hero Banner

Source: https://bulma.io/documentation/layout/hero

Use this for a standard hero banner. Ensure 'hero' is the main container and 'hero-body' is a direct child.

```html
<section class="hero">
  <div class="hero-body">
    <p class="title">Hero title</p>
    <p class="subtitle">Hero subtitle</p>
  </div>
</section>
```

--------------------------------

### Bulma Navbar Menu Visibility

Source: https://bulma.io/documentation/components/navbar

Illustrates how the navbar-menu is hidden by default on touch devices and shown when the 'is-active' class is applied.

```html
<div class="navbar-menu">
  <!-- hidden on mobile -->
</div>

<div class="navbar-menu is-active">
  <!-- shown on mobile -->
</div>
```

--------------------------------

### Use Bulma Widescreen-Only Mixin

Source: https://bulma.io/documentation/sass/responsive-mixins

Apply styles specifically for the widescreen screen size, between widescreen and FullHD breakpoints.

```scss
@use "bulma/sass/utilities/mixins";

@include mixins.widescreen-only {
  // Styles applied
  // between $widescreen
  // and $fullhd
}
```

--------------------------------

### Attach Controls with `has-addons`

Source: https://bulma.io/documentation/form/general

Use the `has-addons` modifier on the `field` container to attach controls like inputs and buttons together.

```html
<div class="field has-addons">
  <div class="control">
    <input class="input" type="text" placeholder="Find a repository">
  </div>
  <div class="control">
    <button class="button is-info">
      Search
    </button>
  </div>
</div>
```

--------------------------------

### Use Bulma Widescreen Mixin

Source: https://bulma.io/documentation/sass/responsive-mixins

Apply styles for screens larger than the widescreen breakpoint.

```scss
@use "bulma/sass/utilities/mixins";

@include mixins.widescreen {
  // Styles applied
  // above $widescreen
}
```

--------------------------------

### Media Object with Comment Input

Source: https://bulma.io/documentation/layout/media-object

Shows a media object structure combined with form elements for user input, such as a textarea for comments and a button to submit.

```html
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
    </p>
  </figure>
  <div class="media-content">
    <div class="field">
      <p class="control">
        <textarea class="textarea" placeholder="Add a comment..."></textarea>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button">Post comment</button>
      </p>
    </div>
  </div>
</article>
```

--------------------------------

### Active Dropdown Navbar Item

Source: https://bulma.io/documentation/components/navbar

Shows how to create an active dropdown item within a Bulma navbar. Ensure the parent `navbar-item` has the `has-dropdown is-active` classes.

```html
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
```

--------------------------------

### Basic Navbar Item Link

Source: https://bulma.io/documentation/components/navbar

A simple navbar-item used as a navigation link.

```html
<a class="navbar-item">
  Home
</a>
```

--------------------------------

### Enable `-webkit-overflow-scrolling: touch` with Mixin

Source: https://bulma.io/documentation/sass/mixins

The `overflow-touch()` mixin adds the `-webkit-overflow-scrolling: touch;` rule, improving scrolling performance on touch devices for elements with overflow.

--------------------------------

### Dropup Menu for Bottom Navbar

Source: https://bulma.io/documentation/components/navbar

Implement a dropup menu by adding `has-dropdown-up` to the `navbar-item` when using a navbar at the bottom of the page.

```html
<div class="navbar-item has-dropdown has-dropdown-up is-hoverable">
  <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
    Docs
  </a>
  <div class="navbar-dropdown">
    <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
      Overview
    </a>
  </div>
</div>
```

--------------------------------

### Bulma File Component: Small Boxed Style

Source: https://bulma.io/documentation/form/file

Applies the `is-boxed` modifier along with `is-small` to create a compact, box-shaped file input. This style is useful for visually distinct sections.

```html
<div class="file is-small is-boxed">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Small file… </span>
    </span>
  </label>
</div>
```

--------------------------------

### Bulma Primary Colored File Input

Source: https://bulma.io/documentation/form/file

Applies the `is-primary` color modifier to the file input component for primary branding.

```html
<div class="file is-primary">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Primary file… </span>
    </span>
  </label>
</div>
```

--------------------------------

### Hero Body Padding Sass Variables

Source: https://bulma.io/documentation/layout/hero

These Sass variables define the padding for the hero body at different screen sizes. Use them to customize spacing.

```sass
$hero-body-padding
```

```sass
$hero-body-padding-tablet
```

```sass
$hero-body-padding-small
```

```sass
$hero-body-padding-medium
```

```sass
$hero-body-padding-large
```

--------------------------------

### Bulma File Component: Normal Boxed Style

Source: https://bulma.io/documentation/form/file

Uses the `is-boxed` modifier with the default `is-normal` size for a standard box-shaped file input. This provides a clear visual container for the upload.

```html
<div class="file is-normal is-boxed">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Normal file… </span>
    </span>
  </label>
</div>
```

--------------------------------

### Bulma File Component: Small Size

Source: https://bulma.io/documentation/form/file

Applies the `is-small` modifier to the file input for a smaller appearance. This is useful for compact interfaces.

```html
<div class="file is-small">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Small file… </span>
    </span>
  </label>
</div>
```

--------------------------------

### Media Object with Image Only

Source: https://bulma.io/documentation/layout/media-object

Conversely, a media object can consist only of an image, useful for galleries or image-centric layouts. The `media-content` is omitted in this case.

```html
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
    </p>
  </figure>
</article>
```

--------------------------------

### Library Only Bulma Version

Source: https://bulma.io/documentation/start/alternative-versions

This version includes only the core Bulma components without any helper classes. It's useful when you want to build your own utility classes or use a different set of helpers.

```html
<section class="section">
  <div class="container">
    <h1 class="title">
      Hello World
    </h1>
    <p class="subtitle">
      My first website with
      <strong>Bulma</strong>!
    </p>
  </div>
</section>
```

--------------------------------

### Bulma Navbar Toggle with Vanilla JavaScript

Source: https://bulma.io/documentation/components/navbar

Provides a Vanilla JavaScript implementation to toggle the 'is-active' class on both the navbar-burger and the target navbar-menu upon clicking the burger icon.

```html
<a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>

<div class="navbar-menu" id="navMenu">
  <!-- navbar-start, navbar-end... -->
</div>
```

```javascript
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
```

--------------------------------

### Basic Button

Source: https://bulma.io/documentation/start/syntax

This is the most basic button structure in Bulma. It uses the 'button' class for default styling.

```html
<button class="button">Button</button>
```

--------------------------------

### Bulma Large File Input

Source: https://bulma.io/documentation/form/file

Apply the `is-large` modifier for the largest file input size. This provides maximum visual impact for the file selection element.

```html
<div class="file is-large is-boxed has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Large file… </span>
    </span>
    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>
  </label>
</div>
```

--------------------------------

### Directional Styling with LTR and RTL Mixins

Source: https://bulma.io/documentation/sass/mixins

Utilize `ltr` and `rtl` mixins to conditionally apply styles based on the global `$rtl` flag, useful for properties like padding and border-radius that differ in left-to-right and right-to-left layouts.

```scss
.bulma-ltr-rtl-mixin {
  background-color: lightgreen;
  padding: 0.5em 1em;
  border: 1px solid seagreen;
  margin-right: -1px;

  &:first-child {
    @include mixins.ltr {
      border-bottom-left-radius: 0.5em;
      border-top-left-radius: 0.5em;
    }

    @include mixins.rtl {
      border-bottom-right-radius: 0.5em;
      border-top-right-radius: 0.5em;
    }
  }

  &:last-child {
    @include mixins.ltr {
      border-bottom-right-radius: 0.5em;
      border-top-right-radius: 0.5em;
    }

    @include mixins.rtl {
      border-bottom-left-radius: 0.5em;
      border-top-left-radius: 0.5em;
    }
  }
}
```

--------------------------------

### Update Sass Imports from @import to @use

Source: https://bulma.io/documentation/start/migrating-to-v1

Bulma v1 recommends using Dart Sass's `@use` and `@forward` keywords instead of the older `@import` syntax for better module management and performance.

```scss
// Before
$purple: #8A4D76;
$pink: #FA7C91;
$brown: #757763;
$beige-light: #D0D1CD;
$beige-lighter: #EFF0EB;

// Update Bulma's global variables
$family-sans-serif: "Nunito", sans-serif;
$grey-dark: $brown;
$grey-light: $beige-light;
$primary: $purple;
$link: $pink;

// Update some of Bulma's component variables
$control-border-width: 2px;
$input-background-color: $beige-lighter;
$input-border-color: transparent;
$input-shadow: none;

// Import the rest of Bulma
@import "../path/to/bulma";
```

```scss
// After
$purple: #8a4d76;
$pink: #fa7c91;
$brown: #757763;
$beige-light: #d0d1cd;
$beige-lighter: #eff0eb;

// Path to Bulma's sass folder
@use "path/to/bulma/sass" with (
  $family-primary: '"Nunito", sans-serif',
  $grey-dark: $brown,
  $grey-light: $beige-light,
  $primary: $purple,
  $link: $pink,
  $control-border-width: 2px,
  $input-h: color.hue($beige-lighter),
  $input-s: color.saturation($beige-lighter),
  $input-background-l: color.lightness($beige-lighter),
  $input-border-l: color.lightness($beige-lighter),
  $input-shadow: none
);
```

--------------------------------

### Input Field with Left and Right Icons

Source: https://bulma.io/documentation/form/general

Use this to add icons to the left and right of an input field. Ensure the parent container has `has-icons-left` and `has-icons-right` classes.

```html
<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-large" type="email" placeholder="Normal">
    <span class="icon is-large is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-large is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-large" type="email" placeholder="Large">
    <span class="icon is-medium is-left">
      <i class="fas fa-envelope fa-lg"></i>
    </span>
    <span class="icon is-medium is-right">
      <i class="fas fa-check fa-lg"></i>
    </span>
  </div>
</div>
```

--------------------------------

### Combined Button Modifiers

Source: https://bulma.io/documentation/start/syntax

Demonstrates the flexibility of Bulma's modifier system by combining multiple classes to achieve complex button styles. This allows for customization of color, size, style, and state simultaneously.

```html
<button class="button is-primary is-small" disabled>Button</button>
<button class="button is-info is-loading">Button</button>
<button class="button is-danger is-outlined is-large">Button</button>
```

--------------------------------

### Apply Clearfix with Mixin

Source: https://bulma.io/documentation/sass/mixins

Use the `clearfix()` mixin to add a `::after` pseudo-element with `clear: both`, effectively containing floated children within a container.

```scss
.bulma-clearfix-mixin {
  @include mixins.clearfix;
}
```

--------------------------------

### Hero Gradient Offset CSS Variables

Source: https://bulma.io/documentation/layout/hero

CSS variables for hero gradient offsets, enabling dynamic adjustments to gradient properties.

```css
var(--bulma-hero-gradient-h-offset)
```

```css
var(--bulma-hero-gradient-s-offset)
```

```css
var(--bulma-hero-gradient-l-offset:)
```

--------------------------------

### Media Object with Right Aligned Image

Source: https://bulma.io/documentation/layout/media-object

To align the image to the right, use the `media-right` class instead of `media-left`. This is useful for different layout requirements.

```html
<article class="media">
  <div class="media-content">
    <div class="content">
      <p>
        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
        <br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Pellentesque tempus, lorem et interdum non, lorem ipsum. 
      </p>
    </div>
  </div>
  <div class="media-right">
    <figure class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
    </p>
  </figure>
  </div>
</article>
```

--------------------------------

### Basic Navbar Structure

Source: https://bulma.io/documentation/components/navbar

This HTML structure represents a basic Bulma navbar. It includes a brand/logo area, navigation items, and action buttons in the navbar-end section.

```html
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Examples
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item is-selected">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
```

--------------------------------

### Bulma Form Control with Submit Button

Source: https://bulma.io/documentation/form/general

Enhance a button element with the 'control' container for consistent form layout.

```html
<div class="control">
  <button class="button is-primary">Submit</button>
</div>
```

--------------------------------

### Bulma File Component: Medium Boxed Style

Source: https://bulma.io/documentation/form/file

Applies the `is-boxed` modifier and `is-medium` size for a larger, box-shaped file input. This variation is suitable for more prominent form elements.

```html
<div class="file is-medium is-boxed">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Medium file… </span>
    </span>
  </label>
</div>
```

--------------------------------

### Bulma Medium Sized Horizontal Form Input

Source: https://bulma.io/documentation/form/general

Demonstrates a horizontal form with a medium-sized label and input. Use this for forms where slightly larger elements improve readability or aesthetics.

```html
<div class="field is-horizontal">
  <div class="field-label is-medium">
    <label class="label">Medium label</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input is-medium" type="text" placeholder="Medium sized input">
      </div>
    </div>
  </div>
</div>
```

--------------------------------

### Add Fixed Top Navbar Class

Source: https://bulma.io/documentation/components/navbar

Apply the `is-fixed-top` class to the navbar component to fix it to the top of the page.

```html
<nav class="navbar is-fixed-top">
</nav>
```

--------------------------------

### Overlay Mixin for Covering Ancestors

Source: https://bulma.io/documentation/sass/mixins

Use the `overlay()` mixin to make an element cover its closest positioned ancestor. The `$offset` parameter adjusts the inset from each edge.

```sass
.bulma-overlay-mixin {
  @include mixins.overlay(1.5rem);
  background-color: darkorange;
  border-radius: 0.25em;
  color: white;
  opacity: 0.9;
  padding: 1em;
}
```

```html
<div class="bulma-overlay-mixin-parent">
  <div class="bulma-overlay-mixin">Overlay element</div>
</div>
```

--------------------------------

### Bulma Hero Component: Small Size

Source: https://bulma.io/documentation/layout/hero

Use the `is-small` modifier to create a smaller hero banner. This is useful for less prominent call-to-actions or introductory sections.

```html
<section class="hero is-small is-primary">
  <div class="hero-body">
    <p class="title">Small hero</p>
    <p class="subtitle">Small subtitle</p>
  </div>
</section>
```

--------------------------------

### Bulma Boxed File Input

Source: https://bulma.io/documentation/form/file

The `is-boxed` modifier styles the file input as a distinct box. This modifier can be combined with others.

```html
<div class="file is-boxed">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Choose a file… </span>
    </span>
  </label>
</div>
```

--------------------------------

### FA Mixin for Icon Container

Source: https://bulma.io/documentation/sass/mixins

The `fa()` mixin creates a square inline-block element suitable for icons. The first parameter sets the icon font size, and the second sets the container dimensions.

```sass
.bulma-fa-mixin {
  @include mixins.fa(1rem, 2rem);
  background-color: lavender; // For demo purposes
}
```

```html
<span class="bulma-fa-mixin">
  <i class="fas fa-thumbs-up"></i>
</span>
```

--------------------------------

### Bulma File Upload Input HTML Structure

Source: https://bulma.io/documentation/form/file

This HTML structure creates a custom file upload input using Bulma's 'file' element. It includes a hidden native file input and a visible label with a call-to-action button and icon.

```html
<div class="file">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Choose a file… </span>
    </span>
  </label>
</div>
```

--------------------------------

### Bulma File Component: Large Boxed Style

Source: https://bulma.io/documentation/form/file

Uses the `is-boxed` modifier with the `is-large` size for the largest box-shaped file input. This creates a significant visual element for file uploads.

```html
<div class="file is-large is-boxed">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Large file… </span>
    </span>
  </label>
</div>
```

--------------------------------

### Media Object with No Image

Source: https://bulma.io/documentation/layout/media-object

A media object can also be used without an image, focusing solely on the content. This is achieved by omitting the `media-left` or `media-right` elements.

```html
<article class="media">
  <div class="media-content">
    <div class="content">
      <p>
        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
        <br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Pellentesque tempus, lorem et interdum non, lorem ipsum. 
      </p>
    </div>
  </div>
</article>
```

--------------------------------

### HTML5 Doctype Declaration

Source: https://bulma.io/documentation/start/overview

Ensure your HTML document uses the HTML5 doctype for correct rendering and compatibility.

```html
<!DOCTYPE html>
```

--------------------------------

### JavaScript for File Name Display

Source: https://bulma.io/documentation/form/file

This JavaScript code snippet handles the `onchange` event for a file input. It retrieves the selected file's name and updates the corresponding element with the class `file-name`.

```html
<div id="file-js-example" class="file has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Choose a file… </span>
    </span>
    <span class="file-name"> No file uploaded </span>
  </label>
</div>

<script>
  const fileInput = document.querySelector("#file-js-example input[type=file]");
  fileInput.onchange = () => {
    if (fileInput.files.length > 0) {
      const fileName = document.querySelector("#file-js-example .file-name");
      fileName.textContent = fileInput.files[0].name;
    }
  };
</script>
```

--------------------------------

### Hero Body Padding CSS Variables

Source: https://bulma.io/documentation/layout/hero

These CSS variables correspond to the Sass variables for hero body padding, allowing for runtime customization in the browser.

```css
var(--bulma-hero-body-padding)
```

```css
var(--bulma-hero-body-padding-tablet)
```

```css
var(--bulma-hero-body-padding-small)
```

```css
var(--bulma-hero-body-padding-medium)
```

```css
var(--bulma-hero-body-padding-large)
```

--------------------------------

### Active Dropdown Navbar Item

Source: https://bulma.io/documentation/components/navbar

Demonstrates an active dropdown menu within a Bulma navbar. This pattern is useful for navigation where a section has sub-pages.

```html
<nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <a class="navbar-item">
    <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>
</svg>

  </a>

  <div class="navbar-item has-dropdown is-active">
    <a class="navbar-link">
      Docs
    </a>

    <div class="navbar-dropdown">
      <a class="navbar-item">
        Overview
      </a>
      <a class="navbar-item is-selected">
        Elements
      </a>
      <a class="navbar-item">
        Components
      </a>
      <hr class="navbar-divider">
      <div class="navbar-item">
        Version 1.0.4
      </div>
    </div>
  </div>
</nav>

<section class="hero is-primary">
  <div class="hero-body">
    <p class="title">
      Documentation
    </p>
    <p class="subtitle">
      Everything you need to <strong>create a website</strong> with Bulma
    </p>
  </div>
</section>
```

--------------------------------

### Bulma Form Control Sass and CSS Variables

Source: https://bulma.io/documentation/form/general

Lists Sass variables and their corresponding CSS variable equivalents used for styling form controls in Bulma. These variables control aspects like radius, border width, size, height, padding, and colors.

```css
$control-radius

```

```css
var(--bulma-control-radius)

```

```css
var(--bulma-radius)

```

```css
$control-radius-small

```

```css
var(--bulma-control-radius-small)

```

```css
var(--bulma-radius-small)

```

```css
$control-border-width

```

```css
var(--bulma-control-border-width)

```

```css
1px

```

```css
$control-size

```

```css
var(--bulma-control-size)

```

```css
var(--bulma-size-normal)

```

```css
$control-height

```

```css
var(--bulma-control-height)

```

```css
2.5em

```

```css
$control-line-height

```

```css
var(--bulma-control-line-height)

```

```css
1.5

```

```css
$control-padding-vertical

```

```css
var(--bulma-control-padding-vertical)

```

```css
calc(0.5em - 1px)

```

```css
$control-padding-horizontal

```

```css
var(--bulma-control-padding-horizontal)

```

```css
calc(0.75em - 1px)

```

```css
$control-focus-shadow-l

```

```css
var(--bulma-control-focus-shadow-l)

```

```css
50%

```

```css
$label-color

```

```css
var(--bulma-label-color)

```

```css
var(--bulma-text-strong)

```

```css
$label-weight

```

```css
var(--bulma-label-weight)

```

```css
var(--bulma-weight-semibold)

```

```css
$help-size

```

```css
var(--bulma-help-size)

```

```css
var(--bulma-size-small)

```

--------------------------------

### Bulma Navbar Structure

Source: https://bulma.io/documentation/components/navbar

Defines the basic structure of a Bulma navbar, including the navbar-brand and navbar-menu elements. The navbar-menu is a sibling to the navbar-brand.

```html
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <!-- navbar items, navbar burger... -->
  </div>
  <div class="navbar-menu">
    <!-- navbar start, navbar end -->
  </div>
</nav>
```

--------------------------------

### Bulma Form Control with Text Input

Source: https://bulma.io/documentation/form/general

The 'control' container enhances a single form element like a text input, ensuring consistent spacing.

```html
<div class="control">
  <input class="input" type="text" placeholder="Text input">
</div>
```

--------------------------------

### Bulma File Component: Medium Size

Source: https://bulma.io/documentation/form/file

Applies the `is-medium` modifier to the file input for a larger appearance than normal. Suitable for prominent file upload areas.

```html
<div class="file is-medium">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Medium file… </span>
    </span>
  </label>
</div>
```

--------------------------------

### Responsive Viewport Meta Tag

Source: https://bulma.io/documentation/start/overview

Include the viewport meta tag in your HTML's head section to make your webpage responsive across different devices.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

--------------------------------

### Bulma Hero Component: Full Height with Navbar

Source: https://bulma.io/documentation/layout/hero

The `is-fullheight-with-navbar` modifier adjusts the hero's height to fill the viewport minus the height of a fixed navbar. This ensures seamless integration with navigation.

```html
 <nav class="navbar">
  <div class="container">
    <div id="navMenu" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>
        <a class="navbar-item">
          Documentation
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-dark">Github</a>
            <a class="button is-link">Download</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

<section class="hero is-link is-fullheight-with-navbar">
  <div class="hero-body">
    <p class="title">Fullheight hero with navbar</p>
  </div>
</section>
```

--------------------------------

### Navbar Item as Dropdown Parent

Source: https://bulma.io/documentation/components/navbar

A navbar-item configured as a parent for a dropdown menu, featuring a link and a nested dropdown.

```html
<div class="navbar-item has-dropdown">
  <a class="navbar-link">
    Docs
  </a>

  <div class="navbar-dropdown">
    <!-- Other navbar items -->
  </div>
</div>
```

--------------------------------

### Bulma File Input with Right-Aligned CTA

Source: https://bulma.io/documentation/form/file

The `is-right` modifier positions the Call To Action (CTA) section to the right side of the file input.

```html
<div class="file has-name is-right">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Choose a file… </span>
    </span>
    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>
  </label>
</div>
```

--------------------------------

### Bulma File Component: Large Size

Source: https://bulma.io/documentation/form/file

Applies the `is-large` modifier to the file input for the largest available size. Ideal for visually emphasizing the file upload action.

```html
<div class="file is-large">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Large file… </span>
    </span>
  </label>
</div>
```

--------------------------------

### Bulma File Component: Large Size with Name Display

Source: https://bulma.io/documentation/form/file

Utilizes the `is-large` size and `has-name` class for a prominent file upload element that displays the selected file's name. This is suitable for primary actions.

```html
<div class="file is-large has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Large file… </span>
    </span>
    <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>
  </label>
</div>
```

--------------------------------

### Burger Mixin for 3 Horizontal Bars

Source: https://bulma.io/documentation/sass/mixins

The `burger()` mixin generates a 16x16px set of 3 horizontal bars within a square. The `$dimensions` parameter controls the size of this square.

```sass
.bulma-burger-mixin {
  @include mixins.burger(2.5rem);
}
```

```html
<button class="bulma-burger-mixin">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</button>
```

--------------------------------

### Bulma Horizontal Form Input

Source: https://bulma.io/documentation/form/general

Shows a basic horizontal form layout with a standard sized input field. This is useful for creating clean and aligned form structures.

```html
<div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Normal sized input">
      </div>
    </div>
  </div>
</div>
```

--------------------------------

### Basic Navbar Brand Structure

Source: https://bulma.io/documentation/components/navbar

Defines the basic structure of a navbar with a brand section. The brand section is intended for items like logos or site titles and the burger menu.

```html
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <!-- navbar items, navbar burger... -->
  </div>
</nav>
```

--------------------------------

### Bulma Navbar Brand HTML Structure

Source: https://bulma.io/documentation/components/navbar

This is the basic HTML structure for a navbar brand in Bulma. It includes spans for visual elements. On desktop screens (>= 1024px), the brand will only occupy the necessary space.

```html
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</nav>
```

--------------------------------

### Add Fixed Top Padding Class

Source: https://bulma.io/documentation/components/navbar

Apply the `has-navbar-fixed-top` modifier to the `<html>` or `<body>` element to provide appropriate padding when a fixed top navbar is used.

```html
<html class="has-navbar-fixed-top">
</html>
```

--------------------------------

### Bulma Hero Component: Full Height

Source: https://bulma.io/documentation/layout/hero

Use the `is-fullheight` modifier to make the hero banner span the entire viewport height. This is suitable for immersive landing pages.

```html
<section class="hero is-danger is-fullheight">
  <div class="hero-body">
    <div class="">
      <p class="title">Fullheight hero</p>
      <p class="subtitle">Fullheight subtitle</p>
    </div>
  </div>
</section>
```

--------------------------------

### Enable Hoverable Dropdown

Source: https://bulma.io/documentation/components/navbar

Use the `is-hoverable` modifier on a `navbar-item` with `has-dropdown` to make the dropdown appear on hover. This is a common pattern for desktop navigation.

```html
<div class="navbar-item has-dropdown is-hoverable">
  <!-- navbar-link, navbar-dropdown etc. -->
</div>
```

```html
<nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">
      Docs
    </a>

    <div class="navbar-dropdown">
      <a class="navbar-item">
        Overview
      </a>
      <a class="navbar-item">
        Elements
      </a>
      <a class="navbar-item">
        Components
      </a>
      <hr class="navbar-divider">
      <div class="navbar-item">
        Version 1.0.4
      </div>
    </div>
  </div>
</nav>
```

--------------------------------

### Hero Gradient Offset Sass Variables

Source: https://bulma.io/documentation/layout/hero

Sass variables for controlling the offsets of hero gradients. Adjust these to modify the gradient appearance.

```sass
$hero-gradient-h-offset
```

```sass
$hero-gradient-s-offset
```

```sass
$hero-gradient-l-offset:
```

--------------------------------

### Reset Element Styles with Mixin

Source: https://bulma.io/documentation/sass/mixins

The `reset()` mixin applies a soft style reset, which is particularly useful for elements like `<button>` to ensure consistent appearance across browsers.

```scss
.bulma-reset-mixin {
  @include mixins.reset;
}
```

--------------------------------

### Bulma Hero Component: Half Height

Source: https://bulma.io/documentation/layout/hero

The `is-halfheight` modifier makes the hero occupy half of the viewport height. Ensure content within the hero is appropriately structured.

```html
<section class="hero is-success is-halfheight">
  <div class="hero-body">
    <div class="">
      <p class="title">Half height hero</p>
      <p class="subtitle">Half height subtitle</p>
    </div>
  </div>
</section>
```

--------------------------------

### Add Navbar Divider

Source: https://bulma.io/documentation/components/navbar

Use the `navbar-divider` class to insert a horizontal rule within a navbar dropdown for visual separation.

```html
<hr class="navbar-divider">
```

--------------------------------

### Expand Input to Fill Remaining Space

Source: https://bulma.io/documentation/form/general

Use the `is-expanded` modifier on a control element to make it fill the remaining space within a `has-addons` field. This is useful for inputs that should take up available width.

```html
<div class="field has-addons">
  <p class="control">
    <span class="select">
      <select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </select>
    </span>
  </p>
  <p class="control">
    <input class="input" type="text" placeholder="Amount of money">
  </p>
  <p class="control">
    <button class="button">
      Transfer
    </button>
  </p>
</div>

<div class="field has-addons">
  <p class="control">
    <span class="select">
      <select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </select>
    </span>
  </p>
  <p class="control is-expanded">
    <input class="input" type="text" placeholder="Amount of money">
  </p>
  <p class="control">
    <button class="button">
      Transfer
    </button>
  </p>
</div>
```

--------------------------------

### Bulma Large Sized Horizontal Form Input

Source: https://bulma.io/documentation/form/general

Illustrates a horizontal form with a large label and input. This is suitable for forms that require prominent input fields, such as search bars or primary action inputs.

```html
<div class="field is-horizontal">
  <div class="field-label is-large">
    <label class="label">Large label</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input is-large" type="text" placeholder="Large sized input">
      </div>
    </div>
  </div>
</div>
```

--------------------------------

### Transparent Navbar with Boxed Dropdown

Source: https://bulma.io/documentation/components/navbar

When using a transparent navbar, it's recommended to use the `is-boxed` modifier for dropdowns. This modifier removes the grey border, adds an inner shadow, rounds the corners, and animates the hover/active state.

```html
<nav class="navbar is-transparent" role="navigation" aria-label="dropdown navigation">
  <a class="navbar-item">
    <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>
</svg>

  </a>

  <div class="navbar-item has-dropdown is-active">
    <a class="navbar-link">
      Docs
    </a>

    <div class="navbar-dropdown is-boxed">
      <a class="navbar-item">
        Overview
      </a>
    </div>
  </div>
</nav>
```

--------------------------------

### Bulma Hero Component: Large Size

Source: https://bulma.io/documentation/layout/hero

Utilize the `is-large` modifier to create a prominent, large hero banner. Ideal for main introductions or impactful visual statements.

```html
<section class="hero is-large is-info">
  <div class="hero-body">
    <p class="title">Large hero</p>
    <p class="subtitle">Large subtitle</p>
  </div>
</section>
```

--------------------------------

### Delete Mixin for Cross Icon

Source: https://bulma.io/documentation/sass/mixins

The `delete()` mixin creates a 20x20px circle with a cross. It supports `is-small`, `is-medium`, and `is-large` modifiers.

```sass
.bulma-delete-mixin {
  @include mixins.delete;
}
```

```html
<button class="bulma-delete-mixin is-small"></button>
<button class="bulma-delete-mixin"></button>
<button class="bulma-delete-mixin is-medium"></button>
<button class="bulma-delete-mixin is-large"></button>
```

--------------------------------

### Bulma Hero Component: Medium Size

Source: https://bulma.io/documentation/layout/hero

Apply the `is-medium` modifier for a hero banner with a medium height. This offers a balanced visual presence.

```html
<section class="hero is-medium is-link">
  <div class="hero-body">
    <p class="title">Medium hero</p>
    <p class="subtitle">Medium subtitle</p>
  </div>
</section>
```

--------------------------------

### Arrow Mixin for Custom Elements

Source: https://bulma.io/documentation/sass/mixins

Use the `arrow()` mixin to create a down-facing arrow. The `$color` parameter defines the arrow's color.

```sass
.bulma-arrow-mixin {
  @include mixins.arrow(purple);
}
```

```html
<span class="bulma-arrow-mixin"></span>
```

--------------------------------

### Block Mixin for Spacing Below Elements

Source: https://bulma.io/documentation/sass/mixins

The `block()` mixin adds `margin-bottom` to an element, but only if it is not the last child. The `$spacing` parameter controls the margin value.

```sass
.bulma-block-mixin {
  @include mixins.block(1rem);
}
```

```html
<p class="bulma-block-mixin">This element has a margin-bottom.</p>
<p class="bulma-block-mixin">This element too.</p>
<p class="bulma-block-mixin">Not this one because it's the last child.</p>
```

--------------------------------

### Bulma Active Navbar Burger

Source: https://bulma.io/documentation/components/navbar

Add the 'is-active' modifier class to the navbar-burger to transform it into a cross icon, typically used to indicate an open menu.

```html
<a class="navbar-burger is-active" role="button" aria-label="menu" aria-expanded="false">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>
```

--------------------------------

### Style and State Modifiers for Buttons

Source: https://bulma.io/documentation/start/syntax

Modify the visual style or state of buttons using classes like 'is-outlined' for an outlined appearance, 'is-loading' to indicate an ongoing process, or the HTML 'disabled' attribute.

```html
<button class="button is-primary is-outlined">Button</button>
<button class="button is-loading">Button</button>
<button class="button" disabled>Button</button>
```

--------------------------------

### Navbar Bottom Box Shadow Size Sass Variable

Source: https://bulma.io/documentation/components/navbar

Defines the size of the box shadow applied to the bottom of the navbar. This variable is linked to a CSS variable.

```sass
$navbar-bottom-box-shadow-size
```

--------------------------------

### Navbar Box Shadow Size Sass Variable

Source: https://bulma.io/documentation/components/navbar

Defines the size of the box shadow applied to the navbar. This variable is linked to a CSS variable for consistency.

```sass
$navbar-box-shadow-size
```

--------------------------------

### Navbar Dropdown Border Style Sass Variable

Source: https://bulma.io/documentation/components/navbar

Sets the border style for the navbar dropdown. This variable corresponds to a CSS variable for border appearance.

```sass
$navbar-dropdown-border-style
```

--------------------------------

### Color Modifiers for Buttons

Source: https://bulma.io/documentation/start/syntax

Apply different color variations to buttons using predefined color modifier classes like 'is-primary', 'is-link', etc. These classes change the button's background and text color.

```html
<button class="button is-primary">Button</button>
<button class="button is-link">Button</button>
<button class="button is-info">Button</button>
<button class="button is-success">Button</button>
<button class="button is-warning">Button</button>
<button class="button is-danger">Button</button>
```

--------------------------------

### Navbar Item with Brand Logo

Source: https://bulma.io/documentation/components/navbar

A navbar-item used to contain a brand logo, typically an SVG.

```html
<a class="navbar-item">
  <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>
</svg>

</a>
```

--------------------------------

### Bulma Horizontal Form Label Sizing

Source: https://bulma.io/documentation/form/general

The `field-label` component supports four size modifiers (`is-small`, `is-normal`, `is-medium`, `is-large`) to vertically align labels with different control sizes.

```html
<div class="field is-horizontal">
  <div class="field-label">
    <label class="label">No padding</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox">
          Checkbox
        </label>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-small">
    <label class="label">Small padding</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input is-small" type="text" placeholder="Small sized input">
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Normal label</label>
  </div>
```

--------------------------------

### Navbar Item within Dropdown

Source: https://bulma.io/documentation/components/navbar

A navbar-item used as a child element within a dropdown menu.

```html
<div class="navbar-dropdown">
  <a class="navbar-item">
    Overview
  </a>
</div>
```

--------------------------------

### Size Modifiers for Buttons

Source: https://bulma.io/documentation/start/syntax

Alter the size of buttons using modifier classes such as 'is-small', 'is-medium', and 'is-large'. The default size is applied when no size modifier is present.

```html
<button class="button is-small">Button</button>
<button class="button">Button</button>
<button class="button is-medium">Button</button>
<button class="button is-large">Button</button>
```

--------------------------------

### Apply Navbar Color Modifier

Source: https://bulma.io/documentation/components/navbar

Change the background color of a navbar by applying one of the nine available color modifier classes, such as `is-primary`.

```html
<nav class="navbar is-primary">
  <!-- navbar brand, navbar menu... -->
</nav>
```

--------------------------------

### Info Color Hero Banner

Source: https://bulma.io/documentation/layout/hero

Applies the 'is-info' color to the hero banner. This is one of the 8 available color options.

```html
<section class="hero is-info">
  <div class="hero-body">
    <p class="title">Info hero</p>
    <p class="subtitle">Info subtitle</p>
  </div>
</section>
```

--------------------------------

### LTR Position Mixin

Source: https://bulma.io/documentation/sass/mixins

Use ltr-position to easily switch between 'left' and 'right' CSS properties for positioned elements. The first parameter sets the offset value, and the second determines if 'right' (default) or 'left' is output.

```sass
.bulma-ltr-position-mixin {
  @include mixins.ltr-position(1rem, false);
  border-radius: 0.25em;
  position: absolute;
  top: 1rem;
}
```

```css
.bulma-ltr-position-mixin {
  left: 1rem;
  border-radius: 0.25em;
  position: absolute;
  top: 1rem;
}
```

--------------------------------

### Navbar Dropdown Border Width Sass Variable

Source: https://bulma.io/documentation/components/navbar

Defines the border width for the navbar dropdown. This Sass variable is linked to a CSS variable for precise styling.

```sass
$navbar-dropdown-border-width
```

--------------------------------

### Disable Widescreen and FullHD Breakpoints

Source: https://bulma.io/documentation/start/responsiveness

Set the corresponding Sass boolean variables to false to disable the widescreen and fullhd breakpoints.

```sass
// Disable the widescreen breakpoint
$widescreen-enabled: false;

// Disable the fullhd breakpoint
$fullhd-enabled: false;
```

--------------------------------

### Navbar Dropdown Boxed Shadow Sass Variable

Source: https://bulma.io/documentation/components/navbar

Defines the box shadow for a boxed navbar dropdown. This Sass variable uses CSS variables for shadow properties.

```sass
$navbar-dropdown-boxed-shadow
```

--------------------------------

### Select Dropdown with Left Icon

Source: https://bulma.io/documentation/form/general

Icons can be appended to select dropdowns using the same modifier classes. Ensure the icon span is correctly placed relative to the select element.

```html
<div class="field">
  <p class="control has-icons-left">
    <span class="select">
      <select>
        <option selected>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </span>
    <span class="icon is-small is-left">
      <i class="fas fa-globe"></i>
    </span>
  </p>
</div>
```

--------------------------------

### Bulma Horizontal Form Layout

Source: https://bulma.io/documentation/form/general

Use the `is-horizontal` modifier on the `field` container for horizontal form layouts. This includes `field-label` for labels and `field-body` for controls. Elements within `field-body` can be further grouped using `is-grouped` or `has-addons`.

```html
<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">From</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input" type="text" placeholder="Name">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded has-icons-left has-icons-right">
        <input class="input is-success" type="email" placeholder="Email" value="alex@smith.com">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label"></div>
  <div class="field-body">
    <div class="field is-expanded">
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">
            +44
          </a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="tel" placeholder="Your phone number">
        </p>
      </div>
      <p class="help">Do not enter the first zero</p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Department</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <div class="control">
        <div class="select is-fullwidth">
          <select>
            <option>Business development</option>
            <option>Marketing</option>
            <option>Sales</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">
    <label class="label">Already a member?</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <div class="control">
        <label class="radio">
          <input type="radio" name="member">
          Yes
        </label>
        <label class="radio">
          <input type="radio" name="member">
          No
        </label>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Subject</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input is-danger" type="text" placeholder="e.g. Partnership opportunity">
      </div>
      <p class="help is-danger">
        This field is required
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Question</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">
    <!-- Left empty for spacing -->
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <button class="button is-primary">
          Send message
        </button>
      </div>
    </div>
  </div>
</div>
```

--------------------------------

### Navbar Height Sass Variable

Source: https://bulma.io/documentation/components/navbar

Sets the overall height of the navbar. This Sass variable corresponds to a CSS variable for responsive design.

```sass
$navbar-height
```

--------------------------------

### Expand Control to Fill Space

Source: https://bulma.io/documentation/form/general

Add the `is-expanded` modifier to a control element within a grouped field to make it fill the remaining space. This is useful for input fields.

```html
<div class="field is-grouped">
  <p class="control is-expanded">
    <input class="input" type="text" placeholder="Find a repository">
  </p>
  <p class="control">
    <button class="button is-info">
      Search
    </button>
  </p>
</div>
```

--------------------------------

### Multiline Grouped Form Controls

Source: https://bulma.io/documentation/form/general

Use the `is-grouped-multiline` modifier on the `field` container to allow grouped controls to wrap onto multiple lines. This is ideal for a long list of buttons or controls.

```html
<div class="field is-grouped is-grouped-multiline">
  <p class="control">
    <button class="button">
      One
    </button>
  </p>
  <p class="control">
    <button class="button">
      Two
    </button>
  </p>
  <p class="control">
    <button class="button">
      Three
    </button>
  </p>
  <p class="control">
    <button class="button">
      Four
    </button>
  </p>
  <p class="control">
    <button class="button">
      Five
    </button>
  </p>
  <p class="control">
    <button class="button">
      Six
    </button>
  </p>
  <p class="control">
    <button class="button">
      Seven
    </button>
  </p>
  <p class="control">
    <button class="button">
      Eight
    </button>
  </p>
  <p class="control">
    <button class="button">
      Nine
    </button>
  </p>
  <p class="control">
    <button class="button">
      Ten
    </button>
  </p>
  <p class="control">
    <button class="button">
      Eleven
    </button>
  </p>
  <p class="control">
    <button class="button">
      Twelve
    </button>
  </p>
  <p class="control">
    <button class="button">
      Thirteen
    </button>
  </p>
</div>
```

--------------------------------

### Navbar Tab Active Border Bottom Width Sass Variable

Source: https://bulma.io/documentation/components/navbar

Sets the border width for the bottom of an active navbar tab. This variable corresponds to a CSS variable for active state appearance.

```sass
$navbar-tab-active-border-bottom-width
```

--------------------------------

### Enable Active Dropdown

Source: https://bulma.io/documentation/components/navbar

Apply the `is-active` modifier to a `navbar-item` with `has-dropdown` to keep the dropdown visible at all times. This is useful for controlling dropdown visibility with JavaScript.

```html
<div class="navbar-item has-dropdown is-active">
  <!-- navbar-link, navbar-dropdown etc. -->
</div>
```

```html
<nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-item has-dropdown is-active">
    <a class="navbar-link">
      Docs
    </a>

    <div class="navbar-dropdown">
      <a class="navbar-item">
        Overview
      </a>
      <a class="navbar-item">
        Elements
      </a>
      <a class="navbar-item">
        Components
      </a>
      <hr class="navbar-divider">
      <div class="navbar-item">
        Version 1.0.4
      </div>
    </div>
  </div>
</nav>
```

--------------------------------

### Warning Color Hero Banner

Source: https://bulma.io/documentation/layout/hero

Applies the 'is-warning' color to the hero banner. This is one of the 8 available color options.

```html
<section class="hero is-warning">
  <div class="hero-body">
    <p class="title">Warning hero</p>
    <p class="subtitle">Warning subtitle</p>
  </div>
</section>
```

--------------------------------

### Navbar Divider Background Luminance Sass Variable

Source: https://bulma.io/documentation/components/navbar

Sets the luminance for the background of navbar dividers. This variable is linked to a CSS variable for color control.

```sass
$navbar-divider-background-l
```

--------------------------------

### Link Color Hero Banner

Source: https://bulma.io/documentation/layout/hero

Applies the 'is-link' color to the hero banner. This is one of the 8 available color options.

```html
<section class="hero is-link">
  <div class="hero-body">
    <p class="title">Link hero</p>
    <p class="subtitle">Link subtitle</p>
  </div>
</section>
```

--------------------------------

### Navbar Box Shadow Color Sass Variable

Source: https://bulma.io/documentation/components/navbar

Specifies the color of the box shadow for the navbar. It is mapped to a CSS variable for easy theme integration.

```sass
$navbar-box-shadow-color
```

--------------------------------

### Navbar Dropdown Background Color Sass Variable

Source: https://bulma.io/documentation/components/navbar

Defines the background color for the navbar dropdown menu. This Sass variable is linked to a CSS variable for theming.

```sass
$navbar-dropdown-background-color
```

--------------------------------

### Bulma Navbar Burger Element

Source: https://bulma.io/documentation/components/navbar

The navbar-burger is a hamburger menu icon that appears on touch devices. It must be the last child of the navbar-brand and contains four spans for the lines.

```html
<a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>
```

--------------------------------

### Navbar Dropdown Border Left Sass Variable

Source: https://bulma.io/documentation/components/navbar

Controls the left border of the navbar dropdown. This variable is mapped to a CSS variable for border styling.

```sass
$navbar-dropdown-border-l
```

--------------------------------

### Make Element Unselectable with Mixin

Source: https://bulma.io/documentation/sass/mixins

Apply the `unselectable()` mixin to prevent text within an element from being selected, typically by double-clicking.

```scss
.bulma-unselectable-mixin {
  @include mixins.unselectable;
}
```

--------------------------------

### Navbar Tab Active Border Bottom Style Sass Variable

Source: https://bulma.io/documentation/components/navbar

Controls the border style for the bottom of an active navbar tab. This Sass variable maps to a CSS variable.

```sass
$navbar-tab-active-border-bottom-style
```

--------------------------------

### Navbar Tab Hover Background Color Sass Variable

Source: https://bulma.io/documentation/components/navbar

Defines the background color when hovering over a navbar tab. This variable is linked to a CSS variable.

```sass
$navbar-tab-hover-background-color
```

--------------------------------

### Navbar Dropdown Z-Index Sass Variable

Source: https://bulma.io/documentation/components/navbar

Sets the z-index for the navbar dropdown menu. This Sass variable is associated with a CSS variable for stacking order.

```sass
$navbar-dropdown-z
```

--------------------------------

### Navbar Dropdown Radius Sass Variable

Source: https://bulma.io/documentation/components/navbar

Defines the border radius for the standard navbar dropdown. This variable is linked to a CSS variable for rounded corners.

```sass
$navbar-dropdown-radius
```

--------------------------------

### Navbar Z-Index Sass Variable

Source: https://bulma.io/documentation/components/navbar

Sets the z-index for the standard navbar. This variable is associated with a CSS variable for stacking order.

```sass
$navbar-z
```

--------------------------------

### Navbar Dropdown Arrow Sass Variable

Source: https://bulma.io/documentation/components/navbar

Sets the color or style of the arrow indicator for the navbar dropdown. This Sass variable corresponds to a CSS variable.

```sass
$navbar-dropdown-arrow
```

--------------------------------

### Success Color Hero Banner

Source: https://bulma.io/documentation/layout/hero

Applies the 'is-success' color to the hero banner. This is one of the 8 available color options.

```html
<section class="hero is-success">
  <div class="hero-body">
    <p class="title">Success hero</p>
    <p class="subtitle">Success subtitle</p>
  </div>
</section>
```

--------------------------------

### Align Grouped Form Controls

Source: https://bulma.io/documentation/form/general

Modify the alignment of grouped controls using `is-grouped-centered` or `is-grouped-right` modifiers on the `field` container.

```html
<div class="field is-grouped is-grouped-centered">
  <p class="control">
    <button class="button is-primary">
      Submit
    </button>
  </p>
  <p class="control">
    <a class="button is-light">
      Cancel
    </a>
  </p>
</div>
```

```html
<div class="field is-grouped is-grouped-right">
  <p class="control">
    <button class="button is-primary">
      Submit
    </button>
  </p>
  <p class="control">
    <a class="button is-light">
      Cancel
    </a>
  </p>
</div>
```

--------------------------------

### Navbar Dropdown Boxed Radius Sass Variable

Source: https://bulma.io/documentation/components/navbar

Controls the border radius for a boxed navbar dropdown. This variable maps to a CSS variable for styling.

```sass
$navbar-dropdown-boxed-radius
```

--------------------------------

### Navbar Dropdown Border Color Sass Variable

Source: https://bulma.io/documentation/components/navbar

Specifies the color of the border for the navbar dropdown. This Sass variable uses CSS variables for color definition.

```sass
$navbar-dropdown-border-color
```

--------------------------------

### Navbar Tab Hover Border Bottom Color Sass Variable

Source: https://bulma.io/documentation/components/navbar

Specifies the bottom border color when hovering over a navbar tab. This Sass variable corresponds to a CSS variable.

```sass
$navbar-tab-hover-border-bottom-color
```

--------------------------------

### Navbar Item Image Max Height Sass Variable

Source: https://bulma.io/documentation/components/navbar

Controls the maximum height for images within navbar items. This variable corresponds to a CSS variable for image scaling.

```sass
$navbar-item-img-max-height
```

--------------------------------

### Navbar Tab Active Border Bottom Color Sass Variable

Source: https://bulma.io/documentation/components/navbar

Specifies the bottom border color for an active navbar tab. This variable is linked to a CSS variable for active styling.

```sass
$navbar-tab-active-border-bottom-color
```

--------------------------------

### Navbar Dropdown Offset Sass Variable

Source: https://bulma.io/documentation/components/navbar

Controls the offset of the navbar dropdown from the navbar. This variable maps to a CSS variable for positioning.

```sass
$navbar-dropdown-offset
```

--------------------------------

### Navbar Vertical Padding Sass Variable

Source: https://bulma.io/documentation/components/navbar

Controls the vertical padding within the navbar. This variable is linked to a CSS variable for consistent spacing.

```sass
$navbar-padding-vertical
```

--------------------------------

### Navbar Burger Color Sass Variable

Source: https://bulma.io/documentation/components/navbar

Sets the color for the navbar burger menu icon. This Sass variable is mapped to a CSS variable for easy color changes.

```sass
$navbar-burger-color
```

--------------------------------

### Navbar Horizontal Padding Sass Variable

Source: https://bulma.io/documentation/components/navbar

Defines the horizontal padding for the navbar. This Sass variable maps to a CSS variable for layout control.

```sass
$navbar-padding-horizontal
```

--------------------------------

### LTR Property Mixin

Source: https://bulma.io/documentation/sass/mixins

The ltr-property mixin allows you to specify which CSS property to flip left and right, appending '-right' or '-left' to it. This is particularly useful for properties like 'margin' and 'padding'.

```sass
.bulma-ltr-property-mixin {
  @include mixins.ltr-property("margin", 1rem, false);
  border-radius: 0.25em;
}
```

```css
.bulma-ltr-property-mixin {
  margin-left: 1rem;
  border-radius: 0.25em;
}
```

--------------------------------

### Navbar Tab Active Background Color Sass Variable

Source: https://bulma.io/documentation/components/navbar

Defines the background color for an active navbar tab. This Sass variable corresponds to a CSS variable for active states.

```sass
$navbar-tab-active-background-color
```

--------------------------------

### Primary Color Hero Banner

Source: https://bulma.io/documentation/layout/hero

Applies the 'is-primary' color to the hero banner. This is one of the 8 available color options.

```html
<section class="hero is-primary">
  <div class="hero-body">
    <p class="title">Primary hero</p>
    <p class="subtitle">Primary subtitle</p>
  </div>
</section>
```

--------------------------------

### Right-Aligned Dropdown in Navbar

Source: https://bulma.io/documentation/components/navbar

Use the `is-right` modifier on a `navbar-dropdown` to align it to the right within a `navbar-item`.

```html
<div class="navbar-dropdown is-right">
  <!-- navbar-item, navbar-divider etc. -->
</div>
```

--------------------------------

### Navbar Background Color Sass Variable

Source: https://bulma.io/documentation/components/navbar

This Sass variable controls the background color of the navbar. It maps to a CSS variable for theming.

```sass
$navbar-background-color
```

--------------------------------

### Danger Color Hero Banner

Source: https://bulma.io/documentation/layout/hero

Applies the 'is-danger' color to the hero banner. This is one of the 8 available color options.

```html
<section class="hero is-danger">
  <div class="hero-body">
    <p class="title">Danger hero</p>
    <p class="subtitle">Danger subtitle</p>
  </div>
</section>
```

--------------------------------

### Disable Form Elements with Fieldset

Source: https://bulma.io/documentation/form/general

Wrap form controls within a fieldset element and apply the 'disabled' attribute to disable all input elements within it. This is useful for temporarily disabling a section of a form.

```html
<fieldset disabled>
  
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="e.g Alex Smith">
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
  </div>
</div>

</fieldset>
```

--------------------------------

### Navbar Tab Active Color Sass Variable

Source: https://bulma.io/documentation/components/navbar

Sets the text color for an active navbar tab. This variable is mapped to a CSS variable for active state styling.

```sass
$navbar-tab-active-color
```

--------------------------------

### Navbar Fixed Z-Index Sass Variable

Source: https://bulma.io/documentation/components/navbar

Determines the z-index for fixed position navbars. This Sass variable is linked to a CSS variable for stacking context.

```sass
$navbar-fixed-z
```

--------------------------------

### Navbar Divider Height Sass Variable

Source: https://bulma.io/documentation/components/navbar

Controls the height of the dividers within the navbar. This Sass variable corresponds to a CSS variable for thickness.

```sass
$navbar-divider-height
```

--------------------------------

### Navbar Dropdown Item without Arrow

Source: https://bulma.io/documentation/components/navbar

Remove the default arrow from dropdown links by applying the `is-arrowless` modifier to the `navbar-link`.

```html
<div class="navbar-item has-dropdown is-hoverable">
  <a class="navbar-link is-arrowless">
    Docs
  </a>
  <!-- navbar-dropdowns -->
</div>
```