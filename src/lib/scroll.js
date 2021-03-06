let _scrolljsObj = {}

import { browser } from '$app/env';

if (browser) {
    _scrolljsObj.init = () => {
        _scrolljsObj.parts = document.querySelectorAll('.scrolljs')
        _scrolljsObj.num = window.innerHeight / 100
        window.addEventListener('scroll', _scrolljsObj.scroll_function)
        // Run scroll_function twice to ensure current animation prgress is calulated
        _scrolljsObj.scroll_function()
        _scrolljsObj.scroll_function()
    }

    _scrolljsObj.mutationInit = () => {
        _scrolljsObj.init()
        const observer = new MutationObserver(() => {
            _scrolljsObj.init()
        });
        observer.observe(document.body, { childList: true });

    }

    let timer = null;
    window.addEventListener('scroll', function () {
        if (timer !== null) {
            clearTimeout(timer)
        }
        timer = setTimeout(function () {
            _scrolljsObj.scroll_function();
        }, 150)
    }, false)

    // Deal with resizes
    window.addEventListener('resize', () => {
        _scrolljsObj.num = window.innerHeight / 100
    })

    _scrolljsObj.scroll_function = () => {
        for (var x of _scrolljsObj.parts) {
            let range = x.getAttribute('data-range').split('to')
            // if... then determines if animation should currently run
            if (window.pageYOffset > range[0] * _scrolljsObj.num &&
                window.pageYOffset < range[1] * _scrolljsObj.num) {
                // Calculate current progress through animation
                let fraction = (window.pageYOffset - range[0] * _scrolljsObj.num) / (range[1] * _scrolljsObj.num - range[0] * _scrolljsObj.num)

                x.style.animationDelay = '-' + fraction.toString() + 's'
            } else {
                // Even if the item is not in view, ensure it is calculated
                if (window.pageYOffset > range[0] * _scrolljsObj.num) {
                    // Code here is executed if the page has scrolled after the element
                    x.style.animationDelay = '-0.999s'
                } else {
                    // Code here is executed if the page has not yet scrolled to the element
                    x.style.animationDelay = '0s'
                }
            }
        }
    }

}

export default _scrolljsObj
