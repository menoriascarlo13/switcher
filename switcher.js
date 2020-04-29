let switcher = {}
const targetClass = 'js-switcher',
    debounceTimer = 500;

//credit to underscore
//https://davidwalsh.name/function-debounce
switcher.debounce = function (func, wait, immediate) {
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

switcher.init = function (resize, debounceTimer) {
    if (typeof resize === 'undefined') resize = true;
    if (typeof debounceTimer === 'undefined') debounceTimer = 500;

    switcher.process();

    if (resize) {
        window.addEventListener('resize', switcher.debounce(function () {
            switcher.process();
        }, debounceTimer));
    }
}

switcher.process = function () {
    let ele = document.getElementsByClassName(targetClass);
    if (!ele) return
    for (let i = 0; i < ele.length; i++) {
        if (!ele[i]) return
        switcher.detect(ele[i], ele[i].tagName.toLowerCase());
    }
}

switcher.detect = function (ele, eleTag) {
    let isSrc = (window.innerWidth < ele.dataset.breakpoint) ? ele.dataset.smallimage : ele.dataset.largeimage;
    if (eleTag === 'img') {
        (switcher.detectIE()) ? ele.setAttribute('src', switcher.parseSet(isSrc)) : ele.setAttribute('srcset', isSrc);
    } else {
        ele.style.backgroundImage = 'url(' + isSrc + ')';
    }
}

switcher.parseSet = function(e) {
    return e.split(',')[0].split(' ')[0];
}

switcher.detectIE = function () {
    let ua = window.navigator.userAgent;

    let msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    let trident = ua.indexOf('Trident/');
    if (trident > 0) {
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    let edge = ua.indexOf('Edge/');
    if (edge > 0) {
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    return false;
}