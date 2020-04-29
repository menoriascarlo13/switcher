# Switcher
A javascript function that will switch different image source or background source for a single breakpoint or device width.

## Install
Download the js file or pull it on your local folder. Add it on your script folder and declare it on your main script file.

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
<pre>
  <code>&lt;div class='js-switcher'&gt;&lt;/div&gt;</code>
</pre>

## Options
the init function have 2 parameter, onresize and debounceTimer

1. onresize (bolean) - trigger the switcher when the window has been resize. The default value is true.
2. debounceTimer (number) - trigger the switcher after a certain seconds after the window has been resize. The value is represented on millisecond. The default value is 500(ms).

<pre>
  <code>
    window.addEventListener('load', function () {
      switcher.init(false, 1000);
    });
  </code>
</pre>

### Datasets
1. data-breakpoint - by adding this dataset, it will detect the breakpoint on when to switch the image source of your element. Its value will be represented on pixel.
<pre>
  <code>&lt;img class='js-switcher' data-breakpoint='900'&gt;</code>
</pre>
<pre>
  <code>&lt;div class='js-switcher' data-breakpoint='900'&gt;&lt;/div&gt;</code>
</pre>

</br>

2. data-largeImage - this dataset will be the image source greater than the value of breakpoint.
<pre>
  <code>&lt;img class='js-switcher' data-breakpoint='900' data-largeImage='image/desktop.png'&gt;</code>
</pre>
<pre>
  <code>&lt;div class='js-switcher' data-breakpoint='900' data-largeImage='image/desktop.png'&gt;&lt;/div&gt;</code>
</pre>

</br>

3. data-smallImage - this dataset will be the image source less than the value of breakpoint.
<pre>
  <code>&lt;img class='js-switcher' data-breakpoint='900' data-largeImage='image/desktop.png' data-smallImage='image/mobile.png'&gt;</code>
</pre>
<pre>
  <code>&lt;div class='js-switcher' data-breakpoint='900' data-largeImage='image/desktop.png' data-smallImage='image/mobile.png'&gt;&lt;/div&gt;</code>
</pre>
