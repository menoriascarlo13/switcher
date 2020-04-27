# Switcher
A javscript function that switch different image source or background source for different breakpoints or device.

## Install
Download the file or pull it on your local folder and then include manually the file on your main javascript file.

## Usage
Switcher works by initializing it and then adding the .js-switcher class on your element and its custom dataset.

### Initialize
<pre>
  window.addEventListener('load', function () {
    switcher.init();
  });
</pre>

### For element
<pre>
  <code>&lt;img class='js-switcher'&gt;</code>
</pre>

## Options
### Datasets
1. data-breakpoint - by adding this dataset, it will detect the breakpoint when to switch the image source of your element.
<pre>
  <code>&lt;img class='js-switcher' data-breakpoint='900' &gt;</code>
</pre>
