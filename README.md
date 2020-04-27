# Switcher
A javascript function that will switch different image source or background source for a single breakpoint or device width.

## Install
Download the file or pull it on your local folder. Add it on your script folder and declare it on your main script file.

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
1. data-breakpoint - by adding this dataset, it will detect the breakpoint on when to switch the image source of your element. Its value will be represented on pixel.
<pre>
  <code>&lt;img class='js-switcher' data-breakpoint='900' &gt;</code>
</pre>

2. data-largeImage - this dataset will be the image source greater than the value on breakpoint.
<pre>
  <code>&lt;img class='js-switcher' data-breakpoint='900' data-largeImage='image/desktop.png' &gt;</code>
</pre>
