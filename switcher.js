let switcher = {}
const targetClass = 'js-switcher',
    debounceTimer = 500,
    imgTag = 'img',
    divTag = 'div';

//credit to underscore
//https://davidwalsh.name/function-debounce
switcher.debounce = (func, wait, immediate) => {
    let timeout;
    return function () {
        let context = this,
            args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

switcher.init = (resize = true) => {
    let ele = document.getElementsByClassName(targetClass);
    if (!ele) return
    for (let i = 0; i < ele.length; i++) {
        if (!ele[i]) return
        switcher.detect(ele[i], ele[i].tagName.toLowerCase());

        if( resize ) {
            window.addEventListener('resize', switcher.debounce(() => {
                switcher.detect(ele[i], ele[i].tagName.toLowerCase());
            }, debounceTimer));
        }
    }
}

switcher.detect = (ele, eleTag) => {
    if (eleTag === imgTag) ele.srcset = (window.innerWidth < ele.dataset.breakpoint) ? ele.dataset.smallimage : ele.dataset.largeimage;
    if (eleTag === divTag) {
        let isSrc = (window.innerWidth < ele.dataset.breakpoint) ? ele.dataset.smallimage : ele.dataset.largeimage;
        ele.style.backgroundImage = 'url(' + isSrc + ')';
    }
}